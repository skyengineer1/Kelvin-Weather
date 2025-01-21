// Declare the constant 'kelvin' to represent a temperature in Kelvin.
const kelvin = 300;

// Convert the Kelvin temperature to Celsius by subtracting 273.
const celsius = kelvin - 273;

// Convert the Celsius temperature to Fahrenheit using the formula:
// Fahrenheit = Celsius * (9/5) + 32
// Use Math.floor to round down the result to the nearest whole number.
const fahrenheit = Math.floor(celsius * (9 / 5) + 32);

// Log the result to the console with a formatted message.
console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`);
