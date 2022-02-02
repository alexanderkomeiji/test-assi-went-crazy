import "../styles/globals.css"
import { ApolloProvider } from "@apollo/client"
import client from "../apollo-client"
import { AppProps } from "next/dist/shared/lib/router/router"
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  )
}

export default MyApp
