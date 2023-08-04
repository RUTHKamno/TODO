import React, {useEffect, useState} from 'react'
import '../App.css'
import * as yup from 'yup';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom'
import API from '../api';

const schema = yup
.object ()
.shape({
  name: yup.string().required(),
})

export const EditTodoForm = () => {

  const navigate = useNavigate();
  const {
    register,
    control,
    setValue,
    handleSubmit,
    formState,
    watch,
    formState: {errors},
} = useForm({ resolver: yupResolver(schema)})

  const {id} = useParams();

  const [Todo, setTodo] = useState([]);

  useEffect(() => {
    if (id) {
       API.get(`todos/${id}`)
       .then(({data}) => {
        setTodo(data);
       })
       .catch(err => console.log(err));
    }
}, [id]);

const onEdit = data => {

  API.put(`todos/${id}`, data)
  .then(rep => {
    navigate('/')
  })
  .catch(err => {
      console.log(err);
  })
};

  return (
  <div className="TodoWrapper">
    <h1>UPDATE OF TODO WITH ID {id}</h1>
    <form  className="TodoForm" onSubmit={handleSubmit(onEdit)}>
    <input type="text" className="todo-input" placeholder={Todo.name} name='name' {...register('name')} />
    <button type="submit" className='todo-btn'>Click To Update Task</button>
    </form>
  </div>

  
  )
}