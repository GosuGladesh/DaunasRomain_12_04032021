import PropTypes from 'prop-types';


/**
 * Card component
 *
 * @param {object} props 
 * @returns {node} 
 */
function Card(props) {
    return  <div class="card">
                <img src={props.image} alt="" />
                <p class="card__title">{props.value}</p>
                <p class="card__subtitle">{props.name}</p>
            </div>
}

Card.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    image: PropTypes.node
}
export default Card;