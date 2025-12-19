import './Cart.css';

function Cart(props) {
  const total = props.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className='cart'>
      <h2>Cart</h2>
      {props.cart.length === 0 ? (
        <p>There are no products on the Cart.</p>
      ) : (
        <ul>
          {props.cart.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price} € x {item.quantity} = {item.price * item.quantity} €
              <button className='removeButton'
                onClick={() => props.onRemove(item.id)}
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
      <p className="total"><strong>Total:</strong> {total} €</p>
    </div>
  );
}

export default Cart;
