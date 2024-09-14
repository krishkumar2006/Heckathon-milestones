// listing resume
document.getElementById('Resume-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    // Ensure types of inputs
    const nameElement = document.getElementById('name') as HTMLInputElement | null;
    const emailElement = document.getElementById('email') as HTMLInputElement | null;
    const contactElement = document.getElementById('phone') as HTMLInputElement | null;
    const educationElement = document.getElementById('education') as HTMLInputElement | null;
    const skillsElement = document.getElementById('skills') as HTMLInputElement | null;
    const experienceElement = document.getElementById('experience') as HTMLInputElement | null;

    // Check if all input elements are present
    if (nameElement && emailElement && contactElement && educationElement && skillsElement && experienceElement) {
        const name = nameElement.value;
        const email = emailElement.value;
        const phone = contactElement.value;
        const education = educationElement.value;
        const skills = skillsElement.value;
        const experience = experienceElement.value;

        // Resume output
        const resumeOutput = `
            <h1> <b>Resume</b></h1>
            <p><strong>Name:</strong><span contenteditable ="true"> ${name} </span>/p>
            <p><strong>Email:</strong> <span contenteditable ="true">${email} </p>
            <p><strong>Contact:</strong> <span contenteditable ="true">${phone} </p>
            <h2>Education:</h2>
            <p contenteditable ="true">${education}</p>
            <h2>Skills:</h2>
            <p contenteditable ="true">${skills}</p>
            <h2>Experience:</h2>
            <p contenteditable ="true">${experience}</p>
        `;

        // Set resume output in the DOM
        const resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;
        } else {
            console.error("Resume output element is missing in the DOM.");
        }
    } else {
        console.error("One or more input elements are missing.");
    }
});
