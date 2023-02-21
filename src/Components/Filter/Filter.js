import {useSelector}from 'react-redux';
import {getSelectedCategory}from '../../Redux/dishesSlice';

const Filter =({propsCategory})=>{
    const selectedCategory=useSelector(getSelectedCategory);
    return(<div>
        <p className={selectedCategory === category ? 'categoryButtonSelected categoryButton': 'categoryButton'}>{category}</p>
    </div>)
}
export default Filter;