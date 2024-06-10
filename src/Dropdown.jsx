import './Dropdown.css';

function Dropdown(){
    return(
        <div className='dropdown'>
            <button className='dropBtn'>Filter</button>
            <div className='dropContent'>
                <a href=''>Filter 1</a>
                <a href=''>Filter 2</a>
                <a href=''>Filter 3</a>
            </div>
        </div>
    );  
}

export default Dropdown;