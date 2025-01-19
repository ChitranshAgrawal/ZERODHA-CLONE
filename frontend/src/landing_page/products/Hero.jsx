import React from 'react'

export default function Hero() {
  return (
    <>
        <div className="container mt-5 p-5 text-center mb-5 border-bottom">
            <div className="row p-3">
                <h1 className='p-2'>Technology</h1>
                <h3 className='text-muted p-3 fs-4'>Sleek, modern and intuitive trading platforms</h3>
                <p className='p-2 mb-5'>Check out our <a style={{textDecoration:"none"}} href="#">investment offerings <i class="fa-solid fa-arrow-right-long"></i></a></p>
            </div>
        </div>
    </>
  )
}
