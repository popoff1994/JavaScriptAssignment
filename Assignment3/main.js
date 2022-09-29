const app = Vue.createApp({
    data(){
        return{
            message:'',
            duplicatedMessage:'',
            number: null,
            result:'',
            errorMessage:'Number must be positive'
        }
    },
    methods:{
        duplicateString(){
            this.duplicatedMessage = this.message.repeat(this.number)
        }
    }
})
