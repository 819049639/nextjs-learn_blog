/*
 * @Date: 2021-02-04 16:38:00
 * @LastEditors: wangqiang@feewee.cn
 * @LastEditTime: 2021-02-04 16:39:24
 */
import { parseISO, format } from 'date-fns';

export default function Date({ dateString }) {
  const date = parseISO(dateString);
  return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
}