const App={
    data(){
        return {
            isbooks:false,
            books:[]
        }
    },
    methods:{
        async getData(){
            let d=await fetch('https://siasapp.ap-1.evennode.com/api/library',{
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
            this.books=data.books
            if(data.books.length>=4){
                this.isbooks=true
                setTimeout(startBooksSlicks,300)
            }     
            
        }
    },
   
    created(){
        this.getData()
    } 
}


Vue.createApp(App).mount('#body')