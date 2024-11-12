const App={
    data(){
        return {
            images:[
                {"id":"4","src":"../../images/gallery/bt/10.jpeg"},
                {"id":"6","src":"../../images/gallery/bt/12.jpeg"},
                {"id":"2","src":"../../images/gallery/bt/8.jpeg"},
                {"id":"3","src":"../../images/gallery/bt/9.jpeg"},            
                {"id":"5","src":"../../images/gallery/bt/11.jpeg"},
                {"id":"7","src":"../../images/gallery/bt/13.jpeg"},
                {"id":"8","src":"../../images/gallery/bt/14.jpeg"},
                {"id":"1","src":"../../images/gallery/bt/7.jpeg"},
            ]
        }
    }
    
}


Vue.createApp(App).mount('#page-content')