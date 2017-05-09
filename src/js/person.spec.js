describe('Person class', function() {
    it("should use instances", function() {
        var name = "Orville Redenbacher",
            person = new Person(name);

        expect(person.getName()).toEqual(name);

        var person2 = new Person("Otis Spunkmeyer");

        expect(person.getName()).toEqual(name);
    });

    it("should accept and save the name parameter", function() {
        var name = "Orville Redenbacher",
            person = new Person(name);

        expect(person.getName()).toEqual(name);
    });

    it("should set a favorite flavor per instance", function() {
        var name = "Orville Redenbacher",
            flavor = "popcorn",
            name2 = "Otis Spunkmeyer",
            flavor2 = "cookie dough",
            person = new Person(name),
            person2 = new Person(name2);

        person.setFavoriteFlavor(flavor);
        person2.setFavoriteFlavor(flavor2);

        expect(person.getFavoriteFlavor()).toEqual(flavor);
        expect(person2.getFavoriteFlavor()).toEqual(flavor2);
    });
});
