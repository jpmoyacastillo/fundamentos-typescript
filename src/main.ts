console.log("Hola TypeScript con Platzi");

// Number
// Explícito
let phone: number;
phone = 1;
phone = 54234567;
// phone = 'hola'; // Error

// Inferido
let phoneNumber = 54234567;
phoneNumber = 123;

// phoneNumber = true // Error

let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

// Boolean
let isPro: boolean = true;
isPro = false;
// isPro = 1; // Error

// Inferido
let isUserPro = false;
isUserPro = true;
// isUserPro = 1; // Error

// String
let username: string = "jpmoya";
username = "Juan";
// username = true; // Error

// Template String
// Uso del caracter especial `
let userInfo: string;
userInfo = `
    User Info:
    username: ${username}
    firstName: ${username + " Aviles"}
    phone: ${phone}
    isPro: ${isUserPro}
`;
console.log("userInfo", userInfo);
