import React from 'react';
import blueRose from './Blue-Rose.jpeg';
import Link from './Link';


function Portfolio(){


    return(
        // <div className="flex container text-blue-100 w-100 flex-col">
        <div className="flex text-blue-100 w-100 flex-col">
            <header class="header flex justify-between bg-blue-400 w-full" style={{ backgroundImage: `url(${blueRose})` }}>
        <h1 class="text-5xl mx-14 my-10 font-extrabold">Jenny Russell</h1>
        <ul class="main-nav-list flex flex-row space-x-12 mx-14 my-10 py-4 text-2xl">
            <li><a href="#about-me">About Me</a></li>
            <li><a href="#my-work">My Work</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        </header>
        <container class="main-container m-20">
            <div class="div1 flex flex-row">
             <div id="about-me" class="text-5xl w-1/3 flex text-right justify-end border-r-4  border-blue-500 h-auto items-center px-10">About Me</div>
                <p class="w-1/3 my-36 mx-10 text-2xl">I have been a stay at home mom for almost 10 years. When it was time for me to go back to work, I enrolled in a coding bootcamp and trained as a full-stack front-end developer. I have since worked on many projects. Please check out my work!

                </p>
                <img class="portrait h-96 pl-14" src="portrait.jpg"></img>
                </div>
        <div id="my-work" class="div2 flex flex-row pt-20">
            <div class="text-5xl w-1/3 flex text-right justify-end border-r-4 h-auto items-center border-blue-500 pr-10 mx-16">My Work</div>
            <div class="work-container w-2/3 border-4 h-96 h-full flex justify-items-auto mr-20 border-blue-500 p-5">
                <div class="half-1 mx-10 my-5 flex flex-col flex-start w-1/2 mr-16">
                    <Link  goto="https://jennyrussell.github.io/my-projects/" name="Family Project"/>
                    <Link  goto="https://jennyrussell.github.io/weather-dashboard/" name="Weather Dashboard"/>
                    <Link  goto="https://jennyrussell.github.io/work-day-scheduler/" name="Work Day Scheduler"/>
                    </div>
                    
                <div class="half-2 mx-10 my-5 flex flex-col flex-start w-1/2 mr-16">
                    <Link  goto="https://github.com/JennyRussell/Hangry" name="Hangry"/>
                    <Link  goto="https://anime-recommender-application.herokuapp.com/" name="Anime Recommender"/>
                        <div class="h-28 my-5 bg-blue-400 font-bold text-2xl">

                    </div>
                    </div>
                    
                        
                    
                </div>
               

        </div>
        <article id="contact" class="contact flex flex-row pt-20">
            <h1 class="text-5xl w-1/3 flex text-right justify-end border-r-4 h-auto items-center border-blue-500 pr-10 mx-16 mr-36">Contact</h1>
            <ul class="w-2/3 text-2xl">
                <li>Email: jennylukovsky@gmail.com</li>
                <li>Cell: (323) 555-5555</li>
            </ul>
        </article>

    
        </container>
        </div>
    )
}

export default Portfolio;