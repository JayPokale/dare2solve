import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Image from "next/image";

// const myPosts = gql`
//   query MyQuery {
//     posts(where: { categoryName: "math" }, first: 3) {
//       nodes {
//         id
//         featuredImage {
//           node {
//             sourceUrl
//           }
//         }
//       }
//     }
//   }
// `;

export default function LatestPosts(props) {
  const { error, loading, data } = {...props.props};

  if (error) {
    return (
      <>
        <h4>{error.message}</h4>
        <div className={styles.error}>
          <h1 className="text-center text-xl font-bold">
            Something went wrong.
          </h1>
        </div>
      </>
    );
  }
  if (loading)
    return (
      <div className={styles.loading}>
        <div className="flex items-center justify-center space-x-2 animate-pulse pt-20">
          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
        </div>
      </div>
    );

  return (
    <div className="my-10">
      <div className={styles.myHeading}>
        <p className="mt-3 mx-5 font-sans font-bold text-xl">Latest 3 Posts:</p>
      </div>
      <div className={styles.latestPosts}>
        <div className="flex flex-col sm:flex-row items-center p-4 mx-auto postsList">
          {data.posts.nodes.map((post) => {
            return (
              <div
                key={post.id}
                className="relative md:p-3 sm:p-2 p-1 sm:w-1/3 h-auto ease-in-out duration-300"
              >
                <div className={styles.imageHover}>
                  <Link href={`/math/${post.id}`} passHref>
                    <Image
                      className="relative shadow-lg cursor-pointer ease-in-out duration-200"
                      src={post.featuredImage.node.sourceUrl}
                      alt=""
                      width="1000"
                      height="1000"
                    />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link href={`/math`} passHref>
        <button className="flex text-white m-auto bg-pink-600 hover:bg-pink-700 focus:ring-1 focus:ring-pink-300 font-medium rounded-full md:text-sm text-xs my-6 md:px-5 px-3 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
          Show All Posts
        </button>
      </Link>
    </div>
  );
}
