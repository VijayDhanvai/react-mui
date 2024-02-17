import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import products from '../data';
import CompositionChart from '../components/CompositionChart';
import PieChart from '../components/PieChart';
import GaugeChart from '../components/GaugeChart';
import SparkLineChart from '../components/SparkLineChart';
import StackOrderModified from '../components/StackOrderModified';

const Products = () => {
  return (
    <section>
      <h2>Products</h2>
      <StackOrderModified />

      <PieChart />
      <SparkLineChart />
      <GaugeChart />
      <CompositionChart />
      <div className="products">
        {products.map((product) => {
          return (
            <article key={product.id}>
              <h5>{product.name}</h5>
              <Link to={`/products/${product.id}`}>Mopre Info</Link>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default Products;
