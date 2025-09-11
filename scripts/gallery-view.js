const App={
    data(){
        return {
            images:null,
            id:null,
            text:''
        }
    },
    methods:{
        async getData(){            
            let id=document.location.search.substring(1)
            this.id=id
            let d=await fetch(`https://sias.fugipie.in/api/gallery/view/${id}`,{
                method:"GET"
            }).then(function(resp){return resp.json()})
            .then((function(data){
                return data
            })).catch(function(err){
                console.log(err)
            })
            this.changeData(d)
        },
        changeData(data){    
            this.images=data.item.images
            this.text=data.item.text
            setTimeout(startScrolling,300)
        }
    },
   
    created(){
        this.getData()
    } 
}


Vue.createApp(App).mount('#body')