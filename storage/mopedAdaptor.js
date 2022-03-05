'use strict';

const toArrayInsert = (moped)=>[
    Number(moped.mopedId) ,
    moped.name,
    Number(moped.modelYear),
    moped.rating,
    Number(moped.topspeed)
];


const toArrayUpdate = (moped)=>[
    moped.name,
    Number(moped.modelYear),
    moped.rating,
    Number(moped.topspeed),
    Number(moped.mopedId),
];


module.exports = {toArrayInsert, toArrayUpdate};

// when toArray is called then it 
// returns something like this [5, "Grampa 89", 2012, "*", 40],
