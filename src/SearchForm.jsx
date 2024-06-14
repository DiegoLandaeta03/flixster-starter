import './SearchForm.css'
import PropTypes from 'prop-types';

function SearchForm({searchData}) {
    const handleSearch = (event) => {
        if(event.key === 'Enter' || event.type === 'input') {
            event.stopPropagation();
            const submittedData = event.target.value; // simplified
            searchData(submittedData);
        }
    };

    return(
        <form id='searchSection'>
            <input onInput={handleSearch} id='input' name='dataInput' placeholder="Search..." ></input>
        </form>
    );
}

export default SearchForm;