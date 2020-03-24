import Layout from '../src/components/Layout/Layout'
import Movies from '../src/components/Movies/Movies'
import { IoMdArrowBack } from 'react-icons/io'
import Link from 'next/link'
import store from '../store'

const Favorites = () => {
  return (
    <Layout page='Favorites'>
      <Link href='/'>
        <div className='back m-3 mt-5'>
          <IoMdArrowBack className='back-btn' />
        </div>
      </Link>
      <Movies data={store.getFavs} />
    </Layout>
  )
}

export default Favorites
