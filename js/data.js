var uvod = [
    {
        "text": "Spojené státy americké (anglicky United States of America, používané také United States, zkratka US nebo USA, česky Spojené státy) jsou demokratická federativní prezidentská republika v Severní Americe, rozkládající se od Atlantského po Tichý oceán. Na souši sousedí s Kanadou a Mexikem. Díky státu Aljaška sahá území Spojených států amerických i k břehům Severního ledového oceánu (Beringova úžina je dělí od asijského území Ruska) a na některé tichomořské ostrovy (zejména Havaj). Spojené státy se skládají z 50 států, jednoho federálního území s hlavním městem a sídlem prezidenta, Kongresu a Nejvyššího soudu (District of Columbia), šesti závislých území (Portoriko, Severní Mariany, Guam, Americké Panenské ostrovy, Americká Samoa a atol Palmyra) a deseti malých ostrovů či útesů."
    }
]

var obrazky = [
    {
        "name": "New York",
        "shot": "new_york",
        "description": "Část území státu New York byla v 17. století součástí nizozemské provincie Nové Nizozemí, kterou Angličané v roce 1664 obsadili. Založili zde provincii, kterou pojmenovali po Jakubovi, vévodovi z Yorku. Provincie se roku 1776 stala jedním z původních třinácti zakládajících států USA."
    },
    {
        "name": "Texas",
        "shot": "texas",
        "description": "Se svou rozlohou 696 241 je Texas druhým největším státem USA, v počtu obyvatel (27,9 milionů) je rovněž druhým nejlidnatějším státem. Obyvatelstvo Texasu je velmi různorodé. Neustále se mění kvůli přílivu obyvatel z Mexika a z Latinské Ameriky."
    },
    {
        "name": "Florida",
        "shot": "florida",
        "description": "Na Floridě jsou velmi časté hurikány. Sezóna je od prosince do března, kdy teplota není až tak vysoká. V létě se teplota drží často nad třicet stupňů a noci jsou velmi teplé. Teplota moře se pohybuje okolo třiceti stupňů Celsia."
    }
];

var obrazky2 = [
    {
        "name": "Utah",
        "shot": "utah",
        "description": "Utah je jedním z nábožensky nejhomogennějším státům USA, asi 62 % jeho obyvatel se hlásí k mormonismu, který stál u založení státu a dodnes má velký vliv na utažskou kulturu a každodenní život. Mottem státu je „Industry“, květinou lilie (Calochortus nuttallii), stromem smrk pichlavý, ptákem racek a písní „Utah, We Love Thee“."
    },
    {
        "name": "Kalifornie",
        "shot": "kalifornie",
        "description": "Kalifornie je nejlidnatějším státem USA. Podle sčítání lidu z roku 2010 zde žilo 37 253 956 obyvatel, v roce 2014 to již bylo přibližně 38 340 000 obyvatel. Je to také nejvíc urbanizovaný stát USA, ve městech v roce 2010 žilo 95 % obyvatel Kalifornie. Hustota zalidnění je 95 obyvatel na čtvereční kilometr."
    },
    {
        "name": "Minnesota",
        "shot": "minnesota",
        "description": "Minnesota je známa jako země tisíce jezer, která spolu s mnohými parky a lesy nabízejí obyvatelům a turistům prostor k rekreaci. Skoro 60 % obyvatel žije v oblasti aglomerace Minneapolis-Saint Paul. Tato dvě města jsou centrem obchodu, dopravy i průmyslu ve státě. Na západě státu je mnoho prérií, které jsou nyní intenzivně využívány k zemědělství, na východě jsou listnaté lesy a na severu méně obydlené oblasti tajg."
    }
];

