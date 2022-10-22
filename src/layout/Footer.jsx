import React, { useState } from 'react'
import { BottomSheet } from 'react-spring-bottom-sheet'


function Footer() {
    const [open, setOpen] = useState(false)

    return (
        <footer className="bg-light text-dark p-4 text-center">
            <button onClick={() => setOpen(true)}>Open</button>
            <BottomSheet open={true}>My awesome content here</BottomSheet>
            Copyright &copy; {new Date().getFullYear()} AirBnB Clone
        </footer>
    )
}

export default Footer
