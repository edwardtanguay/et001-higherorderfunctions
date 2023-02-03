const countryObj = getCountryObj();

// create an array of country objects from countryObj
const countries = Object.entries(countryObj).map(keyValue => {
	return {
		"country": keyValue[0],
		"capital": keyValue[1],
	}
});

// create function to find specific country item
const getCountry = (countryName) => {
	return countries.find(m => m.country === countryName);	
};

// create function to send a letter and get an array of objects with countries that start with that letter
const getCountriesWithLetter = (letter) => {
	return countries.filter(m => m.country[0].toLowerCase() === letter.toLowerCase());
}

// const country = getCountry('Schweiz');
// console.log(country);

const letterCountries = getCountriesWithLetter('s');
console.log(letterCountries);

// DATA
function getCountryObj() {
	return {
		Salomonen: 'Honiara',
		Sudan: 'Khartum',
		Surinam: 'Paramaribo',
		Swasiland: 'Mbabane',
		Schweden: 'Stockholm',
		Schweiz: 'Bern',
		Syrien: 'Damaskus',
		Taiwan: 'Taipeh',
		Tadschikistan: 'Duschanbe',
		Tansania: 'Dodoma',
		Thailand: 'Bangkok',
		Osttimor: 'Dili',
		Togo: 'Lomé',
		Tonga: 'Nukualofa',
		TrinidadTobago: 'PortOfSpain',
		Tunesien: 'Tunis',
		Türkei: 'Ankara',
		Turkmenistan: 'Ashgabat',
		Tuvalu: 'Funafuti',
		Uganda: 'Kampala',
		Ukraine: 'Kiew',
		'Vereinigte-Arabische-Emirate': 'AbuDhabi',
		Großbritannien: 'London',
		USA: 'Washington-D_C_',
		Uruguay: 'Montevideo',
		Usbekistan: 'Taschkent',
		Vanuatu: 'Port-Vila',
		Vatikanstadt: 'Vatikanstadt',
		Venezuela: 'Caracas',
		Vietnam: 'Hanoi',
		Jemen: 'Sanaa',
		Sambia: 'Lusaka',
		Simbabwe: 'Harare'
	};
}