var staty = [
    {
        "czname": "Alabama",
        "enname": "Alabama",
        "capital": "Montgomery",
        "img": "alabama",
        "area": "135 765",
        "population": "4 779 736",
        "link": "https://cs.wikipedia.org/wiki/Alabama"
    },
    {
        "czname": "Aljaška",
        "enname": "Alaska",
        "capital": "Juneau",
        "img": "aljaska",
        "area": "1 717 854",
        "population": "710 231",
        "link": "https://cs.wikipedia.org/wiki/Alja%C5%A1ka"
    },
    {
        "czname": "Arizona",
        "enname": "Arizona",
        "capital": "Phoenix",
        "img": "arizona",
        "area": "295 254",
        "population": "6 392 017",
        "link": "https://cs.wikipedia.org/wiki/Arizona"
    },
    {
        "czname": "Arkansas",
        "enname": "Arkansas",
        "capital": "Little Rock",
        "img": "arkansas",
        "area": "137 732",
        "population": "2 915 915",
        "link": "https://cs.wikipedia.org/wiki/Arkansas"
    },
    {
        "czname": "Kalifornie",
        "enname": "California",
        "capital": "Sacramento",
        "img": "kalifornie",
        "area": "423 970",
        "population": "39 250 017",
        "link": "https://cs.wikipedia.org/wiki/Kalifornie"
    },
    {
        "czname": "Colorado",
        "enname": "Colorado",
        "capital": "Denver",
        "img": "colorado",
        "area": "269 837",
        "population": "5 029 196",
        "link": "https://cs.wikipedia.org/wiki/Colorado"
    },
    {
        "czname": "Connecticut",
        "enname": "Connecticut",
        "capital": "Hartford",
        "img": "connecticut",
        "area": "14 371",
        "population": "3 574 097",
        "link": "https://cs.wikipedia.org/wiki/Connecticut"
    },
    {
        "czname": "Delaware",
        "enname": "Delaware",
        "capital": "Dover",
        "img": "delaware",
        "area": "6 542",
        "population": "897 934",
        "link": "https://cs.wikipedia.org/wiki/Delaware"
    },
    {
        "czname": "Florida",
        "enname": "Florida",
        "capital": "Tallahassee",
        "img": "florida",
        "area": "170 451",
        "population": "18 801 310",
        "link": "https://cs.wikipedia.org/wiki/Florida"
    },
    {
        "czname": "Georgie",
        "enname": "Georgia",
        "capital": "Atlanta",
        "img": "georgie",
        "area": "154 077",
        "population": "9 687 653",
        "link": "https://cs.wikipedia.org/wiki/Georgie"
    },
    {
        "czname": "Havaj",
        "enname": "Hawaii",
        "capital": "Honolulu",
        "img": "havaj",
        "area": "28 337",
        "population": "1 360 301",
        "link": "https://cs.wikipedia.org/wiki/Havaj"
    },
    {
        "czname": "Idaho",
        "enname": "Idaho",
        "capital": "Boise",
        "img": "idaho",
        "area": "216 632",
        "population": "1 567 582",
        "link": "https://cs.wikipedia.org/wiki/Idaho"
    },
    {
        "czname": "Illinois",
        "enname": "Illinois",
        "capital": "Springfield",
        "img": "illinois",
        "area": "149 997",
        "population": "12 830 632",
        "link": "https://cs.wikipedia.org/wiki/Illinois"
    },
    {
        "czname": "Indiana",
        "enname": "Indiana",
        "capital": "Indianapoliss",
        "img": "indiana",
        "area": "94 321",
        "population": "6 483 802",
        "link": "https://cs.wikipedia.org/wiki/Indiana"
    },
    {
        "czname": "Iowa",
        "enname": "Iowa",
        "capital": "Des Moines",
        "img": "iowa",
        "area": "145 746",
        "population": "3 046 355",
        "link": "https://cs.wikipedia.org/wiki/Iowa"
    },
    {
        "czname": "Kansas",
        "enname": "Kansas",
        "capital": "Topeka",
        "img": "kansas",
        "area": "213 283",
        "population": "2 853 118",
        "link": "https://cs.wikipedia.org/wiki/Kansas"
    },
    {
        "czname": "Kentucky",
        "enname": "Kentucky",
        "capital": "Frankfort",
        "img": "kentucky",
        "area": "104 749",
        "population": "4 339 367",
        "link": "https://cs.wikipedia.org/wiki/Kentucky"
    },
    {
        "czname": "Louisiana",
        "enname": "Louisiana",
        "capital": "Baton Rouge",
        "img": "louisiana",
        "area": "135 382",
        "population": "4 533 372",
        "link": "https://cs.wikipedia.org/wiki/Louisiana"
    },
    {
        "czname": "Maine",
        "enname": "Maine",
        "capital": "Augusta",
        "img": "maine",
        "area": "86 542",
        "population": "1 328 361",
        "link": "https://cs.wikipedia.org/wiki/Maine"
    },
    {
        "czname": "Maryland",
        "enname": "Maryland",
        "capital": "Annapolis",
        "img": "maryland",
        "area": "32 160",
        "population": "5 773 552",
        "link": "https://cs.wikipedia.org/wiki/Maryland"
    },
    {
        "czname": "Massachusetts",
        "enname": "Massachusetts",
        "capital": "Boston",
        "img": "massachusetts",
        "area": "27 360",
        "population": "6 547 629",
        "link": "https://cs.wikipedia.org/wiki/Massachusetts"
    },
    {
        "czname": "Michigan",
        "enname": "Michigan",
        "capital": "Lansing",
        "img": "michigan",
        "area": "250 941",
        "population": "9 883 640",
        "link": "https://cs.wikipedia.org/wiki/Michigan"
    },
    {
        "czname": "Minnesota",
        "enname": "Minnesota",
        "capital": "Saint Paul",
        "img": "minnesota",
        "area": "225 365",
        "population": "5 303 925",
        "link": "https://cs.wikipedia.org/wiki/Minnesota"
    },
    {
        "czname": "Mississippi",
        "enname": "Mississippi",
        "capital": "Jackson",
        "img": "mississippi",
        "area": "125 546",
        "population": "2 967 297",
        "link": "https://cs.wikipedia.org/wiki/Mississippi_(st%C3%A1t)"
    },
    {
        "czname": "Missouri",
        "enname": "Missouri",
        "capital": "Jefferson City",
        "img": "missouri",
        "area": "180 693",
        "population": "5 988 927",
        "link": "https://cs.wikipedia.org/wiki/Missouri_(st%C3%A1t)"
    },
    {
        "czname": "Montana",
        "enname": "Montana",
        "capital": "Helena",
        "img": "montana",
        "area": "381 156",
        "population": "989 415",
        "link": "https://cs.wikipedia.org/wiki/Montana"
    },
    {
        "czname": "Nebraska",
        "enname": "Nebraska",
        "capital": "Lincoln",
        "img": "nebraska",
        "area": "200 520",
        "population": "1 826 341",
        "link": "https://cs.wikipedia.org/wiki/Nebraska"
    },
    {
        "czname": "Nevada",
        "enname": "Nevada",
        "capital": "Carson City",
        "img": "nevada",
        "area": "286 351",
        "population": "2 700 551",
        "link": "https://cs.wikipedia.org/wiki/Nevada"
    },
    {
        "czname": "New Hampshire",
        "enname": "New Hampshire",
        "capital": "Concord",
        "img": "new_hampshire",
        "area": "24 239",
        "population": "1 316 470",
        "link": "https://cs.wikipedia.org/wiki/New_Hampshire"
    },
    {
        "czname": "New Jersey",
        "enname": "New Jersey",
        "capital": "Trenton",
        "img": "new_jersey",
        "area": "22 608",
        "population": "8 791 894",
        "link": "https://cs.wikipedia.org/wiki/New_Jersey"
    },
    {
        "czname": "Nové Mexiko",
        "enname": "New Mexico",
        "capital": "Santa Fe",
        "img": "nove_mexiko",
        "area": "314 590",
        "population": "2 059 179",
        "link": "https://cs.wikipedia.org/wiki/Nov%C3%A9_Mexiko"
    },
    {
        "czname": "New York",
        "enname": "New York",
        "capital": "Albany",
        "img": "new_york",
        "area": "141 205",
        "population": "19 378 102",
        "link": "https://cs.wikipedia.org/wiki/New_York_(st%C3%A1t)"
    },
    {
        "czname": "Severní Karolína",
        "enname": "North Carolina",
        "capital": "Raleigh",
        "img": "severni_karolina",
        "area": "139 509",
        "population": "9 535 483",
        "link": "https://cs.wikipedia.org/wiki/Severn%C3%AD_Karol%C3%ADna"
    },
    {
        "czname": "Severní Dakota",
        "enname": "North Dakota",
        "capital": "Bismarck",
        "img": "severni_dakota",
        "area": "183 272",
        "population": "672 591",
        "link": "https://cs.wikipedia.org/wiki/Severn%C3%AD_Dakota"
    },
    {
        "czname": "Ohio",
        "enname": "Ohio",
        "capital": "Columbus",
        "img": "ohio",
        "area": "116 096",
        "population": "11 536 504",
        "link": "https://cs.wikipedia.org/wiki/Ohio"
    },
    {
        "czname": "Oklahoma",
        "enname": "Oklahoma",
        "capital": "Oklahoma City",
        "img": "oklahoma",
        "area": "181 196",
        "population": "3 751 351",
        "link": "https://cs.wikipedia.org/wiki/Oklahoma"
    },
    {
        "czname": "Oregon",
        "enname": "Oregon",
        "capital": "Salem",
        "img": "oregon",
        "area": "255 026",
        "population": "3 831 074",
        "link": "https://cs.wikipedia.org/wiki/Oregon"
    },
    {
        "czname": "Pensylvánie",
        "enname": "Pennsylvania",
        "capital": "Harrisburg",
        "img": "pensylvanie",
        "area": "119 283",
        "population": "12 702 379",
        "link": "https://cs.wikipedia.org/wiki/Pensylv%C3%A1nie"
    },
    {
        "czname": "Rhode Island",
        "enname": "Rhode Island",
        "capital": "Providence",
        "img": "rhode_island",
        "area": "4 002",
        "population": "1 052 567",
        "link": "https://cs.wikipedia.org/wiki/Rhode_Island"
    },
    {
        "czname": "Jížní Karolína",
        "enname": "South Carolina",
        "capital": "Columbia",
        "img": "jizni_karolina",
        "area": "82 965",
        "population": "4 625 364",
        "link": "https://cs.wikipedia.org/wiki/Ji%C5%BEn%C3%AD_Karol%C3%ADna"
    },
    {
        "czname": "Jižní Dakota",
        "enname": "South Dakota",
        "capital": "Pierre",
        "img": "jizni_dakota",
        "area": "199 905",
        "population": "814 180",
        "link": "https://cs.wikipedia.org/wiki/Ji%C5%BEn%C3%AD_Dakota"
    },
    {
        "czname": "Tennessee",
        "enname": "Tennessee",
        "capital": "Nashville",
        "img": "tennessee",
        "area": "109 247",
        "population": "6 346 105",
        "link": "https://cs.wikipedia.org/wiki/Tennessee"
    },
    {
        "czname": "Texas",
        "enname": "Texas",
        "capital": "Austin",
        "img": "texas",
        "area": "696 241",
        "population": "27 862 596",
        "link": "https://cs.wikipedia.org/wiki/Texas"
    },
    {
        "czname": "Utah",
        "enname": "Utah",
        "capital": "Salt Lake City",
        "img": "utah",
        "area": "220 080",
        "population": "2 763 885",
        "link": "https://cs.wikipedia.org/wiki/Utah"
    },
    {
        "czname": "Vermont",
        "enname": "Vermont",
        "capital": "Montpelier",
        "img": "vermont",
        "area": "24 923",
        "population": "625 741",
        "link": "https://cs.wikipedia.org/wiki/Vermont"
    },
    {
        "czname": "Virginie",
        "enname": "Virginia",
        "capital": "Richmond",
        "img": "virginie",
        "area": "110 862",
        "population": "8 001 024",
        "link": "https://cs.wikipedia.org/wiki/Virginie"
    },
    {
        "czname": "Washington",
        "enname": "Washington",
        "capital": "Olympia",
        "img": "washington",
        "area": "184 824",
        "population": "6 724 540",
        "link": "https://cs.wikipedia.org/wiki/Washington_(st%C3%A1t)"
    },
    {
        "czname": "Západní Virginie",
        "enname": "West Virginia",
        "capital": "Charleston",
        "img": "zapadni_virginie",
        "area": "62 809",
        "population": "1 852 994",
        "link": "https://cs.wikipedia.org/wiki/Z%C3%A1padn%C3%AD_Virginie"
    },
    {
        "czname": "Wisconsin",
        "enname": "Wisconsin",
        "capital": "Madison",
        "img": "wisconsin",
        "area": "169 700",
        "population": "5 686 986",
        "link": "https://cs.wikipedia.org/wiki/Wisconsin"
    },
    {
        "czname": "Wyoming",
        "enname": "Wyoming",
        "capital": "Cheyenne",
        "img": "wyoming",
        "area": "253 338",
        "population": "563 626",
        "link": "https://cs.wikipedia.org/wiki/Wyoming"
    }
];