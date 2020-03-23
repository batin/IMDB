import React, { useState, useEffect } from 'react'
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md'
import './Movie.scss'
import store from '../../../store'

const Movie = (props) => {
  const [isFav, setIsFav] = useState(false)

  useEffect(() => {
    if (store.getFavCount > 0) {
      store.getFavs.map(fav => {
        if (fav.imdbID === props.data.imdbID) {
          setIsFav(true)
        }
      })
    }
  }, [])

  const addFavs = () => {
    if (isFav) {
      store.removeFav(props.data.imdbID)
    } else {
      store.addFav(props.data)
    }
    console.log(store.getFavs)
    setIsFav(!isFav)
  }

  return (
    <div className=''>
      <div className='card movie-card'>
        <h4 className='card-title text-center'>{props.data.Title}</h4>
        <img src={props.data.Poster} className='card-img align-middle' alt='...' />
        <div className='card-body'>
          <p className='card-text'><small className='text-muted'> Released: {props.data.Year}</small></p>
          <p className='card-text'><small className='text-muted'> IMDB Rating: {props.data.imdbRating}</small></p>
        </div>
        <div onClick={addFavs} className='position-absolute p-3 fav-btn'>{isFav ? <MdFavorite className='fav' /> : <MdFavoriteBorder className='fav' />}</div>
      </div>
    </div>
  )
}

export default Movie
