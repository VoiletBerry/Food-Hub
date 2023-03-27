import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../ReduxStore/cartSlice";
import CartItem from "./CartItem";

const Cart = () => {
  const dispatch = useDispatch();

  const HandleClearCart = () => {
    dispatch(clearCart());
  };

  const cartItems = useSelector((store) => store.cart.items);

  console.log(cartItems);

  return (
    <>
      <button
        className="m-2 p-2 bg-green-100"
        onClick={() => HandleClearCart()}
      >
        Clear Cart
      </button>
      <div className="flex flex-wrap">
        {cartItems.map((item) => (
          <CartItem key={item.id} items={item} />
        ))}
      </div>
    </>
  );
};

export default Cart;
