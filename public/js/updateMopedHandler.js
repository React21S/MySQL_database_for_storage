'use strict';

(function(){
    let mopedIdField;
    let nameField;
    let modelYearField;
    let ratingField;
    let topSpeedField;
    let searchField = true

    document.addEventListener('DOMContentLoaded', updateMoped);

    // init function 
    function updateMoped(){
        mopedIdField= document.getElementById('mopedId');
        nameField= document.getElementById('name');
        modelYearField= document.getElementById('modelYear');
        ratingField= document.getElementById('rating');
        topSpeedField= document.getElementById('topspeed');

        updatedMopedFields();

        document.getElementById('submit').addEventListener('click', Update);

        mopedIdField.addEventListener('focus', clearAll)

       
    };


   function clearAll(){
        if(searchField){
            clearInputValues();
            clearMessageArea();
        }
    }

    // updatedMopedFields
    function updatedMopedFields(){
        if(searchField){
            mopedIdField.removeAttribute('readonly');
            nameField.setAttribute('readonly', true);
            modelYearField.setAttribute('readonly', true);
            ratingField.setAttribute('readonly', true);
            topSpeedField.setAttribute('readonly', true);
        }
        else{
            mopedIdField.setAttribute('readonly', true);
            nameField.removeAttribute('readonly');
            modelYearField.removeAttribute('readonly');
            ratingField.removeAttribute('readonly');
            topSpeedField.removeAttribute('readonly');
        }
    };

    // Clear input field function 
    function clearInputValues(){
        mopedIdField.value='';
        nameField.value='';
        modelYearField.value='';
        ratingField.value='';
        topSpeedField.value='';
        searchField=true;
        updatedMopedFields();
    };

    // updated moped value function 
    function updateMopedValues(moped){
        mopedIdField.value= moped.mopedId
        nameField.value = moped.name
        modelYearField.value = moped.modelYear,
        ratingField.value = moped.rating
        topSpeedField.value = moped.topspeed,
        searchField=false;
        updatedMopedFields();
    };


    // update function 
    async function Update(){
        try{
            if(searchField){
                clearMessageArea();
                const mopedId=mopedIdField.value;
                const options={
                    method:'POST',
                    body:JSON.stringify({mopedId}),
                    headers:{
                        'Content-Type':'application/json'
                    }
                };
                const data = await fetch('/getMoped',options);
                const getResult = await data.json();

                if(getResult){
                    if(getResult.message){
                        updateMessageArea(getResult.message, getResult.type);
                    }
                    else{
                        updateMopedValues(getResult);
                    }
                }
                else {
                    updateMessageArea('Not found','error');
                }
            }
            else{
                const moped= {
                    mopedId:Number(mopedIdField.value) ,
                    name:nameField.value,
                    modelYear:Number(modelYearField.value),
                    rating:ratingField.value,
                    topspeed:Number(topSpeedField.value)
                };
                const options = {
                    method: 'POST',
                    body: JSON.stringify(moped),
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };

                const data = await fetch('/update', options);
                const resultJson = await data.json();

                if(resultJson.message){
                    updateMessageArea(resultJson.message, resultJson.type);
                }
                searchField=true;
                updatedMopedFields();
            }

        }
        catch(error){
            updateMessageArea(error.message, 'error');
        }
    }



})();