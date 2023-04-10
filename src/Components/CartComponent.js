import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "./FoodItem";
import "../CSS/cart-component.css";

const CartComponent = () => {
  const cartItems = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div>
      <h1>Cart Items - {cartItems.length}</h1>
      <button onClick={() => handleClearCart()}>Clear Cart</button>
      {cartItems && (
        <div className="flex">
          {cartItems.map((item) => (
            <FoodItem key={item.payload.id} {...item.payload} />
          ))}
        </div>
      )}
    </div>
  );
};

export default CartComponent;
