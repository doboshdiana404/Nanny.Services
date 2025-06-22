import { signOut } from 'firebase/auth';
import { auth } from '../../firebase/firebase';

const UserMenu = ({ user }) => {
  const handleLogout = () => {
    signOut(auth);
  };

  return (
    <div>
      <span>
        <i className="fa fa-user" /> {user.email}
      </span>
      <button onClick={handleLogout}>Log out</button>
    </div>
  );
};

export default UserMenu;
