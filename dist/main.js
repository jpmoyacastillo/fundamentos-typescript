"use strict";
console.log("Hola TypeScript con Platzi");
// Number
// Explícito
var phone;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error
// Inferido
var phoneNumber = 54234567;
phoneNumber = 123;
// phoneNumber = true // Error
var hex = 0xf00d;
var binary = 10;
var octal = 484;
// Boolean
var isPro = true;
isPro = false;
// isPro = 1; // Error
// Inferido
var isUserPro = false;
isUserPro = true;
// isUserPro = 1; // Error
// String
var username = "jpmoya";
username = "Juan";
// username = true; // Error
// Template String
// Uso del caracter especial `
var userInfo;
userInfo = "\n    User Info:\n    username: ".concat(username, "\n    firstName: ").concat(username + " Aviles", "\n    phone: ").concat(phone, "\n    isPro: ").concat(isUserPro, "\n");
console.log("userInfo", userInfo);
