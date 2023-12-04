import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () =>{

    const { currency } = useContext(AppContext);
    const [currentCurrency, setNewCurrency] = useState(currency);

    console.log(currency);

    const changeCurrency = (event) => {
        setNewCurrency(event.target.value);
    }
    return (
        <div class="dropdown">
            <button onChange={changeCurrency} class="dropbtn">Currency {currentCurrency}</button>
            <div id="myDropdown" class="dropdown-content">
                <a href="#">$ Dollar</a>
                <a href="#">£ Pound</a>
            </div>
        </div>
    );
};

export default Currency;
