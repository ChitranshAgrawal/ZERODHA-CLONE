import React from 'react'

export default function Team() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <h1 className='text-center mt-5'>People</h1>
        </div>

        <div className="row mt-5">
          <div className="col-lg-6 col-sm-12 text-center">
            <img style={{borderRadius:"50%", width:"60%"}} src="media/images/nithinKamath.jpg" className="card-img-top" alt="Nithin Kamath"/>
            <h5 className="card-title mt-3 p-2">Nithin Kamath</h5>
            <p className="card-text">Founder and CEO</p>
          </div>
          <div className="col-lg-6 col-sm-12 p-5 fs-5" style={{lineHeight: '2', fontSize: '0.5em'}}>
            <p>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.</p>
            <p>He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).</p>
            <p>Playing basketball is his zen.</p>
            <p>Connect on <a style={{textDecoration:"none"}} href='#'>Homepage</a> / <a style={{textDecoration:"none"}} href='#'>TradingQnA</a> / <a style={{textDecoration:"none"}} href='#'>Twitter</a></p>
          </div>
        </div>
      </div>
    </>
  )
}
