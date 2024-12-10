const App={
    data(){
        return {
            ec:[
                {
                    "id": "0",
                    "name": "Dr. Galfar Muhammed Ali",
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
                    "name":"Dr. Mohamed Ali P."
                },
                {
                    "id":"2",
                    "name":"Dr. Azad Moopen"
                },
                {
                    "id":"3",
                    "name":"Mr. Ahammed P.K."
                },
                {
                    "id":"12",
                    "name":"Mr. M.P. Ahammed"
                },
                {
                    "id":"4",
                    "name":"Mr. Mehaboob M.A."
                },
                {
                    "id":"5",
                    "name":"Dr. Amir Ahmed"
                },
                {
                    "id":"6",
                    "name":"Mr. Kunhi Mohammed C.P."
                },
                {
                    "id":"7",
                    "name":"Mr. C.H. Abdul Raheem"
                },
                {
                    "id":"8",
                    "name":"Mr. Ameer Ahamed"
                },
                {
                    "id":"9",
                    "name":"Dr. Abdussalam Ahmad"
                },
                {
                    "id":"10",
                    "name":"Mr. Abdul Azeez K.V"
                },
                {
                    "id":"11",
                    "name":"Ms. Khadeeja Z. Mohamed Ali"
                },
               
                {
                    "id":"13",
                    "name":"Dr. Ataat R Khan"
                },
                {
                    "id":"14",
                    "name":"Mr. Babu Moopan M.A.M."
                },
                {
                    "id":"15",
                    "name":"Dr. Habeeb Rahman C. P."
                },
                {
                    "id":"16",
                    "name":"Mr. Imbichammad T.P."
                },
                {
                    "id":"17",
                    "name":"Mr. Kunhammad K.V."
                },
                {
                    "id":"18",
                    "name":"Mr. Mohammed Ali N.K."
                },

                {
                    "id":"20",
                    "name":"Dr. Mubarak Pasha"
                },
                {
                    "id":"21",
                    "name":"Mr. Najeeb C.M."
                },
                {
                    "id":"22",
                    "name":"Mr. Yusuf Nalwala"
                }
            ],
            ot:[
                {
                    "id":"1",
                    "name":"Mr. P.V. Abdul Wahab"
                },
                {
                    "id":"2",
                    "name":"Mr. Y. Abdulla Kunhi"
                },
                {
                    "id":"3",
                    "name":"Mr. Abdul Jabbar"
                },
                {
                    "id":"4",
                    "name":"Mr. M.P. Abdussamad Samadani"
                },
                {
                    "id":"5",
                    "name":"Dr. C. K. Ahamad Kutty"
                },
                {
                    "id":"6",
                    "name":"Dr. Ahamed"
                },
                {
                    "id":"7",
                    "name":"Mr. Ajit Ansar Moopen"
                },
                {
                    "id":"8",
                    "name":"Dr. M. Ali"
                },
                {
                    "id":"9",
                    "name":"Mr. Ali K. Hassan"
                },
                {
                    "id":"10",
                    "name":"Mr. Alungal Mohammad"
                },
                {
                    "id":"11",
                    "name":"Mr. S.M Basheer"
                },
                {
                    "id":"12",
                    "name":"Mr. P.P. Hyder Haji"
                },
                {
                    "id":"13",
                    "name":"Mr. Koroth Mohammad"
                },
                {
                    "id":"14",
                    "name":"Mr. E.V. Luqman"
                },
                {
                    "id":"15",
                    "name":"Mr. E.T Mohammed Basheer"
                },
              
                {
                    "id":"18",
                    "name":"Mr. Muhammed Lefeer"
                },
                {
                    "id":"19",
                    "name":"Mr. Mullaveetil Abdu Saleem"
                },
                {
                    "id":"20",
                    "name":"Mr. Nasly Mohammad"
                },
                {
                    "id":"21",
                    "name":"Mr. M. Salahuddin"
                },
                {
                    "id":"22",
                    "name":"Dr. K.K. Usman"
                },
                {
                    "id":"23",
                    "name":"Mr. M. A. Yusuff Ali"
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