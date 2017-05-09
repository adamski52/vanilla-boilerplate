var Person = (function() {
    function Person(n) {
        var favoriteFlavor,
            name = n;

        return {
            setFavoriteFlavor: function (flavor) {
                favoriteFlavor = flavor;
            },
            getFavoriteFlavor: function () {
                return favoriteFlavor;
            },
            getName: function() {
                return name;
            }
        };
    }

    return Person;
})();