import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { filterData, filters } from '../data/dataJson'
import { useSelector } from 'react-redux'
import Image from '../assets/11.webp'


const Main = () => {

    const { windowDimension } = useSelector(state => state.app.value)

    const [selectedFilter, setSelectedFilter] = useState('')

    console.log(selectedFilter)
    
    return (
        <div>
            <div className='mr-auto ml-auto mb-3 horizontal-line' />

            <div className='container-fluid'>
                <div className='sticky-style container-fluid mb-3'>
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
                                    className={windowDimension.winWidth <= 1366 ? 'ml-3 mr-3' : 'ml-auto mr-auto'}
                                >
                                    <div
                                        style={{ cursor: 'pointer' }}
                                        onClick={() => setSelectedFilter(filter.title)}
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

            </div>

        </div>
    )
}

export default Main