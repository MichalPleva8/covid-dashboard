import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Result, Row } from 'antd';

function Error() {
  return (
	<Row justify='center' align='middle' style={{ height: '80vh', width: '100%' }}>
		<Col>
			<Result
			  status="404"
			  title="404"
			  subTitle="Táto podstránka neexistuje!"
			  extra={<Link to="/"><Button type="primary">Späť domov</Button></Link>}
			/>
		</Col>
	</Row>
  )
}

export default Error