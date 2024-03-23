import React from 'react'
import './News.css'

function News() {
    return (
        <div className='news-container'>
            <h className='news-title'>Updates for You</h>
            <div className='news-data'>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'>Student</h1>
                    <div>
                        <div className='news-competition-event'>
                            <p>Competion-1</p>
                            <p>Coding Ninja's upcoming scholarship test for SDE role will be helo on 12th DEC'23.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-2</p>
                            <p>the link for internship on Paypal will shown tonight @8:00PM.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Competion-3</p>
                            <p>GFG job's scholarship for full stack web development course. A chance to win upto 100% scholarship @24TH DEC'23 at 4:00pm.</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Registation</p>
                            <p>Open for 2023 batch student for library card .</p>
                        </div>
                        <div className='news-competition-event'>
                            <p>Collect</p>
                            <p>Collect new library card.</p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
                <div>
                    <h1 className='news-subtitle'> New Book Updates </h1>
                    <div>
                        <div className='news-quiz-event'>
                            <p>Book-1</p>
                            <p>Available Opreating System .</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Book-2</p>
                            <p>Available Software Engineering.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Book-3</p>
                            <p>Available Data mining.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Book-4</p>
                            <p>let us see.</p>
                        </div>
                        <div className='news-quiz-event'>
                            <p>Book-5</p>
                            <p>Cloud-Iott Technologies in Society 5.0.
                    
                            </p>
                        </div>
                    </div>
                </div>
                <div className='news-empty'></div>
            </div>
        </div>
    )
}

export default News
