<template>
    <div>
        <h3>Add new Post</h3>
        <form v-on:submit.prevent = "createPost">
            <div class="form-group">
                <label for="title">Title</label>
                <input v-model="post.title" type="text" class="form-control" id="title" placeholder="Enter Post title" required>
            </div>
            <div class="form-group">
                <label for="body">Body</label>
                <textarea v-model="post.body" type="text" rows="10" class="form-control" id="body" required></textarea>
            </div>
        <button type="submit" class="btn btn-primary"> Create Post </button>
        <router-link class="btn btn-warning" :to="'/'"> Cancel</router-link>
        </form>
    </div>    
</template>
<script>
export default {
    data() {
        return {
            post : {
                title : "",
                body  : ""
            }
        }
    },
    methods :{
        createPost : function () {
            let uri = 'http://localhost:8000/posts/';
            Axios.post(uri, this.post).then((response) => {
            this.$router.push({name: 'Listpost'})
            })
        }
    }
}
</script>
<style scoped>

</style>