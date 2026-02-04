import { Link } from "react-router-dom";

export default function RoleForm(){
    return(  
        <div class="container-xl">
    <div class="table-responsive">
            
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">

            <Link to="/team/create" class="text-light btn btn-primary">Add new Role </Link>
            
        </div>

        <br></br>

        <div class="table-wrapper">

            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>Id <i class="fa fa-sort"></i></th>
                        <th>Name <i class="fa fa-sort"></i></th>
                        <th>Description</th>
                        <th>Action</th>

                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jose Manzano</td>
                        <td>Backend Developer</td>
                        <td>
                            <a href="/role/view/1" className="btn btn-info btn-sm">View</a>
                            <a href="/role/edit/1" className="btn btn-warning btn-sm">Edit</a>
                            <a href="/role" className="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
       
                </tbody>
            </table>
            
        </div>
    </div>  
</div>   

     )
}