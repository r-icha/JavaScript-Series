const form = document.querySelector('form')
//  form jb bhi submit hota h toh ya toh wo POST type se ya GET type se submit hota h.

const height = parseInt(document.querySelector('#height').value) //This value will give you empty value.
form.addEventListener('submit', function(e){
    e.preventDefault()

    const height = parseInt(document.querySelector('#height').value) //.value se value milegi string m  and parseInt is use for  convert string to integer.
    const weight = parseInt(document.querySelector('#weight').value)
    const results = document.querySelector('#results')


    if(height === '' || height < 0 || isNaN(height)){
        results.innerHTML = `Please enter valid height ${height}`;
    }
    // results.innerHTML = `${height}`;

    else if(weight === '' || weight < 0 || isNaN(weight)){
        results.innerHTML = `Please enter valid height ${weight}`;
    }
    else{
        const bmi = (weight / ((height*height)/10000)).toFixed(2);       //toFixed is use for round off the value upto 2 decimal places.
        // results.innerHTML = `<span>${bmi}</span>`;
        
        if(bmi < 18.6){
            results.innerHTML = `<span>Under Weight ${bmi}</span>`;
        }
        else if(bmi > 18.6 && bmi < 24.9){
            results.innerHTML = `<span> Normal Range ${bmi} </span>`;
        }
        else{
            results.innerHTML = `<span> Over Weight ${bmi} </span>`;
        }
    }
});