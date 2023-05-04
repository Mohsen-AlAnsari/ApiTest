

const Config = {
    user:'M_MarketDB',
    password:'User19957$' , 
    server:'ws05.server.ly',
    database:'shwehdis_MarketDB',
    options:{
        trustServerCertificate:true,
        trustedConnection:false,
        enableArithAbort:true,
        instancename:'MSSQLSERVER2017',
    },
    stream:false,
    pool: {
      max: 10,
      min: 0,
      idleTimeoutMillis: 40000
    },
};

module.exports = Config;