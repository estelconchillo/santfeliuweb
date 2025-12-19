import ProductCard from './ProductCard';
import products from '../data/activities.json';

import './ProductList.css';

function ProductList({ onAdd }) {
  products.sort((a,b)=>a.name.localeCompare(b.name));
  return (
    <div className="availableProducts">
      <h1>Available Activities</h1>
      <p className="introduction">Discover <b>the best experiences</b> Sant Feliu de Guíxols has to offer! 
        From thrilling water sports to peaceful coastal walks, 
        there's something for everyone. 
        Select your favorite activities and start planning your perfect adventure.</p>
      <div className="productList">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onAdd={onAdd} />
        ))}
      </div>
    </div>
  );
}

export default ProductList;

