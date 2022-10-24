import { motion } from 'framer-motion'
import { Splide, SplideSlide } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'
import { filterData } from '../data/dataJson'
import { useSelector } from 'react-redux'
import Image from '../assets/11.webp'

const FilterData = () => {

    const { selectedFilter } = useSelector(state => state.app.value)

    return (
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
    
    )
}

export default FilterData