import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function TaskForm(){

    //writing a promise catching the data from our server
const[tasks,setTask]=useState([]);

//writing a promise catching the data from our server
useEffect(() => {
    fetch('http://localhost:8000/task')
        .then((res) => res.json())   // ← aquí estaba el error
        .then((data) => 
            setTask(data)).catch((err)=>
                console.log(err.message))
    },[])

    
    return(

<div class="container-xl">
    <div class="table-responsive">
            
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">

            <Link to="/task/create" class="text-light btn btn-primary">Add new Task </Link>
            
        </div>

        <br></br>

        <div class="table-wrapper">

            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title <i class="fa fa-sort"></i></th>
                        <th>Description</th>
                        <th>Status <i class="fa fa-sort"></i></th>
                        <th>Team</th>
                        <th>Creation<i class="fa fa-sort"></i></th>
                        <th>Due date <i class="fa fa-sort"></i></th>
                        <th>Priority <i class="fa fa-sort"></i></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {
                      tasks &&  tasks.map((item)=>(
                    <tr>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.status}</td>
                        <td>{item.team}</td>
                        <td>{item.creation}</td>
                        <td>{item.creation_due}</td>
                        <td>{item.priority}</td>
                        <td>
                            <a href="task/view/1" className="btn btn-info btn-sm">View</a>
                            <a href="task/edit/1" className="btn btn-warning btn-sm">Edit</a>
                            <a href="/" className="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
                         ))
                    }
                </tbody>
            </table>
            
        </div>
    </div>  
</div>   
    )
}