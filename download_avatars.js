var request = require("request");
var fs = require('fs');
var GITHUB_USER = "Lucia416";
var GITHUB_TOKEN = "ce9a634450fd399dcfae5f7d39ad18b106d5466c";
console.log('Welcome to the GitHub Avatar Downloader');


function getRepoContributors(repoOwner, repoName, cb) {
  var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';

  var option = {url : requestURL, headers: {'User-Agent': "GitHub Avatar Downloader - Student Project" } };
  //
  request(option, cb);
}


getRepoContributors("jquery", "jquery", function(err, result, body) {
  var parse = JSON.parse(body);
  parse.forEach(function(name){
    downloadImageByURL(name.avatar_url, name.login);
  })
  function downloadImageByURL(url, filePath) {
    request.get(url)
    .pipe(fs.createWriteStream(`./Avatar/${filePath}.jpg`));
    // ...
  }
/*
  console.log("Errors:", err);
  console.log("Result:", body); */
});
