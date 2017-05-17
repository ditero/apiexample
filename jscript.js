var userName = document.getElementById('myText');
var searchBtn = document.getElementById('lookBtn');
var myGitUserName = document.getElementById('githubUserName');


searchBtn.addEventListener('click', function(){
  var url = "https://api.github.com/users/"+userName.value;

  $.get(url).then(function(results){
    myGitUserName.innerHTML = "You have "+JSON.stringify(results.public_repos)+" public repositories";
  })
});
//alert($);
