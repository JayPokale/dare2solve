import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import gql from 'graphql-tag';
import styles from "../../styles/Home.module.css";
import Link from "next/link"
import Script from "next/script"
import Image from "next/image"

const fetchURL = async () => {
    const res = await fetch('https://grp.akm.mybluehostin.me/dare2solve/');
    return res.json();
}

export default function Category() {

    const router = useRouter();
    const categoryName = router.query.category;
    const myPosts = gql`
    query myQuery($after: String = "null", $categoryName: String = "${categoryName}") {
        posts(where: {categoryName: $categoryName}, first: 10, after: $after) {
            nodes {
                id
                title
                excerpt
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
            <div className={styles.myHeading}><p className="mt-3 mx-5 font-bold text-xl">Posts related to {categoryName}:</p></div>
            <div className={styles.postList}>
                <div className="flex flex-wrap md:block md:mx-0 mx-2">
                    {data.posts.nodes.map(post => {
                        return <div className={styles.darken} key={post.id}>
                            <Link href={`/${categoryName}/${post.id}`} passHref>
                                <div className="md:flex md:h-48 m-2 md:mx-0 bg-white rounded-xl transition ease-in-out duration-300 shadow-lg hover:shadow-xl cursor-pointer overflow-hidden">
                                    <div className="md:w-1/4">
                                        <Image className="md:h-auto w-full"
                                            src={post.featuredImage.node.sourceUrl}
                                            alt=""
                                            width={1000}
                                            height={1000}
                                        />
                                    </div>
                                    <div className="md:w-3/4 p-3 md:h-full h-80">
                                        <h1 className="my-2 md:h-7 h-14 overflow-hidden text-xl font-bold text-gray-800">{post.title}</h1>
                                        <div className="text-lg text-gray-600 mt-1 md:h-28 h-56 w-full overflow-hidden" dangerouslySetInnerHTML={{ __html: post.excerpt }}></div>
                                    </div>
                                </div>
                            </Link>
                        </div>

                    })}
                </div>
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
                <Script id="indecscript" strategy="lazyOnload">{`if (!${data.posts.pageInfo.hasNextPage}) {document.getElementById('loadButton').style.display = 'none'}`}</Script>
            </div>
        </div>
    )
}