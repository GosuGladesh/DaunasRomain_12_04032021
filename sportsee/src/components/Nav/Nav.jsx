import PropTypes from 'prop-types';

/**
 * navigation Bar component
 * @component
 * @param {object} props 
 * @returns {node} 
 */
function Nav(props) {
    return <div class={props.direction}>
        {props.data}
    </div>
}

Nav.propTypes = {
    /**
    * Whether the nav should be vertical or horizontal
    */
    direction: PropTypes.string,
    /**
    * Html element of the nav
    */
    data: PropTypes.node
}
export default Nav;