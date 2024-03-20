/*	-INFORMATION-
	Subject:	Spell, Companion Template Option, Creature, Weapon, & Feats
	Effect:		This script adds the UA version of the Find Familiar Spell, the associated Otherworldly Familiar creature, and the Epic Boon Feats from the 2023 Unearthed Arcana "Druid & Paladin" article.
				This file has been made by MasterJedi2014.
	Code by:	MasterJedi2014, using MorePurpleMoreBetter's code as reference
	Date:		2024-02-26 (sheet v13.1.0)
*/

var iFileName = "UA2023DP Content [by MasterJedi2014] V1.js";
RequiredSheetVersion("13.1.0");

SourceList["MJ:HB"] = {
	name : "MasterJedi2014's Homebrew",
	abbreviation : "MJ:HB",
	date : "2024/02/26",
};

SourceList["UA23DP"] = {
	name : "Unearthed Arcana 2023: Druid & Paladin",
	abbreviation : "UA23DP",
	date : "2023/02/23",
	url : "https://media.dndbeyond.com/compendium-images/one-dnd/druid-paladin/PXoa3UgywnZbwc9U/UA-2023-DruidandPaladin.pdf",
};

// Add "Find Familiar (UA23DP)" spell
SpellsList["find familiar ua23dp"] = {
	name : "Find Familiar (UA23DP)",
	source : [["UA23DP", 18], ["MJ:HB", 0]],
	classes : ["wizard", "wizard_ua23pt7"],
	level : 1,
	school : "Conj",
	time : "1 h",
	range : "10 ft",
	rangeMetric : "3 m",
	components : "V,S,M\u2020",
	compMaterial : "10 GP worth of charcoal, incense, and herbs that must be consumed by fire in a brass brazier",
	duration : "Instantaneous",
	description : "Gain a familiar; can see through its eyes; it can deliver touch spells; can be upcast; see B (10gp cons.)",
	descriptionFull : "You gain the service of an otherworldly spirit, which manifests as a little animal in an unoccupied space of your choice within range. This creature uses the Otherworldly Familiar stat block. If you already have a familiar from this spell, that familiar transforms into the new one but retains its memories; you don’t get a second familiar." + "\n   " + "Whenever you cast the spell, choose the familiar’s creature type: Celestial, Fey, or Fiend. Also choose an environment: Air, Land, or Water. The familiar resembles a Tiny animal of your choice—such as an owl, a cat, or a frog—that is native to the chosen environment. Both choices—creature type and environment—determine certain traits in the stat block." + "\n   " + "Combat. The familiar is an ally to you and your companions. In combat, it shares your initiative count, but it takes its turn immediately after yours. It obeys your commands (no action required by you), but the familiar can’t attack unless you use your Reaction on its turn to command it do so. If you don’t issue any commands, the familiar takes the Dodge action and uses its Move to avoid danger." + "\n   " + "Disappearance of the Familiar. The familiar disappears if it drops to 0 Hit Points, if you dismiss it as a Bonus Action, or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the familiar that disappeared or a different one." + "\n   " + "Remote Viewing. As a Magic action, you can see what your familiar sees and hear what it hears until the end of your next turn." + "\n   " + "At Higher Levels. When you cast this spell using a Spell Slot of 2nd level or higher, use the higher level wherever the spell’s level appears in the stat block.",
	ritual : true,
};

