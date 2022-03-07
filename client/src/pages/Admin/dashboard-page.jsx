import React from 'react'
import {Admin, Resource} from 'react-admin'
// import restProvider from 'ra-data-simple-rest'
import productList from './productList'
import productCreate from './productCreate'
import categoryList from './categoryList'
import categoryCreate from './categoryCreate'

const Dashboard = () => {
  return (<Admin>
    <Resource name='products' list={productList} create={productCreate} />
    <Resource name='categories' list={categoryList} create={categoryCreate} />
  </Admin>
  )
}

export default Dashboard;

// dataProvider={restProvider('http://localhost:3000')}



