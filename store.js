import { observable, computed, action, decorate } from 'mobx'
import lscache from 'lscache'

class Store {
  constructor () {
    this.items = []
    console.log(lscache.get('favs'))
    this.favs = lscache.get('favs') || []
  }

  componentDidMount () {
    console.log('window.innerHeight', window.innerHeight)
  }

  get getItems () {
    return this.items
  }

  addItem (item) {
    this.items = [...this.items, item]
  }

  resetItems () {
    this.items = []
  }

  get getFavs () {
    return this.favs
  }

  get getFavCount () {
    return this.favs.length
  }

  addFav (item) {
    lscache.set('favs', this.favs)
    this.favs = [...this.favs, item]
  }

  removeFav (id) {
    lscache.set('favs', this.favs)
    this.favs = this.favs.filter(fav => fav.imdbID !== id)
  }
}

decorate(Store, {
  items: observable,
  getItems: computed,
  addItem: action,
  resetItems: action,
  getFavs: computed,
  getFavCount: computed,
  addFav: action,
  setFavs: action
})

const store = new Store()
export default store
