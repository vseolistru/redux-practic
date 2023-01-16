import {useSelector, useDispatch} from 'react-redux';
import {selectActiveFilter} from '../store/filters/filter-selector'
import {setFilters} from '../store/filters/filters-actions'


const Filters = () => {

    const dispatch = useDispatch()
    const activeFilters = useSelector(selectActiveFilter)

    return (
        <div>
        <button onClick={()=>dispatch(setFilters('all'))}
           style={{color: activeFilters === 'all' ? 'red' : 'black'}}>all</button>

        <button onClick={()=>dispatch(setFilters('active'))}
           style={{color: activeFilters === 'active' ? 'red' : 'black'}}>active</button>

        <button onClick={()=>dispatch(setFilters('completed'))}
           style={{color: activeFilters === 'completed' ? 'red' : 'black'}}>completed</button>
        </div>
    );
};

export default Filters;