import React from 'react'
import '../All_CSS/Square.css'

export default function Square(props) {

   
    




    return (
        <button onClick={props.changeIt} className='tickBox'>{props.value}</button>
    )
}
