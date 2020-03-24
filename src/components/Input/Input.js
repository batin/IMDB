import React, { useState } from 'react'
import './Input.scss'
import { MdFavorite } from 'react-icons/md'
import { FaFilter } from 'react-icons/fa'
import Link from 'next/link'

const Input = (props) => {
  const [filters, setFilters] = useState(false)

  const renderFilters = () => {
    if (filters) {
      return (
        <div className='d-flex filters'>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text'>Type</label>
            </div>
            <select
              value={props.type}
              onChange={(e) => props.changedType(e.target.value)}
              className='custom-select'
              id='inputGroupSelect01'
            >
              <option value='Movie'>Movie</option>
              <option value='Series'>Series</option>
            </select>
          </div>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text'>Year</label>
            </div>
            <input
              value={props.year}
              onChange={(e) => props.changedYear(e.target.value)}
              type='text'
              placeholder='2020'
              className='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-lg'
            />
          </div>
          <div className='input-group mb-3'>
            <div className='input-group-prepend'>
              <label className='input-group-text'>Genre</label>
            </div>
            <input
              value={props.genre}
              onChange={(e) => props.changedGenre(e.target.value)}
              type='text'
              placeholder='Horror'
              className='form-control'
              aria-label='Sizing example input'
              aria-describedby='inputGroup-sizing-lg'
            />
          </div>
        </div>)
    }
  }

  return (
    <div className='input-group input-group-lg position-absolute sticky-top p-5 input-field'>
      <div className='input-group mb-3'>
        <div className='input-group-prepend'>
          <label className='input-group-text'>{props.type}</label>
        </div>
        <input
          value={props.value}
          onChange={(e) => props.changedText(e.target.value)}
          type='text'
          placeholder={props.type === 'Movie' ? 'Harry Potter' : 'Friends'}
          className='form-control'
          aria-label='Sizing example input'
          aria-describedby='inputGroup-sizing-lg'
        />
        <Link href='/favorites'>
          <label className='input-group-text ml-2'> <MdFavorite /> </label>
        </Link>
        <div onClick={() => setFilters(!filters)} className='input-group-text ml-2'>
          <FaFilter />
        </div>
      </div>
      {renderFilters()}
    </div>
  )
}

export default Input
