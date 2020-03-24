import React, { useState, useEffect } from 'react'
import { observer } from 'mobx-react'
import axios from 'axios'
import store from '../store'
import Layout from '../components/Layout'
import Movies from '../components/Movies'
import Input from '../components/Input'

const Home = observer(() => {
  const [input, setInput] = useState('')
  const [first, setFirst] = useState(true)
  const [type, setType] = useState('Movie')
  const [genre, setGenre] = useState('')
  const [year, setYear] = useState('')
  const [items, setItems] = useState(store.getItems)
  const apikey = 'c594263d'
  useEffect(() => {
    if (first && items.length === 0) {
      fetchDefaultData()
    }
  }, [])

  useEffect(() => {
    getResults()
  }, [type, input])

  useEffect(() => {
    if (genre.length === 0) {
      setItems(store.getItems)
    }
    filterItemsByGenre()
  }, [genre])

  useEffect(() => {
    if (year.length === 0) {
      setItems(store.getItems)
    }
    filterItemsByYear()
  }, [year])

  const filterItemsByGenre = () => {
    setItems(store.getItems.filter(item => {
      return item.Genre.includes(genre)
    }))
  }

  const filterItemsByYear = () => {
    setItems(store.getItems.filter(item => {
      return item.Year.includes(year)
    }))
  }

  const getResults = async () => {
    const data = await axios.get(`https://omdbapi.com/?apikey=${apikey}&s=${input}&type=${type}`)
    const items = data.data.Search
    if (items) {
      store.resetItems()
      setItems([])
      await items.map(async item => {
        const info = await axios.get(`https://omdbapi.com/?apikey=${apikey}&i=${item.imdbID}&plot=full`)
        item.Plot = info.data.Plot
        item.Genre = info.data.Genre
        item.Year = info.data.Released
        item.imdbRating = info.data.imdbRating
        item.Director = info.data.Director
        store.addItem(item)
        setItems(items => [...items, item])
      })
    }
  }

  const fetchDefaultData = async () => {
    setFirst(false)
    const data = await axios.get(
      `https://omdbapi.com/?apikey=${apikey}&s=${type === 'Movie' ? 'Harry Potter' : 'Friends'}&type=${type}&y=${year}`)
    await data.data.Search.map(async item => {
      const info = await axios.get(`https://omdbapi.com/?apikey=${apikey}&i=${item.imdbID}&plot=full`)
      item.Plot = info.data.Plot
      item.Genre = info.data.Genre
      item.Year = info.data.Released
      item.imdbRating = info.data.imdbRating
      item.Director = info.data.Director
      setItems(items => [...items, item])
      store.addItem(item)
    })
  }

  return (
    <Layout page='Home'>
      <Input
        value={input}
        changedText={text => {
          setInput(text)
        }}
        genre={genre}
        changedGenre={text => {
          setGenre(text)
        }}
        year={year}
        changedYear={text => {
          setYear(text)
        }}
        type={type}
        changedType={text => {
          setType(text)
        }}
      />
      <Movies Home data={items} />
    </Layout>
  )
})

export default Home
