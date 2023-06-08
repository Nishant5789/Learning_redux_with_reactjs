import ProductComponent from './ProductComponent'
import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';

const ProductListing = () => {
  const dispatch = useDispatch();
  const fetchProducts = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    .catch((error)=>{
      console.log(error);
    });
    // console.log(res.data);
    
    dispatch(setProducts(res.data));
  }

  useEffect(()=>{
    fetchProducts();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  return (
    <div>
      <ProductComponent/>
    </div>
  )
}

export default ProductListing
