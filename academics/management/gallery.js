const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/ms/1.jpg"},
                {"id":"2","src":"../../images/gallery/ms/2.jpg"},
                {"id":"3","src":"../../images/gallery/ms/3.jpg"},
                {"id":"4","src":"../../images/gallery/ms/4.jpg"},
                {"id":"5","src":"../../images/gallery/ms/5.jpg"},
                {"id":"6","src":"../../images/gallery/ms/6.jpg"},
                {"id":"7","src":"../../images/gallery/ms/7.jpg"},

            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')