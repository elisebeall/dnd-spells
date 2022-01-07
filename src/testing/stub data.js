const dataStub = {
  spellList: [
    {
      "index": "augury",
      "name": "Augury",
      "url": "/api/spells/augury"
    },
    {
      "index": "branding-smite",
      "name": "Branding Smite",
      "url": "/api/spells/branding-smite"
    },
    {
      "index": "detect-evil-and-good",
      "name": "Detect Evil and Good",
      "url": "/api/spells/detect-evil-and-good"
    },
    {
      "index": "detect-magic",
      "name": "Detect Magic",
      "url": "/api/spells/detect-magic"
    },
    {
      "index": "dimension-door",
      "name": "Dimension Door",
      "url": "/api/spells/dimension-door"
    },
    {
      "index": "flame-blade",
      "name": "Flame Blade",
      "url": "/api/spells/flame-blade"
    },
    {
      "index": "guidance",
      "name": "Guidance",
      "url": "/api/spells/guidance"
    },
    {
      "index": "mending",
      "name": "Mending",
      "url": "/api/spells/mending"
    },
    {
      "index": "silence",
      "name": "Silence",
      "url": "/api/spells/silence"
    },
    {
      "index": "teleport",
      "name": "Teleport",
      "url": "/api/spells/teleport"
    }
  ],

  spellDetails: [
    {
      "index": "augury",
      "name": "Augury",
      "desc": [
      "By casting gem-inlaid sticks, rolling dragon bones, laying out ornate cards, or employing some other divining tool, you receive an omen from an otherworldly entity about the results of a specific course of action that you plan to take within the next 30 minutes. The DM chooses from the following possible omens:",
      "- Weal, for good results",
      "- Woe, for bad results",
      "- Weal and woe, for both good and bad results",
      "- Nothing, for results that aren't especially good or bad",
      "The spell doesn't take into account any possible circumstances that might change the outcome, such as the casting of additional spells or the loss or gain of a companion.",
      "If you cast the spell two or more times before completing your next long rest, there is a cumulative 25 percent chance for each casting after the first that you get a random reading. The DM makes this roll in secret."
      ],
      "range": "Self",
      "components": [
      "V",
      "S",
      "M"
      ],
      "material": "Specially marked sticks, bones, or similar tokens worth at least 25gp.",
      "ritual": true,
      "duration": "Instantaneous",
      "concentration": false,
      "casting_time": "1 minute",
      "level": 2,
      "school": {
      "index": "divination",
      "name": "Divination",
      "url": "/api/magic-schools/divination"
      },
      "classes": [
      {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
      }
      ],
      "subclasses": [
      {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
      }
      ],
      "url": "/api/spells/augury"
    },
    {
      "index": "branding-smite",
      "name": "Branding Smite",
      "desc": [
      "The next time you hit a creature with a weapon attack before this spell ends, the weapon gleams with astral radiance as you strike. The attack deals an extra 2d6 radiant damage to the target, which becomes visible if it's invisible, and the target sheds dim light in a 5-foot radius and can't become invisible until the spell ends."
      ],
      "higher_level": [
      "When you cast this spell using a spell slot of 3rd level or higher, the extra damage increases by 1d6 for each slot level above 2nd."
      ],
      "range": "Self",
      "components": [
      "V"
      ],
      "ritual": false,
      "duration": "Up to 1 minute",
      "concentration": true,
      "casting_time": "1 bonus action",
      "level": 2,
      "damage": {
      "damage_type": {
      "index": "radiant",
      "name": "Radiant",
      "url": "/api/damage-types/radiant"
      },
      "damage_at_slot_level": {
      "2": "2d6",
      "3": "3d6",
      "4": "4d6",
      "5": "5d6",
      "6": "6d6",
      "7": "7d6",
      "8": "8d6",
      "9": "9d6"
      }
      },
      "school": {
      "index": "evocation",
      "name": "Evocation",
      "url": "/api/magic-schools/evocation"
      },
      "classes": [
      {
      "index": "paladin",
      "name": "Paladin",
      "url": "/api/classes/paladin"
      }
      ],
      "subclasses": [],
      "url": "/api/spells/branding-smite"
    },
    {
      "index": "detect-evil-and-good",
      "name": "Detect Evil and Good",
      "desc": [
      "For the duration, you know if there is an aberration, celestial, elemental, fey, fiend, or undead within 30 feet of you, as well as where the creature is located. Similarly, you know if there is a place or object within 30 feet of you that has been magically consecrated or desecrated.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
      ],
      "range": "Self",
      "components": [
      "V",
      "S"
      ],
      "ritual": false,
      "duration": "Up to 10 minutes",
      "concentration": true,
      "casting_time": "1 action",
      "level": 1,
      "area_of_effect": {
      "type": "sphere",
      "size": 30
      },
      "school": {
      "index": "divination",
      "name": "Divination",
      "url": "/api/magic-schools/divination"
      },
      "classes": [
      {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
      },
      {
      "index": "paladin",
      "name": "Paladin",
      "url": "/api/classes/paladin"
      }
      ],
      "subclasses": [
      {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
      }
      ],
      "url": "/api/spells/detect-evil-and-good"
    },
    {
      "index": "detect-magic",
      "name": "Detect Magic",
      "desc": [
      "For the duration, you sense the presence of magic within 30 feet of you. If you sense magic in this way, you can use your action to see a faint aura around any visible creature or object in the area that bears magic, and you learn its school of magic, if any.",
      "The spell can penetrate most barriers, but it is blocked by 1 foot of stone, 1 inch of common metal, a thin sheet of lead, or 3 feet of wood or dirt."
      ],
      "range": "Self",
      "components": [
      "V",
      "S"
      ],
      "ritual": true,
      "duration": "Up to 10 minutes",
      "concentration": true,
      "casting_time": "1 action",
      "level": 1,
      "area_of_effect": {
      "type": "sphere",
      "size": 30
      },
      "school": {
      "index": "divination",
      "name": "Divination",
      "url": "/api/magic-schools/divination"
      },
      "classes": [
      {
      "index": "bard",
      "name": "Bard",
      "url": "/api/classes/bard"
      },
      {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
      },
      {
      "index": "druid",
      "name": "Druid",
      "url": "/api/classes/druid"
      },
      {
      "index": "paladin",
      "name": "Paladin",
      "url": "/api/classes/paladin"
      },
      {
      "index": "ranger",
      "name": "Ranger",
      "url": "/api/classes/ranger"
      },
      {
      "index": "sorcerer",
      "name": "Sorcerer",
      "url": "/api/classes/sorcerer"
      },
      {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/classes/wizard"
      }
      ],
      "subclasses": [
      {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
      }
      ],
      "url": "/api/spells/detect-magic"
    },
    {
      "index": "dimension-door",
      "name": "Dimension Door",
      "desc": [
      "You teleport yourself from your current location to any other spot within range. You arrive at exactly the spot desired. It can be a place you can see, one you can visualize, or one you can describe by stating distance and direction, such as \"200 feet straight downward\" or \"upward to the northwest at a 45-degree angle, 300 feet.\"",
      "You can bring along objects as long as their weight doesn't exceed what you can carry. You can also bring one willing creature of your size or smaller who is carrying gear up to its carrying capacity. The creature must be within 5 feet of you when you cast this spell.",
      "If you would arrive in a place already occupied by an object or a creature, you and any creature traveling with you each take 4d6 force damage, and the spell fails to teleport you."
      ],
      "range": "500 feet",
      "components": [
      "V"
      ],
      "ritual": false,
      "duration": "Instantaneous",
      "concentration": false,
      "casting_time": "1 action",
      "level": 4,
      "damage": {
      "damage_type": {
      "index": "force",
      "name": "Force",
      "url": "/api/damage-types/force"
      },
      "damage_at_slot_level": {
      "4": "4d6"
      }
      },
      "school": {
      "index": "conjuration",
      "name": "Conjuration",
      "url": "/api/magic-schools/conjuration"
      },
      "classes": [
      {
      "index": "bard",
      "name": "Bard",
      "url": "/api/classes/bard"
      },
      {
      "index": "sorcerer",
      "name": "Sorcerer",
      "url": "/api/classes/sorcerer"
      },
      {
      "index": "warlock",
      "name": "Warlock",
      "url": "/api/classes/warlock"
      },
      {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/classes/wizard"
      }
      ],
      "subclasses": [],
      "url": "/api/spells/dimension-door"
    },
    {
      "index": "flame-blade",
      "name": "Flame Blade",
      "desc": [
      "You evoke a fiery blade in your free hand. The blade is similar in size and shape to a scimitar, and it lasts for the duration. If you let go of the blade, it disappears, but you can evoke the blade again as a bonus action.",
      "You can use your action to make a melee spell attack with the fiery blade. On a hit, the target takes 3d6 fire damage.",
      "The flaming blade sheds bright light in a 10-foot radius and dim light for an additional 10 feet."
      ],
      "higher_level": [
      "When you cast this spell using a spell slot of 4th level or higher, the damage increases by 1d6 for every two slot levels above 2nd."
      ],
      "range": "Self",
      "components": [
      "V",
      "S",
      "M"
      ],
      "material": "Leaf of sumac.",
      "ritual": false,
      "duration": "Up to 10 minutes",
      "concentration": true,
      "casting_time": "1 bonus action",
      "level": 2,
      "damage": {
      "damage_type": {
      "index": "fire",
      "name": "Fire",
      "url": "/api/damage-types/fire"
      },
      "damage_at_slot_level": {
      "2": "3d6",
      "4": "4d6",
      "6": "5d6",
      "8": "6d6"
      }
      },
      "school": {
      "index": "evocation",
      "name": "Evocation",
      "url": "/api/magic-schools/evocation"
      },
      "classes": [
      {
      "index": "druid",
      "name": "Druid",
      "url": "/api/classes/druid"
      }
      ],
      "subclasses": [
      {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
      }
      ],
      "url": "/api/spells/flame-blade"
    },
    {
      "index": "guidance",
      "name": "Guidance",
      "desc": [
      "You touch one willing creature. Once before the spell ends, the target can roll a d4 and add the number rolled to one ability check of its choice. It can roll the die before or after making the ability check. The spell then ends."
      ],
      "range": "Touch",
      "components": [
      "V",
      "S"
      ],
      "ritual": false,
      "duration": "Up to 1 minute",
      "concentration": true,
      "casting_time": "1 action",
      "level": 0,
      "school": {
      "index": "divination",
      "name": "Divination",
      "url": "/api/magic-schools/divination"
      },
      "classes": [
      {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
      },
      {
      "index": "druid",
      "name": "Druid",
      "url": "/api/classes/druid"
      }
      ],
      "subclasses": [
      {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
      }
      ],
      "url": "/api/spells/guidance"
    },
    {
      "index": "mending",
      "name": "Mending",
      "desc": [
      "This spell repairs a single break or tear in an object you touch, such as a broken key, a torn cloak, or a leaking wineskin. As long as the break or tear is no longer than 1 foot in any dimension, you mend it, leaving no trace of the former damage.",
      "This spell can physically repair a magic item or construct, but the spell can't restore magic to such an object."
      ],
      "range": "Touch",
      "components": [
      "V",
      "S",
      "M"
      ],
      "material": "Two lodestones.",
      "ritual": false,
      "duration": "Instantaneous",
      "concentration": false,
      "casting_time": "1 minute",
      "level": 0,
      "school": {
      "index": "transmutation",
      "name": "Transmutation",
      "url": "/api/magic-schools/transmutation"
      },
      "classes": [
      {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
      },
      {
      "index": "bard",
      "name": "Bard",
      "url": "/api/classes/bard"
      },
      {
      "index": "druid",
      "name": "Druid",
      "url": "/api/classes/druid"
      },
      {
      "index": "sorcerer",
      "name": "Sorcerer",
      "url": "/api/classes/sorcerer"
      },
      {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/classes/wizard"
      }
      ],
      "subclasses": [
      {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
      }
      ],
      "url": "/api/spells/mending"
    },
    {
      "index": "silence",
      "name": "Silence",
      "desc": [
      "For the duration, no sound can be created within or pass through a 20-foot-radius sphere centered on a point you choose within range. Any creature or object entirely inside the sphere is immune to thunder damage, and creatures are deafened while entirely inside it.",
      "Casting a spell that includes a verbal component is impossible there."
      ],
      "range": "120 feet",
      "components": [
      "V",
      "S"
      ],
      "ritual": true,
      "duration": "Up to 10 minutes",
      "concentration": true,
      "casting_time": "1 action",
      "level": 2,
      "area_of_effect": {
      "type": "sphere",
      "size": 20
      },
      "school": {
      "index": "illusion",
      "name": "Illusion",
      "url": "/api/magic-schools/illusion"
      },
      "classes": [
      {
      "index": "bard",
      "name": "Bard",
      "url": "/api/classes/bard"
      },
      {
      "index": "cleric",
      "name": "Cleric",
      "url": "/api/classes/cleric"
      },
      {
      "index": "ranger",
      "name": "Ranger",
      "url": "/api/classes/ranger"
      }
      ],
      "subclasses": [
      {
      "index": "lore",
      "name": "Lore",
      "url": "/api/subclasses/lore"
      },
      {
      "index": "land",
      "name": "Land",
      "url": "/api/subclasses/land"
      }
      ],
      "url": "/api/spells/silence"
    },
    {
      "index": "teleport",
      "name": "Teleport",
      "desc": [
      "This spell instantly transports you and up to eight willing creatures of your choice that you can see within range, or a single object that you can see within range, to a destination you select. If you target an object, it must be able to fit entirely inside a 10-foot cube, and it can't be held or carried by an unwilling creature.",
      "The destination you choose must be known to you, and it must be on the same plane of existence as you. Your familiarity with the destination determines whether you arrive there successfully. The DM rolls d100 and consults the table.",
      "| Familiarity | Mishap | Similar Area | Off Target | On Target |",
      "|---|---|---|---|---|",
      "| Permanent circle | -- | -- | -- | 01-100 |",
      "| Associated object | -- | -- | -- | 01-100 |",
      "| Very familiar | 01-05 | 06-13 | 14-24 | 25-100 |",
      "| Seen casually | 01-33 | 34-43 | 44-53 | 54-100 |",
      "| Viewed once | 01-43 | 44-53 | 54-73 | 74-100 |",
      "| Description | 01-43 | 44-53 | 54-73 | 74-100 |",
      "| False destination | 01-50 | 51-100 | -- | -- |",
      "***Familiarity.*** \"Permanent circle\" means a permanent teleportation circle whose sigil sequence you know.",
      "\"Associated object\" means that you possess an object taken from the desired destination within the last six months, such as a book from a wizard's library, bed linen from a royal suite, or a chunk of marble from a lich's secret tomb.",
      "\"Very familiar\" is a place you have been very often, a place you have carefully studied, or a place you can see when you cast the spell.",
      "\"Seen casually\" is someplace you have seen more than once but with which you aren't very familiar.",
      "\"Viewed once\" is a place you have seen once, possibly using magic.",
      "\"Description\" is a place whose location and appearance you know through someone else's description, perhaps from a map.",
      "\"False destination\" is a place that doesn't exist. Perhaps you tried to scry an enemy's sanctum but instead viewed an illusion, or you are attempting to teleport to a familiar location that no longer exists.",
      "***On Target.*** You and your group (or the target object) appear where you want to.",
      "***Off Target.*** You and your group (or the target object) appear a random distance away from the destination in a random direction. Distance off target is 1d10 x 1d10 percent of the distance that was to be traveled. For example, if you tried to travel 120 miles, landed off target, and rolled a 5 and 3 on the two d10s, then you would be off target by 15 percent, or 18 miles. The GM determines the direction off target randomly by rolling a d8 and designating 1 as north, 2 as northeast, 3 as east, and so on around the points of the compass.  If you were teleporting to a coastal city and wound up 18 miles out at sea, you could be in trouble.",
      "***Similar Area.*** You and your group (or the target object) wind up in a different area that's visually or thematically similar to the target area. If you are heading for your home laboratory, for example, you might wind up in another wizard's laboratory or in an alchemical supply shop that has many of the same tools and implements as your laboratory. Generally, you appear in the closest similar place, but since the spell has no range limit, you could conceivably wind up anywhere on the plane.",
      "***Mishap.*** The spell's unpredictable magic results in a difficult journey. Each teleporting creature (or the target object) takes 3d10 force damage, and the GM rerolls on the table to see where you wind up (multiple mishaps can occur, dealing damage each time)."
      ],
      "range": "10 feet",
      "components": [
      "V"
      ],
      "ritual": false,
      "duration": "Instantaneous",
      "concentration": false,
      "casting_time": "1 action",
      "level": 7,
      "area_of_effect": {
      "type": "cube",
      "size": 10
      },
      "school": {
      "index": "conjuration",
      "name": "Conjuration",
      "url": "/api/magic-schools/conjuration"
      },
      "classes": [
      {
      "index": "bard",
      "name": "Bard",
      "url": "/api/classes/bard"
      },
      {
      "index": "sorcerer",
      "name": "Sorcerer",
      "url": "/api/classes/sorcerer"
      },
      {
      "index": "wizard",
      "name": "Wizard",
      "url": "/api/classes/wizard"
      }
      ],
      "subclasses": [],
      "url": "/api/spells/teleport"
    }
  ]
}

export default dataStub;