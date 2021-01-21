import React from 'react';
import Fade from 'react-reveal/Fade';

const Description=()=>{
    return(
        <Fade>
            <div className="center_wrapper">
                <h2 className="highlight_title">Movies on Screen</h2>
                <div className="highlight_description">
                    <div className="video1_wrapper">
                    <iframe id="video1" 
                    src="https://www.youtube.com/embed/AxLH0lXEGAY"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    <p id="video1_text">Avatar 2 is an upcoming American science fiction film directed by James Cameron and produced by 20th Century Studios. It is the second film in the Avatar franchise, following Avatar.</p>
                    </div>
                    
                    <div className="video2_wrapper">
                    <p id="video2_text">The surviving members of the resistance face the First Order once again, and the legendary conflict between the Jedi and the Sith reaches its peak bringing the Skywalker saga to its end.</p>
                    <iframe id="video2" 
                    src="https://www.youtube.com/embed/8Qn_spdM5Zg?controls=0"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    </div>

                    <div className="video3_wrapper">
                    <iframe id="video3" 
                    src="https://www.youtube.com/embed/WVHlrfzLjd4?controls=0"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    <p id="video3_text">As a gangster biopic, Legend is deeply flawed, but as a showcase for Tom Hardy -- in a dual role, no less -- it just about lives up to its title.</p>
                    </div>

                    <div className="video4_wrapper">
                    <iframe id="video4" 
                    src="https://www.youtube.com/embed/xpaAdZA5sEs?controls=0"
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                    allowfullscreen>
                    </iframe>
                    <p id="video4_text">Paranormal investigators Ed and Lorraine Warren try to uncover the truth behind a murderer's claim of demonic possession.</p>
                    </div>
                </div>
            </div>
        </Fade>
    );
};
export default Description;