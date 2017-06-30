var Person = (function() {
    function Person(n) {
        var favoriteFlavor,
            name = n,
            imageUrl;

        return {
            setFavoriteFlavor: function (flavor) {
                favoriteFlavor = flavor;
            },
            getFavoriteFlavor: function () {
                return favoriteFlavor;
            },
            getName: function() {
                return name;
            },
            setImage: function(url) {
                imageUrl = url;
            },
            getImage: function() {
                return imageUrl;
            }
        };
    }

    return Person;
})();