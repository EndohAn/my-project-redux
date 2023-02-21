
import Dish from './Dish';
import dataDishes from '../../data/dataDishes';
const Dishes =()=>{
    return(<div>
        {dataDishes.map(element => <Dish propsDish ={element}/>)}
        </div>        
)}
export default Dishes;