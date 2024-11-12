const App={
    data(){
        return {
            contents:[
                {
                    "id":"1",
                    "src":"https://www.youtube.com/embed/X0a-3nvsr70"
                },
                {
                    "id":"2",
                    "src":"https://www.youtube.com/embed/TfvcgayJzAA"
                },
                {
                    "id":"3",
                    "src":"https://www.youtube.com/embed/c1_R2zm9KNE"
                },
                {
                    "id":"4",
                    "src":"https://www.youtube.com/embed/EaUzJ4VZPXc"
                },
                {
                    "id":"5",
                    "src":"https://www.youtube.com/embed/CIFbwnSPLCA"
                },
                {
                    "id":"6",
                    "src":"https://www.youtube.com/embed/qI3JfCu-fN4"
                },
                
            ],
            sortedContents:[]
        }
    },
    mounted(){
        this.sortedContents=this.contents.reverse().slice(0,6)
    }
}


Vue.createApp(App).mount('#page-content')