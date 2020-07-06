describe("multiplyNumber", function() {
  it("return doubles of the numeric values", function(){
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };
    let result = multiplyNumeric(menu);
    assert.equal(400, menu.width);
    assert.equal(600, menu.height);
    assert.equal("My menu", menu.title);
  });
  it("returns nothing when empty", function() {
    assert.isUndefined(multiplyNumeric({}));
  });
});
