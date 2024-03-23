import React from 'react'
import './RecentAddedBooks.css'
import BIT4 from "../photos/BIT 4.jpg"
import BIT5 from "../photos/BIT 5.jpg"
import BIT6 from "../photos/BIT 6.jpg"
import BIT7 from "../photos/BIT 7.jpg"
import BIT8 from "../photos/BIT 8.jpg"
import BIT9 from "../photos/BIT 9.jpg"
import BIT10 from "../photos/BIT 10.jpg"
import BIT11 from "../photos/BIT 11.jpg"
import BIT12 from "../photos/BIT 12.jpg"

//import BIT13 from "../photos/BIT 13.jpg"
//import BIT14 from "../photos/BIT 14.jpg"
//import BIT15 from "../photos/BIT 15.jpg"
//import BIT16 from "../photos/BIT 16.jpg"
//import BIT17 from "../photos/BIT 17.jpg"
//import BIT18 from "../photos/BIT 18.jpg"
//import BIT19 from "../photos/BIT 19.jpg"
//import BIT20 from "../photos/BIT 20.jpg"




function RecentAddedBooks() {
    return (
        <div className='recentaddedbooks-container'>
            <h className='recentbooks-title'>Recent Uploads</h>
            <div className='recentbooks'>
                <div className='images'>
                    <img className='recent-book' src={BIT4} alt=''></img>
                    <img className='recent-book' src={BIT5} alt=''></img>
                    <img className='recent-book' src={BIT6} alt=''></img>
                    <img className='recent-book' src={BIT7} alt=''></img>
                    <img className='recent-book' src={BIT8} alt=''></img>
                    <img className='recent-book' src={BIT9}  alt=''></img>
                    <img className='recent-book' src={BIT10} alt=''></img>
                    <img className='recent-book' src={BIT11} alt=''></img>
                    <img className='recent-book' src={BIT12} alt=''></img>
                </div>
                <div className='images'>
                    <img className='recent-book' src= {BIT4}alt=''></img>
                    <img className='recent-book' src={BIT5} alt=''></img>
                    <img className='recent-book' src={BIT6} alt=''></img>
                    <img className='recent-book' src={BIT7} alt=''></img>
                    <img className='recent-book' src={BIT8} alt=''></img>
                    <img className='recent-book' src= {BIT9} alt=''></img>
                    <img className='recent-book' src= {BIT10} alt=''></img>
                    <img className='recent-book' src= {BIT11} alt=''></img>
                    <img className='recent-book' src= {BIT12} alt=''></img>
                </div>
            </div>
        </div>
    )
}

export default RecentAddedBooks
//'https://inkinmytea.files.wordpress.com/2011/12/apj.jpg?w=640'
//'https://images-na.ssl-images-amazon.com/images/I/91VokXkn8hL.jpg'