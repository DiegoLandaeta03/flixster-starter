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
            <h1 id='flixster'>Flixster</h1>
            <button onClick={nowPlaying} id='nowPlaying'>Now Playing</button>
            <div id="actionItems">
                <SearchForm searchData={onDataSubmit}/>
                <Dropdown sortType={onSortSubmit}/>
            </div>
        </header>
    );
}

export default Header;