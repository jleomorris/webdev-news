import { server } from "../../../config";
import Link from "next/link";
import { useRouter } from "next/router";
import Meta from "../../../components/Meta";
import articleStyles from "../../../styles/Article.module.css";
import { articles } from "../../../data";

// Passed in prop must match returned prop from getProps function below
const Article = ({ article }) => {
  // Can use router to form dynamic content based on route
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <div className={articleStyles.articleBody}>
        <h1>{article.title}</h1>
        <p>{article.body}</p>
        <br />
        <Link href="/">Go back</Link>
      </div>
    </>
  );
};

// Fetches at build time - faster than getServerSideProps, needs to be used with getStaticPaths
export const getStaticProps = async (context) => {
  // console.log("pages.article.[id].getStaticProps", context);

  // Cannot make calls to api in getStaticProps
  // const res = await fetch(`${server}/api/articles/${context.params.id}`);
  // const article = await res.json();

  const article = articles.filter(
    (article) => article.id === context.params.id
  )[0];

  console.log("filtered article:", article);

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();

  const ids = articles.map((article) => article.id);

  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;

// Jsonplaceholder example
// Fetches at build time - faster than getServerSideProps, needs to be used with getStaticPaths
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//   const articles = await res.json();

//   const ids = articles.map((article) => article.id);

//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     paths,
//     fallback: false,
//   };
// };

// export default Article;
