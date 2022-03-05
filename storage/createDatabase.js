'use strict';

const Database = require('./database');


const printMessage = message => console.log(message);
const printStatement = statement=>printMessage(`${statement}`);
const printError = message=>printMessage(`${'#'.repeat(20)} Error ${'#'.repeat(20)}\n${message}\n${'#'.repeat(47)}`);


let createStatementFile='./Oyinloye_Femi_moped_createStatements.json';

if(process.argv.length > 2){
    createStatementFile=`./${process.argv[2]}`;
};

// For creating and inserting data into database. 
const createDb = async(createStatements)=>{
    const options = {
        host:createStatements.host,
        port:createStatements.port,
        user:createStatements.admin,
        password:createStatements.adminpassword
    };
    const DEBUG = createStatements.debug; 
    const db = new Database(options);
    // 'noah@localhost '
    const user=`'${createStatements.user}'@'${createStatements.host}'`;
    const dropDatabaseSql = `drop database if exists ${createStatements.database}`;
    const createDatabaseSql = `create database ${createStatements.database}`;
    const dropUserSql = `drop user if exists ${user}`;
    const createUserSql = `create user if not exists ${user} `+
    `identified by '${createStatements.password}'`
    const grandPrivilegesSql = `grant all privileges on ${createStatements.database}.* to ${user}`;

    try{
        await db.doQuery(dropDatabaseSql);
        if(DEBUG){printStatement(dropDatabaseSql)};
        await db.doQuery(createDatabaseSql);
        if(DEBUG){printStatement(createDatabaseSql)};

        if(createStatements.dropUser){
            await db.doQuery(dropUserSql);
            if(DEBUG) printStatement(dropUserSql)
        }
       await db.doQuery(createUserSql);
       if(DEBUG)printStatement(createUserSql);
       await db.doQuery(grandPrivilegesSql)
       if(DEBUG)printStatement(grandPrivilegesSql);

       for (let table of createStatements.tables){
           if(table.columns && table.columns.length > 0){
               const createtableSql = 
               `create table ${createStatements.database}.${table.tableName}(`+
               `\n\t${table.columns.join(',\n\t')}`+
               `)`;
               await db.doQuery(createtableSql);
               if(DEBUG)printStatement(createtableSql)

                // To insert the data into database
               if (table.data && table.data.length > 0){
                    const rows=[];
                    for(let data of table.data){
                        const insertSql=
                        `insert into ${createStatements.database}.${table.tableName} `+
                        `values(${Array(data.length).fill('?').join(',')})`;
                        rows.push(db.doQuery(insertSql,data))
                    }
                    await Promise.all(rows);
                    if(DEBUG) printMessage('data added');
               }
               else{
                    if(DEBUG)printMessage('data missing')
               }
           }
           else{
               if(DEBUG)printMessage('Table columns missing. Table was not created')
           }
       }
    }
    catch(err){
        printError(err.message);
    }

}


try{
    createDb(require(createStatementFile))
}
catch(err){
   printError(err.message)
}

