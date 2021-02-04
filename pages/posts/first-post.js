/*
 * @Date: 2021-02-04 14:59:29
 * @LastEditors: wangqiang@feewee.cn
 * @LastEditTime: 2021-02-04 15:15:22
 */
import Head from 'next/head';
import Link from 'next/link';
import Layout from '../../components/layout';

export default function FirstPost() {
  return <Layout>
    <Head>
      <title>First Post</title>
    </Head>
    <main>
      <h1>First Post</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </main>
  </Layout>;
}