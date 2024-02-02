import React, { useState } from 'react';
import Countries from './components/Countrys/Countries';
import CountryInfo from './components/Information/Information';
import './App.css';

const App: React.FC = () => {
    const [country, setCountry] = useState<string | null>(null);

    const selectedCountry = (alpha3Code: string) => {
        setCountry(alpha3Code);
    };

    return (
        <div className='main-block'>
            <Countries countryList={selectedCountry} />
            <CountryInfo alpha3Code={country} />
        </div>
    );
};

export default App;