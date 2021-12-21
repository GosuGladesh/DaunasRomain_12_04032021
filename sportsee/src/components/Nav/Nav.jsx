import PropTypes from 'prop-types';

/**
 * navigation Bar component
 *
 * @param {object} props 
 * @returns {node} 
 */
function Nav(props) {
    return <div class={props.direction}>
        {props.data}
    </div>
}

Nav.propTypes = {
    direction: PropTypes.string,
    data: PropTypes.node
}
export default Nav;