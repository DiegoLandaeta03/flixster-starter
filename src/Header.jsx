import './Header.css'
import SearchForm from './SearchForm';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';
import logo from './assets/Logo.png'

function Header({onDataSubmit, onSortSubmit, nowPlaying}) {
    const handleSearch = (event) => {
        event.preventDefault();
        const submittedData = event.target.elements.dataInput.value;
        searchData(submittedData);
    };

    return(
        <header>
            <img id='flixster' src={logo} alt="Flixster Image" />
            <div id="actionItems">
                <SearchForm searchData={onDataSubmit}/>
                <Dropdown sortType={onSortSubmit}/>
            </div>
        </header>
    );
}

export default Header;