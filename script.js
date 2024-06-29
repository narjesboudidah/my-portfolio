let menuIcon=document.querySelector('#menu-icon');
let navbar =document.querySelector('.navbar');
let sections =document.querySelectorAll('.section');
let navLinks =document.querySelectorAll('.header nav a');



window.onscroll =()=>{
    sections.forEach(sec=>{
    let top =window.scrollY;
    let offset= sec.offsetTop-150;
    let height=sec.offsetHeight;
    let id=sec.getAttribute('id');

    if (top >=offset && top< offset +height) {
        navLinks.forEach(
            links=>{
                links.classList.remove ('active');
                document.querySelector('header nav a [href *=' + id + ']').classList.add('active')
            }
        )
    }
})
}

menuIcon.onClick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.addEventListener("DOMContentLoaded", function() {
    // Gestionnaire de soumission de formulaire
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche la soumission du formulaire

        // Récupérer les valeurs des champs du formulaire
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const phoneNumber = document.getElementById('phoneNumber').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message');

        // Valider les champs (exemple simple)
        if (fullName === "" || email === "" || message === "") {
            alert("Veuillez remplir les champs obligatoires.");
            return;
        }

        // Simuler l'envoi des données (vous pouvez remplacer cette partie par un appel API réel)
        fetch('https://example.com/api/send-message', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                fullName: fullName,
                email: email,
                phoneNumber: phoneNumber,
                subject: subject,
                message: message
            })
        })
        .then(response => response.json())
        .then(data => {
            if (data.success) {
                alert("Message envoyé avec succès !");
            } else {
                alert("Échec de l'envoi du message. Veuillez réessayer.");
            }
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert("Une erreur s'est produite. Veuillez réessayer plus tard.");
        });

        // Réinitialiser le formulaire après soumission
        form.reset();
    });

   
});
