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
        "description": "Se svou rozlohou 696 241 km² je Texas druhým největším státem USA, v počtu obyvatel (27,9 milionů) je rovněž druhým nejlidnatějším státem. Obyvatelstvo Texasu je velmi různorodé. Neustále se mění kvůli přílivu obyvatel z Mexika a z Latinské Ameriky."
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
        "description": ""
    }
];

var states = [
    {
        "czname": "Alabama",
        "enname": "Alabama",
        "capital": "Montgomery",
        "img": "alabama.png",
        "area": "135 765 km²",
        "population": "4 779 736",
        "link": "https://cs.wikipedia.org/wiki/Alabama"
    },
    {
        "czname": "Aljaška",
        "enname": "Alaska",
        "capital": "Juneau",
        "img": "aljaska.png",
        "area": "1 717 854 km²",
        "population": "710 231",
        "link": "https://cs.wikipedia.org/wiki/Alja%C5%A1ka"
    },
    {
        "czname": "Arizona",
        "enname": "Arizona",
        "capital": "Phoenix",
        "img": "arizona.png",
        "area": "295 254 km²",
        "population": "6 392 017",
        "link": "https://cs.wikipedia.org/wiki/Arizona"
    },
    {
        "czname": "Arkansas",
        "enname": "Arkansas",
        "capital": "Little Rock",
        "img": "arkansas.png",
        "area": "137 732 km²",
        "population": "2 915 915",
        "link": "https://cs.wikipedia.org/wiki/Arkansas"
    },
    {
        "czname": "Kalifornie",
        "enname": "California",
        "capital": "Sacramento",
        "img": "kalifornie.png",
        "area": "423 970 km²",
        "population": "37 253 956",
        "link": "https://cs.wikipedia.org/wiki/Kalifornie"
    },
    {
        "czname": "Colorado",
        "enname": "Colorado",
        "capital": "Denver",
        "img": "colorado.png",
        "area": "269 837 km²",
        "population": "5 029 196",
        "link": "https://cs.wikipedia.org/wiki/Colorado"
    },
    {
        "czname": "Connecticut",
        "enname": "Connecticut",
        "capital": "Hartford",
        "img": "connecticut.png",
        "area": "14 371 km²",
        "population": "3 574 097",
        "link": "https://cs.wikipedia.org/wiki/Connecticut"
    },
    {
        "czname": "Delaware",
        "enname": "Delaware",
        "capital": "Dover",
        "img": "delaware.png",
        "area": "6 542 km²",
        "population": "897 934",
        "link": "https://cs.wikipedia.org/wiki/Delaware"
    },
    {
        "czname": "Florida",
        "enname": "Florida",
        "capital": "Tallahassee",
        "img": "florida.png",
        "area": "170 451 km²",
        "population": "18 801 310",
        "link": "https://cs.wikipedia.org/wiki/Florida"
    },
    {
        "czname": "Georgie",
        "enname": "Georgia",
        "capital": "Atlanta",
        "img": "georgie.png",
        "area": "154 077 km²",
        "population": "9 687 653",
        "link": "https://cs.wikipedia.org/wiki/Georgie"
    },
    {
        "czname": "Havaj",
        "enname": "Hawaii",
        "capital": "Honolulu",
        "img": "havaj.png",
        "area": "28 337 km²",
        "population": "1 360 301",
        "link": "https://cs.wikipedia.org/wiki/Havaj"
    },
    {
        "czname": "Idaho",
        "enname": "Idaho",
        "capital": "Boise",
        "img": "idaho.png",
        "area": "216 632 km²",
        "population": "1 567 582",
        "link": "https://cs.wikipedia.org/wiki/Idaho"
    },
    {
        "czname": "Illinois",
        "enname": "Illinois",
        "capital": "Springfield",
        "img": "illinois.png",
        "area": "149 997 km²",
        "population": "12 830 632",
        "link": "https://cs.wikipedia.org/wiki/Illinois"
    },
    {
        "czname": "Indiana",
        "enname": "Indiana",
        "capital": "Indianapoliss",
        "img": "indiana.png",
        "area": "94 321 km²",
        "population": "6 483 802",
        "link": "https://cs.wikipedia.org/wiki/Indiana"
    },
    {
        "czname": "Iowa",
        "enname": "Iowa",
        "capital": "Des Moines",
        "img": "iowa.png",
        "area": "145 746 km²",
        "population": "3 046 355",
        "link": "https://cs.wikipedia.org/wiki/Iowa"
    },
    {
        "czname": "Kansas",
        "enname": "Kansas",
        "capital": "Topeka",
        "img": "kansas.png",
        "area": "213 283 km²",
        "population": "2 853 118",
        "link": "https://cs.wikipedia.org/wiki/Kansas"
    },
    {
        "czname": "Kentucky",
        "enname": "Kentucky",
        "capital": "Frankfort",
        "img": "kentucky.png",
        "area": "104 749 km²",
        "population": "4 339 367",
        "link": "https://cs.wikipedia.org/wiki/Kentucky"
    },
    {
        "czname": "Louisiana",
        "enname": "Louisiana",
        "capital": "Baton Rouge",
        "img": "louisiana.png",
        "area": "135 382 km²",
        "population": "4 533 372",
        "link": "https://cs.wikipedia.org/wiki/Louisiana"
    },
    {
        "czname": "Maine",
        "enname": "Maine",
        "capital": "Augusta",
        "img": "maine.png",
        "area": "86 542 km²",
        "population": "1 328 361",
        "link": "https://cs.wikipedia.org/wiki/Maine"
    },
    {
        "czname": "Maryland",
        "enname": "Maryland",
        "capital": "Annapolis",
        "img": "maryland.png",
        "area": "32 160 km²",
        "population": "5 773 552",
        "link": "https://cs.wikipedia.org/wiki/Maryland"
    },
    {
        "czname": "Massachusetts",
        "enname": "Massachusetts",
        "capital": "Boston",
        "img": "massachusetts.png",
        "area": "27 360 km²",
        "population": "6 547 629",
        "link": "https://cs.wikipedia.org/wiki/Massachusetts"
    },
    {
        "czname": "Michigan",
        "enname": "Michigan",
        "capital": "Lansing",
        "img": "michigan.png",
        "area": "250 941 km²",
        "population": "9 883 640",
        "link": "https://cs.wikipedia.org/wiki/Michigan"
    },
    {
        "czname": "Minnesota",
        "enname": "Minnesota",
        "capital": "Saint Paul",
        "img": "minnesota.png",
        "area": "225 365 km²",
        "population": "5 303 925",
        "link": "https://cs.wikipedia.org/wiki/Minnesota"
    },
    {
        "czname": "Mississippi",
        "enname": "Mississippi",
        "capital": "Jackson",
        "img": "mississippi.png",
        "area": "125 546 km²",
        "population": "2 967 297",
        "link": "https://cs.wikipedia.org/wiki/Mississippi_(st%C3%A1t)"
    },
    {
        "czname": "Missouri",
        "enname": "Missouri",
        "capital": "Jefferson City",
        "img": "missouri.png",
        "area": "180 693 km²",
        "population": "5 988 927",
        "link": "https://cs.wikipedia.org/wiki/Missouri_(st%C3%A1t)"
    },
    {
        "czname": "Montana",
        "enname": "Montana",
        "capital": "Helena",
        "img": "montana.png",
        "area": "381 156 km²",
        "population": "989 415",
        "link": "https://cs.wikipedia.org/wiki/Montana"
    },
    {
        "czname": "Nebraska",
        "enname": "Nebraska",
        "capital": "Lincoln",
        "img": "nebraska.png",
        "area": "200 520 km²",
        "population": "1 826 341",
        "link": "https://cs.wikipedia.org/wiki/Nebraska"
    },
    {
        "czname": "Nevada",
        "enname": "Nevada",
        "capital": "Carson City",
        "img": "nevada.png",
        "area": "286 351 km²",
        "population": "2 700 551",
        "link": "https://cs.wikipedia.org/wiki/Nevada"
    },
    {
        "czname": "New Hampshire",
        "enname": "New Hampshire",
        "capital": "Concord",
        "img": "new_hampshire.png",
        "area": "24 239 km²",
        "population": "1 316 470",
        "link": "https://cs.wikipedia.org/wiki/New_Hampshire"
    },
    {
        "czname": "New Jersey",
        "enname": "New Jersey",
        "capital": "Trenton",
        "img": "new_jersey.png",
        "area": "22 608 km²",
        "population": "8 791 894",
        "link": "https://cs.wikipedia.org/wiki/New_Jersey"
    },
    {
        "czname": "Nové Mexiko",
        "enname": "New Mexico",
        "capital": "Santa Fe",
        "img": "nove_mexiko.png",
        "area": "314 590 km²",
        "population": "2 059 179",
        "link": "https://cs.wikipedia.org/wiki/Nov%C3%A9_Mexiko"
    },
    {
        "czname": "New York",
        "enname": "New York",
        "capital": "Albany",
        "img": "new_york.png",
        "area": "141 205 km²",
        "population": "19 378 102",
        "link": "https://cs.wikipedia.org/wiki/New_York_(st%C3%A1t)"
    },
    {
        "czname": "Severní Karolína",
        "enname": "North Carolina",
        "capital": "Raleigh",
        "img": "severni_karolina.png",
        "area": "139 509 km²",
        "population": "9 535 483",
        "link": "https://cs.wikipedia.org/wiki/Severn%C3%AD_Karol%C3%ADna"
    },
    {
        "czname": "Severní Dakota",
        "enname": "North Dakota",
        "capital": "Bismarck",
        "img": "severni_dakota.png",
        "area": "183 272 km²",
        "population": "672 591",
        "link": "https://cs.wikipedia.org/wiki/Severn%C3%AD_Dakota"
    },
    {
        "czname": "Ohio",
        "enname": "Ohio",
        "capital": "Columbus",
        "img": "ohio.png",
        "area": "116 096 km²",
        "population": "11 536 504",
        "link": "https://cs.wikipedia.org/wiki/Ohio"
    },
    {
        "czname": "Oklahoma",
        "enname": "Oklahoma",
        "capital": "Oklahoma City",
        "img": "oklahoma.png",
        "area": "181 196 km²",
        "population": "3 751 351",
        "link": "https://cs.wikipedia.org/wiki/Oklahoma"
    },
    {
        "czname": "Oregon",
        "enname": "Oregon",
        "capital": "Salem",
        "img": "oregon.png",
        "area": "255 026 km²",
        "population": "3 831 074",
        "link": "https://cs.wikipedia.org/wiki/Oregon"
    },
    {
        "czname": "Pensylvánie",
        "enname": "Pennsylvania",
        "capital": "Harrisburg",
        "img": "pensylvanie.png",
        "area": "119 283 km²",
        "population": "12 702 379",
        "link": "https://cs.wikipedia.org/wiki/Pensylv%C3%A1nie"
    },
    {
        "czname": "Rhode Island",
        "enname": "Rhode Island",
        "capital": "Providence",
        "img": "rhode_island.png",
        "area": "4 002 km²",
        "population": "1 052 567",
        "link": "https://cs.wikipedia.org/wiki/Rhode_Island"
    },
    {
        "czname": "Jížní Karolína",
        "enname": "South Carolina",
        "capital": "Columbia",
        "img": "jizni_karolina.png",
        "area": "82 965 km²",
        "population": "4 625 364",
        "link": "https://cs.wikipedia.org/wiki/Ji%C5%BEn%C3%AD_Karol%C3%ADna"
    },
    {
        "czname": "Jižní Dakota",
        "enname": "South Dakota",
        "capital": "Pierre",
        "img": "jizni_dakota.png",
        "area": "199 905 km²",
        "population": "814 180",
        "link": "https://cs.wikipedia.org/wiki/Ji%C5%BEn%C3%AD_Dakota"
    },
    {
        "czname": "Tennessee",
        "enname": "Tennessee",
        "capital": "Nashville",
        "img": "tennessee.png",
        "area": "109 247 km²",
        "population": "6 346 105",
        "link": "https://cs.wikipedia.org/wiki/Tennessee"
    },
    {
        "czname": "Texas",
        "enname": "Texas",
        "capital": "Austin",
        "img": "texas.png",
        "area": "696 241 km²",
        "population": "27 862 596",
        "link": "https://cs.wikipedia.org/wiki/Texas"
    },
    {
        "czname": "Utah",
        "enname": "Utah",
        "capital": "Salt Lake City",
        "img": "utah.png",
        "area": "220 080 km²",
        "population": "2 763 885",
        "link": "https://cs.wikipedia.org/wiki/Utah"
    },
    {
        "czname": "Vermont",
        "enname": "Vermont",
        "capital": "Montpelier",
        "img": "vermont.png",
        "area": "24 923 km²",
        "population": "625 741",
        "link": "https://cs.wikipedia.org/wiki/Vermont"
    },
    {
        "czname": "Virginie",
        "enname": "Virginia",
        "capital": "Richmond",
        "img": "virginie.png",
        "area": "110 862 km²",
        "population": "8 001 024",
        "link": "https://cs.wikipedia.org/wiki/Virginie"
    },
    {
        "czname": "Washington",
        "enname": "Washington",
        "capital": "Olympia",
        "img": "washington.png",
        "area": "184 824 km²",
        "population": "6 724 540",
        "link": "https://cs.wikipedia.org/wiki/Washington_(st%C3%A1t)"
    },
    {
        "czname": "Západní Virginie",
        "enname": "West Virginia",
        "capital": "Charleston",
        "img": "zapadni_virginie.png",
        "area": "62 809 km²",
        "population": "1 852 994",
        "link": "https://cs.wikipedia.org/wiki/Z%C3%A1padn%C3%AD_Virginie"
    },
    {
        "czname": "Wisconsin",
        "enname": "Wisconsin",
        "capital": "Madison",
        "img": "wisconsin.png",
        "area": "169 700 km²",
        "population": "5 686 986",
        "link": "https://cs.wikipedia.org/wiki/Wisconsin"
    },
    {
        "czname": "Wyoming",
        "enname": "Wyoming",
        "capital": "Cheyenne",
        "img": "wyoming.png",
        "area": "253 338 km²",
        "population": "563 626",
        "link": "https://cs.wikipedia.org/wiki/Wyoming"
    }
];