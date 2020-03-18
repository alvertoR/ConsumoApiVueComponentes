Vue.component('users',{
    template:'#users-template',
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/albums/50/photos')
        .then((data)=>{
            const listado = data.data.map((user) => {
                return {
                    idAlbum: user.id,
                    title: user.title,
                    picture: user.thumbnailUrl
                }
            });
            
            this.users = listado;
        });
    },
    data (){
        return{
            users:[],
            search: '',
        }
    },
    computed:{
        searchUsers(){
            return this.users.filter((user) =>{
                return user.title.includes(this.search);
            });
        }
    }
});

Vue.component('user',{
    props:['data'],
    template:`#user-template`,
});



new Vue({
    el:'main',

})