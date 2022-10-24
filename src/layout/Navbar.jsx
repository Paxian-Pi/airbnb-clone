import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/airbnb-logo.png'
import noImage from '../assets/no-image.png'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { setSelectedFilter } from '../app/appSlice'


const Navbar = () => {

    const dispatch = useDispatch()
    
    return (
        <nav className='sticky-top navbar navbar-expand-sm navbar-dark bg-white elevation'>
            <div className='container-fluid ml-1 mr-1'>

                <Link
                    to={'/'} className="navbar-brand position-relative"
                    onClick={() => dispatch(setSelectedFilter('Shared homes'))}
                >
                    <img src={logo} alt='connect' width='150px' />
                </Link>

                <div className="shadow-sm form-control position-relative"
                    style={{
                        height: '48px',
                        width: '30rem',
                        borderRadius: '48px',
                        cursor: 'pointer',
                    }}
                >
                    <div className='row mt-1'>
                        <div className='col-md-3 ml-auto mr-auto'>
                            <p>Anywhere</p>
                        </div>

                        <div className="verticalLine"></div>

                        <div className='col-md-3 ml-auto mr-auto'>
                            <p>Any Week</p>
                        </div>

                        <div className="verticalLine"></div>

                        <div className='col-md-4 ml-auto mr-auto txt-light'>
                            <div className='container-fluid'>
                                <div className='row'>
                                    <p className='mr-auto'>Add Guests</p>
                                    <span><i className="fs-4 bi-search search-btn text-white"></i></span>

                                    {/* <div
                                        // className='mt-1'
                                        style={{
                                            height: '48px',
                                            width: '3rem',
                                            position: 'relative',
                                            bottom: 10,
                                            borderRadius: '30px',
                                            backgroundColor: '#fc4424'
                                        }}
                                    >
                                        <i className="fs-4 bi-search text-white" style={{ position: 'relative', top: 10 }}></i>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>



                <div className='row position-relative mr-3'>

                    <div className='mr-3 mt-1 btn button-style text-dark'>
                        <p className='mt-1'>Become a Host</p>
                    </div>

                    <div className='mr-3 mt-1 btn button-style text-dark'>
                        <i className="fs-4 bi-globe text-dark"></i>
                    </div>

                    <div className="form-control mt-1"
                        style={{
                            height: '45px',
                            width: '5rem',
                            borderRadius: '50px',
                            cursor: 'pointer',
                        }}
                    >
                        <i className="fs-4 bi-list text-dark mr-2 " ></i>
                        <span>
                            <img
                                className='rounded-circle ml-auto'
                                src={noImage}
                                alt='profile image'
                                style={{ width: '30px' }}
                                title='Profile Image'
                            />
                        </span>
                    </div>
                </div>

            </div>

            <div className='mr-auto ml-auto mb-3 horizontal-line' />
        </nav>

    )
}

export default Navbar