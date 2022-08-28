console.log('This is weather.js')


{
        let form = document.getElementById('weatherForm');
        console.log(form);

        async function handleSubmit(e){
            console.log('Please wait for the weather data...')
            e.preventDefault()


            let inputCity = e.target.city.value;

            let weathersData = await getWeatherInfo(inputCity)
            inputCity.value = ''
            console.log('It is groundhog day...again', weathersData);


            buildcityTable(weathersData)
            

        }

        async function getWeatherInfo(city){
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${myAPIKey}`);
            let data = await res.json();
            return data;

    }


        function buildcityTable(weathersData){
            console.log('crafting your table');
            let table = document.createElement('table');
            table.className = 'table'
            console.log(table)


            let thead = document.createElement('thead');
            

            let trHead = document.createElement('tr');

            let thCity = document.createElement('th');
            thCity.scope = 'column'
            thCity.innerHTML = 'City name'

            let thCountry = document.createElement('th');
            thCountry.scope = 'column'
            thCountry.innerHTML = 'Country name'

            let thHigh = document.createElement('th');
            thHigh.scope = 'column'
            thHigh.innerHTML = 'Temp High:'

            let thLow = document.createElement('th');
            thLow.scope = 'column'
            thLow.innerHTML = 'Temp Low:'

            let thCurrent = document.createElement('th');
            thCurrent.scope = 'column'
            thCurrent.innerHTML = 'Temp Current:'

            let thFeels = document.createElement('th');
            thFeels.scope = 'column'
            thFeels.innerHTML = 'Temp Feels Like:'

            let thDescription = document.createElement('th');
            thDescription.scope = 'column'
            thDescription.innerHTML = 'Description:'


            let tableBody = document.createElement('tbody');
            

            let tableRow = document.createElement('tr');


            let tdCity = document.createElement('td');
            tdCity.scope = 'row'
            tdCity.innerHTML = `${weathersData['name']}`;
            
            

            let tdCountry = document.createElement('td');
            tdCountry.scope = 'row'
            tdCountry.innerHTML = `${weathersData['sys']['country']}`;
            
            


            let tdHigh = document.createElement('td');
            tdHigh.innerHTML = `${weathersData['main']['temp_max']}°F`;
            
           

            let tdLow = document.createElement('td');
            tdLow.innerHTML = `${weathersData['main']['temp_min']}°F`;
            


            let tdCurrent = document.createElement('td');
            tdCurrent.innerHTML = `${weathersData['main']['temp']}°F`;
            
            
            let tdFeels = document.createElement('td');
            tdFeels.innerHTML= `${weathersData['main']['feels_like']}°F`;

            let tdDescription = document.createElement('td');
            tdDescription.innerHTML= `${weathersData['weather'][0]['main']}`;
            

        
            tableRow.append(tdCity);
            tableRow.append(tdCountry);
            tableRow.append(tdHigh);
            tableRow.append(tdLow);
            tableRow.append(tdCurrent);
            tableRow.append(tdFeels);
            tableRow.append(tdDescription);
            tableBody.append(tableRow);
            thead.append(trHead)
            trHead.append(thCity)
            trHead.append(thCountry)
            trHead.append(thHigh)
            trHead.append(thLow)
            trHead.append(thCurrent)
            trHead.append(thFeels)
            trHead.append(thDescription)
            table.append(thead)
            table.append(tableBody)


            let display = document.getElementById('weatherTable');
            display.innerHTML = '';
            display.append(table)
            console.log(display)

    }

        form.addEventListener('submit', handleSubmit);
}