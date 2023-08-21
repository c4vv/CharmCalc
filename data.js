class Gym {
    constructor(region, city, name, profit) {
        this.region = region;
        this.city = city;
        this.name = name;
        this.profit = profit;
    }
}

const GYMS = [
    new Gym("Kanto", "Pewter", "Brock", 8632),
    new Gym("Kanto", "Cerulean", "Misty", 8736),
    new Gym("Kanto", "Vermillion", "Lt. Surge", 8840),
    new Gym("Kanto", "Celadon", "Erika", 8944),
    new Gym("Kanto", "Fuchsia", "Koga", 9048),
    new Gym("Kanto", "Saffron", "Sabrina", 9152),
    new Gym("Kanto", "Cinnabar", "Blaine", 9256),

    new Gym("Hoenn", "Rustboro", "Roxane", 8632),
    new Gym("Hoenn", "Dewford", "Brawly", 8736),
    new Gym("Hoenn", "Mauville", "Wattson", 8840),
    new Gym("Hoenn", "Lavaridge", "Flannery", 8944),
    new Gym("Hoenn", "Petalburg", "Norman", 9048),
    new Gym("Hoenn", "Fortree", "Winona", 9152),
    new Gym("Hoenn", "Mossdeep", "Liza & Tate", 9256),
    new Gym("Hoenn", "Sootopolis", "Juan", 9360),

    new Gym("Sinnoh", "Oreburgh", "Roark", 8632),
    new Gym("Sinnoh", "Eterna", "Gardenia", 8736),
    new Gym("Sinnoh", "Hearthome", "Fantina", 8840),
    new Gym("Sinnoh", "Veilstone", "Maylene", 8944),
    new Gym("Sinnoh", "Pastoria", "Crasher Wake", 9048),
    new Gym("Sinnoh", "Canalave", "Byron", 9152),
    new Gym("Sinnoh", "Snowpoint", "Candice", 9256),
    new Gym("Sinnoh", "Sunyshore", "Volkner", 9360),

    new Gym("Unova", "Striation", "Chili", 8632), // Fire
    new Gym("Unova", "Striation", "Cilian", 8632), // Grass
    new Gym("Unova", "Striation", "Cress", 8632), // Water
    new Gym("Unova", "Nacrene", "Lenora", 8736),
    new Gym("Unova", "Castelia", "Burgh", 8840),
    new Gym("Unova", "Nimbasa", "Elesa", 8944),
    new Gym("Unova", "Driftveil", "Clay", 9048),
    new Gym("Unova", "Mistralton", "Skyla", 9152),
    new Gym("Unova", "Icirrus", "Brycen", 9256),
    new Gym("Unova", "Opelucid", "Iris", 9360),

    new Gym("Johto", "Violet City", "Falkner", 7968), // Fire
    new Gym("Johto", "Azalea Town", "Bugsy", 8064),
    new Gym("Johto", "Goldenrod City", "Whitney", 8160),
    new Gym("Johto", "Ecruteak City", "Morty", 8256),
    new Gym("Johto", "Cianwood City", "Chuck", 8352),
    new Gym("Johto", "Olivine City", "Jasmine", 8448),
    new Gym("Johto", "Mahogany Town", "Pryce", 8544),
    new Gym("Johto", "Blackthorn City", "Clair", 8640),
];

class Trainer {
    constructor(region, location, name, profit) {
        this.region = region;
        this.location = location;
        this.name = name;
        this.profit = profit;
    }
}

const TRAINERS = [
    new Trainer("Unova", "Route 13 (Undella)", "Socialite Marian", 5400),
    new Trainer("Unova", "Route 13 (Undella)", "Gentleman Yan", 5400),
    new Trainer("Unova", "Route 9 (Mall)", "Rich Boy Manuel", 4080),
    new Trainer("Unova", "Route 9 (Mall)", "Lady Isabel", 4080),
    new Trainer("Unova", "Castelia", "Morimoto", 15660),
    new Trainer("Unova", "Undella", "Cynthia", 16560),
    new Trainer("Sinnoh", "Route 214", "PI Carlos", 6000),
    new Trainer("Johto", "Mt. Silver", "Red", 110400),
    new Trainer("Johto", "Lighthouse (Olivine)", "Gentleman Alfred", 4300),
    new Trainer("Johto", "Route 38 (Ecruteak)", "Gentleman Milton", 4300)
];

class Team {
    constructor(region, profit) {
        this.region = region;
        this.profit = profit;
    }
}


const ELITEFOUR = [
  new Team("Kanto", 66000),
  new Team("Johto", 66000),
  new Team("Hoenn", 66000),
  new Team("Sinnoh", 66000),
  new Team("Unova", 66000)
]

export { GYMS, TRAINERS, ELITEFOUR };
