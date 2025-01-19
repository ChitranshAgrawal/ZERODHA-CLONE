import React from 'react'

export default function Awards() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-sm-12 p-5">
            <img src="media/images/largestBroker.svg" alt="Largest Broker" />
          </div>
          <div className="col-lg-6 col-sm-12 p-5 mt-5">
            <h1>Largest stock broker in India</h1>
            <p className='mb-5'>2+ million Zerodha clients contibute to over 15% of all retail order vollumes in India daily by tracking and investing in:</p>
            
            <div className="row">
              <div className="col-6">
                <ul>
                  <li>
                    <p>Future & Options</p>
                  </li>
                  <li>
                    <p>Commodity derivatives</p>
                  </li>
                  <li>
                    <p>Currency derivatives</p>
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li>
                    <p>Stocks & IPOs</p>
                  </li>
                  <li>
                    <p>Direct mutual funds</p>
                  </li>
                  <li>
                    <p>Bonds and Govt. Securities</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <img className='mt-2.5' src="media/images/pressLogos.png" alt="Press Logos" style={{width:"100%"}} />
          </div>
        </div>
      </div>
    </>
  )
}
