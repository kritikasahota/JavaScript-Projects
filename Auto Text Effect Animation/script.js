const containerEl = document.querySelector(".container");

const career = ["Youtuber", "Web developer", "Freelancer", "Instructor"];

let careerIndex = 0;

let characterIndex = 0;

updateCareer();
 
function updateCareer() {
    characterIndex++
    containerEl.innerHTML = `
        <h1>I am ${career[careerIndex].slice(0,1)=== "I" ? "an" : "a"} ${career[careerIndex].slice(0, characterIndex)}</h1>
    `;
    if(characterIndex == career[careerIndex].length){
        careerIndex++;
        characterIndex = 0;
    }
    if(careerIndex == career.length){
        careerIndex = 0;
    }
    setTimeout(updateCareer, 200);
}    