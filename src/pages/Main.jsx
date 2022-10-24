import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { filterData, filters } from '../data/dataJson'
import { useSelector } from 'react-redux'
import Image from '../assets/11.webp'
import { setSelectedFilter } from '../app/appSlice'
import { useDispatch } from 'react-redux'


const Main = () => {

    const { windowDimension, selectedFilter } = useSelector(state => state.app.value)

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

                <div className='row ml-3'>
                    {filterData.map(datum => {

                        if (datum.filterName == selectedFilter) {

                            return (
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1, transition: { duration: 1 } }}
                                    exit={{ opacity: 0 }}
                                    key={datum.id}
                                    className='text-left p-2'
                                >
                                    {/* <img src={Image} alt='image' style={{ borderRadius: '15px', width: '18rem', height: '17rem' }} /> */}

                                    <Splide
                                        options={{
                                            perPage: 1,
                                            pagination: true,
                                            width: '18rem'
                                        }}
                                    >
                                        {datum.image.map((filterImage) => {
                                            return (
                                                <SplideSlide key={filterImage.id}>
                                                    <img
                                                        src={filterImage.img}
                                                        alt='filter image'
                                                        style={{ borderRadius: '15px', width: '18rem', height: '17rem' }}
                                                    />
                                                </SplideSlide>
                                            )
                                        })}
                                    </Splide>

                                    <div className='font-weight-bold mt-2'>{datum.listingName}</div>
                                    <div className='txt-light'>Hosted by {datum.listingHost}</div>
                                    <div className='txt-light'>{datum.availabilityPeriod}</div>
                                    <div><span className='font-weight-bold'>{datum.costPerNight}</span> nignt</div>
                                </motion.div>
                            )
                        }
                    })}

                </div>

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