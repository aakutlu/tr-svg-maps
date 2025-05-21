
/* 
  Over time, some city names have been changed.
  - Whitespace characters removed
  - "â" relaced with regular "a"
  - Official names of some cities have been chanced
  
  So be aware of the below changes, only true names used in this script

  | True Name              | Wrong Name           |
  |------------------------|----------------------|
   afyonkarahisar           afyon   -- It is mostly pronounced as "afyon" in public.
   mersin                   içel    -- changed in 2002
   kahramanmaraş            maraş   -- changed in 1973
   şanlıurfa                urfa    -- changed in 1984
   gaziantep                antep   -- changed in 1921
   hatay                    antakya -- often confused. antakya is the central subdistrict, hatay indicates the province name

   marmaraereğlisi          marmara ereğlisi
   eyüpsultan               eyüp
   lapseki                  lâpseki
   büyükorhan               büyük orhan
   devrekani                devrekâni
   laçin                    lâçin
   19mayıs                  19 mayıs
   onikişubat               oniki şubat
   kahta                    kâhta
   gaziosmanpaşa            gazi osmanpaşa
   kahramankazan            kazan
*/

const PROVINCES = [
  {
    "id": 1,
    "name": "adana",
    "iso2": "TR-01",
    "type": "büyükşehir",
    "subdivisions": [
      "tufanbeyli",
      "saimbeyli",
      "feke",
      "kozan",
      "aladağ",
      "imamoğlu",
      "ceyhan",
      "pozantı",
      "karaisalı",
      "çukurova",
      "sarıçam",
      "seyhan",
      "yüreğir",
      "karataş",
      "yumurtalık"
    ]
  },
  {
    "id": 2,
    "name": "adıyaman",
    "iso2": "TR-02",
    "type": "il",
    "subdivisions": ["gölbaşı", "besni", "tut", "adıyaman", "çelikhan", "sincik", "kahta", "gerger", "samsat"]
  },
  {
    "id": 3,
    "name": "afyonkarahisar",
    "iso2": "TR-03",
    "type": "il",
    "subdivisions": [
      "dazkırı",
      "başmakçı",
      "evciler",
      "dinar",
      "kızılören",
      "sandıklı",
      "hocalar",
      "sinanpaşa",
      "şuhut",
      "çay",
      "sultandağı",
      "bolvadin",
      "emirdağ",
      "afyonkarahisar",
      "ihsaniye",
      "iscehisar",
      "bayat",
      "çobanlar"
    ]
  },
  {
    "id": 4,
    "name": "ağrı",
    "iso2": "TR-04",
    "type": "il",
    "subdivisions": ["patnos", "tutak", "eleşkirt", "hamur", "ağrı", "taşlıçay", "diyadin", "doğubayazıt"]
  },
  {
    "id": 5,
    "name": "amasya",
    "iso2": "TR-05",
    "type": "il",
    "subdivisions": ["hamamözü", "gümüşhacıköy", "merzifon", "suluova", "amasya", "göynücek", "taşova"]
  },
  {
    "id": 6,
    "name": "ankara",
    "iso2": "TR-06",
    "type": "büyükşehir",
    "subdivisions": [
      "nallıhan",
      "beypazarı",
      "çamlıdere",
      "polatlı",
      "ayaş",
      "güdül",
      "kızılcahamam",
      "çubuk",
      "kahramankazan",
      "haymana",
      "şereflikoçhisar",
      "evren",
      "bala",
      "gölbaşı",
      "sincan",
      "etimesgut",
      "çankaya",
      "yenimahalle",
      "keçiören",
      "altındağ",
      "mamak",
      "pursaklar",
      "akyurt",
      "elmadağ",
      "kalecik"
    ]
  },
  {
    "id": 7,
    "name": "antalya",
    "iso2": "TR-07",
    "type": "büyükşehir",
    "subdivisions": [
      "kaş",
      "demre",
      "finike",
      "elmalı",
      "korkuteli",
      "kumluca",
      "kemer",
      "konyaaltı",
      "döşemealtı",
      "kepez",
      "muratpaşa",
      "aksu",
      "serik",
      "manavgat",
      "ibradı",
      "akseki",
      "gündoğmuş",
      "alanya",
      "gazipaşa"
    ]
  },
  {
    "id": 8,
    "name": "artvin",
    "iso2": "TR-08",
    "type": "il",
    "subdivisions": ["arhavi", "hopa", "yusufeli", "murgul", "artvin", "ardanuç", "şavşat", "borçka", "kemalpaşa"]
  },
  {
    "id": 9,
    "name": "aydın",
    "iso2": "TR-09",
    "type": "büyükşehir",
    "subdivisions": [
      "buharkent",
      "kuyucak",
      "karacasu",
      "bozdoğan",
      "nazilli",
      "sultanhisar",
      "yenipazar",
      "köşk",
      "efeler",
      "çine",
      "karpuzlu",
      "incirliova",
      "koçarlı",
      "germencik",
      "söke",
      "kuşadası",
      "didim"
    ]
  },
  {
    "id": 10,
    "name": "balıkesir",
    "iso2": "TR-10",
    "type": "büyükşehir",
    "subdivisions": [
      "erdek",
      "bandırma",
      "susurluk",
      "kepsut",
      "dursunbey",
      "bigadiç",
      "sındırgı",
      "gönen",
      "manyas",
      "karesi",
      "altıeylül",
      "savaştepe",
      "balya",
      "ivrindi",
      "havran",
      "edremit",
      "burhaniye",
      "gömeç",
      "ayvalık",
      "marmara"
    ]
  },
  {
    "id": 11,
    "name": "bilecik",
    "iso2": "TR-11",
    "type": "il",
    "subdivisions": ["osmaneli", "bilecik", "pazaryeri", "bozüyük", "söğüt", "inhisar", "yenipazar", "gölpazarı"]
  },
  {
    "id": 12,
    "name": "bingöl",
    "iso2": "TR-12",
    "type": "il",
    "subdivisions": ["genç", "bingöl", "yayladere", "kiğı", "adaklı", "yedisu", "karlıova", "solhan"]
  },
  {
    "id": 13,
    "name": "bitlis",
    "iso2": "TR-13",
    "type": "il",
    "subdivisions": ["hizan", "bitlis", "mutki", "güroymak", "tatvan", "ahlat", "adilcevaz"]
  },
  {
    "id": 14,
    "name": "bolu",
    "iso2": "TR-14",
    "type": "il",
    "subdivisions": ["göynük", "mudurnu", "seben", "bolu", "kıbrıscık", "dörtdivan", "yeniçağa", "gerede", "mengen"]
  },
  {
    "id": 15,
    "name": "burdur",
    "iso2": "TR-15",
    "type": "il",
    "subdivisions": ["burdur", "ağlasun", "çeltikçi", "bucak", "kemer", "yeşilova", "karamanlı", "tefenni", "çavdır", "gölhisar", "altınyayla"]
  },
  {
    "id": 16,
    "name": "bursa",
    "iso2": "TR-16",
    "type": "büyükşehir",
    "subdivisions": [
      "gemlik",
      "orhangazi",
      "iznik",
      "yenişehir",
      "inegöl",
      "kestel",
      "gürsu",
      "yıldırım",
      "keles",
      "osmangazi",
      "mudanya",
      "nilüfer",
      "harmancık",
      "orhaneli",
      "büyükorhan",
      "mustafakemalpaşa",
      "karacabey"
    ]
  },
  {
    "id": 17,
    "name": "çanakkale",
    "iso2": "TR-17",
    "type": "il",
    "subdivisions": ["gelibolu", "eceabat", "çanakkale", "gökçeada", "bozcaada", "lapseki", "biga", "yenice", "çan", "bayramiç", "ezine", "ayvacık"]
  },
  {
    "id": 18,
    "name": "çankırı",
    "iso2": "TR-18",
    "type": "il",
    "subdivisions": [
      "çerkeş",
      "bayramören",
      "atkaracalar",
      "kurşunlu",
      "ılgaz",
      "orta",
      "şabanözü",
      "eldivan",
      "korgun",
      "çankırı",
      "yapraklı",
      "kızılırmak"
    ]
  },
  {
    "id": 19,
    "name": "çorum",
    "iso2": "TR-19",
    "type": "il",
    "subdivisions": [
      "kargı",
      "osmancık",
      "laçin",
      "dodurga",
      "oğuzlar",
      "iskilip",
      "bayat",
      "uğurludağ",
      "çorum",
      "mecitözü",
      "ortaköy",
      "alaca",
      "boğazkale",
      "sungurlu"
    ]
  },
  {
    "id": 20,
    "name": "denizli",
    "iso2": "TR-20",
    "type": "büyükşehir",
    "subdivisions": [
      "çivril",
      "bekilli",
      "çal",
      "baklan",
      "bozkurt",
      "çardak",
      "acıpayam",
      "çameli",
      "serinhisar",
      "honaz",
      "tavas",
      "beyağaç",
      "kale",
      "güney",
      "buldan",
      "pamukkale",
      "merkezefendi",
      "sarayköy",
      "babadağ"
    ]
  },
  {
    "id": 21,
    "name": "diyarbakır",
    "iso2": "TR-21",
    "type": "büyükşehir",
    "subdivisions": [
      "çüngüş",
      "çermik",
      "ergani",
      "çınar",
      "bağlar",
      "kayapınar",
      "yenişehir",
      "eğil",
      "sur",
      "bismil",
      "silvan",
      "hazro",
      "dicle",
      "hani",
      "kocaköy",
      "lice",
      "kulp"
    ]
  },
  {
    "id": 22,
    "name": "edirne",
    "iso2": "TR-22",
    "type": "il",
    "subdivisions": ["lalapaşa", "edirne", "süloğlu", "havsa", "uzunköprü", "meriç", "ipsala", "enez", "keşan"]
  },
  {
    "id": 23,
    "name": "elazığ",
    "iso2": "TR-23",
    "type": "il",
    "subdivisions": ["ağın", "keban", "baskil", "elazığ", "sivrice", "maden", "alacakaya", "arıcak", "palu", "kovancılar", "karakoçan"]
  },
  {
    "id": 24,
    "name": "erzincan",
    "iso2": "TR-24",
    "type": "il",
    "subdivisions": ["refahiye", "kemaliye", "iliç", "kemah", "erzincan", "üzümlü", "çayırlı", "otlukbeli", "tercan"]
  },
  {
    "id": 25,
    "name": "erzurum",
    "iso2": "TR-25",
    "type": "büyükşehir",
    "subdivisions": [
      "aşkale",
      "çat",
      "tekman",
      "hınıs",
      "karaçoban",
      "karayazı",
      "palandöken",
      "aziziye",
      "yakutiye",
      "pasinler",
      "köprüköy",
      "horasan",
      "pazaryolu",
      "ispir",
      "tortum",
      "uzundere",
      "narman",
      "oltu",
      "şenkaya",
      "olur"
    ]
  },
  {
    "id": 26,
    "name": "eskişehir",
    "iso2": "TR-26",
    "type": "büyükşehir",
    "subdivisions": [
      "inönü",
      "tepebaşı",
      "mihalgazi",
      "sarıcakaya",
      "alpu",
      "odunpazarı",
      "seyitgazi",
      "han",
      "çifteler",
      "mahmudiye",
      "sivrihisar",
      "günyüzü",
      "beylikova",
      "mihalıççık"
    ]
  },
  {
    "id": 27,
    "name": "gaziantep",
    "iso2": "TR-27",
    "type": "büyükşehir",
    "subdivisions": ["islahiye", "nurdağı", "şehitkamil", "şahinbey", "oğuzeli", "araban", "yavuzeli", "nizip", "karkamış"]
  },
  {
    "id": 28,
    "name": "giresun",
    "iso2": "TR-28",
    "type": "il",
    "subdivisions": [
      "piraziz",
      "bulancak",
      "giresun",
      "dereli",
      "şebinkarahisar",
      "alucra",
      "çamoluk",
      "keşap",
      "yağlıdere",
      "espiye",
      "güce",
      "tirebolu",
      "doğankent",
      "görele",
      "çanakçı",
      "eynesil"
    ]
  },
  {
    "id": 29,
    "name": "gümüşhane",
    "iso2": "TR-29",
    "type": "il",
    "subdivisions": ["kürtün", "torul", "gümüşhane", "köse", "kelkit", "şiran"]
  },
  {
    "id": 30,
    "name": "hakkari",
    "iso2": "TR-30",
    "type": "il",
    "subdivisions": ["hakkari", "yüksekova", "çukurca", "şemdinli", "derecik"]
  },
  {
    "id": 31,
    "name": "hatay",
    "iso2": "TR-31",
    "type": "büyükşehir",
    "subdivisions": [
      "erzin",
      "dörtyol",
      "hassa",
      "payas",
      "kırıkhan",
      "iskenderun",
      "kumlu",
      "reyhanlı",
      "belen",
      "antakya",
      "arsuz",
      "samandağ",
      "defne",
      "altınözü",
      "yayladağı"
    ]
  },
  {
    "id": 32,
    "name": "ısparta",
    "iso2": "TR-32",
    "type": "il",
    "subdivisions": [
      "yalvaç",
      "senirkent",
      "uluborlu",
      "keçiborlu",
      "gönen",
      "ısparta",
      "atabey",
      "gelendost",
      "şarkikaraağaç",
      "yenişarbademli",
      "aksu",
      "eğirdir",
      "sütçüler"
    ]
  },
  {
    "id": 33,
    "name": "mersin",
    "iso2": "TR-33",
    "type": "büyükşehir",
    "subdivisions": [
      "anamur",
      "bozyazı",
      "aydıncık",
      "gülnar",
      "mut",
      "silifke",
      "erdemli",
      "mezitli",
      "yenişehir",
      "toroslar",
      "akdeniz",
      "çamlıyayla",
      "tarsus"
    ]
  },
  {
    "id": 34,
    "name": "istanbul",
    "iso2": "TR-34",
    "type": "büyükşehir",
    "subdivisions": [
      "fatih",
      "zeytinburnu",
      "bakırköy",
      "beyoğlu",
      "beşiktaş",
      "sarıyer",
      "şişli",
      "kağıthane",
      "eyüpsultan",
      "gaziosmanpaşa",
      "bayrampaşa",
      "esenler",
      "güngören",
      "bahçelievler",
      "küçükçekmece",
      "avcılar",
      "beylikdüzü",
      "büyükçekmece",
      "silivri",
      "çatalca",
      "sultangazi",
      "esenyurt",
      "başakşehir",
      "bağcılar",
      "arnavutköy",
      "üsküdar",
      "kadıköy",
      "ataşehir",
      "ümraniye",
      "maltepe",
      "kartal",
      "pendik",
      "tuzla",
      "sultanbeyli",
      "sancaktepe",
      "çekmeköy",
      "beykoz",
      "şile",
      "adalar"
    ]
  },
  {
    "id": 35,
    "name": "izmir",
    "iso2": "TR-35",
    "type": "büyükşehir",
    "subdivisions": [
      "bergama",
      "kınık",
      "dikili",
      "aliağa",
      "foça",
      "menemen",
      "çiğli",
      "karşıyaka",
      "bayraklı",
      "bornova",
      "konak",
      "kemalpaşa",
      "bayındır",
      "ödemiş",
      "kiraz",
      "beydağ",
      "tire",
      "selçuk",
      "torbalı",
      "menderes",
      "seferihisar",
      "buca",
      "gaziemir",
      "karabağlar",
      "balçova",
      "narlıdere",
      "güzelbahçe",
      "urla",
      "karaburun",
      "çeşme"
    ]
  },
  {
    "id": 36,
    "name": "kars",
    "iso2": "TR-36",
    "type": "il",
    "subdivisions": ["sarıkamış", "kağızman", "digor", "selim", "kars", "susuz", "arpaçay", "akyaka"]
  },
  {
    "id": 37,
    "name": "kastamonu",
    "iso2": "TR-37",
    "type": "il",
    "subdivisions": [
      "cide",
      "pınarbaşı",
      "şenpazar",
      "azdavay",
      "doğanyurt",
      "inebolu",
      "bozkurt",
      "abana",
      "çatalzeytin",
      "ağlı",
      "küre",
      "seydiler",
      "daday",
      "araç",
      "ihsangazi",
      "kastamonu",
      "tosya",
      "devrekani",
      "taşköprü",
      "hanönü"
    ]
  },
  {
    "id": 38,
    "name": "kayseri",
    "iso2": "TR-38",
    "type": "büyükşehir",
    "subdivisions": [
      "yahyalı",
      "yeşilhisar",
      "develi",
      "incesu",
      "hacılar",
      "tomarza",
      "talas",
      "kocasinan",
      "felahiye",
      "özvatan",
      "melikgazi",
      "bünyan",
      "pınarbaşı",
      "sarıoğlan",
      "akkışla",
      "sarız"
    ]
  },
  {
    "id": 39,
    "name": "kırklareli",
    "iso2": "TR-39",
    "type": "il",
    "subdivisions": ["vize", "demirköy", "lüleburgaz", "pehlivanköy", "babaeski", "pınarhisar", "kırklareli", "kofçaz"]
  },
  {
    "id": 40,
    "name": "kırşehir",
    "iso2": "TR-40",
    "type": "il",
    "subdivisions": ["kırşehir", "kaman", "akpınar", "akçakent", "çiçekdağı", "boztepe", "mucur"]
  },
  {
    "id": 41,
    "name": "kocaeli",
    "iso2": "TR-41",
    "type": "büyükşehir",
    "subdivisions": [
      "çayırova",
      "darıca",
      "gebze",
      "dilovası",
      "körfez",
      "derince",
      "kandıra",
      "izmit",
      "kartepe",
      "başiskele",
      "gölcük",
      "karamürsel"
    ]
  },
  {
    "id": 42,
    "name": "konya",
    "iso2": "TR-42",
    "type": "büyükşehir",
    "subdivisions": [
      "akşehir",
      "tuzlukçu",
      "yunak",
      "çeltik",
      "ılgın",
      "doğanhisar",
      "hüyük",
      "beyşehir",
      "derbent",
      "kadınhanı",
      "derebucak",
      "seydişehir",
      "yalıhüyük",
      "ahırlı",
      "akören",
      "bozkır",
      "hadim",
      "taşkent",
      "güneysınır",
      "çumra",
      "meram",
      "selçuklu",
      "sarayönü",
      "altınekin",
      "cihanbeyli",
      "kulu",
      "karatay",
      "karapınar",
      "emirgazi",
      "ereğli",
      "halkapınar"
    ]
  },
  {
    "id": 43,
    "name": "kütahya",
    "iso2": "TR-43",
    "type": "il",
    "subdivisions": [
      "domaniç",
      "tavşanlı",
      "simav",
      "pazarlar",
      "şaphane",
      "gediz",
      "emet",
      "hisarcık",
      "çavdarhisar",
      "aslanapa",
      "altıntaş",
      "dumlupınar",
      "kütahya"
    ]
  },
  {
    "id": 44,
    "name": "malatya",
    "iso2": "TR-44",
    "type": "büyükşehir",
    "subdivisions": [
      "doğanşehir",
      "darende",
      "akçadağ",
      "yeşilyurt",
      "battalgazi",
      "kale",
      "kuluncak",
      "hekimhan",
      "arguvan",
      "arapgir",
      "yazıhan",
      "pütürge",
      "doğanyol"
    ]
  },
  {
    "id": 45,
    "name": "manisa",
    "iso2": "TR-45",
    "type": "büyükşehir",
    "subdivisions": [
      "soma",
      "kırkağaç",
      "akhisar",
      "gördes",
      "demirci",
      "selendi",
      "köprübaşı",
      "kula",
      "sarıgöl",
      "alaşehir",
      "salihli",
      "gölmarmara",
      "ahmetli",
      "turgutlu",
      "saruhanlı",
      "şehzadeler",
      "yunusemre"
    ]
  },
  {
    "id": 46,
    "name": "kahramanmaraş",
    "iso2": "TR-46",
    "type": "büyükşehir",
    "subdivisions": [
      "afşin",
      "elbistan",
      "göksun",
      "andırın",
      "onikişubat",
      "türkoğlu",
      "dulkadiroğlu",
      "ekinözü",
      "nurhak",
      "çağlayancerit",
      "pazarcık"
    ]
  },
  {
    "id": 47,
    "name": "mardin",
    "iso2": "TR-47",
    "type": "büyükşehir",
    "subdivisions": ["derik", "mazıdağı", "kızıltepe", "artuklu", "yeşilli", "ömerli", "savur", "midyat", "dargeçit", "nusaybin"]
  },
  {
    "id": 48,
    "name": "muğla",
    "iso2": "TR-48",
    "type": "büyükşehir",
    "subdivisions": [
      "seydikemer",
      "fethiye",
      "dalaman",
      "köyceğiz",
      "ortaca",
      "kavaklıdere",
      "menteşe",
      "ula",
      "marmaris",
      "datça",
      "yatağan",
      "milas",
      "bodrum"
    ]
  },
  {
    "id": 49,
    "name": "muş",
    "iso2": "TR-49",
    "type": "il",
    "subdivisions": ["muş", "hasköy", "korkut", "varto", "bulanık", "malazgirt"]
  },
  {
    "id": 50,
    "name": "nevşehir",
    "iso2": "TR-50",
    "type": "il",
    "subdivisions": ["derinkuyu", "acıgöl", "gülşehir", "nevşehir", "ürgüp", "avanos", "hacıbektaş", "kozaklı"]
  },
  {
    "id": 51,
    "name": "niğde",
    "iso2": "TR-51",
    "type": "il",
    "subdivisions": ["ulukışla", "bor", "çamardı", "altunhisar", "çiftlik", "niğde"]
  },
  {
    "id": 52,
    "name": "ordu",
    "iso2": "TR-52",
    "type": "büyükşehir",
    "subdivisions": [
      "ikizce",
      "ünye",
      "çaybaşı",
      "akkuş",
      "kumru",
      "korgan",
      "aybastı",
      "kabataş",
      "çatalpınar",
      "fatsa",
      "çamaş",
      "gölköy",
      "gürgentepe",
      "mesudiye",
      "perşembe",
      "ulubey",
      "altınordu",
      "kabadüz",
      "gülyalı"
    ]
  },
  {
    "id": 53,
    "name": "rize",
    "iso2": "TR-53",
    "type": "il",
    "subdivisions": [
      "ikizdere",
      "iyidere",
      "derepazarı",
      "kalkandere",
      "rize",
      "güneysu",
      "çayeli",
      "pazar",
      "hemşin",
      "çamlıhemşin",
      "ardeşen",
      "fındıklı"
    ]
  },
  {
    "id": 54,
    "name": "sakarya",
    "iso2": "TR-54",
    "type": "büyükşehir",
    "subdivisions": [
      "kaynarca",
      "karasu",
      "ferizli",
      "söğütlü",
      "kocaali",
      "hendek",
      "adapazarı",
      "serdivan",
      "pamukova",
      "sapanca",
      "arifiye",
      "geyve",
      "taraklı",
      "erenler",
      "karapürçek",
      "akyazı"
    ]
  },
  {
    "id": 55,
    "name": "samsun",
    "iso2": "TR-55",
    "type": "büyükşehir",
    "subdivisions": [
      "yakakent",
      "alaçam",
      "vezirköprü",
      "havza",
      "ladik",
      "kavak",
      "asarcık",
      "ayvacık",
      "salıpazarı",
      "terme",
      "bafra",
      "19mayıs",
      "atakum",
      "ilkadım",
      "canik",
      "tekkeköy",
      "çarşamba"
    ]
  },
  {
    "id": 56,
    "name": "siirt",
    "iso2": "TR-56",
    "type": "il",
    "subdivisions": ["siirt", "eruh", "kurtalan", "baykan", "tillo", "şirvan", "pervari"]
  },
  {
    "id": 57,
    "name": "sinop",
    "iso2": "TR-57",
    "type": "il",
    "subdivisions": ["türkeli", "ayancık", "erfelek", "sinop", "gerze", "dikmen", "boyabat", "saraydüzü", "durağan"]
  },
  {
    "id": 58,
    "name": "sivas",
    "iso2": "TR-58",
    "type": "il",
    "subdivisions": [
      "yıldızeli",
      "sivas",
      "gemerek",
      "şarkışla",
      "altınyayla",
      "gürün",
      "kangal",
      "ulaş",
      "divriği",
      "zara",
      "hafik",
      "doğanşar",
      "koyulhisar",
      "suşehri",
      "imranlı",
      "akıncılar",
      "gölova"
    ]
  },
  {
    "id": 59,
    "name": "tekirdağ",
    "iso2": "TR-59",
    "type": "büyükşehir",
    "subdivisions": [
      "saray",
      "kapaklı",
      "çerkezköy",
      "ergene",
      "çorlu",
      "marmaraereğlisi",
      "muratlı",
      "süleymanpaşa",
      "hayrabolu",
      "malkara",
      "şarköy"
    ]
  },
  {
    "id": 60,
    "name": "tokat",
    "iso2": "TR-60",
    "type": "il",
    "subdivisions": ["zile", "sulusaray", "yeşilyurt", "artova", "pazar", "turhal", "tokat", "erbaa", "niksar", "başçiftlik", "reşadiye", "almus"]
  },
  {
    "id": 61,
    "name": "trabzon",
    "iso2": "TR-61",
    "type": "büyükşehir",
    "subdivisions": [
      "beşikdüzü",
      "vakfıkebir",
      "çarşıbaşı",
      "şalpazarı",
      "tonya",
      "düzköy",
      "akçaabat",
      "maçka",
      "ortahisar",
      "yomra",
      "arsin",
      "araklı",
      "sürmene",
      "köprübaşı",
      "çaykara",
      "dernekpazarı",
      "of",
      "hayrat"
    ]
  },
  {
    "id": 62,
    "name": "tunceli",
    "iso2": "TR-62",
    "type": "il",
    "subdivisions": ["çemişgezek", "pertek", "hozat", "ovacık", "pülümür", "tunceli", "nazımiye", "mazgirt"]
  },
  {
    "id": 63,
    "name": "şanlıurfa",
    "iso2": "TR-63",
    "type": "büyükşehir",
    "subdivisions": [
      "birecik",
      "halfeti",
      "bozova",
      "suruç",
      "karaköprü",
      "hilvan",
      "haliliye",
      "eyyübiye",
      "akçakale",
      "harran",
      "siverek",
      "viranşehir",
      "ceylanpınar"
    ]
  },
  {
    "id": 64,
    "name": "uşak",
    "iso2": "TR-64",
    "type": "il",
    "subdivisions": ["uşak", "eşme", "ulubey", "banaz", "sivaslı", "karahallı"]
  },
  {
    "id": 65,
    "name": "van",
    "iso2": "TR-65",
    "type": "büyükşehir",
    "subdivisions": [
      "bahçesaray",
      "çatak",
      "gürpınar",
      "başkale",
      "saray",
      "özalp",
      "gevaş",
      "edremit",
      "ipekyolu",
      "tuşba",
      "muradiye",
      "çaldıran",
      "erciş"
    ]
  },
  {
    "id": 66,
    "name": "yozgat",
    "iso2": "TR-66",
    "type": "il",
    "subdivisions": [
      "yenifakılı",
      "boğazlıyan",
      "çandır",
      "çayıralan",
      "sarıkaya",
      "şefaatli",
      "yerköy",
      "yozgat",
      "sorgun",
      "saraykent",
      "akdağmadeni",
      "kadışehri",
      "çekerek",
      "aydıncık"
    ]
  },
  {
    "id": 67,
    "name": "zonguldak",
    "iso2": "TR-67",
    "type": "il",
    "subdivisions": ["alaplı", "ereğli", "kozlu", "zonguldak", "kilimli", "çaycuma", "gökçebey", "devrek"]
  },
  {
    "id": 68,
    "name": "aksaray",
    "iso2": "TR-68",
    "type": "il",
    "subdivisions": ["eskil", "sultanhanı", "aksaray", "sarıyahşi", "ağaçören", "ortaköy", "gülağaç", "güzelyurt"]
  },
  {
    "id": 69,
    "name": "bayburt",
    "iso2": "TR-69",
    "type": "il",
    "subdivisions": ["demirözü", "aydıntepe", "bayburt"]
  },
  {
    "id": 70,
    "name": "karaman",
    "iso2": "TR-70",
    "type": "il",
    "subdivisions": ["sarıveliler", "başyayla", "ermenek", "karaman", "kazımkarabekir", "ayrancı"]
  },
  {
    "id": 71,
    "name": "kırıkkale",
    "iso2": "TR-71",
    "type": "il",
    "subdivisions": ["karakeçili", "bahşili", "kırıkkale", "yahşihan", "çelebi", "keskin", "delice", "balışeyh", "sulakyurt"]
  },
  {
    "id": 72,
    "name": "batman",
    "iso2": "TR-72",
    "type": "il",
    "subdivisions": ["batman", "sason", "kozluk", "beşiri", "hasankeyf", "gercüş"]
  },
  {
    "id": 73,
    "name": "şırnak",
    "iso2": "TR-73",
    "type": "il",
    "subdivisions": ["şırnak", "güçlükonak", "idil", "cizre", "silopi", "uludere", "beytüşşebap"]
  },
  {
    "id": 74,
    "name": "bartın",
    "iso2": "TR-74",
    "type": "il",
    "subdivisions": ["bartın", "amasra", "kurucaşile", "ulus"]
  },
  {
    "id": 75,
    "name": "ardahan",
    "iso2": "TR-75",
    "type": "il",
    "subdivisions": ["göle", "ardahan", "çıldır", "hanak", "damal", "posof"]
  },
  {
    "id": 76,
    "name": "ığdır",
    "iso2": "TR-76",
    "type": "il",
    "subdivisions": ["tuzluca", "ığdır", "karakoyunlu", "aralık"]
  },
  {
    "id": 77,
    "name": "yalova",
    "iso2": "TR-77",
    "type": "il",
    "subdivisions": ["yalova", "çiftlikköy", "altınova", "termal", "çınarcık", "armutlu"]
  },
  {
    "id": 78,
    "name": "karabük",
    "iso2": "TR-78",
    "type": "il",
    "subdivisions": ["yenice", "eskipazar", "karabük", "ovacık", "safranbolu", "eflani"]
  },
  {
    "id": 79,
    "name": "kilis",
    "iso2": "TR-79",
    "type": "il",
    "subdivisions": ["musabeyli", "polateli", "kilis", "elbeyli"]
  },
  {
    "id": 80,
    "name": "osmaniye",
    "iso2": "TR-80",
    "type": "il",
    "subdivisions": ["sumbas", "kadirli", "toprakkale", "osmaniye", "düziçi", "bahçe", "hasanbeyli"]
  },
  {
    "id": 81,
    "name": "düzce",
    "iso2": "TR-81",
    "type": "il",
    "subdivisions": ["cumayeri", "gümüşova", "gölyaka", "çilimli", "akçakoca", "yığılca", "düzce", "kaynaşlı"]
  }
];

