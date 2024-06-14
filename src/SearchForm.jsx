import './SearchForm.css'
import PropTypes from 'prop-types';

function SearchForm({searchData}) {
    const handleSearch = (event) => {
        event.preventDefault();
        const submittedData = event.target.elements.dataInput.value;
        searchData(submittedData);
    };

    return(
        <form onSubmit={handleSearch} id='searchSection'>
            <input id='input' name='dataInput' placeholder="Search..."></input>
            <button id='searchButton'>Search</button>
        </form>
    );
}

export default SearchForm;