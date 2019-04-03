function Person(name,speed){
  this.name=name;
  this.speed=speed;
}

Person.prototype={
  constructor:Person,
  toString:function(){
    return "Name is "+this.name+" and I ran "+this.distance+"meters!"
  }
};

Person.start=function(man1,man2){
  var winner=undefined
  var man1_point=0
  var man2_point=0
  console.log("GO START!")

  var generateRandom=function(min,max){
    var ranNum=Math.floor(Math.random()*(max-min+1)+min)
    return ranNum;
  }

  var count=0
  man1_points=0
  man2_points=0
  while(count<3){ //총 3회 경기
    count++
    man1_records=generateRandom(20,100)
    man2_records=generateRandom(20,100)
    console.log(man1.name+":"+man1_records+"m")
    console.log(man2.name+":"+man2_records+"m")
    if(man1_records>man2_records){
      man1_points+=1
      console.log(man1.name+" 승리")
    }
    else if(man1_records==man2_records){
      console.log("동점")
    }
    else{
      man2_points+=1
      console.log(man2.name+" 승리")
    }
    console.log(count+"번째 경기 종료")
  }
  if(man1_points>man2_points) console.log("최종승자는 "+man1.name);
  else console.log("최종승자는 "+man2.name);
}


var man1 = new Person("Kim", 20)
var man2 = new Person("Park", 30)
