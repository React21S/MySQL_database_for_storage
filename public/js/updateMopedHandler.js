'use strict';

(function(){
    let resultArea;
    let inputField;

    document.addEventListener('DOMContentLoaded', moped);

    function moped(){
        resultArea = document.getElementById('resultArea');
        inputField = document.getElementById('mopedId');
        document.getElementById('submit').addEventListener('click', Post)
    };

    
  const Post=async ()=>{
       
        clearMessageArea();
        resultArea.innerHTML = '';
        const mopedId = inputField.value
        try{
            const options = {
                method:'POST',
                body:JSON.stringify({mopedId}),
                headers: {
                    'Content-Type':'application/json'
                }
            };
            const data = await fetch('/getMoped', options);
            const resultJson = await data.json();
            updatePage(resultJson);
        }
        catch(err){
            updateMessageArea(err.message, 'err')
        }
    }

    // updating the page function 
    const updatePage=(result)=>{
        if(result){
            if(result.message){
                updateMessageArea(result.message, result.type)
            }
            else{
                updateMoped(result);
            }
        }
        else{
            updateMessageArea('Not found', 'err')
        }
    };

    // updating the moped
  const updateMoped=(moped)=>{
        resultArea.innerHTML = 
        `<p>MopedId:<span>${moped.mopedId}</span></p>
        <p>Name:<span> ${moped.name}</span></p>
        <p>ModelYear:<span> ${moped.modelYear}</span></p>
        <p>Rating:<span> ${moped.rating}</span></p>
        <p>TopSpeed:<span> ${moped.topspeed}</span></p>
        `;
    }

})();