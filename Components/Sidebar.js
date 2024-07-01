import Link from 'next/link';
import styles from './Sidebar.module.css';

const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logo}>Untitled UI</div>
      <nav>
        <ul>
          <li><Link href="/">Home</Link></li>
          <li><Link href="/files">All files</Link></li>
          <li><Link href="/private">Private files</Link></li>
          <li><Link href="/shared">Shared with me</Link></li>
          <li><Link href="/deleted">Deleted files</Link></li>
          <li><Link href="/design">Design</Link></li>
          <li><Link href="/notifications">Notifications</Link></li>
          <li><Link href="/settings">Settings</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
