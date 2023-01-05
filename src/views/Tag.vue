<template>
  <div class="tag">
    <h1>#{{ tag }} </h1>
    <div v-if="error"> {{ error }} </div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else> 
      <Spinner />
    </div>
  </div>
</template>

<script>
import getPosts from '../composables/getPosts'
import Spinner from '../components/Spinner.vue'
import PostList from '../components/PostList.vue'
import TagCloud from '../components/TagCloud.vue'

import { useRoute } from 'vue-router'
import { computed } from 'vue'

export default {
components: { PostList, Spinner, TagCloud },
props: ['tag'],
setup() {
    const route = useRoute()

    const tag = route.params.tag

    const { posts, error, load } = getPosts()

    load()

    const filteredPosts = computed(() => {
        return posts.value.filter(p => p.tags.includes(tag))
    })

    return {tag , posts , error, filteredPosts }
}
}
</script>

<style>
    .tag {
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
</style>