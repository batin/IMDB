import { observer } from 'mobx-react'
import store from '../../../store'
import Movie from '../Movie/Movie'
import './Movies.scss'

const Movies = observer((props) => {

  const getContent = () => {
    return store.getItems.map((item, index) => {
      return <Movie data={item} key={index} />
    })
  }

  const getFavContent = () => {
    return store.getFavs.map((item, index) => {
      return <Movie data={item} key={index} />
    })
  }

  return (
    <div className='card-deck cards justify-content-center mt-5'>
      {props.Home ? getContent() : getFavContent()}
    </div>
  )
}
)

export default Movies
