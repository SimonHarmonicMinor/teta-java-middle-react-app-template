import * as React from 'react';
import {
  Button, Col, Form, Input, Row,
} from 'antd';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import authorizeUser from '../backend/user';

export default function Auth() {
  const onFinish = ({ login, password }: {login: string; password: string}) => {
    authorizeUser(login, password);
  };

  return (
    <Row style={{ height: '100%' }} align="middle" justify="space-around">
      <Col span={8}>
        <Form
          initialValues={{
            login: '',
            password: '',
          }}
          onFinish={onFinish}
        >
          <Form.Item
            name="login"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите логин',
              },
            ]}
          >
            <Input prefix={<UserOutlined />} placeholder="Логин" />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Пожалуйста, введите пароль',
              },
            ]}
          >
            <Input
              prefix={<LockOutlined />}
              type="password"
              placeholder="пароль"
            />
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Войти
            </Button>
          </Form.Item>
        </Form>
      </Col>
    </Row>
  );
}
