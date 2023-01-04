<template>
  <div class="post-list">
            <div v-for="post in posts" :key="post.id">
                <SinglePost :post="post" />
            </div>
  </div>
</template>

<script>
import { onMounted, onUnmounted, onUpdated } from '@vue/runtime-core'
import SinglePost from './SinglePost.vue'
export default {
    props: ['posts'],
    components: { SinglePost },
    setup(props) {
        onMounted(() => {
            console.log('comp mounted');
        })
        onUnmounted(() =>  console.log('comp unmounted'))
        onUpdated(() => console.log('Updated'))
    }
}
</script>

<style>

</style>