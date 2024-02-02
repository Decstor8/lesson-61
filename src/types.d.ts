export interface Country {
    alpha3Code: string;
    name: string;
}

export interface CountryInfo {
    name: string;
    capital: string;
    population: number;
    borders: string[];
}
export interface BorderCountry {
    name: string;
}
