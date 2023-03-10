import React from 'react'
import { useLocation } from 'react-router-dom';
import useAxios from '../../app/hooks/useAxios';
import Loading from '../share/loading';

const SingleProduct = () => {
    const location = useLocation();
    const { id, category } = location.state;
    const { data, loading } = useAxios(`/products/category/${category}/${id}`);
    if(loading){
        return <Loading />
    }

  return (
    <div>
        {data.product && (
            <>
            <h1>{data.product?.name}</h1>
            <h1>{data.product?.price} $</h1>
            </>
        )}
    </div>
  );
};

export default SingleProduct