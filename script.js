var _a;
(_a = document.getElementById('createResume')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('contact');
    var socialMediaElement = document.getElementById('socialMedia');
    var qualificationElement = document.getElementById('qualification');
    var fieldElement = document.getElementById('field');
    var experienceElement = document.getElementById('experience');
    var skillsElement = document.getElementById('skills');
    if (nameElement && emailElement && contactElement && socialMediaElement && qualificationElement && fieldElement && experienceElement && skillsElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var contact = contactElement.value;
        var socialMedia = socialMediaElement.value;
        var qualification = qualificationElement.value;
        var field = fieldElement.value;
        var experience = experienceElement.value;
        var skills = skillsElement.value;
        var resumeOutput = "\n<h2>Resume</h2>\n<p><strong>Name:</strong> ".concat(name_1, " </p>\n<p><strong>Email:</strong> ").concat(email, " </p>\n<p><strong>Contact:</strong> ").concat(contact, " </p>\n<p><strong>Website Links:</strong> ").concat(socialMedia, " </p>\n\n<h2>Education</h2>\n<p><strong>Qualification: </strong> ").concat(qualification, " </p>\n<p><strong>Field:</strong> ").concat(field, " </p>\n\n<h2>Work Experience</h2>\n<p> ").concat(experience, " </p>\n\n<h2>Top Skills</h2>\n<p><strong>Top Skills</strong> ").concat(skills, " </p>");
        var resumeOutptElement = document.getElementById('createResume');
        if (resumeOutptElement) {
            resumeOutptElement.innerHTML = resumeOutput;
        }
        else {
            console.error('The Resume Elements are missing');
        }
    }
    else {
        console.error("one or more outputs are missing");
    }
});
