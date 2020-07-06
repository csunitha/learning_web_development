//mocha framework - elements - describe / it
//specification
describe ("pow", function() {

  before(() => console.log("Test starting") );
  //after(() => alert("Test completed"));

  beforeEach(() => console.log("individual test starting"));
  afterEach(()=> console.log("individual test completed"));

  //use case 1
  it("2 raised to 3 expected 8", function() {
    assert.equal( pow(2,3), 8 );
  });

  //use case 2
  it("3 raised to 4 expected 81", function() {
    assert.equal( pow(3,4), 81);
  });

 //use case 3 - creating a subgroup of tests with another describe
  describe("raises x to power 3", function () {
    //sample where we can make test
    function makeTest(x) {
      let expected = x * x * x;
      it(`${x} in the power 3 is ${expected}`, function() {
        assert.equal(pow(x, 3), expected);
      });
    }

    for (let x = 1; x <= 5; x++) {
      makeTest(x);
    }
  });

  //use case 4 - negative testing
  describe("negative cases", function () {
    it("for negative n result is NaN", function () {
      assert.isNaN(pow(2,-1));
    });
    it("for non number n result is NaN", function () {
      assert.isNaN(pow(2,"a"));
    });

  });
});
