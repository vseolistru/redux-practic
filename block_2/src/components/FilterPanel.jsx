import {useDispatch, useSelector} from 'react-redux'
import {selectFilters} from "../store/filters/filter-selector";
import {removeFilter, clear_filter} from "../store/filters/filter-actions";
import { Badge } from '../UI/Badge';
import { Card } from '../UI/Card';
import { Stack } from '../UI/Stack';


const FilterPanel = () => {
    const dispatch = useDispatch();
    const currentFilters = useSelector(selectFilters)
    if(currentFilters.length === 0) {
        return null;
    }

    return (
        <Card className="filter-panel">
            <div className="filter-panel-wrapper">
                <Stack>
                    {currentFilters.map((item)  => (
                        <Badge
                            key={item}
                            variant="clearable"
                            onClick={()=>dispatch(removeFilter(item))}
                        >
                            {item}
                        </Badge>
                  ))}
                </Stack>

                <button
                    className='link'
                    onClick={()=>dispatch(clear_filter)}>Clear</button>
            </div>
        </Card>
    )
}

export {FilterPanel};