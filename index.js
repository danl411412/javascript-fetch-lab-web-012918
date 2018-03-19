function getIssues() {
  const repo = 'danl411412/javascript-fetch-lab'
  // GET /repos/:owner/:repo/issues

  return fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: 'get',
    headers: {
      Authorization: getToken()
    }
  }).then(res => res.json())
  .then(json => showIssues(json))
}

function showIssues(json) {
  let results = document.getElementById('issues');
  for(var i = 0; i < json.length; i++) {
    let issue =
      `<p> Issue Title: ${json[i].title}</p>
      <p> Body: ${json[i].body}</p>`
    results.innerHTML += issue;
  }
}

function createIssue() {
  //POST /repos/:owner/:repo/issues
  const repo = 'danl411412/javascript-fetch-lab'
  let titleRepo = document.getElementById("title").value;
  let bodyRepo = document.getElementById('body').value;

  return fetch(`https://api.github.com/repos/${repo}/issues`, {
    method: "post",

    body: JSON.stringify({title: titleRepo, body: bodyRepo}),
    headers: {
      Authorization: getToken()
    }
  }).then(res => res.json())
  .then(json => getIssues(json))
}

function showResults(json) {
  let results = document.getElementById('results')
  results.innerHTML += `<a href='${json.html_url}'>Repo</a>`
}

function forkRepo() {
  const repo = 'learn-co-curriculum/javascript-fetch-lab'

  //use fetch to fork it!
  return fetch(`https://api.github.com/repos/${repo}/forks`, {
    method: 'post',
    headers: {
      Authorization: getToken()
    }
  }).then(resp => resp.json())
  .then(json => showResults(json))
}

function getToken() {
  //change to your token to run in browser, but set
  //back to '' before committing so all tests pass
  // return 'token d6c96cd7e78b3758c6ad7c12eafb4564ea24eb65'
  return ''
}
