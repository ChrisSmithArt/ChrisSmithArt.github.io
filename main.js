const room0 = {
    roomName: "Null",
    roomNum: 1,
    roomSub: "Empty space...",
    roomDisc: "You should not be here...",
    northRoom: 0,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room1 = {
    roomName: "Dungeon Cell",
    roomNum: 1,
    roomSub: "Your home...",
    roomDisc: "This is the cell of the dungeon you've been captive within. You can't remember how long you spent here, but it was not a pleasant experience...",
    northRoom: 4,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 2
}

const room2 = {
    roomName: "Llewelyn's Cell",
    roomNum: 3,
    roomSub: "Neighbored Imprisonment...",
    roomDisc: "This is the cell of the dungeon across from the one you've been captive within. This cell is inhabited by Llewelyn, a fair skinned, androgynous person of unknown origin. Llwelyn looks at you from within their cell with bright yellow eyes...",
    northRoom: 0,
    southRoom: 4,
    westRoom: 0,
    eastRoom: 0,
    npc: 2,
    itemCheck: 0,
    visited: 1
}


const room3 = {
    roomName: "Destroyed Dungeon Cell",
    roomNum: 2,
    roomSub: "An unknown calamity...",
    roomDisc: "This was another the cell of the dungeon, but it has been left as a smoldering ruin. The bars are broken and bent outwards, as if something exploded out of the cell...",
    northRoom: 0,
    southRoom: 0,
    westRoom: 4,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room4 = {
    roomName: "First hallway",
    roomNum: 2,
    roomSub: "Your path to freedom...",
    roomDisc: `This is the hallway that exists outside of your old dungeon cell, you've looked at the flickering <a id="pickUp" class="highlightMe">torch</a> light before with hope of escape for as long as you can remember.`,
    northRoom: 2,
    southRoom: 1,
    westRoom: 5,
    eastRoom: 3,
    npc: 0,
    itemCheck: 12,
    visited: 1
}

const room5 = {
    roomName: "Sandy Foyer",
    roomNum: 5,
    roomSub: "The forgotten gathering...",
    roomDisc: "A large open space that was once used for the guards to process whatever came into the dungeon, now empty, the floor is covered in coarse sand...",
    northRoom: 14,
    southRoom: 6,
    westRoom: 13,
    eastRoom: 4,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room6 = {
    roomName: "Guard Room",
    roomNum: 6,
    roomSub: "The enemy's outpost...",
    roomDisc: "This room appears to be somekind of guard room, but you're unsure what they were guarding here, as the only other pathway leads to storage...",
    northRoom: 5,
    southRoom: 7,
    westRoom: 8,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room7 = {
    roomName: "Hidden Stairs",
    roomNum: 7,
    roomSub: "Delving deeper...",
    roomDisc: "A secret room beyond the guard outpost, the brickwork here is older. The dungeon you were trapped in was built atop some older structure, whose entrance now sits infront of you, descending deeper into the earth...",
    northRoom: 6,
    southRoom: 25,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room8 = {
    roomName: "Guard Tunnel",
    roomNum: 8,
    roomSub: "The enemy's footsteps...",
    roomDisc: "A narrow passageway hewn out of the earth, the walls are covered in cracked plaster, this was not part of the original construction...",
    northRoom: 9,
    southRoom: 0,
    westRoom: 10,
    eastRoom: 6,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room9 = {
    roomName: "The Mole's Den",
    roomNum: 9,
    roomSub: "Secret...",
    roomDisc: "This room is little more than a hole dug into the earth and a strange, squat person stands infront of you. They have no eyes, but long catfish-like whiskers protrude from their face. Somekind of mutant. ...",
    northRoom: 0,
    southRoom: 8,
    westRoom: 0,
    eastRoom: 0,
    npc: 4,
    itemCheck: 0,
    visited: 1
}

const room10 = {
    roomName: "Armoury",
    roomNum: 10,
    roomSub: "The enemy's toolkit...",
    roomDisc: "A large room filled with weapon racks. You look at the crude blades used by the guards here and are filled with disgust, you won't sully your hands with the primitive tools of your captors...",
    northRoom: 11,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 8,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room11 = {
    roomName: "Records",
    roomNum: 11,
    roomSub: "The land's memories...",
    roomDisc: `This room is filled with shelves housing legders and scrolls, likely detailing the comings and goings of whoever makes their way through this dungeon. A large <a id="pickUp" href="#" class="highlightMe">tome</a> stick out...`,
    northRoom: 38,
    southRoom: 10,
    westRoom: 0,
    eastRoom: 13,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room12 = {
    roomName: "Food Storage",
    roomNum: 12,
    roomSub: "The rotted larders...",
    roomDisc: "This room is the storage for all the food here. It's supposed to be dry goods, but some moisture has seeped in from the brickwork. All the food here is rotten...",
    northRoom: 0,
    southRoom: 11,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room13 = {
    roomName: "Long hallway",
    roomNum: 13,
    roomSub: "Another passage...",
    roomDisc: "This long hallway is filled tiny alcoves, where singular bricks have been removed. Names are etched into each alcove...",
    northRoom: 0,
    southRoom: 0,
    westRoom: 11,
    eastRoom: 5,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

//Second floor


const room14 = {
    roomName: "Upper Foyer",
    roomNum: 14,
    roomSub: "An enemy's greeting...",
    roomDisc: "This large foyer was once used as reception for the dungeon. The exit is closeby, you remember this being the first room upon being brought to the dungeon...",
    northRoom: 15,
    southRoom: 5,
    westRoom: 21,
    eastRoom: 17,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room15 = {
    roomName: "Exit",
    roomNum: 15,
    roomSub: "The road to freedom...",
    roomDisc: "A long hallway constructed out of brick and cobblestone, at the far end is bright daylight. You'd almost forgotten what it looks like. Only a few more steps to freedom...",
    northRoom: 36,
    southRoom: 14,
    westRoom: 16,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room16 = {
    roomName: "Guard Post",
    roomNum: 16,
    roomSub: "Alcove of Treachery...",
    roomDisc: `This small guardroom, with a single cot and chair, sits unnoticed. It seems intended as a point of ambush for anyone assailing the dungeon. It didn't work too well, the walls are splattered with the blood of whoever was posted here. There is a small table with red <a id="pickUp" href="#" class="highlightMe">coin</a>`,
    northRoom: 0,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 15,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room17 = {
    roomName: "Upper hallways",
    roomNum: 17,
    roomSub: "The crossroads...",
    roomDisc: "A long hallway that ends in a T-junction. It seems cleaner here than in other areas. There's even a carpet...",
    northRoom: 37,
    southRoom: 20,
    westRoom: 14,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room18 = {
    roomName: "The War Room",
    roomNum: 18,
    roomSub: "The enemy's diary...",
    roomDisc: `This room is occupied by a long table surrounded by chairs. The table is cloven in two and the chairs smashed. It looks like the remains of a tactical map were once atop the table, there is an <a id="pickUp" href="#" class="highlightMe">invoice</a> on the floor...`,
    northRoom: 0,
    southRoom: 17,
    westRoom: 0,
    eastRoom: 19,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room19 = {
    roomName: "Warden's Office",
    roomNum: 19,
    roomSub: "A broken adversary...",
    roomDisc: `Beyond the large iron door is the office of the Warden's Office. The room is ruined, furniture smashed. <span class=highlightMe>The Warden</span> looks broken, both physically and emotionally. The `,
    northRoom: 0,
    southRoom: 0,
    westRoom: 18,
    eastRoom: 0,
    npc: 1,
    itemCheck: 0,
    visited: 1
}


const room20 = {
    roomName: "Training Room",
    roomNum: 20,
    roomSub: "The enemy's playroom...",
    roomDisc: "This large open room has a series of weights and sand pits for various training acitivites. There are large wooden posts with slashes from sword practice...",
    northRoom: 17,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room21 = {
    roomName: "Another hallway",
    roomNum: 21,
    roomSub: "More passages...",
    roomDisc: "This is a simple hallway...",
    northRoom: 0,
    southRoom: 22,
    westRoom: 24,
    eastRoom: 14,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room22 = {
    roomName: "Sleeping Quarters",
    roomNum: 22,
    roomSub: "The enemy's den...",
    roomDisc: "This room is occupied by a series of bunk beds, now covered in dried blood. This is where the guards slept, and this is where the guard died...",
    northRoom: 23,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 21,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room23 = {
    roomName: "Baths",
    roomNum: 23,
    roomSub: "A brief respite...",
    roomDisc: "The warm humid air of this natural hotspring refreshes you. This is where the guards bathed, now some creature dwells here. It looks odd, almost two-dimensional. Completely black with sharp edges. More of a shape than a person. It makes strange screeching sounds as you approach...",
    northRoom: 0,
    southRoom: 22,
    westRoom: 0,
    eastRoom: 0,
    npc: 3,
    itemCheck: 0,
    visited: 1
}


const room24 = {
    roomName: "Kitchens",
    roomNum: 24,
    roomSub: "The enemy's dining hall...",
    roomDisc: `This room is occupied by a large table at one end lined with chairs and set for a meal where you notice a strange <a id="pickUp" href="#" class="highlightMe">bone</a>, though no food is present. On the other end of the room is a large firepit with a grill and a massive stock pot...`,
    northRoom: 22,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

//Basement

const room25 = {
    roomName: "Water Wheel",
    roomNum: 25,
    roomSub: "Ancient wonder...",
    roomDisc: `This room contains a massive waterwheel, constructed of metal and propelled by a small stream cutting through the center of the room. Mosses and fungi envelop most surfaces here. A <a id="pickUp" href="#" class="highlightMe">Strange Mushroom</a> grows among the fungi. The source of the small stream is projected by a metal grate on either end. The waterwheel connects to another room with filled with pipes.`,
    northRoom: 7,
    southRoom: 0,
    westRoom: 26,
    eastRoom: 29,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room26 = {
    roomName: "Gallery of Statues",
    roomNum: 26,
    roomSub: "The Sculptor at work...",
    roomDisc: "This large room is filled with finished and half-finished statues. There are chunks of stone literring the ground. A large, looming figure, almost a giant, squats in the middle of the room, carving pieces of stone with a chisel. The giant sculptor hums quietly to herself as she sculpts.",
    northRoom: 27,
    southRoom: 28,
    westRoom: 0,
    eastRoom: 25,
    npc: 5,
    itemCheck: 0,
    visited: 1
}


const room27 = {
    roomName: "Ancient Relief",
    roomNum: 27,
    roomSub: "The story untold...",
    roomDisc: "This room is barren, save for the massive relief; a two-dimensional sculpture coming out of the wall. A thick layer of dust covers the floor. The relief in question depicts...",
    northRoom: 0,
    southRoom: 26,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room28 = {
    roomName: "Cavernous Quarry",
    roomNum: 28,
    roomSub: "Studio of an unknown artisan...",
    roomDisc: "This large room has been roughly hewn, large chunks of stone have been hacked out for the Sculptor's artwork. It is hard to tell if this room was originally here or if the Sculptor made it herself.",
    northRoom: 26,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room29 = {
    roomName: "Deep Pathways",
    roomNum: 29,
    roomSub: "Long forgotten footsteps...",
    roomDisc: "This T-intersection hallway is narrow with a dirt floor. There is a dim light from bioluminescent fungi. The walls are solid stone...",
    northRoom: 0,
    southRoom: 32,
    westRoom: 25,
    eastRoom: 39,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room30 = {
    roomName: "Pipe Room",
    roomNum: 30,
    roomSub: "Connections to unknown sources...",
    roomDisc: "This room would be quite large, but it is now a cramped space as it is filled with a tremendous amount of pipes. Water can be heard flowing through them...",
    northRoom: 0,
    southRoom: 0,
    westRoom: 29,
    eastRoom: 31,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room31 = {
    roomName: "Gear Room",
    roomNum: 31,
    roomSub: "The ancient machine...",
    roomDisc: "This room is simple, aside from the various gears turning. These gears seem to connect to some other mechanism, but the room is filled with many interlocking gears of varrying sizes...",
    northRoom: 0,
    southRoom: 0,
    westRoom: 30,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room32 = {
    roomName: "Ritual Chamber",
    roomNum: 32,
    roomSub: "A sacred space...",
    roomDisc: "This room is a wide open space with mats positioned around a large brass brazier. The mats are old and decayed. The brass brazier is filled with bits of charcoal and ash...",
    northRoom: 29,
    southRoom: 33,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room33 = {
    roomName: "Ancient Procession",
    roomNum: 0,
    roomSub: "The path to enlightenment...",
    roomDisc: "This t-intersection has a long carpet leading down it towards a bedroom. The carpet has shells and precious stones woven into the fringe. Markings are ",
    northRoom: 32,
    southRoom: 34,
    westRoom: 35,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room34 = {
    roomName: "Sage's Quarters",
    roomNum: 34,
    roomSub: "Wisdom Incarnate...",
    roomDisc: `A simple room, no decorations, just a simple mat in the middle of the room for sleeping. Atop the mat you notice a <a id="pickUp" href="#" class="highlightMe">broken sword</a>`,
    northRoom: 33,
    southRoom: 0,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}


const room35 = {
    roomName: "Old Storage",
    roomNum: 35,
    roomSub: "Memories of the past...",
    roomDisc: "This room is filled with old wooden shelves housing jars, scrolls, and all kinds of oddities. ",
    northRoom: 0,
    southRoom: 0,
    westRoom: 333,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room36 = {
    roomName: "Outside",
    roomNum: 36,
    roomSub: "freedom...",
    roomDisc: "...",
    northRoom: 0,
    southRoom: 9,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 0,
    visited: 1
}

const room37 = {
    roomName: "Dark Room",
    roomNum: 37,
    roomSub: "An obscured space...",
    roomDisc: "The room is eclipsed in darkness, you dare not enter lest you risk your own safety and sacrifice your newfound freedom...",
    northRoom: 0,
    southRoom: 17,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 12,
    visited: 1
}


const room38 = {
    roomName: "Dark Room",
    roomNum: 38,
    roomSub: "An obscured space...",
    roomDisc: "The room is eclipsed in darkness, you dare not enter lest you risk your own safety and sacrifice your newfound freedom...",
    northRoom: 0,
    southRoom: 11,
    westRoom: 0,
    eastRoom: 0,
    npc: 0,
    itemCheck: 12,
    visited: 1
}

const room39 = {
    roomName: "Dark Room",
    roomNum: 39,
    roomSub: "An obscured space...",
    roomDisc: "The room is eclipsed in darkness, you dare not enter lest you risk your own safety and sacrifice your newfound freedom...",
    northRoom: 0,
    southRoom: 0,
    westRoom: 29,
    eastRoom: 31,
    npc: 0,
    itemCheck: 12,
    visited: 1
}


const room40 = {
    roomName: "Darkened hallway",
    roomNum: 40,
    roomSub: "The shadow of hope...",
    roomDisc: `This is the darkened hallway that exists outside of your old dungeon cell, there is an empty sconce where a <a id="pickUp" href="#" class="highlightMe">torch</a> once flickered, giving you hope of escape.`,
    northRoom: 0,
    southRoom: 1,
    westRoom: 3,
    eastRoom: 4,
    npc: 0,
    itemCheck: 0,
    visited: 1
}



const optionDisc = [
    "is nothing...", 
    "is your old dungeon cell...", 
    "the dungeon cell of Llewelyn...",
    "a destroyed dungeon cell",
    "is a long hallway with flickering torches", 
    "is a large open space with sand on the floor", 
    "a large iron door...",
    "a room with a older stonework and a staircase leading downwards...",
    "a long narrow passage...",
    "a rough hewn hole...",
    "a large iron door...",
    "a room filled with bookshelves...",
    "a room emanating a rotten smell...",
    "a long brick hallway...",
    "a large open space...",
    "a long and wide passageway with daylight at the end...",
    "a small room hidden off to the side...",
    "a clearn hallway with a nice carpet...",
    "a room with a destroyed table and chairs...",
    "a large iron door...",
    "a large room with sand pits and exercise equipment...",
    "another hallway...",
    "a room filled with bunkbeds. Smells of blood...",
    "a natural hotspring emenating humid air...",
    "a large room with a dining table...",
    "a room with a larger waterwheel and the sound of trickling water...",
    "a room filled with ancient statues and a large figure...",
    "a room with a large relief on the far end...",
    "a room that's filled with chunks of stone...",
    "a narrow T-intersection passageway...",
    "a room filled with pipes...",
    "a large room with moving parts making a ticking sound...",
    "a large chamber with a brass brazier in the middle...",
    "a wider passage with ceremonial markins on the walls",
    "a room filled with shelves housing jars and scrolls...",
    "a bedroom with ceremonial markings on the walls...",
    "daylight...",
    "darkness",
    "darkness",
    "darkness"
    ]

const roomList = [room0, room1, room2, room3, room4, room5, room6, room7, room8, room9, room10, room11, room12, room13, room14, room15, room16, room17, room18, room19, room20, room21, room22, room23, room24, room25, room26, room27, room28, room29, room30, room31, room32, room33, room34, room35, room36, room37, room38, room39];

var currentRoom = 1;



const item0 = {
    itemName: "Empty",
    itemNum: 0,
    itemImg: "images/item0.png",
    itemDisc: "This is nothing..."
}

const item1 = {
    itemName: "Flower",
    itemNum: 1,
    itemImg: "images/item1.png",
    itemDisc: "A flower found on your person before capture, somehow it remains intact..."
}

const item2 = {
    itemName: "Time Piece",
    itemNum: 2,
    itemImg: "images/item2.png",
    itemDisc: "A brass pocket watch you've kept wound and working all this time..."
}

const item3 = {
    itemName: "Dice",
    itemNum: 3,
    itemImg: "images/item3.png",
    itemDisc: "A set of dice carved from bone..."
}

const item4 = {
    itemName: "Tattered Map",
    itemNum: 4,
    itemImg: "images/item4.png",
    itemDisc: "A piece of a map that's tattered and torn..."
}

const item5 = {
    itemName: "Peculiar Doll",
    itemNum: 5,
    itemImg: "images/item5.png",
    itemDisc: "A strange doll in strange dress...."
}

const item6 = {
    itemName: "Coin",
    itemNum: 6,
    itemImg: "images/item6.png",
    itemDisc: "An unfamiliar coin made out of red metal..."
}

const item7 = {
    itemName: "Strange Mushroom",
    itemNum: 7,
    itemImg: "images/item7.png",
    itemDisc: "An mushroom of unknown properties..."
}

const item8 = {
    itemName: "Broken Sword",
    itemNum: 8,
    itemImg: "images/item8.png",
    itemDisc: "All that remains is a hilt and a bit of the broken blade...."
}

const item9 = {
    itemName: "Invoice",
    itemNum: 9,
    itemImg: "images/item9.png",
    itemDisc: "An invoice for the transfer of prisoners...."
}

const item10 = {
    itemName: "Bone",
    itemNum: 10,
    itemImg: "images/item10.png",
    itemDisc: "A bone of an unknown creature..."
}

const item11 = {
    itemName: "Tome",
    itemNum: 11,
    itemImg: "images/item11.png",
    itemDisc: "A moldy old book written in a language you cannot read...."
}

const item12 = {
    itemName: "Torch",
    itemNum: 12,
    itemImg: "images/item12.png",
    itemDisc: "A flickering torch, found outside your cell...."
}
const itemList = [item0, item1, item2, item3, item4, item5, item6, item7, item8, item9, item10, item11, item12];

var inventory = [0, 0, 0, 0, 0, 0, 0, 0];


const npc0 = {
    npcName: "",
    npcNum: 0,
    npcSpeech: ["", "", "", "",],
    npcOptions: ["Hostile", "Neutral", "Friendly"],
    npcState: 0
}

const npc1 = {
    npcName: "Warden Braunstone",
    npcNum: 1,
    npcSpeech: ["So...you're free...I won't-I can't stop you...what do you want from me?", "...", "...you're still here?", "...good to see you're still alive."],
    npcOptions: ["Piss off and die...", "You've seen better days...", "I'll go find help!"],
    npcState: 0
}

const npc2 = {
    npcName: "Immured Llewelyn",
    npcNum: 2,
    npcSpeech: ["Oh my...look who got free...not me, I of course must await destiny...", "Can't wait until I get out here...neighbor...", "Ah...how typical...", "I've always been fond of you...neighbor...",],
    npcOptions: ["Freak...", "Okay...sure...", "Don't worry, I'll go find a key!"],
    npcState: 0
}

const npc3 = {
    npcName: "Abstract Entity",
    npcNum: 3,
    npcSpeech: ["#$*%???", "!!**&#@?!", "...?", "##$@@@!",],
    npcOptions: ["Y-you're somekind of monster...!", "...I'm not sure I'm okay with this.", "...I don't understand you, but I hope you can consider me a friend."],
    npcState: 0
}

const npc4 = {
    npcName: "Clandestine Geirleif",
    npcNum: 4,
    npcSpeech: ["Welcome newcomer...please do not disturb my dirt...", "Foul interloper! What do you want in my sacred dirt?!", "Ah...the newcomer...", "Friend! The dirt and I welcome you!",],
    npcOptions: ["...gross", "the dirt? Sure...whatever...", "Ah, I didn't mean to intrude. Nice home you have here."],
    npcState: 0
}

const npc5 = {
    npcName: "Giant Sculptor",
    npcNum: 5,
    npcSpeech: ["Ah...greetings small one...", "Be quick or I'll make a grave for you too...", "Welcome...", "It is good to see you, maybe one day we can make a statue together.",],
    npcOptions: ["...You're an ugly one, aren't you?", "...How did you even fit in here?", "Did you carve all of these? Quite impressive."],
    npcState: 0
}

const npcList = [npc0, npc1, npc2, npc3, npc4, npc5];

var steps = 0;

//Loading the webpage.
document.addEventListener("DOMContentLoaded", load);

function load(){
    const directions = document.getElementsByClassName("direction");
    
    for (let i = 0; i < directions.length; i++) {
        directions[i].addEventListener("click", function(){
            roomChange(directions[i].innerHTML);
        });
    }
    document.getElementById("npc").style.display = "none";

    let startingItem = localStorage.getItem("Occupation");
    inventory[0] = startingItem;

    roomLoad(1);
    loadInventory();
}


function loadInventory(){
    //this is called when the game loads, getting the inventory from the JSON file
    //The JSON file should be constructed after character creation, but maybe the player can save their file to load it up later if they want to take a break?
    //But essentially this will put 

    


    const inventoryInfo = document.getElementsByClassName("itemInfo");
    const inventoryImgs = document.getElementsByClassName("item");
    for (let i = 0; i < 6; i++) {
        inventoryInfo[i].innerHTML = `<summary>${itemList[inventory[i]].itemName}</summary>${itemList[inventory[i]].itemDisc}`;
        inventoryImgs[i].src = itemList[inventory[i]].itemImg; 
    }
}

//if there's an NPC in the room, this will load the NPC.
function loadNPC(){
    const npcSays = document.getElementById("npcDialogue");

    npcSays.innerHTML = `<span class="highlightMe"> ${npcList[roomList[currentRoom].npc].npcName} says: </span>` + npcList[roomList[currentRoom].npc].npcSpeech[npcList[roomList[currentRoom].npc].npcState];

    if(npcList[roomList[currentRoom].npc].npcState == 0){

        console.log("npc loaded, talk now");

        document.getElementById("speechOptions").style.display = "block";

        const talkButton = document.getElementById("pushToTalk");
        talkButton.addEventListener("click",submitDialogue);
        
        document.getElementById("hostile").innerHTML = npcList[roomList[currentRoom].npc].npcOptions[0];
        document.getElementById("neutral").innerHTML = npcList[roomList[currentRoom].npc].npcOptions[1];
        document.getElementById("friendly").innerHTML = npcList[roomList[currentRoom].npc].npcOptions[2];
    } else {
        document.getElementById("speechOptions").style.display = "none";
    }
}

function submitDialogue(){
    const hostileOption = document.getElementById("radio1").checked;
    const neutralOption = document.getElementById("radio2").checked;
    const friendlyOption = document.getElementById("radio3").checked;
    //console.log("clicked to talk");

    if(hostileOption){
        //console.log("hostile");
        npcList[roomList[currentRoom].npc].npcState = 1;
        document.getElementById("speechOptions").style.display = "none";
        loadNPC();
    } else if(neutralOption){
        //console.log("neutral");
        npcList[roomList[currentRoom].npc].npcState = 2;
        document.getElementById("speechOptions").style.display = "none";
        loadNPC();
    } else if(friendlyOption){
        //console.log("friendly");
        npcList[roomList[currentRoom].npc].npcState = 3;
        document.getElementById("speechOptions").style.display = "none";
        loadNPC();
    }

}

//When clicking on the Directional map, it sends a direction to this function which checks if the room has a door in that direction
//Then it sets the current room to that value
//Afterwhich is checks if the current room is not 0, then calls the roomLoad function to change the room.
function roomChange(direct){
    if(direct == "N" && roomList[currentRoom].northRoom !=0){
        currentRoom = roomList[currentRoom].northRoom;
    } else if(direct == "S" && roomList[currentRoom].southRoom !=0){
        currentRoom = roomList[currentRoom].southRoom;
    } else if(direct == "W" && roomList[currentRoom].westRoom !=0){
        currentRoom = roomList[currentRoom].westRoom;
    } else if(direct == "E" && roomList[currentRoom].eastRoom !=0){
        console.log(roomList[currentRoom].eastRoom);
        currentRoom = roomList[currentRoom].eastRoom;
    }
    if(currentRoom != 0){
        steps += 1;
        roomList[currentRoom].visited = 2;
        roomLoad(currentRoom);
    }
}

//This function loads a new room once it's been decided by the roomChange which room will be loaded.
//It fets all the aspects of the HTML relative to the room information that needs to be changed.
//Then it sets the title, subtitle, and room description of the room
//After that it sets the description of the different directions so that the player knows what is 1 room away, or if there is no room.
//Then the following steps
//Check if the room has an NPC, if yes then show the NPC block, otherwise don't
function roomLoad(roomNumber){
    console.log(roomNumber);

    if(roomNumber == 36){
        localStorage.setItem("Steps", steps);
        localStorage.setItem("npc1State",npcList[1].npcState);
        localStorage.setItem("npc2State",npcList[2].npcState);
        localStorage.setItem("npc3State",npcList[3].npcState);
        localStorage.setItem("npc4State",npcList[4].npcState);
        localStorage.setItem("npc5State",npcList[5].npcState);

        let visitedRooms = [];
        
        for (let i = 1; i < 36; i++) {
            visitedRooms[i] = roomList[i].visited;
            
        }


        localStorage.setItem("visitedRooms",visitedRooms);

        window.location.href = "score.html";
    }

    const areaName = document.getElementById("areaTitle");
    const areaSub = document.getElementById("areaSubtitle");
    const areaDisc = document.getElementById("areaDescription");
    const northDisc = document.getElementById("northDescription");
    const southDisc = document.getElementById("southDescription");
    const westDisc = document.getElementById("westDescription");
    const eastDisc = document.getElementById("eastDescription");

    areaName.innerHTML = roomList[roomNumber].roomName;
    areaSub.innerHTML = roomList[roomNumber].roomSub;
    areaDisc.innerHTML = roomList[roomNumber].roomDisc;

    northDisc.innerHTML = "North of you..." + optionDisc[roomList[roomNumber].northRoom];
    southDisc.innerHTML = "South of you..." + optionDisc[roomList[roomNumber].southRoom];
    westDisc.innerHTML = "West of you..." + optionDisc[roomList[roomNumber].westRoom];
    eastDisc.innerHTML = "East of you..." + optionDisc[roomList[roomNumber].eastRoom];

    if(roomList[roomNumber].npc != 0){
        document.getElementById("npc").style.display = "block";
        loadNPC();
    } else {
        document.getElementById("npc").style.display = "none";
    }

    if(document.getElementById("pickUp") != null){
        const itemHTML = document.getElementById("pickUp").innerHTML.toLowerCase();
        document.getElementById("pickUp").addEventListener("click", function(){
            pickUpItem(itemHTML);
        })
    }

    if(roomList[roomNumber].itemCheck != 0){
        if(roomList[roomNumber].roomNum == 37){
            for (let i = 0; i < inventory.length; i++) {
                if(inventory[i] == roomList[roomNumber].itemCheck){
                    currentRoom = 18;
                    roomLoad(18);
                }
            }
        }
        if(roomList[roomNumber].roomNum == 38){
            for (let i = 0; i < inventory.length; i++) {
                if(inventory[i] == roomList[roomNumber].itemCheck){
                    currentRoom = 12;
                    roomLoad(12);
                }
            }
        }
        if(roomList[roomNumber].roomNum == 39){
            for (let i = 0; i < inventory.length; i++) {
                if(inventory[i] == roomList[roomNumber].itemCheck){
                    currentRoom = 30;
                    roomLoad(30);
                }
            }
        }
        if(roomList[roomNumber].roomNum == 4){
            for (let i = 0; i < inventory.length; i++) {
                if(inventory[i] == roomList[roomNumber].itemCheck){
                    currentRoom = 40;
                    roomLoad(40);
                }
            }
        }

    }
}

//This function is for picking up an item, but also turned into the check for returning an item
//Items are picked up or returned from specific locations. 
//We can use itemChecks later to change what rooms look like to remove item descriptions.
function pickUpItem(itemIdentity){
    let added = false;
    let alreadyHave = false;
    let inventoryFull = true;
    let returnNumber = 0;

    for (let i = 0; i < itemList.length && !alreadyHave &&!added; i++) {
        if(itemIdentity == itemList[i].itemName.toLowerCase()){
            for (let j = 0; j < inventory.length && !alreadyHave && !added; j++) {
                if(inventory[j] == i){
                    returnNumber = j;
                    alreadyHave = true;
                }
            }
            for (let k = 0; k < inventory.length && !added && !alreadyHave; k++) {
                if(inventory[k] == 0){
                    inventory[k] = i;
                    loadInventory();
                    inventoryFull = false;
                    added = true;
                }
            }
        }
        if(inventoryFull){
            fullInventory();
        }
        if(alreadyHave){
            returnItem(returnNumber);
        }
    }
}

function fullInventory(){
    //console.log("Your inventory is full.");
}

function returnItem(itemReturned){
    inventory[itemReturned] = 0;
    loadInventory();
}