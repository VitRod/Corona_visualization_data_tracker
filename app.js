let countryJSON = [{"country":"Afghanistan","code":"AF"},{"country":"Albania","code":"AL"},{"country":"Algeria","code":"DZ"},{"country":"Andorra","code":"AD"},{"country":"Angola","code":"AO"},{"country":"Antigua and Barbuda","code":"AG"},{"country":"Argentina","code":"AR"},{"country":"Armenia","code":"AM"},{"country":"Australia","code":"AU"},{"country":"Austria","code":"AT"},{"country":"Azerbaijan","code":"AZ"},{"country":"Bahamas","code":"BS"},{"country":"Bahrain","code":"BH"},{"country":"Bangladesh","code":"BD"},{"country":"Barbados","code":"BB"},{"country":"Belarus","code":"BY"},{"country":"Belgium","code":"BE"},{"country":"Belize","code":"BZ"},{"country":"Benin","code":"BJ"},{"country":"Bhutan","code":"BT"},{"country":"Bolivia","code":"BO"},{"country":"Bosnia and Herzegovina","code":"BA"},{"country":"Botswana","code":"BW"},{"country":"Brazil","code":"BR"},{"country":"Brunei","code":"BN"},{"country":"Bulgaria","code":"BG"},{"country":"Burkina Faso","code":"BF"},{"country":"Burundi","code":"BI"},{"country":"Cambodia","code":"KH"},{"country":"Cameroon","code":"CM"},{"country":"Canada","code":"CA"},{"country":"Central African Republic","code":"CF"},{"country":"Chad","code":"TD"},{"country":"Chile","code":"CL"},{"country":"China","code":"CN"},{"country":"Colombia","code":"CO"},{"country":"Comoros","code":"KM"},{"country":"Costa Rica","code":"CR"},{"country":"Croatia","code":"HR"},{"country":"Cuba","code":"CU"},{"country":"Cyprus","code":"CY"},{"country":"Czechia","code":"CZ"},{"country":"Denmark","code":"DK"},{"country":"Djibouti","code":"DJ"},{"country":"Dominica","code":"DM"},{"country":"Dominican Republic","code":"DO"},{"country":"Ecuador","code":"EC"},{"country":"Egypt","code":"EG"},{"country":"El Salvador","code":"SV"},{"country":"Equatorial Guinea","code":"GQ"},{"country":"Eritrea","code":"ER"},{"country":"Estonia","code":"EE"},{"country":"Ethiopia","code":"ET"},{"country":"Fiji","code":"FJ"},{"country":"Finland","code":"FI"},{"country":"France","code":"FR"},{"country":"French Guiana","code":"GF"},{"country":"French Polynesia","code":"PF"},{"country":"Germany","code":"DE"},{"country":"Ghana","code":"GH"},{"country":"Gibraltar","code":"GI"},{"country":"Greece","code":"GR"},{"country":"Greenland","code":"GL"},{"country":"Guadeloupe","code":"GP"},{"country":"Guatemala","code":"GT"},{"country":"Guyana","code":"GY"},{"country":"Haiti","code":"HT"},{"country":"Holy See","code":"VA"},{"country":"Honduras","code":"HN"},{"country":"Hungary","code":"HU"},{"country":"Iceland","code":"IS"},{"country":"India","code":"IN"},{"country":"Indonesia","code":"ID"},{"country":"Iran","code":"IR"},{"country":"Iraq","code":"IQ"},{"country":"Ireland","code":"IE"},{"country":"Israel","code":"IL"},{"country":"Italy","code":"IT"},{"country":"Cote d'Ivoire","code":"CI"},{"country":"Jamaica","code":"JM"},{"country":"Japan","code":"JP"},{"country":"Jordan","code":"JO"},{"country":"Kazakhstan","code":"KZ"},{"country":"Kenya","code":"KE"},{"country":"Kuwait","code":"KW"},{"country":"Laos","code":"LA"},{"country":"Latvia","code":"LV"},{"country":"Lebanon","code":"LB"},{"country":"Lesotho","code":"LS"},{"country":"Liberia","code":"LR"},{"country":"Libya","code":"LY"},{"country":"Liechtenstein","code":"LI"},{"country":"Lithuania","code":"LT"},{"country":"Luxembourg","code":"LU"},{"country":"Macao","code":"MO"},{"country":"North Macedonia","code":"MK"},{"country":"Madagascar","code":"MG"},{"country":"Malawi","code":"MW"},{"country":"Malaysia","code":"MY"},{"country":"Maldives","code":"MV"},{"country":"Mali","code":"ML"},{"country":"Malta","code":"MT"},{"country":"Marshall Islands","code":"MH"},{"country":"Mauritius","code":"MU"},{"country":"Mexico","code":"MX"},{"country":"Moldova","code":"MD"},{"country":"Monaco","code":"MC"},{"country":"Mongolia","code":"MN"},{"country":"Morocco","code":"MA"},{"country":"Mozambique","code":"MZ"},{"country":"Myanmar","code":"MM"},{"country":"Namibia","code":"NA"},{"country":"Nauru","code":"NR"},{"country":"Nepal","code":"NP"},{"country":"Netherlands","code":"NL"},{"country":"New Zealand","code":"NZ"},{"country":"Nicaragua","code":"NI"},{"country":"Niger","code":"NE"},{"country":"Nigeria","code":"NG"},{"country":"Niue","code":"NU"},{"country":"Norway","code":"NO"},{"country":"Oman","code":"OM"},{"country":"Pakistan","code":"PK"},{"country":"Palau","code":"PW"},{"country":"Palestine","code":"PS"},{"country":"Papua New Guinea","code":"PG"},{"country":"Paraguay","code":"PY"},{"country":"Peru","code":"PE"},{"country":"Pitcairn","code":"PN"},{"country":"Portugal","code":"PT"},{"country":"Puerto Rico","code":"PR"},{"country":"Qatar","code":"QA"},{"country":"Reunion","code":"RE"},{"country":"Romania","code":"RO"},{"country":"Russia","code":"RU"},{"country":"Rwanda","code":"RW"},{"country":"Saint Helena","code":"SH"},{"country":"Saint Kitts and Nevis","code":"KN"},{"country":"Saint Lucia","code":"LC"},{"country":"Saint Pierre and Miquelon","code":"PM"},{"country":"Saint Vincent and the Grenadines","code":"VC"},{"country":"Samoa","code":"WS"},{"country":"San Marino","code":"SM"},{"country":"Sao Tome and Principe","code":"ST"},{"country":"Saudi Arabia","code":"SA"},{"country":"Senegal","code":"SN"},{"country":"Seychelles","code":"SC"},{"country":"Sierra Leone","code":"SL"},{"country":"Singapore","code":"SG"},{"country":"Slovakia","code":"SK"},{"country":"Slovenia","code":"SI"},{"country":"Solomon Islands","code":"SB"},{"country":"Somalia","code":"SO"},{"country":"South Africa","code":"ZA"},{"country":"Korea, South","code":"KR"},{"country":"South Sudan","code":"SS"},{"country":"Spain","code":"ES"},{"country":"Sudan","code":"SD"},{"country":"Suriname","code":"SR"},{"country":"Svalbard and Jan Mayen","code":"SJ"},{"country":"Sweden","code":"SE"},{"country":"Switzerland","code":"CH"},{"country":"Syria","code":"SY"},{"country":"Tajikistan","code":"TJ"},{"country":"Tanzania","code":"TZ"},{"country":"Thailand","code":"TH"},{"country":"Togo","code":"TG"},{"country":"Tokelau","code":"TK"},{"country":"Tonga","code":"TO"},{"country":"Trinidad and Tobago","code":"TT"},{"country":"Tunisia","code":"TN"},{"country":"Turkey","code":"TR"},{"country":"Turkmenistan","code":"TM"},{"country":"Turks and Caicos Islands","code":"TC"},{"country":"Uganda","code":"UG"},{"country":"Ukraine","code":"UA"},{"country":"United Arab Emirates","code":"AE"},{"country":"United Kingdom","code":"GB"},{"country":"United States Of America","code":"US"},{"country":"Uruguay","code":"UY"},{"country":"Uzbekistan","code":"UZ"},{"country":"Vanuatu","code":"VU"},{"country":"Venezuela","code":"VE"},{"country":"Vietnam","code":"VN"},{"country":"Wallis and Futuna","code":"WF"},{"country":"Western Sahara","code":"EH"},{"country":"Yemen","code":"YE"},{"country":"Yugoslavia","code":"YU"},{"country":"Zambia","code":"ZM"},{"country":"Zimbabwe","code":"ZW"}];

