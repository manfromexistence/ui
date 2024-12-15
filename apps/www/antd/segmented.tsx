import React from 'react';
import { Segmented } from 'antd';
import { Home, List } from 'lucide-react';

const SegmentedDemo: React.FC = () => (
  <Segmented
    vertical
    options={[
      { value: 'List', icon: <List /> },
      { value: 'Kanban', icon: <Home /> },
    ]}
  />
);

export default SegmentedDemo;