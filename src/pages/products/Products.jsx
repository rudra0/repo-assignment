import { Container } from '@material-ui/core';
import React from 'react';
import AppNavBar from '../../components/AppNavBar'
import ProductsList from './ProductsList'


function Products(props) {

  return (
    <Container>
      <AppNavBar />
      <ProductsList  />
    </Container>
  );
}

export default Products;