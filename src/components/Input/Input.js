import './Input.scss'
import { MdFavorite } from 'react-icons/md'
import Link from 'next/link'

const Input = (props) => {
  return (
    <div className='input-group input-group-lg position-absolute sticky-top p-5'>
      <div className='input-group-prepend'>
        <span className='input-group-text' id='inputGroup-sizing-lg'>Movie Search</span>
      </div>
      <input
        value={props.value}
        onChange={(e) => props.changedtext(e.target.value)}
        type='text'
        placeholder='Harry Potter'
        className='form-control'
        aria-label='Sizing example input'
        aria-describedby='inputGroup-sizing-lg'
      />
      <Link href='/favorites'>
        <div className='input-group-append'>
          <label className='input-group-text'> <MdFavorite /> </label>
        </div>
      </Link>
    </div>
  )
}

export default Input
