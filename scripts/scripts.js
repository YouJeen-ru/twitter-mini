class Twitter {
    constructor(param) {
        this.tweets = new Posts()
        this.elements = {
            listElem: document.querySelector(param.listElem)
        }
    }

    renderPosts() {

    }

    showUserPost() {

    }

    showLikesPost() {

    }

    showAllPost() {

    }

    openModal() {

    }
}


class Posts {
    constructor({ posts = [] } = {}) {
        this.posts = posts
    }

    addPost(tweet) {
        this.posts.push(new Post(tweet))
    }
    deletePost(id) {

    }
    likePost(id) {

    }
}


class Post {
    constructor(param) {
        this.id = param.id
        this.userName = param.userName
        this.nickName = param.nickName
        this.postDate = param.postDate
        this.text = param.text
        this.img = param.img
        this.likes = param.likes
        this.liked = false
    }
    changeLike() {
        this.liked = !this.liked
        if (this.liked) {
            this.likes++
        } else {
            this.likes--
        }
    }
}

const twitter = new Twitter({
    listElem: '.tweet-list'
})

console.log('twitter',twitter)