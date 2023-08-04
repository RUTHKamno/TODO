import React, {useEffect, useState} from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import TodoWrapper from './components/TodoWrapper';
import { EditTodoForm } from "./components/EditForm";
import API from './api';
import NotFound from './NotFound';
// import { checkPost } from './components/TodoForm';

function App() {

  const [Todos, setTodo] = useState([]);
  useEffect(() => {
      API.get('todos')
      .then(({data}) => {
          setTodo(data);
      })
  }, []);

  return (
   <div className="App">
    <Routes>
      <Route path="/" element={<TodoWrapper todos = {Todos} />}></Route>
      <Route path="/updateTodo/:id" element={<EditTodoForm></EditTodoForm>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
   </div>

  );
}

export default App;