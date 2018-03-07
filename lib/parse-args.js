"use strict";

module.exports = (args) => {    
    if (args.length === 0) {
        return {
            count: "1",
            sides: "6"
        };
    } else if (args.length === 1) {
        return {
            count: "1",
            sides: args[0]
        };
    } else if (args.length > 1 && args.length < 3) {
        return {
            count: args[0],
            sides: args[1]
        };
    } else {
        console.log('USAGE: rolldice [number of rolls, number of sides]');
        process.exit();
    }
};