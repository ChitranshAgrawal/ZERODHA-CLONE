import React from 'react'

export default function LeftSection({imageURL, productName, productDescription, tryDemo, learnMore, googlePlay, appStore}) {
  return (
    <>
        <div className="container mt-5 p-3">
            <div className="row">
                <div className="col-8 p-3">
                    <img style={{width:"80%"}} src={imageURL} alt="" />
                </div>
                <div className="col-4 p-3 mt-5">
                    <h1>{productName}</h1>
                    <p className='text-muted mt-3' style={{lineHeight:"40px"}}>{productDescription}</p>
                    <div className='mt-4 fs-5'>
                        <a className='p-2' href={tryDemo} style={{textDecoration:"none"}}>Try Demo <i class="fa-solid fa-arrow-right-long"></i></a>
                        <a className='p-2 m-5' href={learnMore} style={{textDecoration:"none"}}>Learn More <i class="fa-solid fa-arrow-right-long"></i></a>
                    </div>
                    <div className='mt-4'>
                        <a href={googlePlay}><img src="media/images/googlePlayBadge.svg" alt="" /></a>
                        <a className='p-4' href={appStore}><img src="media/images/appstoreBadge.svg" alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}


