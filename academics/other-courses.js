const App={
    data(){
        return {
            courses:[
                {
                    "id":"1",
                    "name":"Protein Chemistry",
                    "dept":"Dept. of Biotechnology",
                    "year":"2016-2017",
                    "deptid":"BT"
                },
                {
                    "id":"2",
                    "name":"Basics in Financial Market",
                    "dept":"Dept. of Commerce",
                    "year":"2016-2017",
                    "deptid":"COM"
                },
                {
                    "id":"3",
                    "name":"Auditing and Taxation",
                    "dept":"Dept. of Commerce",
                    "year":"2016-2017",
                    "deptid":"COM"
                },
                {
                    "id":"4",
                    "name":"Planning In India",
                    "dept":"Dept. of Economics",
                    "year":"2016-2017",
                    "deptid":"ECO"
                },
                {
                    "id":"5",
                    "name":"Sensory Evaluation",
                    "dept":"Dept. of Food Technology",
                    "year":"2016-2017",
                    "deptid":"FT"
                },
               
                {
                    "id":"7",
                    "name":"Interpretation and report writing",
                    "dept":"Dept. of Islamic Studies",
                    "year":"2016-2017",
                   "deptid":"IS"
                },
                {
                    "id":"8",
                    "name":"Non-Fiction Creative Writing",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2016-2017",
                    "deptid":"JMC"
                },
                {
                    "id":"9",
                    "name":"Digital Photography",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2016-2017",
                    "deptid":"JMC"
                },
                {
                    "id":"10",
                    "name":"Mushroom Cultivation",
                    "dept":"Dept. of Microbiology",
                    "year":"2016-2017",
                    "deptid":"MB"
                },
                {
                    "id":"11",
                    "name":"Principles of Drug Designing",
                    "dept":"Dept. of Biotechnology",
                    "year":"2017-2018",
                    "deptid":"BT"
                },
                {
                    "id":"12",
                    "name":"Finance and Accounting",
                    "dept":"Dept. of Commerce",
                    "year":"2017-2018",
                    "deptid":"COM"
                },
                {
                    "id":"13",
                    "name":"Banking and Wealth Management",
                    "dept":"Dept. of Commerce",
                    "year":"2017-2018",
                    "deptid":"COM"
                },
                {
                    "id":"14",
                    "name":"Green Computing",
                    "dept":"Dept. of Applications",
                    "year":"2017-2018",
                    "deptid":"CA"
                },
                {
                    "id":"15",
                    "name":"Agricultural Economics",
                    "dept":"Dept. of Economics",
                    "year":"2017-2018",
                    "deptid":"ECO"
                },
                {
                    "id":"16",
                    "name":"Plant Design, Location and Equipment Layout",
                    "dept":"Dept. of Food Technology",
                    "year":"2017-2018",
                    "deptid":"FT"
                },
                
                {
                    "id":"18",
                    "name":"Photo Journalism",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2017-2018",
                    "deptid":"JMC"
                },
                {
                    "id":"19",
                    "name":"Citizen Journalism",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2017-2018",
                    "deptid":"JMC"
                },
                {
                    "id":"20",
                    "name":"Basics of Stock Market",
                    "dept":"Dept. of Management Studies",
                    "year":"2017-2018",
                    "deptid":"MS"
                },
                {
                    "id":"21",
                    "name":"Fundamentals of Research in Islamic studies",
                    "dept":"Dept. of Islamic Studies",
                    "year":"2017-2018",
                   "deptid":"IS"
                },
                {
                    "id":"22",
                    "name":"Environmental Laws and Sustainable Development",
                    "dept":"Dept. of Microbiology",
                    "year":"2017-2018",
                    "deptid":"MB"
                },
                {
                    "id":"23",
                    "name":"Experimental Biology",
                    "dept":"Dept. of Biotechnology",
                    "year":"2018-2019",
                    "deptid":"BT"
                },
                {
                    "id":"24",
                    "name":"Computerised Accounting",
                    "dept":"Dept. of Commerce",
                    "year":"2018-2019",
                    "deptid":"COM"
                },
                {
                    "id":"25",
                    "name":"Emerging Trends in International Business",
                    "dept":"Dept. of Commerce",
                    "year":"2018-2019",
                    "deptid":"COM"
                },
                {
                    "id":"26",
                    "name":"Cyber Security",
                    "dept":"Dept. of Applications",
                    "year":"2018-2019",
                    "deptid":"CA"
                },
                {
                    "id":"27",
                    "name":"Basic Econometrics",
                    "dept":"Dept. of Economics",
                    "year":"2018-2019",
                    "deptid":"ECO"
                },
                {
                    "id":"28",
                    "name":"Technology of Sugar and Confectionary",
                    "dept":"Dept. of Food Technology",
                    "year":"2018-2019",
                    "deptid":"FT"
                },
                
                {
                    "id":"30",
                    "name":"Adobe Premiere and Audition for Beginners",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2018-2019",
                    "deptid":"JMC"
                },
                {
                    "id":"31",
                    "name":"Mobile Journalism",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2018-2019",
                    "deptid":"JMC"
                },
                {
                    "id":"32",
                    "name":"Fundamentals of Business Ethics",
                    "dept":"Dept. of Management Studies",
                    "year":"2018-2019",
                    "deptid":"MS"
                },
                {
                    "id":"33",
                    "name":"Food Health and Hygiene",
                    "dept":"Dept. of Microbiology",
                    "year":"2018-2019",
                    "deptshort":"MB"
                },
                {
                    "id":"34",
                    "name":"Food Safety and HACCP",
                    "dept":"Dept. of Microbiology",
                    "year":"2018-2019",
                    "deptid":"MB"
                },
                {
                    "id":"35",
                    "name":"Paper presentation skills",
                    "dept":"Dept. of Islamic Studies",
                    "year":"2018-2019",
                    "deptid":"IS"
                },
                {
                    "id":"36",
                    "name":"Bioinstrumentation",
                    "dept":"Dept. of Biotechnology",
                    "year":"2019-2020",
                    "deptid":"BT"
                },
                {
                    "id":"37",
                    "name":"Fundamentals of Plant Tissue Culture",
                    "dept":"Dept. of Biotechnology",
                    "year":"2019-2020",
                    "deptid":"BT"
                },
                {
                    "id":"38",
                    "name":"Professional Ethics",
                    "dept":"Dept. of Applications",
                    "year":"2019-2020",
                    "deptid":"CA"
                },
                {
                    "id":"39",
                    "name":"Introduction to GST",
                    "dept":"Dept. of Commerce",
                    "year":"2019-2020",
                    "deptid":"COM"
                },
                {
                    "id":"40",
                    "name":"Introduction to Financial Derivatives",
                    "dept":"Dept. of Commerce",
                    "year":"2019-2020",
                    "deptid":"COM"
                },
                {
                    "id":"41",
                    "name":"Marketing Management Essentials",
                    "dept":"Dept. of Commerce",
                    "year":"2019-2020",
                    "deptid":"COM"
                },
                {
                    "id":"42",
                    "name":"Economics of Population",
                    "dept":"Dept. of Economics",
                    "year":"2019-2020",
                    "deptid":"ECO"
                },
                {
                    "id":"43",
                    "name":"Gender Economics",
                    "dept":"Dept. of Economics",
                    "year":"2019-2020",
                    "deptid":"ECO"
                },
                {
                    "id":"44",
                    "name":"Food Tourism",
                    "dept":"Dept. of Food Technology",
                    "year":"2019-2020",
                    "deptid":"FT"
                },
                
                {
                    "id":"46",
                    "name":"Film Appreciation",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2019-2020",
                    "deptid":"JMC"
                },
                {
                    "id":"47",
                    "name":"Adobe Photoshop and Lightroom",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2019-2020",
                    "deptid":"JMC"
                },
                {
                    "id":"48",
                    "name":"Algorithms in Computational biology",
                    "dept":"Dept. of Microbiology",
                    "year":"2019-2020",
                    "deptid":"MB"
                },
                {
                    "id":"49",
                    "name":"Human Micro biome",
                    "dept":"Dept. of Microbiology",
                    "year":"2019-2020",
                    "deptid":"MB"
                },
                {
                    "id":"50",
                    "name":"Research Methodology",
                    "dept":"Dept. of Microbiology",
                    "year":"2019-2020",
                    "deptid":"MB"
                },
                {
                    "id":"51",
                    "name":"Define and formulating research problem",
                    "dept":"Dept. of Islamic Studies",
                    "year":"2019-2020",
                   "deptid":"IS"
                },
                {
                    "id":"52",
                    "name":"Food Safety and HACCP",
                    "dept":"Dept. of Microbiology",
                    "year":"2019-2020",
                    "deptid":"MB"
                },
                {
                    "id":"53",
                    "name":"Introduction to cancer immunology",
                    "dept":"Dept. of Biotechnology",
                    "year":"2020-2021",
                    "deptid":"BT"
                },
                {
                    "id":"54",
                    "name":"Self Awareness and Effective leadership",
                    "dept":"Dept. of Commerce",
                    "year":"2020-2021",
                    "deptid":"COM"
                },
                {
                    "id":"55",
                    "name":"Investment and Portfolio management Specialisation",
                    "dept":"Dept. of Commerce",
                    "year":"2020-2021",
                    "deptid":"COM"
                },
                {
                    "id":"56",
                    "name":"Contributions of Nobel Laurates",
                    "dept":"Dept. of Economics",
                    "year":"2020-2021",
                    "deptid":"ECO"
                },
                {
                    "id":"57",
                    "name":"Sanitation and Hygiene in Food Industries",
                    "dept":"Dept. of Food Technology",
                    "year":"2020-2021",
                    "deptid":"FT"
                },
                {
                    "id":"58",
                    "name":"Food and Health",
                    "dept":"Dept. of Food Technology",
                    "year":"2020-2021",
                    "deptid":"FT"
                },
             
                {
                    "id":"60",
                    "name":"Electronic News Gathering and MOJO",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2020-2021",
                    "deptid":"JMC"
                },
                {
                    "id":"61",
                    "name":"Principles and Practicals of Accounting with basics of IFRS",
                    "dept":"Dept. of Management Studies",
                    "year":"2020-2021",
                    "deptid":"MS"
                },
                {
                    "id":"62",
                    "name":"Microbial Quality Control in Food Industries",
                    "dept":"Dept. of Microbiology",
                    "year":"2020-2021",
                    "deptid":"MB"
                },
                {
                    "id":"63",
                    "name":"Physical and Mental Wellness",
                    "dept":"Dept. of Microbiology",
                    "year":"2020-2021",
                    "deptid":"MB"
                },
                {
                    "id":"64",
                    "name":"Environmental laws and policies",
                    "dept":"Dept. of Microbiology",
                    "year":"2020-2021",
                    "deptid":"MB"
                },
                {
                    "id":"65",
                    "name":"Article composition skills",
                    "dept":"Dept. of Islamic Studies",
                    "year":"2020-2021",
                   "deptid":"IS"
                },
                {
                    "id":"66",
                    "name":"Self development practices",
                    "dept":"Dept. of Psychology",
                    "year":"2020-2021",
                    "deptid":"PSY"
                },
                {
                    "id":"67",
                    "name":"Special approaches of Counselling",
                    "dept":"Dept. of Psychology",
                    "year":"2020-2021",
                    "deptid":"PSY"
                },
                {
                    "id":"68",
                    "name":"Chemiinformatics and Drug Discovery",
                    "dept":"Dept. of Microbiology",
                    "year":"2020-2021",
                    "deptid":"MB"
                },
                {
                    "id":"69",
                    "name":"Life skill development",
                    "dept":"Dept. of Applications",
                    "year":"2020-2021",
                    "deptid":"CA"
                }, 
                {
                    "id":"70",
                    "name":"Experimental Biology",
                    "dept":"Dept. of Biotechnology",
                    "year":"2022-2023",
                    "deptid":"BT"
                },
                {
                    "id":"71",
                    "name":"Introduction to Cancer Immunology",
                    "dept":"Dept. of Biotechnology",
                    "year":"2022-2023",
                    "deptid":"BT"
                },
                {
                    "id":"72",
                    "name":"Banking and Wealth Management",
                    "dept":"Dept. of Commerce",
                    "year":"2022-2023",
                    "deptid":"COM"
                },
                {
                    "id":"73",
                    "name":"Food Industry waste management",
                    "dept":"Dept. of Food Technology",
                    "year":"2022-2023",
                    "deptid":"FT"
                },
                {
                    "id":"74",
                    "name":"Anchoring reporting and news bulletin production",
                    "dept":"Dept. of Journalism & Mass Communication",
                    "year":"2022-2023",
                    "deptid":"JMC"
                },
                {
                    "id":"75",
                    "name":"Business Communication",
                    "dept":"Dept. of Commerce(Islamic Finance)",
                    "year":"2022-2023",
                    "deptid":"IF"
                },
                {
                    "id":"76",
                    "name":"Tally Level 1",
                    "dept":"Dept. of Management Studies",
                    "year":"2022-2023",
                    "deptid":"MS"
                },
                {
                    "id":"77",
                    "name":"Discovering food culture of Malabar",
                    "dept":"Dept. of Islamic Studies",
                    "year":"2022-2023",
                    "deptid":"IS"
                },
                {
                    "id":"78",
                    "name":"Diagnostic techniques in Microbiology",
                    "dept":"Dept. of Microbiology",
                    "year":"2022-2023",
                    "deptid":"MB"
                },    
                {
                    "id":"79",
                    "name":"Flutter and Django with AI",
                    "dept":"Dept. of Applications",
                    "year":"2022-2023",
                    "deptid":"CA"
                },
                {
                    "id":"80",
                    "name":"Special Approaches of Counselling",
                    "dept":"Dept. of Psychology",
                    "year":"2022-2023",
                    "deptid":"PSY"
                },
                {
                    "id":"81",
                    "name":"Feminism in Discourse",
                    "dept":"Dept. of English",
                    "year":"2022-2023",
                    "deptid":"ENG"
                },
                {
                    "id":"82",
                    "name":"Markets of Future and options",
                    "dept":"Dept. of Economics",
                    "year":"2022-2023",
                    "deptid":"ECO"
                },
                {
                    "id":"83",
                    "name":"Introduction to Nanoscience and Nanotechnology",
                    "dept":"Dept. of Physics",
                    "year":"2022-2023",
                    "deptid":"PHY"
                },

            ],
            a5:[],
            a4:[],
            a3:[],
            a2:[],
            a1:[],
            ca:[],
            csai:[],
            mb:[],
            phy:[],
            psy:[],
            ms:[],
            bt:[],
            com:[],
            ft:[],
            eng:[],
            jmc:[],
            bif:[],
            is:[],
            eco:[],
            pa:[]
        }
    },
    methods:{
        sortCourses(){
            this.mb=this.courses.filter((c)=>c.deptid=='MB').reverse();
            this.bt=this.courses.filter((c)=>c.deptid=='BT').reverse();
            this.ft=this.courses.filter((c)=>c.deptid=='FT').reverse();
            this.eng=this.courses.filter((c)=>c.deptid=='ENG').reverse();
            this.psy=this.courses.filter((c)=>c.deptid=='PSY').reverse();
            this.phy=this.courses.filter((c)=>c.deptid=='PHY').reverse();
            this.com=this.courses.filter((c)=>c.deptid=='COM').reverse();
            this.jmc=this.courses.filter((c)=>c.deptid=='JMC').reverse();
            this.eco=this.courses.filter((c)=>c.deptid=='ECO').reverse();
            this.bif=this.courses.filter((c)=>c.deptid=='IF').reverse();
            this.is=this.courses.filter((c)=>c.deptid=='IS').reverse();
            this.ms=this.courses.filter((c)=>c.deptid=='MS').reverse();
            this.ca=this.courses.filter((c)=>c.deptid=='CA').reverse();
            this.pa=this.courses.filter((c)=>c.deptid=='PA').reverse();
            this.csai=this.courses.filter((c)=>c.deptid=="CSAI").reverse()

            this.a7=this.courses.filter((c)=>c.year=='2022-2023')
            this.a6=this.courses.filter((c)=>c.year=='2021-2022')
            this.a5=this.courses.filter((c)=>c.year=='2020-2021')
            this.a4=this.courses.filter((c)=>c.year=='2019-2020')
            this.a3=this.courses.filter((c)=>c.year=='2018-2019')
            this.a2=this.courses.filter((c)=>c.year=='2017-2018')
            this.a1=this.courses.filter((c)=>c.year=='2016-2017')
        }
    },
    mounted(){
        this.sortCourses()
    }
}

Vue.createApp(App).mount('#page-content')