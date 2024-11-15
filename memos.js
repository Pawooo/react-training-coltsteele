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

function increaseScore(id) {
    // When map runs on oldp, it does create a new array, but without using setParticipants(updatedArray), React doesn’t know that participants was updated. This is because React relies on setParticipants to detect state changes and trigger re-renders.
    // const oldp = participants;
    // oldp.map(i => {
    //     if(i.id === id) {
    //         return {...i, score: i.score + 1};
    //     } else {
    //         return i;
    //     }
    // })
    // console.log(oldp);
    // setParticipants(oldp);
    setParticipants(oldp => oldp.map(i => {
        if (i.id === id) {
            return {...i, score: i.score + 1};
            // i.id === id ? { ...i, score: i.score + 1 } : i
        } else {
            return i;
        }
    }))
 }

//  Multiple Fields Signup Form basic pattern
const [formData, setFormData] = useState({
    firstName: "",
    lastName: ""
});

function handleChange(evt) {
    const fieldName = evt.target.name;
    const value = evt.target.value;

    setFormData(currData => {
        currData[fieldName] = value;
        return {...currData};
    })
}

// Alternative syntax
const handleChange = (e) => {
    setFormData(currData => {
        return {
            ...currData;
            [e.target.name]: e.target.value,
        };
    });
  };


// INPUT DATA OnChange handler function structure
onChange={e => handleChange(e)} (Arrow Function Wrapper)

// This version wraps the handleChange function call inside an arrow function. Here’s what it does:

// Every time the onChange event triggers, a new arrow function is created, and handleChange is called with the event as an argument.
// This is generally equivalent to onChange={handleChange}, but creating a new function on each render can have minor performance implications if there are many such inputs.

// This structure is sometimes useful if you want to add extra functionality, or if the function needs arguments besides the event object, as in:

onChange={e => handleChange(e, someOtherArgument)}

onChange={handleChange} (Direct Reference)

// This version directly passes the handleChange function to onChange, which is cleaner and more concise.

// onChange automatically passes the event object to handleChange as its first argument, so there's no need for an arrow function.
// It's slightly more efficient since it doesn’t create a new function each time the component renders.