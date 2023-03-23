import React from 'react'

const Third = () => {
  return (
    <div className='third-main'>
        <h1>EDFLING BENEFITS</h1>

        <div className='private-row'>
            <button>Private & confidential</button>
            <h1>2</h1>

            <button>Anonymous Discussion</button>
            <h1>4</h1>
        </div>
        <div className='session-row'>
            <h1>1</h1>
            <button>25 lak + session conducted</button>

            <h1>4</h1>
            <button>24/7 Customer support</button>
        </div>
        <div className='third-middle'>
            <h1>3 -Step Process </h1>
        </div>

        <div className='third-bottom'>
            <div className='third-bottom-1'>
                <h3>Step 1</h3>
                <img src='./image/third-3.png' />
                <h4>Connect with Expert</h4>
                <p>Chat anonymously with a Edfling’s
                    expert who's here to help you and not 
                    judge you
                </p>
            </div>
            <div className='third-bottom-1'>
                <h3>Step 2</h3>
                <img src='./image/third-2.png' />
                <h4>Discuss your Concern</h4>
                <p>Open up to your Expert in a space where you get the guidance you need, and your concerns get the attention they deserve.
                </p>
            </div>
            <div className='third-bottom-1'>
                <h3>Step 3</h3>
                <img src='./image/third-1.png' />
                <h4>Connect</h4>
                <p>With 24X7 support from our experts, bid goodbye to your old self and be on your way to becoming a better you
                </p>
            </div>
        </div>
    </div>
  )
}

export default Third