import { AnimatePresence } from 'framer-motion'
import { Routes, Route, useLocation } from 'react-router-dom'
import Main from '../pages/Main'

const AnimatedRoutes = () => {

    const location = useLocation()

    return (
        <AnimatePresence location={location} key={location.pathname}>
            <Routes>
                <Route exact path='/' element={<Main />} />
            </Routes>
        </AnimatePresence>
    )
}

export default AnimatedRoutes