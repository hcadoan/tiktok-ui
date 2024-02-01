import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function AccountItem() {
  return (
    <div className={cx('wrapper')}>
      <img
        className={cx('avatar')}
        src="https://p16-sign-sg.tiktokcdn.com/tos-alisg-avt-0068/fd29143b95b5b5a49a5e873116fbe23b~c5_300x300.webp?lk3s=a5d48078&x-expires=1706860800&x-signature=2NE3frnfmEUTdPvGheJRwynJlII%3D"
        alt="avatarAccount"
      />
      <div className={cx('info')}>
        <p className={cx('name')}>
          <span>Nguyen Van C</span>
          <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle} />
        </p>
        <span className={cx('username')}>nguyenvanc</span>
      </div>
    </div>
  );
}

export default AccountItem;
