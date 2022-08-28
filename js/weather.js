console.log('This is weather.js')


{
        let form = document.getElementById('weatherForm');
        console.log(form);

        async function handleSubmit(e){
            console.log('Please wait for the weather data...')
            e.preventDefault()


            let inputCity = e.target.inputCity.value;

            let weathersData = await getWeatherInfo(inputCity)
            inputCity.value = ''
            console.log('It is groundhog day...again', weathersData);


            buildcityTable(weathersData)
            

        }

        async function getWeatherInfo(city){
            let res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${myAPIKey}&units=imperial`);
            let data = await res.json();
            return data['weatherTable']

    }


        function buildcityTable(weathersData){
            console.log('crafting your table');
            let table = document.createElement('table');
            table.className = 'table'
            console.log(table)


            let thead = document.createElement('thead');
            

            let trHead = document.createElement('tr');

            let thCity = document.createElement('th');
            thCity.scope = 'col'
            thCity.innerHTML = 'City name'

            let thCountry = document.createElement('th');
            thCountry.scope = 'col'
            thCountry.innerHTML = 'Country name'

            let thHigh = document.createElement('th');
            thHigh.scope = 'col'
            thHigh.innerHTML = 'Temp High:'

            let thLow = document.createElement('th');
            thLow.scope = 'col'
            thLow.innerHTML = 'Temp Low:'

            let thCurrent = document.createElement('th');
            thCurrent.scope = 'col'
            thCurrent.innerHTML = 'Temp Current:'

            let thFeels = document.createElement('th');
            thFeels.scope = 'col'
            thFeels.innerHTML = 'Temp Feels Like:'


            let tableBody = document.createElement('tbody');
            

            let tableRow = document.createElement('tr');


            let tdCity = document.createElement('td');
            tdCity.scope = 'row'
            tdCity.innerHTML = [weathersData]['name'];


            let tdCountry = document.createElement('td');
            tdCountry.scope = 'row'
            tdCountry.innerHTML = [weathersData]['country'];


            let tdHigh = document.createElement('td');
            tdHigh.scope = 'row'
            tdHigh.innerHTML = [weathersData]['main']['temp_max'];


            let tdLow = document.createElement('td');
            tdLow.scope = 'row'
            tdLow.innerHTML = [weathersData]['main']['temp_min'];


            let tdCurrent = document.createElement('td');
            tdCurrent.scope = 'row'
            tdCurrent.innerHTML = [weathersData]['main']['temp'];


            let tdFeels = document.createElement('td');
            tdFeels.scope = 'row'
            tdFeels.innerHTML= [weathersData]['main']['feels_like'];


            tableRow.append(tdCity);
            tableRow.append(tdCountry);
            tableRow.append(tdHigh);
            tableRow.append(tdLow);
            tableRow.append(tdCurrent);
            tableRow.append(tdFeels);
            tableBody.append(tableRow);



            thead.append(trHead)
            trHead.append(thCity)
            trHead.append(thCountry)
            trHead.append(thHigh)
            trHead.append(thLow)
            trHead.append(thCurrent)
            trHead.append(thFeels)
            table.append(thead)
            table.append(tableBody)


            let display = document.getElementById('weatherTable');
            display.innerHTML = '';
            display.append(table)
            console.log(display)



    }

        form.addEventListener('submit', handleSubmit);

}