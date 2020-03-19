<template>
    <div>
        <h3>Delete post : {{post.title}}</h3>
        <form v-on:submit.prevent = "deletePost">
            <button class="btn btn-warning" type="submit" name="button">Delete</button>
            <router-link
                class="btn btn-primary"
                to="'/'"
            >
            Back
            </router-link>
        </form>
    </div>
</template>
<script>
export default {
    data () {
        return {
            post : {
                title : "",
                body  : ""
            }
        }
    },
    created : function () { 
        let uri = "http://localhost:8000/posts/"+this.$route.params.id+'/edit';
        Axios.get(uri).then((response) => {
            this.post = response.data;
        });
    },
    methods : {
        deletePost : function () {
            let uri = "http://localhost:8000/posts/"+this.$route.params.id;
            Axios.delete(uri, this.post).then((response) => {
                this.$router.push({name: 'Listpost'});
            })
        }
    }
}
</script>