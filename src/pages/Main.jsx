import React, { useEffect } from 'react'
import '@splidejs/react-splide/css'
import { useSelector } from 'react-redux'
import { setSelectedFilter } from '../app/appSlice'
import { useDispatch } from 'react-redux'
import Filters from './Filters'
import FilterData from './FilterData'


const Main = () => {

    const { selectedFilter } = useSelector(state => state.app.value)

    const dispatch = useDispatch()

    // const [selectedFilter, setSelectedFilter] = useState('')

    console.log(selectedFilter)

    useEffect(() => {
        dispatch(setSelectedFilter('Shared homes'))   /// Default filter
    }, [])
    
    return (
        <div>
            <div className='mr-auto ml-auto mb-3 horizontal-line' />
            
            <div className='container-fluid'>

                <Filters />

                <FilterData />

                <div className="form-control mt-2 showMapButton"
                    style={{
                        height: '45px',
                        width: '8rem',
                        borderRadius: '50px',
                        backgroundColor: '#000000',
                        cursor: 'pointer',
                        position: 'center'
                    }}
                >
                    <div className='mt-1'>
                        <span className='text-white'>Show Map</span>
                        <i className="ml-2 fs-4 bi-map text-white" ></i>
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Main