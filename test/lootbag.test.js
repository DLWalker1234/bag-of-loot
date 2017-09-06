const { assert: { isFunction, isArray } } = require('chai');
const { should: { arguments } } = require('chai');
const { lootbag } = require('../js/lootbag');
const { parseArgs, commandSeek, addNameToBag } = require('../js/lootbag');

describe('lootbag', () => {
    describe('parseArgs', () => {
        it('should be a function', () => {
            isFunction(parseArgs);
        })
        describe('commandSeek', () => {
            it('should be a function', () => {
                isFunction(commandSeek);
            })
            describe('addNameToBag', () => {
                it('should be a function', () => {
                        isFunction(addNameToBag);
                    })
                    //how to test for a promise some how???
                it('should retrun a promise', () - > {
                    return getToysByChild("Timmy")
                        .then((data) => {
                            isArray(data);
                        })
                })
            })
        })

    })
});