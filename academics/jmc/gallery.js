const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/jmc/1.jpg"},
                {"id":"2","src":"../../images/gallery/jmc/2.jpg"},
                {"id":"3","src":"../../images/gallery/jmc/3.jpg"},
                {"id":"4","src":"../../images/gallery/jmc/4.jpg"},
                {"id":"5","src":"../../images/gallery/jmc/5.jpg"},
                {"id":"6","src":"../../images/gallery/jmc/6.jpg"},

            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')