import React from 'react';
import "./About.css";

function About() {
    return (
        <div className="about-container">
            <h1>About</h1>
            <p>In my free time, I'm usually exploring new coffee shops and rating 
                their <span style= {{color: 'green'}}> matcha lattes</span> on my Beli account! When I really have free time,
                 I play badminton with friends, go on long bike rides, check out 
                 new exhibitions at local museums, and backfloat in pools for extended periods of time.</p>
            <div className="about-divider"></div>
            <h2> A deeper dive into some parts of my resume</h2>
            <h3>Why the Recent Shift Towards AI?</h3>
            <p> Simply put, AI is not just the future it is already the present. As a software
                developer I think we're at the point where if you're not using 
                AI as a tool you might potentially be left behind.
                After taking a class my sophmore year that allowed me to study the math and probability
                behind language models, I was immediately hooked. Since then, 
                I’ve pivoted toward data and machine learning, and I’m now looking 
                for roles that allow me to deepen that focus.
            </p>
            <div className="about-divider"></div>
            <h3> Why a Study Abroad Internship in Planetary Health?</h3>
            <p>The short answer is that I took an introductory course on 
                climate science for a general education credit 
                and ended up being so interested that I thought,
                 "Why not take the opportunity to learn more about the subject
                 in a hands-on way?" I'm glad to say that it was indeed an 
                 informative and enriching experience and because of this internship,
                  I had the opportunity to hike around Northern Borneo and talk 
                  to local farming and fishing communties about their thoughts
                   on indigenous knowledge and climate change solutions! For
                   my final project, I tied in my CS background to 
                   explore the potential use of blockchain technology in
                    tracking and verifying the authenticity of environmental nitiatives, ensuring that companies
                    can be held accountable in their commitment to sustainability. </p>
            <div className="about-divider"></div>
            <h3>Why a Minor in French?</h3>
            <p> Just as much as I love technology, I'm equally passionate about literature and 
                social studies. With this interdisciplinary mindset, I'm a big believer that to create 
                good technology one should always be looking to answer the question,
                "what issue is this solving in our society?" So in addition to my 
                background in software and engineering, I've spent the past 7 years studying Francophone
                literature and culture which has led to my fluency in French. In the future,
                I hope to have a role that would allow me to also work between French and American markets
                and use my fluency in a professional setting.
            </p>
        </div>
    );
}

export default About;
