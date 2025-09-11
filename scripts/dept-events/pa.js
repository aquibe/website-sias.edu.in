const App={
    data(){
        return {
            events:[]
        }
    },
    methods:{
        async getData(){
            let d=await fetch('https://sias.fugipie.in/api/department/pa/events',{
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
            this.events=data.events
        }
    },
   
    created(){
        this.getData()
    } 
}


Vue.createApp(App).mount('#body')