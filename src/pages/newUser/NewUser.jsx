import { Link } from "react-router-dom";

import "./newUser.css";


const NewUser = () => {
    return (
        <div className="newUser">
            <h1 className="newUserTitle">New User</h1>

            <form action="" className="newUserForm">
                <div className="newUserForm">

                    <div className="newUserItem">
                        <label>Username</label>
                        <input type="text" placeholder="John" />
                    </div>

                    <div className="newUserItem">
                        <label>Full Name</label>
                        <input type="text" placeholder="John Smith" />
                    </div>

                    <div className="newUserItem">
                        <label>Email</label>
                        <input type="email" placeholder="john@gmail.com" />
                    </div>

                    <div className="newUserItem">
                        <label>Password</label>
                        <input type="password" placeholder="password" />
                    </div>

                    <div className="newUserItem">
                        <label>Phone</label>
                        <input type="text" placeholder="+ 123 456 78" />
                    </div>

                    <div className="newUserItem">
                        <label>Address</label>
                        <input type="password" placeholder="New York | USA" />
                    </div>

                    <div className="newUserItem">
                        <label>Gender</label>
                        <div className="newUserGender">
                            <input type="radio" name="gender" id="male" value="male"/>
                            <label htmlFor="Male">Male</label>

                            <input type="radio" name="gender" id="female" value="female"/>
                            <label htmlFor="Female">Female</label>

                            <input type="radio" name="others " id="other" value="other"/>
                            <label htmlFor="other">Other</label>
                        </div>
                    </div>

                    <div className="newUserItem">
                        <label>Active</label>
                        <select className="newUserSelect" name="active" id="active">
                            <option value="yes">Yes</option>
                            <option value="no">No</option>
                        </select>
                    </div>
                </div>
                <Link to="/users">
                    <button className="newUserButton">Create</button>
                </Link>
            </form>
        </div>
    )
}

export default NewUser

