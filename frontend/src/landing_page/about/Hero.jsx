import React from 'react'

export default function Hero() {
  return (
    <>
      <div className="container mt-5">
        <div className="row mt-5">
          <h1 className='text-center mt-5'>We pioneered the discount broking model in India.</h1>
          <h1 className='text-center mb-5'>Now, we are breaking ground with our technology.</h1>

          <div className='border mt-5'></div>

          <div className="col-lg-6 col-sm-12 mt-5 p-5 text-muted fs-5" style={{lineHeight: '2', fontSize: '0.5em'}}>
            <p className='p-3'>We kick-started operations on the 15th of August, 2010 with the goal of breaking all barriers that traders and investors face in India in terms of cost, support, and technology. We named the company Zerodha, a combination of Zero and "Rodha", the Sanskrit word for barrier.</p>
            <p className='p-3'>Today, our disruptive pricing models and in-house technology have made us the biggest stock broker in India in terms of active retail clients.</p>
            <p className='p-3'>Over 1+ Crore clients place millions of orders every day through our powerful ecosystem of investment platforms, contributing over 15% of all Indian retail trading volumes.</p>
          </div>
          <div className="col-lg-6 col-sm-12 mt-5 p-5 text-muted fs-5">
            <p className='p-3'>In addition, we run a number of popular open online educational and community initiatives to empower retail traders and investors.</p>
            <p className='p-3'><a style={{textDecoration:"none"}} href='https://rainmatter.com/'> Rainmatter </a> , our fintech fund and incubator, has invested in several fintech startups with the goal of growing the Indian capital markets.</p>
            <p className='p-3'>And yet, we are always up to something new every day. Catch up on the latest updates on our blog or see what the media is saying about us.</p>
          </div>
        </div>
      </div>
    </>
  )
}
