const MIN_TRAINER_INDEX = 1
const MAX_TRAINER_INDEX = 289

const KANTO_TRAINER_INDEX = 1
const ARCHI7_TRAINER_INDEX = 196

var SETDEX_TRE = {
    "Aerodactyl": {
        "@ Coleccionista Bill #2": {
            "level": 44,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 14,
                "at": 14,
                "df": 14,
                "sa": 14,
                "sd": 14,
                "sp": 14
            },
            "evs": {
                "hp": 52,
                "at": 52,
                "df": 52,
                "sa": 52,
                "sd": 52,
                "sp": 52
            },
            "moves": [
                "Rock Slide",
                "Crunch",
                "Aerial Ace",
                "Fire Fang"
            ],
            "index": 89
        },
        "@ Alto Mando Lance": {
            "level": 60,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Aerial Ace",
                "Earthquake",
                "Rock Slide",
                "Fire Fang"
            ],
            "index": 181
        },
        "@ Científico Miguel #3": {
            "level": 71,
            "item": "Flying Gem",
            "nature": "Jolly",
            "ivs": {
                "hp": 25,
                "at": 25,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 25
            },
            "evs": {
                "hp": 88,
                "at": 88,
                "df": 88,
                "sa": 64,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Acrobatics",
                "Rock Slide",
                "Earthquake",
                "Fire Fang"
            ],
            "index": 244
        }
    },
    "Alakazam": {
        "@ Azul #2": {
            "level": 35,
            "item": "Twisted Spoon",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 44,
                "at": 44,
                "df": 44,
                "sa": 44,
                "sd": 44,
                "sp": 44
            },
            "moves": [
                "Psybeam",
                "Shock Wave",
                "Shadow Ball",
                "Recover"
            ],
            "index": 60
        },
        "@ Líder Gimnasio Sabrina": {
            "level": 48,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Psychic",
                "Shock Wave",
                "Shadow Ball",
                "Reflect"
            ],
            "index": 118
        },
        " @ Líder Gimnasio Sabrina": {
            "level": 50,
            "item": "Life Orb",
            "nature": "Timid",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Psychic",
                "Dazzling Gleam",
                "Shadow Ball",
                "Grass Knot"
            ],
            "index": 123
        },
        "@ Azul #3": {
            "level": 54,
            "item": "Light Clay",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Psychic",
                "Dazzling Gleam",
                "Reflect",
                "Light Screen"
            ],
            "index": 149
        },
        "@ Azul #4": {
            "level": 65,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 90,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Psychic",
                "Dazzling Gleam",
                "Shadow Ball",
                "Energy Ball"
            ],
            "index": 199
        }
    },
    "Arbok": {
        "@ Ejecutivo Rocket Frank": {
            "level": 33,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Poison Fang",
                "Crunch",
                "Glare",
                "Giga Drain"
            ],
            "index": 44
        },
        "@ Alto Mando Agatha": {
            "level": 58,
            "item": "Shuca Berry",
            "nature": "Impish",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Earthquake",
                "Glare",
                "Crunch",
                "Gunk Shot"
            ],
            "index": 175
        }
    },
    "Arcanine": {
        "@ Líder Gimnasio Blaine": {
            "level": 51,
            "item": "Shell Bell",
            "nature": "Adamant",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Flare Blitz",
                "Extreme Speed",
                "Close Combat",
                "Wild Charge"
            ],
            "index": 129
        },
        "@ Azul #3": {
            "level": 54,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Extreme Speed",
                "Flare Blitz",
                "Wild Charge",
                "Close Combat"
            ],
            "index": 152
        },
        "@ Azul #4": {
            "level": 65,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 84,
                "at": 90,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Flare Blitz",
                "Extreme Speed",
                "Wild Charge",
                "Will-O-Wisp"
            ],
            "index": 198
        },
        "@ Administrador Magma Tatiano": {
            "level": 69,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Extreme Speed",
                "Fire Blast",
                "Close Combat",
                "Wild Charge"
            ],
            "index": 214
        },
        "@ Líder Gimnasio Blaine #2": {
            "level": 74,
            "item": "Leftovers",
            "nature": "Adamant",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 100,
                "at": 106,
                "df": 100,
                "sa": 4,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Close Combat",
                "Flare Blitz",
                "Wild Charge",
                "Extreme Speed"
            ],
            "index": 280
        }
    },
    "Articuno": {
        "@ Legendario Articuno": {
            "level": 50,
            "item": "Lum Berry",
            "nature": "Rash",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Hurricane",
                "Ancient Power",
                "Blizzard",
                "Rest"
            ],
            "index": 66
        },
        "@ Coleccionista Bill #3": {
            "level": 73,
            "item": "Choice Specs",
            "nature": "Modest",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Hurricane",
                "Blizzard"
            ],
            "index": 248
        }
    },
    "Beedrill": {
        "@ Líder Gimnasio Koga": {
            "level": 47,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "U-turn",
                "Drill Run",
                "Poison Jab",
                "Knock Off"
            ],
            "index": 114
        }
    },
    "Blastoise": {
        "@ Azul #2": {
            "level": 38,
            "item": "Assault Vest",
            "nature": "Bold",
            "ivs": {
                "hp": 25,
                "at": 25,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 25
            },
            "evs": {
                "hp": 44,
                "at": 44,
                "df": 44,
                "sa": 44,
                "sd": 44,
                "sp": 44
            },
            "moves": [
                "Surf",
                "Ice Beam",
                "Skull Bash",
                "Rapid Spin"
            ],
            "index": 62
        },
        "@ Azul #3": {
            "level": 55,
            "item": "Assault Vest",
            "nature": "Bold",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 128,
                "at": 0,
                "df": 252,
                "sa": 128,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Hydro Pump",
                "Earthquake",
                "Ice Beam",
                "Skull Bash"
            ],
            "index": 153
        },
        "@ Azul #4": {
            "level": 67,
            "item": "Assault Vest",
            "nature": "Bold",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 128,
                "at": 0,
                "df": 252,
                "sa": 128,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Hydro Pump",
                "Ice Beam",
                "Dark Pulse",
                "Skull Bash"
            ],
            "index": 201
        },
        "@ Entrenadora Dalia #2": {
            "level": 74,
            "item": "White Herb",
            "nature": "Timid",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Shell Smash",
                "Hydro Cannon",
                "Ice Beam",
                "Dark Pulse"
            ],
            "index": 274
        }
    },
    "Chansey": {
        "@ Entrenadora Dalia": {
            "level": 36,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 11,
                "at": 11,
                "df": 11,
                "sa": 11,
                "sd": 11,
                "sp": 11
            },
            "evs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "moves": [
                "Seismic Toss",
                "Shadow Ball",
                "Soft-Boiled",
                "Defense Curl"
            ],
            "index": 56
        }
    },
    "Charizard": {
        "@ Alto Mando Lance": {
            "level": 61,
            "item": "White Herb",
            "nature": "Brave",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Overheat",
                "Dragon Claw",
                "Rock Slide",
                "Thunder Punch"
            ],
            "index": 182
        },
        "@ Campeón Rojo": {
            "level": 67,
            "item": "Choice Specs",
            "nature": "Modest",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Blast Burn"
            ],
            "index": 189
        },
        "@ Entrenadora Dalia #2": {
            "level": 74,
            "item": "Choice Scarf",
            "nature": "Modest",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Blast Burn"
            ],
            "index": 275
        }
    },
    "Clefable": {
        "@ Entrenadora Guay Vero": {
            "level": 25,
            "item": "",
            "nature": "",
            "ivs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [],
            "index": 29
        },
        "@ Coleccionista Bill #2": {
            "level": 43,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 14,
                "at": 14,
                "df": 14,
                "sa": 14,
                "sd": 14,
                "sp": 14
            },
            "evs": {
                "hp": 52,
                "at": 52,
                "df": 52,
                "sa": 52,
                "sd": 52,
                "sp": 52
            },
            "moves": [
                "Hyper Voice",
                "Flamethrower",
                "Ice Beam",
                "Thunderbolt"
            ],
            "index": 86
        }
    },
    "Clefairy": {
        "@ Coleccionista Bill": {
            "level": 18,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 6,
                "at": 6,
                "df": 6,
                "sa": 6,
                "sd": 6,
                "sp": 6
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Metronome",
                "Moonlight",
                "Headbutt"
            ],
            "index": 12
        }
    },
    "Cloyster": {
        "@ Administrador Rocket Petrel": {
            "level": 51,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 17,
                "at": 17,
                "df": 17,
                "sa": 17,
                "sd": 17,
                "sp": 17
            },
            "evs": {
                "hp": 68,
                "at": 68,
                "df": 68,
                "sa": 68,
                "sd": 68,
                "sp": 68
            },
            "moves": [
                "Surf",
                "Rock Blast",
                "Ice Beam",
                "Ice Shard"
            ],
            "index": 137
        },
        "@ Alto Mando Lorelei": {
            "level": 53,
            "item": "Focus Sash",
            "nature": "Jolly",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Explosion",
                "Spikes",
                "Rock Blast",
                "Icicle Spear"
            ],
            "index": 161
        }
    },
    "Crawdaunt": {
        "@ Capitán Edward": {
            "level": 22,
            "item": "Sitrus Berry",
            "nature": "Bold",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Cut",
                "Bubble Beam",
                "Aqua Jet",
                "Ancient Power"
            ],
            "index": 22
        }
    },
    "Crobat": {
        "@ Rival Andra #6": {
            "level": 57,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 252,
                "df": 252,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Fly",
                "Leech Life",
                "Cross Poison",
                "Giga Drain"
            ],
            "index": 159
        },
        "@ Alto Mando Agatha": {
            "level": 59,
            "item": "Flying Gem",
            "nature": "Naive",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Acrobatics",
                "Heat Wave",
                "Sludge Bomb",
                "Giga Drain"
            ],
            "index": 173
        },
        "@ Rival Andra #7": {
            "level": 68,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Fly",
                "Leech Life",
                "Cross Poison",
                "Steel Wing"
            ],
            "index": 207
        }
    },
    "Dewgong": {
        "@ Alto Mando Lorelei": {
            "level": 54,
            "item": "Icy Rock",
            "nature": "Bold",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Ice Beam",
                "Megahorn",
                "Surf",
                "Hail"
            ],
            "index": 160
        }
    },
    "Ditto": {
        "@ Científico Miguel #2": {
            "level": 34,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Transform"
            ],
            "index": 51
        }
    },
    "Dodrio": {
        "@ Presidente Silph": {
            "level": 44,
            "item": "Light Clay",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 56,
                "at": 56,
                "df": 56,
                "sa": 56,
                "sd": 56,
                "sp": 56
            },
            "moves": [
                "Drill Peck",
                "Knock Off",
                "Stomping Tantrum",
                "Reflect"
            ],
            "index": 81
        }
    },
    "Donphan": {
        "@ Administrador Jefe Rocket Atlas": {
            "level": 52,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Earthquake",
                "Bulldoze",
                "Rock Slide",
                "Ice Shard"
            ],
            "index": 145
        }
    },
    "Dragonair": {
        "@ Coleccionista Bill #2": {
            "level": 42,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 14,
                "at": 14,
                "df": 14,
                "sa": 14,
                "sd": 14,
                "sp": 14
            },
            "evs": {
                "hp": 52,
                "at": 52,
                "df": 52,
                "sa": 52,
                "sd": 52,
                "sp": 52
            },
            "moves": [
                "Dragon Rush",
                "Reflect",
                "Light Screen",
                "Fire Blast"
            ],
            "index": 85
        },
        "@ Alto Mando Lance": {
            "level": 58,
            "item": "Eviolite",
            "nature": "Brave",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Flamethrower",
                "Thunderbolt",
                "Extreme Speed",
                "Outrage"
            ],
            "index": 179
        }
    },
    "Dragonite": {
        "@ Alto Mando Lance": {
            "level": 62,
            "item": "Sitrus Berry",
            "nature": "Brave",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 84,
                "at": 94,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Outrage",
                "Fire Blast",
                "Thunderbolt",
                "Earthquake"
            ],
            "index": 183
        },
        "@ Emperador Lance": {
            "level": 67,
            "item": "Choice Band",
            "nature": "Serious",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Outrage"
            ],
            "index": 190
        },
        " @ Emperador Lance": {
            "level": 68,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Draco Meteor",
                "Dragon Claw",
                "Fire Punch",
                "Extreme Speed"
            ],
            "index": 191
        },
        "  @ Emperador Lance": {
            "level": 70,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 0,
                "at": 252,
                "df": 128,
                "sa": 0,
                "sd": 0,
                "sp": 128
            },
            "moves": [
                "Fly",
                "Dragon Claw",
                "Extreme Speed",
                "Earthquake"
            ],
            "index": 195
        },
        "@ Coleccionista Bill #3": {
            "level": 74,
            "item": "Flying Gem",
            "nature": "Adamant",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 98,
                "df": 92,
                "sa": 44,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Fly",
                "Earthquake",
                "Iron Tail",
                "Dragon Rush"
            ],
            "index": 247
        }
    },
    "Dratini": {
        "@ Coleccionista Bill": {
            "level": 18,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 6,
                "at": 6,
                "df": 6,
                "sa": 6,
                "sd": 6,
                "sp": 6
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Slam",
                "Thunder Wave",
                "Twister"
            ],
            "index": 13
        }
    },
    "Dusclops": {
        "@ Cultista M": {
            "level": 34,
            "item": "",
            "nature": "Adamant",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 6,
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Poltergeist",
                "Pain Split",
                "Hypnosis",
                "Drain Punch"
            ],
            "index": 40
        }
    },
    "Ekans": {
        "@ Alto Rango Frank": {
            "level": 16,
            "item": "Oran Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 5,
                "at": 5,
                "df": 5,
                "sa": 5,
                "sd": 5,
                "sp": 5
            },
            "evs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "moves": [
                "Wrap",
                "Poison Sting",
                "Glare",
                "Bite"
            ],
            "index": 9
        }
    },
    "Electabuzz": {
        "@ Rival Andra #3": {
            "level": 23,
            "item": "Magnet",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Charge",
                "Quick Attack",
                "Shock Wave",
                "Low Kick"
            ],
            "index": 25
        },
        "@ Rival Andra #4": {
            "level": 33,
            "item": "Magnet",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Thunder Punch",
                "Ice Punch",
                "Fire Punch",
                "Quick Attack"
            ],
            "index": 46
        },
        "@ Líder Gimnasio Surge": {
            "level": 40,
            "item": "Magnet",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 40
            },
            "moves": [
                "Shock Wave",
                "Ice Punch",
                "Fire Punch",
                "Cross Chop"
            ],
            "index": 70
        },
        "@ Rival Andra #5": {
            "level": 40,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 13,
                "at": 13,
                "df": 13,
                "sa": 13,
                "sd": 13,
                "sp": 13
            },
            "evs": {
                "hp": 48,
                "at": 48,
                "df": 48,
                "sa": 48,
                "sd": 48,
                "sp": 48
            },
            "moves": [
                "Wild Charge",
                "Fire Punch",
                "Ice Punch",
                "Cross Chop"
            ],
            "index": 73
        },
        "@ Líder Gimnasio Surge #2": {
            "level": 46,
            "item": "Expert Belt",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Shock Wave",
                "Cross Chop",
                "Psychic",
                "Fire Punch"
            ],
            "index": 103
        }
    },
    "Electivire": {
        "@ Rival Andra #6": {
            "level": 55,
            "item": "Light Clay",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 76,
                "at": 76,
                "df": 76,
                "sa": 76,
                "sd": 76,
                "sp": 76
            },
            "moves": [
                "Wild Charge",
                "Cross Chop",
                "Ice Punch",
                "Reflect"
            ],
            "index": 154
        },
        "@ Rival Andra #7": {
            "level": 67,
            "item": "Electirizer",
            "nature": "Jolly",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 90
            },
            "moves": [
                "Wild Charge",
                "Fire Punch",
                "Ice Punch",
                "Earthquake"
            ],
            "index": 205
        }
    },
    "Electrode": {
        "@ Científico Miguel": {
            "level": 30,
            "item": "Magnet",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Reflect",
                "Seismic Toss",
                "Shock Wave",
                "Light Screen"
            ],
            "index": 31
        },
        "@ Líder Gimnasio Surge": {
            "level": 39,
            "item": "Magnet",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 40
            },
            "moves": [
                "Shock Wave",
                "Seismic Toss",
                "Magnet Rise",
                "Eerie Impulse"
            ],
            "index": 69
        },
        "@ Líder Gimnasio Surge #2": {
            "level": 45,
            "item": "Magnet",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Volt Switch",
                "Light Screen",
                "Reflect",
                "Toxic"
            ],
            "index": 100
        }
    },
    "Entei": {
        "@ Emperador Lance": {
            "level": 69,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Flare Blitz",
                "Extreme Speed",
                "Iron Head",
                "High Horsepower"
            ],
            "index": 192
        }
    },
    "Espeon": {
        "@ Campeón Rojo": {
            "level": 65,
            "item": "Light Clay",
            "nature": "Bold",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Psychic",
                "Morning Sun",
                "Reflect",
                "Dazzling Gleam"
            ],
            "index": 185
        }
    },
    "Exeggcute": {
        "@ Azul #2": {
            "level": 35,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 44,
                "at": 44,
                "df": 44,
                "sa": 44,
                "sd": 44,
                "sp": 44
            },
            "moves": [
                "Giga Drain",
                "Leech Seed",
                "Psychic",
                "Reflect"
            ],
            "index": 59
        }
    },
    "Exeggutor": {
        "@ Líder Gimnasio Erika": {
            "level": 47,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Psychic",
                "Giga Drain",
                "Ancient Power",
                "Stun Spore"
            ],
            "index": 109
        },
        "@ Líder Gimnasio Sabrina": {
            "level": 49,
            "item": "White Herb",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Leaf Storm",
                "Giga Drain",
                "Ancient Power",
                "Psychic"
            ],
            "index": 122
        },
        "@ Azul #3": {
            "level": 54,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Giga Drain",
                "Sludge Bomb",
                "Psychic",
                "Bulldoze"
            ],
            "index": 151
        }
    },
    "Feraligatr": {
        "@ Administrador Jefe Rocket Atlas": {
            "level": 55,
            "item": "Life Orb",
            "nature": "Jolly",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Zen Headbutt",
                "Crunch",
                "Ice Punch",
                "Waterfall"
            ],
            "index": 147
        }
    },
    "Flareon": {
        "@ Entrenadora Dalia": {
            "level": 36,
            "item": "Black Glasses",
            "nature": "Serious",
            "ivs": {
                "hp": 11,
                "at": 11,
                "df": 11,
                "sa": 11,
                "sd": 11,
                "sp": 11
            },
            "evs": {
                "hp": 36,
                "at": 36,
                "df": 36,
                "sa": 36,
                "sd": 36,
                "sp": 36
            },
            "moves": [
                "Flamethrower",
                "Body Slam",
                "Iron Tail",
                "Bite"
            ],
            "index": 55
        },
        "@ Líder Gimnasio Blaine": {
            "level": 50,
            "item": "Toxic Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Flare Blitz",
                "Facade",
                "Superpower",
                "Quick Attack"
            ],
            "index": 127
        }
    },
    "Gengar": {
        "@ Alto Mando Agatha": {
            "level": 57,
            "item": "Wide Lens",
            "nature": "Timid",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Shadow Ball",
                "Thunderbolt",
                "Sludge Bomb",
                "Hypnosis"
            ],
            "index": 172
        },
        " @ Alto Mando Agatha": {
            "level": 59,
            "item": "Life Orb",
            "nature": "Modest",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Shadow Ball",
                "Thunderbolt",
                "Sludge Bomb",
                "Psychic"
            ],
            "index": 177
        }
    },
    "Golbat": {
        "@ Rival Andra #3": {
            "level": 26,
            "item": "Sitrus Berry",
            "nature": "Adamant",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Wing Attack",
                "Confuse Ray",
                "Mega Drain",
                "Poison Fang"
            ],
            "index": 26
        },
        "@ Rival Andra #4": {
            "level": 35,
            "item": "Sitrus Berry",
            "nature": "Adamant",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Aerial Ace",
                "Bite",
                "Poison Fang",
                "Leech Life"
            ],
            "index": 49
        },
        "@ Rival Andra #5": {
            "level": 43,
            "item": "Eviolite",
            "nature": "Adamant",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 48,
                "at": 48,
                "df": 48,
                "sa": 48,
                "sd": 48,
                "sp": 48
            },
            "moves": [
                "Fly",
                "Bite",
                "Leech Life",
                "Cross Poison"
            ],
            "index": 77
        },
        "@ Líder Gimnasio Koga": {
            "level": 46,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Fly",
                "Toxic",
                "Sludge Bomb",
                "Giga Drain"
            ],
            "index": 112
        },
        "@ Ejecutivo Rocket Protón": {
            "level": 50,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Aerial Ace",
                "Heat Wave",
                "Sludge Bomb",
                "Giga Drain"
            ],
            "index": 131
        }
    },
    "Golduck": {
        "@ Líder Gimnasio Misty": {
            "level": 46,
            "item": "Expert Belt",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Surf",
                "Psychic",
                "Ice Beam",
                "Focus Blast"
            ],
            "index": 96
        }
    },
    "Golem": {
        "@ Líder Gimnasio Brock": {
            "level": 47,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 52,
                "at": 52,
                "df": 52,
                "sa": 52,
                "sd": 52,
                "sp": 52
            },
            "moves": [
                "Rock Slide",
                "Earthquake",
                "Rock Tomb",
                "Gyro Ball"
            ],
            "index": 94
        }
    },
    "Granbull": {
        "@ Administrador Rocket Petrel": {
            "level": 50,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 17,
                "at": 17,
                "df": 17,
                "sa": 17,
                "sd": 17,
                "sp": 17
            },
            "evs": {
                "hp": 68,
                "at": 68,
                "df": 68,
                "sa": 68,
                "sd": 68,
                "sp": 68
            },
            "moves": [
                "Body Slam",
                "Play Rough",
                "Drain Punch",
                "Earthquake"
            ],
            "index": 136
        }
    },
    "Graveler": {
        "@ Trabajador Silph": {
            "level": 35,
            "item": "Eviolite",
            "nature": "",
            "ivs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [],
            "index": 78
        }
    },
    "Growlithe": {
        "@ Azul #2": {
            "level": 37,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 44,
                "at": 44,
                "df": 44,
                "sa": 44,
                "sd": 44,
                "sp": 44
            },
            "moves": [
                "Crunch",
                "Outrage",
                "Flame Wheel",
                "Retaliate"
            ],
            "index": 61
        }
    },
    "Gyarados": {
        "@ Líder Gimnasio Misty": {
            "level": 46,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Thunder Wave",
                "Earthquake",
                "Waterfall",
                "Bounce"
            ],
            "index": 98
        },
        "@ Alto Mando Lance": {
            "level": 58,
            "item": "Red Scale",
            "nature": "Jolly",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Aqua Tail",
                "Earthquake",
                "Thunder Wave",
                "Dragon Rage"
            ],
            "index": 178
        },
        "@ Almirante Tolo": {
            "level": 70,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Outrage",
                "Earthquake",
                "Waterfall",
                "Power Whip"
            ],
            "index": 226
        },
        "@ Líder Aqua Aquiles": {
            "level": 71,
            "item": "Rocky Helmet",
            "nature": "Jolly",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 94,
                "df": 88,
                "sa": 64,
                "sd": 88,
                "sp": 88
            },
            "moves": [
                "Outrage",
                "Earthquake",
                "Waterfall",
                "Power Whip"
            ],
            "index": 230
        }
    },
    "Haunter": {
        "@ Criapokémon Fuji": {
            "level": 30,
            "item": "Cleanse Tag",
            "nature": "Serious",
            "ivs": {
                "hp": 9,
                "at": 9,
                "df": 9,
                "sa": 9,
                "sd": 9,
                "sp": 9
            },
            "evs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "moves": [
                "Shadow Ball",
                "Psychic",
                "Shock Wave",
                "Hypnosis"
            ],
            "index": 34
        }
    },
    "Heracross": {
        "@ Rival Andra #6": {
            "level": 56,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 76,
                "at": 76,
                "df": 76,
                "sa": 76,
                "sd": 76,
                "sp": 76
            },
            "moves": [
                "Megahorn",
                "Rock Slide",
                "Earthquake",
                "Brick Break"
            ],
            "index": 158
        },
        "@ Azul #4": {
            "level": 65,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 84,
                "at": 90,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Close Combat",
                "Megahorn",
                "Rock Slide",
                "Earthquake"
            ],
            "index": 197
        },
        "@ Rival Andra #7": {
            "level": 66,
            "item": "Choice Scarf",
            "nature": "Jolly",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 90
            },
            "moves": [
                "Megahorn",
                "Stone Edge"
            ],
            "index": 203
        }
    },
    "Hitmonchan": {
        "@ Alto Mando Bruno #2": {
            "level": 55,
            "item": "Life Orb",
            "nature": "Impish",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Drain Punch",
                "Mach Punch",
                "Rock Tomb",
                "Thunder Punch"
            ],
            "index": 167
        }
    },
    "Hitmonlee": {
        "@ Alto Mando Bruno": {
            "level": 41,
            "item": "Life Orb",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "High Jump Kick",
                "Rock Slide",
                "Knock Off",
                "Blaze Kick"
            ],
            "index": 64
        },
        "@ Alto Mando Bruno #2": {
            "level": 55,
            "item": "Normal Gem",
            "nature": "Impish",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Fake Out",
                "Close Combat",
                "Knock Off",
                "Rock Slide"
            ],
            "index": 168
        }
    },
    "Hitmontop": {
        "@ Alto Mando Bruno #2": {
            "level": 55,
            "item": "Leftovers",
            "nature": "Adamant",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Drain Punch",
                "Rapid Spin",
                "Mach Punch",
                "Stone Edge"
            ],
            "index": 169
        }
    },
    "Houndoom": {
        "@ Administrador Jefe Rocket Atlas": {
            "level": 54,
            "item": "Choice Specs",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Dark Pulse"
            ],
            "index": 146
        }
    },
    "Hypno": {
        "@ Líder Gimnasio Sabrina": {
            "level": 48,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Psychic",
                "Ice Punch",
                "Fire Punch",
                "Drain Punch"
            ],
            "index": 120
        }
    },
    "Jolteon": {
        "@ Líder Gimnasio Surge": {
            "level": 41,
            "item": "Sitrus Berry",
            "nature": "Timid",
            "ivs": {
                "hp": 25,
                "at": 25,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 25
            },
            "evs": {
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 40
            },
            "moves": [
                "Shock Wave",
                "Shadow Ball",
                "Wish",
                "Swift"
            ],
            "index": 72
        },
        "@ Líder Gimnasio Surge #2": {
            "level": 47,
            "item": "Life Orb",
            "nature": "Timid",
            "ivs": {
                "hp": 27,
                "at": 27,
                "df": 27,
                "sa": 27,
                "sd": 27,
                "sp": 27
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Shock Wave",
                "Shadow Ball",
                "Hyper Voice",
                "Signal Beam"
            ],
            "index": 105
        },
        "@ Entrenadora Dalia #2": {
            "level": 72,
            "item": "Focus Sash",
            "nature": "Timid",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 100,
                "at": 4,
                "df": 100,
                "sa": 106,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Thunderbolt",
                "Shadow Ball",
                "Hyper Voice",
                "Signal Beam"
            ],
            "index": 272
        }
    },
    "Jumpluff": {
        "@ Líder Gimnasio Erika": {
            "level": 46,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Giga Drain",
                "Hurricane",
                "Bounce",
                "Leech Seed"
            ],
            "index": 108
        }
    },
    "Jynx": {
        "@ Alto Mando Lorelei": {
            "level": 56,
            "item": "Life Orb",
            "nature": "Timid",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Ice Beam",
                "Psychic",
                "Lovely Kiss",
                "Shadow Ball"
            ],
            "index": 163
        }
    },
    "Kabuto": {
        "@ Coleccionista Bill": {
            "level": 17,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 6,
                "at": 6,
                "df": 6,
                "sa": 6,
                "sd": 6,
                "sp": 6
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Tackle",
                "Mega Drain",
                ""
            ],
            "index": 11
        },
        "@ Científico Miguel": {
            "level": 28,
            "item": "Mystic Water",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Leech Life",
                "Rock Slide",
                "Aqua Jet"
            ],
            "index": 30
        }
    },
    "Kabutops": {
        "@ Ejecutivo Rocket Frank": {
            "level": 34,
            "item": "Focus Sash",
            "nature": "Adamant",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Rock Slide",
                "Aqua Jet",
                "Knock Off",
                "Liquidation"
            ],
            "index": 45
        },
        "@ Líder Gimnasio Brock": {
            "level": 46,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Rock Tomb",
                "Waterfall",
                "Giga Drain",
                "Aqua Jet"
            ],
            "index": 92
        }
    },
    "Kadabra": {
        "@ Azul": {
            "level": 18,
            "item": "Twisted Spoon",
            "nature": "Serious",
            "ivs": {
                "hp": 6,
                "at": 6,
                "df": 6,
                "sa": 6,
                "sd": 6,
                "sp": 6
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Reflect",
                "Confusion",
                "Kinesis",
                "Recover"
            ],
            "index": 17
        },
        "@ Criapokémon Fuji": {
            "level": 31,
            "item": "Expert Belt",
            "nature": "Serious",
            "ivs": {
                "hp": 9,
                "at": 9,
                "df": 9,
                "sa": 9,
                "sd": 9,
                "sp": 9
            },
            "evs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "moves": [
                "Psybeam",
                "Shock Wave",
                "Reflect",
                "Submission"
            ],
            "index": 35
        }
    },
    "Kangaskhan": {
        "@ Científico Miguel": {
            "level": 29,
            "item": "Silk Scarf",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Dizzy Punch",
                "Brick Break",
                "Fake Out",
                "Shadow Punch"
            ],
            "index": 32
        },
        "@ Coleccionista Bill #2": {
            "level": 43,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 14,
                "at": 14,
                "df": 14,
                "sa": 14,
                "sd": 14,
                "sp": 14
            },
            "evs": {
                "hp": 52,
                "at": 52,
                "df": 52,
                "sa": 52,
                "sd": 52,
                "sp": 52
            },
            "moves": [
                "Fake Out",
                "Body Slam",
                "Drain Punch",
                "Zen Headbutt"
            ],
            "index": 87
        }
    },
    "Kingdra": {
        "@ Alto Mando Lance": {
            "level": 59,
            "item": "Dragon Scale",
            "nature": "Brave",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Draco Meteor",
                "Dragon Rage",
                "Iron Head",
                "Waterfall"
            ],
            "index": 180
        }
    },
    "Kingler": {
        "@ Líder Gimnasio Misty": {
            "level": 46,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Rock Slide",
                "Crabhammer",
                "Hammer Arm",
                "Guillotine"
            ],
            "index": 97
        }
    },
    "Lanturn": {
        "@ Líder Gimnasio Surge #2": {
            "level": 46,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Surf",
                "Ice Beam",
                "Volt Switch",
                "Shock Wave"
            ],
            "index": 102
        }
    },
    "Lapras": {
        "@ Alto Mando Lorelei": {
            "level": 56,
            "item": "Leftovers",
            "nature": "Bold",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 0,
                "df": 128,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Dive",
                "Thunderbolt",
                "Ice Beam",
                "Psychic"
            ],
            "index": 165
        },
        "@ Campeón Rojo": {
            "level": 66,
            "item": "Assault Vest",
            "nature": "Calm",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Hydro Pump",
                "Psychic",
                "Ice Beam",
                "Thunder"
            ],
            "index": 187
        }
    },
    "Machamp": {
        "@ Alto Mando Bruno #2": {
            "level": 58,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Dynamic Punch",
                "Fire Punch",
                "Stone Edge",
                "Bullet Punch"
            ],
            "index": 171
        },
        "@ Campeón Rojo": {
            "level": 65,
            "item": "Life Orb",
            "nature": "Adamant",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Dynamic Punch",
                "Stone Edge",
                "Earthquake",
                "Bullet Punch"
            ],
            "index": 186
        }
    },
    "Magcargo": {
        "@ Líder Gimnasio Blaine": {
            "level": 48,
            "item": "White Herb",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Overheat",
                "Fire Blast",
                "Ancient Power",
                "Shell Smash"
            ],
            "index": 125
        }
    },
    "Magmar": {
        "@ Líder Gimnasio Blaine": {
            "level": 50,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Fire Blast",
                "Psychic",
                "Thunderbolt",
                "Focus Blast"
            ],
            "index": 128
        }
    },
    "Magneton": {
        "@ Científico Miguel #2": {
            "level": 35,
            "item": "Light Clay",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Shock Wave",
                "Mirror Shot",
                "Thunder Wave",
                "Light Screen"
            ],
            "index": 52
        },
        "@ Trabajador Silph": {
            "level": 36,
            "item": "Eviolite",
            "nature": "",
            "ivs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [],
            "index": 79
        },
        "@ Líder Gimnasio Surge #2": {
            "level": 46,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Electroweb",
                "Flash Cannon",
                "Volt Switch",
                "Shock Wave"
            ],
            "index": 101
        }
    },
    "Mareep": {
        "@ Consul": {
            "level": 11,
            "item": "",
            "nature": "Modest",
            "ivs": {
                "hp": 14,
                "at": 14,
                "df": 14,
                "sa": 14,
                "sd": 14,
                "sp": 14
            },
            "evs": {
                "hp": 8,
                "at": 8,
                "df": 8,
                "sa": 8,
                "sd": 8,
                "sp": 8
            },
            "moves": [
                "Thunder Shock",
                "Cotton Spore",
                "Tackle"
            ],
            "index": 4
        }
    },
    "Maroghost": {
        "@ Maroghost": {
            "level": 35,
            "item": "",
            "nature": "Careful",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Shadow Sneak",
                "Ice Punch",
                "Bulldoze",
                "Thunder Punch"
            ],
            "index": 41
        }
    },
    "Marowak": {
        "@ Criapokémon Fuji": {
            "level": 33,
            "item": "Thick Club",
            "nature": "Careful",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "moves": [
                "Bonemerang",
                "Rock Slide",
                "Shadow Punch",
                "Thrash"
            ],
            "index": 37
        },
        "@ Alto Mando Agatha": {
            "level": 59,
            "item": "Thick Club",
            "nature": "Adamant",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Bonemerang",
                "Double-Edge",
                "Stone Edge",
                "Shadow Bone"
            ],
            "index": 176
        }
    },
    "Meowth": {
        "@ Consul": {
            "level": 11,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 3,
                "at": 3,
                "df": 3,
                "sa": 3,
                "sd": 3,
                "sp": 3
            },
            "evs": {
                "hp": 8,
                "at": 8,
                "df": 8,
                "sa": 8,
                "sd": 8,
                "sp": 8
            },
            "moves": [
                "Fake Out",
                "Scratch",
                "Growl"
            ],
            "index": 2
        }
    },
    "Misdreavus": {
        "@ Cultista M": {
            "level": 32,
            "item": "",
            "nature": "Modest",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Psybeam",
                "Shadow Ball",
                "Confuse Ray",
                "Hypnosis"
            ],
            "index": 38
        },
        "@ Alto Mando Agatha": {
            "level": 56,
            "item": "Eviolite",
            "nature": "Modest",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Shadow Ball",
                "Psychic",
                "Thunderbolt",
                "Foul Play"
            ],
            "index": 174
        }
    },
    "Mr. Mime": {
        "@ Entrenadora Dalia": {
            "level": 35,
            "item": "Expert Belt",
            "nature": "Serious",
            "ivs": {
                "hp": 11,
                "at": 11,
                "df": 11,
                "sa": 11,
                "sd": 11,
                "sp": 11
            },
            "evs": {
                "hp": 36,
                "at": 36,
                "df": 36,
                "sa": 36,
                "sd": 36,
                "sp": 36
            },
            "moves": [
                "Psybeam",
                "Recover",
                "Reflect",
                "Focus Blast"
            ],
            "index": 54
        },
        "@ Líder Gimnasio Sabrina": {
            "level": 47,
            "item": "Twisted Spoon",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Psychic",
                "Shadow Ball",
                "Dazzling Gleam",
                "Light Screen"
            ],
            "index": 119
        }
    },
    "Muk": {
        "@ Científico Miguel": {
            "level": 31,
            "item": "Black Sludge",
            "nature": "Impish",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Sludge",
                "Mud-Slap",
                "Brick Break",
                "Acid Armor"
            ],
            "index": 33
        },
        "@ Líder Gimnasio Koga": {
            "level": 48,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Gunk Shot",
                "Shadow Punch",
                "Toxic",
                "Acid Armor"
            ],
            "index": 115
        },
        "@ Ejecutivo Rocket Protón": {
            "level": 51,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Gunk Shot",
                "Drain Punch",
                "Shadow Punch",
                "Acid Armor"
            ],
            "index": 133
        }
    },
    "Nidorina": {
        "@ Entrenadora Guay Vero": {
            "level": 24,
            "item": "",
            "nature": "",
            "ivs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [],
            "index": 28
        }
    },
    "Nidorino": {
        "@ Ejecutivo Rocket Frank": {
            "level": 32,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Toxic Spikes",
                "Sludge",
                "Water Pulse",
                "Thunderbolt"
            ],
            "index": 42
        }
    },
    "Ninetales": {
        "@ Líder Gimnasio Blaine": {
            "level": 48,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Will-O-Wisp",
                "Extrasensory",
                "Energy Ball",
                "Fire Blast"
            ],
            "index": 124
        }
    },
    "Noctowl": {
        "@ Ejecutivo Rocket Protón": {
            "level": 51,
            "item": "Zoom Lens",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Hurricane",
                "Heat Wave",
                "Reflect",
                "Roost"
            ],
            "index": 134
        }
    },
    "Octillery": {
        "@ Administrador Rocket Petrel": {
            "level": 51,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 17,
                "at": 17,
                "df": 17,
                "sa": 17,
                "sd": 17,
                "sp": 17
            },
            "evs": {
                "hp": 68,
                "at": 68,
                "df": 68,
                "sa": 68,
                "sd": 68,
                "sp": 68
            },
            "moves": [
                "Bullet Seed",
                "Flamethrower",
                "Octazooka",
                "Rock Blast"
            ],
            "index": 140
        }
    },
    "Omastar": {
        "@ Científico Miguel #2": {
            "level": 36,
            "item": "Assault Vest",
            "nature": "Modest",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Dragon Breath",
                "Water Pulse",
                "Ancient Power",
                "Mud Shot"
            ],
            "index": 53
        },
        "@ Líder Gimnasio Brock": {
            "level": 46,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Surf",
                "Ancient Power",
                "Ice Beam",
                "Rock Tomb"
            ],
            "index": 93
        },
        "@ Científico Miguel #3": {
            "level": 69,
            "item": "Choice Scarf",
            "nature": "Timid",
            "ivs": {
                "hp": 25,
                "at": 25,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 25
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Ancient Power"
            ],
            "index": 242
        }
    },
    "Onix": {
        "@ Líder Gimnasio Brock": {
            "level": 45,
            "item": "Choice Band",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Rock Tomb"
            ],
            "index": 91
        }
    },
    "Parasect": {
        "@ Líder Gimnasio Erika": {
            "level": 46,
            "item": "Choice Band",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Leech Life"
            ],
            "index": 107
        }
    },
    "Pidgeot": {
        "@ Azul #2": {
            "level": 36,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 44,
                "at": 44,
                "df": 44,
                "sa": 44,
                "sd": 44,
                "sp": 44
            },
            "moves": [
                "Aerial Ace",
                "Heat Wave",
                "Steel Wing",
                "Quick Attack"
            ],
            "index": 58
        },
        "@ Azul #3": {
            "level": 53,
            "item": "Power Herb",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Sky Attack",
                "Close Combat",
                "U-turn",
                "Giga Impact"
            ],
            "index": 148
        },
        "@ Azul #4": {
            "level": 64,
            "item": "Choice Band",
            "nature": "Serious",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 84,
                "at": 90,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Brave Bird",
                "Close Combat",
                "U-turn",
                "Giga Impact"
            ],
            "index": 196
        }
    },
    "Pidgeotto": {
        "@ Azul": {
            "level": 19,
            "item": "Silk Scarf",
            "nature": "Serious",
            "ivs": {
                "hp": 6,
                "at": 6,
                "df": 6,
                "sa": 6,
                "sd": 6,
                "sp": 6
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Tackle",
                "Wing Attack",
                "Quick Attack",
                "Sand Attack"
            ],
            "index": 15
        }
    },
    "Pikachu": {
        "@ Líder Gimnasio Surge": {
            "level": 38,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 40
            },
            "moves": [
                "Fake Out",
                "Shock Wave",
                "Extreme Speed"
            ],
            "index": 68
        },
        "@ Campeón Rojo": {
            "level": 67,
            "item": "Light Ball",
            "nature": "Serious",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Volt Tackle",
                "Fake Out",
                "Surf",
                "Extreme Speed"
            ],
            "index": 184
        }
    },
    "Piloswine": {
        "@ Alto Mando Lorelei": {
            "level": 55,
            "item": "Eviolite",
            "nature": "Adamant",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Earthquake",
                "Icicle Crash",
                "Bulldoze",
                "Ice Shard"
            ],
            "index": 164
        }
    },
    "Pinsir": {
        "@ Administrador Rocket Petrel": {
            "level": 52,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 17,
                "at": 17,
                "df": 17,
                "sa": 17,
                "sd": 17,
                "sp": 17
            },
            "evs": {
                "hp": 68,
                "at": 68,
                "df": 68,
                "sa": 68,
                "sd": 68,
                "sp": 68
            },
            "moves": [
                "Earthquake",
                "Rock Slide",
                "Close Combat",
                "Leech Life"
            ],
            "index": 138
        }
    },
    "Poliwrath": {
        "@ Alto Mando Bruno": {
            "level": 43,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Drain Punch",
                "Surf",
                "Ice Beam",
                "Dynamic Punch"
            ],
            "index": 65
        },
        "@ Alto Mando Bruno #2": {
            "level": 57,
            "item": "Salac Berry",
            "nature": "Adamant",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Drain Punch",
                "Liquidation",
                "Rock Slide",
                "Substitute"
            ],
            "index": 170
        }
    },
    "Ponyta": {
        "@ Entrenadora Guay Vero": {
            "level": 23,
            "item": "",
            "nature": "",
            "ivs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [],
            "index": 27
        }
    },
    "Porygon": {
        "@ Coleccionista Bill": {
            "level": 19,
            "item": "",
            "nature": "Modest",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Psybeam",
                "Shock Wave",
                "Signal Beam",
                "Icy Wind"
            ],
            "index": 14
        }
    },
    "Porygon2": {
        "@ Coleccionista Bill #2": {
            "level": 45,
            "item": "Eviolite",
            "nature": "Bold",
            "ivs": {
                "hp": 27,
                "at": 27,
                "df": 27,
                "sa": 27,
                "sd": 27,
                "sp": 27
            },
            "evs": {
                "hp": 52,
                "at": 52,
                "df": 52,
                "sa": 52,
                "sd": 52,
                "sp": 52
            },
            "moves": [
                "Tri Attack",
                "Discharge",
                "Psychic",
                "Recover"
            ],
            "index": 90
        }
    },
    "Primeape": {
        "@ Administrador Rocket Petrel": {
            "level": 51,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 17,
                "at": 17,
                "df": 17,
                "sa": 17,
                "sd": 17,
                "sp": 17
            },
            "evs": {
                "hp": 68,
                "at": 68,
                "df": 68,
                "sa": 68,
                "sd": 68,
                "sp": 68
            },
            "moves": [
                "Close Combat",
                "Rock Slide",
                "Knock Off",
                "Thrash"
            ],
            "index": 139
        }
    },
    "Pupitar": {
        "@ Capitán Edward": {
            "level": 21,
            "item": "Lum Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Magnitude",
                "Rock Throw",
                "Sandstorm",
                "Bite"
            ],
            "index": 20
        }
    },
    "Qwilfish": {
        "@ Ejecutivo Rocket Protón": {
            "level": 49,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Spikes",
                "Toxic Spikes",
                "Aqua Jet",
                "Poison Jab"
            ],
            "index": 130
        }
    },
    "Raichu": {
        "@ Criapokémon Fuji": {
            "level": 32,
            "item": "Light Clay",
            "nature": "Serious",
            "ivs": {
                "hp": 9,
                "at": 9,
                "df": 9,
                "sa": 9,
                "sd": 9,
                "sp": 9
            },
            "evs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "moves": [
                "Shock Wave",
                "Brick Break",
                "Body Slam",
                "Light Screen"
            ],
            "index": 36
        },
        "@ Entrenadora Dalia": {
            "level": 37,
            "item": "Sitrus Berry",
            "nature": "Timid",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 36,
                "at": 36,
                "df": 36,
                "sa": 36,
                "sd": 36,
                "sp": 36
            },
            "moves": [
                "Thunderbolt",
                "Surf",
                "Body Slam",
                "Iron Tail"
            ],
            "index": 57
        },
        "@ Líder Gimnasio Surge": {
            "level": 40,
            "item": "Magnet",
            "nature": "Serious",
            "ivs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "evs": {
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 40
            },
            "moves": [
                "Shock Wave",
                "Body Slam",
                "Brick Break",
                "Agility"
            ],
            "index": 71
        },
        "@ Líder Gimnasio Surge #2": {
            "level": 46,
            "item": "Normal Gem",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Fake Out",
                "Shock Wave",
                "Extreme Speed",
                "Surf"
            ],
            "index": 104
        }
    },
    "Raikou": {
        "@ Emperador Lance": {
            "level": 69,
            "item": "Air Balloon",
            "nature": "Serious",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Thunderbolt",
                "Reflect",
                "Extrasensory",
                "Shadow Ball"
            ],
            "index": 193
        }
    },
    "Rapidash": {
        "@ Presidente Silph": {
            "level": 45,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 56,
                "at": 56,
                "df": 56,
                "sa": 56,
                "sd": 56,
                "sp": 56
            },
            "moves": [
                "Drill Run",
                "Wild Charge",
                "Flamethrower",
                "Megahorn"
            ],
            "index": 82
        },
        "@ Líder Gimnasio Blaine": {
            "level": 49,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Flare Blitz",
                "Megahorn",
                "Fire Blast",
                "High Horsepower"
            ],
            "index": 126
        }
    },
    "Raticate": {
        "@ Alto Rango Frank": {
            "level": 17,
            "item": "Oran Berry",
            "nature": "Jolly",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "moves": [
                "Tackle",
                "Tail Whip",
                "Quick Attack",
                "Pursuit"
            ],
            "index": 10
        },
        "@ Azul": {
            "level": 16,
            "item": "Silk Scarf",
            "nature": "Serious",
            "ivs": {
                "hp": 6,
                "at": 6,
                "df": 6,
                "sa": 6,
                "sd": 6,
                "sp": 6
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Hyper Fang",
                "Tail Whip",
                "Pursuit",
                "Quick Attack"
            ],
            "index": 16
        },
        "@ Ejecutivo Rocket Frank": {
            "level": 33,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Hyper Fang",
                "Sucker Punch",
                "Crunch",
                "Quick Attack"
            ],
            "index": 43
        }
    },
    "Rattata": {
        "@ Alto Rango Frank": {
            "level": 15,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 5,
                "at": 5,
                "df": 5,
                "sa": 5,
                "sd": 5,
                "sp": 5
            },
            "evs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "moves": [
                "Tackle",
                "Tail Whip",
                "Quick Attack"
            ],
            "index": 8
        }
    },
    "Rhydon": {
        "@ Presidente Silph": {
            "level": 46,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 56,
                "at": 56,
                "df": 56,
                "sa": 56,
                "sd": 56,
                "sp": 56
            },
            "moves": [
                "Earthquake",
                "Rock Blast",
                "Megahorn",
                "Rock Wrecker"
            ],
            "index": 83
        },
        "@ Azul #3": {
            "level": 54,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Rock Slide",
                "Brick Break",
                "Earthquake",
                "Crunch"
            ],
            "index": 150
        }
    },
    "Scyther": {
        "@ Administrador Jefe Rocket Atlas": {
            "level": 53,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "U-turn",
                "Brick Break",
                "Wing Attack",
                "Bug Bite"
            ],
            "index": 143
        }
    },
    "Seadra": {
        "@ Capitán Edward": {
            "level": 20,
            "item": "Lum Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Dragon Breath",
                "Twister",
                "Bubble Beam",
                "Clear Smog"
            ],
            "index": 19
        }
    },
    "Seaking": {
        "@ Líder Gimnasio Misty": {
            "level": 45,
            "item": "Mystic Water",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Megahorn",
                "Knock Off",
                "Waterfall",
                "Poison Jab"
            ],
            "index": 95
        }
    },
    "Shelgon": {
        "@ Capitán Edward": {
            "level": 21,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Dragon Breath",
                "Protect",
                "Toxic",
                "Headbutt"
            ],
            "index": 21
        }
    },
    "Skarmory": {
        "@ Administrador Jefe Rocket Atlas": {
            "level": 52,
            "item": "Rocky Helmet",
            "nature": "Serious",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Steel Wing",
                "Drill Peck",
                "Stealth Rock",
                "Spikes"
            ],
            "index": 142
        }
    },
    "Slowbro": {
        "@ Trabajador Silph": {
            "level": 37,
            "item": "Assault Vest",
            "nature": "",
            "ivs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [],
            "index": 80
        },
        "@ Líder Gimnasio Sabrina": {
            "level": 49,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Psychic",
                "Scald",
                "Ice Beam",
                "Future Sight"
            ],
            "index": 121
        },
        "@ Ejecutivo Rocket Protón": {
            "level": 50,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Psychic",
                "Surf",
                "Flamethrower",
                "Amnesia"
            ],
            "index": 132
        },
        "@ Alto Mando Lorelei": {
            "level": 54,
            "item": "Rocky Helmet",
            "nature": "Bold",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Ice Beam",
                "Surf",
                "Psychic",
                "Slack Off"
            ],
            "index": 162
        }
    },
    "Sneasel": {
        "@ Rival Andra #5": {
            "level": 41,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 13,
                "at": 13,
                "df": 13,
                "sa": 13,
                "sd": 13,
                "sp": 13
            },
            "evs": {
                "hp": 48,
                "at": 48,
                "df": 48,
                "sa": 48,
                "sd": 48,
                "sp": 48
            },
            "moves": [
                "Ice Punch",
                "Pursuit",
                "Fake Out",
                "Ice Shard"
            ],
            "index": 75
        },
        "@ Rival Andra #6": {
            "level": 54,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 76,
                "at": 76,
                "df": 76,
                "sa": 76,
                "sd": 76,
                "sp": 76
            },
            "moves": [
                "Knock Off",
                "Triple Axel",
                "Low Kick",
                "Fake Out"
            ],
            "index": 156
        }
    },
    "Snorlax": {
        "@ Campeón Rojo": {
            "level": 64,
            "item": "Leftovers",
            "nature": "Impish",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Body Slam",
                "Earthquake",
                "Rest",
                "Sleep Talk"
            ],
            "index": 188
        }
    },
    "Starmie": {
        "@ Líder Gimnasio Misty": {
            "level": 47,
            "item": "Eviolite",
            "nature": "Timid",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Psychic",
                "Hydro Pump",
                "Thunderbolt",
                "Recover"
            ],
            "index": 99
        }
    },
    "Steelix": {
        "@ Alto Mando Bruno": {
            "level": 42,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Iron Head",
                "Bulldoze",
                "Rock Tomb",
                "Head Smash"
            ],
            "index": 63
        },
        "@ Alto Mando Bruno #2": {
            "level": 56,
            "item": "Focus Sash",
            "nature": "Bold",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Earthquake",
                "Bulldoze",
                "Rock Tomb",
                "Stealth Rock"
            ],
            "index": 166
        }
    },
    "Suicune": {
        "@ Emperador Lance": {
            "level": 69,
            "item": "White Herb",
            "nature": "Serious",
            "ivs": {
                "hp": 21,
                "at": 21,
                "df": 21,
                "sa": 21,
                "sd": 21,
                "sp": 21
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Scald",
                "Sheer Cold",
                "Extrasensory",
                "Shadow Ball"
            ],
            "index": 194
        }
    },
    "Tangela": {
        "@ Líder Gimnasio Erika": {
            "level": 45,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Sludge Bomb",
                "Acid",
                "Giga Drain",
                "Poison Powder"
            ],
            "index": 106
        }
    },
    "Tauros": {
        "@ Administrador Jefe Rocket Atlas": {
            "level": 53,
            "item": "Choice Scarf",
            "nature": "Serious",
            "ivs": {
                "hp": 19,
                "at": 19,
                "df": 19,
                "sa": 19,
                "sd": 19,
                "sp": 19
            },
            "evs": {
                "hp": 72,
                "at": 72,
                "df": 72,
                "sa": 72,
                "sd": 72,
                "sp": 72
            },
            "moves": [
                "Body Slam",
                "Zen Headbutt",
                "Iron Head",
                "Rock Slide"
            ],
            "index": 144
        }
    },
    "Teddiursa": {
        "@ Rival Andra #2": {
            "level": 13,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 4,
                "at": 4,
                "df": 4,
                "sa": 4,
                "sd": 4,
                "sp": 4
            },
            "evs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "moves": [
                "Tackle",
                "Tail Whip"
            ],
            "index": 6
        },
        "@ Rival Andra #3": {
            "level": 24,
            "item": "Silk Scarf",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Slash",
                "Lick",
                "Payback"
            ],
            "index": 24
        }
    },
    "Tentacool": {
        "@ Rival Andra #2": {
            "level": 14,
            "item": "Oran Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 4,
                "at": 4,
                "df": 4,
                "sa": 4,
                "sd": 4,
                "sp": 4
            },
            "evs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "moves": [
                "Water Gun",
                "Supersonic",
                "Wrap",
                "Poison Sting"
            ],
            "index": 5
        },
        "@ Rival Andra #3": {
            "level": 24,
            "item": "Poison Barb",
            "nature": "Serious",
            "ivs": {
                "hp": 7,
                "at": 7,
                "df": 7,
                "sa": 7,
                "sd": 7,
                "sp": 7
            },
            "evs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "moves": [
                "Bubble Beam",
                "Wrap",
                "Acid"
            ],
            "index": 23
        }
    },
    "Tentacruel": {
        "@ Rival Andra #4": {
            "level": 34,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Bubble Beam",
                "Acid",
                "Take Down",
                "Icy Wind"
            ],
            "index": 47
        },
        "@ Rival Andra #5": {
            "level": 41,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 13,
                "at": 13,
                "df": 13,
                "sa": 13,
                "sd": 13,
                "sp": 13
            },
            "evs": {
                "hp": 48,
                "at": 48,
                "df": 48,
                "sa": 48,
                "sd": 48,
                "sp": 48
            },
            "moves": [
                "Scald",
                "Barrier",
                "Giga Drain",
                "Knock Off"
            ],
            "index": 74
        },
        "@ Líder Gimnasio Koga": {
            "level": 48,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Hydro Pump",
                "Ice Beam",
                "Giga Drain",
                "Sludge Bomb"
            ],
            "index": 116
        },
        "@ Rival Andra #6": {
            "level": 55,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 76,
                "at": 76,
                "df": 76,
                "sa": 76,
                "sd": 76,
                "sp": 76
            },
            "moves": [
                "Scald",
                "Toxic Spikes",
                "Sludge Bomb",
                "Giga Drain"
            ],
            "index": 157
        },
        "@ Rival Andra #7": {
            "level": 66,
            "item": "Black Sludge",
            "nature": "Bold",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 90
            },
            "moves": [
                "Toxic Spikes",
                "Giga Drain",
                "Sludge Bomb",
                "Hydro Pump"
            ],
            "index": 204
        }
    },
    "Umbreon": {
        "@ Ejecutivo Rocket Protón": {
            "level": 52,
            "item": "Leftovers",
            "nature": "Careful",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Crunch",
                "Yawn",
                "Curse",
                "Rest"
            ],
            "index": 135
        }
    },
    "Ursaring": {
        "@ Rival Andra #4": {
            "level": 34,
            "item": "Silk Scarf",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Facade",
                "Ice Punch",
                "Brick Break",
                "Payback"
            ],
            "index": 48
        },
        "@ Rival Andra #5": {
            "level": 42,
            "item": "Flame Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 13,
                "at": 13,
                "df": 13,
                "sa": 13,
                "sd": 13,
                "sp": 13
            },
            "evs": {
                "hp": 48,
                "at": 48,
                "df": 48,
                "sa": 48,
                "sd": 48,
                "sp": 48
            },
            "moves": [
                "Facade",
                "Earthquake",
                "Payback",
                "Fire Punch"
            ],
            "index": 76
        },
        "@ Rival Andra #6": {
            "level": 55,
            "item": "Flame Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 76,
                "at": 76,
                "df": 76,
                "sa": 76,
                "sd": 76,
                "sp": 76
            },
            "moves": [
                "Facade",
                "Earthquake",
                "Zen Headbutt",
                "Close Combat"
            ],
            "index": 155
        },
        "@ Rival Andra #7": {
            "level": 65,
            "item": "White Herb",
            "nature": "Adamant",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 90
            },
            "moves": [
                "Thrash",
                "Earthquake",
                "Zen Headbutt",
                "Close Combat"
            ],
            "index": 206
        }
    },
    "Vaporeon": {
        "@ Coleccionista Bill #2": {
            "level": 44,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 14,
                "at": 14,
                "df": 14,
                "sa": 14,
                "sd": 14,
                "sp": 14
            },
            "evs": {
                "hp": 52,
                "at": 52,
                "df": 52,
                "sa": 52,
                "sd": 52,
                "sp": 52
            },
            "moves": [
                "Scald",
                "Ice Beam",
                "Acid Armor",
                "Rest"
            ],
            "index": 88
        }
    },
    "Venomoth": {
        "@ Líder Gimnasio Koga": {
            "level": 47,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 16,
                "at": 16,
                "df": 16,
                "sa": 16,
                "sd": 16,
                "sp": 16
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Bug Buzz",
                "Sleep Powder",
                "Toxic",
                "Quiver Dance"
            ],
            "index": 113
        }
    },
    "Venusaur": {
        "@ Presidente Silph": {
            "level": 47,
            "item": "Black Sludge",
            "nature": "Modest",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 56,
                "at": 56,
                "df": 56,
                "sa": 56,
                "sd": 56,
                "sp": 56
            },
            "moves": [
                "Giga Drain",
                "Earthquake",
                "Sludge Bomb",
                "Frenzy Plant"
            ],
            "index": 84
        },
        "@ Presidente Silph #2": {
            "level": 75,
            "item": "Coba Berry",
            "nature": "Adamant",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 100,
                "df": 92,
                "sa": 0,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Strength",
                "Earthquake",
                "Power Whip",
                "Sleep Powder"
            ],
            "index": 237
        },
        "@ Entrenadora Dalia #2": {
            "level": 74,
            "item": "Big Root",
            "nature": "Modest",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 128,
                "sa": 252,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Leech Seed",
                "Frenzy Plant",
                "Sleep Powder",
                "Sludge Bomb"
            ],
            "index": 276
        }
    },
    "Victreebel": {
        "@ Líder Gimnasio Erika": {
            "level": 47,
            "item": "Focus Sash",
            "nature": "Serious",
            "ivs": {
                "hp": 15,
                "at": 15,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 15
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Poison Jab",
                "Leaf Blade",
                "Knock Off",
                "Sleep Powder"
            ],
            "index": 110
        }
    },
    "Vileplume": {
        "@ Líder Gimnasio Erika": {
            "level": 48,
            "item": "Assault Vest",
            "nature": "Bold",
            "ivs": {
                "hp": 27,
                "at": 27,
                "df": 27,
                "sa": 27,
                "sd": 27,
                "sp": 27
            },
            "evs": {
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Giga Drain",
                "Sludge Bomb",
                "Moonblast"
            ],
            "index": 111
        }
    },
    "Wartortle": {
        "@ Azul": {
            "level": 20,
            "item": "Sitrus Berry",
            "nature": "Bold",
            "ivs": {
                "hp": 18,
                "at": 18,
                "df": 18,
                "sa": 18,
                "sd": 18,
                "sp": 18
            },
            "evs": {
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Water Pulse",
                "Bite",
                "Icy Wind",
                "Skull Bash"
            ],
            "index": 18
        }
    },
    "Weezing": {
        "@ Científico Miguel #2": {
            "level": 34,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 10,
                "at": 10,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 10
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Sludge",
                "Flamethrower",
                "Shadow Ball",
                "Poison Gas"
            ],
            "index": 50
        },
        "@ Líder Gimnasio Koga": {
            "level": 49,
            "item": "Assault Vest",
            "nature": "Bold",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 64,
                "at": 64,
                "df": 64,
                "sa": 64,
                "sd": 64,
                "sp": 64
            },
            "moves": [
                "Fire Blast",
                "Sludge Bomb",
                "Thunderbolt",
                "Shadow Ball"
            ],
            "index": 117
        },
        "@ Administrador Rocket Petrel": {
            "level": 53,
            "item": "Assault Vest",
            "nature": "Careful",
            "ivs": {
                "hp": 29,
                "at": 29,
                "df": 29,
                "sa": 29,
                "sd": 29,
                "sp": 29
            },
            "evs": {
                "hp": 68,
                "at": 68,
                "df": 68,
                "sa": 68,
                "sd": 68,
                "sp": 68
            },
            "moves": [
                "Sludge Bomb",
                "Thunderbolt",
                "Fire Blast",
                "Dark Pulse"
            ],
            "index": 141
        }
    },
    "Wooper": {
        "@ Consul": {
            "level": 11,
            "item": "",
            "nature": "Serious",
            "ivs": {
                "hp": 3,
                "at": 3,
                "df": 3,
                "sa": 3,
                "sd": 3,
                "sp": 3
            },
            "evs": {
                "hp": 8,
                "at": 8,
                "df": 8,
                "sa": 8,
                "sd": 8,
                "sp": 8
            },
            "moves": [
                "Water Gun",
                "Pound",
                "Mud-Slap"
            ],
            "index": 3
        }
    },
    "Xatu": {
        "@ Cultista M": {
            "level": 33,
            "item": "",
            "nature": "Modest",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 32,
                "at": 32,
                "df": 32,
                "sa": 32,
                "sd": 32,
                "sp": 32
            },
            "moves": [
                "Psybeam",
                "Air Slash",
                "Roost",
                "Reflect"
            ],
            "index": 39
        }
    },
    "Zapdos": {
        "@ Legendario Zapdos": {
            "level": 50,
            "item": "Sitrus Berry",
            "nature": "Modest",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Drill Peck",
                "Shock Wave",
                "Thunder Wave",
                "Ancient Power"
            ],
            "index": 67
        },
        "@ Coleccionista Bill #3": {
            "level": 73,
            "item": "Rocky Helmet",
            "nature": "Bold",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Discharge",
                "Air Slash",
                "Heat Wave",
                "Roost"
            ],
            "index": 249
        }
    },
    "Zubat": {
        "@ Rival Andra": {
            "level": 7,
            "item": "",
            "nature": "",
            "ivs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Supersonic",
                "Bite"
            ],
            "index": 1
        },
        "@ Rival Andra #2": {
            "level": 15,
            "item": "Sitrus Berry",
            "nature": "Adamant",
            "ivs": {
                "hp": 4,
                "at": 4,
                "df": 4,
                "sa": 4,
                "sd": 4,
                "sp": 4
            },
            "evs": {
                "hp": 12,
                "at": 12,
                "df": 12,
                "sa": 12,
                "sd": 12,
                "sp": 12
            },
            "moves": [
                "Absorb",
                "Bite",
                "Supersonic",
                "Quick Attack"
            ],
            "index": 7
        }
    },
    "Aegislash-Shield": {
        "@ Viajero Zeus": {
            "level": 71,
            "item": "Leftovers",
            "nature": "Relaxed",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 90,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "King's Shield",
                "Shadow Ball",
                "Shadow Sneak",
                "Flash Cannon"
            ],
            "index": 209
        }
    },
    "Aerodactyl-Primal": {
        "@ Investigador Pkmn Oak": {
            "level": 77,
            "item": "Power Herb",
            "nature": "Jolly",
            "ivs": {
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 30
            },
            "evs": {
                "hp": 100,
                "at": 100,
                "df": 100,
                "sa": 0,
                "sd": 100,
                "sp": 110
            },
            "moves": [
                "Stone Edge",
                "Aqua Tail",
                "Dragon Claw",
                "Sky Attack"
            ],
            "index": 285
        }
    },
    "Azelf": {
        "@ Cultista M #2": {
            "level": 75,
            "item": "Focus Sash",
            "nature": "Modest",
            "ivs": {
                "hp": 27,
                "at": 27,
                "df": 27,
                "sa": 27,
                "sd": 27,
                "sp": 27
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Psyshock",
                "Flamethrower",
                "Dazzling Gleam",
                "Hyper Beam"
            ],
            "index": 255
        }
    },
    "Blaziken": {
        "@ Administrador Magma Tatiano": {
            "level": 69,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Focus Blast",
                "Stone Edge",
                "Fire Blast",
                "Brave Bird"
            ],
            "index": 213
        }
    },
    "Blissey": {
        "@ Entrenadora Dalia #2": {
            "level": 73,
            "item": "Leftovers",
            "nature": "Careful",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 96,
                "at": 24,
                "df": 96,
                "sa": 102,
                "sd": 96,
                "sp": 96
            },
            "moves": [
                "Seismic Toss",
                "Soft-Boiled",
                "Stealth Rock",
                "Thunder Wave"
            ],
            "index": 273
        }
    },
    "Camerupt": {
        "@ Administrador Magma Tatiano": {
            "level": 71,
            "item": "Passho Berry",
            "nature": "Modest",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Flamethrower",
                "Earth Power",
                "Ancient Power",
                "Fissure"
            ],
            "index": 217
        },
        "@ Líder Magma Magno": {
            "level": 72,
            "item": "Assault Vest",
            "nature": "Sassy",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Heavy Slam",
                "Flamethrower",
                "Earth Power",
                "Ancient Power"
            ],
            "index": 221
        }
    },
    "Castform": {
        "@ Líder Magma Magno": {
            "level": 71,
            "item": "Focus Sash",
            "nature": "Timid",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Weather Ball",
                "Solar Beam",
                "Future Sight",
                "Tailwind"
            ],
            "index": 219
        },
        "@ Líder Aqua Aquiles": {
            "level": 72,
            "item": "Focus Sash",
            "nature": "Timid",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Weather Ball",
                "Thunder",
                "Tailwind",
                "Future Sight"
            ],
            "index": 232
        }
    },
    "Celebi": {
        "@ Team Rocket Líder Giovanni": {
            "level": 78,
            "item": "Focus Sash",
            "nature": "Bold",
            "ivs": {
                "hp": 29,
                "at": 29,
                "df": 29,
                "sa": 29,
                "sd": 29,
                "sp": 29
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 252,
                "sa": 6,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Giga Drain",
                "Earth Power",
                "Psychic",
                "Mystical Fire"
            ],
            "index": 268
        }
    },
    "Cursola": {
        "@ Cultista M #2": {
            "level": 72,
            "item": "Light Clay",
            "nature": "Modest",
            "ivs": {
                "hp": 27,
                "at": 27,
                "df": 27,
                "sa": 27,
                "sd": 27,
                "sp": 27
            },
            "evs": {
                "hp": 96,
                "at": 0,
                "df": 96,
                "sa": 124,
                "sd": 96,
                "sp": 96
            },
            "moves": [
                "Reflect",
                "Strength Sap",
                "Shadow Ball",
                "Stealth Rock"
            ],
            "index": 253
        }
    },
    "Darkrai": {
        "@ Líder Secta Laireb": {
            "level": 77,
            "item": "Life Orb",
            "nature": "Modest",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Dark Void",
                "Dark Pulse",
                "Ice Beam",
                "Psychic"
            ],
            "index": 264
        }
    },
    "Darmanitan": {
        "@ Administrador Magma Tatiano": {
            "level": 70,
            "item": "Shell Bell",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Flare Blitz",
                "Rock Slide",
                "Superpower",
                "Thrash"
            ],
            "index": 215
        }
    },
    "Darmanitan-Zen": {
        "@ Líder Magma Magno": {
            "level": 72,
            "item": "Leftovers",
            "nature": "Modest",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Psychic",
                "Fire Blast",
                "Ancient Power",
                "Yawn"
            ],
            "index": 222
        }
    },
    "Delphox": {
        "@ Líder Secta Laireb": {
            "level": 74,
            "item": "Fire Gem",
            "nature": "Timid",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 96,
                "at": 24,
                "df": 96,
                "sa": 102,
                "sd": 96,
                "sp": 96
            },
            "moves": [
                "Mystical Fire",
                "Psychic",
                "Grass Knot",
                "Dazzling Gleam"
            ],
            "index": 261
        }
    },
    "Deoxys-Attack": {
        "@ Investigador Pkmn Oak": {
            "level": 78,
            "item": "White Herb",
            "nature": "Timid",
            "ivs": {
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 30
            },
            "evs": {
                "hp": 100,
                "at": 0,
                "df": 100,
                "sa": 100,
                "sd": 100,
                "sp": 110
            },
            "moves": [
                "Psyshock",
                "Ice Beam",
                "Aura Sphere",
                "Psycho Boost"
            ],
            "index": 287
        }
    },
    "Deoxys-Defense": {
        "@ Investigador Pkmn Oak": {
            "level": 78,
            "item": "Leftovers",
            "nature": "Relaxed",
            "ivs": {
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 30
            },
            "evs": {
                "hp": 110,
                "at": 0,
                "df": 100,
                "sa": 100,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Psychic",
                "Recover",
                "Night Shade",
                "Cosmic Power"
            ],
            "index": 288
        }
    },
    "Deoxys-Speed": {
        "@ Investigador Pkmn Oak": {
            "level": 78,
            "item": "Light Clay",
            "nature": "Bold",
            "ivs": {
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 30
            },
            "evs": {
                "hp": 100,
                "at": 0,
                "df": 100,
                "sa": 100,
                "sd": 100,
                "sp": 110
            },
            "moves": [
                "Light Screen",
                "Aura Sphere",
                "Psyshock",
                "Reflect"
            ],
            "index": 286
        }
    },
    "Dragapult": {
        "@ Cultista M #2": {
            "level": 76,
            "item": "Life Orb",
            "nature": "Hasty",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 0,
                "at": 252,
                "df": 0,
                "sa": 6,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Dragon Darts",
                "Fire Blast",
                "Hydro Pump",
                "Psychic Fangs"
            ],
            "index": 258
        }
    },
    "Dudunsparce": {
        "@ Científico Miguel #3": {
            "level": 72,
            "item": "Leftovers",
            "nature": "Careful",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 0,
                "df": 6,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Coil",
                "Roost",
                "Body Slam",
                "Dragon Rush"
            ],
            "index": 245
        }
    },
    "Dusknoir": {
        "@ Cultista M #2": {
            "level": 73,
            "item": "Reaper Cloth",
            "nature": "Adamant",
            "ivs": {
                "hp": 27,
                "at": 27,
                "df": 27,
                "sa": 27,
                "sd": 27,
                "sp": 27
            },
            "evs": {
                "hp": 92,
                "at": 98,
                "df": 92,
                "sa": 44,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Poltergeist",
                "Drain Punch",
                "Shadow Sneak",
                "Will-O-Wisp"
            ],
            "index": 254
        }
    },
    "Floette-Eternal": {
        "@ Viajero Zeus": {
            "level": 71,
            "item": "Life Orb",
            "nature": "Modest",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 90
            },
            "moves": [
                "Moonblast",
                "Psychic",
                "Giga Drain",
                "Synthesis"
            ],
            "index": 210
        }
    },
    "Flygon": {
        "@ Científico Miguel #3": {
            "level": 70,
            "item": "Life Orb",
            "nature": "Adamant",
            "ivs": {
                "hp": 25,
                "at": 25,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 25
            },
            "evs": {
                "hp": 88,
                "at": 88,
                "df": 88,
                "sa": 64,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Earthquake",
                "Rock Slide",
                "Dragon Claw",
                "Fire Punch"
            ],
            "index": 243
        }
    },
    "Ghost": {
        "@ Ghost": {
            "level": 80,
            "item": "Sitrus Berry",
            "nature": "Timid",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 128,
                "at": 128,
                "df": 128,
                "sa": 252,
                "sd": 128,
                "sp": 252
            },
            "moves": [
                "Shadow Ball",
                "Hyper Voice",
                "Hypnosis",
                "Dream Eater"
            ],
            "index": 252
        }
    },
    "Groudon": {
        "@ Líder Magma Magno": {
            "level": 73,
            "item": "Lum Berry",
            "nature": "Modest",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 94,
                "df": 88,
                "sa": 64,
                "sd": 88,
                "sp": 88
            },
            "moves": [
                "Earthquake",
                "Rock Slide",
                "Fire Punch",
                "Rock Polish"
            ],
            "index": 223
        }
    },
    "Honchkrow": {
        "@ Team Rocket Líder Giovanni": {
            "level": 74,
            "item": "Leftovers",
            "nature": "Adamant",
            "ivs": {
                "hp": 29,
                "at": 29,
                "df": 29,
                "sa": 29,
                "sd": 29,
                "sp": 29
            },
            "evs": {
                "hp": 100,
                "at": 106,
                "df": 100,
                "sa": 4,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Fly",
                "U-turn",
                "Sucker Punch",
                "Tailwind"
            ],
            "index": 266
        }
    },
    "Hoopa": {
        "@ Líder Secta Laireb": {
            "level": 75,
            "item": "Focus Sash",
            "nature": "Modest",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 96,
                "at": 0,
                "df": 96,
                "sa": 124,
                "sd": 96,
                "sp": 96
            },
            "moves": [
                "Shadow Ball",
                "Hyperspace Hole",
                "Reflect",
                "Aura Sphere"
            ],
            "index": 262
        }
    },
    "Hydreigon": {
        "@ Líder Secta Laireb": {
            "level": 72,
            "item": "White Herb",
            "nature": "Hasty",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 96,
                "at": 24,
                "df": 96,
                "sa": 102,
                "sd": 96,
                "sp": 96
            },
            "moves": [
                "Draco Meteor",
                "Superpower",
                "Dark Pulse",
                "Iron Tail"
            ],
            "index": 260
        }
    },
    "Kyogre": {
        "@ Líder Aqua Aquiles": {
            "level": 74,
            "item": "Lum Berry",
            "nature": "Bold",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Surf",
                "Thunder",
                "Ice Beam",
                "Rest"
            ],
            "index": 235
        }
    },
    "Lugia": {
        "@ Legendario Lugia": {
            "level": 85,
            "item": "",
            "nature": "Modest",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 252,
                "df": 252,
                "sa": 252,
                "sd": 252,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Surf",
                "Recover",
                "Aeroblast"
            ],
            "index": 265
        }
    },
    "Magmortar": {
        "@ Presidente Silph #2": {
            "level": 75,
            "item": "Magmarizer",
            "nature": "Modest",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Flamethrower",
                "Thunderbolt",
                "Focus Blast",
                "Will-O-Wisp"
            ],
            "index": 238
        },
        "@ Líder Gimnasio Blaine #2": {
            "level": 73,
            "item": "Magmarizer",
            "nature": "Timid",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 100,
                "at": 4,
                "df": 100,
                "sa": 106,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Fire Blast",
                "Earthquake",
                "Thunderbolt",
                "Focus Blast"
            ],
            "index": 278
        }
    },
    "Magmortar-Y": {
        "@ Líder Gimnasio Blaine #2": {
            "level": 76,
            "item": "Air Balloon",
            "nature": "Timid",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Inferno",
                "Thunder",
                "Focus Blast",
                "Dynamic Punch"
            ],
            "index": 283
        }
    },
    "Magnezone": {
        "@ Presidente Silph #2": {
            "level": 74,
            "item": "Light Clay",
            "nature": "Modest",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Volt Switch",
                "Reflect",
                "Light Screen",
                "Flash Cannon"
            ],
            "index": 236
        }
    },
    "Metagross": {
        "@ Líder Gimnasio Blaine #2": {
            "level": 75,
            "item": "Lum Berry",
            "nature": "Jolly",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 100,
                "at": 106,
                "df": 100,
                "sa": 4,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Agility",
                "Zen Headbutt",
                "Meteor Mash",
                "Earthquake"
            ],
            "index": 279
        }
    },
    "Mew": {
        "@ Líder Secta Laireb": {
            "level": 76,
            "item": "Leftovers",
            "nature": "Bold",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 96,
                "at": 24,
                "df": 96,
                "sa": 102,
                "sd": 96,
                "sp": 96
            },
            "moves": [
                "Psychic",
                "Dazzling Gleam",
                "Barrier",
                "Recover"
            ],
            "index": 263
        }
    },
    "Mewtwo": {
        "@ Investigador Pkmn Oak": {
            "level": 79,
            "item": "Life Orb",
            "nature": "Modest",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Psystrike",
                "Barrier",
                "Recover",
                "Aura Sphere"
            ],
            "index": 289
        }
    },
    "Moltres": {
        "@ Líder Magma Magno": {
            "level": 71,
            "item": "Life Orb",
            "nature": "Timid",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Fire Blast",
                "Weather Ball",
                "Air Slash",
                "Ancient Power"
            ],
            "index": 220
        },
        "@ Coleccionista Bill #3": {
            "level": 73,
            "item": "Assault Vest",
            "nature": "Timid",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Air Slash",
                "Flamethrower",
                "Ancient Power",
                "U-turn"
            ],
            "index": 250
        }
    },
    "Nidoking-X": {
        "@ Team Rocket Líder Giovanni": {
            "level": 78,
            "item": "Rocky Helmet",
            "nature": "Serious",
            "ivs": {
                "hp": 29,
                "at": 29,
                "df": 29,
                "sa": 29,
                "sd": 29,
                "sp": 29
            },
            "evs": {
                "hp": 100,
                "at": 106,
                "df": 100,
                "sa": 4,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Psychic",
                "Dazzling Gleam",
                "Barrier",
                "Recover"
            ],
            "index": 270
        }
    },
    "Nidoqueen": {
        "@ Team Rocket Líder Giovanni": {
            "level": 76,
            "item": "Life Orb",
            "nature": "Modest",
            "ivs": {
                "hp": 29,
                "at": 29,
                "df": 29,
                "sa": 29,
                "sd": 29,
                "sp": 29
            },
            "evs": {
                "hp": 100,
                "at": 4,
                "df": 100,
                "sa": 106,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Earth Power",
                "Flamethrower",
                "Sludge Bomb",
                "Thunderbolt"
            ],
            "index": 269
        }
    },
    "Politoed": {
        "@ Almirante Tolo": {
            "level": 69,
            "item": "Water Gem",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Surf",
                "Ice Beam",
                "Hydro Pump",
                "Psychic"
            ],
            "index": 224
        }
    },
    "Porygon-Z": {
        "@ Coleccionista Bill #3": {
            "level": 72,
            "item": "Dubious Disc",
            "nature": "Modest",
            "ivs": {
                "hp": 26,
                "at": 26,
                "df": 26,
                "sa": 26,
                "sd": 26,
                "sp": 26
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Tri Attack",
                "Psychic",
                "Thunderbolt",
                "Ice Beam"
            ],
            "index": 246
        }
    },
    "Porygon3": {
        "@ Coleccionista Bill #3": {
            "level": 75,
            "item": "Colbur Berry",
            "nature": "Bold",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 0,
                "df": 252,
                "sa": 6,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Tri Attack",
                "Shadow Ball",
                "Ice Beam",
                "Recover"
            ],
            "index": 251
        }
    },
    "Rayquaza": {
        "@ Viajero Zeus": {
            "level": 72,
            "item": "White Herb",
            "nature": "Jolly",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Fly",
                "Extreme Speed",
                "Dragon Claw",
                "V-create"
            ],
            "index": 211
        }
    },
    "Relicanth": {
        "@ Científico Miguel #3": {
            "level": 69,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 25,
                "at": 25,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 25
            },
            "evs": {
                "hp": 88,
                "at": 94,
                "df": 88,
                "sa": 64,
                "sd": 88,
                "sp": 88
            },
            "moves": [
                "Head Smash",
                "Waterfall",
                "Earthquake",
                "Zen Headbutt"
            ],
            "index": 240
        }
    },
    "Rhyperior": {
        "@ Presidente Silph #2": {
            "level": 76,
            "item": "Protector",
            "nature": "Careful",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 6,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Earthquake",
                "Stone Edge",
                "Curse",
                "Body Press"
            ],
            "index": 239
        },
        "@ Team Rocket Líder Giovanni": {
            "level": 75,
            "item": "Protector",
            "nature": "Adamant",
            "ivs": {
                "hp": 29,
                "at": 29,
                "df": 29,
                "sa": 29,
                "sd": 29,
                "sp": 29
            },
            "evs": {
                "hp": 100,
                "at": 106,
                "df": 100,
                "sa": 4,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Earthquake",
                "Stone Edge",
                "Stealth Rock",
                "Rock Wrecker"
            ],
            "index": 267
        }
    },
    "Rhyperior-&": {
        "@ Team Rocket Líder Giovanni": {
            "level": 79,
            "item": "Assault Vest",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 128,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Earthquake",
                "Iron Head",
                "Stone Edge",
                "Heat Crash"
            ],
            "index": 271
        }
    },
    "Salamence": {
        "@ Administrador Magma Tatiano": {
            "level": 70,
            "item": "Rocky Helmet",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Dragon Claw",
                "Fly",
                "Fire Blast",
                "Roost"
            ],
            "index": 216
        },
        "@ Almirante Tolo": {
            "level": 71,
            "item": "Rocky Helmet",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Dragon Claw",
                "Fly",
                "Hydro Pump",
                "Roost"
            ],
            "index": 228
        },
        "@ Líder Gimnasio Blaine #2": {
            "level": 75,
            "item": "Assault Vest",
            "nature": "Lonely",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Flamethrower",
                "Fly",
                "Dragon Claw",
                "Earthquake"
            ],
            "index": 281
        }
    },
    "Sharpedo": {
        "@ Almirante Tolo": {
            "level": 72,
            "item": "Life Orb",
            "nature": "Jolly",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 252,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Crunch",
                "Ice Fang",
                "Psychic Fangs",
                "Liquidation"
            ],
            "index": 229
        },
        "@ Líder Aqua Aquiles": {
            "level": 73,
            "item": "Life Orb",
            "nature": "Jolly",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Crunch",
                "Ice Fang",
                "Liquidation",
                "Aqua Jet"
            ],
            "index": 233
        }
    },
    "Spectrier": {
        "@ Cultista M #2": {
            "level": 75,
            "item": "Colbur Berry",
            "nature": "Bold",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 0,
                "at": 0,
                "df": 252,
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Shadow Ball",
                "Will-O-Wisp",
                "Draining Kiss",
                "Calm Mind"
            ],
            "index": 257
        }
    },
    "Stakataka": {
        "@ Líder Secta Laireb": {
            "level": 74,
            "item": "Focus Sash",
            "nature": "Sassy",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 92,
                "at": 102,
                "df": 196,
                "sa": 24,
                "sd": 96,
                "sp": 0
            },
            "moves": [
                "Stealth Rock",
                "Gyro Ball",
                "Body Press",
                "Rock Blast"
            ],
            "index": 259
        }
    },
    "Swampert": {
        "@ Almirante Tolo": {
            "level": 70,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Earthquake",
                "Waterfall",
                "Ice Punch",
                "Stealth Rock"
            ],
            "index": 225
        }
    },
    "Tauros-X": {
        "@ Entrenadora Dalia #2": {
            "level": 75,
            "item": "Assault Vest",
            "nature": "Jolly",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Head Charge",
                "Head Smash",
                "Flare Blitz",
                "Wild Charge"
            ],
            "index": 277
        }
    },
    "Torkoal": {
        "@ Administrador Magma Tatiano": {
            "level": 68,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Lava Plume",
                "Solar Beam",
                "Stealth Rock",
                "Yawn"
            ],
            "index": 212
        }
    },
    "Type: Null": {
        "@ Viajero Zeus": {
            "level": 70,
            "item": "Sitrus Berry",
            "nature": "Adamant",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 84,
                "at": 90,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Body Slam",
                "Surf",
                "Flamethrower",
                "U-turn"
            ],
            "index": 208
        }
    },
    "Typhlosion": {
        "@ Líder Magma Magno": {
            "level": 70,
            "item": "Choice Scarf",
            "nature": "Timid",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 94
            },
            "moves": [
                "Eruption"
            ],
            "index": 218
        },
        "@ Líder Gimnasio Blaine #2": {
            "level": 74,
            "item": "Life Orb",
            "nature": "Modest",
            "ivs": {
                "hp": 28,
                "at": 28,
                "df": 28,
                "sa": 28,
                "sd": 28,
                "sp": 28
            },
            "evs": {
                "hp": 100,
                "at": 4,
                "df": 100,
                "sa": 106,
                "sd": 100,
                "sp": 100
            },
            "moves": [
                "Fire Blast",
                "Focus Blast",
                "Earth Power",
                "Eruption"
            ],
            "index": 282
        }
    },
    "Tyranitar": {
        "@ Azul #4": {
            "level": 66,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 22,
                "at": 22,
                "df": 22,
                "sa": 22,
                "sd": 22,
                "sp": 22
            },
            "evs": {
                "hp": 84,
                "at": 90,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Crunch",
                "Aerial Ace",
                "Stone Edge",
                "Dragon Dance"
            ],
            "index": 200
        },
        "@ Investigador Pkmn Oak": {
            "level": 76,
            "item": "Focus Sash",
            "nature": "Adamant",
            "ivs": {
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 30
            },
            "evs": {
                "hp": 100,
                "at": 100,
                "df": 100,
                "sa": 0,
                "sd": 100,
                "sp": 110
            },
            "moves": [
                "Stealth Rock",
                "Crunch",
                "Stone Edge",
                "Thunder Wave"
            ],
            "index": 284
        }
    },
    "Wailord": {
        "@ Almirante Tolo": {
            "level": 71,
            "item": "Sitrus Berry",
            "nature": "Serious",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 84
            },
            "moves": [
                "Surf",
                "Earthquake",
                "Body Slam",
                "Ice Beam"
            ],
            "index": 227
        },
        "@ Líder Aqua Aquiles": {
            "level": 72,
            "item": "Leftovers",
            "nature": "Relaxed",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 94,
                "at": 88,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 64
            },
            "moves": [
                "Dive",
                "Double-Edge",
                "Rest",
                "Sleep Talk"
            ],
            "index": 231
        }
    },
    "Weavile": {
        "@ Rival Andra #7": {
            "level": 67,
            "item": "Focus Sash",
            "nature": "Adamant",
            "ivs": {
                "hp": 23,
                "at": 23,
                "df": 23,
                "sa": 23,
                "sd": 23,
                "sp": 23
            },
            "evs": {
                "hp": 84,
                "at": 84,
                "df": 84,
                "sa": 84,
                "sd": 84,
                "sp": 90
            },
            "moves": [
                "Fake Out",
                "Knock Off",
                "Triple Axel",
                "Low Kick"
            ],
            "index": 202
        }
    },
    "Wishiwashi": {
        "@ Líder Aqua Aquiles": {
            "level": 73,
            "item": "Shell Bell",
            "nature": "Sassy",
            "ivs": {
                "hp": 24,
                "at": 24,
                "df": 24,
                "sa": 24,
                "sd": 24,
                "sp": 24
            },
            "evs": {
                "hp": 88,
                "at": 94,
                "df": 88,
                "sa": 88,
                "sd": 88,
                "sp": 64
            },
            "moves": [
                "Hydro Pump",
                "Power Whip",
                "Ice Beam",
                "Earthquake"
            ],
            "index": 234
        }
    },
    "Yanmega": {
        "@ Científico Miguel #3": {
            "level": 70,
            "item": "Focus Sash",
            "nature": "Modest",
            "ivs": {
                "hp": 25,
                "at": 25,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 25
            },
            "evs": {
                "hp": 88,
                "at": 64,
                "df": 88,
                "sa": 94,
                "sd": 88,
                "sp": 88
            },
            "moves": [
                "Bug Buzz",
                "Ancient Power",
                "Air Slash",
                "Protect"
            ],
            "index": 241
        }
    },
    "Zoroark": {
        "@ Cultista M #2": {
            "level": 74,
            "item": "Assault Vest",
            "nature": "Timid",
            "ivs": {
                "hp": 27,
                "at": 27,
                "df": 27,
                "sa": 27,
                "sd": 27,
                "sp": 27
            },
            "evs": {
                "hp": 92,
                "at": 44,
                "df": 92,
                "sa": 98,
                "sd": 92,
                "sp": 92
            },
            "moves": [
                "Night Daze",
                "Shadow Ball",
                "Flamethrower",
                "Sludge Bomb"
            ],
            "index": 256
        }
    }
};