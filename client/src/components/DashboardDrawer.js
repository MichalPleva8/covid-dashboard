import React from 'react';
import { Button, Drawer, Space, Row, Col, Form, Input, Select, DatePicker, InputNumber } from 'antd';
import { apiOrigin } from 'App';

const { Option } = Select;

function DashboardDrawer({ closeDrawer, visible, setVisible, isLogged }) {

  let handleFinish = (values) => {
    values.dateTime = values.dateTime.format("YYYY-MM-DD");
    console.log(values);

    // Add username
    values.username = isLogged;

    fetch(apiOrigin + "api/tests", {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then(raw => raw.json())
      .then(json => {
        console.log(json);
        setVisible(false); 
      })
      .catch(error => console.error(error));
  }

  let handleFinishFailed = (error) => {
    console.error(error);
  }

  return (
      <Drawer
        title="Pridať test"
        placement="right"
        onClose={() => closeDrawer()}
        visible={visible}
      >
        <Form
          layout="vertical"
          hideRequiredMark
          onFinish={(values) => handleFinish(values)}
          onFinishFailed={(errorInfo) => handleFinishFailed(errorInfo)}
        >

            {/* <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="name"
                  label="Meno"
                  rules={[{ required: true, message: 'Prosím zadajte svoje meno' }]}
                >
                  <Input defaultValue={isLogged} placeholder="Ján Novák" />
                </Form.Item>
              </Col>
            </Row> */}

            <Row gutter={16}>
              <Col span={12}>
                <Form.Item
                  name="age"
                  label="Vek"
                  rules={[{ required: true, message: 'Prosím zadajte svoj vek' }]}
                >
                  <InputNumber style={{ width: '100%' }} min={1} max={150} placeholder="18" />
                </Form.Item>
              </Col>
              <Col span={12}>
                <Form.Item
                  name="type"
                  label="Type"
                  rules={[{ required: true, message: 'Please choose the type' }]}
                >
                  <Select placeholder="Please choose the type">
                    <Option value="ag">Ag</Option>
                    <Option value="pcr">Pcr</Option>
                  </Select>
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Form.Item
                  name="dateTime"
                  label="DateTime"
                  rules={[{ required: true, message: 'Please choose the dateTime' }]}
                >
                  {/* <DatePicker.RangePicker
                    style={{ width: '100%' }}
                    getPopupContainer={trigger => trigger.parentElement}
                  /> */}
                  <DatePicker style={{ width: '100%' }} />
                </Form.Item>
              </Col>
            </Row>

            <Row gutter={16}>
              <Col span={24}>
                <Button style={{ width: '100%' }} type='primary' htmlType='submit'>Odoslať</Button>
              </Col>
            </Row>

          </Form>
      </Drawer>
  )
}

export default DashboardDrawer;