import './Input.scss'
import { MdFavorite } from 'react-icons/md'
import Link from 'next/link'

const Input = (props) => {
  return (
    <div className='input-group input-group-lg position-absolute sticky-top p-5 input-field'>
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
        <label className='input-group-text ml-2'> <MdFavorite /> </label>
      </Link>
    </div> 
  )
}

export default Input
