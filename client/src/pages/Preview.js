import React from 'react';
import { Tabs } from 'antd';
import DataTable from 'components/DataTable';
import Stats from 'components/Stats';

const { TabPane } = Tabs;

function Preview({ handleTabChange, users, deleteTest }) {
  return (
    <>
      <Tabs defaultActiveKey="2022" onChange={handleTabChange}>
        <TabPane tab="2020" key="2020">
        </TabPane>
        <TabPane tab="2021" key="2021">
        </TabPane>
        <TabPane tab="2022" key="2022">
        </TabPane>
      </Tabs>

      <Stats fields={users} />
      <DataTable fields={users} deleteTest={deleteTest} />
    </>
  );
} 

export default Preview;