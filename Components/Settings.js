import styles from './Settings.module.css';
import SecuritySettings from './SecuritySettings';

const Settings = () => {
  return (
    <div className={styles.settings}>
      <div className={styles.header}>
        <h2>Mia de Silva</h2>
      </div>
      <SecuritySettings />
    </div>
  );
};

export default Settings;
