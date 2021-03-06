describe('Flavor module', function() {
    it("should return a random flavor", function() {
        spyOn(Math, "random").and.returnValue(0);
        var flavor = Flavor.getRandomFlavor();

        expect(Math.random).toHaveBeenCalled();
        expect(flavor).toEqual("vanilla");
    });
});
