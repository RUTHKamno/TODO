import React from 'react'
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import {useForm} from 'react-hook-form';
import API from '../api';
import { useNavigate } from 'react-router-dom';

const schema = yup
.object ()
.shape({
  name: yup.string().required(),
})
// export var checkPost = 0 ;

function TodoForm() {
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

const onSubmit = data => {

  API.post('todos', data)
  .then(rep => {
    if (rep.status === 200) {
      // checkPost = checkPost + 1;
      // console.log('checkpost',checkPost);
      window.location.reload();
    };  
  })
  .catch(err => {
    console.log(err);
   });
};

  return (
    <form className="TodoForm" onSubmit={handleSubmit(onSubmit)}>
    <input type="text"   className="todo-input" placeholder='What is the task today?' name='name' {...register('name')} />
    <button type="submit" className='todo-btn'>Add Task</button>
  </form>
  )


  
}

export default TodoForm


