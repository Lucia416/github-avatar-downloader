var request = require("request");
var fs = require('fs');
var GITHUB_USER = "Lucia416";
var GITHUB_TOKEN = "ce9a634450fd399dcfae5f7d39ad18b106d5466c";
console.log('Welcome to the GitHub Avatar Downloader');


function getRepoContributors(repoOwner, repoName, cb) {
 var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

 var option = {url : requestURL, headers: {'User-Agent': "GitHub Avatar Downloader - Student Project" } };
 //creare option per avere dei parametri
 request(option, cb);
 // non c'e' bisogno di scrivere tutta la funzione perche' cb si riferisce al body di sotto
}


getRepoContributors(process.argv[2], process.argv[3], function(err, result, body) {
if(process.argv[2] !== null && process.argv[3] !== null ){
     var parse = JSON.parse(body);
     //il parse lo si fa qui perche' questa funzione e' quella che viene chiamata nella callback
     parse.forEach(function(name){
    //qui si richiama l'ultima funzione perche' la aggiungiamo al foreach in pratica un callback del callback
       downloadImageByURL(name.avatar_url, name.login);
     })
 } else {
   console.log("Error");
 }

 function downloadImageByURL(url, filePath) {
   request.get(url)
   .pipe(fs.createWriteStream(`./Avatar/${filePath}.jpg`));
   // pipe fa scaricare i file e li canalizza dove vuoi...
 }
});
console.log("Images dowloaded!");
