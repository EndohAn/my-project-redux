import Filter from './Filter';
const AllCategories =()=>{
    return(<div className='category-block'>

        <h1>What kind of food do you like ?</h1>
        
       {['SEAFOOD','ITALIAN','APPETIZERS','SALADS','ALL'].map((category,index)=>
       <Filter key={index} category={category}/>)}
        
    </div>)
}
export default AllCategories; 