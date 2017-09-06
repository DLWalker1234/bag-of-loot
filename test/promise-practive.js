// describe('getToysByChild', () => {
//     it('should be a function', () => {
//       isFunction(getToysByChild);
//     });

//     let tests = [
//       {child: "Timmy", expected: ["Furby", "soccer ball", "stuffed unicorn", "Bananagrams"], method: getToysByChild},
//       {child: "Martha", expected: ["football", "cow"], method: getToysByChild},
//       {child: "Danny", expected: [], method: getToysByChild}
//     ];

//     // Read these to better understand the two tests below
//     // https://www.sitepoint.com/promises-in-javascript-unit-tests-the-definitive-guide/
//     // https://github.com/domenic/chai-as-promised
//     it('should output an array', () => Promise.all(tests.map( (test) => assert.eventually.isArray(test.method(test.child) ))));

//     it("should output array of a child's toys", () => Promise.all(tests.map( (test) => assert.eventually.deepEqual(test.method(test.child), test.expected ))));

//   }); //end of getToysByChild tests