class Provinces{

  static getProvinceNames(){
    return PROVINCES.map(p => p.name) // return 81 province names
  }

  static getSubdivisionNames(arg){ // usage: getSN(), getSN("ankara"), getSN(["ankara", "istanbul"])
    if(arg === undefined || arg === null){
      return PROVINCES.flatMap(p => p.subdivisions)
    }
    else if(typeof arg === "string"){
      let provinceObj = PROVINCES.find(p => p.name === arg.trim().toLocaleLowerCase("tr-TR"))
      return !provinceObj ? [] : provinceObj.subdivisions.map(el => el)
    }
    else if(Array.isArray(arg)){
      return arg.flatMap(cityname => {
        if(!cityname) return [];
        cityname = cityname.trim().toLocaleLowerCase("tr-TR")
        let provinceObj = PROVINCES.find(p => p.name === cityname)
        return !provinceObj ? [] : provinceObj.subdivisions.map(el => el)
      })
    }
    else return []
  }

  static getSubdivisionIds(arg){ // usage: getSIds(), getSIds("ankara"), getSIds(["ankara", "istanbul"])
    if(arg === undefined || arg === null){
      return PROVINCES.flatMap(provinceObj => {
        return  provinceObj.subdivisions.map(el => String(provinceObj.id).padStart(2,"0") + "-" +  el) 
      })
    }
    else if(typeof arg === "string" || typeof arg === "number"){
      let provinceObj = Provinces.find(arg)
      return !provinceObj ? [] : provinceObj.subdivisions.map(el => String(provinceObj.id).padStart(2,"0") + "-" +  el)
    }
    else if(Array.isArray(arg)){
      return arg.flatMap(cityname => {
        if(!cityname) return [];
        cityname = cityname.trim().toLocaleLowerCase("tr-TR")
        let provinceObj = PROVINCES.find(p => p.name === cityname)
        return !provinceObj ? [] : provinceObj.subdivisions.map(el => String(provinceObj.id).padStart(2,"0") + "-" +  el)
      })
    }
    else return []
  }

