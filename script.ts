document.getElementById('createResume')?.addEventListener('submit', function(event){
    event.preventDefault();

const nameElement = document.getElementById('name') as HTMLInputElement
const emailElement = document.getElementById('email') as HTMLInputElement
const contactElement = document.getElementById('contact') as HTMLInputElement
const socialMediaElement = document.getElementById('socialMedia') as HTMLInputElement
const qualificationElement = document.getElementById('qualification') as HTMLInputElement
const fieldElement = document.getElementById('field') as HTMLInputElement
const experienceElement = document.getElementById('experience') as HTMLInputElement
const skillsElement = document.getElementById('skills') as HTMLInputElement;

if(nameElement && emailElement && contactElement && socialMediaElement && qualificationElement && fieldElement && experienceElement && skillsElement){
    const name = nameElement.value;
    const email = emailElement.value;
    const contact = contactElement.value;
    const socialMedia= socialMediaElement.value;
    const qualification = qualificationElement.value;
    const field = fieldElement.value;
    const experience = experienceElement.value;
    const skills = skillsElement.value;

    const resumeOutput = `
<h2>Resume</h2>
<p><strong>Name:</strong> ${name} </p>
<p><strong>Email:</strong> ${email} </p>
<p><strong>Contact:</strong> ${contact} </p>
<p><strong>Website Links:</strong> ${socialMedia} </p>

<h2>Education</h2>
<p><strong>Qualification: </strong> ${qualification} </p>
<p><strong>Field:</strong> ${field} </p>

<h2>Work Experience</h2>
<p> ${experience} </p>

<h2>Top Skills</h2>
<p><strong>Top Skills</strong> ${skills} </p>`

const resumeOutptElement = document.getElementById('createResume')
if(resumeOutptElement){
    resumeOutptElement.innerHTML = resumeOutput
}else{
    console.error('The Resume Elements are missing')
}
} else {
    console.error(`one or more outputs are missing`)
}

}
)