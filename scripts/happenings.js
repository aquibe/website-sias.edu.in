const App={
    data(){
        return {
            happenings:[]
        }
    },
    methods:{
        async getData(){
            let d=await fetch('https://siasapp.ap-1.evennode.com/api/happenings',{
                method:"GET"
            }).then(function(resp){return resp.json()})
            .then((function(data){
                return data
            })).catch(function(err){
                console.log(err)
            })
            console.log(d)
            this.changeData(d)
        },
        changeData(data){        
            this.happenings=data.happenings
        }
    },
   
    created(){
        this.getData()
    } 
}


Vue.createApp(App).mount('#body')