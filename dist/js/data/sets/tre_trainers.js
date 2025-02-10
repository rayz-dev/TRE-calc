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
        },
        "@ Guardián Alfa #2": {
            "level": 95,
            "item": "Lum Berry",
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
                "Rock Slide",
                "Fly",
                "Aqua Tail",
                "Earthquake"
            ],
            "index": 451
        }
    },
    "Alakazam": {
        "@ Entrenador Azul #2": {
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
        "@ Entrenador Azul #3": {
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
        "@ Entrenador Azul #4": {
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
        },
        "@ Líder Gimnasio Jaden": {
            "level": 92,
            "item": "Alakazite",
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
                "hp": 35,
                "at": 35,
                "df": 35,
                "sa": 252,
                "sd": 35,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Shadow Ball",
                "Reflect",
                "Dazzling Gleam"
            ],
            "index": 396
        },
        "@ Base Caoba #3": {
            "level": 84,
            "item": "Twisted Spoon",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Drain Punch",
                "Psycho Cut",
                "Fire Punch",
                "Shadow Sneak"
            ],
            "index": 421
        },
        "@ Viajero Eusine": {
            "level": 97,
            "item": "Focus Sash",
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
                "Psyshock",
                "Focus Blast",
                "Shadow Ball",
                "Psychic"
            ],
            "index": 499
        },
        "@ Alto Mando Torre Dun #4": {
            "level": 101,
            "item": "Alakazite",
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
                "hp": 100,
                "at": 100,
                "df": 100,
                "sa": 252,
                "sd": 100,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Thunderbolt",
                "Dark Pulse",
                "Dazzling Gleam"
            ],
            "index": 531
        },
        "@ Viajero Eusine #2": {
            "level": 104,
            "item": "Alakazite",
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
                "Psyshock",
                "Focus Blast",
                "Dazzling Gleam",
                "Reflect"
            ],
            "index": 607
        },
        "@ Entrenador Azul #5": {
            "level": 96,
            "item": "Focus Sash",
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
                "Psychic",
                "Shadow Ball",
                "Reflect",
                "Focus Blast"
            ],
            "index": 613
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
        "@ Entrenador Azul #3": {
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
        "@ Entrenador Azul #4": {
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
        },
        "@ Ejecutivo Rocket Protón #2": {
            "level": 87,
            "item": "Rocky Helmet",
            "nature": "Impish",
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
                "df": 252,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Morning Sun",
                "Will-O-Wisp",
                "Extreme Speed",
                "Flare Blitz"
            ],
            "index": 374
        },
        "@ Entrenador Azul #5": {
            "level": 97,
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Flare Blitz",
                "Extreme Speed",
                "Wild Charge",
                "Outrage"
            ],
            "index": 614
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
        },
        "@ Base Caoba": {
            "level": 92,
            "item": "Beedrillite",
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
                "U-turn",
                "Drill Run",
                "Poison Jab",
                "Knock Off"
            ],
            "index": 412
        },
        "@ Líder Fucsia Koga": {
            "level": 103,
            "item": "Beedrillite",
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
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 252,
                "sd": 40,
                "sp": 252
            },
            "moves": [
                "U-turn",
                "Poison Jab",
                "Drill Run",
                "Knock Off"
            ],
            "index": 596
        }
    },
    "Blastoise": {
        "@ Entrenador Azul #2": {
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
        "@ Entrenador Azul #3": {
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
        "@ Entrenador Azul #4": {
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
        },
        "@ Entrenador Azul #5": {
            "level": 100,
            "item": "Blastoisinite",
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
                "hp": 100,
                "at": 100,
                "df": 100,
                "sa": 252,
                "sd": 252,
                "sp": 100
            },
            "moves": [
                "Water Pulse",
                "Aura Sphere",
                "Dark Pulse",
                "Dragon Pulse"
            ],
            "index": 617
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
        },
        "@ Entrenador Rojo": {
            "level": 87,
            "item": "Life Orb",
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
                "Focus Blast",
                "Air Slash",
                "Blast Burn",
                "Dragon Pulse"
            ],
            "index": 385
        },
        "@ Base Caoba #3": {
            "level": 85,
            "item": "White Herb",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Overheat",
                "Dragon Pulse",
                "Air Slash",
                "Fire Blast"
            ],
            "index": 423
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
        },
        "@ Pokemaníaco Louis": {
            "level": 76,
            "item": "Assault Vest",
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
                "df": 0,
                "sa": 6,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Icicle Spear",
                "Rock Blast",
                "Ice Shard",
                "Drill Run"
            ],
            "index": 309
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
        },
        "@ Capitán Barco Olivo": {
            "level": 85,
            "item": "Focus Sash",
            "nature": "Serious",
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
                "Crabhammer",
                "Knock Off",
                "Aqua Jet",
                "Dragon Dance"
            ],
            "index": 359
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
        },
        "@ Ex Alto Mando Agatha": {
            "level": 87,
            "item": "Choice Band",
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
                "Brave Bird"
            ],
            "index": 391
        },
        "@ Base Caoba": {
            "level": 82,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Leech Life",
                "Fly",
                "Cross Poison",
                "Roost"
            ],
            "index": 411
        },
        "@ Líder Fucsia Koga": {
            "level": 100,
            "item": "Flying Gem",
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
                "sp": 0
            },
            "moves": [
                "Acrobatics",
                "U-turn",
                "Roost",
                "Super Fang"
            ],
            "index": 595
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
        },
        "@ Farero Kepler": {
            "level": 84,
            "item": "Assault Vest",
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
                "Thunderbolt",
                "Hurricane",
                "Dragon Pulse",
                "Surf"
            ],
            "index": 351
        },
        "@ Alto Mando Torre Dun": {
            "level": 97,
            "item": "Choice Band",
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
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Fly"
            ],
            "index": 513
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
        },
        "@ Chica Kimono #5": {
            "level": 78,
            "item": "Life Orb",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Thunderbolt",
                "Cross Chop",
                "Psychic",
                "Reflect"
            ],
            "index": 338
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
        },
        "@ Lt #2": {
            "level": 100,
            "item": "Electirizer",
            "nature": "Naive",
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
                "Plasma Fists",
                "Fire Punch",
                "Earthquake",
                "Cross Chop"
            ],
            "index": 575
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
        },
        "@ Profesor Elm": {
            "level": 77,
            "item": "Light Clay",
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
                "Thunderbolt",
                "Reflect",
                "Light Screen",
                "Signal Beam"
            ],
            "index": 302
        },
        "@ Lt": {
            "level": 98,
            "item": "Choice Band",
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
                "Explosion"
            ],
            "index": 571
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
        },
        "@ Viajero Eusine #2": {
            "level": 106,
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
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Sacred Fire",
                "Stone Edge",
                "Extreme Speed",
                "High Horsepower"
            ],
            "index": 609
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
        },
        "@ Maestro Torre Bellsprout": {
            "level": 77,
            "item": "Expert Belt",
            "nature": "Serious",
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
                "Psychic",
                "Dazzling Gleam",
                "Mystical Fire",
                "Moonlight"
            ],
            "index": 293
        },
        "@ Chica Kimono #2": {
            "level": 80,
            "item": "Leftovers",
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
                "Psychic",
                "Dazzling Gleam",
                "Grass Knot",
                "Shadow Ball"
            ],
            "index": 331
        },
        "@ Entrenador Rojo": {
            "level": 82,
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
                "Psychic",
                "Dazzling Gleam",
                "Aura Sphere",
                "Shadow Ball"
            ],
            "index": 386
        }
    },
    "Exeggcute": {
        "@ Entrenador Azul #2": {
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
        "@ Entrenador Azul #3": {
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
        },
        "@ Entrenador Azul #5": {
            "level": 96,
            "item": "Assault Vest",
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
                "Psychic",
                "Leaf Storm",
                "Giga Drain",
                "Dragon Pulse"
            ],
            "index": 615
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
        },
        "@ Profesor Elm": {
            "level": 79,
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
                "Dragon Dance",
                "Ice Punch",
                "Crunch",
                "Liquidation"
            ],
            "index": 305
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
        },
        "@ Chica Kimono": {
            "level": 80,
            "item": "Choice Scarf",
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
                "Flare Blitz"
            ],
            "index": 328
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
        },
        "@ Maestro Torre Bellsprout": {
            "level": 77,
            "item": "Life Orb",
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
                "Shadow Ball",
                "Sludge Bomb",
                "Thunderbolt",
                "Hypnosis"
            ],
            "index": 292
        },
        "@ Ex Alto Mando Agatha": {
            "level": 86,
            "item": "Focus Sash",
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
                "Sludge Bomb",
                "Thunderbolt",
                "Hypnosis"
            ],
            "index": 389
        },
        " @ Ex Alto Mando Agatha": {
            "level": 86,
            "item": "Gengarite",
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
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 252,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Shadow Ball",
                "Sludge Bomb",
                "Thunderbolt",
                "Dazzling Gleam"
            ],
            "index": 394
        },
        "@ Líder Gimnasio Jaden": {
            "level": 89,
            "item": "Assault Vest",
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
                "hp": 252,
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Shadow Ball",
                "Sludge Bomb",
                "Thunderbolt",
                "Dazzling Gleam"
            ],
            "index": 399
        },
        "@ Guardián Alfa #4": {
            "level": 95,
            "item": "Lum Berry",
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
                "hp": 0,
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Shadow Ball",
                "Thunderbolt",
                "Sludge Bomb",
                "Focus Blast"
            ],
            "index": 455
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
        },
        "@ Chica Kimono #4": {
            "level": 78,
            "item": "Life Orb",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Surf",
                "Ice Beam",
                "Psychic",
                "Yawn"
            ],
            "index": 335
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
        "@ Entrenador Azul #2": {
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
        },
        "@ Base Caoba #3": {
            "level": 86,
            "item": "Gyaradosite",
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
                "Earthquake",
                "Waterfall",
                "Crunch",
                "Dragon Rage"
            ],
            "index": 424
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
        "@ Entrenador Azul #4": {
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
        },
        "@ Rival Andra #8": {
            "level": 88,
            "item": "Choice Scarf",
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
                "Stone Edge",
                "Megahorn",
                "Close Combat",
                "Earthquake"
            ],
            "index": 378
        },
        "@ Rival Andra #9": {
            "level": 100,
            "item": "Choice Scarf",
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
                "Megahorn",
                "Close Combat",
                "Stone Edge",
                "Earthquake"
            ],
            "index": 508
        },
        "@ Alto Mando Torre Dun #2": {
            "level": 97,
            "item": "Focus Sash",
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
                "hp": 30,
                "at": 252,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Megahorn",
                "Stone Edge",
                "Close Combat",
                "Earthquake"
            ],
            "index": 516
        },
        "@ Entrenador Azul #5": {
            "level": 95,
            "item": "Focus Sash",
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
                "Megahorn",
                "Stone Edge",
                "Close Combat",
                "Knock Off"
            ],
            "index": 612
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
        },
        "@ Base Caoba #2": {
            "level": 81,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Close Combat",
                "Fake Out",
                "Bullet Punch",
                "Knock Off"
            ],
            "index": 413
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
        },
        "@ Base Caoba #2": {
            "level": 84,
            "item": "Houndoominite",
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Dark Pulse",
                "Sludge Bomb",
                "Flamethrower",
                "Overheat"
            ],
            "index": 418
        },
        "@ Administrador Jefe Rocket Atlas #2": {
            "level": 103,
            "item": "Houndoominite",
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
                "hp": 45,
                "at": 45,
                "df": 45,
                "sa": 252,
                "sd": 45,
                "sp": 252
            },
            "moves": [
                "Dark Pulse",
                "Flamethrower",
                "Sludge Bomb",
                "Scorching Sands"
            ],
            "index": 567
        },
        "@ Motorista #3": {
            "level": 99,
            "item": "Focus Sash",
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
                "hp": 0,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Overheat",
                "Sludge Bomb",
                "Nasty Plot",
                "Dark Pulse"
            ],
            "index": 590
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
        },
        "@ Viajero Eusine": {
            "level": 96,
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
                "Reflect",
                "Psychic",
                "Foul Play",
                "Thunder Wave"
            ],
            "index": 497
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
        },
        "@ Chica Kimono #5": {
            "level": 80,
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
                "Thunderbolt",
                "Shadow Ball",
                "Hyper Voice",
                "Signal Beam"
            ],
            "index": 340
        },
        "@ Base Caoba #3": {
            "level": 84,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Thunderbolt",
                "Shadow Ball",
                "Hyper Voice",
                "Volt Switch"
            ],
            "index": 420
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
                "Rock Throw"
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
        },
        "@ Guardián Alfa": {
            "level": 95,
            "item": "Lum Berry",
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
                "Rock Slide",
                "X-Scissor",
                "Waterfall",
                "Aqua Jet"
            ],
            "index": 449
        }
    },
    "Kadabra": {
        "@ Entrenador Azul": {
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
        },
        "@ Base Caoba #3": {
            "level": 83,
            "item": "Leftovers",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Double-Edge",
                "Fake Out",
                "Drain Punch",
                "Fire Punch"
            ],
            "index": 419
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
        },
        "@ Farero Kepler": {
            "level": 84,
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
                "Dragon Pulse",
                "Surf",
                "Rain Dance",
                "Ice Beam"
            ],
            "index": 350
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
        },
        "@ Farero Kepler": {
            "level": 83,
            "item": "Damp Rock",
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
                "Thunder",
                "Surf",
                "Ice Beam",
                "Rain Dance"
            ],
            "index": 348
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
        },
        "@ Entrenador Rojo": {
            "level": 82,
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
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Dive",
                "Blizzard",
                "Thunder",
                "Psychic"
            ],
            "index": 384
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
        },
        "@ Líder Gimnasio Aníbal": {
            "level": 86,
            "item": "White Herb",
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
                "Bullet Punch",
                "Fissure",
                "Close Combat",
                "Stone Edge"
            ],
            "index": 365
        },
        "@ Entrenador Rojo": {
            "level": 83,
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
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Dynamic Punch",
                "Bullet Punch",
                "Knock Off",
                "Stone Edge"
            ],
            "index": 388
        },
        "@ Motorista #3": {
            "level": 100,
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Dynamic Punch",
                "Stone Edge",
                "Bullet Punch",
                "Earthquake"
            ],
            "index": 591
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
        },
        "@ Chica Kimono": {
            "level": 78,
            "item": "Life Orb",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Flamethrower",
                "Focus Blast",
                "Psychic"
            ],
            "index": 326
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
        },
        "@ Guardián Alfa #3": {
            "level": 95,
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
                "hp": 128,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Bonemerang",
                "Shadow Bone",
                "Ice Punch",
                "Shadow Sneak"
            ],
            "index": 454
        },
        "@ Unown Áureo": {
            "level": 95,
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
                "hp": 128,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Bonemerang",
                "Shadow Bone",
                "Ice Punch",
                "Shadow Sneak"
            ],
            "index": 460
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
        },
        "@ Ex Alto Mando Agatha": {
            "level": 88,
            "item": "Choice Band",
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
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Bonemerang",
                "Shadow Bone",
                "Fire Punch",
                "Knock Off"
            ],
            "index": 392
        },
        "@ Guardián Alfa #3": {
            "level": 95,
            "item": "Thick Club",
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
                "Bonemerang",
                "Knock Off",
                "Poltergeist",
                "Rock Slide"
            ],
            "index": 453
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
        },
        "@ Motorista": {
            "level": 98,
            "item": "Poison Gem",
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Gunk Shot",
                "Drain Punch",
                "Knock Off",
                "Shadow Sneak"
            ],
            "index": 581
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
        },
        "@ Chica Kimono": {
            "level": 79,
            "item": "Leftovers",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Flamethrower",
                "Extrasensory",
                "Will-O-Wisp",
                "Energy Ball"
            ],
            "index": 327
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
        },
        "@ Maestro Torre Bellsprout": {
            "level": 76,
            "item": "Leftovers",
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
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Psychic",
                "Air Slash",
                "Heat Wave",
                "Moonblast"
            ],
            "index": 291
        },
        "@ Farero Kepler": {
            "level": 83,
            "item": "Expert Belt",
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
                "hp": 252,
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Psychic",
                "Hurricane",
                "Shadow Ball",
                "Moonblast"
            ],
            "index": 349
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
        "@ Entrenador Azul #2": {
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
        "@ Entrenador Azul #3": {
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
        "@ Entrenador Azul #4": {
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
        },
        "@ Líder Gimnasio Pegaso": {
            "level": 80,
            "item": "Pidgeotite",
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
                "Hurricane",
                "Heat Wave",
                "Hyper Beam",
                "Roost"
            ],
            "index": 298
        },
        "@ Líder Gimnasio Pegaso #2": {
            "level": 99,
            "item": "Pidgeotite",
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
                "hp": 45,
                "at": 45,
                "df": 45,
                "sa": 252,
                "sd": 45,
                "sp": 252
            },
            "moves": [
                "Hurricane",
                "Heat Wave",
                "Hyper Beam",
                "Tailwind"
            ],
            "index": 490
        }
    },
    "Pidgeotto": {
        "@ Entrenador Azul": {
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
        },
        "@ Entrenador Rojo": {
            "level": 87,
            "item": "Light Ball",
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
                "hp": 252,
                "at": 252,
                "df": 252,
                "sa": 252,
                "sd": 252,
                "sp": 252
            },
            "moves": [
                "Fake Out",
                "Volt Tackle",
                "Surf",
                "Extreme Speed"
            ],
            "index": 383
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
        },
        "@ Líder Gimnasio César": {
            "level": 83,
            "item": "Pinsirite",
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
                "hp": 10,
                "at": 252,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 252
            },
            "moves": [
                "Thrash",
                "Earthquake",
                "Knock Off",
                "Close Combat"
            ],
            "index": 318
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
        },
        "@ Coleccionista Bill #4": {
            "level": 104,
            "item": "Eviolite",
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
                "sa": 6,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Tri Attack",
                "Psychic",
                "Recover",
                "Thunder Wave"
            ],
            "index": 619
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
        },
        "@ Motorista #2": {
            "level": 97,
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
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Earthquake",
                "Rock Slide",
                "Thrash",
                "Close Combat"
            ],
            "index": 584
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
        },
        "@ Chica Kimono #5": {
            "level": 79,
            "item": "Life Orb",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Grass Knot",
                "Thunderbolt",
                "Surf",
                "Focus Blast"
            ],
            "index": 339
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
        },
        "@ Viajero Eusine #2": {
            "level": 106,
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
                "hp": 50,
                "at": 50,
                "df": 50,
                "sa": 252,
                "sd": 50,
                "sp": 252
            },
            "moves": [
                "Thunderbolt",
                "Aura Sphere",
                "Extrasensory",
                "Scald"
            ],
            "index": 610
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
        "@ Entrenador Azul": {
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
        "@ Entrenador Azul #3": {
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
        },
        "@ Base Caoba #2": {
            "level": 82,
            "item": "Eviolite",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Earthquake",
                "Hammer Arm",
                "Stone Edge",
                "Megahorn"
            ],
            "index": 414
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
        },
        "@ Pokemaníaco Louis": {
            "level": 75,
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
                "df": 0,
                "sa": 252,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Scald",
                "Psychic",
                "Yawn",
                "Slack Off"
            ],
            "index": 308
        },
        " @ Pokemaníaco Louis": {
            "level": 77,
            "item": "Rocky Helmet",
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
                "Slack Off",
                "Psychic",
                "Scald",
                "Foul Play"
            ],
            "index": 310
        },
        "  @ Pokemaníaco Louis": {
            "level": 77,
            "item": "Assault Vest",
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
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Future Sight",
                "Scald",
                "Focus Blast",
                "Flamethrower"
            ],
            "index": 311
        },
        "   @ Pokemaníaco Louis": {
            "level": 78,
            "item": "Slowbronite",
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
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Scald",
                "Slack Off",
                "Psyshock",
                "Amnesia"
            ],
            "index": 313
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
        },
        "@ Chica Kimono #3": {
            "level": 78,
            "item": "Life Orb",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Ice Punch",
                "Fake Out",
                "Knock Off",
                "Brick Break"
            ],
            "index": 332
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
        },
        "@ Entrenador Rojo": {
            "level": 82,
            "item": "Leftovers",
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
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 6
            },
            "moves": [
                "Body Slam",
                "Zen Headbutt",
                "Earthquake",
                "Double-Edge"
            ],
            "index": 387
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
        },
        "@ Líder Gimnasio Fredo": {
            "level": 93,
            "item": "Starmietite",
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
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 252,
                "sd": 40,
                "sp": 252
            },
            "moves": [
                "Scald",
                "Thunderbolt",
                "Tri Attack",
                "Psychic"
            ],
            "index": 426
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
        },
        "@ Líder Gimnasio Crom": {
            "level": 87,
            "item": "Steelixite",
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
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 252,
                "sp": 20
            },
            "moves": [
                "Earthquake",
                "Rock Slide",
                "Stealth Rock",
                "Iron Tail"
            ],
            "index": 357
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
        },
        "@ Base Caoba #2": {
            "level": 83,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Body Slam",
                "Iron Head",
                "Zen Headbutt",
                "Rock Slide"
            ],
            "index": 415
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
        },
        "@ Chica Kimono #3": {
            "level": 80,
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
                "df": 6,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Dark Pulse",
                "Yawn",
                "Moonlight",
                "Aura Sphere"
            ],
            "index": 334
        },
        "@ Ejecutivo Rocket Protón #2": {
            "level": 86,
            "item": "Lum Berry",
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
                "at": 0,
                "df": 6,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Curse",
                "Crunch",
                "Yawn",
                "Rest"
            ],
            "index": 372
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
        },
        "@ Rival Andra #8": {
            "level": 89,
            "item": "Eviolite",
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
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Thrash",
                "Earthquake",
                "Fire Punch",
                "Drain Punch"
            ],
            "index": 379
        },
        "@ Base Caoba #2": {
            "level": 83,
            "item": "Flame Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Facade",
                "Close Combat",
                "Shadow Claw",
                "Earthquake"
            ],
            "index": 417
        },
        "@ Motorista": {
            "level": 97,
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Earthquake",
                "Rock Slide",
                "Thrash",
                "Close Combat"
            ],
            "index": 580
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
        },
        "@ Chica Kimono #4": {
            "level": 80,
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
                "hp": 252,
                "at": 0,
                "df": 6,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Scald",
                "Ice Beam",
                "Shadow Ball",
                "Hydro Pump"
            ],
            "index": 337
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
        },
        "@ Maestro Torre Bellsprout": {
            "level": 75,
            "item": "Life Orb",
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
                "Sludge Bomb",
                "Giga Drain",
                "Reflect",
                "Sleep Powder"
            ],
            "index": 290
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
        "@ Entrenador Azul": {
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
        },
        "@ Base Caoba #2": {
            "level": 82,
            "item": "Black Sludge",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Will-O-Wisp",
                "Pain Split",
                "Sludge Bomb",
                "Flamethrower"
            ],
            "index": 416
        },
        "@ Lt": {
            "level": 98,
            "item": "Focus Sash",
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
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Explosion"
            ],
            "index": 572
        },
        "@ Motorista #2": {
            "level": 98,
            "item": "Poison Gem",
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
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Sludge Bomb",
                "Fire Blast",
                "Thunderbolt",
                "Shadow Ball"
            ],
            "index": 585
        },
        "@ Líder Fucsia Koga": {
            "level": 105,
            "item": "Gas Condenser",
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
                "hp": 80,
                "at": 80,
                "df": 80,
                "sa": 252,
                "sd": 252,
                "sp": 80
            },
            "moves": [
                "Sludge Bomb",
                "Will-O-Wisp",
                "Fire Blast",
                "Dark Pulse"
            ],
            "index": 599
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
        },
        "@ Chica Kimono #2": {
            "level": 79,
            "item": "Assault Vest",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Psychic",
                "Air Slash",
                "Shadow Ball"
            ],
            "index": 330
        },
        "@ Guardián Alfa #5": {
            "level": 95,
            "item": "Wacan Berry",
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
                "hp": 252,
                "at": 0,
                "df": 252,
                "sa": 6,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Psychic",
                "Heat Wave",
                "Air Slash",
                "Dazzling Gleam"
            ],
            "index": 457
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
        },
        "@ Lt #2": {
            "level": 102,
            "item": "Rocky Helmet",
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
                "sa": 0,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Discharge",
                "Heat Wave",
                "Roost",
                "Toxic"
            ],
            "index": 577
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
        },
        "@ Viajero Zeus #2": {
            "level": 83,
            "item": "Iron Plate",
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
                "df": 128,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Flash Cannon",
                "Shadow Ball",
                "Sacred Sword",
                "King's Shield"
            ],
            "index": 342
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
        },
        "@ Cabina Seguridad #3": {
            "level": 98,
            "item": "Focus Sash",
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
                "Dual Wingbeat",
                "Stone Edge",
                "Dragon Claw",
                "Earthquake"
            ],
            "index": 550
        },
        "@ Científico Miguel #4": {
            "level": 107,
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
                "hp": 50,
                "at": 252,
                "df": 50,
                "sa": 50,
                "sd": 50,
                "sp": 252
            },
            "moves": [
                "Dual Wingbeat",
                "Rock Slide",
                "Aqua Tail",
                "Dragon Claw"
            ],
            "index": 629
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
        },
        "@ Administrador Devon Rubí": {
            "level": 102,
            "item": "Blazikenite",
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
                "Close Combat",
                "Flare Blitz",
                "Protect",
                "Stone Edge"
            ],
            "index": 541
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
        },
        "@ Team Rocket Líder Giovanni #2": {
            "level": 110,
            "item": "Focus Sash",
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
                "hp": 55,
                "at": 55,
                "df": 55,
                "sa": 252,
                "sd": 55,
                "sp": 252
            },
            "moves": [
                "Grass Knot",
                "Psyshock",
                "Mystical Fire",
                "Earth Power"
            ],
            "index": 635
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
        },
        "@ Líder Secta Laireb #2": {
            "level": 96,
            "item": "Wide Lens",
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
                "Spacial Rend",
                "Dark Pulse",
                "Dark Void",
                "Sludge Bomb"
            ],
            "index": 441
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
        },
        "@ Cabina Seguridad #5": {
            "level": 98,
            "item": "Focus Sash",
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
                "Psychic",
                "Ice Beam",
                "Aura Sphere",
                "Shadow Ball"
            ],
            "index": 556
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
        },
        "@ Cabina Seguridad #5": {
            "level": 98,
            "item": "Rocky Helmet",
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
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Toxic",
                "Cosmic Power",
                "Night Shade",
                "Recover"
            ],
            "index": 555
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
        },
        "@ Líder Gimnasio Jaden": {
            "level": 91,
            "item": "White Herb",
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
                "Draco Meteor",
                "Flamethrower"
            ],
            "index": 397
        },
        "@ Líder Gimnasio M": {
            "level": 95,
            "item": "Power Herb",
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
                "Shadow Force",
                "Dragon Darts",
                "U-turn",
                "Steel Wing"
            ],
            "index": 446
        },
        "@ Alto Mando Torre Dun #3": {
            "level": 100,
            "item": "Light Clay",
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
                "at": 40,
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 252
            },
            "moves": [
                "Light Screen",
                "Reflect",
                "Dragon Darts",
                "U-turn"
            ],
            "index": 526
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
        },
        "@ Alto Mando Torre Dun #3": {
            "level": 100,
            "item": "Dusknoirite",
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
                "at": 80,
                "df": 252,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Drain Punch",
                "Will-O-Wisp",
                "Poltergeist",
                "Leech Life"
            ],
            "index": 525
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
        },
        "@ Viajero Zeus #2": {
            "level": 83,
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
                "hp": 0,
                "at": 0,
                "df": 6,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Moonblast",
                "Aura Sphere",
                "Psychic",
                "Mystical Fire"
            ],
            "index": 343
        },
        "@ Zeus": {
            "level": 94,
            "item": "Choice Scarf",
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
                "Light of Ruin"
            ],
            "index": 472
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
        },
        "@ Capitán Barco Olivo": {
            "level": 87,
            "item": "Flygonite",
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
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 252,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Bug Buzz",
                "Boomburst",
                "Flamethrower",
                "Quiver Dance"
            ],
            "index": 364
        },
        "@ Científico Miguel #4": {
            "level": 107,
            "item": "Flygonite",
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
                "hp": 25,
                "at": 25,
                "df": 128,
                "sa": 25,
                "sd": 128,
                "sp": 252
            },
            "moves": [
                "Boomburst",
                "Bug Buzz",
                "Dragon Pulse",
                "Roost"
            ],
            "index": 628
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
        },
        "@ Guardián Alfa #4": {
            "level": 95,
            "item": "Colbur Berry",
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
                "Hyper Voice",
                "Psychic",
                "Aura Sphere"
            ],
            "index": 456
        },
        "@ Unown Áureo": {
            "level": 95,
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
                "hp": 252,
                "at": 0,
                "df": 252,
                "sa": 6,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Shadow Ball",
                "Hyper Voice",
                "Pain Split",
                "Will-O-Wisp"
            ],
            "index": 463
        },
        "@ Rey Unown": {
            "level": 97,
            "item": "Spooky Plate",
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
                "Moongeist Beam",
                "Hyper Voice",
                "Dark Void",
                "Aura Sphere"
            ],
            "index": 477
        },
        "@ Ghost Primigenio": {
            "level": 110,
            "item": "Ominous Orb",
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
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Dark Void",
                "Moonlight",
                "Moongeist Beam",
                "Night Daze"
            ],
            "index": 618
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
        },
        "@ Viajero Zeus #2": {
            "level": 85,
            "item": "Leftovers",
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
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Earthquake",
                "Rock Slide",
                "Fire Punch",
                "Thunder Wave"
            ],
            "index": 345
        },
        "@ Viajero Zeus #3": {
            "level": 90,
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Earthquake",
                "Fire Punch",
                "Rock Slide",
                "Dragon Claw"
            ],
            "index": 405
        },
        "@ Administrador Devon Rubí": {
            "level": 103,
            "item": "White Herb",
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
                "Fissure",
                "Stone Edge",
                "Heat Crash",
                "Rock Polish"
            ],
            "index": 545
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
        },
        "@ Chica Kimono #3": {
            "level": 79,
            "item": "Assault Vest",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Drill Peck",
                "Night Slash",
                "Heat Wave"
            ],
            "index": 333
        },
        "@ Ex Alto Mando Agatha": {
            "level": 88,
            "item": "Choice Specs",
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
                "Night Slash"
            ],
            "index": 393
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
        },
        "@ Líder Gimnasio Valeria": {
            "level": 83,
            "item": "Steel Gem",
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
                "Dark Pulse",
                "Flamethrower",
                "Flash Cannon",
                "Dragon Pulse"
            ],
            "index": 321
        },
        "@ Líder Secta Laireb #2": {
            "level": 93,
            "item": "White Herb",
            "nature": "Naughty",
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
                "at": 128,
                "df": 0,
                "sa": 128,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Sludge Bomb",
                "Night Daze",
                "Flamethrower",
                "U-turn"
            ],
            "index": 440
        },
        "@ Motorista #3": {
            "level": 100,
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
                "hp": 0,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Draco Meteor",
                "Roost",
                "Superpower",
                "Iron Tail"
            ],
            "index": 592
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
        },
        "@ Viajero Zeus #2": {
            "level": 85,
            "item": "Splash Plate",
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Surf",
                "Thunder",
                "Ice Beam",
                "Water Spout"
            ],
            "index": 344
        },
        "@ Viajero Zeus #3": {
            "level": 90,
            "item": "Splash Plate",
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
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Thunder",
                "Ice Beam",
                "Surf",
                "Water Spout"
            ],
            "index": 404
        },
        "@ Administrador Devon Amatista": {
            "level": 99,
            "item": "Assault Vest",
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
                "df": 252,
                "sa": 252,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Origin Pulse",
                "Thunder",
                "Ice Beam",
                "Ancient Power"
            ],
            "index": 488
        }
    },
    "Lugia": {
        "@ Legendario Lugia": {
            "level": 85,
            "item": "Silver Wing",
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
        },
        "@ Viajero Zeus #3": {
            "level": 89,
            "item": "Silver Wing",
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
                "df": 128,
                "sa": 128,
                "sd": 0,
                "sp": 128
            },
            "moves": [
                "Aeroblast",
                "Hydro Pump",
                "Psychic",
                "Recover"
            ],
            "index": 401
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
        },
        "@ Cabina Seguridad #2": {
            "level": 98,
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
                "Zap Cannon",
                "Focus Blast",
                "Inferno",
                "Dynamic Punch"
            ],
            "index": 549
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
        },
        "@ Profesor Elm": {
            "level": 78,
            "item": "Leftovers",
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
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Thunderbolt",
                "Flash Cannon",
                "Steel Beam",
                "Thunder Wave"
            ],
            "index": 303
        },
        "@ Líder Gimnasio Crom": {
            "level": 85,
            "item": "Light Clay",
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
                "Discharge",
                "Light Screen",
                "Volt Switch",
                "Flash Cannon"
            ],
            "index": 354
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
        },
        "@ Administrador Devon Amatista": {
            "level": 98,
            "item": "Air Balloon",
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
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Meteor Mash",
                "Zen Headbutt",
                "Ice Punch",
                "Bullet Punch"
            ],
            "index": 486
        },
        "@ Administrador Devon Rubí": {
            "level": 101,
            "item": "Air Balloon",
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
                "Agility",
                "Meteor Mash",
                "Earthquake",
                "Explosion"
            ],
            "index": 544
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
        },
        "@ Líder Secta Laireb #2": {
            "level": 95,
            "item": "Leftovers",
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
                "Psychic",
                "Recover",
                "Flamethrower",
                "Barrier"
            ],
            "index": 438
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
        },
        "@ Proyectos De Mewtwo": {
            "level": 100,
            "item": "Life Orb",
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
                "Psystrike",
                "Ice Beam",
                "Aura Sphere",
                "Shadow Ball"
            ],
            "index": 560
        },
        " @ Proyectos De Mewtwo": {
            "level": 100,
            "item": "Mewtwonite X",
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
                "Drain Punch",
                "Zen Headbutt",
                "Stone Edge",
                "Bulk Up"
            ],
            "index": 561
        },
        "@ Team Rocket Líder Giovanni #2": {
            "level": 109,
            "item": "Mewtwonite Y",
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
                "Psystrike",
                "Aura Sphere",
                "Barrier",
                "Recover"
            ],
            "index": 636
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
        },
        "@ Cabina Seguridad": {
            "level": 98,
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Poison Jab",
                "Night Slash",
                "Earthquake",
                "Head Smash"
            ],
            "index": 546
        },
        "@ Líder Fucsia Koga": {
            "level": 104,
            "item": "Black Sludge",
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
                "Poison Jab",
                "Sucker Punch",
                "Earthquake",
                "Head Smash"
            ],
            "index": 598
        },
        "@ Team Rocket Líder Giovanni #2": {
            "level": 108,
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
                "hp": 0,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Poison Jab",
                "Night Slash",
                "Earthquake",
                "Sucker Punch"
            ],
            "index": 633
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
        },
        "@ Chica Kimono #4": {
            "level": 79,
            "item": "Choice Specs",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Hydro Pump"
            ],
            "index": 336
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
        },
        "@ Cabina Seguridad #4": {
            "level": 98,
            "item": "Dubious Disc",
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
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Thunderbolt",
                "Ice Beam",
                "Hyper Beam",
                "Shadow Ball"
            ],
            "index": 552
        },
        "@ Coleccionista Bill #4": {
            "level": 105,
            "item": "Dubious Disc",
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
                "Thunderbolt",
                "Ice Beam",
                "Recover",
                "Tri Attack"
            ],
            "index": 620
        },
        " @ Coleccionista Bill #4": {
            "level": 108,
            "item": "Porygonite",
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
                "Double-Edge",
                "Zen Headbutt",
                "Iron Tail",
                "Shift Gear"
            ],
            "index": 624
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
        },
        "@ Cabina Seguridad #4": {
            "level": 98,
            "item": "Life Orb",
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
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Shadow Ball",
                "Psychic",
                "Tri Attack",
                "Aura Sphere"
            ],
            "index": 553
        },
        "@ Coleccionista Bill #4": {
            "level": 106,
            "item": "Focus Sash",
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
                "Moongeist Beam",
                "Tri Attack",
                "Thunderbolt",
                "Aura Sphere"
            ],
            "index": 623
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
        },
        "@ Viajero Zeus #3": {
            "level": 92,
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
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 252,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Dragon Ascent",
                "V-create",
                "Draco Meteor",
                "Extreme Speed"
            ],
            "index": 406
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
        },
        "@ Administrador Devon Amatista": {
            "level": 96,
            "item": "Focus Sash",
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
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Head Smash",
                "Liquidation",
                "Earthquake",
                "Stealth Rock"
            ],
            "index": 483
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
        },
        "@ Team Rocket Líder Giovanni #2": {
            "level": 111,
            "item": "White Herb",
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
                "hp": 110,
                "at": 252,
                "df": 110,
                "sa": 110,
                "sd": 252,
                "sp": 110
            },
            "moves": [
                "Fissure",
                "Iron Head",
                "Stone Edge",
                "Heat Crash"
            ],
            "index": 637
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
        },
        "@ Capitán Barco Olivo": {
            "level": 86,
            "item": "Choice Band",
            "nature": "Serious",
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
                "Fly"
            ],
            "index": 361
        },
        "@ Líder Gimnasio M": {
            "level": 97,
            "item": "Salamencite",
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
                "hp": 50,
                "at": 252,
                "df": 50,
                "sa": 50,
                "sd": 50,
                "sp": 252
            },
            "moves": [
                "Double-Edge",
                "Dragon Dance",
                "Dragon Claw",
                "Earthquake"
            ],
            "index": 444
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
        },
        "@ Motorista #3": {
            "level": 101,
            "item": "Sharpedonite",
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Crunch",
                "Liquidation",
                "Psychic Fangs",
                "Ice Fang"
            ],
            "index": 593
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
        },
        "@ Líder Secta Laireb #2": {
            "level": 94,
            "item": "Focus Sash",
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
                "hp": 128,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Stealth Rock",
                "Gyro Ball",
                "Body Press",
                "Rock Blast"
            ],
            "index": 437
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
        },
        "@ Administrador Devon Amatista": {
            "level": 98,
            "item": "Swampertite",
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
                "hp": 40,
                "at": 252,
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 252
            },
            "moves": [
                "Earthquake",
                "Waterfall",
                "Stone Edge",
                "Ice Punch"
            ],
            "index": 487
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
        },
        "@ Cabina Seguridad #3": {
            "level": 98,
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
                "Head Smash",
                "Flare Blitz",
                "Head Charge",
                "Wild Charge"
            ],
            "index": 551
        },
        "@ Administrador Jefe Rocket Atlas #2": {
            "level": 102,
            "item": "Choice Scarf",
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Head Smash"
            ],
            "index": 564
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
        },
        "@ Profesor Elm": {
            "level": 79,
            "item": "Assault Vest",
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
                "Blast Burn",
                "Focus Blast",
                "Earth Power",
                "Burn Up"
            ],
            "index": 306
        }
    },
    "Tyranitar": {
        "@ Entrenador Azul #4": {
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
        },
        "@ Profesor Elm": {
            "level": 81,
            "item": "Tyranitarite",
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
                "Crunch",
                "Rock Slide",
                "Dragon Dance",
                "Iron Head"
            ],
            "index": 307
        },
        "@ Capitán Barco Olivo": {
            "level": 84,
            "item": "Life Orb",
            "nature": "Serious",
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
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Rock Slide",
                "Crunch",
                "Aerial Ace",
                "Flamethrower"
            ],
            "index": 363
        },
        "@ Entrenador Azul #5": {
            "level": 98,
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
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Crunch",
                "Stone Edge",
                "Earthquake",
                "Pursuit"
            ],
            "index": 616
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
        },
        "@ Rival Andra #8": {
            "level": 89,
            "item": "Focus Sash",
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
                "Fake Out",
                "Triple Axel",
                "Knock Off",
                "Low Kick"
            ],
            "index": 377
        },
        "@ Rival Andra #9": {
            "level": 99,
            "item": "Focus Sash",
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
                "Triple Axel",
                "Knock Off",
                "Fake Out",
                "Low Kick"
            ],
            "index": 504
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
    },
    "Absol": {
        "@ Líder Gimnasio Valeria": {
            "level": 85,
            "item": "Absolite",
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
                "hp": 15,
                "at": 252,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 252
            },
            "moves": [
                "Knock Off",
                "Stone Edge",
                "Close Combat",
                "Psycho Cut"
            ],
            "index": 323
        }
    },
    "Aerodactyl-Skeleton": {
        "@ Guardián Alfa #2": {
            "level": 95,
            "item": "Colbur Berry",
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
                "Rock Slide",
                "Cross Chop",
                "Shadow Bone",
                "Cross Poison"
            ],
            "index": 452
        },
        "@ Unown Áureo": {
            "level": 95,
            "item": "Spooky Plate",
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
                "df": 128,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Stealth Rock",
                "Stone Edge",
                "Shadow Bone",
                "Aqua Tail"
            ],
            "index": 459
        },
        "@ Legendario Ho": {
            "level": 97,
            "item": "Lum Berry",
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
                "Rock Slide",
                "Earthquake",
                "Shadow Bone",
                "Fly"
            ],
            "index": 465
        }
    },
    "Ampharos": {
        "@ Farero Kepler": {
            "level": 82,
            "item": "Light Clay",
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
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Thunderbolt",
                "Reflect",
                "Focus Blast",
                "Light Screen"
            ],
            "index": 347
        },
        " @ Farero Kepler": {
            "level": 85,
            "item": "Ampharosite",
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
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Agility",
                "Thunderbolt",
                "Focus Blast",
                "Dragon Pulse"
            ],
            "index": 352
        }
    },
    "Annihilape": {
        "@ Líder Gimnasio Aníbal": {
            "level": 87,
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Close Combat",
                "Gunk Shot",
                "Poltergeist",
                "High Horsepower"
            ],
            "index": 366
        },
        "@ Alto Mando Torre Dun #3": {
            "level": 101,
            "item": "Coba Berry",
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
                "hp": 100,
                "at": 252,
                "df": 100,
                "sa": 100,
                "sd": 100,
                "sp": 252
            },
            "moves": [
                "Drain Punch",
                "Poltergeist",
                "Gunk Shot",
                "Stone Edge"
            ],
            "index": 527
        },
        "@ Motorista #2": {
            "level": 99,
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
                "hp": 252,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Poltergeist",
                "Close Combat",
                "Gunk Shot",
                "Stone Edge"
            ],
            "index": 587
        },
        "@ Administrador Petrel": {
            "level": 103,
            "item": "Coba Berry",
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
                "Gunk Shot",
                "Drain Punch",
                "Poltergeist",
                "Bulk Up"
            ],
            "index": 603
        }
    },
    "Arceus": {
        "@ Zeus": {
            "level": 95,
            "item": "Lum Berry",
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
                "df": 6,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Extreme Speed",
                "Earthquake",
                "Swords Dance",
                "Shadow Claw"
            ],
            "index": 471
        }
    },
    "Arceus-Primal": {
        "@ Dios Laireb": {
            "level": 100,
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
                "Spacial Rend",
                "Flash Cannon",
                "Recover",
                "Secret Sword"
            ],
            "index": 480
        }
    },
    "Articuno-Galar": {
        "@ Líder Gimnasio Jaden": {
            "level": 90,
            "item": "Leftovers",
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
                "Hurricane",
                "Freezing Glare",
                "Roost",
                "Mystical Fire"
            ],
            "index": 395
        }
    },
    "Articuno-Primal": {
        "@ Líder Gimnasio Fredo": {
            "level": 94,
            "item": "Leftovers",
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
                "hp": 100,
                "at": 0,
                "df": 100,
                "sa": 100,
                "sd": 100,
                "sp": 110
            },
            "moves": [
                "Hydro Pump",
                "Sheer Cold",
                "Aeroblast",
                "Ancient Power"
            ],
            "index": 429
        }
    },
    "Baxcalibur": {
        "@ Líder Gimnasio Fredo": {
            "level": 92,
            "item": "Focus Sash",
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
                "Earthquake",
                "Outrage",
                "Dragon Dance",
                "Icicle Crash"
            ],
            "index": 427
        }
    },
    "Bellsprout": {
        "@ Maestro Torre Bellsprout": {
            "level": 79,
            "item": "Eviolite",
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
                "at": 252,
                "df": 252,
                "sa": 252,
                "sd": 252,
                "sp": 252
            },
            "moves": [
                "Giga Drain",
                "Mystical Fire",
                "Sludge Bomb",
                "Earth Power"
            ],
            "index": 295
        }
    },
    "Braviary": {
        "@ Líder Gimnasio Pegaso": {
            "level": 79,
            "item": "Leftovers",
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
                "hp": 128,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 128
            },
            "moves": [
                "Brave Bird",
                "U-turn",
                "Close Combat",
                "Rock Slide"
            ],
            "index": 297
        }
    },
    "Breloom": {
        "@ Base Caoba": {
            "level": 81,
            "item": "Choice Scarf",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Seed Bomb"
            ],
            "index": 408
        }
    },
    "Butterfree-&": {
        "@ Líder Gimnasio César": {
            "level": 84,
            "item": "Life Orb",
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
                "hp": 20,
                "at": 20,
                "df": 20,
                "sa": 252,
                "sd": 20,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Bug Buzz",
                "Heat Wave",
                "Giga Drain"
            ],
            "index": 319
        }
    },
    "Cobalion": {
        "@ Líder Gimnasio Crom": {
            "level": 86,
            "item": "Lum Berry",
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
                "hp": 0,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Iron Head",
                "Sacred Sword",
                "Zen Headbutt",
                "Rest"
            ],
            "index": 356
        }
    },
    "Crobat-&": {
        "@ Rival Andra #8": {
            "level": 92,
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
                "hp": 60,
                "at": 252,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 252
            },
            "moves": [
                "Gunk Shot",
                "Fly",
                "Leech Life",
                "Iron Head"
            ],
            "index": 382
        },
        "@ Rival Andra #9": {
            "level": 102,
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
                "hp": 110,
                "at": 252,
                "df": 252,
                "sa": 110,
                "sd": 110,
                "sp": 110
            },
            "moves": [
                "Fly",
                "Gunk Shot",
                "Behemoth Blade",
                "Leech Life"
            ],
            "index": 509
        }
    },
    "Darmanitan-Galar-Zen": {
        "@ Líder Gimnasio Fredo": {
            "level": 91,
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
                "Icicle Crash",
                "Flare Blitz",
                "Zen Headbutt",
                "U-turn"
            ],
            "index": 428
        }
    },
    "Dialga-Origin": {
        "@ Legendario Ho": {
            "level": 98,
            "item": "Draco Plate",
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
                "Roar of Time",
                "Flash Cannon",
                "Flamethrower",
                "Earth Power"
            ],
            "index": 466
        }
    },
    "Dragonite-&": {
        "@ Líder Gimnasio M": {
            "level": 98,
            "item": "Kebia Berry",
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
                "hp": 100,
                "at": 100,
                "df": 100,
                "sa": 252,
                "sd": 100,
                "sp": 252
            },
            "moves": [
                "Zap Cannon",
                "Moonblast",
                "Fire Blast",
                "Blizzard"
            ],
            "index": 448
        }
    },
    "Dragón-O": {
        "@ Dios Laireb": {
            "level": 100,
            "item": "Lum Berry",
            "nature": "Naive",
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
                "Dragon Rush",
                "Blue Flare",
                "Iron Tail",
                "Bolt Strike"
            ],
            "index": 481
        }
    },
    "Eevee-&": {
        "@ Líder Gimnasio Jaden": {
            "level": 93,
            "item": "Lum Berry",
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
                "hp": 70,
                "at": 70,
                "df": 70,
                "sa": 252,
                "sd": 70,
                "sp": 252
            },
            "moves": [
                "Boomburst",
                "Flamethrower",
                "Psyshock",
                "Vacuum Wave"
            ],
            "index": 400
        }
    },
    "Electivire-X": {
        "@ Rival Andra #8": {
            "level": 90,
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Double-Edge",
                "Cross Chop",
                "Ice Punch",
                "Quick Attack"
            ],
            "index": 381
        },
        "@ Rival Andra #9": {
            "level": 100,
            "item": "Air Balloon",
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
                "Double-Edge",
                "Ice Punch",
                "Reflect",
                "Cross Chop"
            ],
            "index": 506
        },
        "@ Cabina Seguridad #2": {
            "level": 98,
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Giga Impact",
                "Ice Punch",
                "Fire Punch",
                "Cross Chop"
            ],
            "index": 548
        }
    },
    "Empoleon": {
        "@ Líder Gimnasio Crom": {
            "level": 85,
            "item": "Assault Vest",
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
                "sa": 252,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Hydro Cannon",
                "Flash Cannon",
                "Ice Beam",
                "Grass Knot"
            ],
            "index": 355
        }
    },
    "Gallade": {
        "@ Líder Gimnasio Aníbal": {
            "level": 89,
            "item": "Galladite",
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
                "hp": 25,
                "at": 252,
                "df": 25,
                "sa": 25,
                "sd": 25,
                "sp": 252
            },
            "moves": [
                "Drain Punch",
                "Leaf Blade",
                "Psycho Cut",
                "Knock Off"
            ],
            "index": 369
        },
        "@ Base Caoba": {
            "level": 81,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Drain Punch",
                "Psycho Cut",
                "Fire Punch",
                "Shadow Sneak"
            ],
            "index": 409
        }
    },
    "Girafarig": {
        "@ Chica Kimono #2": {
            "level": 78,
            "item": "Life Orb",
            "nature": "Serious",
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
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Psychic",
                "Hyper Voice",
                "Shadow Ball",
                "Grass Knot"
            ],
            "index": 329
        }
    },
    "Giratina-Origin": {
        "@ Rey Unown": {
            "level": 98,
            "item": "Griseous Orb",
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
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Shadow Force",
                "Draco Meteor",
                "Will-O-Wisp",
                "Shadow Sneak"
            ],
            "index": 478
        }
    },
    "Golisopod": {
        "@ Líder Gimnasio César": {
            "level": 82,
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
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Leech Life",
                "Knock Off",
                "Liquidation",
                "First Impression"
            ],
            "index": 317
        }
    },
    "Groudon-Primal": {
        "@ Zeus": {
            "level": 96,
            "item": "Red Orb",
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
                "Precipice Blades",
                "Rock Slide",
                "Overheat",
                "Rock Polish"
            ],
            "index": 474
        }
    },
    "Ho-oh-Primal": {
        "@ Legendario Ho": {
            "level": 99,
            "item": "Kebia Berry",
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
                "Blue Flare",
                "Moonblast",
                "Giga Drain",
                "Ancient Power"
            ],
            "index": 467
        }
    },
    "Hoopa-Unbound": {
        "@ Líder Secta Laireb #2": {
            "level": 96,
            "item": "Choice Scarf",
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
                "Hyperspace Hole"
            ],
            "index": 439
        }
    },
    "Kabutops-Skeleton": {
        "@ Guardián Alfa": {
            "level": 95,
            "item": "Colbur Berry",
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
                "Rock Slide",
                "Cross Chop",
                "Shadow Bone",
                "Cross Poison"
            ],
            "index": 450
        },
        "@ Unown Áureo": {
            "level": 95,
            "item": "Colbur Berry",
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
                "Rock Slide",
                "Cross Chop",
                "Shadow Bone",
                "Leech Life"
            ],
            "index": 462
        },
        "@ Legendario Lugia Primigenio": {
            "level": 97,
            "item": "Lum Berry",
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
                "Rock Slide",
                "Cross Chop",
                "Shadow Bone",
                "Shadow Sneak"
            ],
            "index": 468
        }
    },
    "Kingdra-&": {
        "@ Líder Gimnasio Valeria": {
            "level": 86,
            "item": "Lum Berry",
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
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 252,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Dark Pulse",
                "Clanging Scales",
                "Sheer Cold",
                "Sludge Bomb"
            ],
            "index": 325
        }
    },
    "Kleavor": {
        "@ Líder Gimnasio César": {
            "level": 81,
            "item": "Focus Sash",
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
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Stone Edge",
                "U-turn",
                "Close Combat",
                "Stealth Rock"
            ],
            "index": 314
        },
        "@ Alto Mando Torre Dun #2": {
            "level": 98,
            "item": "Leftovers",
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
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 128
            },
            "moves": [
                "Stone Edge",
                "X-Scissor",
                "Close Combat",
                "Rock Slide"
            ],
            "index": 517
        },
        "@ Administrador Jefe Rocket Atlas #2": {
            "level": 101,
            "item": "Leftovers",
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
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Stealth Rock",
                "X-Scissor",
                "Stone Edge",
                "Iron Head"
            ],
            "index": 563
        }
    },
    "Kommo-o": {
        "@ Capitán Barco Olivo": {
            "level": 86,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 15,
                "at": 252,
                "df": 15,
                "sa": 15,
                "sd": 15,
                "sp": 252
            },
            "moves": [
                "Drain Punch",
                "Iron Head",
                "Dragon Claw",
                ""
            ],
            "index": 362
        }
    },
    "Kyogre-Primal": {
        "@ Zeus": {
            "level": 96,
            "item": "Blue Orb",
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
                "hp": 6,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Origin Pulse",
                "Sheer Cold",
                "Thunder",
                "Fissure"
            ],
            "index": 473
        }
    },
    "Kyurem": {
        "@ Líder Gimnasio M": {
            "level": 96,
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
                "Ice Burn"
            ],
            "index": 447
        }
    },
    "Kyurem-Primal": {
        "@ Zeus": {
            "level": 98,
            "item": "Life Orb",
            "nature": "Naive",
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
                "at": 128,
                "df": 0,
                "sa": 128,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Ice Burn",
                "Blue Flare",
                "Roost",
                "Bolt Strike"
            ],
            "index": 476
        }
    },
    "Lucario": {
        "@ Líder Gimnasio Crom": {
            "level": 86,
            "item": "Focus Sash",
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
                "Close Combat",
                "Stone Edge",
                "Meteor Mash",
                "Extreme Speed"
            ],
            "index": 353
        }
    },
    "Lugia-Primal": {
        "@ Legendario Lugia Primigenio": {
            "level": 99,
            "item": "Salac Berry",
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
                "hp": 128,
                "at": 0,
                "df": 0,
                "sa": 128,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Aeroblast",
                "Origin Pulse",
                "Recover"
            ],
            "index": 470
        }
    },
    "Mamoswine-&": {
        "@ Líder Gimnasio Fredo": {
            "level": 95,
            "item": "Choice Scarf",
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
                "hp": 80,
                "at": 252,
                "df": 80,
                "sa": 80,
                "sd": 80,
                "sp": 252
            },
            "moves": [
                "Head Charge"
            ],
            "index": 430
        }
    },
    "Mandibuzz": {
        "@ Líder Gimnasio Valeria": {
            "level": 82,
            "item": "Rocky Helmet",
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
                "Tailwind",
                "Foul Play",
                "Roost",
                "Knock Off"
            ],
            "index": 320
        }
    },
    "Manectric": {
        "@ Ejecutivo Rocket Protón #2": {
            "level": 89,
            "item": "Manectite",
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
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 252,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Thunderbolt",
                "Flamethrower",
                "Swagger",
                "Hyper Voice"
            ],
            "index": 376
        },
        "@ Lt #2": {
            "level": 103,
            "item": "Manectite",
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
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 252,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Volt Switch",
                "Overheat",
                "Light Screen",
                "Thunderbolt"
            ],
            "index": 576
        }
    },
    "Meganium": {
        "@ Profesor Elm": {
            "level": 79,
            "item": "Big Root",
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
                "hp": 0,
                "at": 0,
                "df": 128,
                "sa": 252,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Leech Seed",
                "Giga Drain",
                "Earthquake",
                "Draining Kiss"
            ],
            "index": 304
        }
    },
    "Milotic": {
        "@ Capitán Barco Olivo": {
            "level": 86,
            "item": "Leftovers",
            "nature": "Serious",
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
                "sa": 128,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Scald",
                "Ice Beam",
                "Moonblast",
                "Recover"
            ],
            "index": 360
        },
        "@ Rival Andra #8": {
            "level": 91,
            "item": "Miloticite",
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
                "hp": 30,
                "at": 252,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Moonblast",
                "Surf",
                "Ice Beam",
                "Recover"
            ],
            "index": 380
        },
        "@ Rival Andra #9": {
            "level": 100,
            "item": "Miloticite",
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
                "at": 55,
                "df": 252,
                "sa": 55,
                "sd": 55,
                "sp": 55
            },
            "moves": [
                "Scald",
                "Recover",
                "Toxic",
                "Refresh"
            ],
            "index": 505
        }
    },
    "Mismagius": {
        "@ Ex Alto Mando Agatha": {
            "level": 87,
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
                "Mystical Fire",
                "Psychic",
                "Energy Ball"
            ],
            "index": 390
        }
    },
    "Missingno": {
        "@ Dios Laireb": {
            "level": 101,
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
                "sa": 128,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Light of Ruin",
                "Moongeist Beam",
                "Mystical Fire",
                "Hyperspace Hole"
            ],
            "index": 482
        }
    },
    "Moltres-Galar": {
        "@ Líder Gimnasio Valeria": {
            "level": 84,
            "item": "Leftovers",
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
                "hp": 0,
                "at": 0,
                "df": 128,
                "sa": 252,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Fiery Wrath",
                "Oblivion Wing",
                "Roost",
                "Ancient Power"
            ],
            "index": 322
        }
    },
    "Moltres-Primal": {
        "@ Líder Gimnasio M": {
            "level": 97,
            "item": "Air Balloon",
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
                "Dragon Pulse",
                "Flamethrower",
                "Solar Beam",
                "Roost"
            ],
            "index": 445
        }
    },
    "Nidoking": {
        "@ Base Caoba": {
            "level": 82,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Sludge Bomb",
                "Earth Power",
                "Flamethrower",
                "Thunderbolt"
            ],
            "index": 410
        }
    },
    "Ninetales-Alola": {
        "@ Líder Gimnasio Fredo": {
            "level": 90,
            "item": "Light Clay",
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
                "hp": 252,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Freeze-Dry",
                "Aurora Veil",
                "Hypnosis",
                "Hail"
            ],
            "index": 425
        }
    },
    "Noivern": {
        "@ Campeón Teselia Mirto": {
            "level": 95,
            "item": "Noivernite",
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
                "hp": 45,
                "at": 45,
                "df": 45,
                "sa": 252,
                "sd": 45,
                "sp": 252
            },
            "moves": [
                "Dragon Pulse",
                "Hurricane",
                "Fire Blast",
                "Focus Blast"
            ],
            "index": 435
        }
    },
    "Overqwil": {
        "@ Ejecutivo Rocket Protón #2": {
            "level": 86,
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
                "at": 6,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Spikes",
                "Aqua Jet",
                "Crunch",
                "Gunk Shot"
            ],
            "index": 371
        },
        "@ Líder Fucsia Koga": {
            "level": 101,
            "item": "Rocky Helmet",
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
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Spikes",
                "Scald",
                "Poison Jab",
                "Toxic Spikes"
            ],
            "index": 594
        }
    },
    "Palkia-Origin": {
        "@ Legendario Lugia Primigenio": {
            "level": 98,
            "item": "Draco Plate",
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
                "Spacial Rend",
                "Surf",
                "Aura Sphere",
                "Earth Power"
            ],
            "index": 469
        }
    },
    "Poliwrath-&": {
        "@ Líder Gimnasio Aníbal": {
            "level": 90,
            "item": "Assault Vest",
            "nature": "Impish",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
            },
            "evs": {
                "hp": 50,
                "at": 252,
                "df": 252,
                "sa": 50,
                "sd": 50,
                "sp": 50
            },
            "moves": [
                "Drain Punch",
                "Ice Punch",
                "Bullet Punch",
                "Liquidation"
            ],
            "index": 370
        }
    },
    "Rapidash-&": {
        "@ Líder Gimnasio Pegaso": {
            "level": 82,
            "item": "Heavy-Duty Boots",
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
                "hp": 10,
                "at": 252,
                "df": 10,
                "sa": 10,
                "sd": 10,
                "sp": 252
            },
            "moves": [
                "Horn Leech",
                "High Horsepower",
                "Fly",
                "Flare Blitz"
            ],
            "index": 301
        },
        "@ Líder Gimnasio Pegaso #2": {
            "level": 100,
            "item": "Heavy-Duty Boots",
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
                "hp": 90,
                "at": 252,
                "df": 90,
                "sa": 90,
                "sd": 90,
                "sp": 252
            },
            "moves": [
                "Horn Leech",
                "Flare Blitz",
                "Fly",
                "High Horsepower"
            ],
            "index": 495
        }
    },
    "Rayquaza-Mega": {
        "@ Viajero Zeus #2": {
            "level": 86,
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
                "Dragon Ascent",
                "Draco Meteor",
                "Extreme Speed",
                "V-create"
            ],
            "index": 346
        },
        "@ Zeus": {
            "level": 97,
            "item": "White Herb",
            "nature": "Lonely",
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
                "Dragon Ascent",
                "Draco Meteor",
                "V-create",
                "Extreme Speed"
            ],
            "index": 475
        }
    },
    "Regidrago": {
        "@ Líder Gimnasio M": {
            "level": 95,
            "item": "Focus Sash",
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
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Outrage",
                "Explosion",
                "Hammer Arm",
                "Scale Shot"
            ],
            "index": 443
        }
    },
    "Regieleki": {
        "@ Campeón Teselia Mirto": {
            "level": 93,
            "item": "Light Clay",
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
                "Reflect",
                "Light Screen",
                "Volt Switch",
                "Thunderbolt"
            ],
            "index": 431
        }
    },
    "Reshiram": {
        "@ Viajero Zeus #3": {
            "level": 91,
            "item": "White Herb",
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
                "Blue Flare",
                "Earth Power",
                "Draco Meteor",
                "Extrasensory"
            ],
            "index": 402
        }
    },
    "Rey Unown": {
        "@ Rey Unown": {
            "level": 99,
            "item": "Dread Plate",
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
                "Guillotine",
                "Poison Tail"
            ],
            "index": 479
        }
    },
    "Scizor": {
        "@ Líder Gimnasio César": {
            "level": 82,
            "item": "Choice Band",
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Bullet Punch"
            ],
            "index": 316
        }
    },
    "Shiftry": {
        "@ Base Caoba": {
            "level": 80,
            "item": "Life Orb",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Leaf Blade",
                "X-Scissor",
                "Knock Off",
                "Rock Slide"
            ],
            "index": 407
        }
    },
    "Silvally": {
        "@ Viajero Zeus #2": {
            "level": 84,
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
                "Multi-Attack",
                "U-turn",
                "Flame Charge",
                "Crunch"
            ],
            "index": 341
        }
    },
    "Silvally Acero": {
        "@ Ejecutivo Rocket Protón #2": {
            "level": 88,
            "item": "Steel Memory",
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
                "Multi-Attack",
                "Flame Charge",
                "Crunch",
                "Thunder Fang"
            ],
            "index": 375
        }
    },
    "Skarmory-&": {
        "@ Líder Gimnasio Crom": {
            "level": 86,
            "item": "Leftovers",
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
                "df": 40,
                "sa": 40,
                "sd": 40,
                "sp": 40
            },
            "moves": [
                "Brave Bird",
                "Stomping Tantrum",
                "Iron Head",
                "Roost"
            ],
            "index": 358
        }
    },
    "Slowking": {
        "@ Pokemaníaco Louis": {
            "level": 77,
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
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Psychic",
                "Slack Off",
                "Scald",
                "Flamethrower"
            ],
            "index": 312
        },
        "@ Ejecutivo Rocket Protón #2": {
            "level": 85,
            "item": "King\\'s Rock",
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
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Psyshock",
                "Scald",
                "Fire Blast",
                "Ice Beam"
            ],
            "index": 373
        }
    },
    "Staraptor": {
        "@ Líder Gimnasio Pegaso": {
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Brave Bird",
                "U-turn",
                "Close Combat",
                "Double-Edge"
            ],
            "index": 296
        }
    },
    "Tangrowth": {
        "@ Base Caoba #3": {
            "level": 85,
            "item": "Assault Vest",
            "nature": "Serious",
            "ivs": {
                "hp": 31,
                "at": 31,
                "df": 31,
                "sa": 31,
                "sd": 31,
                "sp": 31
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
                "Giga Drain",
                "Ancient Power",
                "Sludge Bomb",
                "Knock Off"
            ],
            "index": 422
        }
    },
    "Terrakion": {
        "@ Líder Gimnasio Aníbal": {
            "level": 88,
            "item": "Muscle Band",
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
                "Rock Slide",
                "Iron Head",
                "Sacred Sword",
                "Zen Headbutt"
            ],
            "index": 368
        }
    },
    "Thundurus-Therian": {
        "@ Líder Gimnasio Pegaso": {
            "level": 80,
            "item": "Life Orb",
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
                "Thunderbolt",
                "Psychic",
                "Dark Pulse",
                "Air Slash"
            ],
            "index": 299
        },
        "@ Líder Gimnasio Pegaso #2": {
            "level": 98,
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
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Thunderbolt",
                "Focus Blast",
                "Grass Knot",
                "Sludge Bomb"
            ],
            "index": 491
        }
    },
    "Togekiss": {
        "@ Maestro Torre Bellsprout": {
            "level": 78,
            "item": "Leftovers",
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
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Thunder Wave",
                "Air Slash",
                "Flamethrower",
                "Aura Sphere"
            ],
            "index": 294
        },
        "@ Alto Mando Torre Dun": {
            "level": 96,
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
                "at": 20,
                "df": 252,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Air Slash",
                "Moonblast",
                "Roost",
                "Aura Sphere"
            ],
            "index": 511
        }
    },
    "Tornadus-Therian": {
        "@ Líder Gimnasio Pegaso": {
            "level": 81,
            "item": "Rocky Helmet",
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
                "hp": 6,
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Hurricane",
                "Heat Wave",
                "Roost",
                "Foul Play"
            ],
            "index": 300
        },
        "@ Líder Gimnasio Pegaso #2": {
            "level": 98,
            "item": "Heavy-Duty Boots",
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
                "hp": 0,
                "at": 0,
                "df": 6,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Hurricane",
                "Focus Blast",
                "Heat Wave",
                "Tailwind"
            ],
            "index": 492
        }
    },
    "Trxatu": {
        "@ Campeón Teselia Mirto": {
            "level": 94,
            "item": "Expert Belt",
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
                "hp": 35,
                "at": 35,
                "df": 35,
                "sa": 252,
                "sd": 35,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Shadow Ball",
                "Reflect",
                "Dazzling Gleam"
            ],
            "index": 432
        },
        "@ Guardián Alfa #5": {
            "level": 95,
            "item": "Sky Plate",
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
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Aeroblast",
                "Psychic",
                "Heat Wave",
                "Giga Drain"
            ],
            "index": 458
        },
        "@ Unown Áureo": {
            "level": 95,
            "item": "Sky Plate",
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
                "hp": 252,
                "at": 0,
                "df": 252,
                "sa": 6,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Aeroblast",
                "Psychic",
                "Mystical Fire",
                "Giga Drain"
            ],
            "index": 461
        }
    },
    "Unown-Gold": {
        "@ Unown Áureo": {
            "level": 96,
            "item": "Mind Plate",
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
                "hp": 6,
                "at": 0,
                "df": 252,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Dazzling Gleam",
                "Aura Sphere",
                "Mystical Fire"
            ],
            "index": 464
        }
    },
    "Urshifu": {
        "@ Líder Gimnasio Valeria": {
            "level": 84,
            "item": "Assault Vest",
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
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 6
            },
            "moves": [
                "Drain Punch",
                "Iron Head",
                "Ice Punch",
                "Knock Off"
            ],
            "index": 324
        }
    },
    "Urshifu-Rapid-Strike": {
        "@ Campeón Teselia Mirto": {
            "level": 92,
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
                "Crunch",
                "Drain Punch",
                "Zen Headbutt",
                "Liquidation"
            ],
            "index": 433
        }
    },
    "Vikavolt": {
        "@ Líder Gimnasio César": {
            "level": 81,
            "item": "Leftovers",
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
                "sa": 252,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Discharge",
                "Volt Switch",
                "Giga Drain",
                "Bug Buzz"
            ],
            "index": 315
        }
    },
    "Virizion": {
        "@ Campeón Teselia Mirto": {
            "level": 93,
            "item": "Focus Sash",
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
                "Giga Drain",
                "Air Slash",
                "Aura Sphere",
                "Ancient Power"
            ],
            "index": 434
        }
    },
    "Volcarona-&": {
        "@ Campeón Teselia Mirto": {
            "level": 96,
            "item": "Coba Berry",
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
                "hp": 90,
                "at": 90,
                "df": 90,
                "sa": 252,
                "sd": 90,
                "sp": 252
            },
            "moves": [
                "Fiery Dance",
                "Giga Drain",
                "Bug Buzz",
                "Ancient Power"
            ],
            "index": 436
        }
    },
    "Yveltal": {
        "@ Líder Secta Laireb #2": {
            "level": 97,
            "item": "Assault Vest",
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
                "hp": 0,
                "at": 0,
                "df": 128,
                "sa": 252,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Dark Pulse",
                "Oblivion Wing",
                "Sucker Punch",
                "Heat Wave"
            ],
            "index": 442
        }
    },
    "Zapdos-Galar": {
        "@ Líder Gimnasio Aníbal": {
            "level": 88,
            "item": "Flying Gem",
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
                "Acrobatics",
                "Roost",
                "Thunderous Kick",
                "High Horsepower"
            ],
            "index": 367
        }
    },
    "Zekrom": {
        "@ Viajero Zeus #3": {
            "level": 91,
            "item": "Wide Lens",
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
                "Iron Head",
                "Rock Slide",
                "Dragon Claw",
                "Bolt Strike"
            ],
            "index": 403
        }
    },
    "Zoroark-Hisui": {
        "@ Líder Gimnasio Jaden": {
            "level": 90,
            "item": "Focus Sash",
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
                "Sludge Bomb",
                "Night Daze",
                "Flamethrower",
                "U-turn"
            ],
            "index": 398
        }
    },
    "Akueria": {
        "@ Legendario Lago": {
            "level": 100,
            "item": "Lum Berry",
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
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Dragon Rush",
                "Aqua Tail",
                "Iron Tail",
                "Draco Meteor"
            ],
            "index": 489
        }
    },
    "Altaria": {
        "@ Alto Mando Torre Dun": {
            "level": 97,
            "item": "Altarianite",
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
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 252,
                "sd": 40,
                "sp": 252
            },
            "moves": [
                "Hyper Voice",
                "Fire Blast",
                "Roost",
                "Cotton Guard"
            ],
            "index": 512
        }
    },
    "Armaldo": {
        "@ Administrador Devon Rubí": {
            "level": 100,
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
                "df": 6,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "First Impression",
                "Stone Edge",
                "Aqua Jet",
                "Superpower"
            ],
            "index": 543
        }
    },
    "Basculegion-F": {
        "@ Alto Mando Torre Dun #3": {
            "level": 99,
            "item": "Leftovers",
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
                "hp": 128,
                "at": 40,
                "df": 40,
                "sa": 252,
                "sd": 40,
                "sp": 128
            },
            "moves": [
                "Agility",
                "Hydro Pump",
                "Ice Beam",
                "Shadow Ball"
            ],
            "index": 523
        }
    },
    "Booho": {
        "@ Alto Mando Torre Dun #4": {
            "level": 99,
            "item": "Leftovers",
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
                "at": 50,
                "df": 50,
                "sa": 252,
                "sd": 50,
                "sp": 50
            },
            "moves": [
                "Psychic",
                "Heat Wave",
                "Roost",
                "Reflect"
            ],
            "index": 528
        }
    },
    "Boohoo": {
        "@ Viajero Eusine": {
            "level": 99,
            "item": "Life Orb",
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
                "at": 80,
                "df": 252,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Psychic",
                "Hurricane",
                "Roost",
                "Heat Wave"
            ],
            "index": 502
        },
        "@ Alto Mando Torre Dun": {
            "level": 98,
            "item": "Assault Vest",
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
                "hp": 252,
                "at": 20,
                "df": 252,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Hurricane",
                "Heat Wave",
                "Dark Pulse",
                "Psychic"
            ],
            "index": 514
        },
        "@ Viajero Eusine #2": {
            "level": 105,
            "item": "Life Orb",
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
                "hp": 6,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Shadow Ball",
                "Psychic",
                "Roost",
                "Heat Wave"
            ],
            "index": 608
        }
    },
    "Braviary-Hisui": {
        "@ Alto Mando Torre Dun": {
            "level": 95,
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
                "hp": 252,
                "at": 20,
                "df": 20,
                "sa": 20,
                "sd": 20,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Hurricane",
                "Heat Wave",
                "Shadow Ball"
            ],
            "index": 510
        }
    },
    "Butterfree": {
        "@ Alto Mando Torre Dun #2": {
            "level": 99,
            "item": "Butterfrite",
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
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 252,
                "sd": 60,
                "sp": 252
            },
            "moves": [
                "Air Slash",
                "Bug Buzz",
                "Psychic",
                "Shadow Ball"
            ],
            "index": 519
        }
    },
    "Delphox-&": {
        "@ Alto Mando Torre Dun #4": {
            "level": 101,
            "item": "Colbur Berry",
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
                "hp": 252,
                "at": 20,
                "df": 252,
                "sa": 20,
                "sd": 20,
                "sp": 20
            },
            "moves": [
                "Mystical Fire",
                "Psyshock",
                "Dazzling Gleam",
                "Grass Knot"
            ],
            "index": 532
        }
    },
    "Deoxys-Skeleton": {
        "@ Cabina Seguridad #5": {
            "level": 98,
            "item": "Light Clay",
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
                "hp": 252,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Stealth Rock",
                "Spikes",
                "Reflect",
                "Psychic"
            ],
            "index": 554
        },
        "@ Team Rocket Líder Giovanni #2": {
            "level": 107,
            "item": "Terrain Extender",
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
                "df": 6,
                "sa": 0,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Taunt",
                "Stealth Rock",
                "Spikes",
                "Psyshock"
            ],
            "index": 632
        }
    },
    "Dragón Sagrado": {
        "@ Dragón Sagrado": {
            "level": 105,
            "item": "Psychic Seed",
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
                "at": 80,
                "df": 252,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Luster Purge",
                "Eternabeam",
                "Aura Sphere",
                "Ancient Power"
            ],
            "index": 503
        }
    },
    "Dun": {
        "@ Alto Mando Torre Dun #4": {
            "level": 102,
            "item": "Electric Seed",
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
                "at": 110,
                "df": 252,
                "sa": 110,
                "sd": 110,
                "sp": 110
            },
            "moves": [
                "Psyshock",
                "Dragon Pulse",
                "Roost",
                "Aura Sphere"
            ],
            "index": 533
        },
        "@ Gran Maestro Torre Dun": {
            "level": 102,
            "item": "Focus Sash",
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
                "at": 60,
                "df": 60,
                "sa": 60,
                "sd": 60,
                "sp": 252
            },
            "moves": [
                "Psychic",
                "Shadow Ball",
                "Aura Sphere",
                "Boomburst"
            ],
            "index": 534
        }
    },
    "Electrode-Hisui": {
        "@ Viajero Eusine": {
            "level": 97,
            "item": "Light Clay",
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
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Thunderbolt",
                "Reflect",
                "Light Screen",
                "Volt Switch"
            ],
            "index": 498
        },
        "@ Lt": {
            "level": 98,
            "item": "Choice Band",
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
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Explosion"
            ],
            "index": 573
        }
    },
    "Electrode-Y": {
        "@ Primer Prototipo De Nivel Ii": {
            "level": 98,
            "item": "Light Clay",
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
                "Reflect",
                "Light Screen",
                "Thunderbolt",
                "Flash Cannon"
            ],
            "index": 557
        },
        "@ Lt #2": {
            "level": 103,
            "item": "Terrain Extender",
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
                "Flash Cannon",
                "Thunderbolt",
                "Reflect",
                "Electric Terrain"
            ],
            "index": 578
        },
        "@ Viajero Eusine #2": {
            "level": 105,
            "item": "Light Clay",
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
                "hp": 0,
                "at": 0,
                "df": 6,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Reflect",
                "Light Screen",
                "Thunderbolt",
                "Flash Cannon"
            ],
            "index": 606
        }
    },
    "En": {
        "@ Gran Maestro Torre Dun": {
            "level": 103,
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
                "hp": 120,
                "at": 252,
                "df": 120,
                "sa": 120,
                "sd": 120,
                "sp": 252
            },
            "moves": [
                "Sacred Fire",
                "Iron Head",
                "Extreme Speed",
                "Crunch"
            ],
            "index": 537
        }
    },
    "Enamorus": {
        "@ Líder Gimnasio Pegaso #2": {
            "level": 99,
            "item": "Choice Scarf",
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
                "Fleur Cannon"
            ],
            "index": 494
        }
    },
    "Farigiraf": {
        "@ Viajero Eusine": {
            "level": 98,
            "item": "Leftovers",
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
                "df": 252,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Hyper Voice",
                "Psyshock",
                "Calm Mind",
                "Shadow Ball"
            ],
            "index": 501
        },
        "@ Alto Mando Torre Dun #4": {
            "level": 100,
            "item": "Leftovers",
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
                "at": 50,
                "df": 50,
                "sa": 50,
                "sd": 50,
                "sp": 252
            },
            "moves": [
                "Psyshock",
                "Thunderbolt",
                "Hyper Voice",
                "Future Sight"
            ],
            "index": 529
        }
    },
    "Feraligatr-&": {
        "@ Administrador Jefe Rocket Atlas #2": {
            "level": 104,
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
                "hp": 90,
                "at": 252,
                "df": 90,
                "sa": 90,
                "sd": 252,
                "sp": 90
            },
            "moves": [
                "Liquidation",
                "Ice Punch",
                "Crunch",
                "Zen Headbutt"
            ],
            "index": 568
        }
    },
    "Genesect": {
        "@ Primer Prototipo De Nivel Ii": {
            "level": 99,
            "item": "Burn Drive",
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
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Techno Blast",
                "Flash Cannon",
                "Thunderbolt",
                "Bug Buzz"
            ],
            "index": 558
        },
        "@ Científico Miguel #4": {
            "level": 106,
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
                "U-turn",
                "Iron Head",
                "Extreme Speed",
                "Explosion"
            ],
            "index": 626
        }
    },
    "Golem-Alola": {
        "@ Lt": {
            "level": 98,
            "item": "Focus Sash",
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
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Explosion"
            ],
            "index": 570
        },
        "@ Motorista #3": {
            "level": 98,
            "item": "Focus Sash",
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
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Earthquake",
                "Stone Edge",
                "Body Slam",
                "Stealth Rock"
            ],
            "index": 588
        }
    },
    "Goodra-Hisui": {
        "@ Gran Maestro Torre Dun": {
            "level": 101,
            "item": "Rocky Helmet",
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
                "at": 60,
                "df": 252,
                "sa": 60,
                "sd": 60,
                "sp": 60
            },
            "moves": [
                "Steel Beam",
                "Acid Armor",
                "Flamethrower",
                "Thunderbolt"
            ],
            "index": 536
        },
        "@ Científico Miguel #4": {
            "level": 106,
            "item": "Steel Gem",
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
                "hp": 128,
                "at": 0,
                "df": 128,
                "sa": 252,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Steel Beam",
                "Dragon Pulse",
                "Fire Blast",
                "Hydro Pump"
            ],
            "index": 627
        }
    },
    "Gorochu": {
        "@ Lt #2": {
            "level": 104,
            "item": "Assault Vest",
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
                "hp": 60,
                "at": 60,
                "df": 60,
                "sa": 252,
                "sd": 60,
                "sp": 252
            },
            "moves": [
                "Thunderbolt",
                "Grass Knot",
                "Focus Blast",
                "Surf"
            ],
            "index": 579
        }
    },
    "Ho-Oh": {
        "@ Administrador Jefe Rocket Atlas #2": {
            "level": 103,
            "item": "Heavy-Duty Boots",
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
                "df": 128,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Sacred Fire",
                "Fly",
                "Roost",
                "Earthquake"
            ],
            "index": 565
        }
    },
    "Kingambit": {
        "@ Alto Mando Torre Dun #2": {
            "level": 100,
            "item": "Assault Vest",
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
                "at": 90,
                "df": 252,
                "sa": 90,
                "sd": 90,
                "sp": 90
            },
            "moves": [
                "Sucker Punch",
                "Iron Head",
                "Megahorn",
                "Psycho Cut"
            ],
            "index": 521
        },
        "@ Gran Maestro Torre Dun": {
            "level": 100,
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
                "hp": 60,
                "at": 252,
                "df": 60,
                "sa": 60,
                "sd": 252,
                "sp": 60
            },
            "moves": [
                "Megahorn",
                "Sucker Punch",
                "Iron Head",
                "Knock Off"
            ],
            "index": 535
        }
    },
    "Landorus-Therian": {
        "@ Líder Gimnasio Pegaso #2": {
            "level": 98,
            "item": "Focus Sash",
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
                "Earthquake",
                "Stone Edge",
                "Knock Off",
                "Stealth Rock"
            ],
            "index": 493
        }
    },
    "Latias": {
        "@ Administrador Devon Rubí": {
            "level": 101,
            "item": "Dragon Gem",
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
                "Dragon Pulse",
                "Mist Ball",
                "Surf",
                "Thunderbolt"
            ],
            "index": 542
        }
    },
    "Latios": {
        "@ Administrador Devon Amatista": {
            "level": 97,
            "item": "Life Orb",
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
                "hp": 0,
                "at": 0,
                "df": 6,
                "sa": 252,
                "sd": 0,
                "sp": 252
            },
            "moves": [
                "Draco Meteor",
                "Psyshock",
                "Surf",
                "Recover"
            ],
            "index": 485
        }
    },
    "Madaamu": {
        "@ Alto Mando Torre Dun": {
            "level": 99,
            "item": "Flying Gem",
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
                "at": 80,
                "df": 252,
                "sa": 80,
                "sd": 80,
                "sp": 80
            },
            "moves": [
                "Leaf Blade",
                "Acrobatics",
                "First Impression",
                "Knock Off"
            ],
            "index": 515
        }
    },
    "Mewtwo Armadura": {
        "@ Proyectos De Mewtwo": {
            "level": 100,
            "item": "Leftovers",
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
                "sa": 252,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Psychic",
                "Flash Cannon",
                "Flamethrower",
                "Recover"
            ],
            "index": 562
        },
        "@ Legendario Mewtwo Armadura": {
            "level": 115,
            "item": "",
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
                "Drain Punch",
                "Psycho Cut",
                "Rock Slide",
                "Taunt"
            ],
            "index": 631
        }
    },
    "Muk-Alola": {
        "@ Motorista": {
            "level": 98,
            "item": "Dark Gem",
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Gunk Shot",
                "Drain Punch",
                "Knock Off",
                "Sucker Punch"
            ],
            "index": 582
        },
        "@ Líder Fucsia Koga": {
            "level": 101,
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
                "at": 6,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Gunk Shot",
                "Knock Off",
                "Curse",
                "Shadow Sneak"
            ],
            "index": 597
        }
    },
    "Nidogod": {
        "@ Primer Prototipo De Nivel Ii": {
            "level": 100,
            "item": "Air Balloon",
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
                "df": 6,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Gunk Shot",
                "Meteor Mash",
                "Cross Chop",
                "Fissure"
            ],
            "index": 559
        }
    },
    "Nidoqueen-Y": {
        "@ Cabina Seguridad": {
            "level": 98,
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
                "hp": 252,
                "at": 0,
                "df": 0,
                "sa": 252,
                "sd": 0,
                "sp": 6
            },
            "moves": [
                "Earth Power",
                "Sludge Wave",
                "Flamethrower",
                "Thunderbolt"
            ],
            "index": 547
        },
        "@ Team Rocket Líder Giovanni #2": {
            "level": 108,
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
                "hp": 252,
                "at": 0,
                "df": 6,
                "sa": 252,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Earth Power",
                "Sludge Wave",
                "Flamethrower",
                "Ice Beam"
            ],
            "index": 634
        }
    },
    "Persian-Alola": {
        "@ Motorista #3": {
            "level": 99,
            "item": "Assault Vest",
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
                "hp": 128,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Gunk Shot",
                "Foul Play",
                "U-turn",
                "Knock Off"
            ],
            "index": 589
        }
    },
    "PorygonZ-X": {
        "@ Coleccionista Bill #4": {
            "level": 107,
            "item": "Power Herb",
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
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Double-Edge",
                "Sky Attack",
                "Reflect",
                "Iron Tail"
            ],
            "index": 622
        }
    },
    "PorygonZ-Y": {
        "@ Coleccionista Bill #4": {
            "level": 107,
            "item": "Assault Vest",
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
                "Tri Attack",
                "Shadow Ball",
                "Parabolic Charge",
                "Aura Sphere"
            ],
            "index": 621
        }
    },
    "Purakkusu": {
        "@ Alto Mando Torre Dun #2": {
            "level": 99,
            "item": "Choice Band",
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
                "hp": 30,
                "at": 252,
                "df": 30,
                "sa": 30,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Megahorn"
            ],
            "index": 520
        },
        "@ Administrador Petrel": {
            "level": 104,
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
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Earthquake",
                "Gunk Shot",
                "Leech Life",
                "Close Combat"
            ],
            "index": 602
        }
    },
    "Rai": {
        "@ Gran Maestro Torre Dun": {
            "level": 103,
            "item": "Light Clay",
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
                "hp": 120,
                "at": 120,
                "df": 120,
                "sa": 252,
                "sd": 120,
                "sp": 252
            },
            "moves": [
                "Zap Cannon",
                "Aura Sphere",
                "Reflect",
                "Scald"
            ],
            "index": 538
        }
    },
    "Regice": {
        "@ Administrador Devon Amatista": {
            "level": 97,
            "item": "Heavy-Duty Boots",
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
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Ice Beam",
                "Thunderbolt",
                "Iron Defense",
                "Rock Polish"
            ],
            "index": 484
        }
    },
    "Regirock": {
        "@ Administrador Devon Rubí": {
            "level": 101,
            "item": "Focus Sash",
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
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Stone Edge",
                "Heavy Slam",
                "Stealth Rock",
                "Drain Punch"
            ],
            "index": 540
        }
    },
    "Registeel": {
        "@ Administrador Jefe Rocket Atlas #2": {
            "level": 102,
            "item": "Assault Vest",
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
                "hp": 252,
                "at": 252,
                "df": 0,
                "sa": 0,
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Meteor Mash",
                "Earthquake",
                "Hammer Arm",
                "Rock Slide"
            ],
            "index": 566
        }
    },
    "Rotom Lavadora": {
        "@ Científico Miguel #4": {
            "level": 105,
            "item": "Leftovers",
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
                "hp": 108,
                "at": 0,
                "df": 0,
                "sa": 184,
                "sd": 0,
                "sp": 216
            },
            "moves": [
                "Hydro Pump",
                "Volt Switch",
                "Will-O-Wisp",
                "Pain Split"
            ],
            "index": 625
        }
    },
    "Shibirefugu": {
        "@ Lt #2": {
            "level": 101,
            "item": "Terrain Extender",
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
                "Hydro Pump",
                "Volt Switch",
                "Toxic Spikes",
                "Spikes"
            ],
            "index": 574
        }
    },
    "Sui": {
        "@ Gran Maestro Torre Dun": {
            "level": 103,
            "item": "Leftovers",
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
                "at": 120,
                "df": 252,
                "sa": 120,
                "sd": 120,
                "sp": 120
            },
            "moves": [
                "Dive",
                "Ice Beam",
                "Wish",
                "Shadow Ball"
            ],
            "index": 539
        }
    },
    "Suicune-&": {
        "@ Viajero Eusine #2": {
            "level": 107,
            "item": "Leftovers",
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
                "sa": 128,
                "sd": 128,
                "sp": 0
            },
            "moves": [
                "Hyper Voice",
                "Surf",
                "Aqua Ring",
                "Reflect"
            ],
            "index": 611
        }
    },
    "Taaban": {
        "@ Alto Mando Torre Dun #3": {
            "level": 98,
            "item": "Assault Vest",
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
                "hp": 40,
                "at": 252,
                "df": 40,
                "sa": 40,
                "sd": 252,
                "sp": 40
            },
            "moves": [
                "Poltergeist",
                "Icicle Spear",
                "Rock Blast",
                "Liquidation"
            ],
            "index": 522
        },
        "@ Administrador Petrel": {
            "level": 102,
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
                "at": 6,
                "df": 0,
                "sa": 0,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Liquidation",
                "Rock Blast",
                "Icicle Spear",
                "Poltergeist"
            ],
            "index": 601
        }
    },
    "Toxtricity": {
        "@ Administrador Petrel": {
            "level": 105,
            "item": "Toxtricitite",
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
                "hp": 50,
                "at": 50,
                "df": 50,
                "sa": 252,
                "sd": 50,
                "sp": 252
            },
            "moves": [
                "Boomburst",
                "Overdrive",
                "Snarl",
                "Sludge Wave"
            ],
            "index": 604
        }
    },
    "Typhlosion-Hisui": {
        "@ Alto Mando Torre Dun #3": {
            "level": 99,
            "item": "Life Orb",
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
                "hp": 40,
                "at": 40,
                "df": 40,
                "sa": 252,
                "sd": 40,
                "sp": 252
            },
            "moves": [
                "Mind Blown",
                "Burn Up",
                "Focus Blast",
                "Shadow Ball"
            ],
            "index": 524
        }
    },
    "Ursaluna": {
        "@ Rival Andra #9": {
            "level": 101,
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
                "df": 55,
                "sa": 55,
                "sd": 128,
                "sp": 55
            },
            "moves": [
                "Earthquake",
                "Body Slam",
                "Fire Punch",
                "Drain Punch"
            ],
            "index": 507
        },
        "@ Motorista": {
            "level": 99,
            "item": "White Herb",
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
                "sd": 6,
                "sp": 0
            },
            "moves": [
                "Thrash",
                "Fissure",
                "Close Combat",
                "Stone Edge"
            ],
            "index": 583
        }
    },
    "Volcarona": {
        "@ Alto Mando Torre Dun #2": {
            "level": 98,
            "item": "Life Orb",
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
                "hp": 30,
                "at": 30,
                "df": 30,
                "sa": 252,
                "sd": 30,
                "sp": 252
            },
            "moves": [
                "Fiery Dance",
                "Bug Buzz",
                "Quiver Dance",
                "Psychic"
            ],
            "index": 518
        }
    },
    "Wartillery": {
        "@ Administrador Petrel": {
            "level": 101,
            "item": "Assault Vest",
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
                "hp": 0,
                "at": 0,
                "df": 6,
                "sa": 252,
                "sd": 252,
                "sp": 0
            },
            "moves": [
                "Octazooka",
                "Flash Cannon",
                "Energy Ball",
                "Dark Pulse"
            ],
            "index": 600
        }
    },
    "Weezing-Galar": {
        "@ Motorista #2": {
            "level": 98,
            "item": "Fairy Gem",
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
                "sd": 6,
                "sp": 252
            },
            "moves": [
                "Strange Steam",
                "Fire Blast",
                "Sludge Bomb",
                "Will-O-Wisp"
            ],
            "index": 586
        },
        "@ Administrador Petrel": {
            "level": 106,
            "item": "Gas Condenser",
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
                "hp": 100,
                "at": 100,
                "df": 100,
                "sa": 252,
                "sd": 252,
                "sp": 100
            },
            "moves": [
                "Sludge Bomb",
                "Strange Steam",
                "Fire Blast",
                "Dark Pulse"
            ],
            "index": 605
        }
    },
    "Wrongsparce": {
        "@ Científico Miguel #4": {
            "level": 108,
            "item": "Grassy Seed",
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
                "at": 100,
                "df": 100,
                "sa": 100,
                "sd": 252,
                "sp": 100
            },
            "moves": [
                "Thousand Arrows",
                "Amnesia",
                "Power Whip",
                "Roost"
            ],
            "index": 630
        }
    },
    "Wyrdeer": {
        "@ Viajero Eusine": {
            "level": 98,
            "item": "Leftovers",
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
                "Double-Edge",
                "Jump Kick",
                "Megahorn",
                "Sucker Punch"
            ],
            "index": 500
        },
        "@ Alto Mando Torre Dun #4": {
            "level": 100,
            "item": "Assault Vest",
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
                "hp": 50,
                "at": 50,
                "df": 50,
                "sa": 252,
                "sd": 50,
                "sp": 252
            },
            "moves": [
                "Body Slam",
                "Jump Kick",
                "Megahorn",
                "Psycho Cut"
            ],
            "index": 530
        }
    },
    "Zapdos-Primal": {
        "@ Ave Sagrada": {
            "level": 100,
            "item": "Electric Seed",
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
                "hp": 0,
                "at": 0,
                "df": 0,
                "sa": 0,
                "sd": 0,
                "sp": 0
            },
            "moves": [
                "Discharge",
                "Fiery Wrath",
                "Heat Wave",
                "Roost"
            ],
            "index": 496
        },
        "@ Legendario Zapdos Primigenio": {
            "level": 108,
            "item": "Electric Seed",
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
                "Discharge",
                "Fiery Wrath",
                "Heat Wave",
                "Roost"
            ],
            "index": 569
        }
    }
};