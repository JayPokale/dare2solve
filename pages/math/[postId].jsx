import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import gql from "graphql-tag";
import PostGrid from "../../components/PostGrid";
import styles from "../../styles/Home.module.css";
const fetchURL = async () => {
  const res = await fetch('https://dare2solve.com/');
  return res.json();
}

export default function Posts({post}) {
console.log({post})
  const router = useRouter();
  const id = router.query.postId;
  const myPost = gql`
    query MyQuery($id: ID = "${id}") {
      post(id: $id) {
        title
        content
      }
    }`


  const { error, loading, data } = useQuery(myPost);
  if (error) return <div className={styles.error}><h1 className="text-center text-xl font-bold">Something went wrong...</h1></div>
  if (loading) return <div className={styles.loading}><div className="flex items-center justify-center space-x-2 animate-pulse pt-20">
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div className="w-4 h-4 bg-blue-400 rounded-full"></div>
  </div></div>

  return (
    <div>
      <div className={styles.myHeading}><p className="mt-3 mx-5 font-bold text-xl">Solution:</p></div>
      <iframe
        className={styles.myframe}
        srcDoc={`
          <!doctype html>
          <html>
            <head>
              <link href='https://fonts.googleapis.com/css?family=Roboto' rel='stylesheet'>
              <style>
                body {
                  background: white;
                  font-family: 'Roboto' !important;
                }
                @media (min-height: 420px){
                  transform: scale(0.95);
                }
              </style>
            </head>
            <body>
              <div class="div">
                <h1 style="font-size: 28px; font-weight: bold; ">${data.post.title}</h1>
                ${data.post.content}
                <script type="text/javascript" src="https://www.hostmath.com/Math/MathJax.js?config=OK"></script>
              </div>
            </body>
          </html>
        `}
      />
      <div className={styles.myHeading}><p className="mx-5 font-bold text-xl">More Posts:</p></div>
      <PostGrid />
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch('https://www.dare2solve.com/');
//   // return res.json();
//   const response = await res.json()
//   console.log(response)
//   return {
//     props : {
//       post : response,
//     }
//   }
// }