'use strict';

(function(){
    let inputField;
    document.addEventListener('DOMContentLoaded', init);

    function init(){
        inputField = document.getElementById('mopedId');
        document.getElementById('submit').addEventListener('click', Delete);
    };
    const Delete =async()=>{
        clearMessageArea();
        const mopedId = inputField.value
        try{
            const options={
                method:'POST',
                body:JSON.stringify({mopedId}),
                headers:{
                    'Content-Type':'application/json'
                }
            }
            const data = await fetch('/remove', options);
            const result = await data.json();
            if(result.message){
                updateMessageArea(result.message, result.type)
            }
        }
        catch(err){
            updateMessageArea(err.message, 'error')
        }

    }
})();