// *************** Array Destructuring ***********************

// Destructuring System 1
const numbers = [10, 20];
const [a, b] = numbers;

console.log(a,b);



// Destructuring System 2
function calculate (num1, num2){
const sum = [num1, num2];       //Using Function
return sum;

}

console.log(calculate(20,30));


// Destructuring System 3

const hero ={
    name: 'sakib khan',
    age: 32,
    movies: ['Priotoma', 'Toofan']
}

const [movie1, movie2] = hero.movies
console.log(movie1,movie2);




// *************** Object Destructuring ***********************

const info = { Name: "Ridoy", Profession: "FrontEnd Developer", Experience: '2 years' }
const { Name, Profession, Experience } = info;
console.log("Name is:",Name, "Profession is:",Profession, 'ExperienceOn:',Experience);



// __________________Different system_________________________
const employee = {
    name: 'shuvo',
    designation: 'FrontEnd Developer',

 about: {
    skill: ['html', 'css', 'javascript', 'react'],
    extraSkill: ['English good', 'Leadership']
}
}

const {skill, extraSkill}=employee.about;
console.log(skill,extraSkill);
