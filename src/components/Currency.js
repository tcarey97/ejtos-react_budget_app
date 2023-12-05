import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';

const Currency = () =>{

    const { dispatch, currency } = useContext(AppContext);

    const changeCurrency = (new_currency) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: new_currency,
        });
    }
    return (
        <DropdownButton onSelect={changeCurrency} id="dropdown-basic-button" title={"Currency " + currency}>
            <Dropdown.Item eventKey="£">£ Pound</Dropdown.Item>
            <Dropdown.Item eventKey="$">$ Dollar</Dropdown.Item>
        </DropdownButton>
    );
};

export default Currency;
