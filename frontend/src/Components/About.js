import React from 'react'
import './About.css'
import BIT24 from "../photos/BIT 24.jpg"

function About() {
    return (
        <div className='about-box'>
            <h2 className="about-title">About the Library</h2>
            <div className="about-data">
                <div className="about-img">
                    <img src={BIT24} alt="" />
                </div>
                <div>
                    <p className="about-text">
                    A library is a vital institution that plays a central role in society by offering access to a diverse range of resources, knowledge, and services. Libraries are repositories of human culture and understanding, serving both as centers for learning and hubs for community engagement.<br/>
                        <br/>
                        At its core, a library is a carefully curated collection of books, periodicals, digital media, and various educational materials. These collections cater to a wide audience, spanning from public libraries that serve communities at large to academic libraries within educational institutions, special libraries for specific industries, and national libraries that preserve a nation's cultural heritage. In the digital age, libraries have expanded to encompass digital libraries, providing electronic resources and online access to vast amounts of information.<br/>
                        <br/>
                        Librarians, the custodians of these treasures, are trained professionals who assist patrons in navigating the wealth of available information. They help individuals find and evaluate resources, conduct research, and foster information literacy.

Libraries have evolved to adapt to the changing landscape of technology, information, and education. They now offer a myriad of services beyond book lending, such as educational programs, community events, and meeting spaces. With the internet's rise, libraries have become digital hubs, facilitating online research and serving as trusted sources of information .<br/>
                        <br/>
                        Your suggestions for improvement are always welcome!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
