const App={
    data(){
        return {
            isupdates:false,
            ishappenings:false,
            isevents:false,
            isnews:false,
            isStdA:false,
            happenings:[],
            events:[],
            updates:[
            ],
            stda:[]
        }
    }, 
    methods:{
        async getData(){
            let d=await fetch('https://siasapp.ap-1.evennode.com/api/home',{
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
            
            this.happenings=data.happenings
            this.events=data.events
            this.updates=data.updates
            this.news=data.news
            this.stda = data.stda
            if(this.updates.length){
                this.isupdates=true
            }
            if(this.happenings.length){   
                this.ishappenings=true    
                setTimeout(startHSlicks,500)
            }
            if(this.events.length){
                setTimeout(startESlicks,500)
                this.isevents=true
            }
            if(this.news.length>=4){
                this.isnews=true
                setTimeout(startNSlicks,500)
            }

            if(this.stda.length>=4){
                this.isStdA=true
                setTimeout(startStdaSlicks,500)
            }
            
        }
    },
    created(){
        this.getData()
    } 
}

Vue.createApp(App).mount('#body')