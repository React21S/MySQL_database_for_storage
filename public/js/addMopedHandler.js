'use strict';

(function(){
    let mopedIdField;
    let nameField;
    let modelYearField;
    let ratingField;
    let topSpeedField;

    document.addEventListener('DOMContentLoaded', addMoped);

    // init function 
    function addMoped(){
        mopedIdField= document.getElementById('mopedId');
        nameField= document.getElementById('name');
        modelYearField= document.getElementById('modelYear');
        ratingField= document.getElementById('rating');
        topSpeedField= document.getElementById('topspeed');

        document.getElementById('submit').addEventListener('click', Send);
    };

    // const Send=async()=>

    async function Send(){
        clearMessageArea
        const moped ={
            mopedId:mopedIdField.value,
            name:nameField.value,
            modelYear:modelYearField.value,
            rating:ratingField.value,
            topspeed:topSpeedField.value
        };

        try{
            const options={
                method:'POST',
                body:JSON.stringify(moped),
                headers:{
                    'Content-Type':'application/json'
                }
            };

            const data = await fetch('/add', options)
            const resultJson = await data.json();
            if(resultJson.message){
                updateMessageArea(resultJson.message, resultJson.type)
            }

        }
        catch (err){
            updateMessageArea(err.message, 'err')
        }
    }

})();