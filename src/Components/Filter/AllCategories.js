import Filter from './Filter';
const AllCategories =()=>{
    return(<div>
        <h1>What kind of food do you like ?</h1>
       {['SAEFOOD','ITALIAN','APPETIZERS','SALADS','ALL'].map(category=><Filter propsCategory={category}/>)}
        
    </div>)
}
export default AllCategories;