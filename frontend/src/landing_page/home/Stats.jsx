import React from 'react'

export default function Stats() {
  return (
    <>
      <div className="container p-5">
        <div className="row">
          <div className="col-lg-6 col-sm-12 p-7 mt-3">
            <h1 className='fs-2 mb-5'>Trust with confidence</h1>

            <h3 className='fs-4 p-3'>Customer-first always</h3>
            <p className='text-muted p-1'>That's why 1.5+ crore customers trust Zerodha with ₹4.5+ lakh crores of equity investments and contribute to 15% of daily retail exchange volumes in India.</p>

            <h3 className='fs-4 p-3'>No spam or gimmicks</h3>
            <p className='text-muted p-1'>No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you like.</p>

            <h3 className='fs-4 p-3'>The Zerodha universe</h3>
            <p className='text-muted p-1'>Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>

            <h3 className='fs-4 p-3'>Do better with money</h3>
            <p className='text-muted p-1'>With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>

          </div>
          <div className="col-lg-6 col-sm-12 p-2">
            <img src="media/images/ecosystem.png" alt="Eco System" style={{width:"100%"}} />
            <div className='text-center'>
              <a href="" className='mx-5' style={{textDecoration:"none"}}>Explore our products <i class="fa-solid fa-arrow-right-long"></i></a>
              <a href="" style={{textDecoration:"none"}}>Try Kite demo <i class="fa-solid fa-arrow-right-long"></i></a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
