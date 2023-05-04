const config = require('./dbConfig');
const sql = require('mssql');


const getItems = async ()=>{
    try{
        let pool = await sql.connect(config);
        let items =  await pool.request().query("select itemname , itemcode from items");
        console.log(items.recordsets);
        return items.recordsets[0];
    }
    catch(err){
        console.log(err);
    }
}


const createItem = async(item)=>{
    let pool = await sql.connect(config);
    let items = await pool.request(`insert into item(itemname , itemcode) values(${item.itemname},${item.itemcode})`)
}

module.exports = {getItems} ;

