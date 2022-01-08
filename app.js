 
    
    var a = 5;
    a = "Sarah";
    console.log(a);

    var b = 3;
    var c = 8;
    var result = a + " " + b;
    console.log(result + c);

    var a = "Sarah";
    var b = "Javascript";
    console.log(a + b);



    function somme(a, b) {
      var c = a + b;
      console.log(c);
      
    }
    somme(86, 29);
    somme (04, 96);




  
    function somme(a, b) {
        if (typeof a == "number" && typeof b == "number"){
            var c = a + b;
      console.log(c);
        }
        else{
            console.log("a and b must be a number!")
        }
    }
    somme(5,6);

  function addTwoNumbers(n1,n2,n3){
        if(typeof n1 == "number" && typeof n2 == "number" && typeof n3 == "number"){
        if(typeof n1 == "number"){
            if(typeof n2 == "number"){
                if(typeof n3 == "number"){
                    var sum = n1 + n2 + n3;
                    console.log(sum);
                }
                else{
                    console.log("n3 must be a number")
                }
        }
        else{
            console.log("n2 must be a number")
        }
    }
        else{
            console.log("n1 must be a number")
        }
    }

else{
    console.log("No number is entred!")
}
}
    
    addTwoNumbers(9,5,"h")

    /* string*/

    function generateFullName(firstName, lastName){
        if(typeof firstName == "string"){
            if(typeof lastName =="string"){
                 var fullName = firstName +" "+ lastName;
                 console.log(fullName);
            }
            else{ console.log("Enter your lastname again!") }
        }
        else{ console.log("Enter your firstname again!")}
    }

    generateFullName("Sarah", "AROUS")


    /* Name */

    function generateFullName2(stName, lstName){
        if(typeof stName == "string" && typeof lstName == "string"){

        var fulName = stName + " " + lstName;
        console.log(fulName)
    }else{
console.log("Where is Your firstname and lastname?!")
    }
    }
    generateFullName2("Sar","Sari")


    /* boole */
    
    for (var i=0 ; i<5 ; i++){
      console.log(i);
  }

  // attention cette boucle ne s'arrete pas !!!

  /*  function printIamDev(){
      var x = 0;
      var y = 0;
      while(y < 6 || x < 5){
      console.log("I'm Full Stack JS");
       x ++ ;
       y = y + 2;
       console.log(y)
     }
    }
  printIamDev(); */

  function logIn(userName, password){
      if( userName == "Sarah" && password== "123456789"){
          console.log("succeed");
      }
      else{
          console.log("retry!");
      }
  }
  logIn("Sarah", "123456789");

  function list0(){
    var listed = [];

    for(var i = 0; i<10 ; i++){
         listed [i] = i +1 ;
    }
    console.log(listed);
}

list0()

function list1(){
    var list = [];

    for(var i = 1; i<=10 ; i++){
    list.push (i*2);
}
    console.log(list);
}

list1()

var studentmarks = [10, 12.5 , 15 , 20 , 8]
function classavrage(){
    var sum =0;
for(i = 0 ; i<studentmarks.length ; i++){
    sum = sum + studentmarks[i];
    var avrage = sum / studentmarks.length;
}
console.log(sum);
console.log(avrage);

if(avrage >= 10){
    console.log("Admis")
}else{
console.log("Ajourné")
}
}
classavrage() 
