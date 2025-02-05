const App={
    data(){
        return {
            year:'all',
            tableData:[],
            list:[
                
                {
                    "id":"148",
                    "year":"2023",
                    "name":"CONNECTA_Innovative Idea Presentation",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-14-connecta.pdf"
                },
                {
                    "id":"147",
                    "year":"2023",
                    "name":"'CIBO EXOTICA'- Product Development competition for studentprenuers",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-13-cbio.pdf"
                },
                {
                    "id":"146",
                    "year":"2023",
                    "name":"Tech Print- Research Paper presentation series",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-12-tech-print.pdf"
                },
                {
                    "id":"145",
                    "year":"2023",
                    "name":"Workshop on Research Methodology",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-11-rm-commerce-22-23.pdf"
                },
                {
                    "id":"144",
                    "year":"2023",
                    "name":"Research Methodology Workshop on Protein Biochemistry",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-10-protein-biochemistry.pdf"
                },
                {
                    "id":"143",
                    "year":"2023",
                    "name":"Skill Development Programme-Exploring the latest in Science",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-9-journalclub-microbiology-22-23.pdf"
                },
                {
                    "id":"142",
                    "year":"2023",
                    "name":"Workshop on Mushroom Cultivation-Marketing and Consumption",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-8-mushroom-microbio-22-23.pdf"
                },
                {
                    "id":"141",
                    "year":"2023",
                    "name":"One day Workshop on Research Methodology",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-7-rm-economics-22-23.pdf"
                },
                {
                    "id":"140",
                    "year":"2023",
                    "name":"Securing Innovation:Navigating the landscape of IPR",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-6-ipr-physics-22-23.pdf"
                },
                {
                    "id":"139",
                    "year":"2023",
                    "name":"Skill develeoment Programme-Food Akinator",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-5-foodakinator-ft-22-23.pdf"
                },
                {
                    "id":"138",
                    "year":"2023",
                    "name":"Entrepreneureship and Innovation as career opportunities",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-4-ed-cs-22-23.pdf"
                },
                {
                    "id":"137",
                    "year":"2023",
                    "name":"‘AU FEIT’-Research methodology workshop in social sciences",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-3-rm-english-22-23.pdf"
                },
                {
                    "id":"136",
                    "year":"2023",
                    "name":"SEMINAR ON ‘RESEARCH METHODOLOGY’",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-2-rm-ft-22-23.pdf"
                },
                {
                    "id":"135",
                    "year":"2023",
                    "name":"Seminar on Basic Research, Industry and Patent-Biostumag",
                    "link":"https://sias.edu.in/naac_2023/aqar/cr3/3-2-2/proof/3-2-2-1-iprbiostumag-22-23.pdf"
                },
                {
                    "id":"134",
                    "year":"2024",
                    "name":"Explore the art of research",
                    "link":"#"
                },
                {
                    "id":"133",
                    "year":"2024",
                    "name":"online workshop on intellectual property rights(IPR),Patents and design filing",
                    "link":"#"
                },
                {
                    "id":"132",
                    "year":"2024",
                    "name":"Workshop on effective presentation skills",
                    "link":"#"
                },
                {
                    "id":"131",
                    "year":"2024",
                    "name":"International conference on 'New Trends and innovations in Islamic Studies",
                    "link":"#"
                },
                {
                    "id":"130",
                    "year":"2024",
                    "name":"Workshop on Abstract Writing",
                    "link":"#"
                },
                {
                    "id":"129",
                    "year":"2024",
                    "name":"Three day International Conference on Research Innovations",
                    "link":"#"
                },
                {
                    "id":"128",
                    "year":"2024",
                    "name":"Product development in food and beverage industries",
                    "link":"#"
                },
                {
                    "id":"1",
                    "year":"2021",
                    "name":"Being a Technopreneur- Innovation and Entrepreneurship technology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/3-Beingatechnopreneur.pdf "
                },
                {
                    "id":"2",
                    "year":"2021",
                    "name":"Webinar cum Workshop on Young Innovators programme 2020",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/4-a-WorkshoponYIP2020.pdf "
                },
                {
                    "id":"3",
                    "year":"2021",
                    "name":"An Insight to Intellectual Property rights",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/4-AninsighttoIPR.pdf "
                },
                {
                    "id":"4",
                    "year":"2021",
                    "name":"Be Your own boss-One day workshop on Innovation and Entrepreneurship",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/5-Beyourownboss.pdf"
                },
                {
                    "id":"5",
                    "year":"2021",
                    "name":"New ecosystem of science journalism- Research methodology ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/6-newecosystemofsciencejournalism.pdf"
                },
                {
                    "id":"6",
                    "year":"2021",                   
                    "name":"Triangulation in Social science research",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/7-Triangulization.pdf"
                },
                {
                    "id":"7",
                    "year":"2021",
                    "name":"Workshop on Effective use of social media and creative writing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/8-effectiveuseofsocialmedia.pdf"
                },
                {
                    "id":"8",
                    "year":"2021",     
                    "name":"Workshop on Media Literacy and Modes of Fact Check",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/9-medialiteracyandmodesofact.pdf"
                },
                {
                    "id":"9",
                    "year":"2021",
                    "name":"Workshop on Research methodology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/10-workshoponresearchmethodology.pdf"
                },
                {
                    "id":"10",
                    "year":"2021",
                    "name":"SHE GALLERIA- A platform to innovate and sell products",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/11-Shegalleria.pdf"
                },
                {
                    "id":"11",
                    "year":"2021",
                    "name":"Blazon2.0 Viirtual Art exhibition cum sale",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/12-Blazon2new.pdf"
                },
                {
                    "id":"12",
                    "year":"2021",
                    "name":"TechTalk 8:Artificial Inteligence:-Blue Brain",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/13-techtalkbluebrain.pdf"
                },
                {
                    "id":"13",
                    "year":"2021",
                    "name":"Virtual management Fest-ESPIRIT DE CORPS 3.0",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/14-espiritdecorps.pdf"
                },
                {
                    "id":"14",
                    "year":"2021",
                    "name":"Research Methodology Workshop",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/15-researchmethodologyIF.pdf"
                },
                {
                    "id":"15",
                    "year":"2021",
                    "name":"10 days Virtual Hands on Workshop on Molecular docking",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/16-10dayworkshoponmoleculardocking.pdf"
                },
                {
                    "id":"16",
                    "year":"2021",
                    "name":"Workshop on “ Data Analytics with MS Excel",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/17-workshopondataanalysiswithmsexcel.pdf"
                },
                {
                    "id":"17",
                    "year":"2021",
                    "name":"National Webinar on Bioentrepreneurship",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/18-nationalwebinaronbioentrepreneurship.pdf"
                },
                {
                    "id":"18",
                    "year":"2021",
                    "name":"Gustosias 2.0 Online Business Management Fest",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/19-Gustosias2-0pdf.pdf"
                },
                {
                    "id":"19",
                    "year":"2021",
                    "name":"National Webinar on Overview of Intellectual Property Rights & its Recent Trends",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/20-nationalwebinaronIPRandrecenttrends.pdf"
                },
                {
                    "id":"20",
                    "year":"2021",
                    "name":"Two day International Workshop on implementation of FSMS in food business operation",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/21-workshoponfoodusiness.pdf"
                },
                {
                    "id":"21",
                    "year":"2021",
                    "name":"Workshop on Prudent Practices in the laboratory-How to implement in your research",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/22-prudentpracticesinthelaboratory.pdf"
                },
                {
                    "id":"22",
                    "year":"2021",
                    "name":"National Workshop on DIY (Do it Yourself)",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/23-DoItYourself.pdf"
                },
                {
                    "id":"23",
                    "year":"2021",
                    "name":"TechTalk 7:Designing Softwares",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/24-Techtalk7.pdf"
                },
                {
                    "id":"24",
                    "year":"2021",
                    "name":"3 Days National Workshop on Biology Meets Coding",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/25-biologymeetscoding.pdf"
                },
                {
                    "id":"25",
                    "year":"2021",
                    "name":"Workshop on Quality and Hygiene in Drinking water",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/26-qualityandhygieneindrinkingwater.pdf"
                },
                {
                    "id":"26",
                    "year":"2021",
                    "name":"National Webinar on Intellectual Property Rights and Patent Systems in India",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/27-IPRandpatentsysteminIndia.pdf"
                },
                {
                    "id":"27",
                    "year":"2021",
                    "name":"International Webinar on “Digital Payments: Opportunities and Threats”",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/28-Digitalpaymentopportunitiesandthreat.pdf"
                },
                {
                    "id":"28",
                    "year":"2021",
                    "name":"Webinar on What if you can do biology research at home ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/29-Biologyresearchathome.pdf"
                },
                {
                    "id":"29",
                    "year":"2021",
                    "name":"National Webinar on Frontline Research of marine molecules",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/30-frontlineresearchonmarinemolecule.pdf"
                },
                {
                    "id":"30",
                    "year":"2021",
                    "name":"7th International Annual thesis conference",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/31-7thATC.pdf"
                },
                {
                    "id":"31",
                    "year":"2021",
                    "name":"Webinar on Database Hacking and Prevention  Technique",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/32-databasehackingandpreventiontechniques.pdf"
                },
                {
                    "id":"32",
                    "year":"2021",
                    "name":"Launching Esia Study Android app Venture by tech sias",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/33-launchingesiastudyandroidapp.pdf"
                },
                {
                    "id":"33",
                    "year":"2021",
                    "name":"TechTalk 1-Robotic Automation",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/34-techtalk1androbotics.pdf"
                },
                {
                    "id":"34",
                    "year":"2021",
                    "name":"TechTalk 2-Full Stack Devlopment using Github",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/35-techtalk2fullstackdevelopment.pdf"
                },
                {
                    "id":"35",
                    "year":"2021",
                    "name":"TechTalk 3-Innovative Programming Frameworks",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/36-techtalk3innovativeprogrammingframeworks.pdf"
                },
                {
                    "id":"36",
                    "year":"2021",
                    "name":"Techtalk 6:Why Tech Community",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/37-Techtalk6.pdf"
                },
                {
                    "id":"37",
                    "year":"2021",
                    "name":"Seven Day Coding Work Shop:C Language",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/38-sevendaycodingworkshop.pdf"
                },
                {
                    "id":"38",
                    "year":"2021",
                    "name":"Workshop on Basic Statistical Tools in Research and Data Analytics",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/39-basicstatisticaltools.pdf"
                },
                {
                    "id":"39",
                    "year":"2021",
                    "name":"Online workshop on formal writing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/40-workshoponformalwriting.pdf"
                },
                {
                    "id":"40",
                    "year":"2021",
                    "name":"Entrepreneurship development training-Young Professional Summit",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/41-youngprofessiopnalsummit.pdf"
                },
                {
                    "id":"41",
                    "year":"2021",
                    "name":"Setout the Entrepreneur in you-Webinar on Entrepreneurship Development in Food Sector.",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/42-foodentreppreneur.pdf"
                },
                {
                    "id":"42",
                    "year":"2021",
                    "name":"21 Days of Web Development",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/43-21daysofwebdevelopment.pdf"
                },
                {
                    "id":"43",
                    "year":"2021",
                    "name":"Be a studentpreneur!! learn the basics of entrepreneurship",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/44-beastudentpreneur.pdf"
                },
                {
                    "id":"44",
                    "year":"2021",
                    "name":"Workshop on How to be a Good Researcher",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/45-howtobeagoodresearcher.pdf"
                },
                {
                    "id":"45",
                    "year":"2021",
                    "name":"National webinar on scientific approach towards research ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/46-scientificapproachtowardsresearch.pdf"
                },
                {
                    "id":"46",
                    "year":"2021",
                    "name":"Workshops on Basics of visual editing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/47-workshop-on-basics-of-visual-editing.pdf"
                },
                {
                    "id":"47",
                    "year":"2021",
                    "name":"Introduction to Indian Stock market",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/48-Introductiontoindianstockmarket.pdf"
                },
                {
                    "id":"48",
                    "year":"2021",
                    "name":"Financial Awareness and Consumer Training",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/49-financialawareness.pdf"
                },
                {
                    "id":"49",
                    "year":"2021",
                    "name":"Seminar on Freedom Movement in South India",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/50-freedommovement.pdf"
                },
                {
                    "id":"50",
                    "year":"2021",
                    "name":"Workshop on Pagination and Basics of designing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2020-21/51-workshopbasicsofdesigning.pdf"
                },
                {
                    "id":"51",
                    "year":"2020",
                    "name":"Entrepreneurship training workshop-Product Launch Context",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/52-productlaunchcontest.pdf"
                },
                {
                    "id":"52",
                    "year":"2020",
                    "name":"Workshop on Script writing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/53-workshoponscriptwriting.pdf"
                },{
                    "id":"53",
                    "year":"2020",
                    "name":"Entrepreneureship Development Foodtech Fest-MADVERDAN2020",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/54-mardverden.pdf"
                },{
                    "id":"54",
                    "year":"2020",
                    "name":"International workshop on disaster documentation",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/55-workshopondisasterdocumentation.pdf"
                },{
                    "id":"55",
                    "year":"2020",
                    "name":"Sixth Annual Thesis Conference",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/56-sixthATC.pdf"
                },{
                    "id":"56",
                    "year":"2020",
                    "name":"Training on Mendeley Reference Manager ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/57-mendleyreferenceworkshoforstudents.pdf"
                },{
                    "id":"57",
                    "year":"2020",
                    "name":"Research Methodology Workshop for SIAS faculty- Hands own workshop on Mendley Reference Manager",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/58-workshoponmendleyreference.pdf"
                },{
                    "id":"58",
                    "year":"2020",
                    "name":"Seminar on A Journey of Intellectual property rights for Startups",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/59-AnIPRjourneyforstartups.pdf"
                },{
                    "id":"59",
                    "year":"2020",
                    "name":"LAB Safety Seminar",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/60-laboratorysafetyseminarpdf.pdf"
                },{
                    "id":"60",
                    "year":"2020",
                    "name":"Workshop on social science research",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/61-workshoponsocialscienceresearch.pdf"
                },{
                    "id":"61",
                    "year":"2020",
                    "name":"Workshop on effective browsing for social science research",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/62-effectivebrowsingforsocialscienceresearch.pdf"
                },{
                    "id":"62",
                    "year":"2020",
                    "name":"National Webinar on Basic Approaches in Academic Writing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/63-webinaronbasicapproachesinacademicwriting.pdf"
                },{
                    "id":"63",
                    "year":"2020",
                    "name":"Online abstract presentation of research methodology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/64-online-abstract-presentation.pdf"
                },{
                    "id":"64",
                    "year":"2020",
                    "name":"One day workshop on Research methodology ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/65-onedayworkshoponresearchmethodology.pdf"
                },{
                    "id":"65",
                    "year":"2020",
                    "name":"Two day national seminar on socio economic development special focus to Tribal,Transgender and Women",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/66-twodaynationalseminaronsocioeconomicdevelopment.pdf"
                },{
                    "id":"66",
                    "year":"2020",
                    "name":"Seminar on data Science",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/67-seminarondatascience.pdf"
                },{
                    "id":"67",
                    "year":"2020",
                    "name":"Business Fest-ESPIRIT DE CORPS",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/68-Innovationbusinesscontest.pdf"
                },{
                    "id":"68",
                    "year":"2020",
                    "name":"Invited talk Recent advanceds in Baking Technology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/69-recentadvancesinbakingtechnologypdf.pdf"
                },{
                    "id":"69",
                    "year":"2020",
                    "name":"Workshop on research methodology and Academic writing skills",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/70-workshoponresearchmethodologyandacademicskill.pdf"
                },{
                    "id":"70",
                    "year":"2020",
                    "name":"A talk on how to start a start -up",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/71-Howtostartastartup.pdf"
                },{
                    "id":"71",
                    "year":"2020",
                    "name":"Zoom Hands on training-Skill development training",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/72-zoomapplicationlivetraining.pdf"
                },{
                    "id":"72",
                    "year":"2020",
                    "name":"Recent trends in cloud computing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/73-recenrttrendsincloudcomputing.pdf"
                },
                {
                    "id":"73",
                    "year":"2020",
                    "name":"Seminar on Project Management",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/74-seminaronprojectmanagement.pdf"
                },
                {
                    "id":"74",
                    "year":"2020",
                    "name":"Seminar on Block chain technology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/75-Blockchaintechnology.pdf"
                },{
                    "id":"75",
                    "year":"2020",
                    "name":"Entrepreneurship uring time of Covid-19-Challenges and consequences",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/76-Entrepreneureshipduringcovid.pdf"
                },{
                    "id":"76",
                    "year":"2020",
                    "name":"Blazon art exhibition cum sale- ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/77-workshopBlazon.pdf"
                },{
                    "id":"77",
                    "year":"2020",
                    "name":"National Forensic Workshop",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/78-Nationalforensicworkshop.pdf"
                },
                {
                    "id":"78",
                    "year":"2020",
                    "name":"National Webinar on Economy after COVID 19",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/79-economyaftercovid19.pdf"
                },{
                    "id":"79",
                    "year":"2020",
                    "name":"Gustosias- Business management fest",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/81-Gustosias19.pdf"
                },{
                    "id":"80",
                    "year":"2020",
                    "name":"Two day National Seminbar on Resolving and managing systematic banking ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/82-resolvingandmanagingsystematicbankingcrisis.pdf"
                },{
                    "id":"81",
                    "year":"2020",
                    "name":"One day Workshop on Behavioural changes and academic excellence ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/83-behavioralchangesandacademicexcellence.pdf"
                },{
                    "id":"82",
                    "year":"2020",
                    "name":"National level workshop on “Islamic Banking and Finance”",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/84-workshoponislamicbankingandfinancepdf.pdf"
                },{
                    "id":"83",
                    "year":"2020",
                    "name":"Paving the way of Greener future-Entrepreneurship developmemt workshop on Seed pen production",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/85-pavingthewayforagreenerfuturewithseedpens.pdf"
                },{
                    "id":"84",
                    "year":"2020",
                    "name":"Webinar on Internet of things",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2019-20/86-IOTskilldevelopmentprogramme.pdf"
                },{
                    "id":"85",
                    "year":"2019",
                    "name":"Fifth Annual thesis conference ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/87-fifthATC.pdf"
                },{
                    "id":"86",
                    "year":"2019",
                    "name":"One day workshop on research methodology and planning",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/88-Reportononedayworkshoponresearchodologyandplanning.pdf"
                },{
                    "id":"87",
                    "year":"2019",
                    "name":"International workshop on extremely minute seeds-Extensive research",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/89-extremelyminuteseeds.pdf"
                },{
                    "id":"88",
                    "year":"2019",
                    "name":"One day workshop on how to write research papers in social science",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/90-howtowriteresearchpaperinSS.pdf"
                },{
                    "id":"89",
                    "year":"2019",
                    "name":"3 day Workshop on HACCP Level 3",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/91-3dayworkshoponHazardanalysis.pdf"
                },{
                    "id":"90",
                    "year":"2019",
                    "name":"Oneday workshop on mushroom cultivation",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/92-Mushroomcultivation.pdf"
                },{
                    "id":"91",
                    "year":"2019",
                    "name":"Workshop on media entrepreneurship and effective marketing communication",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/93-workshoponmediaentrepreneurshipandeffectivemarketingcommunication.pdf"
                },{
                    "id":"92",
                    "year":"2019",
                    "name":"One day Workshop on Research Methodology (SPSS)",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/94-Researchmethodologyspssworkshop.pdf"
                },{
                    "id":"93",
                    "year":"2019",
                    "name":"Training on Mushroom harvesting",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/95-trainingonmashroomharvesting.pdf"
                },{
                    "id":"94",
                    "year":"2019",
                    "name":"Workshop on sports Journalism",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/96-onedayworkshoponsportsjournalismpdf.pdf"
                },{
                    "id":"95",
                    "year":"2019",
                    "name":"One day Research Methodology  Workshop",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/97-researchmethodologyworkshopIF.pdf"
                },{
                    "id":"96",
                    "year":"2019",
                    "name":"Workshop on freelance writing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/98-workshoponfreelancewriting.pdf"
                },{
                    "id":"97",
                    "year":"2019",
                    "name":"Workshop on Introduction to stock market trading",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/99-stockmarket.pdf"
                },{
                    "id":"98",
                    "year":"2019",
                    "name":"Essentials of Scientific Writing Skills",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2018-19/99b-Essentialsofscientificwriting.pdf "
                },{
                    "id":"99",
                    "year":"2018",
                    "name":"Workshop on Advanced Ethical Hacking",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/99-Advancedethicalhacking.pdf"
                },
                {
                    "id":"100",
                    "year":"2018",
                    "name":"National seminar on Recent Trends In Food Technology Processing Preservation And Byproduct Utilisation",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/100-recenttrendsinfoodtechnology.pdf"
                },{
                    "id":"101",
                    "year":"2018",
                    "name":"Workshop on advertising and public relations",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/101-advertisingandpublicrelations.pdf"
                },{
                    "id":"102",
                    "year":"2018",
                    "name":"KSCSTE sponsoresd National Seminar Symbiosis'18-Research in Agricutltural, environmental,Industrial and Food Microbiology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/102-Symbiosis18.pdf"
                },{
                    "id":"103",
                    "year":"2018",
                    "name":"International workshop on reporting for the world",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/103-Reportingfortheworld.pdf"
                },{
                    "id":"104",
                    "year":"2018",
                    "name":"One day workshop  on rural capturing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/104-Workshoponruralcapturing.pdf"
                },{
                    "id":"105",
                    "year":"2018",
                    "name":"National workshop on TV programme production",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/105-nationalworkshoponTVprogramproduction.pdf"
                },{
                    "id":"106",
                    "year":"2018",
                    "name":"One day inter-collegiate seminar on “ Socio-economic Welfare : Role of Islamic Economics and Finance”",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/106-Roleofislamicfinance.pdf"
                },{
                    "id":"107",
                    "year":"2018",
                    "name":"Workshop on Android Application development",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/107-Androidapplication.pdf"
                },{
                    "id":"108",
                    "year":"2018",
                    "name":"Workshop on Cloud Computing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/108-workshoponcloudcomputing.pdf"
                },{
                    "id":"109",
                    "year":"2018",
                    "name":"Workshop on Dimensions of IPR in Science and Technology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/110-DimensionsofIPR.pdf "
                },{
                    "id":"110",
                    "year":"2018",
                    "name":"Seminar on advanced networking and security threats",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2017-18/111-networking.pdf"
                },{
                    "id":"111",
                    "year":"2017",
                    "name":"3 day training on Application of HACCP basded Food safety management system Level 3",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/112-3dayapplicationonhaccplevel3.pdf"
                },{
                    "id":"112",
                    "year":"2017",
                    "name":"Seminar on enterpreneurship development in the food processing sector-SMACZNEGO-2K16",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/113-smacznego.pdf"
                },{
                    "id":"113",
                    "year":"2017",
                    "name":"International Workshop on Professional photography",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/114-workshoponprofessionalphotography.pdf"
                },{
                    "id":"114",
                    "year":"2017",
                    "name":"Seminar  on Effective Research methodology of Project Planning",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/115-seminaroneffectiveresearchmethodologyprojectplanning.pdf"
                },{
                    "id":"115",
                    "year":"2017",
                    "name":"Workshop on Embedded Computing",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/116-workshoponemergingtrendsinembeddedcomputing.pdf"
                },{
                    "id":"116",
                    "year":"2017",
                    "name":"Workshop on food adulteration ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/117-workshoponfoodadulteration.pdf"
                },{
                    "id":"117",
                    "year":"2017",
                    "name":"Training on HACCP",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/118-HACCPtraining1.pdf"
                },{
                    "id":"118",
                    "year":"2017",
                    "name":"Workshop on Food Safety and HACCP",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/119-applicationHACCPtrainingworkshop.pdf"
                },{
                    "id":"119",
                    "year":"2017",
                    "name":"One day Workshop on Research Methodology",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/120-onedayworkshoponresearchmethodology.pdf"
                },
                {
                    "id":"120",
                    "year":"2017",
                    "name":"Workshop on Ethical Hacking & Cyber Forensic",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/121-workshoponadvancedethicalhacking.pdf"
                },{
                    "id":"121",
                    "year":"2017",
                    "name":"Workshop on Mushroom Cultivation",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/122-workshoponmushroomcultivation.pdf"
                },{
                    "id":"122",
                    "year":"2017",
                    "name":"Seminar on Software Engineering  Research Project Orientation ",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/123-softwareengineeringresearchproject.pdf"
                },{
                    "id":"123",
                    "year":"2017",
                    "name":"Three day Bioinformatics Workshop",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/124-3daybioinformaticsworkshop.pdf"
                },{
                    "id":"124",
                    "year":"2017",
                    "name":"Workshop on media research",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/125-workshoponmediaresearch.pdf"
                },{
                    "id":"125",
                    "year":"2017",
                    "name":"Workshop on film making techniques",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/126-workshoponfilmmaking.pdf"
                },{
                    "id":"126",
                    "year":"2017",
                    "name":"Two days national Level workshop on research methodology, statistical analysis, and manuscript writing practices",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/127-WorkshopRM.pdf"
                },{
                    "id":"127",
                    "year":"2017",
                    "name":"Seminar on Project Management",
                    "link":"https://sias.edu.in/naac_2022/ssr/cr3/3-2-2/Proof/2016-17/128-workshoponprojectmanagement.pdf"
                }

            ]
        }
    },
    mounted(){
        this.tableData=this.list
    },
    methods:{
        changeData(){
            if(this.year=='all'){
                this.tableData=this.list
            }else{
                this.tableData=this.list.filter((i)=>i.year==this.year)
            }
        },
        
    },
}

Vue.createApp(App).mount('#page-content')