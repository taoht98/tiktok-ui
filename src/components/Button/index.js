import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles);

export default function Button({
  to,
  href,
  primary,
  outline,
  small,
  large,
  text,
  disabled,
  rounded,
  children,
  className,
  leftIcon,
  rightIcon,
  onClick,
  ...passProps
}) {
  const classes = cx('wrapper', { [className]: className, primary, outline, small, large, text, disabled, rounded });
  let Comp = 'button';
  const props = { onClick, ...passProps };

  // remove event listener when button disabled
  if (disabled) {
    Object.keys(props).forEach((key) => {
      if (key.startsWith('on') && typeof (props[key] === 'function')) delete props[key];
    });
  }

  if (to) {
    props.to = to;
    Comp = Link;
  } else if (href) {
    props.href = href;
    Comp = 'a';
  }

  return (
    <Comp className={classes} {...props}>
      {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
      <span className={cx('title')}>{children}</span>
      {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
    </Comp>
  );
}
