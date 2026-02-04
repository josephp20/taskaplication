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

// Only Team
import TeamForm from './team/TeamForm';
import CreateTeam from './team/CreateTeam';
import ViewTeam from './team/ViewTeam';
import EditTeam from './team/EditTeam';

// Only Role
import RoleForm from './role/RoleForm';
import CreateRole from './role/CreateRole';
import ViewRole from './role/ViewRole';
import EditRole from './role/EditRole';


import './App.css';
//import { FaPlus, FaTrash, FaEdit } from "react-icons/fa";


function App() {
  return (
    <>

    <nav class="navbar navbar-expand-lg navbar-dark bg-primary mb-5 py-4">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
        <a class="navbar-brand" href="/">Task Manager</a>
    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
      
      <li class="nav-item active">
        <a class="navbar-brand" href="/user">Users</a>
      </li>
      <li class="nav-item active">
        <a class="navbar-brand" href="/role">Role</a>
      </li>
      <li class="nav-item active">
        <a class="navbar-brand" href="/team">Team</a>
      </li>
      <li class="nav-item active">
        <a class="navbar-brand" href="/signup">Signup</a>
      </li>
     
      <li class="nav-item active">
        <a class="navbar-brand" href="/signup">Login</a>
      </li>
      
     
    </ul>
    
  </div>
</nav>


    <BrowserRouter>
      <Routes>

          {/* Tasks */}
          <Route path="/" element={<TaskForm/>}> </Route>
          <Route path="/task/create" element={<CreateTask/>}> </Route>
          <Route path="/task/edit/:taskid" element={<EditTask/>}> </Route>
          <Route path="/task/view/:taskid" element={<ViewTask/>}> </Route>

          {/* User */}
          <Route path="/user" element={<UserForm/>}> </Route>
          <Route path="/user/create" element={<UserCreate/>}> </Route>
          <Route path="/user/view/1" element={<ViewUser/>}> </Route>
          <Route path="/user/edit/1" element={<EditUser/>}> </Route>
          <Route path="/signup" element={<SignUser/>}> </Route>
          <Route path="/login" element={<LoginUser/>}> </Route>
          
          {/* Team */}
          <Route path="/team" element={<TeamForm/>}> </Route>
          <Route path="/team/create" element={<CreateTeam/>}> </Route>
          <Route path="/team/view/1" element={<ViewTeam/>}> </Route>
          <Route path="/team/edit/1" element={<EditTeam/>}> </Route>
         
         
          {/* Role */}
          <Route path="/role" element={<RoleForm/>}> </Route>
          <Route path="/role/create" element={<CreateRole/>}> </Route>
          <Route path="/role/view/1" element={<ViewRole/>}> </Route>
          <Route path="/role/edit/1" element={<EditRole/>}> </Route>
          

      </Routes>
    </BrowserRouter>
    
    </>);
}

export default App;
