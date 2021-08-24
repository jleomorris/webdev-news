import { server } from "../config";
// import Head from "next/head";
import Image from "next/image";
import ArticleList from "../components/ArticleList";
// import styles from '../styles/Home.module.css'
import { articles } from "../data";

export default function Home({ articles }) {
  // console.table(articles);

  return (
    <div>
      {/* <Head>
        <title>WebDev News</title>
        <meta name="keywords" content="web development, programming" />
      </Head> */}
      <ArticleList articles={articles} />
    </div>
  );
}

// Jsonplaceholder example
// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };

// Our own api example
export const getStaticProps = async () => {
  // Cannot make calls to api in getStaticProps
  // const res = await fetch(`${server}/api/articles`);
  // const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};
