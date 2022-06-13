/*
    The idea is to have a single page with a toggle on the project's three parts 
    
    there needs to be a test to see which part is toggled with part 1 as a default

    the parts that are affected by the toggle are the input label in part 2 asking 
    for a length and not a word, along with it's output being an expandable textarea

    to do that, there needs to be a variable that will hold which page we're on,
    changing if any other parts are clicked 

*/

//let headerSelector = document.querySelector('[aria-selected="true"]');


//load the page according to the class of the header 
let enonce = document.getElementById('enonce');

let headerSelector = document.getElementById("partie");

//run the querySelector onclick */
document.getElementById('nav-partie1-tab').addEventListener("click",partieSelected1);

document.getElementById('nav-partie2-tab').addEventListener("click",partieSelected2);

document.getElementById('nav-partie3-tab').addEventListener("click",partieSelected3);

////////////////////////////////////// PARTIE 1 ////////////////////////////////////////

function partieSelected1(){
  // Replace the header with Partie 1 Title
  headerSelector.innerHTML="Partie 1: Manipulation et opérations sur les mots"

  //write partie 1 énoncé
  enonce.innerHTML='<h4><strong><u>énoncé:</u></strong></h4><p>Soit lalphabet T={a, b, c}, écrire un programme paramétré qui permet de :</p><p>1) Générer le mot miroir d’un mot quelconque de T*. Ce mot sera donné en entrée à votre programme.</p>';
  enonce.innerHTML+='<label for="input" ><div class="input-group"><input type="text" id="input-text" class="form-control" placeholder="Entrez le mot..."><button type="submit" id="inverse-button" class="btn btn-outline-secondary" title="Générer le mot mirroir">Générer</button>';
  enonce.innerHTML+='<p>2) Générer la puissance n d’un mot quelconque de T*. Le mot et la valeur de n seront donnés en entrée à votre programme.</p>';
  enonce.innerHTML+='<div class="input-group"><div class="input-group-prepend"><span class="input-group-text" id="">Entrez Le mot et la puissance</span></div><input type="text" id="puissance-input-text"class="form-control" placeholder="Entrez le mot..."><input type="text" id="puissance-input-puiss"class="form-control"placeholder="Entrez la puissance..."><button type="submit" id="puiss-button" class="btn btn-outline-secondary" title="Générer la puissance du mot">Générer</button></div>';

  // TODO make puissance input area smaller

  //Display the Output area
  document.getElementById('output-area').innerHTML='<div class="form-group" style="padding: 20px;border-radius:20px;margin: 5px;"><label for="input-code"><h4 style="padding-top:10px;padding-left:10px;"><strong>Output:</strong></h4></label><textarea class="form-control" id="output-text-area" rows="9"readonly></textarea></div>';


  // si le mot n'appartiens pas au language alors afficher une erreur 
  document.getElementById('inverse-button').addEventListener("click", function testLang(){
  if (document.getElementById('input-text').value != ""){

    //clear alert and output textarea on new button press

    document.getElementById('alert-container').innerHTML = '';
    document.getElementById('output-text-area').value ='';
    
    //test if the string contains any characters other than a,b or c
    //if so display an alert, else print out the reversed string 

    if(document.getElementById('input-text').value.match(/[^a-c]/g)!=null){
      document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">Le mot n\'appartiens pas au language!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
    }else{
      document.getElementById('output-text-area').value = document.getElementById('input-text').value.split("").reverse().join("");
    }
   }
}); 


document.getElementById('puiss-button').addEventListener("click", function testPuissLang(){
  document.getElementById('output-text-area').value ='';
  document.getElementById('alert-container').innerHTML = '';

if(document.getElementById('puissance-input-text').value!="" && document.getElementById('puissance-input-puiss').value!=""){
  if(document.getElementById('puissance-input-text').value.match(/[^a-c]/g)!=null){
    document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">Le mot n\'appartiens pas au language!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
  }else if(document.getElementById('puissance-input-puiss').value.match(/[^0-9]/g )== null){

    if(document.getElementById('puissance-input-puiss').value > 0){
    for(let i=1; i<=document.getElementById('puissance-input-puiss').value;i++){
    document.getElementById('output-text-area').value += document.getElementById('puissance-input-text').value;
    }
  }else{
    document.getElementById('output-text-area').value = 'ε';
  }

  }else{
    document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">Veuillez entrer un entier!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
  }

}else{
  document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">Veuillez Remplir tous les champs!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
  document.getElementById('output-text-area').value ='';
}
});
 

  document.getElementById('input-text').addEventListener("keypress", function(even){
    // If the user presses the "Enter" key on the keyboard
    if (even.key === "Enter") {
      document.getElementById("inverse-button").click();
    }
  });
  

  document.getElementById('puissance-input-puiss').addEventListener("keypress", function(even){
    // If the user presses the "Enter" key on the keyboard
    if (even.key === "Enter") {
      document.getElementById("puiss-button").click();
    }
  });
  
}

