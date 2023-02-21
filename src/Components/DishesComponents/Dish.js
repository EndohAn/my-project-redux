const Dish =({propsDish})=>{
    return(<div>
        <img src={`${propsDish.img}.jpg`}/>
        <h2>{propsDish.name}</h2>
        <p>${propsDish.price}</p>
        <button></button>
        <button>ADD TO CART</button>
    </div>)
}
export default Dish;