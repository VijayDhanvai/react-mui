import React from 'react';
import { Link, useParams } from 'react-router-dom';
import products from '../data';

const SingleProduct = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === productId);
  const { image, product } = product;
  return (
    <section>
      <img src={image} alt={name} />
      <h2>{name}</h2>

      <h2>{productId}</h2>
      <Link to="/products">Back to Products</Link>
    </section>
  );
};
export default SingleProduct;
