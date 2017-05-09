(function(globals) {
    "use strict";

    var boilerplate,
        boilerplateContent,
        peopleContainer;

    globals.onload = function() {
        boilerplate = document.getElementById("boilerplate");
        boilerplateContent = boilerplate.getElementsByTagName("span")[0];
        peopleContainer = document.getElementById("people");

        hookupEvents();
        var people = createPeople();
        drawPeople(people);
    };

    function hookupEvents() {
        if(!boilerplate || !boilerplateContent) {
            return;
        }

        boilerplate.onclick = function () {
             boilerplateContent.innerHTML = Flavor.getRandomFlavor();
        };
    }

    function createPeople() {
        if(!peopleContainer) {
            return;
        }

        var people = [],
            flavaFlav = new Person("Flava Flav"),
            bobRoss = new Person("Bob Ross");

        flavaFlav.setFavoriteFlavor(Flavor.getRandomFlavor());
        bobRoss.setFavoriteFlavor(Flavor.getRandomFlavor());

        people.push(flavaFlav);
        people.push(bobRoss);

        return people;
    }

    function drawPeople(people) {
        for(var i = 0; i < people.length; i++) {
            drawPerson(people[i]);
        }
    }

    function drawPerson(person) {
        var element = document.createElement("h2");
        element.innerHTML = person.getName() + " likes " + person.getFavoriteFlavor();
        peopleContainer.appendChild(element);
    }
})(window);
