import React from 'react'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { changeTheme } from '../features/theme'


function Theme() {
    const dispatch = useDispatch()
    const [theme, setTheme] = useState('red')
    return (
        <div >
            <input type="text" onChange={(event) => {
                setTheme(event.target.value)

            }} />
            <button onClick={() => {
                dispatch(changeTheme(theme))
            }}>
                Color
            </button>
        </div>
    )
}

export default Theme