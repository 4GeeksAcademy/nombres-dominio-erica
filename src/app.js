import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// Declaro las variables:

 let pronoun = ['the', 'our', 'my'];
 let adj = ['great', 'big', 'tiny', 'epic', 'wild'];
 let noun = ['jogger', 'racoon', 'panda', 'ninja'];

 //El bucle p (pronombre), a (adjetivo), n (nombre)

 for (let p=0; p < pronoun.length; p++){
    for (let a = 0; a < adj.length; a++){
        for (let n = 0; n < noun.length; n++){
        let domainName = pronoun[p] + adj[a] + noun [n] + ".com";
            console.log(domainName);
        }
    }
 }

 // Para agregar diferentes extensiones sería lo mismo pero agregando otra variable:

 let pronoun1 = ['your', 'their'];
 let adj1 = ['wild', 'crazy','lazy'];
 let noun1 = [ 'wizard','pilot','unicorn'];
 let extensiones = ['.com','.net','.us','.io']

 for (let p1 = 0; p1 < pronoun1.length; p1++){
    for (let a1 = 0; a1 < adj1.length; a1++){
        for (let n1 = 0; n1 < noun1.length; n1++){
            for (let e = 0; e < extensiones.length; e++){
                let domainWthExtensiones = pronoun1[p1] + adj1[a1] + noun1[n1] + extensiones [e];
                console.log(domainWthExtensiones);
            }
        }
    }
 }