// Add UA23DP Familiar companion template
CompanionList.familiar_ua23dp = {
	name : "Find Familiar (UA23DP)",
	nameMenu : "Familiar (Find Familiar UA23DP spell)",
	nameTooltop : "from the Find Familiar (UA23DP) Spell",
	nameOrigin : "1st-Level conjuration [ritual] spell",
	source : [["UA23DP", 18], ["MJ:HB", 0]],
	action : [["reaction", " (Attack command)"]],
	includeCheck : function(sCrea, objCrea, iCreaCR) {
		return /^(otherworldly)$/i.test(sCrea);
	},
	notes : [{
		name : "Spell Description",
		description : "You gain the service of an otherworldly spirit, which manifests as a little animal in an unoccupied space of your choice within range. This creature uses the Otherworldly Familiar stat block. If you already have a familiar from this spell, that familiar transforms into the new one but retains its memories; you don’t get a second familiar." + "\n   " + "Whenever you cast the spell, choose the familiar’s creature type: Celestial, Fey, or Fiend. Also choose an environment: Air, Land, or Water. The familiar resembles a Tiny animal of your choice—such as an owl, a cat, or a frog—that is native to the chosen environment. Both choices—creature type and environment—determine certain traits in the stat block.",
		joinString : "\n   "
	}, {
		name : "Variable Speed",
		description : "The Otherworldly Familiar's Speed changes based on whether it is a Land, Air, or Water Familiar:\n      Land Familiars gain a 30 ft (9m) Climb Speed; Air Familiars gain a 30 ft (9m) Fly Speed; Water Familiars gain a 30 ft (9m) Swim Speed.",
		joinString : "\n   "
	}, {
		name : "Combat",
		description : "The familiar is an ally to you and your companions. In combat, it shares your initiative count, but it takes its turn immediately after yours. It obeys your commands (no action required by you), but the familiar can’t attack unless you use your Reaction on its turn to command it do so. If you don’t issue any commands, the familiar takes the Dodge action and uses its Move to avoid danger.",
		joinString : "\n   "
	}, {
		name : "Disappearance of the Familiar",
		description : "The familiar disappears if it drops to 0 Hit Points, if you dismiss it as a Bonus Action, or if you die. When it disappears, it leaves behind anything it was wearing or carrying. If you cast this spell again, you decide whether you summon the familiar that disappeared or a different one.",
		joinString : "\n   "
	}, {
		name : "Remote Viewing",
		description : "As a Magic action, you can see what your familiar sees and hear what it hears until the end of your next turn.",
		joinString : "\n   "
	}, {
		name : "At Higher Levels",
		description : "When you cast this spell using a Spell Slot of 2nd level or higher, use the higher level wherever the spell’s level appears in the stat block." + "\n   " + "The familiar's HP, AC, & Damage change depending on the level the Find Familiar (UA23DP) spell was cast at:" + "\n      " + "- HP total equals 2 + 2 per spell level; the Otherworldly Familiar has a number of Hit DIce equal to the spell's level;" + "\n      " + "- AC total equals 10 + 2 (Land only) + 1 per spell level (natural armor);" + "\n   " + "   - Damage equals 1 + the spellls level of Radiant (Celestial), Psychic (Fey), or Necrotic (Fiend) damage.",
		joinString : "\n   "
	}],
};