  static find(identifier){
    let isNumeric = (value) => !isNaN(parseFloat(value)) && isFinite(value);
    identifier = isNumeric(identifier) ? parseInt(identifier) : identifier;
    let [iso2, name, id] = [undefined, undefined, undefined]
    if(typeof identifier === 'string'){
      iso2 = identifier.trim().toLocaleUpperCase("tr-TR")
      name = identifier.trim().toLocaleLowerCase("tr-TR")
    }else if(typeof identifier === 'number'){
      id = parseInt(identifier)
    }
    return PROVINCES.find(el => el.id === id) || PROVINCES.find(el => el.name === name) || PROVINCES.find(el => el.iso2 === iso2) || undefined
  }

  static getIso(identifier){
    return Provinces.find(identifier)?.iso2
  }

  static getId(identifier){
    return Provinces.find(identifier)?.id
  }

  static getName(identifier){
    return Provinces.find(identifier)?.name
  }
}

// Tests
//console.log(  Sehirler.getIlIdWithName('gaziantep') )
//console.log(  Sehirler.getIlNameWithId('55.5') )

/* console.log(Provinces.getSubdivisionNames().length)
console.log(Provinces.getSubdivisionNames(["  Bayburt  ", "kilis", null]).length)
console.log(Provinces.getSubdivisionNames("bayburt"))

console.log("-------------------")
console.log(Provinces.getIso("bayburt"))
console.log(Provinces.getIso(69))
console.log(Provinces.getIso("xxx"))
console.log(Provinces.getIso())
console.log(Provinces.getIso("69"))

console.log("-------------------")
console.log(Provinces.getId("bayburt"))
console.log(Provinces.getId("tr-69"))
console.log(Provinces.getId(" TR-69 "))
console.log(Provinces.getId(""))
console.log(Provinces.getId())
console.log(Provinces.getId(234))

console.log(Provinces.getName(69))
console.log(Provinces.getName("tr-69"))
console.log(Provinces.getName(" tr-69 "))
console.log(Provinces.getName("69bayburt")) */

/* console.log(Provinces.find("adana"))
console.log(Provinces.find("1"))
console.log(Provinces.find(1))
console.log(Provinces.find("tr-01")) */

// console.log(Provinces.getSubdivisionIds(69))
// console.log(Provinces.getName("Bayburt"))

//module.exports = Provinces
export default Provinces;
