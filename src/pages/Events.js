import EventCard from '../components/EventCard';
import infoData from '../data/events.json';
import './Events.css';

function Events(){
    return (
        <div className="events">
            <h1>Upcoming Events in Sant Feliu de Guíxols</h1>
            <p>These are the upcoming events that you can not loose about Sant Feliu de Guíxols.</p>

            <div className="individualInfo">
                {infoData.map((item) =>(
                <EventCard
                key = {item.id}
                item = {item} />
                ))}
            </div>
        </div>
    );
}

export default Events;