fetch('https://api.github.com/users/SubhamMishra1204/repos')
  .then(response => response.json())
  .then(repos => {
    const list = document.getElementById('repo-list');
    list.innerHTML = repos.map(repo => `<p><a href="${repo.html_url}" target="_blank">${repo.name}</a></p>`).join('');
  });

