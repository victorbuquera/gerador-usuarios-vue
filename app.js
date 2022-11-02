const app = Vue.createApp({
    data(){
        return {
            firstName: 'Cara',
            lastName: 'Aleatório',
            email: 'maybe@you.com',
            gender:'male',
            picture: 'https://randomuser.me/api/portraits/men/10.jpg',
        }
    },
    methods: {
       async getUser() {
            const res = await fetch('https://randomuser.me/api')
            const { results } = await res.json()
            
            console.log(results)
        }
    }
})

app.mount('#app')