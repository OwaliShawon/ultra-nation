import React from 'react';

const Country = (props) => {
    const handleAddCountry = props.handleAddCountry;
    const { name, population, region, flag } = props.country;
    const flagStyle = { height: '100px' };
    const countryStyle = { border: '1px solid blue', margin: '10px', padding: '5px' };
    // const btnStyle = {width: '10px', height: '10px'};

    return (
        <div style={countryStyle}>
            <h4>{name}</h4>
            <h3>{population}</h3>
            <p>{region}</p>
            <img style={flagStyle} src={flag} alt="" />
            <br/>
            <br/>
            <button onClick={()=>handleAddCountry(props.country)}>Add Country</button>
        </div>
    );
};

export default Country;