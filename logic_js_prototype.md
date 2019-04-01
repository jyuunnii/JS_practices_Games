자바: 클래스 기반 객체지향 프로그래밍 언어
자바스크립트: 프로토타입 기반

클래스 기반=> 클래스 정의 -> 객체 (인스턴스) 생성
=======================================
자바스크립트의 모든 객체는 부모객체 "프로토타입 (객체)"와 연결됨.
즉, 프로토타입은 생성자 함수에 의해 생성된 각각의 객체에 공유 property를 제공하기 위해 사용됨.
  var student={
    name:"park",
    score:100
  }
  console.log(student.__proto__===Object.prototype);

==============================================
  function Person(name){  *생성자 함수 Person*
    this.name=name;
  }
  var foo=new Person("Park");

  console.dir(Person);//prototype property가 있다.  *prototype property = 함수만 갖고있는 프로퍼티 =함수 객체가 생성자로 사용될 때 이 함수를 통해 생성 객체들의 부모 객체*
  console.dir(foo);//prototype property가 없다.

  console.log(Person.__proto__===Function.prototype);
  console.log(Person.prototype===foo.__proto__)

  console.log(Person.prototype.constructor===Person); // foo 객체의 프로토타입객체는 Person.prototype
  console.log(foo.constructor===Person);
  console.log(Person.constructor===Function);
