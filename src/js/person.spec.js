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

    it("should set an image per instance", function() {
        var name = "Orville Redenbacher",
            name2 = "Otis Spunkmeyer",
            url1 = "popcorn.jpg",
            url2 = "cookies.jpg",
            person = new Person(name),
            person2 = new Person(name2);

        person.setImage(url1);
        person2.setImage(url2);

        expect(person.getImage()).toEqual(url1);
        expect(person2.getImage()).toEqual(url2);
    });
});
