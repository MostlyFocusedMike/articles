function Post({id, title, url, img, snippet, tags}, store) {
  this.id = id
  this.title = title
  this.url = url
  this.img = img 
  this.snippet = snippet
  this.tags = tags
  store.posts.push(this)
}

Post.prototype = {
  constructor: Post, 
  
  htmlTemp: function() {
    return `
      <div class="post-d" id="post-${this.id}-d">
        <a id="post-${this.id}-img-link" href="${this.url}">
          <img id="post-${this.id}-img" src="${this.img}" alt="${this.title} image" />
        </a>
        <h2 id="post-${this.id}-title">${this.title}</h2>
        <p id="post-${this.id}-snippet">${this.snippet}</p>
        <a href="${this.url}">VIEW FULL STORY</a>
        <div class="tags-d" id="post-${this.id}-tags" data-tag="${this.name}">
        </div>
      </div>
    `
  },

  renderTags: function() {
    this.tags.forEach(tagName=> {
      Tag.findTag(tagName).renderSelf(this.id) 
    })
  },

  renderSelf: function() {
    this.constructor.holder.innerHTML = this.htmlTemp() + allPostsEl.innerHTML
    this.renderTags()
  },


}
Post.holder = document.querySelector("#all-posts-d")

Post.clearAll = function() {
  this.holder.innerHTML = ""
}

Post.renderAll = function() {
  Post.clearAll()
  store.posts.map(post => {
    post.renderSelf()
  })
}
Post.renderByTagName = function(tagName){
  Post.clearAll()
  Tag.findTag(tagName).posts().forEach(post => {
    post.renderSelf()
  })
}
