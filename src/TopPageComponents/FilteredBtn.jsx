import { Fragment } from "react"
import './FilteredBtn.css'



const FilteredBtn = ({category,filterItems,selectedCategory }) =>{
    return(
        <Fragment>
                
               {
                category.map((val)=>(
                    
                    <a 
                    className={`tab-btn ${selectedCategory === val ? 'active' : ''}`} 
                    key={val} 
                    onClick={() => filterItems(val)}
                  >
                    {val}
                  </a>
                    
                ))
               }


        </Fragment>
    )
}
export default FilteredBtn;