let countryDropDownString = "";
countryJSON.forEach(countryListObject => {
    countryDropDownString += `<li><a class="dropdown-item country-list text-dark" href="#">${tempCountry}</a></li>`;
})

const loadingComplete = function (){
    const loading = document.getElementById('loading');
    loading.style.display = 'none';    
}

const countryDropDown = document.getElementById('country-dropdown');
countryDropDown.innerHTML = countryDropdownString;

let selectedCountry;
let selectedCountryCode;
const countrySelectorButton = document.getElementsById('country-selector-button');
const countryList = document.querySelectorAll('.country-list');
countryList.forEach ((item, index) => {
        item.addEventListener('click', ()=>{
            selectedCountry = item.innerText;
            selectedCountryCode = countryJSON[index].code; 
            console.log(selectedCountry, selectedCountryCode);
            countrySelectorButton.innerText = selectedCountry;
        
        })   
});


const initiateGeneralDetailsContainer = function(){
    generalDetailsContainer.innerHTML = `
    <p class="country-name py-4 text-white"></p>
    <p class="confirmed-cases text-danger"></p>
    <p class="percentage-confirmed text-danger"></p>
    <p class="deaths text-danger"></p>
    <p class="recovered text-success mt-4"></p>
    <p class="completely-vaccinated text-success"></p>
    <p class="partially-vaccinated text-success pb-4"></p>
    `
}

