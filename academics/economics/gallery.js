const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/eco/1.jpg"},
                {"id":"2","src":"../../images/gallery/eco/2.jpg"},
                {"id":"3","src":"../../images/gallery/eco/3.jpg"},
                {"id":"4","src":"../../images/gallery/eco/4.jpg"},
                {"id":"5","src":"../../images/gallery/eco/5.jpg"},
                {"id":"6","src":"../../images/gallery/eco/6.jpg"},
                

            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')