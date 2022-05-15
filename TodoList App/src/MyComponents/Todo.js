import React from 'react'

export const Todo = ({ todo, onDelete }) => {        //destructuring
    return (
        <div>
            <h4> {todo.title} </h4>
            <p> {todo.desc} </p>
            <button className='btn-sm btn-danger'
                onClick={() => onDelete(todo)}> Delete </button>
           { /*  Imp to use Arrow fn to not call Immediately    */ }
           <hr/>
           
        </div>
    )
}
