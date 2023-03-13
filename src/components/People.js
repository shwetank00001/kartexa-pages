import React from 'react'

const People = () => {
  return (
    <div>
      <div className='header'>
        <h1>What do people say</h1>
      </div>



      <div className='middle'>

        <div className='middle-img'>
          <img src='./image/people.png' alt='people' />
        </div>
        <div className='middle-text'>
          <p>
            At first, I was a bit sceptical about this website but I still signed up. The counsellors welcomed me warmly and they treated my concerns with great priority. After about 8 months of great sessions, I feel I am a changed person and my life has improved vastly. My personal favourite DOST is Candice – she is one of the best counsellors here. I am a proud user of this platform and I would like to step forth and say that you should try it as you will not be disappointed on this website.
          </p>
            <h4>Navneil Bakshi, Working Professional, West Bengal.</h4>
        </div>

      </div>



      <div className='footer'>
        <div className='btn'>
          <button className='btn-1' >CHAT ONLINE TODAY</button>
          <button className='btn-2'>REFER A FRIEND</button>
          <button className='btn-3'>READ MORE</button>
        </div>
      </div>

    </div>
  )
}

export default People