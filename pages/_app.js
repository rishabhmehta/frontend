import Footer from '@/components/shared/Footer'
import Header from '@/components/shared/Header'
import Layout from '@/components/shared/Layout'
import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  // console.log(
  //   'hello from app engine. I am responsible for rendering any *.js files/routes defined in pages directory'
  // )
  return (
    <>
      <Header />
      <Layout>
        <h1>Main to har jagah pahuch jaunga main bug hoon</h1>
        <Component {...pageProps} />
      </Layout>
      <Footer />
    </>
  )
}
