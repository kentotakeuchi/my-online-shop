import type { AppProps, AppContext } from 'next/app'
import Router from 'next/router'
import NProgress from 'nprogress'
import '../components/styles/nprogress.css'
import { ApolloProvider } from '@apollo/client'
import withData from '../lib/withData'
import Page from '../components/page'

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

interface NewAppProps extends AppProps {
  apollo: any
}

// TODO: type..
const MyApp: any = ({ Component, pageProps, apollo }: NewAppProps): JSX.Element => {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

MyApp.getInitialProps = async ({ Component, ctx }: AppContext) => {
  // TODO: type..
  let pageProps: { query?: any } = {}
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx)
  }
  pageProps.query = ctx.query
  return { pageProps }
}

export default withData(MyApp)
