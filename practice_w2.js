function Apple(w,g){
  var weight=w;
  var grade=g;

  this.getweight=function(){
    return weight;
  };
  this.getgrade=function(){
    return grade;
  };

  this.setweight=function(value){
    if(value<0){
      throw "무게는 0이상";
    }else{
      weight=value;
    }
  };

  this.setgrade=function(value){
    if(value<0){
      throw "등급은 0이상";
    }else{
      grade=value;
    }
  };
};
Apple.prototype.getPrice=function(){
  return this.getweight()*this.getgrade();
};

function Grape(processing_count){
  this.base=Apple;
  this.base(processing_count,processing_count);
};
Grape.prototype=Apple.prototype;


var Bill = new Apple(5,3);
var Extra= new Grape(2);

console.log("Apple(5,3):"+Bill.getPrice()+", \n Orange(2)"+Extra.getPrice());
