function userInfu() {
 var name=  prompt("Please enter your name");
    var gender= prompt("Please enter your gender","male or female");
      var age= prompt("Please enter your age","more than 0");
      if (age <=0){
        alert(" you age less than or = 0 !!");

      }
      var cont = confirm("wants to skip the welcoming message?");
      if (cont == true){
         breake;
      }
      else{
        contitinue;

      }
      if (gender== "male"){
      alert("welcome mr"+name);
      
      }else if (gender== "female"){
        alert("welcome ms"+name);
      }
      else{
        alert("");
      }
   


    
    }
 function moreQw(){
    const answers = [];
   var v= confirm("do u like apple");
    var c= confirm("do u play videu games");
    var n=confirm("are u try to learn programing");
    answers.push(v);
    answers.push(c);
    answers.push(n);



 }  
 userInfu();
 moreQw();
 