////////////////////////// PARTIE 2 /////////////////////////////

function partieSelected2(){
  headerSelector.innerHTML="Partie 2 : Langage et grammaires"
  enonce.innerHTML='<h4><strong><u>énoncé:</u></strong></h4><p>Soit un langage L(G) généré par la grammaire G=<T, N, S, P> tel que :</p><p>T={a, b} N={S, A, B, C}</p><p>P : S→AB</p><p>A→aA/bA/ab</p><p>B→bC</p><p>C→aC/bC/ɛ</p><p>Question : Ecrire un programme paramétré qui permet de générer tous les mots de L(G) d’une longueur donnée n (n ≥ 0). Lors de l’évaluation, l’enseignant fixera en entrée n, votre programme devra alorsgénérer tous les mots de L(G) de longueur n.</p>';
  enonce.innerHTML+='<label for="input" ><div class="input-group"><input type="text" id="input-taille" class="form-control" placeholder="entrez la taille des mots..."><button type="submit" id="partie2-button" class="btn btn-outline-secondary">Générer</button></div></label>';
  
  document.getElementById('output-area').innerHTML='<div class="form-group" " style="padding: 20px;border-radius:20px;margin: 5px;"><label for="input-code"><h4 style="padding-top:10px;padding-left:10px;"><strong>Output:</strong></h4></label><textarea class="form-control" id="output-area2" rows="9"readonly></textarea></div>';
  
  //    o.appendChild(document.createTextNode('\u025B')); // epsilon
  //if (~str.indexOf("abb")) to check if abb is contained within the word

  document.getElementById('partie2-button').addEventListener("click", function testPartie2Entier(){

    let taille = document.getElementById('input-taille').value;
    document.getElementById('output-area2').value ='';
    document.getElementById('alert-container').innerHTML = '';
  
   if(taille != ""){
    
    if(taille.match(/[^0-9]/g ) == null){

      if(taille >= 3 && taille <= 14){
        ///////////implementation START
        let startPoint="abb";
        let lengthreduction = 3;
        let numberOfWords = 0;
        
        if (taille == lengthreduction){
          document.getElementById('output-area2').value +='Le seul mot appartenant au langage ayant une longueur de 3 est : \tabb';
        }else if (taille > lengthreduction){
          let modelX ="x";
          for (let i=0 ;i<taille-lengthreduction+1;i++){
            modelX +="x";
          }
          for (let i=1;i<taille-lengthreduction+1;i++){
            let newModelX = modelX.substring(0,i)+startPoint+modelX.substring(i+1);
            recurse(newModelX, 'a');
            recurse(newModelX, 'b');
          }
          document.getElementById('output-area2').value += '\n\n\n Le nombre de mots est : '+numberOfWords+'\n';
        }
        function recurse(X,y){
          let firstOccurrence = X.indexOf('x');
          let newX = X.substring(0, firstOccurrence)+y+X.substring(firstOccurrence+1);
  
          let countOfx = 0;
          for (let i = 0; i < newX.length; i++) {
              if (newX.charAt(i) == 'x') {
                  countOfx++;
              }
          }
          if (countOfx >= 1) {
              recurse(newX, 'a');
              recurse(newX, 'b');
          }
          else if (countOfx == 0) {
              numberOfWords = numberOfWords + 1;
              document.getElementById('output-area2').value += newX +'\t\t';

          }
        }
        //implementation END
      
      }else if(taille < 3){
        document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">La longueur du mot ne peut être inférieure à 3!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
        document.getElementById('output-area').value ='';      
      }else if (taille > 14){       
      document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">La longueur du mot ne peut être supérieure à 14 (faute de ressources)!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
      document.getElementById('output-area').value =''; }
      }else{
      document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">Veuillez entrer un entier >= 3!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
      document.getElementById('output-area').value ='';
    }
  }else{
    document.getElementById('alert-container').innerHTML='<div class="alert alert-warning alert-dismissible fade show" role="alert" style="border-radius:20px;margin: 5px;">Veuillez entrer un entier!<button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button></div>'; 
    document.getElementById('output-area').value ='';
  }
  });

    document.getElementById('input-taille').addEventListener("keypress", function(even){
      // If the user presses the "Enter" key on the keyboard
      if (even.key === "Enter") {
        document.getElementById("partie2-button").click();
      }
    });
    
}
////////////////////////// PARTIE 3 /////////////////////////////

