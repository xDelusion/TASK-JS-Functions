/**
 * Task 1:
 * Create a function named `printName`
 * - that just prints your name on the screen
 */
function printName(Name) {
    console.log(Name)
    return Name;
}

printName("Abdullah");
/**
 * Task 2:
 * Create a function named `printAge`
 * - that takes a birth year as a parameter,
 * - and prints the age on the screen.
 * - Age = current year - birth
 */
function printAge(birthYear) {   
    const age = 2023 - birthYear;
    console.log(age);
}
(printAge(1998));
/**
 * Task 3:
 * Create a function named `printHello`
 * - that takes 2 parameters, name, and language
 * - language can be passed in different values, here are the accepted values:-
 * -- en: it should print `Hello NAME`
 * -- es: it should print `Hola NAME`
 * -- fr: it should print `Bonjour NAME`
 * -- tr: it should print `Merhaba NAME`
 */
function printHello(name, language) {
  if (language === "en") {
    console.log(`Hello ${name}`)
  } else if (language === "es") {
    console.log(`Hola ${name}`)
  } else if (language === "fr") {
    console.log(`Bonjour ${name}`)
  } else if (language === "tr") {
    console.log(`Merhaba ${name}`)
  }
  else {
    console.log("Unavailable")
  }
}  
  printHello("Abdullah", "en");  
//   when invoking printHello and add parameters if there was text you input them as strings
//   printHello should be out of the curly brackets of the function to invoke it

/**
 * Task 4:
 * Create a function named `printMax`
 * - that takes 2 parameters as numbers
 * - should print out the bigger number
 */
function printMax(num1, num2) {
    if (num1 > num2) {
        console.log(num1);
}
}
printMax(2, 1);