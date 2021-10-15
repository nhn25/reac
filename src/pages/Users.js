import React from 'react'
import {Link} from 'react-router-dom'

const Users = () => {
return (
    <div>
        <h3>hola desde users</h3>
        <ul>
            <li>
                <Link to='/home'>Home</Link>
            </li>
            <li>
                <Link to='/post'>Post</Link>
            </li>
            <li>
                <Link to='/login'>Login</Link>
            </li>
        </ul>
    </div>
)

}

export default Users