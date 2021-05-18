import react from 'react';
let statList = [
    {
        "name": "Mahendra Singh Dhoni",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170677/ms-dhoni.jpg",
        "match": 350,
        "inning": 297,
        "runs": 10773,
        "highest-score": 183,
        "not-out": 84,
        "hundred": 10,
        "fifty": 73,
        "binning": 2,
        "balls": 36,
        "wicket": 1,
    },
    {
        "name": "Virat Kohli",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170661/virat-kohli.jpg",
        "match": 254,
        "inning": 245,
        "runs": 12169,
        "highest-score": 183,
        "not-out": 39,
        "hundred": 43,
        "fifty": 62,
        "binning": 48,
        "balls": 641,
        "wicket": 4,
    },
    {
        "name": "Rohit Sharma",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170658/rohit-sharma.jpg",
        "match": 227,
        "inning": 220,
        "runs": 9205,
        "highest-score": 264,
        "not-out": 32,
        "hundred": 29,
        "fifty": 43,
        "binning": 38,
        "balls": 593,
        "wicket": 8,
    },
    // {
    //     "name": "Yuvraj Singh",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171064/yuvraj-singh.jpg",
    //     "match": 304,
    //     "inning": 278,
    //     "runs": 8701,
    //     "highest-score": 150,
    //     "not-out": 40,
    //     "hundred": 14,
    //     "fifty": 52,
    //     "binning": 161,
    //     "balls": 5048,
    //     "wicket": 111,
    // },
    // {
    //     "name": "Suresh Raina",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c148324/suresh-raina.jpg",
    //     "match": 226,
    //     "inning": 194,
    //     "runs": 5616,
    //     "highest-score": 116,
    //     "not-out": 35,
    //     "hundred": 5,
    //     "fifty": 36,
    //     "binning": 101,
    //     "balls": 2126,
    //     "wicket": 36,
    // },
    // {
    //     "name": "KL Rahul",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170673/kl-rahul.jpg",
    //     "match": 38,
    //     "inning": 37,
    //     "runs": 1509,
    //     "highest-score": 112,
    //     "not-out": 6,
    //     "hundred": 5,
    //     "fifty": 9,
    //     "binning": 0,
    //     "balls": 0,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Virendra Sehwag",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171002/virender-sehwag.jpg",
    //     "match": 251,
    //     "inning": 245,
    //     "runs": 8273,
    //     "highest-score": 219,
    //     "not-out": 9,
    //     "hundred": 15,
    //     "fifty": 38,
    //     "binning": 146,
    //     "balls": 4392,
    //     "wicket": 96,
    // },
    // {
    //     "name": "Shikhar Dhawan",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170660/shikhar-dhawan.jpg",
    //     "match": 142,
    //     "inning": 139,
    //     "runs": 5977,
    //     "highest-score": 143,
    //     "not-out": 7,
    //     "hundred": 17,
    //     "fifty": 32,
    //     "binning": 0,
    //     "balls": 0,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Irfan Pathan",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c155113/irfan-pathan.jpg",
    //     "match": 120,
    //     "inning": 87,
    //     "runs": 1544,
    //     "highest-score": 83,
    //     "not-out": 21,
    //     "hundred": 0,
    //     "fifty": 5,
    //     "binning": 118,
    //     "balls": 5855,
    //     "wicket": 173,
    // },
    // {
    //     "name": "Zaheer Khan",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c150980/zaheer-khan.jpg",
    //     "match": 200,
    //     "inning": 101,
    //     "runs": 792,
    //     "highest-score": 34,
    //     "not-out": 35,
    //     "hundred": 0,
    //     "fifty": 0,
    //     "binning": 197,
    //     "balls": 10097,
    //     "wicket": 282,
    // },
    // {
    //     "name": "Harbhajan Singh",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c153922/harbhajan-singh.jpg",
    //     "match": 236,
    //     "inning": 128,
    //     "runs": 1237,
    //     "highest-score": 49,
    //     "not-out": 35,
    //     "hundred": 0,
    //     "fifty": 0,
    //     "binning": 227,
    //     "balls": 12479,
    //     "wicket": 269,
    // },
    // {
    //     "name": "Ravindra Jadeja",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170670/ravindra-jadeja.jpg",
    //     "match": 168,
    //     "inning": 113,
    //     "runs": 2411,
    //     "highest-score": 87,
    //     "not-out": 39,
    //     "hundred": 0,
    //     "fifty": 13,
    //     "binning": 164,
    //     "balls": 8557,
    //     "wicket": 188,
    // },
    // {
    //     "name": "Ravchandran Ashwin",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c153372/ravichandran-ashwin.jpg",
    //     "match": 111,
    //     "inning": 61,
    //     "runs": 675,
    //     "highest-score": 65,
    //     "not-out": 19,
    //     "hundred": 0,
    //     "fifty": 1,
    //     "binning": 109,
    //     "balls": 6021,
    //     "wicket": 150,
    // },
    // {
    //     "name": "Bhuvneshwar Kumar",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170689/bhuvneshwar-kumar.jpg",
    //     "match": 117,
    //     "inning": 53,
    //     "runs": 529,
    //     "highest-score": 53,
    //     "not-out": 15,
    //     "hundred": 0,
    //     "fifty": 1,
    //     "binning": 116,
    //     "balls": 5625,
    //     "wicket": 138,
    // },
    {
        "name": "Shahid Afridi",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c146389/shahid-afridi.jpg",
        "match": 398,
        "inning": 369,
        "runs": 8064,
        "highest-score": 124,
        "not-out": 27,
        "hundred": 6,
        "fifty": 39,
        "binning": 372,
        "balls": 17670,
        "wicket": 395,
    },
    {
        "name": "Shoaib Akhtar",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c156004/shoaib-akhtar.jpg",
        "match": 163,
        "inning": 84,
        "runs": 394,
        "highest-score": 53,
        "not-out": 40,
        "hundred": 0,
        "fifty": 0,
        "binning": 162,
        "balls": 7764,
        "wicket": 247,
    },
    {
        "name": "Shoaib Malik",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170775/shoaib-malik.jpg",
        "match": 287,
        "inning": 258,
        "runs": 7534,
        "highest-score": 143,
        "not-out": 40,
        "hundred": 9,
        "fifty": 44,
        "binning": 217,
        "balls": 7958,
        "wicket": 158,
    },
    // {
    //     "name": "Mohammad Hafeez",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170776/mohammad-hafeez.jpg",
    //     "match": 218,
    //     "inning": 216,
    //     "runs": 6614,
    //     "highest-score": 140,
    //     "not-out": 15,
    //     "hundred": 11,
    //     "fifty": 38,
    //     "binning": 177,
    //     "balls": 7733,
    //     "wicket": 139,
    // },
    // {
    //     "name": "Adam Gichrist",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c156206/adam-gilchrist.jpg",
    //     "match": 287,
    //     "inning": 279,
    //     "runs": 9619,
    //     "highest-score": 172,
    //     "not-out": 11,
    //     "hundred": 16,
    //     "fifty": 55,
    //     "binning": 0,
    //     "balls": 0,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Matthew Hayden",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c180327/matthew-hayden.jpg",
    //     "match": 161,
    //     "inning": 155,
    //     "runs": 6133,
    //     "highest-score": 181,
    //     "not-out": 15,
    //     "hundred": 10,
    //     "fifty": 36,
    //     "binning": 1,
    //     "balls": 6,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Ricky Ponting",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c154735/ricky-ponting.jpg",
    //     "match": 375,
    //     "inning": 365,
    //     "runs": 13704,
    //     "highest-score": 164,
    //     "not-out": 39,
    //     "hundred": 30,
    //     "fifty": 82,
    //     "binning": 5,
    //     "balls": 150,
    //     "wicket": 3,
    // },
    // {
    //     "name": "Shane Watson",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c180329/shane-watson.jpg",
    //     "match": 190,
    //     "inning": 169,
    //     "runs": 5757,
    //     "highest-score": 185,
    //     "not-out": 27,
    //     "hundred": 9,
    //     "fifty": 33,
    //     "binning": 163,
    //     "balls": 6466,
    //     "wicket": 168,
    // },
    // {
    //     "name": "Brett Lee",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c151600/brett-lee.jpg",
    //     "match": 221,
    //     "inning": 110,
    //     "runs": 1176,
    //     "highest-score": 59,
    //     "not-out": 44,
    //     "hundred": 0,
    //     "fifty": 3,
    //     "binning": 117,
    //     "balls": 11185,
    //     "wicket": 380,
    // },
    // {
    //     "name": "David Warner",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170635/david-warner.jpg",
    //     "match": 128,
    //     "inning": 126,
    //     "runs": 5455,
    //     "highest-score": 179,
    //     "not-out": 5,
    //     "hundred": 18,
    //     "fifty": 23,
    //     "binning": 1,
    //     "balls": 6,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Sachin Tendulkar",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c171004/sachin-tendulkar.jpg",
    //     "match": 463,
    //     "inning": 452,
    //     "runs": 18426,
    //     "highest-score": 200,
    //     "not-out": 41,
    //     "hundred": 49,
    //     "fifty": 96,
    //     "binning": 270,
    //     "balls": 8054,
    //     "wicket": 154,
    // },
    // {
    //     "name": "Kane Williamson",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170733/kane-williamson.jpg",
    //     "match": 151,
    //     "inning": 144,
    //     "runs": 6174,
    //     "highest-score": 148,
    //     "not-out": 14,
    //     "hundred": 13,
    //     "fifty": 39,
    //     "binning": 65,
    //     "balls": 1467,
    //     "wicket": 37,
    // },
    // {
    //     "name": "Ross Taylor",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170729/ross-taylor.jpg",
    //     "match": 233,
    //     "inning": 217,
    //     "runs": 8576,
    //     "highest-score": 181,
    //     "not-out": 39,
    //     "hundred": 21,
    //     "fifty": 51,
    //     "binning": 6,
    //     "balls": 42,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Martin Guptill",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170731/martin-guptill.jpg",
    //     "match": 186,
    //     "inning": 183,
    //     "runs": 6927,
    //     "highest-score": 237,
    //     "not-out": 18,
    //     "hundred": 16,
    //     "fifty": 37,
    //     "binning": 12,
    //     "balls": 109,
    //     "wicket": 4,
    // },
    {
        "name": "Brendon McCullum",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c156149/brendon-mccullum.jpg",
        "match": 260,
        "inning": 228,
        "runs": 6083,
        "highest-score": 166,
        "not-out": 28,
        "hundred": 5,
        "fifty": 32,
        "binning": 1,
        "balls": 0,
        "wicket": 0,
    },
    // {
    //     "name": "AB de Villiers",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170999/ab-de-villiers.jpg",
    //     "match": 228,
    //     "inning": 218,
    //     "runs": 9577,
    //     "highest-score": 176,
    //     "not-out": 39,
    //     "hundred": 25,
    //     "fifty": 53,
    //     "binning": 9,
    //     "balls": 192,
    //     "wicket": 7,
    // },
    // {
    //     "name": "Hashim Amla",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170633/hashim-amla.jpg",
    //     "match": 181,
    //     "inning": 178,
    //     "runs": 8113,
    //     "highest-score": 159,
    //     "not-out": 14,
    //     "hundred": 27,
    //     "fifty": 39,
    //     "binning": 0,
    //     "balls": 0,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Dale Steyn",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170769/dale-steyn.jpg",
    //     "match": 125,
    //     "inning": 51,
    //     "runs": 365,
    //     "highest-score": 60,
    //     "not-out": 12,
    //     "hundred": 0,
    //     "fifty": 1,
    //     "binning": 124,
    //     "balls": 6256,
    //     "wicket": 196,
    // },
    // {
    //     "name": "James Anderson",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c173031/james-anderson.jpg",
    //     "match": 194,
    //     "inning": 79,
    //     "runs": 273,
    //     "highest-score": 28,
    //     "not-out": 43,
    //     "hundred": 0,
    //     "fifty": 0,
    //     "binning": 191,
    //     "balls": 9584,
    //     "wicket": 269,
    // },
    // {
    //     "name": "Eoin Morgan",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170936/eoin-morgan.jpg",
    //     "match": 243,
    //     "inning": 226,
    //     "runs": 7620,
    //     "highest-score": 148,
    //     "not-out": 32,
    //     "hundred": 14,
    //     "fifty": 46,
    //     "binning": 0,
    //     "balls": 0,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Jos Buttler",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170980/jos-buttler.jpg",
    //     "match": 148,
    //     "inning": 123,
    //     "runs": 3872,
    //     "highest-score": 150,
    //     "not-out": 23,
    //     "hundred": 9,
    //     "fifty": 20,
    //     "binning": 0,
    //     "balls": 0,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Kumar Sangakkara",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c155723/kumar-sangakkara.jpg",
    //     "match": 404,
    //     "inning": 380,
    //     "runs": 14234,
    //     "highest-score": 169,
    //     "not-out": 41,
    //     "hundred": 25,
    //     "fifty": 93,
    //     "binning": 0,
    //     "balls": 0,
    //     "wicket": 0,
    // },
    // {
    //     "name": "Tillakaratne Dilshan",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c154992/tillakaratne-dilshan.jpg",
    //     "match": 330,
    //     "inning": 303,
    //     "runs": 10290,
    //     "highest-score": 161,
    //     "not-out": 41,
    //     "hundred": 22,
    //     "fifty": 47,
    //     "binning": 204,
    //     "balls": 5880,
    //     "wicket": 106,
    // },
    // {
    //     "name": "Angelo Mathews",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170706/angelo-mathews.jpg",
    //     "match": 218,
    //     "inning": 188,
    //     "runs": 5835,
    //     "highest-score": 139,
    //     "not-out": 48,
    //     "hundred": 3,
    //     "fifty": 40,
    //     "binning": 158,
    //     "balls": 5191,
    //     "wicket": 120,
    // },
    // {
    //     "name": "Mahela Jayawardene",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c153241/mahela-jayawardene.jpg",
    //     "match": 448,
    //     "inning": 418,
    //     "runs": 12650,
    //     "highest-score": 144,
    //     "not-out": 39,
    //     "hundred": 19,
    //     "fifty": 77,
    //     "binning": 28,
    //     "balls": 593,
    //     "wicket": 8,
    // },
    // {
    //     "name": "Lasith Malinga",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170724/lasith-malinga.jpg",
    //     "match": 226,
    //     "inning": 119,
    //     "runs": 567,
    //     "highest-score": 56,
    //     "not-out": 36,
    //     "hundred": 0,
    //     "fifty": 1,
    //     "binning": 220,
    //     "balls": 10936,
    //     "wicket": 338,
    // },
    // {
    //     "name": "Shakib Al Hasan",
    //     "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170912/shakib-al-hasan.jpg",
    //     "match": 209,
    //     "inning": 197,
    //     "runs": 6436,
    //     "highest-score": 134,
    //     "not-out": 27,
    //     "hundred": 9,
    //     "fifty": 48,
    //     "binning": 206,
    //     "balls": 10650,
    //     "wicket": 266,
    // },
    {
        "name": "Mashrafe Mortaza",
        "profile": "https://www.cricbuzz.com/a/img/v1/152x152/i1/c170920/mashrafe-mortaza.jpg",
        "match": 220,
        "inning": 158,
        "runs": 1787,

        "highest-score": 51,
        "not-out": 28,
        "hundred": 0,
        "fifty": 1,
        "binning": 220,
        "balls": 10928,
        "wicket": 270,
    }


];
function shuffle() {
 
    for (let i = 0; i < statList.length; i++) {
        let j = Math.floor(Math.random() * statList.length);
        let temp = statList[i];
        statList[i] = statList[j]
        statList[j] = temp;
    }
   
}





export default statList;
export {shuffle};