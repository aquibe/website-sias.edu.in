const App={
    data(){
        return {
            events:[],
            gallery:[]
        }
    },
    methods:{
        async getDataE(){
            let d=await fetch('https://siasapp.ap-1.evennode.com/api/department/la/events',{
                method:"GET"
            }).then(function(resp){return resp.json()})
            .then((function(data){
                return data
            })).catch(function(err){
                console.log(err)
            })
            console.log(d)
            this.changeDataE(d)
        },
        changeDataE(data){        
            this.events=data.events
        },
        async getDataG(){
            let d=await fetch('https://siasapp.ap-1.evennode.com/api/department/la/gallery',{
                method:"GET"
            }).then(function(resp){return resp.json()})
            .then((function(data){
                return data
            })).catch(function(err){
                console.log(err)
            })
            console.log(d)
            this.changeDataG(d)
        },
        changeDataG(data){        
            this.gallery=data.gallery
        }
    },
   
    created(){
        this.getDataE()
        this.getDataG()
    } 
    
}


Vue.createApp(App).mount('#page-content')