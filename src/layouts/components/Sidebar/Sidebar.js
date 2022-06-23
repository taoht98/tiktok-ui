import classNames from 'classnames/bind';
import styles from './Sidebar.module.scss';
import config from '~/config';
import Menu, { MenuItem } from '~/layouts/components/Sidebar/Menu';
import { HomeIcon, UserGroupIcon, LiveIcon } from '~/components/Icons';

const cx = classNames.bind(styles);

export default function Sidebar() {
  return (
    <aside className={cx('wrapper')}>
      <Menu>
        <MenuItem title="For you" to={config.routes.home} icon={<HomeIcon />} />
        <MenuItem title="Following" to={config.routes.following} icon={<UserGroupIcon />} />
        <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} />
      </Menu>
    </aside>
  );
}
