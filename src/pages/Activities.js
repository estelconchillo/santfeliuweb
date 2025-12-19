import { useState } from 'react';
import ProductList from '../components/ProductList';
import Cart from '../components/Cart';

import './Activities.css';

function Activities() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const exists = cart.find(item => item.id === product.id);
    if (exists) {
      setCart(cart.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="Activities">
      <main className="main-layout">
        <section className="product-section">
          <ProductList onAdd={addToCart} />
        </section>
        <aside className="cart-section">
          <Cart cart={cart} onRemove={removeFromCart} />
        </aside>
      </main>
    </div>
  );
}

export default Activities;