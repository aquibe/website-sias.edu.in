const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/if/1.jpg"},
                {"id":"2","src":"../../images/gallery/if/2.jpg"},
                

            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')