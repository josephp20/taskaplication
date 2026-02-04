import { Link } from "react-router-dom";

export default function TaskForm(){
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
                    <tr>
                        <td>1</td>
                        <td>Frontend Sprint</td>
                        <td>Finish the layout of the website</td>
                        <td>Pending</td>
                        <td>Engineering</td>
                        <td>01/20/2026</td>
                        <td>02/20/2026</td>
                        <td>medium</td>
                        <td>
                            <a href="task/view/1" className="btn btn-info btn-sm">View</a>
                            <a href="task/edit/1" className="btn btn-warning btn-sm">Edit</a>
                            <a href="/" className="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
       
                </tbody>
            </table>
            
        </div>
    </div>  
</div>   
    )
}