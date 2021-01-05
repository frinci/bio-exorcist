import React from 'react'
import '../styles/Home.css'

import headshot from '../images/headshot.png'
import call from '../images/callNow.png'

const Home = () => {
    return (
        <div>
            <div className="mainBox">
                <div>
                    <a href="https://wolfinger.bigcartel.com/product/beetlejuice" target="_blank">
                        <img className='beetleHead' src={headshot} alt="headshot of Beetlejuice with Beetlejuice signe below"/>
                    </a>
                </div>

                <div className="mainText">
                    <div className='mainHeading'>
                        <h1>Betelgeuse</h1>
                        <h2>The Afterlife's Leading Bio-Exorcist!</h2>
                    </div>

                    <ul className='mainPoints'>
                        <li>Troubled by the Living?</li>
                        <li>Is death a problem and not the solution?</li>
                        <li>Unhappy with Eternity?</li>
                        <li>Having difficulty adjusting?</li>
                    </ul>

                    <img src={call} alt="Call Betelgeuse! Betelgeuse! Betelgeuse!"/>
                </div>
            </div>

            <div className="aboutBox">

                <div>
                    <h2>About Beetlejuice</h2>
                    <h3>Also Spelled: Betelgeuse</h3>
                </div>

                <a id="About"></a>

                <div className='aboutText'>
                    <p>Having trouble with the living? You tired of having your home violated? You want to get Reid of them pesky living critters once and for all? Well, come on down and see me, folks. I’m the afterlife’s leading bio-exorcist! </p>

                    <p>Yes siree, come on down here and I want to tell you I’ll do anything! I’ll scare them real bad. The point is, folks, I’m gonna do anything  to get your business. Hell, I’ll possess myself if I gotta, “Wow! Yo, I got demons running all through me! All through me!” Come on down here and see it! </p>

                    <p>And, hey, if you act now, you get a <span> free demon possession with every exorcism!</span> Ah, you can’t beat that can you? And bring the little parts down here. Hell, we got plenty of snakes and lizards for them to play with. No problem with that at all. So say it once say it twice, third time’s the charm! </p>

                    <p><span>And Remember:</span></p>

                    <h2>🎵🎶 I’ll eat anything you want me to eat! I’ll swallow anything you want me to swallow! So come on down, I’ll chew on a dog! 🎵🎶🎵</h2>
                </div>
            </div>

            <div className='resumeBox'>
                <h2>Qualifications</h2>

                <a id="Skills"></a>

                <div className='skillBox'>
                    <div className='edu'>
                        <h3>Education</h3>
                        <ul>
                            <li>Julliard</li>
                            <li>Harvard Business School</li>
                        </ul>
                    </div>

                    <div className='skills'>
                        <h3>Related Skills</h3>
                        <ul>
                            <li>Lear to throw your voice! Fool your friends! Fun at parties!</li>
                            <li>Life long traveller</li>
                            <li>Survived the Plague ( and had a pretty good time during that!)</li>
                            <li>Seen “The Exorcist” about 167 times (and it keeps getting funnier every single time I see it!)</li>
                            <li>Not to mention the fact that you’re talking to a dead guy!!</li>
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default Home