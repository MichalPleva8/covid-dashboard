import React from 'react';
import { Result, Button } from 'antd';

function Profile({ username }) {
  return (
	<Result
	  style={{ minHeight: '90vh' }}
      title={`Vitaj, ${username}`} 
      subTitle="Na tejto podstránke dokážeš resetovať heslo v prípade že si ho zabudol."
      extra={[
        <Button type="primary" key="console">
			Resetovať heslo
        </Button>,
	  ]}
  />
  )
}

export default Profile