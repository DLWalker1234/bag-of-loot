#!/usr/bin/env node


const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('bag.sqlite', (err) => console.log("Connected"));

db.run('DROP TABLE IF EXISTS "bag"');

const createEmployeesTable = () => {
    db.run('CREATE TABLE IF NOT EXISTS "bag" (id INT PRIMARY KEY, name TEXT, loot TEXT)');
};
createEmployeesTable();

db.run('INSERT INTO "bag" (id, name, loot) VALUES (1, FRED, ball)');


// Items can be added to bag.
module.exports.parseArgs = () => {
    let argsArray = [];
    if (argsArray.length === 4) {
        let command = argsArray[1];
        let name = argsArray[2];
        let loot = argsArray[3];
        return command, name, loot
    }
    if (argsArray.length === 3) {
        let command = argsArray[1];
        let name = argsArray[2];
        return command, name
    }
    if (argsArray.length === 2) {
        let command = argsArray[1];
        return command
    }
};

module.exports.commandSeek = (command) => {
    if (command === add) {

    }
    if (command === remove) {

    }
    if (command === delivered) {

    } else {

    };

};


module.exports.addNameToBag = (command, name) => {
    db.run('INSERT INTO "bag" (id, name) VALUES (INT++, name');

};


// Items can be removed from bag, per child only. Removing 
// ball from the bag should not be allowed. A child's name must be specified.


// Must be able to list all children who are getting a toy.


// Must be able to list all toys for a given child's name.


// Must be able to set the delivered property of a child, 
// which defaults to false to true.
// Bonus Features