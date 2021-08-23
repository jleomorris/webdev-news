import Link from "next/link";
import { useRouter } from "next/router";

// Passed in prop must match returned prop from getProps function below
const Article = ({ article }) => {
  // Can use router to form dynamic content based on route
  // const router = useRouter();
  // const { id } = router.query;

  return (
    <>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go back</Link>
    </>
  );
};

// Fetches on each click of an article
export const getServerSideProps = async (context) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
  );

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export default Article;
