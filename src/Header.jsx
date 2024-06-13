import './Header.css'
import SearchForm from './SearchForm';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';

function Header({onDataSubmit, onSortSubmit}) {
    return(
        <header>
            <h1 id='flixster'>Flixster</h1>
            <div id="actionItems">
                <SearchForm searchData={onDataSubmit}/>
                <Dropdown sortType={onSortSubmit}/>
            </div>
        </header>
    );
}

Header.propTypes = {
    onDataSubmit: PropTypes.func,
    onSortSubmit: PropTypes.func,
};

export default Header;