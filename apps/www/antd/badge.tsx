import React from 'react';
import { Avatar, Badge, Space } from 'antd';

const BadgeDemo: React.FC = () => (
  <Space size="middle">
    <Badge count={5}>
      <Avatar shape="square" size="large" />
    </Badge>
    <Badge count={0} showZero>
      <Avatar shape="square" size="large" />
    </Badge>
  </Space>
);

export default BadgeDemo;