import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';

import Layout from './Layout';
import Demo01 from './Demo01';
import Demo02 from './Demo02';
import Demo03 from './Demo03';

function render() {
  ReactDOM.render(
    <BrowserRouter>
      <Layout>
        <Route path="/demo01" component={Demo01} />
        <Route path="/demo02" component={Demo02} />
        <Route path="/demo03" component={Demo03} />
      </Layout>
    </BrowserRouter>,
    document.getElementById('root')
  )
}

render()

if (module.hot) {
  module.hot.accept(() => render())
}


