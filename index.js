import React from 'react'
import { render } from 'react-dom'
import Login from './components/Statefull/Login'


window.React = React
render(
    <Login />,
    document.getElementById('root')
)
