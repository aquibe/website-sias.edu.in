const App={
    data(){
        return {
            images:[
                {"id":"1","src":"../../images/gallery/mb/1.jpg"},
                {"id":"2","src":"../../images/gallery/mb/2.jpg"},
                {"id":"3","src":"../../images/gallery/mb/3.jpg"},
                {"id":"4","src":"../../images/gallery/mb/4.jpg"},
                {"id":"5","src":"../../images/gallery/mb/5.jpg"},
                {"id":"6","src":"../../images/gallery/mb/6.jpg"},
                {"id":"7","src":"../../images/gallery/mb/7.jpg"},
                {"id":"8","src":"../../images/gallery/mb/8.jpg"},


            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')