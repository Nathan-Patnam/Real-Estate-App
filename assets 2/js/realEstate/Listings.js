import React, { Component } from 'react'

export default class Listings extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
    this.loopListings = this.loopListings.bind(this)
  }

  loopListings () {
    let {listings} = this.props

    if (listings === undefined || listings.length === 0){
      return 'Sorry there were no matches for your selected filters'
    }

    return listings.map((listing, index) => {
        return (<div className='col-md-3 listings-results' key={index}>
          <div className='listing'>
            <div className='listing-img' style={{ background: `url("${listing.imgURL}") no-repeat center center`}}>
              <span className='address'>{listing.address}</span>
              <div className='details'>
                <div className='col-md-3'>
                  <div className='user-img'></div>
                </div>


                <div className='col-md-9'>
                  <div className='user-details'>
                    <span className='user-name'>Nathan Patnam</span>
                    <span className='post-date'>Posted on 04/29/2018</span>
                  </div>
                  <div className='listing-details'>
                    <div className='floor-space'>
                      <i className='fa fa-square-o'></i>
                      <span>{listing.floor_space}ft &sup2;</span>

                    </div>
                    <div className='bedrooms'>
                      <i className='fa fa-bed'></i>
                      <span>{listing.rooms} bedrooms</span>
                    </div>

                  </div>
                  <div className='view-btn'>
                    View Listing
                  </div>

                </div>

              </div>
            </div>

            <div className='bottom-info'>
              <span className='listing-price'>${listing.price} per month</span>
              <span className='listing-location'>
                <i className='fa fa-map-marker'></i>
                {listing.city}, {listing.state}
              </span>

            </div>

          </div>
        </div>)
    }
    )
  }

  render () {
    return (
      <section id='listings'>
        <section className='search-area'>
          <input type='text' name='search' placeholder='Search...'/>

        </section>
        <section className='sortby-area'>
          <div className='results'>
            {this.props.listings.length} results found
          </div>
          <div className='sort-options'>
            <select name='sortby' className='sortby' onChange={this.props.change}>
              <option value='price-dsc'>Lowest Price</option>
              <option value='price-asc'>Higest Price</option>


            </select>
            <div className='view'>
              <i className='fa fa-th-list'></i>
              <i className='fa fa-th'></i>
            </div>
          </div>
        </section>
        <section className='listings-results'>
          {this.loopListings()}
        </section>
        <section id='pagination'>

          <ul className='pages'>
            <li>Prev</li>
            <li className='active'>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>Next</li>
          </ul>
        </section>

      </section>

    )
  }
}
