import React from 'react'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { filters } from '../data/dataJson'
import { useSelector } from 'react-redux'
import { setSelectedFilter } from '../app/appSlice'
import { useDispatch } from 'react-redux'

const Filters = () => {

    const { windowDimension, selectedFilter } = useSelector(state => state.app.value)

    const dispatch = useDispatch()

    return (
        <div className='sticky-style container-fluid mb-3'>
            <div className='row'>
                <div className='col-md-11'>
                    <Splide
                        options={{
                            perPage: 10,
                            pagination: false
                        }}
                    >
                        {filters.map((filter) => {
                            return (
                                <SplideSlide
                                    key={filter.id}
                                    className={windowDimension.winWidth <= 1366 ? 'ml-4 mr-4' : 'ml-auto mr-auto'}
                                >
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => dispatch(setSelectedFilter(filter.title))}
                                    >
                                        <img src={filter.image} alt={filter.title} style={{ width: '30px' }} />
                                        <div><small>{filter.title}</small></div>
                                        {selectedFilter == filter.title && <div className='mr-auto ml-auto mb-2 indicator-selected' />}
                                    </div>
                                </SplideSlide>
                            )
                        })}
                    </Splide>
                </div>

                <div className="col-md-1 form-control mt-1"
                    style={{
                        height: '45px',
                        borderRadius: '10px',
                        cursor: 'pointer',
                    }}
                >
                    <div className='mt-1'>
                        <i className="fs-4 bi-filter text-dark" ></i>
                        <span className='ml-3 text-dark'>Filter</span>
                    </div>
                </div>
            </div>
        </div>
    
    )
}

export default Filters