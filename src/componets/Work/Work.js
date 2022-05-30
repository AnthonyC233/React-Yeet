import React from 'react';
import '../../Styles/styles.css';
import img1 from '../../Assets/prework.png';
import img2 from '../../Assets/beerbuddy.png';
import img3 from '../../Assets/screenshot.png';



function Work() {
    return (
        <div>
            <section class="info-section" id="work">
                <h2>Work</h2>
                        
                <a href="#" class="item Homework-Refractor" id="project1"></a>
                    <h3>Homework-Refractor</h3>
                

                <img src={img1}></img>
                <a href="#" class="item Prework"></a>
                    <h3>Prework</h3>
                

                <img src={img2}></img>
                <a class="item Classwork" a href="https://sherb93.github.io/beer_buddy/"></a>
                    <h3>Project 1: Beer Buddy</h3>
                
                <img src={img3}></img>
                <a href="https://desolate-peak-38823.herokuapp.com/" class="item Homework-1"></a>
                    <h3>Project 2: The Theorist</h3>
                    
                
                <a href="#" class="item Brokencode"></a>
                    <h3>Brokencode</h3>    
            </section>
        </div>
    );
}

export default Work;