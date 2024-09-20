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
            <h1><b>Resume</b></h1>
            <p><strong>Name:</strong> <span contenteditable="true">${name}</span></p>
            <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
            <p><strong>Contact:</strong> <span contenteditable="true">${phone}</span></p>
            <h2>Education:</h2>
            <p contenteditable="true">${education}</p>
            <h2>Skills:</h2>
            <p contenteditable="true">${skills}</p>
            <h2>Experience:</h2>
            <p contenteditable="true">${experience}</p>
            <button id="download-pdf">Download as PDF</button>
        `;

        // Set resume output in the DOM
        const resumeOutputElement = document.getElementById('resumeoutput');
        if (resumeOutputElement) {
            resumeOutputElement.innerHTML = resumeOutput;

            // Add event listener for PDF download button
            const downloadButton = document.getElementById('download-pdf');
            if (downloadButton) {
                downloadButton.addEventListener('click', function() {
                    const { jsPDF } = (window as any).jspdf;
                    const doc = new jsPDF();

                    // Add content to the PDF
                    doc.setFontSize(18);
                    doc.text("Resume", 10, 10);
                    doc.setFontSize(12);
                    doc.text(`Name: ${name}`, 10, 20);
                    doc.text(`Email: ${email}`, 10, 30);
                    doc.text(`Contact: ${phone}`, 10, 40);
                    doc.text("Education:", 10, 50);
                    doc.text(education, 10, 60);
                    doc.text("Skills:", 10, 70);
                    doc.text(skills, 10, 80);
                    doc.text("Experience:", 10, 90);
                    doc.text(experience, 10, 100);

                    // Download the PDF
                    doc.save(`${name}-Resume.pdf`);
                });
            }
        } else {
            console.error("Resume output element is missing in the DOM.");
        }
    } else {
        console.error("One or more input elements are missing.");
    }
});
