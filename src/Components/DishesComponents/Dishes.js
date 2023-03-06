
import Dish from './Dish';
import dataDishes from '../../data/dataDishes';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../Redux/dishesSlice';

const Dishes =()=>{
    const selectedCategory= useSelector(getSelectedCategory);
    return(<div className='category-block'>
        {dataDishes
        .filter(dish=>{
            if(selectedCategory==="ALL")return true;
            return selectedCategory === dish.category;
        })
        // .map((element,index) => <Dish key={index} dish ={element}/>)}
        .map((element) => <Dish key={element.id} dish ={element}/>)}
        </div>        
)}
export default Dishes;