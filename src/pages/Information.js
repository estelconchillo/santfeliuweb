import InfoCard from '../components/InfoCard';
import infoData from '../data/information.json';
import './Information.css';

function Information(){
    return (
        <div className="information">
            <h1>Information about Sant Feliu de Guíxols</h1>
            <p>These are the imprescindible things that you can not loose about Sant Feliu de Guíxols.</p>

            <div className="individualInfo">
                {infoData.map((item) =>(
                <InfoCard
                key = {item.id}
                item = {item} />
                ))}
            </div>
        </div>
    );
}

export default Information;