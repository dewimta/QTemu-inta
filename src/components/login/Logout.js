import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from '../feature/userSlice';
import { Button } from 'react-bootstrap';

export default function Logout () {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);

    const handleLogout = (e) => {
        e.preventDefault()

        dispatch(logout());
    }
    
    return(
        <div>
            <br />
            <h5>Hello and welcome <b><span className="user__name">{user.name}</span></b>!!</h5>
            <p>I hope you enjoy my app so far:-) What do you think?<br />Let me know at dewinta.dyah@ui.ac.id</p>
            <br />
            <Button className="logout__button" onClick={(e) => handleLogout(e)}>Log out</Button>
        </div>
    )
}