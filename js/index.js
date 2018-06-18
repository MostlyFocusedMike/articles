console.log("index");
// document.addEventListener("DOMContentLoaded", init)
// make page


// functions 
function loadPosts() {
  PostAdapter.getAll()
    .then(dbPosts => 
      dbPosts.map(dbPost => new Post(dbPost, store))
    )
    .then(memPosts => 
      memPosts.map(memPost => {
        memPost.renderSelf()
      })
    )
    .then(r => localStorage.posts = JSON.stringify(store.posts))
}

function loadTags() {
  TagAdapter.getAll()
    .then(dbTags => {
      dbTags.map(dbTag => new Tag(dbTag, store))
      // Tag.renderButtons(store)
    })
}





// variables 
const store = {posts: [], tags: []}
let allPostsEl = document.querySelector("#all-posts-d")
let formEl = document.querySelector("form")
let selectEl = document.querySelector("select")
// events 

formEl.addEventListener("submit", (e) => {
  e.preventDefault()
  if (selectEl.value === "all") {
    Post.renderAll()
  } else {
    Post.renderByTagName(selectEl.value)
  }
})

allPostsEl.addEventListener("click", (e) => {
  if (e.target.className === "tag-button") {
    Post.renderByTagName(e.target.dataset.tag) 
  }
})

document.querySelector("#show-all").addEventListener("click", (e) => {
  Post.renderAll()
})



// render Page
function init(store) {
  loadTags()
  loadPosts()
}
init(store)



