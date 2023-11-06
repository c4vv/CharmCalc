class Gym {
	constructor(id, region, city, name, profit) {
		this.id = id;
		this.region = region;
		this.city = city;
		this.name = name;
		this.profit = profit;
	}
}

const GYMS = [
	new Gym("gk1", "Kanto", "Pewter", "Brock", 8632),
	new Gym("gk2", "Kanto", "Cerulean", "Misty", 8736),
	new Gym("gk3", "Kanto", "Vermillion", "Lt. Surge", 8840),
	new Gym("gk4", "Kanto", "Celadon", "Erika", 8944),
	new Gym("gk5", "Kanto", "Fuchsia", "Koga", 9048),
	new Gym("gk6", "Kanto", "Saffron", "Sabrina", 9152),
	new Gym("gk7", "Kanto", "Cinnabar", "Blaine", 9256),

	new Gym("gh1", "Hoenn", "Rustboro", "Roxane", 8632),
	new Gym("gh2", "Hoenn", "Dewford", "Brawly", 8736),
	new Gym("gh3", "Hoenn", "Mauville", "Wattson", 8840),
	new Gym("gh4", "Hoenn", "Lavaridge", "Flannery", 8944),
	new Gym("gh5", "Hoenn", "Petalburg", "Norman", 9048),
	new Gym("gh6", "Hoenn", "Fortree", "Winona", 9152),
	new Gym("gh7", "Hoenn", "Mossdeep", "Liza & Tate", 9256),
	new Gym("gh8", "Hoenn", "Sootopolis", "Juan", 9360),

	new Gym("gs1", "Sinnoh", "Oreburgh", "Roark", 8632),
	new Gym("gs2", "Sinnoh", "Eterna", "Gardenia", 8736),
	new Gym("gs3", "Sinnoh", "Hearthome", "Fantina", 8840),
	new Gym("gs4", "Sinnoh", "Veilstone", "Maylene", 8944),
	new Gym("gs5", "Sinnoh", "Pastoria", "Crasher Wake", 9048),
	new Gym("gs6", "Sinnoh", "Canalave", "Byron", 9152),
	new Gym("gs7", "Sinnoh", "Snowpoint", "Candice", 9256),
	new Gym("gs8", "Sinnoh", "Sunyshore", "Volkner", 9360),

	new Gym("gu1f", "Unova", "Striation", "Chili", 8632), // Fire
	new Gym("gu1g", "Unova", "Striation", "Cilian", 8632), // Grass
	new Gym("gu1w", "Unova", "Striation", "Cress", 8632), // Water
	new Gym("gu2", "Unova", "Nacrene", "Lenora", 8736),
	new Gym("gu3", "Unova", "Castelia", "Burgh", 8840),
	new Gym("gu4", "Unova", "Nimbasa", "Elesa", 8944),
	new Gym("gu5", "Unova", "Driftveil", "Clay", 9048),
	new Gym("gu6", "Unova", "Mistralton", "Skyla", 9152),
	new Gym("gu7", "Unova", "Icirrus", "Brycen", 9256),
	new Gym("gu8", "Unova", "Opelucid", "Iris", 9360),

	new Gym("gj1", "Johto", "Violet City", "Falkner", 8632), // Fire
	new Gym("gj2", "Johto", "Azalea Town", "Bugsy", 8736),
	new Gym("gj3", "Johto", "Goldenrod City", "Whitney", 8840),
	new Gym("gj4", "Johto", "Ecruteak City", "Morty", 8944),
	new Gym("gj5", "Johto", "Cianwood City", "Chuck", 9048),
	new Gym("gj6", "Johto", "Olivine City", "Jasmine", 9152),
	new Gym("gj7", "Johto", "Mahogany Town", "Pryce", 9256),
	new Gym("gj8", "Johto", "Blackthorn City", "Clair", 9360),
];

class Trainer {
	constructor(id, region, location, name, profit) {
		this.id = id;
		this.region = region;
		this.location = location;
		this.name = name;
		this.profit = profit;
	}
}

