import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import images from '~/assets/images';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';

import { Wrapper as PropperWrapper } from '~/components/Popper';
import AccountItem from '~/components/AccountItem';

const cx = classNames.bind(styles);

function Header() {
  const [searchResuilt, setSearchResuilt] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setSearchResuilt([1, 2, 3]);
    }, 0);
  });

  return (
    <header className={cx('wrapper')}>
      <div className={cx('inner')}>
        <div className={cx('logo')}>
          <img src={images.logo} alt="tiktok" />
        </div>

        <Tippy
          interactive
          visible={searchResuilt.length > 0}
          render={(attrs) => (
            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
              <PropperWrapper>
                <h4 className={cx('search-title')}>Tài khoản</h4>
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
                <AccountItem />
              </PropperWrapper>
            </div>
          )}
        >
          {/* search */}
          <div className={cx('search')}>
            <input placeholder="Tìm kiếm" spellCheck={false} />
            <button className={cx('clear')}>
              <FontAwesomeIcon icon={faCircleXmark} />
            </button>
            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
            <button className={cx('search-icon')}>
              <FontAwesomeIcon className={cx('icon')} icon={faMagnifyingGlass} />
            </button>
          </div>
        </Tippy>
        {/* option */}
        <div className={cx('option')}>option</div>
      </div>
    </header>
  );
}

export default Header;
