import * as React from 'react';
import { Table } from 'antd';

interface Course {
  id: number;
  title: string;
}

const coursesList: Course[] = [
  { id: 1, title: 'Java для начинающих' },
  { id: 2, title: 'Spring Advanced' },
  { id: 3, title: 'React in Action' },
  { id: 4, title: 'Kubernetes для продвинутых' },
  { id: 5, title: 'NoSQL хранилища' },
];

export default function Courses() {
  return (
    <Table dataSource={coursesList}>
      <Table.Column dataIndex="id" title="ID" />
      <Table.Column dataIndex="title" title="Название" />
    </Table>
  );
}