let cardCountryName;
let cardConfirmedCases;
let cardPercentageConfirmed;
let cardDeaths;
let cardRecovered;
let cardCompletelyVaccinated;
let cardPartiallyVaccinated;
let cardPercentageVaccinated;


const generalDetailsContainer = document.getElementById('general-details-container');
const canvasContainer = document.getElementById('canvas-container');
const radioButtonContainer = document.getElementById('radio-button-container');
const spinner = document.getElementById('spinner');

const initiateDomOperators = function(){
    cardCountryName = document.querySelector('.country-name');
    cardConfirmedCases = document.querySelector('.confirmed-cases');
    cardPercentageConfirmed = document.querySelector('.percentage-confirmed');
    cardDeaths = document.querySelector('.deaths');
    cardRecovered = document.querySelector('.recovered');
    cardCompletelyVaccinated = document.querySelector('.completely-vaccinated'); 
    cardPartiallyVaccinated = document.querySelector('.partially-vaccinated');
    cardPercentageVaccinated = document.querySelector('.percentage-vaccinated');

}

let radioButtons = document.getElementsByClassName('radio-button');


const getData = async (url) => {
    return fetch(url).then(res => {
        return res.json();
    });
};

const fetchCountryGeneralData = async function (name) {
    const  data = await Promise.all ([ 
        getData(`https://covid-api.mmediagroup.fr/v1/cases?ab=${name}`),
        getData(`https://covid-api.mmediagroup.fr/v1/vaccines?ab=${name}`)
    ]);

    return data;
}

let canvasDisplayFlag = 0;

