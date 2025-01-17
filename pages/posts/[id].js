/*
 * @Date: 2021-02-04 16:18:14
 * @LastEditors: wangqiang@feewee.cn
 * @LastEditTime: 2021-02-04 16:42:22
 */
import Head from 'next/head';
import Layout from '../../components/layout';
import Date from '../../components/date';
import { getAllPostIds, getPostData } from '../../lib/posts';
import utilStyles from '../../styles/utils.module.css';

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
      
      {/* <br />
      {postData.id}
      <br />
      
      <br /> */}
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: getAllPostIds(),
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  return {
    props: {
      postData: await getPostData(params.id)
    }
  };
}