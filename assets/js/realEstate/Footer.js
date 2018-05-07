import React, { Component} from 'react'


export default class Footer extends Component {
  constructor () {
    super()
    this.state = {
      name: 'Joe'
    }
  }
  clickedBtn = () => {
    console.log('swag')
  }
  render () {
    return (
      <footer>

      <div id='footer'>
        <div className='top_space'>

        </div>


          <div className='iphone'>
            <div className='iphone_header'>
              <div className='microphone'>
              </div>
              <div className='second-row'>
                <div className='flash'>

                </div>
                <div className="speaker">
                </div>
              </div>
            </div>

            <div className='iphone_screen'>

              <div className='iphone_screen_info'></div>
            </div>

          </div>

          <div className='download-app'>
            <h1>Download Listings App</h1>
            <p>Use our app to have 11,729 rental properties at hand</p>

            <div className='buttons'>
              <button><i className="fa fa-apple"></i>Playstore</button>
              <button><i className="fa fa-android"></i>Appstore</button>
            </div>
            <div className='social-media-icons'>

            </div>

            <div className='origin'>
              2006 - 2017 Nathan V. P.
            </div>
          </div>


        <div className='for-tenants'>
          <h3>For Tenants</h3>
          <p>About N.V.P Listings</p>
          <p>Sign Up for Free</p>
          <p>This is us</p>
          <p>Our Team</p>
          <p>N.V.P App</p>

        </div>

        <div className='for-advertisers'>
        <h3>For Advertisers</h3>
          <p>About N.V.P Listings</p>
        </div>





      </div>
      </footer>
    )
  }
}


