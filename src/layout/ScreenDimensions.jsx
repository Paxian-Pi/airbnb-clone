import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { getDimensions } from '../app/appSlice'

const ScreenDimensions = ({ children }) => {

    const {windowDimension} = useSelector(state => state.app.value)
    
    // console.log(windowDimension)

    const dispatch = useDispatch()
    
    // const [windowDimenion, getHeigthWidth] = useState({
    //     winWidth: window.innerWidth,
    //     winHeight: window.innerHeight,
    // })

    const setDimensions = () => {
        dispatch(getDimensions({
            winWidth: window.innerWidth,
            winHeight: window.innerHeight,
        }))
    }
    
    useEffect(() => {
        window.addEventListener('resize', setDimensions)
        
        return () => {
            window.removeEventListener('resize', setDimensions)
        }
    }, [windowDimension])

    return (
        <div>{children}</div>
    )
}

export default ScreenDimensions