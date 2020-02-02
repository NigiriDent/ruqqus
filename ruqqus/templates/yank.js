// Yank Post

yank_postModal = function(id, author, comments, points, thumb, title, author_link, domain, timestamp) {

  // Passed data for modal

  document.getElementById("post-author").textContent = author;

  document.getElementById("post-comments").textContent = comments;

  document.getElementById("post-points").textContent = points;

  document.getElementById("post-thumb").textContent = thumb;

  document.getElementById("post-title").textContent = title;

  document.getElementById("post-author-url").href = author_link;

  document.getElementById("post-domain").textContent = domain;

  document.getElementById("post-timestamp").textContent = timestamp;

  document.getElementById("yankpostButton").onclick = function() {

    this.innerHTML='<span class="spinner-border spinner-border-sm mr-2" role="status" aria-hidden="true"></span>Yanking post';
    this.disabled = true;
    post('/mod/take/' + id,
      callback = function() {

        location.reload();
      }
      )
  }

};