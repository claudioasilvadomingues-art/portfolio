
function changerContenu() {
  const choix = document.getElementById("choix").value;
  const contenu = document.getElementById("contenu");

  if (choix === "option1") {
    contenu.innerHTML = "<h2>Premier projet HTML</h2><p>Site vitrine simple en HTML et CSS.</p>";
  } 
  else if (choix === "option2") {
    contenu.innerHTML = "<h2>Option 2</h2><p>Contenu pour l'option 2</p>";
  } 
  else if (choix === "option3") {
    contenu.innerHTML = "<h2>Option 3</h2><p>Contenu pour l'option 3</p>";
  } 
  else {
    contenu.innerHTML = "<p>Le contenu changera ici</p>";
  }
}