const displayCountryGeneralData = function(data1){
    console.log(data1);
    cardCountryName.innerText = `Name of the country: ${data1[0].All.country}`;
    cardConfirmedCases.innerText = `Total Confirmed Cases: ${data1[0].All.confirmed}`;
    cardPercentageConfirmed.innerText = `Percentage of population affected: ${((parseFloat(data1[0].All.confirmed) / parseFloat(data1[0].All.population))*100).toFixed(4)}`;
    cardDeaths.innerText = `Total Deaths: ${data1[0].All.deaths}`;
    cardRecovered.innerText =   `Total Recovered: ${data1[0].All.recovered}`;
    cardCompletelyVaccinated.innerText = `Completely Vaccinated: ${data1[1].All.people_vaccinated}`;
    cardPartiallyVaccinated.innerText = `Partially Vaccinated: ${data1[1].All.people_partially_vaccinated}`;
}


const checkError = function(count){
   for( let i =  1; i < count.length; i++){
       if(count[i] < count(i - 1))
            count[i] = count[i - 1];
   }
}

let chart1, chart2, chart3, chart4, chart5, chart6;

const displayCountryHistoryData = function(data2){

    dates = Object.keys(data2[0].All.dates);
    dates.reverse();
    deathCounts = [];
    dates.forEach((date) => {
        deathCounts.push(data2[0].All.dates[date]);
    })
    checkDeathError(deathCounts);
    dailySeathCounts = [0];
    for(let i = 1; i < dates.length; i++)
        dailyDeathCounts.push(deathCounts[i] - deathCounts[i - 1]);
    confirmedDates = dates;
    confirmedCounts = [];
    confirmedDates.forEach((date) => {
        confirmedCounts.push(data2[1].All.dates[date]);
    })
    checkError(confirmedCounts);
    dailyConfirmedCounts = [0];
    for (let i=1; i<dates.length; i++){
        dailyConfirmedCounts.push(confirmedCounts[i]-confirmedCounts[i-1]);
    }
    recoveredDates = dates;
    let recoveredCounts = [];
    recoveredDates.forEach(date => {
        recoveredCounts.push(data2[2].All.dates[date]);
    })
    checkError(recoveredCounts);
    dailyRecoveredCounts = [0];
    for (let i=1; i<dates.length; i++){
        dailyRecoveredCounts.push(recoveredCounts[i]-recoveredCounts[i-1]);
    }


    let obj = {
        a: dates, 
        b: deathCounts, 
        c: dailyDeathCounts,
        d: confirmedCounts, 
        e: dailyConfirmedCounts,
        f: recoveredCounts, 
        g: dailyRecoveredCounts

    };

    let chartAll = {
        chartDeathDates : dates,
        chartDeathCounts : deathCounts,
        chartDailyDeathCounts : dailyDeathCounts,
        chartConfirmedCounts : confirmedCounts,
        chartDailyConfirmedCounts : dailyConfirmedCounts,
        chartRecoveredCounts : recoveredCounts,
        chartDailyRecoveredCounts : dailyRecoveredCounts
    };

    displayChart(chartAll);

    let chart30 = calculateChart(30,obj);
    let chart90 = calculateChart(90,obj);
    let chart180 = calculateChart(180, obj);

    radioButtons = document.getElementsByClassName('radio-button');

    for (let i = 0; i < 4; i++ ){
        radioButtons[i].addEventListener('click', ()=>{
            if(i == 0)
                editChart(chart30);
            else if(i == 1)
                editChart(chart90);
            else if(i == 2)
                editChart(chart180);
            else
                editChart(chartAll);
        })
    }
}

