function Tag({id, name}, store) {
  this.id = id 
  this.name = name 
  store.tags.push(this)
}

Tag.prototype = {
  constuctor: Tag,
  htmlTemp: function() { 
    return `<li class="${this.name}-tag">${this.name}</li>`
  },
  htmlButton: function() {
    return `
      <button class="tag-button" id="${this.name}-button" data-tag="${this.name}">
        ${this.name}
      </button>
      `
  },
  renderSelf: function(postId) {
    let tagsEl = document.querySelector(`#post-${postId}-tags`)
    tagsEl.innerHTML += this.htmlButton()
  },
  posts: function() {
    return store.posts.filter(post => {
      return post.tags.includes(this.name)
    })
  }
}

Tag.findTag = function(tagName) {
  return store.tags.find(tag => {
    return tag.name === tagName
  })
}

// Tag.renderButtons = function(store) {
//   store.tags.map(tag => {
//     tag.renderButton()
//   })
// }


