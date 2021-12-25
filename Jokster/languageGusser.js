const franc = require("franc");
const lan = require("langs");
const input = process.argv[2];

const langCode = franc(lang);
if(langCode=='und'){
    console.log("SORRY COULD NOT FIGURE IT OUT");
}else {
    const language= langs.where("3",langCode);
    console.log(language.name);
}