var Flavor = (function(globals) {
    var flavors = ["vanilla", "chocolate", "strawberry", "mint", "peanut butter", "cherry", "raspberry"];

    return {
        getRandomFlavor: function () {
            return flavors[Math.round(Math.random() * (flavors.length - 1))];
        }
    };
})(window);