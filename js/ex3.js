//Declare studentList Array
const studentList = [
    {
        firstName: "Allan",
        lastName: "Able",
        scores: [95, 85, 92, 98]
    },
    {
        firstName: "Amy",
        lastName: "Alexander",
        scores: [80, 88, 100]
    },
    {
        firstName: "Betty",
        lastName: "Barns",
        scores: [70, 80, 90, 100]
    },
    {
        firstName: "Bob",
        lastName: "Bones",
        scores: [75, 85, 95, 85]
    },
    {
        firstName: "Cindy",
        lastName: "Chase",
        scores: [95, 90, 92, 98]
    },
    {
        firstName: "Charles",
        lastName: "Chips",
        scores: [88, 99, 90]
    },
];
// TO DO - Write higher order functions / There are many solutions

//Declare cLastNameResults.  Use functions and map a new array of objects

//Output
const cLastNameResult = studentList.filter(list => list.lastName.startsWith("C")).
map(list=>{
    return{
    FirstName: list.firstName,
    lastName: list.lastName,
    minScore: Math.min.apply(null, list.scores),
    maxScore: Math.max.apply(null, list.scores),
    avgGrade: list.scores.reduce((sum, grade)=> sum + grade, 0) / list.scores.length
    };
}
)
console.log(cLastNameResult)