const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/psy/1.jpeg"},
                {"id":"2","src":"../../images/gallery/psy/2.jpeg"},
                {"id":"3","src":"../../images/gallery/psy/3.jpeg"},
                {"id":"4","src":"../../images/gallery/psy/4.jpeg"},
                {"id":"5","src":"../../images/gallery/psy/5.jpeg"},
                {"id":"6","src":"../../images/gallery/psy/6.jpeg"},
             

            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')