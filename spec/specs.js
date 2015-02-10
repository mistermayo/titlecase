describe("titleCase", function() {
  it("capitalizes the first letter of a word", function() {
    expect(titleCase("cat")).to.equal("Cat");
  });

  it("capitalizes the first letter of multiple words", function() {
    expect(titleCase("two very big cats")).to.equal("Two Very Big Cats");
  });

  it("downcases all mixed case letters", function() {
    expect(titleCase("tWo HuGe big CaTs")).to.equal("Two Huge Big Cats");
  });

});
