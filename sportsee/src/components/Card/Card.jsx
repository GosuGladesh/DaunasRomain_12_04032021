import PropTypes from 'prop-types';

function Card(props) {
    return  <div class="card">
                <img src={props.image} alt="" />
                <p>{props.value}</p>
                <p>{props.name}</p>
            </div>
}

Card.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    image: PropTypes.node
}
export default Card;