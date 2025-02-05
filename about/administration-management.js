const App={
    data(){
        return {
            ec:[
                {
                    "id": "0",
                    "name": "Dr. P. Mohammed Ali (Galfar)",
                    "desg": "Chairman Emeritus",
                    "img": "../images/management/1.jpeg"
                },
                {
                    "id": "1",
                    "name": "Mr. C.H. Abdul Raheem",
                    "desg": "Chairman",
                    "img": "../images/management/7.jpeg"
                },
                {
                    "id": "2",
                    "name": " Mr. Mehaboob M.A.",
                    "desg": "General Secretary",
                    "img": "../images/management/4.jpeg"
                },
                {
                    "id":"3",
                    "name": "Mr. K.V. Abdul Azeez",
                    "desg": "Treasurer",
                    "img": "../images/management/10.jpeg"
                },
                {
                    "id":"4",
                    "name": "Mr. Ameer Ahamed",
                    "desg": "Vice Chairman",
                    "img": "../images/management/8.jpeg"
                },
                {
                    "id":"5",
                    "name": "Dr. Abdussalam Ahmad",
                    "desg": " Vice Chairman",
                    "img": "../images/management/9.jpeg"
                },
                {
                    "id": "6",
                    "name": "Dr. Amir Ahmed",
                    "desg": "Secretary",
                    "img": "../images/management/5.jpeg"
                },
                {
                    "id":"7",
                    "name": "Ms. Khadeeja Z. Mohamed Ali",
                    "desg": "Secretary",
                    "img": "../images/management/11.jpeg"
                },
                
            ],
         
            em:[
                {
                    "id":"1",
                    "name":"Dr. Azad Moopen"
                },
                {
                    "id":"2",
                    "name":"Mr. Ahammed P.K"
                },
                {
                    "id":"3",
                    "name":"Mr. Ahammed M.P"
                },
                {
                    "id":"4",
                    "name":"Mr. Kunhi Mohammed C.P."
                },
                {
                    "id":"5",
                    "name":"Dr. Ataat R Khan"
                },
                {
                    "id":"6",
                    "name":"Mr. Babu Moopan M.A.M."
                },
                {
                    "id":"7",
                    "name":"Dr. Habeeb Rahman C. P."
                },
                {
                    "id":"8",
                    "name":"Mr. Mohammed Ali N.K."
                },
                {
                    "id":"9",
                    "name":"Dr. Mubarak Pasha"
                },
                {
                    "id":"10",
                    "name":"Dr. 18.Mr. Yusuf Nalwala"
                },
                {
                    "id":"11",
                    "name":"Mr. Lefeer Muhamed M"
                },
                {
                    "id":"12",
                    "name":"Mr. Alungal Mohammed"
                },
               
                {
                    "id":"13",
                    "name":"Mr. E.V. Luqman"
                },
                
            ],
            ot:[
                {
                    "id":"1",
                    "name":"Mr. P.V. Abdul Wahab M.P"
                },
                {
                    "id":"2",
                    "name":"Mr. Abdulla Ibrahim"
                },
                {
                    "id":"3",
                    "name":"Mr. Imbichammad T.P"
                },
                {
                    "id":"4",
                    "name":"Mr. K.V Kunhammad"
                },
                {
                    "id":"5",
                    "name":"Mr. C.M Najeeb"
                },
                {
                    "id":"6",
                    "name":"Mr. Y. Abdulla Kunhi"
                },
                {
                    "id":"7",
                    "name":"Mr. Abdul Jabbar"
                },
                {
                    "id":"8",
                    "name":"Mr. M.P. Abdussamad Samadani"
                },
                {
                    "id":"9",
                    "name":"Dr. C. K. Ahamad Kutty"
                },
                {
                    "id":"10",
                    "name":"Dr. Ahamed T"
                },
                {
                    "id":"11",
                    "name":"Mr. Ajit Ansar Moopen"
                },
                {
                    "id":"12",
                    "name":"Dr. M. Ali"
                },
                {
                    "id":"13",
                    "name":"Mr. Ali K. Hassan"
                },
                {
                    "id":"14",
                    "name":"Mr. S.M Basheer"
                },
                {
                    "id":"15",
                    "name":"Mr. P.P. Hyder Haji"
                },
                {
                    "id":"16",
                    "name":"Mr. Koroth Mohammad"
                },
                {
                    "id":"17",
                    "name":"Mr. E.T Mohammed Basheer"
                },
                {
                    "id":"18",
                    "name":"Mr. Mullaveetil Abdu Saleem"
                },
                {
                    "id":"19",
                    "name":"Mr. Nasly Mohammad"
                },
                {
                    "id":"20",
                    "name":"Mr. M. Salahuddin"
                },
                {
                    "id":"21",
                    "name":"Dr.K.K. Usman"
                },
                {
                    "id":"22",
                    "name":"Mr. M. A. Yusuff Ali"
                },
                {
                    "id":"23",
                    "name":"Mr. Anoop Moopen"
                },
                {
                    "id":"24",
                    "name":"Mr. K.E Moidu "
                },
                {
                    "id":"25",
                    "name":"Mr. Abdulla Nalapad"
                },
                {
                    "id":"26",
                    "name":"Mr. Sameer K Mohammed"
                }

            ]
        }
    },
    // mounted(){
    //     this.fetchData()
    // },
    // methods:{
    //     async fetchData(){
    //         var temp;
    //         let req = new Request('https://aquibe.github.io/e-timetable/test.json');
    //         await fetch(req)
    //         .then(function (resp){
    //             return resp.json();
    //         })
    //         .then(function (data){
    //             temp=data.trustees
    //         })
    //         .catch((e)=>{
    //             console.log('error')
    //             console.log(e);
    //         })
    //         this.trustees=temp
    //     }
    // }
}


Vue.createApp(App).mount('#page-content')