/*
 * @Date: 2021-02-04 15:32:10
 * @LastEditors: wangqiang@feewee.cn
 * @LastEditTime: 2021-02-04 15:35:43
 */
import styles from './alert.module.css';
import cn from 'classnames';

export default function Alert({ children, type }) {
  return (
    <div className={cn({
      [styles.success]: type === 'success',
      [styles.error]: type === 'error'
    })}>
      {children}
    </div>
  );
}