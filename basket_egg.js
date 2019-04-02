function Storage(basket, egg){
  if(basket<egg){
    console.log("넘쳐서 계란이 깨졌습니다.");
  }
  else{
    this.basket=basket;
    this.egg=egg;
  }
};

Storage.prototype={
  constructor:Storage,
  state: function(){
    return "There are "+this.egg+"egg(s) in "+this.basket+"basket(s).";
  },
  add: function(value){
    if((value+this.egg)>=this.basket){
      return "계란을 담을 바구니가 없습니다.";
    }
    else{
      this.egg+=value;
      return "현재 계란이 "+this.egg+"개 있습니다.";
    }
  },
  eat_all: function(){
    this.egg=0;
    return "계란을 모두 먹었습니다.";
  }
};

var play=new Stroage(5,10)
/*
Storage.move=function(first,second){
  var left=first.basket-first.egg;
  if(second.egg<left){
    first.egg+=second.egg;
    second.egg=0;
    return first.egg;
  }
  else{
    first.egg+=left;
    second.egg-=left;
    return "Wow";
  }
};
*/
