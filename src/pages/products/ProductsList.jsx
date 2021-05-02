import { Button, Grid } from '@material-ui/core';
import React, {useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadProducts } from '../../redux/actions';
import ProductCard from './ProductCard';


function ProductsList({ search }) {
  const dispatch = useDispatch()
  const [pageNo, setPageNo] = useState(1)

  const products = useSelector(store => store.products.products)
  console.log(products)
  React.useEffect(() => {
    dispatch(loadProducts())
  }, [])

  const handlePage = () => {
    setPageNo(pageNo+1)
    dispatch(loadProducts(pageNo))
  }
  
  return (
    <Grid container spacing={3}>
      {
        products?.map((product, index) => (
          <Grid item xs={12} sm={12} md={12}>
            <ProductCard 
              key={index}
              product={product}
            />
          </Grid>
        ))
      }
      <Button variant="outlined" style={{textAlign:"center", color:"orange"}} onClick={handlePage}>Next</Button>
    </Grid>
  );
}

export default ProductsList;