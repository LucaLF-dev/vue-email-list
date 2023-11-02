const { createApp } = Vue



createApp({
	data() {
		return {
			arrayEmails: [],
            email: '',
		
		}
	},
	methods: {	
		fetchEmail() {
			axios
				.get('https://flynn.boolean.careers/exercises/api/random/mail')
				.then((risp) => {
					console.log( risp.data.response)
                    const emailGenerated = risp.data.response
                    this.email = emailGenerated
					
				})
		},
	},
    created() {
		this.fetchEmail()
	},
	
}).mount('#app')