const TRAINERS = [
	new Trainer("tu1", "Unova", "Castelia", "Morimoto", 15660),
	new Trainer("tu2", "Unova", "Undella", "Cynthia", 16560),
	new Trainer("tu3", "Unova", "Route 9 (Mall)", "Lady Isabel", 4080),
	new Trainer("tu4", "Unova", "Route 9 (Mall)", "Rich Boy Manuel", 4080),
	new Trainer("tu5", "Unova", "Route 10", "Ace Trainer Johan", 2968),
	new Trainer("tu6", "Unova", "Route 10", "Veteran Karla", 3300),
	new Trainer("tu7", "Unova", "Route 10", "Ace Trainer Cheyenne", 2968),
	new Trainer("tu8", "Unova", "Route 10", "Veteran Chester", 3300),
	new Trainer("tu9", "Unova", "Route 13 (Undella)", "Gentleman Yan", 5400),
	new Trainer("tu10", "Unova", "Route 13 (Undella)", "Socialite Marian", 5400),

	new Trainer("ts1", "Sinnoh", "Route 210", "Veteran Brian", 4160),
	new Trainer("ts2", "Sinnoh", "Route 210", "Ace Trainer Ernest", 3264),
	new Trainer("ts3", "Sinnoh", "Route 210", "Zac & Jen", 4000),
	new Trainer("ts4", "Sinnoh", "Route 210", "Ace Trainer Alyssa", 3200),
	new Trainer("ts5", "Sinnoh", "Route 210", "Belle Ava & Pa Matt", 5264),
	new Trainer("ts6", "Sinnoh", "Route 212", "Gentleman Jeremy", 3920),
	new Trainer("ts7", "Sinnoh", "Route 212", "Socialite Reina", 4000),
	new Trainer("ts8", "Sinnoh", "Route 212", "Rich Boy Jason", 4000),
	new Trainer("ts9", "Sinnoh", "Route 212", "Lady Melissa", 4000),
	new Trainer("ts10", "Sinnoh", "Route 214", "PI Carlos", 6000),
	new Trainer("ts11", "Sinnoh", "Route 215", "Ace Trainer Dennis", 3136),
	new Trainer("ts12", "Sinnoh", "Route 215", "Ace Trainer Maya", 3136),
	new Trainer("ts13", "Sinnoh", "Route 222", "Rich Boy Trey", 4240),
	new Trainer("ts14", "Sinnoh", "Route 225", "Ace Trainer Quinn", 3648),
	new Trainer("ts15", "Sinnoh", "Route 225", "Ace Trainer Rodolfo", 3648),
	new Trainer("ts16", "Sinnoh", "Route 225", "Ranger Dwayne", 3480),
	new Trainer("ts17", "Sinnoh", "Route 226", "Ace Trainer Graham", 3712),
	new Trainer("ts18", "Sinnoh", "Route 227", "Ranger Felicia", 3600),
	new Trainer("ts19", "Sinnoh", "Route 227", "Ace Trainer Saul", 3904),
	new Trainer("ts20", "Sinnoh", "Route 228", "Ace Trainer Meagan", 3776),
	new Trainer("ts21", "Sinnoh", "Route 228", "Ranger Kyler", 3540),
	new Trainer("ts22", "Sinnoh", "Route 228", "Ranger Krista", 3540),
	new Trainer("ts23", "Sinnoh", "Route 228", "Ace Trainer Moira", 3712),
	new Trainer("ts24", "Sinnoh", "Route 228", "Ace Trainer Jose", 3712),
	new Trainer("ts25", "Sinnoh", "Route 229", "Ace Trainer Felix", 3648),
	new Trainer("ts26", "Sinnoh", "Route 229", "Ace Trainer Dana", 3648),

	new Trainer("tj1", "Johto", "Mt. Silver", "Red", 110400),
	new Trainer("tj2", "Johto", "Lighthouse (Olivine)", "Gentleman Alfred", 4300),
	new Trainer("tj3", "Johto", "Route 38 (Ecruteak)", "Gentleman Milton", 4300)
];

class Team {
	constructor(id, region, profit) {
		this.id = id;
		this.region = region;
		this.profit = profit;
	}
}

const ELITEFOUR = [
	new Team("ek", "Kanto", 66000),
	new Team("ej", "Johto", 66000),
	new Team("eh", "Hoenn", 66000),
	new Team("es", "Sinnoh", 66000),
	new Team("eu", "Unova", 66000)
]

export { GYMS, TRAINERS, ELITEFOUR };