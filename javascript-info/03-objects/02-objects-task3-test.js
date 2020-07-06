describe("sumSalary", function() {
  it("returns 0 for empty list of employee", function(){
    assert.equal(0, sumSalary());
  });
  it("returns 390 for the specific list", function() {
    let employeeList = {
      John: 100,
      Ann: 160,
      Pete: 130
    };
    assert.equal(390, sumSalary(employeeList));
  });
});
