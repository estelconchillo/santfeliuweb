import './Contact.css';

function Contact(){
    return (
        <div className='Contact'>
            <h1>Contact us</h1>
            <div className='InfoContact'>
                <div className='AboutUs'>
                    <h3>About us:</h3>
                    <p><b>Sant Feliu de Guíxols</b> is a picturesque coastal town on Catalonia's Costa Brava, 
                        where medieval history meets Mediterranean beauty. With stunning beaches, outdoor adventures, 
                        world-class diving spots, and a vibrant cultural scene, we offer the perfect destination for travelers 
                        seeking authentic experiences. Our <b>Tourist Office </b> is here to help you discover all the hidden treasures 
                        and unforgettable activities our town has to offer.</p>

                    <img src={process.env.PUBLIC_URL + '/images/office.jpg'} alt="Tourism office"></img>
                </div>

                <div className='AdressPhoneNumber'>
                    <h3>Visit us:</h3>
                    <p>Sant Feliu de Guíxols</p>
                    <p>17220, Girona, Catalunya.</p>
                    <br/>
                    <p><b>Adress:</b></p>
                    <a href="emailto:turisme@guixols.cat">guixols@gmail.com</a>
                    <p><b>Phone Number:</b></p>
                    <a>972 82 00 51</a>
                    <br/>
                    <h4>Tourist Office:</h4>
                    ´<iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3064.279955047801!2d3.027276476019047!3d41.78134447146667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12bb0697e24926dd%3A0x54c8c42b9ea07746!2sOficina%20de%20Turisme%20Municipal%20de%20Sant%20Feliu%20de%20Gu%C3%ADxols!5e1!3m2!1sca!2ses!4v1764589110862!5m2!1sca!2ses" 
                        width="100%"
                        height="300px"
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        title="Tourist Office"
                    ></iframe>

                    <p><b>Winter Time:</b> Monday to Saturday from 10h to 18h - Sunday and Festives from 10h to 14h</p>
                    <p><b>Summer Time:</b> Every day from 10h to 18h</p>
                </div>

                <div className='FormContact'>
                    <h3>Send us a Message:</h3>
                    <form>
                        <label htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" placeholder="Your name" required />
                    
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" name="email" placeholder="your@email.com" required />
                    
                        <label htmlFor="phone">Phone Number</label>
                        <input type="tel" id="phone" name="phone" placeholder="+34 123 456 789" />
                    
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="How can we help?" required />
                    
                        <label htmlFor="message">Message</label>
                        <textarea id="message" name="message" rows="5" placeholder="Your message..." required></textarea>
                    
                        <button type="submit">Send Message</button>
                 </form>
                </div>
            </div>
        </div>
    );
}

export default Contact;