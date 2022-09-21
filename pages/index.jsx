import HeroSection from "../components/HeroSection";
import LatestPosts from "../components/LatestPosts";
import AboutComponent from "../components/AboutComponent";
import { gql } from "@apollo/client";
import { apollo } from "./_app";

export default function Home(props) {
  return (
    <div>
      <HeroSection />
      <LatestPosts props={props}/>
      <AboutComponent />
    </div>
  );
}

export async function getServerSideProps() {
  const myPosts = gql`
    query MyQuery {
      posts(where: { categoryName: "math" }, first: 3) {
        nodes {
          id
          featuredImage {
            node {
              sourceUrl
            }
          }
        }
      }
    }
  `;

  const response = await apollo.query({
    query: myPosts,
  });
  return {
    props: {
      'error' : response.error || false,
      'loading' : response.loading,
      data: response.data,
    },
  };
}
