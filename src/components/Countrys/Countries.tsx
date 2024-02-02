import React, { useState, useEffect } from 'react';
import { getCountryList } from '../../constants';
import './Countries.css';

interface Country {
    alpha3Code: string;
    name: string;
}

interface Props {
    countryList: (alpha3Code: string) => void;
}

const Countries: React.FC<Props> = ({countryList}) => {
    const [countries, setCountries] = useState<Country[]>([]);

    useEffect(() => {
        const countries = async () => {
            try {
                const response = await fetch(getCountryList());
                const result = await response.json();
                setCountries(result);
            } catch(error) {
                throw new Error('Ошибка при загрузке');
            }
        };

        countries();
    }, []);

    return (
        <div className='country-list'>
            <h1 className='main-title'>Выберите страну</h1>
            <ul>
                {countries.map((country) => (
                    <li className='one-element'
                        key={country.alpha3Code}
                        onClick={() => countryList(country.alpha3Code)}>
                        {country.name}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Countries;
