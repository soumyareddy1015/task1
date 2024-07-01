import styles from './SecuritySettings.module.css';
import DeviceList from './DeviceList';

const SecuritySettings = () => {
  return (
    <div className={styles.security}>
      <div className={styles.overview}>
        <h3>Your account security is 90%</h3>
        <button>Review security</button>
      </div>
      <div className={styles.details}>
        <div className={styles.section}>
          <h4>Basics</h4>
          <div className={styles.item}>
            <span>Password</span>
            <span>Very secure</span>
            <button>Edit</button>
          </div>
          <div className={styles.item}>
            <span>Two-step verification</span>
            <span>Enabled</span>
            <button>Edit</button>
          </div>
        </div>
        <div className={styles.section}>
          <h4>Browsers and devices</h4>
          <DeviceList />
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;
