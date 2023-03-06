import { useSelector } from "react-redux";
import { getCartItems, getTotalPrice } from "../../Redux/cartSlice";
import CartItem from'./CartItem';

const Cart =()=>{
  const cartItems =useSelector(getCartItems);
  const totalPrice=useSelector(getTotalPrice);
  
    return(<div>
      <img className="cartIcon" src="https://img.icons8.com/external-xnimrodx-lineal-color-xnimrodx/64/000000/external-shopping-cart-cyber-monday-xnimrodx-lineal-color-xnimrodx.png" alt="cartIcon"/> 
 {cartItems.map((cartItem,index)=><CartItem key={index} cartItem ={cartItem}/>)}
 <div className="cart-total">
 <h2>Total : $ {totalPrice}</h2>
 </div>
 </div>)
 
}
export default Cart;