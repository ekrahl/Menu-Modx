import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';
import { locations } from '../../data/dummy';

const TentMenuCarousel = (props) => {
    return (
        <Carousel width="11rem" >
            {locations.map((location) => (
                <div key={location.id}>
                    <img src={props.img} alt="menu" />
                    <Link to={location.path} className="legend">{location.title}</Link>
                </div>
            ))}
        </Carousel>
    )
}

export default TentMenuCarousel