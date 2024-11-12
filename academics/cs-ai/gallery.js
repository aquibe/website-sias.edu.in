const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/cs/1.jpg"},
                {"id":"2","src":"../../images/gallery/cs/2.jpg"},
                {"id":"3","src":"../../images/gallery/cs/3.jpg"},
                {"id":"4","src":"../../images/gallery/cs/4.jpg"},
                {"id":"5","src":"../../images/gallery/cs/5.jpg"},
                {"id":"6","src":"../../images/gallery/cs/6.jpg"},
                {"id":"7","src":"../../images/gallery/cs/7.jpg"},

            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')