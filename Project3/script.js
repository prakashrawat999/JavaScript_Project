const calculateTemp = () => {

    const numberTemp = document.getElementById('temp').value;
    //console.log(numberTemp);

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    const celToFah = (cel) => {
        let Fahrenheit = Math.round((cel*9/5) + 32);
        return Fahrenheit;
    }

    const fehToCel = (feh) => {
        let Celsius = Math.round((feh-32) * 5/9);
        return Celsius;
    }

    let result;

    if(valueTemp == 'cel')
    {
        result = celToFah(numberTemp);
        document.getElementById('resultCont').innerHTML= `${result}*Fahrenheit`;
    }
    else{
        result = fehToCel(numberTemp);
        document.getElementById('resultCont').innerHTML= `${result}*Celsius`;
    }
}