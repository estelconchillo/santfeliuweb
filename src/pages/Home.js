import './Home.css';
function Home(){
    return (
        <div className='Home'>
            <h1>Welcome to Sant Feliu de Guíxols!</h1>
            <div className='mainImage'>
                <img src={process.env.PUBLIC_URL + '/images/platja.png'} alt="Main image"></img>
            </div>

            <div className='introduction'>
                <p>Welcome to <b>Sant Feliu de Guíxols.</b></p>
                <br/>
                <p>Your Gateway to the Costa Brava</p>
                <br/>
                <p>Discover a coastal paradise where medieval history meets Mediterranean beauty. 
                Sant Feliu de Guíxols offers pristine beaches, thrilling outdoor activities, and authentic Catalan culture—all in one unforgettable destination.</p>
                <br />
                <p id='Ready'><b>Ready to explore? Start your adventure today!</b></p>
            </div>
            <br />
           <div className='videoSection'>
                <h2>View more of Sant Feliu</h2>
                <video 
                    src={process.env.PUBLIC_URL + '/VideoFinal.mp4'}
                    controls 
                    width="100%"
                    style={{ maxWidth: '800px', borderRadius: '15px' }}
                >
                Your browser does not support the video tag.
                </video>
            </div>
            
            <h2>Know more about Sant Feliu</h2>
            <div className='audioSection'>
                <h3>Listen to Sant Feliu</h3>
                <audio src={process.env.PUBLIC_URL + '/audio/finalAudio.mp3'} controls></audio>
            </div>

            <h2>Live Sant Feliu de Guíxols</h2>
            <div className='Photos'>
                <img src={process.env.PUBLIC_URL + '/images/ronda.jpg'} alt="Camí de Ronda"></img>
                <img src={process.env.PUBLIC_URL + '/images/monasterium.png'} alt="Monasterium"></img>
                <img src={process.env.PUBLIC_URL + '/images/portNit.jpg'} alt="Port of Sant Feliu de guíxols"></img>
            </div>

        </div>
    );
}

export default Home;