import React, { useState } from 'react'
import axios from 'axios'
import store from '../store'
import Layout from '../src/components/Layout/Layout'
import Movies from '../src/components/Movies/Movies'
import Input from '../src/components/Input/Input'

import './main.scss'

const Home = () => {
  const [input, setInput] = useState('')
  // window.localStorage.setItem('favs', JSON.stringify(store.getFavs))
  const fetchData = async () => {
    const data = await axios.get(
      `http://omdbapi.com/?apikey=1efe60e&s=${input === '' ? 'Harry Potter' : input}&type=movie`)
    const items = data.data.Search
    if (items) {
      store.resetItems()
      await items.map(async item => {
        const info = await axios.get(`http://omdbapi.com/?apikey=1efe60e&i=${item.imdbID}&plot=full`)
        item.Plot = info.data.Plot
        item.Year = info.data.Released
        item.imdbRating = info.data.imdbRating
        item.Director = info.data.Director
        store.addItem(item)
      })
    }
  }

  fetchData()

  return (
    <Layout page='Home'>
      <Input value={input} changedtext={text => setInput(text)} />
      <Movies Home />
    </Layout>
  )
}

export default Home
