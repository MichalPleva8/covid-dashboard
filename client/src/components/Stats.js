import React from 'react'
import { Statistic, Row, Col } from 'antd';
import { ArrowUpOutlined } from '@ant-design/icons';

function Stats({ fields }) {
	let pcr = fields != null && fields.filter(value => value.type === "pcr");

	return (
		<Row gutter={16} style={{ marginBottom: '25px'}}>
			<Col span={6}>
				<Statistic title="Počet Testov" value={fields != null ? fields.length : 0} />
			</Col>
			<Col span={6}>
				<Statistic
				title="Pcr tests"
				value={(fields != null && fields.length - (fields.length - pcr.length)) * 10}
				precision={2}
				suffix="%"
				/>
			</Col>
			<Col span={6}>
				<Statistic
						title="Ag tests"
						value={fields != null && (fields.length - pcr.length) * 10}
						precision={2}
						valueStyle={{ color: '#3f8600' }}
						prefix={<ArrowUpOutlined />}
						suffix="%"
					/>
			</Col>
		</Row>
	)
}

export default Stats;