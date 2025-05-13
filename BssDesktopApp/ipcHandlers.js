const { ipcMain } = require('electron');

var knex = require("knex")({
    client: "sqlite3",
    connection: {
        filename: "./public/bss.db"
    },
    useNullAsDefault: true
});

// initialize ipc main handlers
function initIPCHandlers() {    
    ipcMain.on('getTests', (event, arg) => {
        let result = knex.select('*').from('Test');

        result.then(function (rows){
            event.sender.send('result_SendTests', rows);
        });       
    });
}

module.exports = { initIPCHandlers };
