germanyData=[
    {
      "name": "Germany",
      "topLevelDomain": [
        ".de"
      ],
      "alpha2Code": "DE",
      "alpha3Code": "DEU",
      "callingCodes": [
        "49"
      ],
      "capital": "Berlin",
      "altSpellings": [
        "DE",
        "Federal Republic of Germany",
        "Bundesrepublik Deutschland"
      ],
      "subregion": "Central Europe",
      "region": "Europe",
      "population": 83240525,
      "latlng": [
        51,
        9
      ],
      "demonym": "German",
      "area": 357114,
      "gini": 31.9,
      "timezones": [
        "UTC+01:00"
      ],
      "borders": [
        "AUT",
        "BEL",
        "CZE",
        "DNK",
        "FRA",
        "LUX",
        "NLD",
        "POL",
        "CHE"
      ],
      "nativeName": "Deutschland",
      "numericCode": "276",
      "flags": {
        "svg": "https://flagcdn.com/de.svg",
        "png": "https://flagcdn.com/w320/de.png"
      },
      "currencies": [
        {
          "code": "EUR",
          "name": "Euro",
          "symbol": "€"
        }
      ],
      "languages": [
        {
          "iso639_1": "de",
          "iso639_2": "deu",
          "name": "German",
          "nativeName": "Deutsch"
        }
      ],
      "translations": {
        "br": "Alemanha",
        "pt": "Alemanha",
        "nl": "Duitsland",
        "hr": "Njemačka",
        "fa": "آلمان",
        "de": "Deutschland",
        "es": "Alemania",
        "fr": "Allemagne",
        "ja": "ドイツ",
        "it": "Germania",
        "hu": "Grúzia"
      },
      "flag": "https://flagcdn.com/de.svg",
      "regionalBlocs": [
        {
          "acronym": "EU",
          "name": "European Union"
        }
      ],
      "cioc": "GER",
      "independent": true
    }
  ]


  //   1.print country name
let countryName=germanyData[0].name
console.log(countryName);
 // print capital
 let capital=germanyData[0].capital
 console.log(capital);
 
 
 // population

 let population=germanyData[0].population
 console.log(population);
 
 
 // print borders
 let borders=[...germanyData[0].borders]
 console.log(borders);

 // currency name
 let currencyName=germanyData[0].currencies[0].name
console.log(currencyName); 
 // currency symbol
 let currencySymbol=germanyData[0].currencies[0].symbol
 console.log(currencySymbol); 
 
 // languages name
 let languageName=germanyData[0].languages[0].name
 console.log(languageName); 
 
 
 // flag
 let flag=germanyData[0].flag
 console.log(flag);
 
 var finalData={countryName,capital,population,borders,currencyName,currencySymbol}
 console.log(finalData);