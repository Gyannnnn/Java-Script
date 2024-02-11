alert("Hello Gyanranjan Patra")
var age = prompt("Enter Your Age");

if (age >= 18) {
    alert("You can drive !");
}
if( age<0 ){
    console.error("Enter A Valid Age !");
}
if(age >15 && age < 18){
    alert("Wait For 18");

}

else {
    alert("You Cannt Drive");
}
var val = confirm("Do you want to see  the Prompt again !")
if (val ) {
    alert("Hello Gyanranjan Patra")
    var age = prompt("Enter Your Age");

    if (age >= 18) {
        alert("You can drive !");
    } else {
        alert("You Cannt Drive");
    }

} else {
    alert("Thank You 😉");
}

