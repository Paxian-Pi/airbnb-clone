import React, { useState } from 'react'


const Footer = () => {

    const [isOpen, setBottomSheetState] = useState(false)
    
    const onClickHandler = () => {
        setBottomSheetState(!isOpen)
    }

    return (
        <footer className="footer bg-white text-dark text-center">
            <div className='mb-3 horizontal-line' />
            <div className='row'>
                <div className='text-left ml-5 mr-auto mb-4' style={{ height: '10px', cursor: 'pointer' }}>
                    &copy; {new Date().getFullYear()} Airbnb, Inc. · Privacy · Terms · Sitemap · Destinations
                </div>

                <div className='text-right mr-5 mb-4' style={{ height: '10px', cursor: 'pointer' }}>
                    <span><i className="fs-4 bi-globe text-dark"></i></span>
                    <span className='ml-3'>English (US)</span>
                    <span className='ml-3'>$ USD</span>
                    <span className='ml-3'>Support & resources</span>
                    <span onClick={onClickHandler}>
                        {isOpen ? <i className="ml-3 bi bi-chevron-up"></i> : <i className="ml-3 bi bi-chevron-down"></i>}
                    </span>
                </div>
            </div>
        </footer>

    )
}

export default Footer
