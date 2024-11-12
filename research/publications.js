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