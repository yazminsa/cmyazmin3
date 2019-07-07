import * as React from 'react';
import styles from './Summary.module.scss';
import Table from '../../components/Table/Table';
import summaryHeaders from '../../resources/jsons/summaryHeaders.json';
import summaryData from '../../resources/jsons/summaryData.json';
export default (class Summary extends React.PureComponent {
	state = {};

	componentDidMount() {}

	render() {
		const headers = summaryHeaders;
		const data = summaryData[0].summary;
		data.forEach((item, j) => {
			item.total = item.sold + item.courtesies + item.promos;
		});

		return (
			<div className={styles.main}>
				{summaryData.map((data, j) => {
					data.summary.forEach((item, j) => {
						item.total = item.sold + item.courtesies + item.promos;
					});
					return (
						<div key={j}>
							<p className={styles.title}>{data.name}</p>
							<Table data={data.summary} headers={headers} />
						</div>
					);
				})}
			</div>
		);
	}
});
