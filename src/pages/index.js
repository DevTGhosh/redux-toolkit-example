import React from 'react';
import Layout from '../components/layout';
import Home from './homepage';

// This page will contain your Routing info and Layout if all pages share the same layout
export default function Index() {
  return (
    <Layout>
      <Home />
    </Layout>
  );
}
