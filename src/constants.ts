export const API_BASE_URL = 'https://restcountries.com/v2';
export const getCountryList = () => API_BASE_URL + '/all?fields=alpha3Code,name';
export const countriesInfo = (alpha3Code: string) => `${API_BASE_URL}/alpha/${alpha3Code}`;