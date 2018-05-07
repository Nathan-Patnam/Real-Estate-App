import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import Header from './Header.js'
import Filter from './Filter.js'
import Listings from './Listings.js'
import Footer from './Footer.js'
import listings from './data/listingsData.js'

class App extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe',
      listings,
      city: 'All',
      homeType: 'All',
      bedrooms: 0,
      min_price: 0,
      max_price: 10000000,
      min_floor_space: 0,
      max_floor_space: 500000,
      elevator: false,
      swimming_pool: false,
      finished: false,
      gym: false,
      filteredData: listings,
      formDate: '',
      sortby: 'price-asc'
    }
    this.change = this.change.bind(this)
    this.filter = this.filter.bind(this)
    this.populate = this.populate.bind(this)
  }

  componentWillMount(){

      let listingsData = this.state.listings.sort((a,b) => {
  return a.price - b.price
      })

    this.setState({
      listingsData
    })
    }


  change (event) {
    let name = event.target.name
    let value = (event.target.type === 'checkbox') ? event.target.checked : event.target.value

    this.setState({
        [name]: value
      },
      () => {
        this.filter()
      }
    )
  }

  filter () {
    let newData = this.state.listings.filter((item) => {
      return (item.price >= this.state.min_price &&
        item.price <= this.state.max_price  &&
        item.floor_space >= this.state.min_floor_space &&
        item.floor_space <= this.state.max_floor_space &&
        item.rooms >= this.state.bedrooms)
    }
    )

    // more filters
    if (this.state.city !== 'All') {
      newData = newData.filter((item) => {
        return item.city === this.state.city
      })
    }
    if (this.state.homeType !== 'All') {
      newData = newData.filter((item) => {
        return item.homeType === this.state.homeType
      })
    }

    if(this.state.sortby === 'price-dsc'){
      newData = newData.sort((a,b) => {
        return a.price - b.price
      })
    }

    if(this.state.sortby === 'price-asc'){
      newData = newData.sort((a,b) => {
        return b.price - a.price
      })
    }

    this.setState({
      filteredData: newData
    }
    )
  }

  populate(){
    // city

    let cities = this.state.listings.map((item) => {
      return item.city
    })

    cities = new Set(cities)
    cities = [...cities]
    cities.sort()

    // home type
    let homeTypes = this.state.listings.map((item) => {
      return item.homeType
    })


    homeTypes = new Set(homeTypes)
    homeTypes = [...homeTypes]
    homeTypes.sort()

    // bed rooms
    let bedrooms = this.state.listings.map((item) => {
      return item.rooms
    })

    bedrooms = new Set(bedrooms)
    bedrooms = [...bedrooms]
    bedrooms.sort()

    this.setState({
      formDate: {
        cities,
        homeTypes,
        bedrooms
      }
    }
    )
  }

  render () {
    return (<div>
      <Header globalState={this.state} />
      <section id='content-area'>
        <Filter globalState={this.state} change={this.change} populateAction={this.populate}/>
        <Listings listings={this.state.filteredData} change={this.change}/>
      </section>
      <Footer />
    </div>)
  }
}

const app = document.getElementById('app')

ReactDOM.render(<App/>, app)
