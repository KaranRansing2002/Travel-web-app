import React from 'react'
import {Button} from './Button'
import './Footer.css'
import {Link} from 'react-router-dom' 
function Footer() {
    return (
        <div className='footer-container'>
            <section className='footer-subscription'>
                <p className='footer-subscription-heading'>
                    Join the adventure newsletter to recieve our vacation deals
                </p>
                <p className='footer-subscription-text'>
                    You can Unsubscribe any time
                </p>
                <div className='input-areas'>
                    <form>
                        <input
                            type='email'
                            name='email'
                            placeholder='Your Name'
                            className='footer-input'
                        ></input>
                        <Button buttonStyle='btn--outline'> Subscribe</Button>
                    </form>
                </div>
            </section> 
            <div className='footer-links'>
                <div clasName='footer-link-wrapper'>
                    <div className='footer-link-items'>
                        <h2>About Us</h2>
                        <Link to='/sign-up' className='h'>How it works</Link>

                    </div>
                </div>
            </div>           
        </div>
    )
}

export default Footer
