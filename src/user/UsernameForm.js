import { Link } from "react-router-dom";

export default function UserForm(){
    return(  
        <div class="container-xl">
    <div class="table-responsive">
            
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">

            <Link to="/user/create" class="text-light btn btn-primary">Add new User </Link>
            
        </div>

        <br></br>

        <div class="table-wrapper">

            <table class="table table-striped table-hover table-bordered">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Fist Name <i class="fa fa-sort"></i></th>
                        <th>Last Name <i class="fa fa-sort"></i></th>
                        <th>Email</th>
                        <th>Password <i class="fa fa-sort"></i></th>
                        <th>Role</th>
                        <th>Creation Date<i class="fa fa-sort"></i></th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Jose</td>
                        <td>Manzano</td>
                        <td>jose@manzano.com</td>
                        <td>ds8fds98s8sd</td>
                        <td>Admin</td>
                        <td>01/20/2026</td>
                        <td>
                            <a href="/user/view/1" className="btn btn-info btn-sm">View</a>
                            <a href="/user/edit/1" className="btn btn-warning btn-sm">Edit</a>
                            <a href="/user" className="btn btn-danger btn-sm">Delete</a>
                        </td>
                    </tr>
       
                </tbody>
            </table>
            
        </div>
    </div>  
</div>   

     )
}