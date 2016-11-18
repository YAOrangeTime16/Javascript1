/* Lägg till en funktioni ett objekt

var album = {
    
    albumName: "Trouble Will Find Me",
    artist: "The National",
    year: 2013,
    getContent: function(){
        return "The album "  + this.albumName + " by " + this.artist + " was released in " + this.year;
    },
        
    releasedWhen: function () {
        return "This album was released " + (2016 - this.year) + " years ago.";
    }
    
};

console.log(album.releasedWhen());

*/

/* Vad är det för type?

//Vi skickar med 3 parametrar
function album(albumName, artist, year){
    //Lagrar paramterarna till varje nytt enskilt skapat objekt med this.
    this.albumName = albumName;
    this.artist = artist;
    this.year = year;
}

//Genom att kalla på album kan vi nu skapa flera olika objekt med hjälp av album
var newAlbum = new album("Album", "artist", 1873);

console.log(typeof album);          //function
console.log(typeof newAlbum);       //object
console.log(typeof newAlbum.artist);    //string

*/


function weapon (type, damage) {
    this.type = type;
    this.damage = damage;
    this.showWeapon = function () {
        console.log("I have a " + this.type + "!");
    };
    
    
}

var myWeapon1 = new weapon("tenta", 80);


function monster (name, health) {
    this.name = name;
    this.health = health;
    this.speak = function () {
        console.log(this.name + " hungry!" + this.name + " kill!");
    };
}
var grublak = new monster ("Grublak", 500);
var mnst2 = new monster("monster 2", 600);
var mnst3 = new monster("monster 3", 1000);
var monsterArray = [grublak, mnst2, mnst3];


for (var i = 0; i < monsterArray.length; i++){
    monsterArray[i].speak();
    myWeapon1.showWeapon();
    slayMonster(myWeapon1, monsterArray[i]);
}




function slayMonster (weapon, monster) {
    var damage = weapon.damage;
    var health = monster.health;
    var type = weapon.type;
    
   while (damage < health) {
       if (Math.random() > 0.8 ) {
           health -= damage;
           console.log("Extra damage!");
       }
       if (type == "tenta") {
           health -= damage;
       }
       health -= damage;
       console.log(monster.name + " got damage. Health: " + health);
       
   }
    console.log("Ouch, me dead!");
}

//Object

function Person (name, age) {
    this.name = name;
    this.age = age;

}

//Prototypens funktion som hämtar namnet
//Personから作られた全てのオブジェクトに適用されることになる
Person.prototype.getName = function(){
    console.log(this.name);
};

var person1 = new Person ("Hana", 30);

//vanlig funktion pekarpå this.
function getName(){
    console.log(this.name);
}

//function.call(Object, argument)
getName.call(person1);
Person.call(person1, "inte Hana", 23);
getName.call(person1);


function Employee (name, age) {
    //this.name = name;
    //this.age = age;
    Person.call(this, name, age);
    this.title = "employee";
}

//Person prototype を新たなコンストラクタに参照させる
Employee.prototype = new Person();

// 3 argument
var emp1 = new Employee ("Jesper", 25);
console.log(emp1);

//function.apply
Person.apply(person, ["array","array"]);