import { useParams } from 'react-router-dom';
import infoData from '../data/information.json';

import './InfoExtended.css';

function InfoExtended(){
    const {id} = useParams();
    const item = infoData.find(info => info.id === parseInt(id));

    if (!item){
        return <div>Item not found</div>;
    }

    return(
        <div className="container">
            <h1>{item.id}. {item.title}</h1>
            <div className="information">
                <img src={process.env.PUBLIC_URL + item.image} alt={item.alt}/>
                <p>{item.description}</p>
                {item.location && (
                    <div className="mapSection">
                        <h3>Location</h3>
                        <iframe
                            src={process.env.PUBLIC_URL + item.location}
                            width="100%"
                            height="300"
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            title={`Map of ${item.title}`}
                        ></iframe>
                    </div>
                )}
                <button onClick={() => window.open(item.web, '_blank')}>More information</button>
            </div>
        </div>
    );
}

export default InfoExtended;