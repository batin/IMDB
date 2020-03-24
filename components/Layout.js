import Head from 'next/head'
const Home = ({ children, page }) => (
  <div className='container'>
    <Head>
      <title>{page}</title>
      <link rel='icon' href='/favicon.ico' />
      <link rel='stylesheet' href='../styles/index.scss' />
    </Head>

    <main>
      {children}
    </main>

    <footer>
      <a
        href='https://batin.co'
        target='_blank'
        rel='noopener noreferrer'
      >
        Batin Eryilmaz
      </a>
    </footer>

  </div>
)

export default Home