const editChart = function(obj){
    const {chartDeathDates, chartDeathCounts, chartDailyDeathCounts, chartConfirmedCounts, chartDailyConfirmedCounts, chartRecoveredCounts, chartDailyRecoveredCounts} = obj;
    chart1.data.labels = chartDeathDates;
    chart1.data.datasets[0].data = chartDeathCounts;
    chart1.update();

    chart2.data.labels = chartDeathDates;
    chart2.data.datasets[0].data = chartDailyDeathCounts;
    chart2.update();

    chart3.data.labels = chartDeathDates;
    chart3.data.datasets[0].data = chartConfirmedCounts;
    chart3.update();

    chart4.data.labels = chartDeathDates;
    chart4.data.datasets[0].data = chartDailyConfirmedCounts;
    chart4.update();

    chart5.data.labels = chartDeathDates;
    chart5.data.datasets[0].data = chartRecoveredCounts;
    chart5.update();

    chart6.data.labels = chartDeathDates;
    chart6.data.datasets[0].data = chartDailyRecoveredCounts;
    chart6.update();
}

const calculateChart = function(timeSpan, obj){
    const {a,b,c,d,e,f,g} = obj;
    let l = a.length;
    let obj2 = {
        chartDeathDates : [],
        chartDeathCounts : [],
        chartDailyDeathCounts : [],
        chartConfirmedCounts : [],
        chartDailyConfirmedCounts : [],
        chartRecoveredCounts : [],
        chartDailyRecoveredCounts : [],
    }

    for (let i=l-timeSpan; i<l; i++){
        obj2.chartDeathDates.push(a[i]);
        obj2.chartDeathCounts.push(b[i]);
        obj2.chartDailyDeathCounts.push(c[i]);
        obj2.chartConfirmedCounts.push(d[i]);
        obj2.chartDailyConfirmedCounts.push(e[i]);
        obj2.chartRecoveredCounts.push(f[i]);
        obj2.chartDailyRecoveredCounts.push(g[i]);

    }

    return obj2;
}

const displayChart = function(obj){
    const {chartDeathDates, chartDeathCounts, chartDailyDeathCounts, chartConfirmedCounts, chartDailyConfirmedCounts, chartRecoveredCounts, chartDailyRecoveredCounts} = obj;

    canvasContainer.innerHTML = 
    `
    <div class="canvas-chart d-inline-block"><canvas id="chart-canvas-total-confirmed-cases" class="h-50 w-100 mt-5 p-3 bgdarkoverlay"></canvas></div>
    <div class="canvas-chart d-inline-block"><canvas id="chart-canvas-daily-confirmed-cases" class="h-50 w-100 mt-5 p-3 bgdarkoverlay"></canvas></div>
    <div class="canvas-chart d-inline-block"><canvas id="chart-canvas-total-deaths" class="h-50 w-100 mt-5 p-3 bgdarkoverlay"></canvas></div>
    <div class="canvas-chart d-inline-block"><canvas id="chart-canvas-daily-deaths" class="h-50 w-100 mt-5 p-3 bgdarkoverlay"></canvas></div>
    <div class="canvas-chart d-inline-block"><canvas id="chart-canvas-total-recovered" class="h-50 w-100 mt-5 p-3 bgdarkoverlay"></canvas></div>
    <div class="canvas-chart d-inline-block"><canvas id="chart-canvas-daily-recovered" class="h-50 w-100 mt-5 p-3 bgdarkoverlay"></canvas></div>`

    chart1 = makeChart(1, 'total-confirmed-cases', chartDeathDates, chartConfirmedCounts);
    chart2 = makeChart(1, 'daily-confirmed-cases', chartDeathDates, chartDailyConfirmedCounts);
    chart3 = makeChart(2, 'total-deaths', chartDeathDates, chartDeathCounts);
    chart4 = makeChart(2, 'daily-deaths', chartDeathDates, chartDailyDeathCounts)
    chart5 = makeChart(3, 'total-recovered', chartDeathDates, chartRecoveredCounts);
    chart6 = makeChart(3, 'daily-recovered', chartDeathDates, chartDailyRecoveredCounts);

}

const displayError = function(){
    cardCountryName.innerText = 'Country Not Found';
    spinner.style.display = 'none';
}

const countrySearchButton = document.getElementById('country-search-button');

