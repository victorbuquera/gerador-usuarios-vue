
const app = Vue.createApp({
    data(){
        return {
            firstName: 'Cara',
            email: 'maybe@you.com',
            gender:'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
       async getUser() {
            const res = await fetch('https://rickandmortyapi.com/api/character')
            const { results } = await res.json()
            
            index = Math.floor(Math.random()*20 )

            console.log(results)
            this.firstName = results[index].name
            this.email = results[index].species            
            this.gender = results[index].gender    
            this.picture = results[index].image
        }
    }
})

app.mount('#app')