describe("first Jasmine test", function() {
    it("first spec with a function", function() {
        expect(true).toBe(first());
    });
    it("second spec with Jasmin which must fail", function() {
        expect(true).not.toBe(notTrue());
    });
    it("this spec compares two strings", function() {
        var returnedValue = sayHello(); 
        var expectedValue = "hello";
        expect(expectedValue).toBe(returnedValue);
    });
});
