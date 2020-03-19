<template id="post">
    <div>
        <h3>{{post.title}}</h3>
        <strong>Body : </strong>
        <div>
            {{post.body}}
        </div>
        <router-link :to="'/'"> Back to Post list </router-link>
    </div>
</template>
<script>
export default {
    data () {
        return {
            post : {
                title : "",
                body : ""
            }
        }
    },
    created : function () {
        let uri = 'http://localhost:8000/posts/'+this.$route.params.id;
        Axios.get(uri).then((response) => {
            console.log(response.data);
            this.post = response.data;
        });
    }
}
</script>
<style scoped>

</style>