import * as React from 'react';
import {
  BrowserRouter, Navigate, Route, Routes,
} from 'react-router-dom';
// eslint-disable-next-line import/no-extraneous-dependencies
import { IndexRouteProps, LayoutRouteProps, PathRouteProps } from 'react-router';
import { Col, Layout, Row } from 'antd';
import { Content } from 'antd/es/layout/layout';
import TokenStorage from './backend/token';
import Auth from './pages/Auth';
import Main from './pages/Main';
import Courses from './pages/Courses';

export function renderRestrictedRoute(
  props: (PathRouteProps | LayoutRouteProps | IndexRouteProps) & {path: string},
) {
  if (TokenStorage.getToken() !== '') {
    // eslint-disable-next-line react/jsx-props-no-spreading
    return <Route {...props} />;
  }
  return (
    <Route path={props.path} element={<Navigate to="/login" />} />
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <Layout style={{ height: '100vh', background: 'white' }}>
        <Content style={{ height: '100%' }}>
          <Row style={{ height: '100%' }}>
            <Col span={24} style={{ padding: '30px' }}>
              <Routes>
                <Route path="/login" element={<Auth />} />
                {renderRestrictedRoute({ path: '/', element: <Main /> })}
                {renderRestrictedRoute({ path: '/courses', element: <Courses /> })}
              </Routes>
            </Col>
          </Row>
        </Content>
      </Layout>
    </BrowserRouter>
  );
}
