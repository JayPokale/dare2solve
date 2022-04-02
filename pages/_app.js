import Layout from '../components/Layout'
import '../styles/globals.css';
import { ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache } from "@apollo/client";

const apollo = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_MAINURI,
  cache: new InMemoryCache(),
})

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={apollo}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ApolloProvider>
  )
}

export default MyApp
