

var album = {
    albumName: 'Fantome', 
    artist: 'Hikaru Utada', 
    year: 2016
};

/*
console.log(album['artist']);

var dublett = album;
delete dublett.year;
dublett.album = 'It\'s automatic';

console.log(album);

console.log(dublett);
*/


/*
for (var x in album) {
    console.log(x);
}

for (var x in album) {
    console.log(x + ": " + album[x]);
}
*/

printContent(album);

/*

function printContent (name) {
    var strArray = [];
    for (var x in name) {
        strArray[strArray.length] = name[x];
    }
    
    var str = 'The ' + strArray[0] + ' by ' + strArray[1] + ' was released in ' + strArray[2];
    console.log(str);
    
}
*/

function printContent (name) {
    console.log('The ' + name.albumName + ' by ' + name.artist + ' was released by ' + name.year);
}

