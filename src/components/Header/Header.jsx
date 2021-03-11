import PropTypes from 'prop-types'
import Button from '../Button/Button';
import { Link } from 'react-router-dom';

const Header = ({ title, onAdd, showAdd }) => {
    // const title = 'React Training';
    return (
        <header className="header">
            <h1>{title}</h1>
            <Link to="/">

                <Button
                    color={showAdd ? 'red' : 'grey'}
                    text={'Home'}
                    onClick={onAdd} />
            </Link>
        </header>
    )
}

Header.defaultProps = {
    title: 'React Training',
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header