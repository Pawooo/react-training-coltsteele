// Scribbles pertaining to all things JS React from a guy who tries to shake things up

// Arrow functions
// This won't work because it's not named
function(x,y) {
    return x + y;
}

// This will work because it's named
function add (x,y) {
    return x + y;
}

// Same logic extrapolated here
const add = function(x,y) {
    return x + y;
}

// These are the same
const add = (x, y) => {
    return x + y; 
}

// For one argument parenthesis is optional
const square = x => {
    return x * x;
}

// Implicit return taken to extreme
// IT ONLY WORKS IF IT DOES ONLY ONE THING (THAT INCLUDES VARIABLE ASSIGNMENTS)
const add = (a, b) => a + b;

//APIs are about getting parts of data, not HTML and such
// Chaining filters to an API (ampersand &)

URL?sort=desc&color=blue

// The fetch way
fetch(api-URL)
    .then((res) => {
        console.log("RESOLVED", res)
        return res.json();
    })
    .catch((e) => {
        console.log("ERROR", e)
    })

// Axios
const getStarWarsPerson = async () => {
    const res = await axios.get("https://swapi.dev/api/people/1")
}

// Setting the state once even on rerender
// tl;dr
// This will render once and NOT reset the state to generateGameBoard return value
const [board, setBoard] = useState(generateGameBoard); 
// This will reset the state on rerender
const [board, setBoard] = useState(generateGameBoard()); 

function generateGameBoard() {
    console.log("MAKING THE INITIAL GAME BOARD");
    return Array(5000);
}

export default function Dumbo() {
    const [board, setBoard] = useState(generateGameBoard);
    return (
        <button onClick={() => setBoard("hello")}>Click me to set state to something else</button>
    ) 
}

// REACT WILL RERENDER EVERY TIME A SIMPLE STATE IS UPDATED
// IT WILL NOT RERENDER EVERY TIME MUTABLES (OBJECTS, ARRAYS) ARE UPDATED, BECAUSE IN THE MEMORY IT THINKS IT'S THE SAME
// You need to pass an arr/obj to a state to update it, which is why in React people copy the old one and modify specific parts of the copy

// Common React Array Patterns
// ADDING TO AN ARRAY
[...shoppingCart, {id: 4, product: "Coffee Mug", price: 7.99}];
// REMOVING AN ELEMENT
shoppingCart.filter((item) => item.id !== 2);
// UPDATING ALL ELEMENTS IN AN ARRAY
shoppingCart.map((item) => {
    return {
        ...item,
        product: item.product.toLowerCase(),
    }
})
// MODIFYING A PARTICULAR ELEMENT IN AN ARRAY
shoppingCart.map((item => {
    if (item.id === 3) {
        return {...item, price: 10.99}
    } else {
        return item;
    }
}))
