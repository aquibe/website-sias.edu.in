const App={
    data(){
        return {
            Jyear:'all',
            Byear:'all',
            journals:[
                {
                    "id":"JP1",
                    "title":"Common SAR derived from linear and non-linear QSAR studies on AChE inhibitors used in the treatment of Alzheimer's disease.",
                    "author":"Sahila M.M",
                    "deptid":"BI",
                    "dept":"Bioinformatics",
                    "journal":"Current Neuropharmacology",
                    "year":"2016"
                },
                {
                    "id":"JP2",
                    "title":"Quest for identity as a core experience of human existance:Reflected in V S Naipaul;s a house for Mr.Biswas",
                    "author":"Hasiya T",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"Roots international Multidisciplinary Journal",
                    "year":"2016"
                },
                {
                    "id":"JP3",
                    "title":"A Study on Financial Literacy of Rural Women With Special Reference To Pulikkal Panchayath, Malappuram District, Kerala ",
                    "author":"Naseema K P",
                    "deptid":"COM",
                    "dept":"Commerce",
                    "journal":"EPRA International Journal of Economic and Business Review",
                    "year":"2016"
                },
                {
                    "id":"JP4",
                    "title":"Corporate social responsibility: An analysis of Indian banks.",
                    "author":"Muhammad Juman B K",
                    "deptid":"COM",
                    "dept":"Commerce",
                    "journal":"International journal of advance research and innovative ideas in education",
                    "year":"2016"
                },
                {
                    "id":"JP5",
                    "title":"Development of MLR aand SVM aided QSAR models to identify common SAR of GABA uptake herbal inhibitors used in the treatment of Schizophrenia.",
                    "author":"Sahila M.M",
                    "deptid":"BI",
                    "dept":"Bioinformatics",
                    "journal":"Current Neuropharmacology",
                    "year":"2016"
                },
                {
                    "id":"JP6",
                    "title":"“Deconstructing Kaipunyam-Food Culture and Muslim Women in Kerala”,",
                    "author":"Najda A",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"Investigator",
                    "year":"2016"
                },
                {
                    "id":"JP7",
                    "title":"Optimised production of chitinase from a novel mangrove isolate, Bacillus pumilus MCB-7 using response surface methodology.",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Biocatalysis and Agricultural Biotechnology",
                    "year":"2016"
                },
                {
                    "id":"JP8",
                    "title":"Biocontrol potential of halotolerant bacterial chitinase from high yielding novel Bacillus Pumilus MCB7 autochthonoustomangrooveecosystem",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Pesticide Biochemistry and Physiology",
                    "year":"2016"
                },
                {
                    "id":"JP9",
                    "title":"ERK mediated upregulation of death receptor 5 overcomes the lack of p53 functionality in the diaminothiazole DAT1 induced apoptosis in colon cancer models: efficiency of DAT1 in Ras-Raf mutated cells",
                    "author":"Rohith Kumar N",
                    "deptid":"BT",
                    "dept":"Biotechnology",
                    "journal":"Molecular Cancer",
                    "year":"2016"
                },
                {
                    "id":"JP10",
                    "title":"Biochemical Characterization of Liver Oil of Echinorhinus brucus (Bramble Shark) and its cytotoxicity evaluation on neuroblastoma cell lines(SHSY-5Y)",
                    "author":"V. S. Suvanish Kumar",
                    "deptid":"BT",
                    "dept":"Biotechnology",
                    "journal":"Scientifica",
                    "year":"2016"
                },
                {
                    "id":"JP11",
                    "title":"Adaptive PTEN loss Enhances the outgrowth of brain metastaic tumor cells",
                    "author":"V. S. Suvanish Kumar",
                    "deptid":"BT",
                    "dept":"Biotechnology",
                    "journal":"CNS &Neurological Disorders- Drug Targets",
                    "year":"2016"
                },
                {
                    "id":"JP12",
                    "title":"Novel RIPK3 inhibitors discovered through a structure-based approach exert post-ischemic neuroprotection",
                    "author":"V. S. Suvanish Kumar",
                    "deptid":"BT",
                    "dept":"Biotechnology",
                    "journal":"Molecular Diversity",
                    "year":"2016"
                },
                {
                    "id":"JP13",
                    "title":"Amikacin Inhibits miR-497 Maturation and Exerts Post-Ischemic neuroprotection",
                    "author":"V. S. Suvanish Kumar",
                    "deptid":"BT",
                    "dept":"Biotechnology",
                    "journal":"Molecular Neurobiology",
                    "year":"2016"
                },
                {
                    "id":"JP14",
                    "title":"Baal Upanyas - Tatva evam vargikaran",
                    "author":"Sreevidya P V",
                    "deptid":"HND",
                    "dept":"Hindi",
                    "journal":"International Half Yearly Peer Review Refeered Research Journal (Arts& Humanities)  ",
                    "year":"2017"
                },
                {
                    "id":"JP15",
                    "title":"Ecotourism- A Right Way to Achieve the Goal of Sustainable Development",
                    "author":"Noufal K A",
                    "deptid":"COM",
                    "dept":"Commerce ",
                    "journal":"Mirror",
                    "year":"2017"
                },
                {
                    "id":"JP16",
                    "title":"Revisiting the discourse of marginality of Muslim women- A critical analysis of B M Suhara's selected novels",
                    "author":"Umar Farooq M C",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"International Journal of Trend in research and development",
                    "year":"2017"
                },
                {
                    "id":"JP17",
                    "title":"Bioprospecting endophytic diazotrophic Lysinibacillus sphearicus for biocontrol of rice sheath blight",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"3 Biotech",
                    "year":"2017"
                },
                {
                    "id":"JP19",
                    "title":"Cyberspace and Globalization:Past,Present and Future-A retrospective analysis",
                    "author":"Pranav P",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"International Journal of Advanced Research ",
                    "year":"2017"
                },
                {
                    "id":"JP20",
                    "title":"Voice of the voiceless:Incarnation of new women in Manju Kapoor's difficult daughters",
                    "author":"Hasiya T",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"Roots International Journal of Multidisciplinary approaches",
                    "year":"2017"
                },
                {
                    "id":"JP21",
                    "title":"Application of Box-Behnken Design for the Optimization of Culture Conditions for Novel Fibrinolytic Enzyme Production by Bacillus altitudinis S-CSR 0020.",
                    "author":"Smitha K V",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Journal of Pure and Applied Microbiology.",
                    "year":"2017"
                },
                {
                    "id":"JP22",
                    "title":"Biodegradation effects of o-cresol by Pseudomonas monteilii SHY on mustard seed germination",
                    "author":"Shainy N K",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Bioinformation",
                    "year":"2018"
                },
                {
                    "id":"JP23",
                    "title":"Identification and characterization of cresol degrading Pseudomonas monteilii strain SHY from Soil samples",
                    "author":"Shainy N K",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Bioinformation",
                    "year":"2018"
                },
                {
                    "id":"JP24",
                    "title":"Aerobic batch degradation of cresol by newly isolated Pseudomonas monteilii Cr13",
                    "author":"Shainy N K",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Journal of Pure and Applied Microbiology",
                    "year":"2018"
                },
        
                {
                    "id":"JP26",
                    "title":"Characterization and in planta N fixation of endophytic diazotrophic Lysinibacillus sphaericus isolated from Rice(Oryza sativa)",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Physiological and Molecular Plant Pathology",
                    "year":"2018"
                },
                {
                    "id":"JP27",
                    "title":"Optimization of alkaline protease production by Bacillus cereus FT 1 isolated from soil. ",
                    "author":"Asha B",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Journal of Applied Pharmaceutical Sciences.",
                    "year":"2018"
                },
                {
                    "id":"JP28",
                    "title":"Characterization of Crude and Partially Purified Thermo Active and Thermo Stable Alkaline Protease Produced by Bacillus cereus FT1",
                    "author":"Asha B",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Journal of Pharmaceutical Sciences and Research",
                    "year":"2018"
                },
                {
                    "id":"JP29",
                    "title":"Optimization of Physical and Cultural Conditions of Fibrinolytic Enzyme from Bacillus altitudinis S-CSR 0020. ",
                    "author":"Smitha K V",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Journal of Pure and Applied Microbiology.",
                    "year":"2018"
                },
                {
                    "id":"JP30",
                    "title":"Fast and effective network anomaly detection technique using hybrid sequential pattern algorithms",
                    "author":"Arshad P T",
                    "deptid":"CS",
                    "dept":"Computer Science and Applications",
                    "journal":"IOSR journal of engineering",
                    "year":"2018"
                },
                {
                    "id":"JP31",
                    "title":"The Synergistic Combination of Everolimus and Paroxetine Exerts Post-ischemic Neuroprotection In Vitro.",
                    "author":"V. S. Suvanish Kumar",
                    "deptid":"BT",
                    "dept":"Biotechnology",
                    "journal":"Cellular and Molecular Neurobiology",
                    "year":"2018"
                },
                {
                    "id":"JP32",
                    "title":"Molecular docking studies of bioactive compounds from Abutilon hirtum (Lam). Sweet (Malvaceae)",
                    "author":"Dr.P. Servin Wesley",
                    "deptid":"BT",
                    "dept":"Biotechnology",
                    "journal":"Advanced Applied Research",
                    "year":"2019"
                },
                {
                    "id":"JP33",
                    "title":"Plant growth Promoting endophytic Yeast Geotrichum candidum from Bruigueria cylindrica. ",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Journal of Microbiology, Biotechnology and Food Sciences. ",
                    "year":"2019"
                },
                {
                    "id":"JP34",
                    "title":"A computational exploration into the structure, antioxidant capacity, toxicity and drug-like activity of the anthocyanidin 'petunidin'",
                    "author":"Ragi C",
                    "deptid":"CHE",
                    "dept":"Chemistry",
                    "journal":"Heliyon 5",
                    "year":"2019"
                },
                {
                    "id":"JP35",
                    "title":" Enhancement of Growth and Yield of Rice (Oryza Sativa) by Plant Probiotic Endophyte, Lysinibacillus sphaericus under Greenhouse Conditions,",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Communications in palnt science",
                    "year":"2020"
                },
                {
                    "id":"JP36",
                    "title":"Soil Bioaugmentation with Pseudomonas aeruginosa S-CSR-0013 Eliminates the Inhibitory Effect of Phenol on Germination of Chickpea (Cicerarietinum) Seeds",
                    "author":"Sahila MM",
                    "deptid":"BI",
                    "dept":"Bioinformatics",
                    "journal":"Journal of Environmental Science and Pollution Research",
                    "year":"2020"
                },
                {
                    "id":"JP37",
                    "title":"Study of deep learning as a powerful technology that revolutionizing automobiles in industries",
                    "author":"Manju Susan Thomas",
                    "deptid":"CS",
                    "dept":"Computer Science and Applications",
                    "journal":"International journal of Computerscience, Technology and Application",
                    "year":"2020"
                },
                {
                    "id":"JP38",
                    "title":"Role of DIC in Promoting Entrepreneurship Among the Participants of PMEGP-A Study of Karaikal District, Puducherry",
                    "author":"Abdul Majeed K",
                    "deptid":"COM",
                    "dept":"Commerce",
                    "journal":"OUR Heritage Journal",
                    "year":"2020"
                },
                {
                    "id":"JP39",
                    "title":"Detoxification of O-cresol contaminated water sample by immobilized cells in Packed column bed reactor",
                    "author":"Shainy N K",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"International Journal of life Science and Pharma Research ",
                    "year":"2020"
                },
                {
                    "id":"JP40",
                    "title":"Revisiting Malayalam literature and nationalism, A comparative study of N P Muhammad's selected novels",
                    "author":"Umar Farooq M C",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"LangLit",
                    "year":"2019"
                },
                {
                    "id":"JP41",
                    "title":"Anti-inflammatory Activity of Sulphated Polysaccharide Isolated from Ulva fasciata",
                    "author":"Shonima Govindan",
                    "deptid":"BC",
                    "dept":"Biochemistry",
                    "journal":"International Journal for Research in Applied Science & Engineering Technology (IJRASET)",
                    "year":"2021"
                },
                {
                    "id":"JP42",
                    "title":"Characterization of the major antifungal extrolite from rice endophyte Lysinibacillus sphaericus against Rhizoctonia solani",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Archives of Microbiology ",
                    "year":"2021"
                },
                {
                    "id":"JP43",
                    "title":"Chitosan nanoparticles as rice growth promoter- evaluation of biological activity",
                    "author":"Shabanamol S",
                    "deptid":"MB",
                    "dept":"Microbiology",
                    "journal":"Archives of Microbiology",
                    "year":"2022"
                },
                {
                    "id":"JP44",
                    "title":"Samakaleen Sahitya mei Shakunthala sirotiya Ka Sthan",
                    "author":"Sreevidya P V",
                    "deptid":"HIN",
                    "dept":"Hindi",
                    "journal":"Naman",
                    "year":"2022"
                },
                {
                    "id":"JP45",
                    "title":"Sakunthala Sirotia ke baal Kavya mei Rashtreeya Chethana",
                    "author":"Sreevidya P V",
                    "deptid":"HIN",
                    "dept":"Hindi",
                    "journal":"Shodh Dhisha ",
                    "year":"2022"
                },
                {
                    "id":"JP46",
                    "title":"Baal Manovigyan – Baal sahitya ke sandarb mei",
                    "author":"Sreevidya P V",
                    "deptid":"HIN",
                    "dept":"Hindi",
                    "journal":"Nagfani",
                    "year":"2022"
                },
                {
                    "id":"JP47",
                    "title":"Asymmetric modulation instability in nonlinear metamaterial waveguides",
                    "author":"A K Shefeeque Ali",
                    "deptid":"PHY",
                    "dept":"Physics",
                    "journal":"Physica Scripta",
                    "year":"2023"
                },
                {
                    "id":"JP48",
                    "title":"FOREIGN DIRECT INVESTMENT IN INDIAN PHARMACEUTICAL INDUSTRY: AN IMPACT STUDY",
                    "author":"Lukmanul Hakeem M",
                    "deptid":"ECO",
                    "dept":"Economics",
                    "journal":"Amal International Journal of Economics &Social Science",
                    "year":"2023"
                },
                {
                    "id":"JP49",
                    "title":"FOREIGN DIRECT INVESTMENT IN INDIAN PHARMACEUTICAL INDUSTRY: AN IMPACT STUDY",
                    "author":"Zanoobiya K",
                    "deptid":"ECO",
                    "dept":"Economics",
                    "journal":"Amal International Journal of Economics &Social Science",
                    "year":"2023"
                },
                {
                    "id":"JP50",
                    "title":"FOREIGN DIRECT INVESTMENT IN INDIAN PHARMACEUTICAL INDUSTRY: AN IMPACT STUDY",
                    "author":"Thahsin V K",
                    "deptid":"ECO",
                    "dept":"Economics",
                    "journal":"Amal International Journal of Economics &Social Science",
                    "year":"2023"
                },
                {
                    "id":"JP51",
                    "title":"Beyond Mourning :Empowerment of Windows in Cinema and Culture",
                    "author":"Najla.PM",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"INDIAN JOURNAL OF NATURAL SCIENCE (IJONS)",
                    "year":"2023"
                },
                {
                    "id":"JP52",
                    "title":"Entrance channel dependence of quasi fission in reaction leading to 206 Po Compound  nucleus",
                    "author":"Dr.Hajara .K",
                    "deptid":"PHY",
                    "dept":"Physics",
                    "journal":"Nuclear Physics A",
                    "year":"2023"
                },
                {
                    "id":"JP53",
                    "title":"Dense Inception v5 Convolution Neural Network for LIver Tumor Classification into multi abnormal instances and staging of the desease using List-CT images",
                    "author":"PT. Arshad",
                    "deptid":"CSAI",
                    "dept":"Computer Science and applications",
                    "journal":"Journal of Harbin Engineering University",
                    "year":"2023"
                },
                {
                    "id":"JP54",
                    "title":"Gendered cultural Norms:The Maternal Authority Paradox In Kerala's Muslim Marriage",
                    "author":"Jouhara.KP",
                    "deptid":"",
                    "dept":"English",
                    "journal":"INDIAN JOURNAL OF NATURAL SCIENCE (IJONS)",
                    "year":"2023"
                },
                {
                    "id":"JP55",
                    "title":"unraveling Bollywood's Propaganda:A Framework for Analysing Political Narratives in Indian Cinema",
                    "author":"Aneesunneesa P ",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"Journal of Communication and management",
                    "year":"2023"
                },
                {
                    "id":"JP56",
                    "title":"Challenging Beauty Norms: A Discursive Analysis of the New Malayalam Cinema through social Media Reactions",
                    "author":"Aneesunneesa P ",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"INDIAN JOURNAL OF NATURAL SCIENCE (IJONS)",
                    "year":"2023"
                },
                {
                    "id":"JP57",
                    "title":"Malabar Muslim women's Reading of Kamala Das Poem Middle Age",
                    "author":"Mohammed Shafeer .KP",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"INDIAN JOURNAL OF NATURAL SCIENCE (IJONS)",
                    "year":"2023"
                },
                {
                    "id":"JP58",
                    "title":"Shapping Tomorrow : Unraveling the social construction of Youth in the Digital Age",
                    "author":"Fathima Nilofer",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"INDIAN JOURNAL OF NATURAL SCIENCE (IJONS)",
                    "year":"2023"
                },
                {
                    "id":"JP59",
                    "title":"Beyond stereotypes: Unraveling Cognitive Diversity in contemporary Literature's  Gender Narratives",
                    "author":"Zayana.PK",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"INDIAN JOURNAL OF NATURAL SCIENCE (IJONS)",
                    "year":"2023"
                },
                {
                    "id":"JP60",
                    "title":"Beyond Mourning :Empowerment of Windows in Cinema and Culture",
                    "author":"Aysha Muradh.PC",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"INDIAN JOURNAL OF NATURAL SCIENCE (IJONS)",
                    "year":"2023"
                },
                
                {
                    "id":"JP61",
                    "title":"Climate Nature and Kerala Elegance: A Study of Kamala Das' poem the Rain",
                    "author":"Mohammed Shafeer .KP",
                    "deptid":"ENG",
                    "dept":"English",
                    "journal":"International Journal of Advance and Applied Research ",
                    "year":"2024"
                },
                
            ],
            books:[
                {
                    "id":"BP1",
                    "author":"Shabanamol S",
                    "content":"Techniques in Environmental Microbiology",
                    "title":"Effect of UV Mutation on nitrogenous activity of bacteria",
                    "titlepre":"NA",
                    "year":"2014",
                    "number":"978-81-923850"
                },
                {
                    "id":"BP2",
                    "author":"Shabanamol S",
                    "content":"",
                    "title":"Plant growth promoting endophytic bacteria from rice. ",
                    "titlepre":"New vistas in microbiology.",
                    "year":"2015",
                    "number":""
                },
                {
                    "id":"BP3",
                    "author":"Farha Baramy",
                    "content":"Advances in Microbiology",
                    "title":"Antibacterial and synergestic effects of leaf extracts of Chromolaena odorata and Hyptis suaveolens against Multi dru resistant Staphylococcus aureus",
                    "titlepre":"NA",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP4",
                    "author":"Shainy N K",
                    "content":"Advances in Microbiology",
                    "title":"Antibacterial and synergestic effects of leaf extracts of Chromolaena odorata and Hyptis suaveolens against Multi dru resistant Staphylococcus aureus",
                    "titlepre":"NA",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP5",
                    "author":"Farha Baramy",
                    "content":"Advances in Microbiology",
                    "title":"Production, partial purification and characterization of Thermoacttive and thermostable lkaline protease from Bacillus sp S.Csr-0001, isolated from soil",
                    "titlepre":"NA",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP6",
                    "author":"Farha Baramy",
                    "content":"Advances in Microbiology",
                    "title":"Antimicrobial activity of Stachytarpheta jamaicensis and synergy with chloramphenicol",
                    "titlepre":"NA",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP7",
                    "author":"Asha B",
                    "content":"Advances in Microbiology",
                    "title":"Isolation and characterization of dimethyl phenol (2,6 and 2'3 Xylenol) degrading bacterium from petroleum contaminated soil ",
                    "titlepre":"NA",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP8",
                    "author":"Asha B",
                    "content":"Advances in Microbiology",
                    "title":"Production, partial purification and characterization of Thermoacttive and thermostable lkaline protease from Bacillus sp S.Csr-0001, isolated from soil",
                    "titlepre":"NA",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP9",
                    "author":"Asha B",
                    "content":"Advances in Microbiology",
                    "title":"Statistical optimization of alkaline protease production by locally isolated bacillus sp. Using response surface experimental design ",
                    "titlepre":"NA",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP10",
                    "author":"Najda A",
                    "content":"Faces of the Media, The fourth and fifth Estate",
                    "title":"New trends of representing young muslim women in Recent malayalam movies",
                    "titlepre":"",
                    "year":"2017",
                    "number":"978-93-5137-853-2"
                },
                {
                    "id":"BP11",
                    "author":"Shainy N K",
                    "content":"Advances in Microbiology",
                    "title":"Production, partial purification and characterization of Thermoacttive and thermostable lkaline protease from Bacillus sp S.Csr-0001, isolated from soil",
                    "titlepre":"",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP12",
                    "author":"Shainy N K",
                    "content":"Advances in Microbiology",
                    "title":"Isolation and characterization of dimethyl phenol (2,6 and 2'3 Xylenol) degrading bacterium from petroleum contaminated soil ",
                    "titlepre":"",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP13",
                    "author":"Shainy N K",
                    "content":"Advances in Microbiology",
                    "title":"Optimization of biodegradation of cresols, by acclimatized Pseudomonas sp.",
                    "titlepre":"",
                    "year":"2017",
                    "number":"978-3-330-07223"
                },
                {
                    "id":"BP14",
                    "author":"Shainy N K",
                    "content":"",
                    "title":"Antimicrobial activity of Aerva lanata leaf extracts plant against Human pathogens",
                    "titlepre":"Proceedings of the National Seminar-SYMBIOSIS 18",
                    "year":"2018",
                    "number":" 978-93-5300-740-9"
                },
                {
                    "id":"BP15",
                    "author":"Najda A",
                    "content":"Pastiche- An anthology of research papers in English",
                    "title":"Engaging with religion: The new active space for women in Kerala",
                    "titlepre":"",
                    "year":"2018",
                    "number":"978-81-926652-3-8"
                },
                {
                    "id":"BP16",
                    "author":"Shainy N K",
                    "content":"",
                    "title":"Antimicrobial Activity of Hyptis suaveolens Plant leaf extracts against multidrug resistant Staphylococcus aureus",
                    "titlepre":"Proceedings of the National Seminar-SYMBIOSIS 18",
                    "year":"2018",
                    "number":" 978-93-5300-740-9"
                },
                {
                    "id":"BP17",
                    "author":"Asha B",
                    "content":"Bio compression- A collection of biological research papers",
                    "title":"Optimization of extracellular invertase enzyme production by Bacillus sp isolated from Bagasse",
                    "titlepre":"NA",
                    "year":"2018",
                    "number":"9789353821906"
                },
                {
                    "id":"BP18",
                    "author":"Shainy N K",
                    "content":"Bio compression- A collection of biological research papers",
                    "title":"Optimization of extracellular invertase enzyme production by Bacillus sp isolated from Bagasse",
                    "titlepre":"NA",
                    "year":"2018",
                    "number":"9789353821906"
                },
                {
                    "id":"BP19",
                    "author":"Shainy N K",
                    "content":"Bio compression- A collection of biological research papers",
                    "title":"Isolation and antimicrobial activity of endophytic bacteria from Ficus auriculata",
                    "titlepre":"NA",
                    "year":"2018",
                    "number":"9789353821906"
                },
                {
                    "id":"BP20",
                    "author":"Farha Baramy",
                    "content":"Bio compression- A collection of biological research papers",
                    "title":"Isolation and antimicrobial activity of endophytic bacteria from Ficus auriculata",
                    "titlepre":"NA",
                    "year":"2018",
                    "number":"9789353821906"
                },
                {
                    "id":"BP21",
                    "author":"Asha B",
                    "content":"Bio compression- A collection of biological research papers",
                    "title":"Antifungal activities of Bacillus cereus extracts isolated from soil",
                    "titlepre":"NA",
                    "year":"2018",
                    "number":"9789353821906"
                },
                {
                    "id":"BP22",
                    "author":"Shainy N K",
                    "content":"Bio compression- A collection of biological research papers",
                    "title":"Antifungal activities of Bacillus cereus extracts isolated from soil",
                    "titlepre":"NA",
                    "year":"2018",
                    "number":"9789353821906"
                },
                {
                    "id":"BP23",
                    "author":"Shabanamol S",
                    "content":"Bio compression- A collection of biological research papers",
                    "title":"Antifungal activity of endophytic diazotrophic bacteria isolated from rice plants.",
                    "titlepre":"NA",
                    "year":"2018",
                    "number":"9789353821906"
                },
                {
                    "id":"BP24",
                    "author":"Smitha K V",
                    "content":"",
                    "title":"Mass production of fibrinolytic enzyme from Bacillus altitudinis S-CSR_0020 by optimization of nitrogen siurces using Response Surface Methodology",
                    "titlepre":"Proceedings of the National Seminar-SYMBIOSIS 18",
                    "year":"2018",
                    "number":"978-93-5300-740-9"
                },
                {
                    "id":"BP25",
                    "author":"Servin Wesley P",
                    "content":"",
                    "title":"In vitro antioxidant and cytotoxic activity of extracts of Pogostemon quadrifolius (benth.)F.muell",
                    "titlepre":"Proceedings of the National Seminar-SYMBIOSIS 18",
                    "year":"2018",
                    "number":" 978-93-5300-740-9"
                },
                {
                    "id":"BP26",
                    "author":"Farha Baramy",
                    "content":"",
                    "title":"Synergistic Antimicrobial Activity of Hemigraphis colorata Leaf Extracts and Punica granatum Peel Extracts against Multidrug Resistant Bacteria",
                    "titlepre":"Proceedings of the National Seminar-SYMBIOSIS 18",
                    "year":"2018",
                    "number":" 978-93-5300-740-9"
                },
                {
                    "id":"BP27",
                    "author":"Asha B",
                    "content":"",
                    "title":"Production, immobilization and characterization of alkaline protease  produced by soil isolated Bacillus sp.",
                    "titlepre":"Proceedings of the National Seminar-SYMBIOSIS 18",
                    "year":"2018",
                    "number":" 978-93-5300-740-9"
                },
                {
                    "id":"BP28",
                    "author":"Shabanamol S",
                    "content":"",
                    "title":"“Isolation and Partial Identification of Root Endophytic and Rhizospheric bacteria from Oryza sativa”",
                    "titlepre":"Proceedings of the National Seminar-SYMBIOSIS 18",
                    "year":"2018",
                    "number":" 978-93-5300-740-9"
                },
                {
                    "id":"BP29",
                    "author":"Aneesunnisa P",
                    "content":"",
                    "title":"Imparting Listening and Speaking skills through movies in CLT Classroom",
                    "titlepre":"Ecologies of the New:Matter, Mind and Body, Volume 2",
                    "year":"2018",
                    "number":"978-93-5300-71-9"
                },
                {
                    "id":"BP30",
                    "author":"Abdul Razack P",
                    "content":"",
                    "title":"Imparting Listening and Speaking skills through movies in CLT Classroom",
                    "titlepre":"Ecologies of the New:Matter, Mind and Body, Volume 2",
                    "year":"2018",
                    "number":"978-93-5300-71-9"
                },
                {
                    "id":"BP31",
                    "author":"Khadeeja Ferin",
                    "content":"",
                    "title":"Customer Relationship Management in Traditional Banking and Modern Banking ",
                    "titlepre":"Proceedings of the National Seminar Resolving and Managing Systematic Banking Crisis",
                    "year":"2019",
                    "number":"978-93-5406-154-7"
                },
                {
                    "id":"BP32",
                    "author":"Abdul Majeed",
                    "content":"",
                    "title":"Green Banking Initiatives in India: A Paradigm Shift towards Sustainable Development ",
                    "titlepre":"Proceedings of the National Seminar Resolving and Managing Systematic Banking Crisis",
                    "year":"2019",
                    "number":"978-93-5406-154-7"
                },
                {
                    "id":"BP33",
                    "author":"Abdul Noufal M",
                    "content":"",
                    "title":"Impact of NPAs in Co-operative Banks in Kerala ",
                    "titlepre":"Proceedings of the National Seminar Resolving and Managing Systematic Banking Crisis",
                    "year":"2019",
                    "number":"978-93-5406-154-7"
                },
                {
                    "id":"BP34",
                    "author":"Naseema K P",
                    "content":"",
                    "title":"Investment Behavior Among Government Employees of Kerala – An analytical study ",
                    "titlepre":"Proceedings of the National Seminar Resolving and Managing Systematic Banking Crisis",
                    "year":"2019",
                    "number":"978-93-5406-154-7"
                },
                {
                    "id":"BP35",
                    "author":"A K Shanawas",
                    "content":"",
                    "title":"Rising Competition for Banks from fin-tech companies – A Descriptive Analysis ",
                    "titlepre":"Proceedings of the National Seminar Resolving and Managing Systematic Banking Crisis",
                    "year":"2019",
                    "number":"978-93-5406-154-7"
                },
                {
                    "id":"BP36",
                    "author":"Hassan Shareef",
                    "content":"",
                    "title":"A historical approach to the evolution of Islamic Education in Kerala",
                    "titlepre":"NSIA 2019- Islam in Academia Proceedings",
                    "year":"2019",
                    "number":"978-93-5361"
                },
                {
                    "id":"BP37",
                    "author":"A M Indu A S Maheswaran",
                    "content":"",
                    "title":"Price Volatility in Banking Sector in the Scenario of the Major Economic Events",
                    "titlepre":"Proceedings of the National SeminarResolving and Managing Systematic Banking Crisis",
                    "year":"2019",
                    "number":"978-93-5406-154-7"
                },
                {
                    "id":"BP38",
                    "author":"Hassan Shareef",
                    "content":"",
                    "title":"Qazi Umar malabari: A Sufi patriot and Leader of Renaissance movement",
                    "titlepre":"Applying Theory, Paradigms, Practces, Facilities",
                    "year":"2020",
                    "number":"978-93-5396-145-9"
                },
                {
                    "id":"BP39",
                    "author":"Shabeeb Khan",
                    "content":"",
                    "title":"Portuguese Rivalry and Muslim resistance on Anticolonial period in Malabar",
                    "titlepre":"Applying Theory, Paradigms, Practces, Facilities",
                    "year":"2020",
                    "number":"978-93-5396-145-9"
                },
                {
                    "id":"BP40",
                    "author":"Dr. Shabanamol S",
                    "content":"Handbook of Biopolymers",
                    "title":"Soy protein Bioploymer",
                    "titlepre":"",
                    "year":"2023",
                    "number":"Hardcover ISBN978-981-19-0709-8 eBook ISBN978-981-19-0710-4, "
                },
                {
                    "id":"BP41",
                    "author":"Dr.Tancia Rosalin",
                    "content":"",
                    "title":"POLYALTHIA KORINTII LEAF EXTRACT-MEDIATED GREEN SYNTHESISED IRON OXIDE NANOPARTICLES FOR BIOLOGICAL AND ENVIRONMENTAL APPLICATIONS",
                    "titlepre":"Proceedings of 35th Kerala Science Congress",
                    "year":"2023",
                    "number":"978-81-953863-7-6"
                },
                {
                    "id":"BP42",
                    "author":"Dr. Hassan Shareef KP",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":"A Study on the Traditional Foods of Thekkepuram",
                    "titlepre":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP43",
                    "author":"Dr. Hassan Shareef KP",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":"Depiction of Culinary Diversity and hospitality in Songs: A Study on Calicut",
                    "titlepre":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                
                {
                    "id":"BP44",
                    "author":"Dr. Shebeeb Khan P",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":" Persian Taste in Indian Culture with Special reference to Biriyani   ",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP45",
                    "author":"Dr. Shebeeb Khan P",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":"Portrayal of Malabar food culture on Chelavoor KC s Mappila Songs  ",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP46",
                    "author":"Dr. Shebeeb Khan P",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":"Tastes of Malabar in The Writings of Ibn Batuta              ",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
              
                {
                    "id":"BP47",
                    "author":"",
                    "content":"",
                    "title":"",
                    "titlepre":"",
                    "year":"2023",
                    "number":""
                },
                {
                    "id":"BP48",
                    "author":"Ms. Semiya.P.M",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":"Transmission of wedding food culture in Thekkeppuram",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP49",
                    "author":"Dr. Hajara.K",
                    "content":"Computational Mathematics and Applied Physics with material science engineering and computer applications ",
                    "title":"Dependance of evaporation residue cross sections on various channel parameters",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-81-961212-1-1"
                },
                {
                    "id":"BP50",
                    "author":"Ms.Semiya.P.M",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":"Sadya: The word indicating the food culture of Kerala",
                    "titlepre":"",
                    "year":"2023",
                    "number":"ISBN: 978-93-5811-420-1"
                },
                {
                    "id":"BP51",
                    "author":"Dr Shabanamol S",
                    "content":"Aquatic Lectins-Immune Defense, Biological Recognition and Molecular Advancements",
                    "title":"Immune system in Fish and role of lectins during infection",
                    "titlepre":"",
                    "year":"2022",
                    "number":"eBook ISBN978-981-19-0432-5"
                },
                {
                    "id":"BP52",
                    "author":"Ms. Semiya.P.M",
                    "content":"Anthology of the Peer Reviewd Research Articles in Humanities ",
                    "title":"Relevance of health maintaining Food served in Karkidaka",
                    "titlepre":"",
                    "year":"2023",
                    "number":"ISBN: 978-93-5811-420-1"
                },
                {
                    "id":"BP53",
                    "author":"Dr.Tancia Rosalin",
                    "content":" ",
                    "title":"Non Polar Extract from Polyalthia korintii Leaves Inhibits Proliferation, Migration, Invasion and Induces Apoptosis in Human Colorectal Carcinoma Cells",
                    "titlepre":"34th Kerala Science Congress-Science, Technology & Innovation for Transition to a Knowledge Economy",
                    "year":"2022",
                    "number":"978-81-953863-1-4"
                },
                {
                    "id":"BP54",
                    "author":"Ms. Aneesunneesa P",
                    "content":"Raising Beyond the Ceiling Kerala:100 Inspiring Muslim Women of Kerala",
                    "title":"Overview of Muslim women in Kerala",
                    "titlepre":"",
                    "year":"2022",
                    "number":"ASIN:BOBG6J355M"
                },
                {
                    "id":"BP55",
                    "author":"Dr.Najda A",
                    "content":"Raising Beyond the Ceiling Kerala:100 Inspiring Muslim Women of Kerala",
                    "title":"Overview of Muslim women in Kerala",
                    "titlepre":"",
                    "year":"2022",
                    "number":"ASIN:BOBG6J355M"
                },
                {
                    "id":"BP56",
                    "author":"Dr. Hassan Shareef KP",
                    "content":"Inter-Religious Understanding For Advancement Of Human Rights For All",
                    "title":"Peaceful Coexistence in Indian Subcontinent: Lessons from Medina Charter of Prophet Muhammed (PBUH)",
                    "titlepre":"",
                    "year":"2022",
                    "number":"ISBN 9789391659097"
                },
                {
                    "id":"BP57",
                    "author":"Mr.A.K.Shanawas",
                    "content":" ",
                    "title":"Kudumbashree: A Ray of hope for women Enterpreneurship",
                    "titlepre":"",
                    "year":"2022",
                    "number":"978-81-909609-0-8"
                },
                {
                    "id":"BP58",
                    "author":"Dr. Haris.M",
                    "content":" ",
                    "title":"Kudumbashree: A Ray of hope for women Enterpreneurship",
                    "titlepre":"",
                    "year":"2022",
                    "number":"978-81-909609-0-8"
                },
                {
                    "id":"BP59",
                    "author":"Jouhara K P",
                    "content":"Intersections of Expressions",
                    "title":"From Rural ponds to digital forums;unveiling shifting dyna,mics in privacy invasion and genedered behaviour",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-340-4095-1"
                },
                {
                    "id":"BP60",
                    "author":"Muhammed Shafeer K P",
                    "content":"International Journal of Advance and applied research",
                    "title":"Kerala Climate and Feminine nature: a critical study of Kamaladas poem-Winter",
                    "titlepre":"",
                    "year":"2024",
                    "number":"2347-7075"
                },
                {
                    "id":"BP61",
                    "author":"Muhammed Shafeer K P",
                    "content":"Proceedings-Socio economic relevance in science, Social science and comerece towards sustainability (SERSSCTS) 2024",
                    "title":"Climate, Nature and Kerala ellegance, A studuy of Kamala das poem-Rain",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-94819-65-8"
                },
                {
                    "id":"BP62",
                    "author":"Muhammed Shafeer K P",
                    "content":"Enriching Mind:Latest Trends in English Literature and English Language in the digital Era",
                    "title":"folk and main stream: Need for popularising folk performances and deconstructing distinctions",
                    "titlepre":"",
                    "year":"2024",
                    "number":"2456-2696"
                },
                {
                    "id":"BP63",
                    "author":"Sreevidya PV",
                    "content":"Sahitya mein manovigyan",
                    "title":"Chitra Mudgal ke balsahitya mein chitrit Bal manovigyan",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5786-621-7"
                },
                {
                    "id":"BP64",
                    "author":"Muhammed Shafeer K P",
                    "content":"Rhetoric of Resilience:Impact of Trauma on Language,Memory and Cultural Narratives ",
                    "title":"Deconstructing the stigma and Traumaof rape in Sithara's Short story Agni",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-2426-5"
                },
                {
                    "id":"BP65",
                    "author":"Mujeeb Rahiman Kattali",
                    "content":"Futuristic Trends in Managements",
                    "title":"Problems and issues of Kudumbashree units in Kerala: Pros and Cons",
                    "titlepre":"",
                    "year":"2024",
                    "number":""
                },
                {
                    "id":"BP66",
                    "author":"Karthika S K",
                    "content":"Indelible Impressions",
                    "title":"A long Walk",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-5605-351-9"
                },
                {
                    "id":"BP67",
                    "author":"Zayana P K",
                    "content":"Rhetoric of Resilience:Impact of Trauma on Language,Memory and Cultural Narratives ",
                    "title":"Behind closed pages: Ethical inquiries in investigative journalism Lessons from the girl with the dragon Tattoo",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-2426-5"
                },
                {
                    "id":"BP68",
                    "author":"Ms. Radhika",
                    "content":"Pandemic Reflections . Stories from the Covid-19 Lockdown",
                    "title":"My own Letters",
                    "titlepre":"",
                    "year":"2024",
                    "number":""
                },
                {
                    "id":"BP69",
                    "author":"Muhammed Shafeer K P",
                    "content":"Recent advancement in Environment, agriculture and climatic change, economic , Business, Accounting, management and enterpreneurship science and Technology, pharmacy and health humanities and social Science",
                    "title":"Kerala Climate and Feminine nature: a critical study of Kamaladas poem-Winter",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-81-971359-2-7"
                },
                {
                    "id":"BP70",
                    "author":"Muhammed Shafeer K P",
                    "content":"Intersections of Expressions",
                    "title":"Space as a determining factor in social distancing and Theendapad in Kerala",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-340-4095-1"
                },
                {
                    "id":"BP71",
                    "author":"Shonima govindan M",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Screening of potential probiotic bacteria from coconut inflorescence Sap",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP72",
                    "author":"Shonima govindan M",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Assessing the pupicidal effect of petroleum ether extract of pogostemon quodrifolius leaves on culex quinquefasciatus",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP73",
                    "author":"Shonima govindan M",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Assessing the pupicidal effect of petroleum ether extract of pogostemon quodrifolius leaves on culex quinquefasciatus",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP74",
                    "author":"Nafila P P",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"vitro analysis and evaluation of bioactiv compounds from extracts of plant pimento Dioica",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP75",
                    "author":"Akhila P K",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Construction and Validation of EGFP expressing vector to analse miRNA binding in RGC-5 Cells",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP76",
                    "author":"Nafila P P",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Bio activity of crude protein extracted from seeds of medicago",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP77",
                    "author":"Shonima govindan M",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Phytochemical analysis and evolution of larvicidal property of leaf and flower extracts of pogostemon quadrifolius (Benth) F. Muell against Culex quinquefasciatus",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP78",
                    "author":"Anjana K",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Bioprospecting of bacteria isolated from the rhizospheric soil of black pepper",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP79",
                    "author":"S. Shabanamol",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Isolation and characterization of endophytic bacteria from Allium Sativum as a potential biocontrol agent",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP80",
                    "author":"Shainy N K",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Isolation, identification and partial Characterization studies of Quinalphos pesticide degradation by soil isolate",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP81",
                    "author":"Shabanamol. S",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Review on nutritional and antioxident properties of foxtail millet",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP82",
                    "author":"Akhila P K",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Evaluation of activities of hibiscus species with special emphasis to its phytochemical potential",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP83",
                    "author":"Akhila P K",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Antimicrobial property of spider web extracts ",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP84",
                    "author":"Anjana K",
                    "content":"Millet Magic sowing sustainable futures- 2023",
                    "title":"Antibacterial activity of Barrungtonia acutangula crude seed Protein (L.) Gaertn",
                    "titlepre":"Two day national seminar Millet Magic",
                    "year":"2023",
                    "number":"978-93-6013-102-9"
                },
                {
                    "id":"BP85",
                    "author":"Dr. Shebeeb Khan P",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Persian Taste in Indian Culture with Special reference to Biriyani",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP86",
                    "author":"Dr. Shebeeb Khan P",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Portrayal of Malabar food culture on Chelavoor KC's Mappila songs",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP87",
                    "author":"Dr. Shebeeb Khan P",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Tastes of Malabar in the writings of Ibnu Battuta",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP88",
                    "author":"Dr. Hassan Shareef K P",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"A study on the traditional foods of Thekkeppuram",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP89",
                    "author":"Dr. Hassan Shareef K P",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Depiction of culinary diversity and hospitality in songs: A study on Calicut",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP90",
                    "author":"Semiya. P M",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Relevance of health maintaining food served in Karkidaka",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP91",
                    "author":"Semiya. P M",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Sadya: The word indicating the food culture of Kerala",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP92",
                    "author":"Semiya. P M",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Transmission of wedding food culture in Thekkeppuram",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP93",
                    "author":"Raheena P",
                    "content":"Anthology of peer reviewed research articles in Humanities",
                    "title":"Women as a subaltern: A critical analysis of servility In That long silence",
                    "titlepre":"",
                    "year":"2023",
                    "number":"978-93-5811-420-1"
                },
                {
                    "id":"BP94",
                    "author":"Anusha R",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"The future of food : Exploring the potential of cellular agriculture",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP95",
                    "author":"Aiswarya P M",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Exploring the trends in nutrition knowledge food preferences and sustainable consumption: A comprehensive analysis",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP96",
                    "author":"Aiswarya P M",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Orbiting nutrition: The science and art of space food for astronauts",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP97",
                    "author":"Noorjahan K",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Nutritional and functional potential of spent coffee grounds: From macronutrients to health applications",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP98",
                    "author":"Aiswarya P M",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Artificial intelligence in food safety",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP99",
                    "author":"Aiswarya P M",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Comparative study of enzymatic hydrolyzed collagen peptide from fish born using conventional and microwave assisted extraction",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP100",
                    "author":"Sujitha. A.P",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"3D food printing: Application and futre perspective",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP101",
                    "author":"Sujitha. A.P",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Precision nutrition: crafting health to customized diets",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP102",
                    "author":"Sujitha. A.P",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Advancing green extraction: Deep Eutectic solvents unveiled as potent tools for enhanced polyphenol recovery from plants",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP103",
                    "author":"Nasim Banu B",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Anthocyanin Extraction: A novel approach bu coupling instantaneous pressure drop and microwave assisted process",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP104",
                    "author":"Shabanamol. S",
                    "content":"Byproduct Valourization- A healthy and sustainable approach",
                    "title":"Role of Nanotechnology in waste valorization",
                    "titlepre":"Proceedings of Two day national seminar",
                    "year":"2024",
                    "number":"978-93-340-3528-5"
                },
                {
                    "id":"BP105",
                    "author":"Abdul Majeed K",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Green marketing initiatives for sustainable development: insights from india's Business landscape",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP106",
                    "author":"Prajeesh Thazhathedath",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Exploring the influence of customer4 loyalty programs in shopping malls on customer retention: A case study of Kozhikode District",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP107",
                    "author":"Muneera. D N",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Unraveling the non performing Asset crisis in private sector Banks, A comparative study of ICICI and Axis Bank",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP108",
                    "author":"Shana Wahab",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"The social impact of microfinance institutions on poverty Alleviation and women empowerment in India",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP109",
                    "author":"Shaheer Anaz TV",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Reshaping infrastructure development: The Shukuk solution for inclusive capital mobilization in developing nations",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP110",
                    "author":"Abdul Nisam",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Examining the influence of celebrity Endorsement of consumer buying behaviour. With special focus on Kerala",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP111",
                    "author":"Dr. Haris M",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"An overall study on women Enterpreneurship development programmes",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP112",
                    "author":"Radhika P K",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Unveiling the dynamics: A statistical Examination of the interplay between national education policy 2020 and economic growth",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP113",
                    "author":"Safa Hanan, A.K Shanawas",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Navigating trust and Technology: Overcoming Barriers to digital banking adoption in India",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },
                {
                    "id":"BP114",
                    "author":"Lukmanul Hakeem M, Zanoobiya K M, Thahsin V K",
                    "content":"Navigating complexity: Agent based models for public policy and business decision making",
                    "title":"Financial inclusion in Rural areas: A comparative study of minority groups in Malappuram District",
                    "titlepre":"",
                    "year":"2024",
                    "number":"978-93-340-4753-0"
                },

                
            ],
            journalstable:[],
            bookstable:[],
            patents:[
                {
                    "id":"1",
                    "title":"SYSTEMATIC APPROACH TO MANAGE PROCESSING OF INTERNET OF THINGS (IOT) DATA INTEGRATING THE TECHNIQUES OF BIG DATA ANALYTICS AND MACHINE LEARNING FOR CLASSICAL DATA PROCESSING PRACTICE",
                    "name":"Abdul Samad C.",
                    "department":"Computer Science",
                    "document":"../docs/patents/1.pdf"
                },
                {
                    "id":"2",
                    "title":"Automatic recognition of eye's state using deep learning approch",
                    "name":"Arshad P.T.",
                    "department":"Computer Science",
                    "document":"../docs/patents/2.pdf"
                },
                {
                    "id":"3",
                    "title":"ARTIFICIAL INTELLIGENCE BASED TECHNIQUES INTEGRATED WITH INTERNET OF THINGS (IOT) FOR IMPLEMENTING SAFETY CONTRUCTION MANAGEMENT SYSTEM",
                    "name":"Abdul Samad C.",
                    "department":"Computer Science",
                    "document":"../docs/patents/3.pdf"
                },
                {
                    "id":"4",
                    "title":"INDUSTRIAL ERP SYSTEM OVER BLOCKCHAIN TECHNOLOGY",
                    "name":"Arshad P.T.",
                    "department":"Computer Science",
                    "document":"../docs/patents/4.pdf"
                }
            ]
        }
    },
    methods:{
        changeJournal(){
            if(this.Jyear=='all'){
                this.journalstable=this.journals.reverse()
            }else{
                this.journalstable=this.journals.filter((i)=>i.year==this.Jyear)
            }
        },
        changeBook(){
            if(this.Byear=='all'){
                this.bookstable=this.books.reverse()
            }else{
                this.bookstable=this.books.filter((i)=>i.year==this.Byear)
            }
        }
    },
    mounted(){
        this.journalstable=this.journals.reverse()

        this.bookstable=this.books.reverse()

    }
}

Vue.createApp(App).mount('#page-content')