<template>
  <b-container class="posts">
    <b-row class="posts__row">
      <b-col 	sm="6" md="4" v-for="post in filteredPosts" :key="post.id" class="post-wrapping">
        <div class="post post_white" v-if="post">
          <div class="post__header">
            <h3 class="post__title">{{ post.title }}</h3> 
          </div>
          <div class="post__content">
            <p class="post__body">{{ post.body }}</p>
          </div>
          <div class="post__footer">
            <span class="post__author">{{ post.author }}</span> 
          </div>
        </div>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

export default {
  computed: {
    filteredPosts() {
      return this.$store.getters.filteredPosts
    },
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('getPosts')
  }
}
</script>

<style lang="scss">
  .post-wrapping {
    padding: 0 10px 15px 10px; 
  }

  .post {
    
    &_white {
      background: white;
      box-shadow: #64646f33 0px 1px 4px;
      border-radius: 3px;
      padding: 15px;
      word-break: break-word;
    }

    &__title {
      color: #1a73e8;
      font-size: 1.25rem;
    }

    &__author {
      font-size: 0.85rem;
      color: #c0c4c8;
    }
  }
</style>