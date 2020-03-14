<template id="post-list">
    <div class="row">
        <div class="pull-right">
            <router-link class="btn btn-xs btn-primary"  v-bind:to="{path: '/add-post'}">
                Add post    
            </router-link>
            <br><br>
        </div>
        <table class="table table-bordered">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Post Title</th>
                    <th>Post Body</th>
                    <th>Created At</th>
                    <th>Updated At</th>
                    <th class="col-md-2">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(post,index) in filteredPosts" :key="index">
                    <td class="col-md-1">{{index + 1}}</td>
                    <td class="col-md-2">{{post.title}}</td>
                    <td class="col-md-4">{{post.body}}</td>
                    <td>{{post.created_at}}</td>
                    <td>{{post.updated_at}}</td>
                    <td>
                        <router-link class="btn btn-info btn-xs" :to="{name:'Viewpost', params : {id : post.id}}">Show </router-link>
                        <router-link class="btn btn-warning btn-xs" :to="{name:'Editpost',params : {id : post.id}}">Edit </router-link>
                        <router-link class="btn btn-danger btn-xs" :to="{name:'Deletepost', params : { id : post.id } }" > Delete </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
   data() {
       return {
           posts : ""
       }
   },
   created : function() {
       let baseUri = 'http://localhost:8000/posts';
       Axios.get(baseUri)
       .then((response) => {
           this.posts = response.data;
       })
   },
    computed : {
        filteredPosts : function() {
            if(this.posts.length) {
                return this.posts;
            }
        }
    }
}
</script>
<style scoped>

</style>