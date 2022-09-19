// affiche dans la console le texte entre guillemets

console.log("je test le JS!")

/*
1.LES VARIABLES:
-les nombres
-les chaines de caractères
-les booleens
-les tableaux 

2.LES CONDITIONS
3.LES BOUCLES
4.LES FONCTIONS
*/


//Les variables
prenom="noemie" //chaine de caractères
age=24; //numerique car sans guillemets

console.log(prenom);

//Les concatenations

console.log("je m'appelle" + prenom +"et j'ai "+ age +"ans")


//Exo
SEL=100
SUCRE=120

console.log("j'ai du sel :" + SEL)
console.log("j'ai du sucre : "+ SUCRE)

//VOUS ECRIVEZ DU CODE :INVERSER LES VARIABLES
//TEMP nouvelle variable qui correspond à nouvelle bouteille
TEMP=SEL
console.log(TEMP);
// sel recoit la valeur sucre
SEL=SUCRE
console.log(SEL);

SUCRE=TEMP

console.log("j'ai du sel : "+ SEL)
console.log("j'ai du sucre :" + SUCRE)

A=100
B=200
C=A+B;//C va contenir 300

prenom="noemie";
nom="petitpas";
pm=prenom+nom
console.log(pm)


//Exo : declarer une variable prix HT contenant 100
//vous allez stocker dans autre variable le prix en TTC

ht=100;
ttc=ht+ht*0.20
console.log(ttc);

let text=("hello world, welcome to the universe.");
let result=text.indexOf("welcome");
console.log(result);

// les conditions
age= 30;
if (age>17) {console.log("vous êtes majeur!")}
if (age<18){console.log("vous êtes mineur")}

//creer une variable contenant une valeur numerique
//indiquer si cette variable est positif ou pas

num=20
if(num<0) {console.log("valeur négative")}
if(num>1) {console.log("valeur positive")}

if(num % 2 == 0 ) {console.log("pair")}
else{console.log(impair)}

/*
Crez des variables
Nom
prenom
Afficher dans la console la variable qui contient le plus de lettres soit le prenom valeur a le plus de lettres et en compte nb
mettre la derniere lettre de la variable en masjuscule
*/

nom= "petitpas"
prenom= "noemie"

nb_nom= nom.length // nombre de lettres du nom
nb_prenom= prenom.length // nombre de lettres du prenom



if(nb_nom > nb_prenom){console.log("le nom qui est " + nom + "contient" + nb_nom + "lettres")}

else{console.log("le prenom qui est " + prenom + "contient" + nb_prenom + "lettres")}

//les boucles
// je veux afficher les nombres de 1 à 1000

/* Je veux démarrer à 0
 Je veux m'arrêter à 1000
 Je veux que à chaque tour tu incremente de 1

 */

for(i=0;i<1000;i=i+1 ) {
    console.log(i)
}

/* Afficher dix fois le caractere etoile
Afficher un carré de 10 étoiles
Afficher la table de 8
Afficher toutes les tables de multiplication
*/

for(let i=0;i<9;i++){
    console.log("*")}




for(i=1;i<10;i=i+1){
    console.log(i)
result= 8*i
console.log ("8*"+ i + "=" + result)
}

for(i=1;i<10;i=i+1){
    console.log(i)
result=1*i
console.log ("1*"+ i +"=" + result)
for(i=2;i<10;i=i+1){
    console.log(i)
result=2*i
console.log ("2*"+ i +"=" + result)}
for(i=3;i<10;i=i+1){
    console.log(i)
result=3*i
console.log ("3*"+ i +"=" + result)}}








