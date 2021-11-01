draw();

//const myButton = document.querySelectorAll('button');

 const myButton_me = document.querySelector("#me");
 const myButton_me_also = document.querySelector("#me_also");

//  myButton.onclick = function(){
//      alert('hello from selector (all button)');
//  }

myButton_me.onclick = function(){
  alert('hello from get element (me)');
 }
myButton_me_also.onclick = function(){
   alert('hello from get element (me_also)');
 }

 console.log(typeof("me"));
 console.log(typeof('me'));
 console.log("me" === 'me');