const { createApp } = Vue



createApp({
	data() {
		return {
			emailsList: [],
            
		
		}
	},
	methods: {	
		fetchEmail() {
            for (let i=1; i < 10; i++) {
			   axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((risp) => {
					console.log( risp.data.response)
                    
                        const emailGenerated = risp.data.response
                        this.emailsList.push(emailGenerated)
				});
            }
		},
	},
    created() {
		this.fetchEmail()
	},
	
}).mount('#app')