
import ChangeQuantity from "../Cart/ChangeQuantity";
import {addItemToCart,getCartItems,updateQuantity} from "../../Redux/cartSlice";
import { useState } from "react";
import { useDispatch,useSelector } from "react-redux";

const Dish =({dish})=>{
    const [quantity,setQuantity] = useState(1);
    const dispatch =useDispatch();


//    add to

const cartItems=useSelector(getCartItems)
const dishInCart =cartItems.some(item=> item.id ===dish.id)

const handleClick =()=>{
    dishInCart
    ?dispatch(updateQuantity({dish,quantity}))
    :dispatch(addItemToCart({dish,quantity}))
}

    return(<div>
        <img src={`${dish.img}.jpg`} alt="dish"/>
        <h2>{dish.name}</h2>
        <p>${dish.price}</p>
        <ChangeQuantity quantity={quantity} setQuantity={setQuantity}/>
        {/* <button onClick={() => {dispatch(addItemToCart({dish,quantity}));
    }}>ADD TO CART</button> */}
        <button onClick={handleClick} >ADD TO CART</button>

    </div>)
}
export default Dish;