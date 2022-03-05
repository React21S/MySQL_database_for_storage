'use strict';

(function(){
    document.addEventListener('DOMContentLoaded', moped);
    async function moped(){
        try {
            const data = await fetch('/getAll'); // default GET
            const mopeds = await data.json()

            // for getting result from html
            const resultArea = document.getElementById('resultArea');
            for(let moped of mopeds){
                const tr = document.createElement('tr');
                tr.appendChild(creatCell(moped.mopedId));
                tr.appendChild(creatCell(moped.name));
                tr.appendChild(creatCell(moped.modelYear))
                tr.appendChild(creatCell(moped.rating));
                tr.appendChild(creatCell(moped.topspeed));
                resultArea.appendChild(tr)
            };
        }
        catch(err){
            document.getElementById('messageArea')
            .innerHTML=`<p class="err">${err.message}</p>`
        }
    };

    function creatCell(data){
        const td = document.createElement('td');
        td.textContent = data;
        return td;
    }

})();