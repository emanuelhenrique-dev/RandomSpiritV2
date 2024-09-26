const spiritList = [
  {
    id: '0',
    name: 'WANDERING NOBLE ASHES',
    img: './assets/wandering_noble_ashes.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Wandering+Noble+Ashes',
    Dlc: false
  },
  {
    id: '1',
    name: 'NOBLE SORCERER ASHES',
    img: './assets/NOBLE_SORCERER_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Noble+Sorcerer+Ashes',
    Dlc: false
  },
  {
    id: '2',
    name: 'NOMAD ASHES',
    img: './assets/NOMAD_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Nomad+Ashes',
    Dlc: false
  },
  {
    id: '3',
    name: 'PUTRID CORPSE ASHES',
    img: './assets/PUTRID_CORPSE_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Putrid+Corpse+Ashes',
    Dlc: false
  },
  {
    id: '4',
    name: 'SKELETAL MILITIAMAN ASHES',
    img: './assets/SKELETAL_MILITIAMAN_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Skeletal+Militiaman+Ashes',
    Dlc: false
  },
  {
    id: '5',
    name: 'SKELETAL BANDIT ASHES',
    img: './assets/SKELETAL_BANDIT_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Skeletal+Bandit+Ashes',
    Dlc: false
  },
  {
    id: '6',
    name: 'ALBINAURIC ASHES',
    img: './assets/ALBINAURIC_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Albinauric+Ashes',
    Dlc: false
  },
  {
    id: '7',
    name: 'WINGED MISBEGOTTEN ASHES',
    img: './assets/WINGED_MISBEGOTTEN_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Winged+Misbegotten+Ashes',
    Dlc: false
  },
  {
    id: '8',
    name: 'DEMI-HUMAN ASHES',
    img: './assets/DEMI-HUMAN_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Demi-Human+Ashes',
    Dlc: false
  },
  {
    id: '9',
    name: 'CLAYMAN ASHES',
    img: './assets/CLAYMAN_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Clayman+Ashes',
    Dlc: false
  },
  {
    id: '10',
    name: 'ORACLE ENVOY ASHES',
    img: './assets/ORACLE_ENVOY_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Oracle+Envoy+Ashes',
    Dlc: false
  },
  {
    id: '11',
    name: 'LONE WOLF ASHES',
    img: './assets/LONE_WOLF_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Lone+Wolf+Ashes',
    Dlc: false
  },
  {
    id: '12',
    name: 'ROTTEN STRAY ASHES',
    img: './assets/ROTTEN_STRAY_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Rotten+Stray+Ashes',
    Dlc: false
  },
  {
    id: '13',
    name: 'GIANT RAT ASHES',
    img: './assets/GIANT_RAT_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Giant+Rat+Ashes',
    Dlc: false
  },
  {
    id: '14',
    name: 'WARHAWK ASHES',
    img: './assets/WARHAWK_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Warhawk+Ashes',
    Dlc: false
  },
  {
    id: '15',
    name: 'LAND SQUIRT ASHES',
    img: './assets/LAND_SQUIRT_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Land+Squirt+Ashes',
    Dlc: false
  },
  {
    id: '16',
    name: 'SPIRIT JELLYFISH ASHES',
    img: './assets/SPIRIT_JELLYFISH_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Spirit+Jellyfish+Ashes',
    Dlc: false
  },
  {
    id: '17',
    name: 'MIRANDA SPROUT ASHES',
    img: './assets/MIRANDA_SPROUT_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Miranda+Sprout+Ashes',
    Dlc: false
  },
  {
    id: '18',
    name: 'FANGED IMP ASHES',
    img: './assets/FANGED_IMP_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Fanged+Imp+Ashes',
    Dlc: false
  },
  {
    id: '19',
    name: 'SOLDJARS OF FORTUNE ASHES',
    img: './assets/SOLDJARS_OF_FORTUNE_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Soldjars+of+Fortune+Ashes',
    Dlc: false
  },
  {
    id: '20',
    name: 'ARCHER ASHES',
    img: './assets/ARCHER_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Archer+Ashes',
    Dlc: false
  },
  {
    id: '21',
    name: 'GREATSHIELD SOLDIER ASHES',
    img: './assets/GREATSHIELD_SOLDIER_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Greatshield+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '22',
    name: 'PAGE ASHES',
    img: './assets/PAGE_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Page+Ashes',
    Dlc: false
  },
  {
    id: '23',
    name: 'VULGAR MILITIA ASHES',
    img: './assets/VULGAR_MILITIA_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Vulgar+Militia+Ashes',
    Dlc: false
  },
  {
    id: '24',
    name: 'MARIONETTE SOLDIER ASHES',
    img: './assets/MARIONETTE_SOLDIER_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Marionette+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '25',
    name: 'AVIONETTE SOLDIER ASHES',
    img: './assets/AVIONETTE_SOLDIER_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Avionette+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '26',
    name: 'KAIDEN SELLSWORD ASHES',
    img: './assets/KAIDEN_SELLSWORD_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Kaiden+Sellsword+Ashes',
    Dlc: false
  },
  {
    id: '27',
    name: 'MAD PUMPKIN HEAD ASHES',
    img: './assets/MAD_PUMPKIN_HEAD_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Mad+Pumpkin+Head+Ashes',
    Dlc: false
  },
  {
    id: '28',
    name: 'FIRE MONK ASHES',
    img: './assets/FIRE_MONK_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Fire+Monk+Ashes',
    Dlc: false
  },
  {
    id: '29',
    name: 'ANCESTRAL FOLLOWER ASHES',
    img: './assets/ANCESTRAL_FOLLOWER_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Ancestral+Follower+Ashes',
    Dlc: false
  },
  {
    id: '30',
    name: 'AZULA BEASTMAN ASHES',
    img: './assets/AZULA_BEASTMAN_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Azula+Beastman+Ashes',
    Dlc: false
  },
  {
    id: '31',
    name: 'MAN-SERPENT ASHES',
    img: './assets/MAN-SERPENT_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Man-Serpent+Ashes',
    Dlc: false
  },
  {
    id: '32',
    name: 'CRYSTALIAN ASHES',
    img: './assets/CRYSTALIAN_ASHES.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Crystalian+Ashes',
    Dlc: false
  },
  {
    id: '33',
    name: 'KINDRED OF ROT ASHES',
    img: './assets/KINDRED_OF_ROT_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Kindred+of+Rot+Ashes',
    Dlc: false
  },
  {
    id: '34',
    name: 'GLINTSTONE SORCERER ASHES',
    img: './assets/GLINTSTONE_SORCERER_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Glintstone+Sorcerer+Ashes',
    Dlc: false
  },
  {
    id: '35',
    name: 'TWINSAGE SORCERER ASHES',
    img: './assets/TWINSAGE_SORCERER_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Twinsage+Sorcerer+Ashes',
    Dlc: false
  },
  {
    id: '36',
    name: 'GODRICK SOLDIER ASHES',
    img: './assets/GODRICK_SOLDIER_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Godrick+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '37',
    name: 'RAYA LUCARIA SOLDIER ASHES',
    img: './assets/RAYA_LUCARIA_SOLDIER_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Raya+Lucaria+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '38',
    name: 'LEYNDELL SOLDIER ASHES',
    img: './assets/LEYNDELL_SOLDIER_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Leyndell+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '39',
    name: 'RADAHN SOLDIER ASHES',
    img: './assets/RADAHN_SOLDIER_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Radahn+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '40',
    name: 'HALIGTREE SOLDIER ASHES',
    img: './assets/HALIGTREE_SOLDIER_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Haligtree+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '41',
    name: 'MAUSOLEUM SOLDIER ASHES',
    img: './assets/MAUSOLEUM_SOLDIER_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Mausoleum+Soldier+Ashes',
    Dlc: false
  },
  {
    id: '42',
    name: 'STORMHAWK DEENH',
    img: './assets/STORMHAWK_DEENH.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Stormhawk+Deenh',
    Dlc: false
  },
  {
    id: '43',
    name: 'BANISHED KNIGHT OLEG',
    img: './assets/BANISHED_KNIGHT_OLEG.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Banished+Knight+Oleg+Ashes',
    Dlc: false
  },
  {
    id: '44',
    name: 'BANISHED KNIGHT ENGVALL',
    img: './assets/BANISHED_KNIGHT_ENGVALL.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Banished+Knight+Engvall+Ashes',
    Dlc: false
  },
  {
    id: '45',
    name: 'BLOODHOUND KNIGHT FLOH',
    img: './assets/BLOODHOUND_KNIGHT_FLOH.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Bloodhound+Knight+Floh',
    Dlc: false
  },
  {
    id: '46',
    name: 'BATTLEMAGE HUGUES ASHES',
    img: './assets/BATTLEMAGE_HUGUES_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Battlemage+Hugues+Ashes',
    Dlc: false
  },
  {
    id: '47',
    name: 'LATENNA THE ALBINAURIC',
    img: './assets/LATENNA_THE_ALBINAURIC.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Latenna+The+Albinauric',
    Dlc: false
  },
  {
    id: '48',
    name: 'PERFUMER TRICIA',
    img: './assets/PERFUMER_TRICIA.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Perfumer+Tricia+Ashes',
    Dlc: false
  },
  {
    id: '49',
    name: 'DEPRAVED PERFUMER CARMAAN ASHES',
    img: './assets/DEPRAVED_PERFUMER_CARMAAN_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Depraved+Perfumer+Carmaan+Ashes',
    Dlc: false
  },
  {
    id: '50',
    name: 'OMENKILLER ROLLO',
    img: './assets/OMENKILLER_ROLLO.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Omenkiller+Rollo',
    Dlc: false
  },
  {
    id: '51',
    name: 'BLACKFLAME MONK AMON ASHES',
    img: './assets/BLACKFLAME_MONK_AMON_ASHES.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Blackflame+Monk+Amon+Ashes',
    Dlc: false
  },
  {
    id: '52',
    name: 'ANCIENT DRAGON KNIGHT KRISTOFF ASHES',
    img: './assets/ANCIENT_DRAGON_KNIGHT_KRISTOFF_ASHES.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Knight+Kristoff+Ashes',
    Dlc: false
  },
  {
    id: '53',
    name: 'REDMANE KNIGHT OGHA',
    img: './assets/REDMANE_KNIGHT_OGHA.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Redmane+Knight+Ogha+Ashes',
    Dlc: false
  },
  {
    id: '54',
    name: 'LHUTEL THE HEADLESS',
    img: './assets/LHUTEL_THE_HEADLESS.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Lhutel+the+Headless',
    Dlc: false
  },
  {
    id: '55',
    name: 'CLEANROT KNIGHT FINLAY ASHES',
    img: './assets/CLEANROT_KNIGHT_FINLAY_ASHES.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Cleanrot+Knight+Finlay+Ashes',
    Dlc: false
  },
  {
    id: '56',
    name: 'BLACK KNIFE TICHE',
    img: './assets/BLACK_KNIFE_TICHE.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Black+Knife+Tiche+Ashes',
    Dlc: false
  },
  {
    id: '57',
    name: 'MIMIC TEAR ASHES',
    img: './assets/MIMIC_TEAR_ASHES.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Mimic+Tear+Ashes',
    Dlc: false
  },
  {
    id: '58',
    name: 'FINGER MAIDEN THEROLINA PUPPET',
    img: './assets/FINGER_MAIDEN_THEROLINA_PUPPET.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Finger+Maiden+Therolina+Puppet',
    Dlc: false
  },
  {
    id: '59',
    name: 'JARWIGHT PUPPET',
    img: './assets/JARWIGHT_PUPPET.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Jarwight+Puppet',
    Dlc: false
  },
  {
    id: '60',
    name: 'DOLORES THE SLEEPING ARROW PUPPET',
    img: './assets/DOLORES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Dolores+the+Sleeping+Arrow+Puppet',
    Dlc: false
  },
  {
    id: '61',
    name: 'NEPHELI LOUX PUPPET',
    img: './assets/NEPHELI_LOUX_PUPPET.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Nepheli+Loux+Puppet',
    Dlc: false
  },
  {
    id: '62',
    name: 'DUNG EATER PUPPET',
    img: './assets/DUNG_EATER_PUPPET.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Dung+Eater+Puppet',
    Dlc: false
  },
  {
    id: '63',
    name: 'NIGHTMAIDEN & SWORDSTRESS PUPPETS',
    img: './assets/NIGHTMAIDEN_SWORDSTRESS_PUPPETS.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Nightmaiden+&+Swordstress+Puppets',
    Dlc: false
  },
  {
    id: '64',
    name: 'CURSEBLADE MEERA',
    img: './assets/CURSEBLADE_MEERA.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Curseblade+Meera',
    Dlc: true
  },
  {
    id: '65',
    name: 'BLOODFIEND HEXERS ASHES',
    img: './assets/BLOODFIEND_HEXERS_ASHES.png',
    dif: '4',
    Link: "https://eldenring.wiki.fextralife.com/Bloodfiend+Hexer's+Ashes",
    Dlc: true
  },
  {
    id: '66',
    name: 'GRAVEBIRD ASHES',
    img: './assets/GRAVEBIRD_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Gravebird+Ashes',
    Dlc: true
  },
  {
    id: '67',
    name: 'FIRE KNIGHT HILDE',
    img: './assets/FIRE_KNIGHT_HILDE.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Fire+Knight+Hilde',
    Dlc: true
  },
  {
    id: '68',
    name: 'SPIDER SCORPION ASHES',
    img: './assets/SPIDER_SCORPION_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Spider+Scorpion+Ashes',
    Dlc: true
  },
  {
    id: '69',
    name: 'INQUISITOR ASHES',
    img: './assets/INQUISITOR_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Inquisitor+Ashes',
    Dlc: true
  },
  {
    id: '70',
    name: 'DEMI-HUMAN SWORDSMAN YOSH',
    img: './assets/DEMIHUMAN_SWORDSMAN_YOSH.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Demi-Human+Swordsman+Yosh',
    Dlc: true
  },
  {
    id: '71',
    name: 'MESSMER SOLDIER ASHES',
    img: './assets/MESSMER_SOLDIER_ASHES.png',
    dif: '4',
    Link: 'https://eldenring.wiki.fextralife.com/Messmer+Soldier+Ashes',
    Dlc: true
  },
  {
    id: '72',
    name: 'BLACK KNIGHT COMMANDER ANDREAS',
    img: './assets/BLACK_KNIGHT_COMMANDER_ANDREAS.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Black+Knight+Commander+Andreas',
    Dlc: true
  },
  {
    id: '73',
    name: 'BLACK KNIGHT CAPTAIN HUW',
    img: './assets/BLACK_KNIGHT_CAPTAIN_HUW.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Black+Knight+Captain+Huw',
    Dlc: true
  },
  {
    id: '74',
    name: 'BIGMOUTH IMP ASHES',
    img: './assets/BIGMOUTH_IMP_ASHES.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Bigmouth+Imp+Ashes',
    Dlc: true
  },
  {
    id: '75',
    name: 'MAN-FLY ASHES',
    img: './assets/MAN_FLY_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Man-Fly+Ashes',
    Dlc: true
  },
  {
    id: '76',
    name: 'TAYLEW THE GOLEM SMITH',
    img: './assets/TAYLEW_THE_GOLEM_SMITH.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Taylew+the+Golem+Smith',
    Dlc: true
  },
  {
    id: '77',
    name: 'DIVINE BIRD WARRIOR ORNIS',
    img: './assets/DIVINE_BIRD_WARRIOR_ORNIS.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Divine+Bird+Warrior+Ornis',
    Dlc: true
  },
  {
    id: '78',
    name: 'HORNED WARRIOR ASHES',
    img: './assets/HORNED_WARRIOR_ASHES.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Horned+Warrior+Ashes',
    Dlc: true
  },
  {
    id: '79',
    name: 'ANCIENT DRAGON FLORISSAX',
    img: './assets/ANCIENT_DRAGON_FLORISSAX.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Ancient+Dragon+Florissax',
    Dlc: true
  },
  {
    id: '80',
    name: 'FINGERCREEPER ASHES',
    img: './assets/FINGERCREEPER_ASHES.png',
    dif: '5',
    Link: 'https://eldenring.wiki.fextralife.com/Fingercreeper+Ashes',
    Dlc: true
  },
  {
    id: '81',
    name: 'FIRE KNIGHT QUEELIGN',
    img: './assets/FIRE_KNIGHT_QUEELIGN.png',
    dif: '3',
    Link: 'https://eldenring.wiki.fextralife.com/Fire+Knight+Queelign',
    Dlc: true
  },
  {
    id: '82',
    name: 'SWORDHAND OF NIGHT JOLAN',
    img: './assets/SWORDHAND_OF_NIGHT_JOLAN.png',
    dif: '2',
    Link: 'https://eldenring.wiki.fextralife.com/Swordhand+of+Night+Jol%C3%A1n',
    Dlc: true
  },
  {
    id: '83',
    name: 'JOLAN AND ANNA',
    img: './assets/JOLAN_AND_ANNA.png',
    dif: '1',
    Link: 'https://eldenring.wiki.fextralife.com/Jol%C3%A1n+and+Anna',
    Dlc: true
  }
];
