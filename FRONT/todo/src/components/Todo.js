import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import API from '../api';

function Todo ({Todo}) {
  const navigate = useNavigate();
  const deleteTodo = () => {
    API.delete(`todos/${Todo.id}`)
    .then(rep => {
      window.location.reload();
  })
    .catch(err => console.log(err));
  }
  const handleButtonClick = () => {
    console.log('Delete Me');
  }
  return (   
      <div className="Todo">
        <p>{Todo.name}</p>
        <div>
         <NavLink to={"/updateTodo/" +Todo.id} >
        <FontAwesomeIcon icon={faPenToSquare} className="icon" />
         </NavLink>
         {/* onClick={deleteTodo(Todo.id)} */}
         <button className='todo-btn' onClick = {deleteTodo} ><FontAwesomeIcon icon={faTrash} /></button>
        
        {/**au niveau de delete, on va fonctionner un peu comme 
         * avec redux on va utiliser l'évènement onclick puis
         * dans le callback (deleteTodo), on va passer en paramètre l'id du
         * todo 
         */}
        </div>
      </div>

  )
}

export default Todo