import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styles from "../../styles/Home.module.css";

const fetchURL = async () => {
  const res = await fetch('https://dare2solve.com/');
  return res.json();
}

export default function Posts() {

  const router = useRouter();
  const id = router.query.post;
  const myPost = gql`
    query MyQuery($id: ID = "${id}") {
      post(id: $id) {
        title
        content
      }
    }`


  const { error, loading, data } = useQuery(myPost);
  if (error) return <div className={styles.error}><h1 className="text-center text-xl font-bold">Something went wrong.</h1></div>
  if (loading) return <div className={styles.loading}><div className="flex items-center justify-center space-x-2 animate-pulse pt-20">
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
  </div></div>

  return (
    <div>
      <div className="max-w-4xl mx-auto my-8 px-4">
        <h1 className="font-bold md:text-3xl text-2xl" dangerouslySetInnerHTML={{ __html: data.post.title }}></h1>
        <div dangerouslySetInnerHTML={{ __html: data.post.content }} />
      </div>
    </div>
  );
}