import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import TaskForm from './taskForm';
import CreateTask from './CreateTask';
import EditTask from './EditTask';
import ViewTask from './ViewTask';
import UserForm from './user/UsernameForm';
import UserCreate from './user/CreateUser';
import EditUser from './user/EditUser';
import ViewUser from './user/ViewUser';

import SignUser from './login/SignupUser';
import LoginUser from './login/LoginUser';



import './App.css';
import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";


function App() {
  return (
    <>
    <nav class="navbar navbar-dark bg-primary">
        <a class="navbar-brand" href="/">Task Manager</a>
    </nav>
    <ul class="list-group list-group-flush">
  <li class="list-group-item"><a class="navbar-brand" href="/user">Users</a></li>
  <li class="list-group-item"><a class="navbar-brand" href="/signup">Login</a></li>

    </ul>

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<TaskForm/>}> </Route>
          <Route path="/task/create" element={<CreateTask/>}> </Route>
          <Route path="/task/edit/:taskid" element={<EditTask/>}> </Route>
          <Route path="/task/view/:taskid" element={<ViewTask/>}> </Route>

          <Route path="/user" element={<UserForm/>}> </Route>
          <Route path="/user/create" element={<UserCreate/>}> </Route>
          <Route path="/user/view/1" element={<ViewUser/>}> </Route>
          <Route path="/user/edit/1" element={<EditUser/>}> </Route>
          <Route path="/signup" element={<SignUser/>}> </Route>
          <Route path="/login" element={<LoginUser/>}> </Route>

      </Routes>
    </BrowserRouter>
    
    </>);
}

export default App;