// Add UA23DP Otherworlder Familiar creatures, one for each spell level
CreatureList["otherworldly familiar ua23dp lvl 1"] = {
	name : "1st-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 11,
	hp : 4,
	hd : [1, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [2, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 2"] = {
	name : "2nd-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 12,
	hp : 6,
	hd : [2, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [3, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 3"] = {
	name : "3rd-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 13,
	hp : 8,
	hd : [3, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [4, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 4"] = {
	name : "4th-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 14,
	hp : 10,
	hd : [4, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [5, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 5"] = {
	name : "5th-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 15,
	hp : 12,
	hd : [5, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [6, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 6"] = {
	name : "6th-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 16,
	hp : 14,
	hd : [6, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [7, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 7"] = {
	name : "7th-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 17,
	hp : 16,
	hd : [7, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [8, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 8"] = {
	name : "8th-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 18,
	hp : 18,
	hd : [8, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [9, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

CreatureList["otherworldly familiar ua23dp lvl 9"] = {
	name : "9th-Lvl Otherworldly Familiar (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*familiar).*$/i,
	size : 5,
	type : ["Celestial", "Fey", "Fiend"],
	companion : ["familiar", "familiar_not_al", "familiar_ua23dp"],
	companionApply : "familiar",
	alignment : "Neutral",
	ac : 19,
	hp : 20,
	hd : [9, 4],
	speed : "30 ft (9m)",
	proficiencyBonus : 2,
	proficiencyBonusLinked : true,
	challengeRating : "0",
	scores : [3, 14, 10, 10, 14, 8],
	senses : "Darkvision 60 ft (18m)",
	attacksAction : 1,
	attacks : [{
		name : "Otherworldly Scratch (UA23DP)",
		ability : 4,
		damage : [10, "", "Rad/Psy/Nec"],
		range : "Melee (5 ft)",
		description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
		abilitytodamage : false,
		useSpellMod : "wizard",
	}],
	languages : "Telepathy 120 ft (36m) (only between you and the familiar)",
	features : [{
		name : "Extradimensional Escape (Once per Long Rest)",
		description : "When the familiar would drop to 0 Hit Points, it instead drops to 1 Hit Point and vanishes into an extradimensional space, leaving behind anything it was wearing or carrying. It remains there for 1 hour or until you summon it as a Magic action, and then it reappears in your space.",
		joinString : "\n   ",
	}],
	actions : [{
		name : "Deliver Spell",
		description : "As a reaction, the familiar delivers a spell cast by you that has a range of touch. The familiar must be within 120 ft (36m) of you to do so.",
		joinString : "\n   ",
	}],
	traits : [{
		name : "Amphibious (Water Only)",
		description : "The familiar can breathe air and water.",
		joinString : "\n   ",
	}],
	header : "Familiar",
};

// Add UA23DP Otherworldly Scratch weapon
WeaponsList["otherworldly scratch (ua23dp)"] = {
	name : "Otherworldly Scratch (UA23DP)",
	source : [["UA23DP", 19], ["MJ:HB", 0]],
	regExpSearch : /^(?=.*otherworldly)(?=.*scratch).*$/i,
	type : "Natural",
	ability : 4,
	abilitytodamage : false,
	damage : [2, "", "Rad/Psy/Nec"],
	range : "Melee (5 ft)",
	description : "One Otherworldly Scratch as an Attack action; Damage depends on Creature Type; Uses your Reaction",
	list : "melee",
	useSpellMod : "wizard",
};

// Add "Druid & Paladin" Epic Boons
FeatsList["epic boon of fate ua23dp"] = {
	name : "Epic Boon of Fate (UA23DP)",
	source : [["UA23DP", 14], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Mage or Priest Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.cleric || classes.known.cleric_ua23pt6 || classes.known.druid || classes.known.druid_ua23pt8 || classes.known.paladin || classes.known.paladin_ua23pt6 || classes.known.sorcerer || classes.known.sorcerer_ua23pt7 || classes.known.warlock || classes.known.warlock_ua23pt7 || classes.known.wizard || classes.known.wizard_ua23pt7);
	},
	descriptionFull : " \u2022 Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a max of 30.\n \u2022 Improve Fate. When another creature within 60 feet of you fails a d20 Test, you can roll 2d4 and apply the total rolled as a bonus or penalty to the d20 roll. You can use this benefit no more than once per turn. You have 8 uses of this benefit, and whenever you finish a Long Rest, you regain 2d4 expended uses.",
	description : "My Intelligence, Wisdom, or Charisma increases by 1, to a max of 30. When another creature within 60 feet of me fails a d20 Test, I can roll 2d4 and apply the total rolled as a bonus or penalty to the d20 roll. I can use this benefit no more than once per turn. I have 8 uses of this benefit, and whenever I finish a Long Rest, I regain 2d4 expended uses.",
	choices : ['Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"intelligence +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
	},
};

FeatsList["epic boon of spell recall ua23dp"] = {
	name : "Epic Boon of Spell Recall (UA23DP)",
	source : [["UA23DP", 14], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Mage or Priest Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.cleric || classes.known.cleric_ua23pt6 || classes.known.druid || classes.known.druid_ua23pt8 || classes.known.paladin || classes.known.paladin_ua23pt6 || classes.known.sorcerer || classes.known.sorcerer_ua23pt7 || classes.known.warlock || classes.known.warlock_ua23pt7 || classes.known.wizard || classes.known.wizard_ua23pt7);
	},
	descriptionFull : " \u2022 Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a max of 30.\n \u2022 Free Casting. Whenever you cast a spell with a Spell Slot of 1st, 2nd, 3rd, or 4th level, roll a d4. If the number you roll equals the slot’s level, the slot isn’t expended.",
	description : "My Intelligence, Wisdom, or Charisma increases by 1, to a max of 30. Whenever I cast a spell with a Spell Slot of 1st, 2nd, 3rd, or 4th level, roll a d4. If the number I roll equals the slot’s level, the slot isn’t expended.",
	choices : ['Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"intelligence +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
	},
};

FeatsList["epic boon of truesight ua23dp"] = {
	name : "Epic Boon of Truesight (UA23DP)",
	source : [["UA23DP", 15], ["MJ:HB", 0]],
	allowDuplicates : false,
	prerequisite : "Character Level 20+; Priest Group",
	prereqeval : function(v) {
		return v.characterLevel >=20 && (classes.known.cleric || classes.known.cleric_ua23pt6 || classes.known.druid || classes.known.druid_ua23pt8 || classes.known.paladin || classes.known.paladin_ua23pt6);
	},
	vision : [
		["Truesight", 60],
	],
	descriptionFull : " \u2022 Ability Score Increase. Increase your Intelligence, Wisdom, or Charisma score by 1, to a max of 30.\n \u2022 Truesight. You have Truesight within a range of 60 ft (18m).",
	description : "My Intelligence, Wisdom, or Charisma increases by 1, to a max of 30. I gain Truesight within a range of 60 ft (18m).",
	choices : ['Intelligence +1', 'Wisdom +1', 'Charisma +1'],
	"intelligence +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 1, 0, 0],
		scorestxt : "+1 Intelligence",
	},
	"wisdom +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 0, 1, 0],
		scorestxt : "+1 Wisdom",
	},
	"charisma +1" : {
		scoresMaximum : [0, 0, 0, 30, 30, 30],
		scores : [0, 0, 0, 0, 0, 1],
		scorestxt : "+1 Charisma",
	},
};