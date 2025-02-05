const App = {
    data() {
        return {
            office: [
                { id: 'o1', name: 'Ms. T.T.P. Kaneez Ameer; M.A.', desg: 'Administrative Officer' },
                { id: 'o2', name: 'Mr. Shaheed K., M.Com', desg: 'Senior Accountant' },
                { id: 'o3', name: 'Ms. Shapna Nair K.K.; Dip. in Comp. Engg.', desg: 'Section Officer' },
                { id: 'o4', name: 'Mr. Junaid A.V.; M.Sc.', desg: 'Office Secretary' },
                { id: 'o5', name: 'Ms. Soumya P.C.', desg: 'Receptionist cum Office Assistant' },
                { id: 'o6', name: 'Mr. Muhammed Anas P.', desg: 'Accountant' },
                { id: 'o7', name: 'Mr. Ameen M.V.', desg: 'Junior Accountant' },
                { id: 'o8', name: 'Mr. Ashraf K.T., BA', desg: 'Cashier' },
            ],
            support: [
                { id: 's2', name: 'Ms. Anju C.B.', desg: 'Document Controller' },
                { id: 's3', name: 'Mr. Muhammed Yaseen A.', desg: 'Computer Lab Assistant' },
                { id: '9', name: 'Mr. Abdul Haque M	', desg: 'Office Attendant' },
                { id: '10', name: 'Mr. Salmanul Faris K', desg: 'Office Attendant' },
                { id: '11', name: 'Mr. Abdul Kareem ', desg: 'Electrician cum Plumber' },
                { id: '12', name: 'Mr. Muhammed Rafi', desg: 'Driver cum Attendant' },
                { id: '13', name: 'Mr. Musthafa K.M.', desg: 'Driver cum Attendant' },
                { id: '14', name: 'Mr. Mohammed P.V.', desg: 'Driver cum Attendant' },
                { id: '15', name: 'Mr. Abbas Ali K.P.', desg: 'Driver cum Attendant' },
                { id: '16', name: 'Mr. Sunil Kumar K.', desg: 'Driver cum Attendant' },
                { id: '17', name: 'Mr. Mohammed K.', desg: 'Driver cum Attendant' },
                { id: '18', name: 'Mr. Mujeeb Rahman', desg: 'Driver cum Attendant' },
                { id: '19', name: 'Mr. Ashraf V.M.', desg: 'Driver cum Attendant' },
                { id: '20', name: 'Mr. Abdul Rahoof T.P.', desg: 'Driver cum Attendant' },
                { id: '24', name: 'Ms. Sainaba T.C.', desg: 'Housekeeping - Part-time' },
                { id: '25', name: 'Ms. Santha K.P.', desg: 'Housekeeping - Part-time	' },
                { id: '26', name: 'Ms. Devi V.P.', desg: 'Housekeeping - Part-time ' },
                { id: '27', name: 'Ms. Valsala M.', desg: 'Housekeeping - Part-time' },
                { id: '28', name: 'Ms. Saljara K.', desg: 'Housekeeping - Part-time ' },
                { id: '29', name: 'Ms. Janaki', desg: 'Housekeeping - Part-time ' },


            ],
            lab: [
                { id: 'l1', name: 'Ms. Naseera P.V.; M.Sc.', desg: 'Senior Lab Assistant' },
                { id: 'l2', name: 'Ms. Faseela P.P.', desg: 'Lab Assistant' },
                { id: 'l3', name: 'Mr. Divakaran; V.K.', desg: 'Lab Assistant	' },
                { id: 'l4', name: 'Ms. Abitha V.', desg: 'Lab Assistant	' },
                { id: 'l5', name: 'Ms. Fathimath Suhara P.', desg: 'Lab Assistant' },
                { id: 'l6', name: 'Mr. Sidhique M,', desg: 'Lab Assistant' },

            ],
            lhostel: [
                { id: 'lh1', name: 'Ms. Sulojana', desg: 'Matron' },
                { id: 'lh2', name: 'Ms. Bindhu', desg: 'Matron' },

                { id: 'lh3', name: 'Ms. Saroja P.', desg: 'Housekeeping - Part-time' },
                { id: 'lh4', name: 'Ms. Jaanu', desg: 'Helper' }
            ],
            mhostel: [
                { id: 'mh1', name: 'Mr. Farooq M', desg: 'Warden' },

                { id: 'mh2', name: 'Ms. Kumari P.', desg: 'Housekeeping - Part-time' },
            ],
            library: [
                { id: "44", name: "Mr. Yaseen Aboobacker K.V.", desg: "Chief Librarian" },
                { id: "45", name: "Ms. Mufeeda, M.LiSc.", desg: "Assistant Librarian" },
                { id: "46", name: "Ms. Subaida", desg: "Library Assistant" },

            ]
        }
    }

}


Vue.createApp(App).mount('#page-content')