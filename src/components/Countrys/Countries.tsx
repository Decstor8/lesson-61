import React, { useState, useEffect } from 'react';
import { getCountryList } from '../../constants';

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
        <div>
            <h1>Выберите страну</h1>
                {countries.map((country) => (
                    <div
                        key={country.alpha3Code}
                        onClick={() => countryList(country.alpha3Code)}>
                        {country.name}
                    </div>
                ))};
        </div>
    );
};

export default Countries;
