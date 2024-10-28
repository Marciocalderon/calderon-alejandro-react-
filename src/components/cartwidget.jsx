import cart from '../assets/cart.svg';

function CartWidget() {
  return (
    <div className="cartWidget">
      <button>
        <img className='cartWidget_img' src= {cart} alt="Carrito"></img>
        <span>5</span> 
      </button>
    </div>
  );
}

export default CartWidget;
