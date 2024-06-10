import './Header.css'
import SearchForm from './SearchForm';
import Dropdown from './Dropdown';
// import Day from './Day';


function Header() {
    return(
        <header>
            <h1 id='flixter'>Flixter</h1>
            <div id="actionItems">
                <SearchForm />
                <Dropdown />
            </div>
        </header>
    );
}


export default Header;