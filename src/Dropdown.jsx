import './Dropdown.css';
import PropTypes from 'prop-types';

function Dropdown({sortType}){
    const handleSort = (event) => {
        event.preventDefault();
        const submittedData = event.target.value;
        sortType(submittedData);
    };
    return(
        <select name='sortOption' className='dropdown' onChange={handleSort}>
            <option value={''}>Sort by:</option>
            <option value={'vote_average.desc'}>Rating</option>
            <option value={'popularity.desc'}>Popularity</option>
            <option value={'revenue.desc'}>Revenue</option>
        </select>
    );  
}

export default Dropdown;