const localQuotes = [
  {
    text: 'Uvijek se radujte! Bez prestanka se molite! U svemu zahvaljujte! Jer to je za vas volja Božja u Kristu Isusu.',
    author: '1 Sol 5, 16-18',
  },
  {
    text: 'Izraele, čekaj Gospoda, jer je u Gospoda milosrđe; u njega je bogat otkup.',
    author: 'Ps 130, 7',
  },
  {
    text: 'Stoga budni budite i u svako doba molite da uzmognete umaći svemu tomu što se ima zbiti i stati pred Sina Čovječjega.',
    author: 'Lk 21, 36',
  },
  {
    text: 'Radujte se u Gospodinu uvijek! Ponavljam: radujte se!',
    author: 'Fil 4, 4',
  },
  {
    text: 'Jer njega izabra Gospod, Bog tvoj, između svih plemena tvojih, da on i sinovi njegovi uvijek obavljaju svetu službu u ime Gospodnje.',
    author: 'Pnz 18, 5',
  },
  {
    text: 'Jer ja znam svoje naume koje s vama namjeravam - riječ je Jahvina - naume mira, a ne nesreće: da vam dadnem budućnost i nadu.',
    author: 'Jer 29, 11',
  },
  {
    text: 'Hvala ti što sam stvoren tako čudesno, što su djela tvoja predivna. Dušu moju do dna si poznavao,',
    author: 'Ps 139, 14',
  },
  {
    text: 'Svaki od nas neka ugađa bližnjemu na dobro, na izgrađivanje.',
    author: 'Rim 15, 2',
  },
  {
    text: 'Donosite dakle plod dostojan obraćenja.',
    author: 'Mt 3, 8',
  },
  {
    text: 'I od strasti sačuvaj slugu svojega; ne daj da vladaju nada mnom; tada ću biti čist, slobodan od teške krivnje.',
    author: 'Ps 19, 13',
  },
  {
    text: 'Idite, koji umakoste maču! Ne stojte, spominjite se u daljini Gospoda! Prema Jeruzalemu neka se upravlja srce vaše!',
    author: 'Jer 51, 50',
  },
  {
    text: 'I vrabac sebi log nalazi, i lastavica gnjezdašce gdje će položiti mlade svoje:',
    author: 'Ps 84 ,4',
  },
  {
    text: 'Tada im reče: "Duša mi je nasmrt žalosna. Ostanite ovdje i bdijte sa mnom!',
    author: 'Mt 26, 38',
  },
  {
    text: 'Oni će se zvati svet narod, "otkupljenici Gospodnji". A ti ćeš se zvati "traženi", "neostavljeni grad".',
    author: 'Iz 62, 12',
  },
  {
    text: "Njega koji ne okusi grijeha Bog za nas grijehom učini da mi budemo pravednost Božja u njemu.",
    author: '2 Kor 5, 21',
  },
  {
    text: 'Ovdje je strpljivost svetih, koji drže zapovijedi Božje i vjeru Isusovu.',
    author: 'Otk 14, 12',
  },
  {
    text: 'Pomoć je naša u imenu Gospodnjem, koji stvori nebo i zemlju.',
    author: 'Ps 124, 8',
  },
  {
    text: 'Ako mi tko hoće služiti, neka ide za mnom. I gdje sam ja, ondje će biti i moj služitelj. Ako mi tko hoće služiti, počastit će ga moj Otac." i što da kažem? Oče, izbavi me iz ovoga časa? No, zato dođoh u ovaj čas!',
    author: 'Iv 12, 26',
  },
  {
    text: 'Znajte: Jahve čudesno uzvisuje prijatelja svoga; Gospodin će me uslišiti kad ga zazovem.',
    author: 'Ps 4, 4',
  },
  {
    text: 'Evo, činim nešto novo; već nastaje. Zar ne opažate? Da, put ću napraviti u pustinji, a staze u pustoši.',
    author: 'Iz 43, 19',
  },
  {
    text: 'Nego Gospoda, koji vas je izveo iz Egipta silom velikom i mišicom podignutom, njega imate štovati, njemu se klanjati i njemu žrtvovati.',
    author: '2 Kr 17, 36',
  },
  {
    text: 'Bog je sred njega, poljuljat se neće, od rane zore Bog mu pomaže.',
    author: 'Ps 46, 6',
  },
  {
    text: 'Izađite iz Babilona, bježite iz Kaldeje! Glasno kličući, kazujte, objavljujte, do nakraj zemlje razglasite! Govorite: "Jahve je otkupio slugu svoga Jakova!',
    author: 'Iz 48, 20',
  },
  {
    text: 'Stoga vam kažem: Sve što god zamolite i zaištete, vjerujte da ste postigli i bit će vam!',
    author: 'Mk 11, 24',
  },
  {
    text: 'Znati dakle dobro činiti, a ne činiti - grijeh je.',
    author: 'Jak 4, 17',
  },
  {
    text: 'A Samuel reče svoj kući Izraelovoj: "Ako se hoćete svim srcem vratiti Gospodu, onda odstranite poganske idole i slike aštarte iz svoje sredine, upravite svoje srce na Gospoda i služite jedino njemu! Onda će vas on izbaviti iz ruku Filisteja"',
    author: '1 Sam 7, 3',
  },
  {
    text: 'Putu se propisa tvojih radujem više no svemu bogatstvu.',
    author: 'Ps 119, 14',
  },
  {
    text: 'Svojom ćete se postojanošću spasiti.',
    author: 'Lk 21, 19',
  },
  {
    text: 'Dušo moja, slavi Gospoda i ne zaboravljaj nijednoga dobročinstva njegova!',
    author: 'Ps 103, 2',
  },
  {
    text: 'Ta što će koristiti čovjeku ako sav svijet stekne, a životu svojemu naudi? Ili što će čovjek dati u zamjenu za život svoj?',
    author: 'Mt 16, 26',
  },
  {
    text: 'Ni visina, ni dubina, ni drugo kakvo stvorenje ne može nas rastaviti od ljubavi Božje, koja je u Kristu Isusu, Gospodinu našemu.',
    author: 'Rim 8, 39',
  },
  {
    text: 'Razmnožit ću po vama ljude i stoku, oni će se namnožiti i naploditi - te ću vas napučiti kao nekoć i obasuti vas dobrima više nego prije! I znat ćete da sam ja Jahve!',
    author: 'Ez 36, 11',
  },
  {
    text: 'A ja ću ti s pjesmom zahvalnicom žrtvu prinijeti. Što se zavjetovah, ispunit ću. Spasenje je od Gospoda.',
    author: 'Jona 2, 10',
  },
  {
    text: 'Božje obećanje slavim, u Boga ja se uzdam i neću se bojati: što mi može učiniti smrtnik?',
    author: 'Ps 56, 5',
  },
  {
    text: 'Neće u kraljevstvo nebesko ući svaki koji mi govori: `Gospodine, Gospodine!`, nego onaj koji vrši volju Oca mojega, koji je na nebesima.',
    author: 'Mt 7, 21',
  },
  {
    text: 'Pristupajmo dakle smjelo Prijestolju milosti da primimo milosrđe i milost nađemo za pomoć u pravi čas!',
    author: 'Heb 4, 16',
  },
  {
    text: 'Smiluj mi se, Jahve, jer sam iznemog`o, Jahve, ozdravi me jer dršću kosti moje.',
    author: 'Ps 6, 3',
  },
  {
    text: '"Moje je zlato, moje je srebro" - riječ je Jahve nad Vojskama.',
    author: 'Hagaj 2, 8',
  },
  {
    text: 'Uđite na uska vrata! Jer široka su vrata i prostran put koji vodi u propast i mnogo ih je koji njime idu.',
    author: 'Mt 7, 13',
  },
  {
    text: 'A njemu reče: "Ustani! Idi! Tvoja te vjera spasila!',
    author: 'Lk 17, 19',
  },
  {
    text: 'Pati li tko među vama? Neka moli! Je li tko radostan? Neka pjeva hvalospjeve!',
    author: 'Jak 5, 13',
  },
  {
    text: 'Ni tmina tebi neće biti tamna: noć sjaji kao dan i tama kao svjetlost.',
    author: 'Ps 139, 12',
  },
  {
    text: 'A vjera je već neko imanje onoga čemu se nadamo, uvjerenost u zbiljnosti kojih ne vidimo.',
    author: 'Heb 11, 1',
  },
  {
    text: 'Jer ja ću okrijepiti dušu iscrpljenu, obilno nahraniti dušu klonulu.',
    author: 'Jer 31, 25',
  },
  {
    text: 'Ne boj se jer ja sam s tobom; ne obaziri se plaho jer ja sam Bog tvoj. Ja te krijepim i pomažem ti, podupirem te pobjedničkom desnicom.',
    author: 'Iz 41, 10',
  },
  {
    text: 'Čuvajmo nepokolebljivu vjeru nade jer je vjeran Onaj koji dade obećanje.',
    author: 'Heb 10, 23',
  },
  {
    text: 'Isus im odgovori: "Da ste slijepi, ne biste imali grijeha. No vi govorite: `Vidimo` pa grijeh vaš ostaje.',
    author: 'Iv 9, 41',
  },
  {
    text: 'Bježite, spasavajte život, ugledajte se u pustinjsku magarad!',
    author: 'Jer 48, 6',
  },
  {
    text: 'Strpite se i vi, očvrsnite srca jer se Dolazak Gospodnji približio!',
    author: 'Jak 5, 8',
  },
  {
    text: 'Odgovorih mu: "Gospodine moj, ti to znaš." A on će mi: "Oni dođoše iz nevolje velike i oprali su haljine svoje i ubijelili ih u krvi Jaganjčevoj.',
    author: 'Otk 7, 14',
  },
  {
    text: 'A vi niste u tijelu, nego u Duhu, ako Duh Božji prebiva u vama. A nema li tko Duha Kristova, taj nije njegov.',
    author: 'Rim 8, 9',
  },
  {
    text: 'Tako da nemate nedostatka ni u jednoj milosti vi, koji čekate objavljenje Gospodina našega Isusa Krista,',
    author: '1 Kor 1, 7',
  },
  {
    text: 'I to dolazi od Gospoda nad vojskama; divna je osnova njegova, velika je mudrost njegova.',
    author: 'Iz 28, 29',
  },
  {
    text: 'Koje pak predodredi, te i pozva; koje pozva, te i opravda; koje opravda, te i proslavi.',
    author: 'Rim 8, 30',
  },
  {
    text: 'Mi jaki treba da nosimo slabosti slabih, a ne da sebi ugađamo.',
    author: 'Rim 15, 1',
  },
  {
    text: '"Pobjednika ću postaviti stupom u hramu Boga moga i odande on više neće izići i napisat ću na njemu ime Boga svoga i ime grada Boga svoga, novog Jeruzalema koji siđe s neba od Boga mojega, i ime moje novo.',
    author: 'Otk 3, 12',
  },
  {
    text: 'Kad vas predadu, ne budite zabrinuti kako ili što ćete govoriti. Dat će vam se u onaj čas što ćete govoriti.',
    author: 'Mt 10, 19',
  },
  {
    text: 'Tako, djeco, poslušajte me, blago onima koji čuvaju moje putove',
    author: 'Izr 8, 31',
  },
  {
    text: 'Ubuduće neka mi nitko ne dodijava jer ja na svom tijelu nosim biljege Isusove!',
    author: 'Gal 6, 17',
  },
  {
    text: 'K tebi će doći slava Libanona, čempresi, jele i brijestovi skupa, da ukrase prostor mojega Svetišta, podnožje će moje proslaviti!',
    author: 'Iz 60, 13',
  },
  {
    text: 'U ljubavi nas predodredi za posinstvo, za sebe, po Isusu Kristu, dobrohotnošću svoje volje',
    author: 'Ef 1, 5',
  },
  {
    text: 'Doista, poput ovaca lutaste, ali se sada obratiste k pastiru i čuvaru duša svojih.',
    author: '1 Pt 2, 24',
  },
  {
    text: 'Jer ja sam s tobom da te izbavim. Zatrt ću narode među koje te prognah, a tebe neću sasvim uništiti; al` ću te kazniti po pravici, ne smijem te pustit` nekažnjena.',
    author: 'Jer 30, 11',
  },
  {
    text: 'Ali što mi god bijaše dobitak, to poradi Krista smatram gubitkom.',
    author: 'Fil 3, 7',
  },
  {
    text: 'Hvalit ću te, Gospode, među narodima, među pucima pjevat ću tebi:',
    author: 'Ps 57, 10',
  },
  {
    text: 'Ako me tko ražalostio, nije ražalostio mene, nego u neku ruku - da ne pretjeram - sve vas.',
    author: '2 Kor 2, 2',
  },
  {
    text: 'Bdijte i molite da ne padnete u napast! Duh je, istina, voljan, no tijelo je slabo.',
    author: 'Mt 26, 41',
  },
  {
    text: 'Ti izbroji dane mog progonstva, sabrao si suze moje u mijehu svom. Nije li sve zapisano u knjizi tvojoj?',
    author: 'Ps 56, 9',
  },
  {
    text: 'Dat ću vam novo srce, nov duh udahnut ću u vas! Izvadit ću iz tijela vašega srce kameno i dat ću vam srce od mesa.',
    author: 'Ez 36, 26',
  },
  {
    text: 'Tada Onaj što sjedi na prijestolju reče: "Evo, sve činim novo!" I doda: "Napiši: Ove su riječi vjerne i istinite.',
    author: 'Otk 21, 5',
  },
  {
    text: 'On im reče: "Ne zadržavajte me kad je Jahve moje putovanje uspješno kraju priveo. Pustite me da se vratim svome gospodaru!',
    author: 'Post 24, 56',
  },
  {
    text: 'Nisi mi kupovao za novac trsku, nisi me sitio salom svojih žrtava; nego si me grijesima svojim mučio, bezakonjem svojim dosađivao mi.',
    author: 'Iz 43, 24',
  },
  {
    text: 'On nas izbavi iz vlasti tame i prenese u kraljevstvo Sina, ljubavi svoje,',
    author: 'Kol 1, 13',
  },
  {
    text: 'A Jošua zapovjedi narodu: "Posvetite se za sutra, jer će sutra Jahve učiniti čudesa među vama.',
    author: 'Jš 3, 5',
  },
  {
    text: 'Jahve će narediti da blagoslov bude s tobom u žitnicama tvojim i u svakom pothvatu ruke tvoje i blagoslivljat će te u zemlji koju ti Jahve, Bog tvoj, daje.',
    author: 'Pnz 28, 8',
  },
  {
    text: 'Ne boj ih se: jer ja sam s tobom da te izbavim," riječ je Jahvina.',
    author: 'Jer 1, 8',
  },
  {
    text: 'Idi, kaži Jeroboamu: "Ovako veli Gospod, Bog Izraelov: "Podigao sam te iz naroda i postavio te knezom nad svojim narodom Izraelom."',
    author: '1 Kr 14, 7',
  },
  {
    text: 'Eto, pred vas stavljam ovu zemlju. Idite, dakle, i zauzmite zemlju za koju se Jahve zakle ocima vašim, Abrahamu, Izaku i Jakovu, da će je dati njima i njihovu potomstvu poslije njih.',
    author: 'Pnz 1, 8',
  },
  {
    text: 'Ta Sin Čovječji dođe potražiti i spasiti izgubljeno!',
    author: 'Lk 19, 10',
  },
  {
    text: 'Borite se da uđete na uska vrata jer mnogi će, velim vam, tražiti da uđu, ali neće moći.',
    author: 'Lk 13, 24',
  },
  {
    text: 'Sve vaše neka bude u ljubavi!',
    author: '1 Kor 16, 14',
  },
  {
    text: 'Tko jede moje tijelo i pije moju krv, u meni ostaje i ja u njemu.',
    author: 'Iv 6, 56',
  },
  {
    text: 'Obucite svu opremu Božju da se mognete oduprijeti lukavstvima đavlovim.',
    author: 'Ef 6, 11',
  },
  {
    text: 'I tako siđe, opra se sedam puta u Jordanu, prema riječi čovjeka Božjega; i tijelo mu posta opet kao u malog djeteta - očistio se!',
    author: '2 Kr 5, 14',
  },
  {
    text: 'Jer kako je nebo visoko nad zemljom, dobrota je njegova s onima koji ga se boje.',
    author: 'Ps 103, 11',
  },
  {
    text: 'Zaručit ću te sebi dovijeka; zaručit ću te u pravdi i u pravu, u nježnosti i u ljubavi;',
    author: 'Hoš 2, 21',
  },
  {
    text: 'Niti će se moći kazati: `Evo ga ovdje!` ili: `Eno ga ondje!` Ta evo - kraljevstvo je Božje među vama!',
    author: 'Lk 17, 21',
  },
  {
    text: 'Jer ti si utočište nevoljnom, utočište ubogom u nevolji; ti si skrovište od pljuska i od žege zaklon, jer ćud je silnička kao pljusak zimski;',
    author: 'Iz 25, 4',
  },
  {
    text: 'Iz tjeskobe Jahvu ja zazvah: on me usliša i oslobodi.',
    author: 'Ps 118, 5',
  },
  {
    text: 'U onaj ću dan učiniti da izraste rog domu Izraelovu, a tebi ću usta otvoriti među njima. I znat će da sam ja Jahve.',
    author: 'Ez 29, 21',
  },
  {
    text: 'Ne, ne tražim dara; tražim samo plod izobilan u vašu korist.',
    author: 'Fil 4, 17',
  },
  {
    text: 'Shvatite nas! Nikomu nismo nanijeli nepravde, nikoga nismo upropastili, nikoga zakinuli.',
    author: '2 Kor 7, 2',
  },
  {
    text: 'Zato i mi, okruženi tolikim oblakom svjedoka, odložimo svaki teret i grijeh koji nas sapinje te postojano trčimo u borbu koja je pred nama!',
    author: 'Heb 12, 1',
  },
  {
    text: 'Reče Isus: "Zaista, kažem vam, nema ga tko ostavi kuću, ili braću, ili sestre, ili majku, ili oca, ili djecu, ili polja poradi mene i poradi evanđelja,',
    author: 'Mk 10, 29',
  },
  {
    text: 'Jer mudrost ovoga svijeta ludost je pred Bogom. Ta pisano je: On hvata mudre u njihovu lukavstvu.',
    author: '1 Kor 3, 19',
  },
  {
    text: 'Malaksalo mi tijelo i srce: okrilje srca moga, i baštino moja, o Bože, dovijeka!',
    author: 'Ps 73, 26',
  },
  {
    text: 'Duh svoj udahnut ću u vas da hodite po mojim zakonima i da čuvate i vršite moje naredbe.',
    author: 'Ez 36, 27',
  },
  {
    text: '"Može li žena zaboravit` svoje dojenče, ne imat` sućuti za čedo utrobe svoje? Pa kad bi koja i zaboravila, tebe ja zaboraviti neću.',
    author: 'Iz 49, 15',
  },
  {
    text: 'Ta meni je živjeti Krist, a umrijeti dobitak!',
    author: 'Fil 1, 21',
  },
  {
    text: '"Poslije ovoga izlit ću Duha svoga na svako tijelo, i proricat će vaši sinovi i kćeri, vaši će starci sanjati sne, a vaši mladići gledati viđenja.',
    author: 'Joel 3, 1',
  },
  {
    text: 'Recite preplašenim srcima: "Budite jaki, ne bojte se! Evo Boga vašega, odmazda dolazi, Božja naplata, on sam hita da nas spasi!',
    author: 'Iz 35, 4',
  },
  {
    text: 'A ako rekne ovako: `Nisi mi po volji!` - onda evo me, neka čini sa mnom što je dobro u njegovim očima!',
    author: '2 Sam 15, 26',
  },
  {
    text: 'Po pravednosti mojoj Jahve mi uzvrati, po čistoći ruku mojih on me nagradi',
    author: '2 Sam 22, 21',
  },
  {
    text: 'Odstupite od mene, svi opaki, jer je Jahve plač moj čuo.',
    author: 'Ps 6, 9',
  },
  {
    text: 'Svaku lozu na meni koja ne donosi roda on siječe, a svaku koja rod donosi čisti da više roda donese.',
    author: 'Iv 15, 2',
  },
  {
    text: 'Neka hvale Jahvu za dobrotu njegovu, za čudesa njegova sinovima ljudskim!',
    author: 'Ps 107, 15',
  },
  {
    text: 'Gledajte koliku nam je ljubav darovao Otac: djeca se Božja zovemo, i jesmo. A svijet nas ne poznaje zato što ne poznaje njega.',
    author: '1 Iv 3, 1',
  },
  {
    text: 'Neka, dakle, nemaju baštine među svojom braćom: Jahve je njihova baština, kako im je i rekao.',
    author: 'Pnz 18, 2',
  },
  {
    text: 'Istražujete Pisma jer mislite, da imate u njima život vječni! Upravo su ona, koja svjedoče za mene.',
    author: 'Iv 5, 39',
  },
  {
    text: 'Dobar je Jahve onom koji se u nj pouzdaje, duši koja ga traži.',
    author: 'Tuž 3, 25',
  },
  {
    text: 'Jahve mu reče: "Uslišio sam molitvu i prošnju koju si mi uputio. Posvetio sam ovaj Dom, koji si sagradio da u njemu prebiva Ime moje dovijeka; moje će oči i srce biti ovdje svagda.',
    author: '1 Kr 9, 3',
  },
  {
    text: 'I sva ova bića željno čekaju da ih nahraniš na vrijeme.',
    author: 'Ps 104, 27',
  },
  {
    text: 'On je ljubav moja i tvrđava moja, zaštita moja, izbavitelj moj, štit moj za koji se sklanjam; on mi narode stavlja pod noge!',
    author: 'Ps 144, 2',
  },
  {
    text: 'Zaista, zaista, kažem vam: dolazi čas - sada je! - kad će mrtvi čuti glas Sina Božjega i koji čuju, živjet će.',
    author: 'Iv 5, 25',
  },
  {
    text: 'Kako su mili stanovi tvoji, Jahve nad Vojskama!',
    author: 'Ps 84, 2',
  },
  {
    text: 'Razderite srca, a ne halje svoje! Vratite se Jahvi, Bogu svome, jer on je nježnost sama i milosrđe, spor na ljutnju, a bogat dobrotom, on se nad zlom ražali.',
    author: 'Joel 2, 13',
  },
  {
    text: 'Izbavit će te iz ždrijela tjeskobe k prostranstvima bezgraničnim izvesti, k prepunu stolu mesa pretiloga.',
    author: 'Job 36, 16',
  },
  {
    text: 'Pustio si da nam zajašu za vrat: prošli smo kroz oganj i vodu, onda si pustio da odahnemo.',
    author: 'Ps 66, 12',
  },
  {
    text: 'Kaže im: "Zbog vaše malovjernosti. Zaista, kažem vam, ako imadnete vjere koliko je zrno gorušičino te reknete ovoj gori: `Premjesti se odavde onamo!`, premjestit će se i ništa vam neće biti nemoguće.',
    author: 'Mt 17, 20',
  },
  {
    text: 'I jeli su svi i nasitili se. Od preteklih ulomaka nakupiše dvanaest punih košara.',
    author: 'Mt 14, 20',
  },
  {
    text: 'I više neće biti domu Izraelovu trna što ranjava nit` žaoke što razdire među svima uokolo koji ga preziru! I znat će se da sam ja Jahve!`',
    author: 'Ez 38, 24',
  },
  {
    text: 'Kao što obeća na usta svetih proroka svojih odvijeka: spasiti nas od neprijatelja naših i od ruke sviju koji nas mrze',
    author: 'Lk 1, 70-71',
  },
  {
    text: 'I pazimo jedni na druge da se potičemo na ljubav i dobra djela',
    author: 'Heb 10, 24',
  },
  {
    text: 'Dakle: po plodovima ćete ih njihovim prepoznati.',
    author: 'Mt 7, 20',
  },
  {
    text: 'Jer mi smo obrezanje, mi koji u Duhu Božjemu obavljamo bogoslužje i dičimo se Kristom Isusom, a ne pouzdajemo se u tijelo,',
    author: 'Fil 3, 3',
  },
  {
    text: 'A kažem vam: tko se god prizna mojim pred ljudima, i Sin Čovječji priznat će se njegovim pred anđelima Božjim.',
    author: 'Lk 12, 8',
  },
  {
    text: 'Ljubim te, Jahve, kreposti moja!',
    author: 'Ps 18, 2',
  },
  {
    text: 'Ostanite u meni i ja u vama. Kao što loza ne može donijeti roda sama od sebe, ako ne ostane na trsu, tako ni vi ako ne ostanete u meni.',
    author: 'Iv 15, 4',
  },
  {
    text: 'Hvalite Boga u Svetištu njegovu, slavite ga u veličanstvu svoda nebeskog!',
    author: 'Ps 150, 2',
  },
  {
    text: 'Tko ima moje zapovijedi i čuva ih, taj me ljubi; a tko mene ljubi, njega će ljubiti Otac moj, i ja ću ljubiti njega i njemu se očitovati.',
    author: 'Iv 14, 21',
  },
  {
    text: 'Ta Sin Čovječji dođe potražiti i spasiti izgubljeno!',
    author: 'Lk 19, 10',
  },
  {
    text: 'I zato se sada bojte Jahve i služite mu savršeno i vjerno! Uklonite bogove kojima su služili oci vaši s onu stranu Rijeke i u Egiptu i služite Jahvi!',
    author: 'Još 24, 14',
  },
  {
    text: 'Tako, kažem vam, biva radost pred anđelima Božjim zbog jednog obraćena grešnika.',
    author: 'Lk 15, 10',
  },
  {
    text: 'Sjećajte se riječi koju vam rekoh: `Nije sluga veći od svoga gospodara.` Ako su mene progonili, i vas će progoniti; ako su moju riječ čuvali, da vašu će čuvati.',
    author: 'Iv 15, 20',
  },
  {
    text: 'Čim Isus uze ocat, reče: "Dovršeno je!" I prignuvši glavu, preda duh',
    author: 'Iv 19, 30',
  },
  {
    text: 'A Isus mu reče: "Ja jesam! I gledat ćete Sina Čovječjega gdje sjedi zdesna Sile i dolazi s oblacima nebeskim.',
    author: 'Mk 14, 62',
  },
  {
    text: 'O Bože, ti si Bog moj: gorljivo tebe tražim; tebe žeđa duša moja, tebe želi tijelo moje, kao zemlja suha, žedna, bezvodna.',
    author: 'Ps 63, 2',
  },
  {
    text: 'Istinom me svojom vodi i pouči me, jer ti si Bog, moj Spasitelj: $VAU u tebe se pouzdajem svagda.',
    author: 'Ps 25, 5',
  },
];

const quoteContainer = document.getElementById("quote-container");
const quoteText = document.getElementById("quote");
const authorText = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");
const loader = document.getElementById("loader");

function loading() {
	loader.hidden = false;
	quoteContainer.hidden = true;
}

function complete() {
	quoteContainer.hidden = false;
	loader.hidden = true;
}

function newQuote(){
	loading();
	var quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
		quoteText.textContent = quote.text;
		authorText.textContent = quote.author;
		if(quote.text.length > 120) {
			quoteText.classList.add('long-quote');
  		} else {
  			quoteText.classList.remove('long-quote');
		}
		complete();
}

newQuoteBtn.addEventListener('click', newQuote);

newQuote();