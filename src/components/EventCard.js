import './EventCard.css';

function EventCard({item}){
    return(
        <div className="upcomingEvent">
            <h3>{item.id}. {item.title}</h3>
            <div className='infoEvent'>
                <img src={item.image} alt={item.alt} />
                <div className='eventDetails'>
                    <div className='eventDate'>
                        <h4>Date:</h4>
                        <p>{item.date}</p>
                    </div>
                    <p>{item.description}</p>
                    <button onClick={() => window.open(item.web, '_blank')}>+INFO</button>
                </div>
            </div>
        </div>
    );
}

export default EventCard;