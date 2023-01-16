import {useEffect} from "react";
import {useDispatch} from "react-redux";
import { FilterPanel } from './components/FilterPanel';
import { JobList } from './components/JobList';
import { TheHeader } from './components/TheHeader';
import {addPositions} from './store/positions/positions-actions'
import data from '../src/mock/data.json'

function App() {
    const dispatch = useDispatch()
    useEffect(()=>{
        dispatch(addPositions(data))
    },[dispatch])

    return (
        <>
         <TheHeader />
            <div className='container'>
                <FilterPanel />
                <JobList />
            </div>
        </>
    );
}

export default App;
