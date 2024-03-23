import React from 'react'
import './Footer.css'

import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

function Footer() {
    return (
        <div className='footer'>
            <div>
                <div className='footer-data'>
                    <div className="contact-details">
                        <h1>Contact Us</h1>
                        <p>Librarian</p>
                        <p>BIT Mesra</p>
                        <p>Ranchi - 835215</p>
                        <p>Jharkhand</p>
                        <p>India</p>
                        <p><b>Email:</b>prakritamrit1920@gmail.com</p>
                    </div>
                    <div className='usefull-links'>
                        <h1>Useful Links</h1>
                        <a href='https://erpportal.bitmesra.ac.in/login.htm;jsessionid=CA2DC8BA1FF38008CCE421A0043865EC'>ERP Portal</a>
                        <a href='https://www.bitmesra.ac.in/Visit_Other_Department_9910?cid=1&deptid=205&pid=103'>Notice</a>
                        <a href='https://bitmesra.ac.in/Visit_Other_Department_9910?cid=1&deptid=258&pid=361'>PYQs</a>
                        <a href='https://bitmesra.ac.in/Show_Other_Department?cid=1&deptid=183'>T&P</a>
                    </div>
                    <div className='librarian-details'>
                        <h1>Librarian</h1>
                        <p>
                            raj Kumar 
                            
                                </p>
                        <p>Engineering</p>
                        <p>Contact: +91-7632933550</p>
                    </div>
                </div>
                <div className="contact-social" >
                    <a href='https://twitter.com/BITMesra_Ranchi' className='social-icon'><TwitterIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.linkedin.com/school/b.i.t.-mesra-ranchi/?originalSubdomain=in' className='social-icon'><LinkedInIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.facebook.com/BITMesraRanchi' className='social-icon'><FacebookIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                    <a href='https://www.instagram.com/bit.mediacell/' className='social-icon'><InstagramIcon style={{ fontSize: 40,color:"rgb(283,83,75)"}} /></a>
                </div>
            </div>
            <div className='copyright-details'>
                <p className='footer-copyright'>&#169; 2023 copyright all right reserved<br /><span>Developer: ❤️PRAKRIT AMRIT </span></p>
            </div>
        </div>
    )
}

export default Footer