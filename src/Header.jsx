import './Header.css'
import SearchForm from './SearchForm';
import Dropdown from './Dropdown';
import PropTypes from 'prop-types';

function Header({onDataSubmit, onSortSubmit, nowPlaying}) {
    const handleSearch = (event) => {
        event.preventDefault();
        const submittedData = event.target.elements.dataInput.value;
        searchData(submittedData);
    };

    return(
        <header>
            <img id='flixster' src='https://fontmeme.com/temporary/486db75443c959a1d7e38cd44f640195.png' alt="Flixster Image" />
            <div id="actionItems">
                <SearchForm searchData={onDataSubmit}/>
                <Dropdown sortType={onSortSubmit}/>
            </div>
        </header>
    );
}

export default Header;