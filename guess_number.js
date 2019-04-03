function Player(name, arr){
  this.name=name;
  this.arr=arr;
}

//여러번 사용하기 때문에 프로토타입으로 생성(constructor 필요)
Player.prototype={
  constructor:Player,
  show: function(){
    return "I have "+this.arr
  },
  change: function(value){
    if(value.length!=3){  //value에는 배열[0,0,0]이 들어간다
      throw error("게임을 위해 3개의 숫자가 필요합니다.");
    }
    else{
      this.arr[0]=value[0]
      this.arr[1]=value[1]
      this.arr[2]=value[2]
    }
  }
};

//host와 user가 배열을 가지면, 게임시작
//한 번 사용하기 때문에 메소드로 생성 (constructor 필요x)
Player.game=function(host,user){
  var strike =0
  var ball=0
  for(var i=0;i<3;i++){
    for(var j=0; j<3;j++){
      if(host.arr[i]==user.arr[j]){ //숫자가 겹친다
        if(i==j) strike++;//순서도 겹친다
        else  ball++;
      }
    }
  }

  if(strike==3){
    console.log("user win")
    return "결과: "+s+"strike(s)"+b+"ball(s)"
  }
}


//랜덤배열 형성 (3)
function create_arr(){
  var arr=new Array(3)
  var count=0

  while(count<3){
    var ran_num=Math.floor(Math.random*10)

    for(var i=0;i<count;i++){  //random 돌린만큼 배열에 삽입
      if(arr[i]==ran_num) continue //중복된 숫자 사용하지 않기 위해(ran_num이 매번 새로 생성되기 때문에 동일한 숫자가 될 경우 고려!)
    }
    arr[count++]=ran_num
  }
  return arr
}

var arr=new create_arr()
var host= new Player("host",arr)
var user=new Player("user",[0,1,2]) //임의입력 0,1,2

Player.game(host,user)
user.change([0,1,3]) //게임진행...
