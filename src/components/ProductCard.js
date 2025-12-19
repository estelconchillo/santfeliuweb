
import './ProductCard.css';

function ProductCard({ product, onAdd }) {
  return (
    <div className="productCard">
      <h3>{product.name}</h3>
      <p className='price'>{product.price} €</p>
      <p>{product.description}</p>
      <img src={product.image} alt={product.name} /> 
      <button onClick={() => onAdd(product)}>Add to the Cart</button>
    </div>
  );
}

export default ProductCard;
