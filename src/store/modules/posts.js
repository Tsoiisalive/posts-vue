export default {
  state: {
    posts: [],
    authors: [],
    filteredPosts: [],
    search: '',
  },
  mutations: {
    updatePosts(state, posts) {
        state.posts = posts
    },
    updateAuthors(state, authors) {
        state.authors = authors
    },
    setAuthorName(state) {
      state.posts.forEach(post => {
        post.author = state.authors.find(author => author.id === post.userId).name
      })
    },
    updateSearch(state, value) {
      state.search = value
    }
  },
  actions: {
    async getAuthors(context) {
      try {
        const responce = await fetch('https://jsonplaceholder.typicode.com/users')

        const authors = await responce.json()

        context.commit('updateAuthors', authors)

      } catch (error) {
        console.log(error)
      }
    },
    async getPosts(context) {
      await context.dispatch('getAuthors')

      try {
        const responce = await fetch(`https://jsonplaceholder.typicode.com/posts`)

        const posts = await responce.json()
        
        context.commit('updatePosts', posts)
        context.commit('setAuthorName')  

      } catch (error) {
        console.log(error)
      }
    },   
  },
  getters: {
    search(state) {
      return state.search
    },
    filteredPosts(state) {
      if (state.search === '') {
        return state.posts
      } else {
        return state.posts.filter(post => {
          return post.author.toLowerCase().includes(state.search.toLowerCase())
        })
      }
    }

  },
}