var grades = [];
//生徒名と点数のデータベースArray
var add = function (firstN, lastN, point) {
    var obj = {
        firstName: firstN,
        lastName: lastN,
        points: point
    };
    grades.push(obj);
};

//平均点を出す関数
var average = function(){
    var sumPoints = 0;
    for(var i = 0; i < grades.length; i++){
        sumPoints += grades[i].points;
    }
    console.log(sumPoints / grades.length);
};

//合格点に達している生徒
var didPass = function(borderOfPass){
    for (var j = 0; j < grades.length; j++) {
        if (grades[j].points > borderOfPass){
            console.log(grades[j].firstName + " " + grades[j].lastName);
        }
    }
};



add("yoko", "andrae", 80);
add("mai", "suzuki", 90);
//平均点を出力
average();
//合格点を設定、合格者を出力
didPass(70);