// Array Basics:

// a. How do you declare an empty array in JavaScript?

// b. Create an array called colors containing the names of three different colors.

// c. How can you determine the length of an array in JavaScript?


// const arrayData = []
// console.log(arrayData)

// arrayData.push("Red", "Yellow", "Purple")
// console.log(arrayData)
// console.log(`Array length = ${Number.parseInt(arrayData.length)}`)


// Accessing Array Elements:

// a. Given an array fruits with elements "apple," "banana," and "cherry," how do you access the second element ("banana")?

// b. What is the index of the last element in an array, and how can you access it?

// c. Explain the difference between indexing an array with square brackets ([]) and using the array[index] notation.

// const fruits = ["apple" , "banan", "cherry"]
// console.log(fruits[1])
// console.log(fruits.indexOf("cherry"))



// Modifying Arrays:

// a. Add the color "green" to the colors array you created earlier.

// b. Remove the last color from the colors array.

// c. How can you check if a specific element exists in an array?

// const arrayData = []
// console.log(arrayData)
// arrayData.push("Red", "Yellow", "Purple")
// console.log(arrayData)
// arrayData.unshift("Green", "Pink", "White", "Black")
// console.log(arrayData)
// arrayData.pop()
// console.log(arrayData)
// console.log(arrayData.includes("Red"))


// console.log(arrayData.slice(1,4))

function TestColorIteration(NumberOfTimesToIterate)
{
    let ListOfColors = ["Red", "Blue", "Yellow"];
    let Count = ListOfColors.length;

    for(let i = 0; i< NumberOfTimesToIterate; i++)
    {
       console.log(ListOfColors[i % Count])
    }
}
TestColorIteration(3)


// Array Methods:

// a. What is the push() method, and how can you use it to add an element to the end of an array?

// b. Explain the purpose of the pop() method and provide an example of when you might use it.

// c. How does the splice() method work, and when would you use it to modify an array?

