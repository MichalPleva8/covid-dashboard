import React, { useState, useEffect } from 'react';
import { Form, Input, Button, Checkbox, Space, Row, Col, Typography } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { apiOrigin } from 'App';

let { Title } = Typography;

function Login({ setIsLogged, isAdmin }) {
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState("");

	useEffect(() => {
		let login = sessionStorage.getItem('login')
		if (login != null) {
			let username = JSON.parse(sessionStorage.getItem('login')).username;
			setIsLogged(username);
		}
	}, [])
	

  const onFinish = (values) => {
	if (values.username != "" && values.password != "") {
		let loginUrl = isAdmin ? `${apiOrigin}auth/admins/login` : `${apiOrigin}api/login`;

		fetch(loginUrl, {
			method: 'POST',
			headers: {
				'Content-type': 'application/json',
			},
			body: JSON.stringify(values)
		})
			.then(raw => raw.json())
			.then(json => {
				console.log(json)

				if (json.error === 'none') {
					setIsLogged(json.results[0].username);
					sessionStorage.setItem('login', JSON.stringify(json.results[0]));
				} else {
					setError(true)
					setErrorMessage(json.error);
				}
			})
			.catch(error => console.error(error));
	}
  };

  return (
	<Row align='middle' justify='center' style={{ height: '100vh', paddingInline: '20px'}}>
		<Form
		  name="normal_login"
		  className="login-form"
		  initialValues={{ remember: true }}
		  size="large"
		  onFinish={onFinish}
		>
		{isAdmin && <Title level={1}>Admin</Title>}
		{error && <p style={{ color: '#e00' }}>* Niekde nastala chyba ({errorMessage})!</p>}
		<Form.Item
		  name="username"
		  rules={[{ required: true, message: 'Prosím zadajte meno!' }]}
		>
			<Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Meno" />
		</Form.Item>
		<Form.Item
		  name="password"
		  rules={[{ required: true, message: 'Prosím zadajte heslo!' }]}
		>
			<Input
			  prefix={<LockOutlined className="site-form-item-icon" />}
			  type="password"
			  placeholder="Heslo"
			/>
		</Form.Item>
		<Form.Item>
			<Space>
				<Form.Item name="remember" valuePropName="checked" noStyle>
					<Checkbox>Zapametať</Checkbox>
				</Form.Item>

				{/* Add link for retrieving passwords */}
				<a className="login-form-forgot" href="">
					Zabudli ste heslo?
				</a>
			</Space>
		</Form.Item>

		<Form.Item>
			<Button type="primary" htmlType="submit" className="login-form-button">
			Log in
			</Button>
		</Form.Item>
		</Form>
	</Row>
  );
};

export default Login;
