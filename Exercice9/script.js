// votre code ici
function checkAge(int) {
    if (int < 18) {
        return "Vous êtes mineur.";
    } else if (int < 65) {
        return "Vous êtes majeur.";
    } else {
        return "Vous êtes senior.";
    }
}

export default checkAge;
