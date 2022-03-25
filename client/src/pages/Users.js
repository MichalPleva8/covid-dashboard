import React, { useState, useEffect } from 'react';
import { apiOrigin } from 'App';
import { Table, Popconfirm, message } from 'antd';

function Users() {
	const [users, setUsers] = useState([]);

	let cancelDelete = () => {
		message.error("Deleting was canceled!");
	}

	let confirmDelete = (id) => {
		message.success("Test was successfully deleted!");
		// deleteTest(id);
	}

	// Get users
	useEffect(() => {
		fetch(`${apiOrigin}api/users`)
		  .then(raw => raw.json())
		  .then(json => setUsers(json.results))
		  .catch(error => console.error(error));
	}, [])

	const columns = [
		{
			title: 'id',
			dataIndex: 'id',
			width: 100,
		},
		{
		  title: 'Meno',
		  dataIndex: 'username',
		  sorter: (a, b) => a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0),
		},
		{
		  title: 'Email',
		  dataIndex: 'email',
		  sorter: (a, b) => a.email.toLowerCase().charCodeAt(0) - b.email.toLowerCase().charCodeAt(0),
		},
		{
		title: 'Akcie',
		dataIndex: 'actions',
		width: '200px',
		render: (text, record) => (
			<Popconfirm
			  title="Do you really want to delete this test?"
			  onConfirm={() => confirmDelete(record.key)}
			  onCancel={cancelDelete}
			  okText="Delete"
			  cancelText="Cancel"
			>
			  <a>Vymazať</a>
			</Popconfirm>
		),
		}
	];

	const data = users.map((field, index) => {
		return {
			key: `${field.id}`,
			id: index + 1,
			username: field.username,
			email: field.email,
		}
	});

	return (
		<div>
			<Table
			  loading={users.length === 0 ? true : false}
			  columns={columns}
			  dataSource={data}
			  pagination={{ pageSize: 30 }}
			//   onChange={handleChange}
			  scroll={{ x: 1300 }}
			/>
		</div>
	)
}

export default Users