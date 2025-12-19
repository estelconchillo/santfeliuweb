import { Link } from 'react-router-dom';

import './InfoCard.css';

function InfoCard({item}){
    return(
        <div className="imprescindibleThing">
            <h3>{item.id}. {item.title}</h3>
            <div className='infoContent'>
                <img src={item.image} alt={item.alt} />
                <p>{item.description}</p>
            </div>
            <Link to={`/information/${item.id}`}>
                <button>+INFO</button>
            </Link>
        </div>
    );
}

export default InfoCard;