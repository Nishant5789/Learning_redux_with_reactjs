import axios from 'axios';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { selectedProduct } from '../redux/actions/productsActions';

const ProductDetails = () => {

  const product = useSelector((state)=>state.product);
  const {id, title, price, description, category, image} = product;
  const {productId} = useParams(); 
  const dispatch = useDispatch();
  console.log(productId);

  const fetchProduct = async () => {
    const res = await axios.get(`https://fakestoreapi.com/products/${productId}`)
    .catch((err)=>{
      console.log(err);
    })
    // console.log(res.data);
    dispatch(selectedProduct(res.data));
  }

  useEffect(()=>{
    fetchProduct();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[]);
  return (
    <div className='grid grid-cols-2  bg-slate-200 m-4'>
      <div>
        <img src={image} alt="" className='p-4 h-screen' />
      </div>
      <div className='flex items-center'>
        <ul className='flex-col'>
          <li>
            <h1 className='text-2xl font-bold'>{title}</h1>
          </li>
          <li>
            <p>$ {price}</p>
          </li>
          <li>
            <h1 className='bg-slate-300'>{category}</h1>
          </li>
          <li>
            <p className='shadow-md bg-blue-500 px-4 py-4 mt-4'>{description}</p>
          </li>
          <li className='mt-4'>
            <button className='px-4 py-2 text-white bg-red-600 rounded-md'>
                Add to cart
            </button>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ProductDetails
