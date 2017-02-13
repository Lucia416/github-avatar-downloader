var request = require("request");
var GITHUB_USER = "Lucia416";
var GITHUB_TOKEN = "ce9a634450fd399dcfae5f7d39ad18b106d5466c";
console.log('Welcome to the GitHub Avatar Downloader');


function getRepoContributors(repoOwner, repoName, cb) {
var requestURL = 'https://'+ GITHUB_USER + ':' + GITHUB_TOKEN + '@api.github.com/repos/' + repoOwner + '/' + repoName + '/contributors';
var option = {url : requestURL, headers: {'User-Agent': "GitHub Avatar Downloader - Student Project" } };

  request(option, function (err, result, body){
    cb(err,JSON.parse(body))
  console.log(body);
});
}

getRepoContributors("jquery", "jquery", function(err,body) {
  var avatarArray = [];
  body.forEach(function(name){
    avatarArray.push(body.avatar_url)
  })
  console.log("Errors:", err);
  console.log("Result:", avatarArray);
});
