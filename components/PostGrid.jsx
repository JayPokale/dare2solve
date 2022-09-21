import { useQuery } from "@apollo/client";
import gql from 'graphql-tag';
import styles from "../styles/Home.module.css";
import Link from "next/link"
import Script from "next/script"
import Image from "next/image"

const fetchURL = async () => {
  const res = await fetch(process.env.NEXT_PUBLIC_GRAPHQL_API);
  return res.json();
}

const myPosts = gql`
query MyQuery($after: String) {
  posts(where: {categoryName: "math"}, first: 9, after: $after) {
    nodes {
      id
      featuredImage {
        node {
          sourceUrl
        }
      }
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}`



export default function Math() {
  const { error, loading, data, fetchMore } = useQuery(myPosts, {
    variables: { after: null }
  });

  if (error) return <div className={styles.error}><h1 className="text-center text-xl font-bold">Something went wrong...</h1></div>
  if (loading) return <div className={styles.loading}><div className="flex items-center justify-center space-x-2 animate-pulse pt-20">
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
  </div></div>

  return (
    <div>
      <div className={styles.postGrid}>
        <div className="flex flex-wrap p-4 mx-auto postsList">
          {data.posts.nodes.map(post => {
            return <div key={post.id} className="relative md:p-3 sm:p-2 p-1 w-1/3 h-auto ease-in-out duration-300">
            <div className={styles.imageHover}><Link href={`/math/${post.id}`} passHref><Image className="relative shadow-lg cursor-pointer ease-in-out duration-200" src={post.featuredImage.node.sourceUrl} alt="" width="1000" height="1000" /></Link></div>
          </div>
          })}
        </div>
        { data.posts.pageInfo.hasNextPage ? (
        <button onClick={() => {
          const { endCursor } = data.posts.pageInfo;

          fetchMore({
            variables: { after: endCursor },
            updateQuery: (prevResult, { fetchMoreResult }) => {
              fetchMoreResult.posts.nodes = [
                ...prevResult.posts.nodes,
                ...fetchMoreResult.posts.nodes,
              ];
              if (!fetchMoreResult.posts.pageInfo.hasNextPage) {
                document.getElementById('loadButton').style.display = 'none'
              }
              return fetchMoreResult;
            }
          });
        }}
          id="loadButton"
          className="flex text-white m-auto bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-300 font-medium rounded-full md:text-sm text-xs my-6 md:px-5 px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >Load More</button>
        ) : null
      }
      </div>
    </div>
  )
}