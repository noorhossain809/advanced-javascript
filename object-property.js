
const student = [
    {id: 21, name: "Omar sunny"},
    {id: 25, name:  "Mannaaa"},
    {id: 28, name: "kakoli"},
    {id: 30, name: "Dipjol"}
];
// const output = [];
// for(i = 0; i > student.length; i++){
//     const element = student[i];
//     const result = element * element;
//     output.push(result);
    
// }
const names = student.map(s => s.name);
const ids = student.filter(s => s.id);
const bigger = student.find(s => s.id>25);
console.log(bigger);
