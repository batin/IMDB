import Movie from './Movie'

const Movies = (props) => {
  const getContent = () => {
    return props.data.map((item, index) => {
      return <Movie data={item} key={index} />
    })
  }

  return (
    <div className='card-deck cards justify-content-center'>
      {getContent()}
    </div>
  )
}

export default Movies
