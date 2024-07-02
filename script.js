var header = document.getElementById("myheader");
header.style="color: black; background-color: yellow;"

function addCourse() {
    let courseContainer = document.getElementById('courses');
    let newCourse = document.createElement('div');
    newCourse.classList.add('course');
    newCourse.innerHTML = `
        <label>Course Grade: 
            <input type="text" class="grade" placeholder="A, B, C, etc.">
        </label>
        <label>Credits: 
            <input type="number" class="credits" placeholder="3, 4, etc.">
        </label>
    `;
    courseContainer.appendChild(newCourse);
}
function calculateGPA() {
    let grades = document.getElementsByClassName('grade');
    let credits = document.getElementsByClassName('credits');
    let Points = 0;
    let totalCredits = 0;

    for (let i = 0; i < grades.length; i++) {
        let grade = grades[i].value.toUpperCase();
        let credit = parseFloat(credits[i].value);

        Credits += credit;
        Points += gradeToPoints(grade) * credit;
    }

    let gpa = Points / Credits;
    document.getElementById('result').innerText = `Final GPA: ${gpa}`;
}
function gradeToPoints(grade) {
    switch (grade) {
        case 'A': return 4.0;
        case 'A-': return 3.7;
        case 'B+': return 3.3;
        case 'B': return 3.0;
        case 'B-': return 2.7;
        case 'C+': return 2.3;
        case 'C': return 2.0;
        case 'C-': return 1.7;
        case 'D+': return 1.3;
        case 'D': return 1.0;
        case 'F': return 0.0;
        default: return 0.0;
    }
}
