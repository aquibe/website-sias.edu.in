const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/ft/1.jpg"},
                {"id":"2","src":"../../images/gallery/ft/2.jpg"},
                {"id":"3","src":"../../images/gallery/ft/3.jpg"},
                {"id":"4","src":"../../images/gallery/ft/4.jpg"},
                {"id":"5","src":"../../images/gallery/ft/5.jpg"},
                {"id":"6","src":"../../images/gallery/ft/6.jpg"},
                {"id":"7","src":"../../images/gallery/ft/7.jpg"},

            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')