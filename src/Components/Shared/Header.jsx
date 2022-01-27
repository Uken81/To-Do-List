import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { logout } from '../../Features/user';

const Header = () => {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const userLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="header">
      <p className="user-name">{user.userName}</p>
      <p>{user.email}</p>
      <Button onClick={userLogout}>Sign Out</Button>
      <h1>To-Do List 3000</h1>
    </div>
  );
};

export default Header;
