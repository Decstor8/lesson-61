import React, { useState, useEffect } from 'react';
import { countriesInfo } from '../../constants';
import { CountryInfo as CountriesInfo } from '../../types';
import './information.css';

interface Props {
    alpha3Code: string | null;
}

const CountryInfo: React.FC<Props> = ({ alpha3Code }) => {
    const [countryInfo, setCountryInfo] = useState<CountriesInfo | null>(null);

    useEffect(() => {
        const country = async () => {

            if (!alpha3Code) {
                return;
            }

            try {
                const response = await fetch(countriesInfo(alpha3Code));
                const result = await response.json();
                setCountryInfo(result);

            } catch (error) {
                console.log('Упс.. произошла ошибка: ', error);
            }
        };

        country();
    }, [alpha3Code]);

    return (
        <div className='main-block-info'>
            <h2 className='title-description'>Информация о стране</h2>
            {countryInfo && (
                <div className='block-info'>
                    <p>Страна: {countryInfo.name}</p>
                    <p>Столица: {countryInfo.capital}</p>
                    <p>Население страны: {countryInfo.population}</p>
                    <span>
                        Страна граничит с: {countryInfo.borders && countryInfo.borders.length > 0
                        ? countryInfo.borders.join(', ') : 'Нет данных'}
                    </span>
                </div>
            )}
        </div>
    );
};

export default CountryInfo;
