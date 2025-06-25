import LogOut from './LogOut';
import styles from './Header.module.css';
const UserMenu = ({ user }) => {
  return (
    <div className={styles.userMenu}>
      <span className={styles.headerUserInfo}>
        <span className={styles.iconUserWrap}>
          <svg width={24} height={24} className={styles.iconUser}>
            <use href="/sprite.svg#icon-user"></use>
          </svg>
        </span>
        <span className={styles.userName}>{user.username}</span>
      </span>
      <LogOut />
    </div>
  );
};

export default UserMenu;
