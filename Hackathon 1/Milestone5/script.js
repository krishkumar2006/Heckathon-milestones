var _a;
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
        var email_1 = emailElement.value;
        var phone_1 = contactElement.value;
        var education_1 = educationElement.value;
        var skills_1 = skillsElement.value;
        var experience_1 = experienceElement.value;
        // Resume output
        var resumeOutput = "\n            <h1><b>Resume</b></h1>\n            <p><strong>Name:</strong> <span contenteditable=\"true\">".concat(name_1, "</span></p>\n            <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email_1, "</span></p>\n            <p><strong>Contact:</strong> <span contenteditable=\"true\">").concat(phone_1, "</span></p>\n            <h2>Education:</h2>\n            <p contenteditable=\"true\">").concat(education_1, "</p>\n            <h2>Skills:</h2>\n            <p contenteditable=\"true\">").concat(skills_1, "</p>\n            <h2>Experience:</h2>\n            <p contenteditable=\"true\">").concat(experience_1, "</p>\n            <button id=\"download-pdf\">Download as PDF</button>\n        ");
        // Set resume output in the DOM
        var resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
            // Add event listener for PDF download button
            var downloadButton = document.getElementById('download-pdf');
            if (downloadButton) {
                downloadButton.addEventListener('click', function () {
                    var jsPDF = window.jspdf.jsPDF;
                    var doc = new jsPDF();
                    // Add content to the PDF
                    doc.setFontSize(18);
                    doc.text("Resume", 10, 10);
                    doc.setFontSize(12);
                    doc.text("Name: ".concat(name_1), 10, 20);
                    doc.text("Email: ".concat(email_1), 10, 30);
                    doc.text("Contact: ".concat(phone_1), 10, 40);
                    doc.text("Education:", 10, 50);
                    doc.text(education_1, 10, 60);
                    doc.text("Skills:", 10, 70);
                    doc.text(skills_1, 10, 80);
                    doc.text("Experience:", 10, 90);
                    doc.text(experience_1, 10, 100);
                    // Download the PDF
                    doc.save("".concat(name_1, "-Resume.pdf"));
                });
            }
        }
        else {
            console.error("Resume output element is missing in the DOM.");
        }
    }
    else {
        console.error("One or more input elements are missing.");
    }
});
