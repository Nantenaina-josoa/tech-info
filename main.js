const bars_button = document.getElementById('bars_button');
const close_button = document.getElementById('close_button');

bars_button.addEventListener('click', ()=>{
	bars_button.style.display = 'none'
	close_button.style.display = 'block';
});

close_button.addEventListener('click', ()=>{
	bars_button.style.display = 'block'
	close_button.style.display = 'none';
});




document.getElementById("contactForm").addEventListener("submit", function(e) {
    e.preventDefault();

    // Récupération des valeurs du formulaire
    let nom = document.querySelector('input[placeholder="Nom"]').value;
    let email = document.querySelector('input[placeholder="Email"]').value;
    let sujet = document.querySelector('input[placeholder="Sujet"]').value;
    let message = document.querySelector('textarea').value;

    // L'objet params doit utiliser les noms entre {{ }} de ton dashboard
    let params = {
        name: nom,       // Correspond à {{name}} dans ton template
        email: email,     // Correspond à {{email}}
        title: sujet,     // Correspond à {{title}}
        message: message  // Assure-toi d'avoir {{message}} dans le corps (Content) de ton mail
    };

    // Remplace "YOUR_SERVICE_ID" et "YOUR_TEMPLATE_ID" par tes vrais IDs
    // Ton image montre que le Service ID semble être "tech-info"
    emailjs.send("tech-info", "template_vwren97", params)
    .then(function(response) {
        alert("Message envoyé avec succès !");
        document.getElementById("contactForm").reset();
    }, function(error) {
        console.error("Erreur:", error);
        alert("Erreur lors de l'envoi : " + JSON.stringify(error));
    });
});