var _a;
// listing resume
(_a = document.getElementById('Resume-form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    // Ensure types of inputs
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var contactElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var skillsElement = document.getElementById('skills');
    var experienceElement = document.getElementById('experience');
    // Check if all input elements are present
    if (nameElement && emailElement && contactElement && educationElement && skillsElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = contactElement.value;
        var education = educationElement.value;
        var skills = skillsElement.value;
        var experience = experienceElement.value;
        // Resume output
        var resumeOutput = "\n            <h1> <b>Resume</b></h1>\n            <p><strong>Name:</strong><span contenteditable =\"true\"> ".concat(name_1, " </span></p>\n            <p><strong>Email:</strong> <span contenteditable =\"true\">").concat(email, " </p>\n            <p><strong>Contact:</strong> <span contenteditable =\"true\">").concat(phone, " </p>\n            <h2>Education:</h2>\n            <p contenteditable =\"true\">").concat(education, "</p>\n            <h2>Skills:</h2>\n            <p contenteditable =\"true\">").concat(skills, "</p>\n            <h2>Experience:</h2>\n            <p contenteditable =\"true\">").concat(experience, "</p>\n            <button> Download as pdf<button>\n        ");
        // Set resume output in the DOM
        var resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        }
        else {
            console.error("Resume output element is missing in the DOM.");
        }
    }
    else {
        console.error("One or more input elements are missing.");
    }
});
