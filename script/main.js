const students = [
    {
        name: "Chris Miller",
        subject: "History",
        info: "Failed last exam",
        score: 59
    },
    {
        name: "Courtney Seward",
        subject: "History",
        info: "Has completed all homework",
        score: 91
    },
    {
        name: "Garrett Ward",
        subject: "History",
        info: "Wonderful at helping other students",
        score: 88
    },
    {
        name: "John Dulaney",
        subject: "History",
        info: "Has never missed a class or exam",
        score: 92
    },
    {
        name: "Greg Lawrence",
        subject: "History",
        info: "Sub-par performance all around",
        score: 64
    },
    {
        name: "Leah Duvic",
        subject: "History",
        info: "Wonderful student",
        score: 97
    },
    {
        name: "Jesse Page",
        subject: "History",
        info: "Smokes too much. Distracting.",
        score: 76
    },
    {
        name: "Kevin Haggerty",
        subject: "History",
        info: "Falls asleep in class",
        score: 79
    },
    {
        name: "Max Wolf",
        subject: "History",
        info: "Talks too much",
        score: 83
    },
    {
        name: "Lissa Goforth",
        subject: "History",
        info: "Asks pointless, unrelated questions",
        score: 78
    },
    {
        name: "Tyler Bowman",
        subject: "History",
        info: "When was the last time he attended class?",
        score: 48
    },
    {
        name: "Ray Medrano",
        subject: "History",
        info: "Needs to contribute to in-class discussions",
        score: 95
    }
]

const createStudentComponent = (student , style) => {
    return `
    <div id="student">
    <h1 class="xx-large ${style}">Name: ${student.name}</h1>
    <section class="bordered dashed section--padded">Subject: ${student.subject}</section>
    <aside class"pushRight">Note: ${student.info}</aside>
    <hr>
    </div>
    `
}



const studentContainer = document.querySelector("#container")
for (const student of students) {
   let studentComponent = ""
   if(student.score >= 60) {
       studentComponent = createStudentComponent(student, "passing")
   }
   else {
        studentComponent = createStudentComponent(student, "failing")
   }
        studentContainer.innerHTML += studentComponent


}



const lissa = createStudentComponent(
    "Lissa Goforth",
    "History",
    "Asks pointless, unrelated questions")

const courtney = createStudentComponent(
    "Courtney Seward",
    "History",
    "Has completed all homework")

const greg = createStudentComponent(
    "Greg Lawrence",
    "History",
    "Sub-par performance all around")