function partieSelected3(){
  headerSelector.innerHTML="Partie 3 : Analyseur syntaxique"

  enonce.innerHTML='<h4><strong><u>énoncé:</u></strong></h4><p>Soit la grammaire G=<T, N, S, P> tel que :</p><p>T={a, b} N={S} P={S→aaSb/Sa/ɛ}</p><p>Question : Ecrire un programme paramétré qui, étant donné un mot quelconque en entrée, vérifie si ce mot appartient au langage L(G). On supposera que ce mot est lexicalement correct, c’est-à-dire qu’il ne comporte que des éléments de l’ensemble T. Lors de l’évaluation, l’enseignant donnera en entrée un mot quelconque et votre programme doit permettre de vérifier si le mot est syntaxiquement correct.</p>'
  enonce.innerHTML+='<label for="input" ><div class="input-group"><input type="text" id="input-text3" class="form-control" placeholder="entrez le mot..."><button type="submit" id="partie3-button" class="btn btn-outline-secondary">Générer</button></div></label>';

  document.getElementById('output-area').innerHTML='<div class="form-group" style="padding: 20px;border-radius:20px;margin: 5px;"><label for="input-code"><h4 style="padding-top:10px;padding-left:10px;"><strong>Output:</strong></h4></label><textarea class="form-control" id="output-area3" rows="9"readonly></textarea></div>';
  // IMPLEMENTATION START
  document.getElementById('partie3-button').addEventListener("click", function testPartie3Mot(){

  if (document.getElementById('input-text3').value!=""){
    let startPoint = "S";
    let toCheck = document.getElementById('input-text3').value;
    let temp = startPoint;
    /*
     A constructor that initializes the string that needs to be checked, as well as the string which we will use in order to check the validity
     of the former.
    */
    function checkString() {
        let counter = 1;
        while (temp.length < toCheck.length+1) {
            if (toCheck.charAt(toCheck.length-counter) == 'b') {
                temp = expandSOne(temp);
            }
            else if (toCheck.charAt(toCheck.length-counter) == 'a') {
                temp = expandSTwo(temp);
            }
            else {
                return false;
            }
            counter = counter + 1;
        }
        temp = sToEpsilon(temp);
        if (temp == toCheck) {
            return true;
        } else {
            return false;
        }
    }
    function expandSOne( S) {
        let position = S.indexOf("S");
        let toBeReturned ;
        if (S == "S") {
            toBeReturned = "aaSb";
        }
        else if (position == 0) {
            toBeReturned = "aaSb" + S.substring(1);
        }
        else {
            toBeReturned = S.substring(0,position) + "aaSb" + S.substring(position+1);
        }
        return toBeReturned;
    }
    function expandSTwo(S) {
        let position = S.indexOf("S");
        let toBeReturned = new String();
        if (S == "S") {
            toBeReturned = "Sa";
        }
        else if (position == 0) {
            toBeReturned = "Sa" + S.substring(1);
        }
        else {
            toBeReturned = S.substring(0,position) + "Sa" + S.substring(position+1);
        }
        return toBeReturned;
    }
    // A method for expanding S into epsilon
    function sToEpsilon(S) {
        return(S.replace("S", ""));
    }
    let param = document.getElementById('input-text3').value;    
    if (checkString()) {
      document.getElementById('output-area3').value = "Le mot \t" + param + "\t appartient au langage";
    } else {
      document.getElementById('output-area3').value =("Le mot \t" + param + "\t n'appartient pas au langage");
    }
  }


});

document.getElementById('input-text3').addEventListener("keypress", function(even){
    // If the user presses the "Enter" key on the keyboard
    if (even.key === "Enter") {
      document.getElementById('partie3-button').click();
    }
  });
}



