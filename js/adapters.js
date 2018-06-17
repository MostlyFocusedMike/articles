const PostAdapter = {
  url: "db.json",

  getAll: function() {
    return fetch(this.url)
      .then((response) => response.json())
      .then((response) => response.posts) // remove once you get real server
  }
}
const TagAdapter = {
  url: "db.json",

  getAll: function() {
    return fetch(this.url)
      .then((response) => response.json())
      .then(res => res.tags) // remove once you get real server
  }
}
