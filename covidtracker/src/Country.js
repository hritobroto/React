import React from 'react';
import './country.css';
const Country = ({stats}) => {
    return(
        <div className='country'>
            <img src={`https://www.countryflags.io/${stats.CountryCode}/flat/64.png`} alt={stats.Country}></img>
            <h2>{stats.Country}</h2>
            <div className='describe'>
                <div className="data">
                    <h4>Active   :</h4>
                    <h3>  {` ${stats.Active}`}</h3>
                </div> 
                <div className="data">
                    <h4>Confirmed   :</h4>
                    <h3>  {` ${stats.Confirmed}`}</h3>
                </div>
                <div className="data">
                    <h4>Deaths   :</h4>
                    <h3>  {`${stats.Deaths}`}</h3>
                </div>
                <div className="data">
                    <h4>Recovered   :</h4>
                    <h3>  {`${stats.Recovered}`}</h3>
                </div>
            </div>
        </div>
    )
}

export default Country;