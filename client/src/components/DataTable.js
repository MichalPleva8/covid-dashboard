import React, { useState, useEffect } from 'react'
import { Table, Space, message, Popconfirm } from 'antd'; 

function DataTable({ fields, deleteTest }) {
  const [filters, setFilters] = useState([])

  let cancelDelete = () => {
    message.error("Deleting was canceled!");
  }

  let confirmDelete = (id) => {
    message.success("Test was successfully deleted!");
    deleteTest(id);
  }

  useEffect(() => {
    let fieldsList = fields != null && fields.map(item => {
      let data = item.username;
      return {
        text: data,
        value: data 
      }
    });

    setFilters(fieldsList);
  }, [fields])

  const columns = [
    {
      title: 'id',
      dataIndex: 'id',
      width: 100,
    },
    {
      title: 'Meno',
      dataIndex: 'name',
      sorter: (a, b) => a.name.toLowerCase().charCodeAt(0) - b.name.toLowerCase().charCodeAt(0),
    },
    {
      title: 'Vek',
      dataIndex: 'age',
      sorter: {
        compare: (a, b) => a.age - b.age,
        multiple: 2,
      },
    },
    {
      title: 'Dátum',
      dataIndex: 'date',
      // sorter: (a, b) => new Date(a.date) - new Date(b.date), 
      sorter: (a, b) => {
        let frist = a.date.split(". ");
        let second = b.date.split(". ");
        let result = new Date(+frist[2], frist[1] - 1, +frist[0]) - new Date(+second[2], second[1] - 1, +second[0]);

        return result;
      }, 
    },
    {
      title: 'Typ',
      dataIndex: 'type',
      width: 150,
      filters: [
        {
          text: 'Ag',
          value: 'ag',
        },
        {
          text: 'Pcr',
          value: 'pcr',
        },
      ],
      onFilter: (value, record) => record.type.indexOf(value) === 0,
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

  const data = fields != null && fields.map((field, index) => {
    let theDate = new Date(field.date).toLocaleDateString();
    return {
      key: `${field.id}`,
      id: index + 1,
      name: field.username,
      age: field.age,
      date: theDate,
      type: field.type,
    }
  });

  let handleChange = (pagination, filters, sorter, extra) => {
    // console.log('params', pagination, filters, sorter, extra);
  }

  return (
    <Table
      loading={fields === null ? true : false}
      columns={columns}
      dataSource={data}
      pagination={{ pageSize: 30 }}
      onChange={handleChange}
      scroll={{ x: 1300 }}
    />
  );
}

export default DataTable;