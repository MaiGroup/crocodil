export interface DictionaryEntry {
  difficulty: Difficulty;
  word: string;
  desc: string;
}

export interface Dictionary {
  language: string;
  defUrl: string;
  entries: DictionaryEntry[];
}

export enum Difficulty {
  Easy = 'Usor',
  Medium = 'Mediu',
  Hard = 'Complicat',
  Random = 'Random',
}

// TODO: adjust difficulty levels
export const Dictionaries: Dictionary[] = [
  {
    language: 'RO',
    defUrl: 'https://ro.m.wiktionary.org/wiki/',
    entries: [
      {
        difficulty: Difficulty.Medium,
        word: 'paralel',
        desc: 'Dreaptă, plan care are toate punctele la aceeași distanță de o altă dreaptă sau de un alt plan cu care nu se întretaie, oricât s-ar prelungi.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'porumb',
        desc: 'Plantă din familia gramineelor, cu tulpina înaltă, puternică și groasă, cu frunzele lungi și ascuțite la vârf și cu inflorescența un spic sau un panicul, cultivată ca plantă alimentară, industrială și furajeră.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'broască',
        desc: 'Nume dat mai multor animale amfibii din clasa batracienilor, fără coadă, cu picioarele dinapoi mai lungi, adaptate pentru sărit, cu gura largă și ochii bulbucați.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'elefant',
        desc: 'Mamifer din jungla Asiei și Africii, foarte mare, cu nasul modificat în formă de trompă și cu colți mari de fildeș.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'Fiară',
        desc: '1) Animal sălbatic, de talie mare; bestie. 2) Om crud, nemilos.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'girafă',
        desc: '1. Mamifer patruped erbivor, cu gâtul foarte lung, care trăiește în savanele Africii. 2. Suport de microfon care permite diferite deplasări ale acestuia.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'pisică',
        desc: 'Mamifer carnivor de talie mică, foarte sprinten, cu blană netedă, de diferite culori, cu ochi ageri (care văd și în întuneric) și cu ghearele ascuțite.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'câine',
        desc: 'Mamifer carnivor de talie mijlocie, din familia canidelor, domesticit și folosit la pază, vânătoare etc.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'tigru',
        desc: 'Mamifer carnivor din familia felidelor, de talie mare, cu blana de culoare galbenă-roșcată cu dungi negre, transversale, care trăiește în Asia de sud-est.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'panteră',
        desc: 'Mamifer carnivor de pradă din Africa și din Asia, cu blana gălbuie presărată cu pete inelate roșietice; leopard. ',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'lup',
        desc: 'Mamifer carnivor din familia canidelor, cu corpul de circa 150 cm lungime, acoperit cu blană sură, cu gâtul gros, cu capul mare, cu botul și urechile ascuțite și cu coada stufoasă',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'arici',
        desc: 'Animal mamifer insectivor, cu botul ascuțit și corpul gros, acoperit cu țepi.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'antilopă',
        desc: 'Mamifer rumegător sprinten care trăiește în țările calde.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'elan',
        desc: 'Animal rumegător nordic din familia cervidelor, cu coarne mari, ramificate și lățite în formă de lopeți ',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'căprioară',
        desc: 'Animal rumegător sălbatic, mai mic decât cerbul, cu picioare subțiri, cu coarne mici',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'vulpe',
        desc: 'Mamifer carnivor sălbatic, de mărimea unui câine, cu blana roșcată, cu coada lungă și stufoasă, cu urechile ascuțite și cu botul îngust',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'mistreț',
        desc: 'Animal sălbatic cu corpul masiv, acoperit cu păr aspru, negru-sur, cu greabănul înalt, capul mare, terminat cu bot alungit, cu ochii mici și cu caninii transformați în colți puternici',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'struț',
        desc: 'Pasăre alergătoare mare de stepă, cu picioare lungi și puternice, cu gât lung și golaș, cu aripi mici, inapte pentru zbor, cu pene frumoase, moi, negre sau brune-cenușii, întrebuințate ca podoabă, care trăiește îndeosebi în regiunile tropicale ale Africii.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'pinguin',
        desc: 'Pasăre palmipedă din mările arctice, cu aripi scurte, cu pieptul alb și cu mersul legănat, care stă în poziție verticală',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'călugăriță',
        desc: '1) Femeie care a făcut legământ să ducă o viață religios-ascetică și care trăiește într-o comunitate mănăstirească. 2) Insectă carnivoră mare, de culoare verde-cafenie, cu picioarele din față în formă de cange, care-i servesc la prinderea prăzii',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'vultur',
        desc: 'Numele mai multor păsări răpitoare de zi, cu ciocul lung, ascuțit și coroiat, cu aripi lungi și cu picioare puternice, cu gheare tari, care se hrănesc cu animale vii și cu stârvuri',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'vrabie',
        desc: 'Pasăre mică cu penele de culoare brună împestrițate cu negru, cu pântecele cenușiu, cu ciocul scurt, conic și cu coada trunchiată',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'barză',
        desc: 'Pasăre călătoare cu ciocul roșu, gâtul și picioarele lungi și cu penele, de obicei, albe, afară de vârfurile aripilor, care sunt negre, cocostârc',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'pui',
        desc: 'Pasăre, de la ieșirea din ou până la maturitate',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'șoim',
        desc: 'Nume dat mai multor păsări răpitoare de zi, de mărime variată, agere și puternice, cu ciocul scurt și curbat și având câte o crestătură în formă de dinte, care se hrănesc cu pradă vie, mai ales cu păsări',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'rechin',
        desc: 'Pește marin răpitor cu trupul fusiform, cu botul ascuțit și cu mai multe șiruri de dinți',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'balenă',
        desc: 'Mamifer cetaceu foarte mare, care trăiește în mările reci.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'delfin',
        desc: 'Mamifer marin din ordinul cetaceelor, care trăiește în cete în toate mările.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'lăcustă',
        desc: 'Specie de insecte cu picioarele posterioare lungi, adaptate pentru sărit, care, migrând în cete, dăunează foarte mult agriculturii',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'licurici',
        desc: 'Gândac nocturn care are proprietatea de a lumina în întuneric',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'fluture',
        desc: 'Nume generic dat insectelor din ordinul lepidopterelor, care au corpul bombat sau alungit și catifelat, patru aripi membranoase, acoperite cu solzi mărunți de culori diferite și un aparat bucal adaptat pentru supt, a căror larvă este o omidă.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'molie',
        desc: 'Nume generic dat mai multor specii de fluturi mici de noapte, ale căror larve rod lucrurile de origine vegetală sau animală.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'furnică',
        desc: 'Grup de insecte din ordinul himenopterelor, de talie mică sau mijlocie, negre sau roșii, care trăiesc în colonii; (și la sg.) insectă care face parte din acest grup.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'cărți',
        desc: 'Scriere cu un anumit subiect, tipărită și legată sau broșată în volum',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'bicicletă',
        desc: 'Vehicul cu două roți pus în mișcare prin două pedale acționate cu picioarele și folosit, de obicei, pentru transportul unei singure persoane.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'minge',
        desc: 'Obiect sferic (rar ovoidal), de diverse dimensiuni și greutăți, confecționat din cauciuc, piele, celuloid, material plastic etc.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'navetă',
        desc: 'Parcurgerea de către o persoană a unui drum dus și întors, cu regularitate, de obicei între două localități',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'mașină',
        desc: 'Sistem tehnic alcătuit din piese cu mișcări determinate, care transformă o formă de energie în altă formă de energie sau în lucru mecanic util',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'nori',
        desc: 'Masă (delimitată) de vapori sau de picături de apă, de cristale de gheață aflate în suspensie în atmosferă.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'cer',
        desc: 'Spațiu cosmic nesfârșit în care se află aștrii',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'soare',
        desc: 'Corp ceresc principal al sistemului nostru planetar, incandescent și luminos, în jurul căruia gravitează și se învârtesc pământul și celelalte planete ale sistemului.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'copac',
        desc: ' Plantă cu trunchiul lemnos și înalt, ale cărei crengi se ramifică la o distanță oarecare de sol, formând o coroană',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'cărucior',
        desc: 'Trăsurică în care sunt plimbați copiii mici; căruț',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'lac',
        desc: 'Întindere mai mare de apă stătătoare, închisă între maluri, uneori cu scurgere la mare sau la un râu.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'mare',
        desc: '1) Nume generic dat vastelor întinderi de apă stătătoare, adânci și sărate, de pe suprafața Pământului, care de obicei sunt unite cu oceanul printr-o strâmtoare. 2) Suprafață vastă; întindere mare; imensitate.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'râu',
        desc: 'Apă curgătoare (permanentă) formată din unirea mai multor pâraie și care se varsă într-un fluviu, în alt râu, într-un lac etc.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'pădure',
        desc: 'Întindere mare de teren acoperită de copaci',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'casă',
        desc: 'Clădire destinată pentru a servi de locuință omului',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'drum',
        desc: ' Cale de comunicație terestră, alcătuită dintr-o bandă îngustă și continuă de teren bătătorit, pietruit, pavat sau asfaltat.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'autobuz',
        desc: 'Automobil cu caroseria închisă sau parțial decapotabilă, folosit la transportul în comun al unui număr mare de persoane.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'tramvai',
        desc: 'Mijloc de transport în comun (în interiorul orașelor), constând din unul sau mai multe vagoane (cu tracțiune electrică) care rulează pe șine',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'oraș',
        desc: 'Formă complexă de așezare omenească cu dimensiuni variabile și dotări industriale, având de obicei funcție administrativă, industrială, comercială, politică și culturală',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'grădină zoologică',
        desc: 'Parc in care animale rare sau exotice sunt tinute in conditii asemanatoare cu cele ale vietii lor in libertate',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'desen animat',
        desc: 'Film de animație',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'Baba Yaga',
        desc: 'Baba Iaga este un personaj cu trăsături de vrăjitoare din mitologia slavă',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'cinema',
        desc: 'Cinematograf',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'tv',
        desc: 'Aparat care recepționează imagini transmise prin televiziune',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'magnetofon',
        desc: 'Aparat care înregistrează și reproduce sunetele cu ajutorul unei benzi speciale, acoperite cu o substanță feromagnetică',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'dulap',
        desc: 'Mobilă de lemn sau de metal prevăzută cu rafturi, în care se păstrează rufe, haine, vase, cărți etc.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'cană',
        desc: 'Vas cu toartă care servește la băut sau la scos lichide dintr-un vas mai mare.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'lingură',
        desc: 'Obiect de metal sau de lemn pentru uzul casnic, alcătuit dintr-o parte ovală scobită și dintr-o coadă.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'Masă',
        desc: 'mobilă formată dintr-o placă dreptunghiulară, pătrată sau rotundă, sprijinită pe unul sau mai multe picioare și pe care se mănâncă, se scrie etc.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'scaun',
        desc: 'Mobilă (de lemn, de metal etc.) cu sau fără spetează, pe care poate să șadă o singură persoană.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'furculiță',
        desc: 'Obiect (de metal) alcătuit dintr-un mâner și doi până la patru dinți, cu ajutorul căruia se duce mâncarea la gură',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'farfurie',
        desc: 'Obiect de faianță, de porțelan etc., de obicei de formă rotundă, cu marginile puțin ridicate și cu fundul plat sau adâncit, în care se servește mâncarea.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'perdea',
        desc: 'Obiect confecționat dintr-un material textil care se atârnă la ferestre și la uși pentru a împiedica pătrunderea luminii, pentru a opri vederea din afară, în scop decorativ etc.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'fereastră',
        desc: 'Deschizătură de formă regulată lăsată în peretele unei clădiri, al unui vehicul',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'scară',
        desc: 'Obiect (de lemn, de fier, de frânghie etc.) alcătuit din două părți laterale lungi și paralele, unite prin piese paralele așezate transversal la distanțe egale și servind pentru a urca și a coborî la alt nivel.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'canapea',
        desc: 'Divan îngust, îmbrăcat în stofă sau în piele, care are de obicei un spătar și brațe; sofa',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'iubire',
        desc: 'Sentiment de afecțiune (și admirație) pentru cineva sau ceva.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'ură',
        desc: 'Sentiment puternic, nestăpânit, de dușmănie față de cineva sau de ceva',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'dezamăgire',
        desc: 'Faptul de a dezamăgi sau de a fi dezamăgit; deziluzie, decepție',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'adorație',
        desc: 'Iubire nemărginită. Manifestare a încântării și a respectului',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'suferință',
        desc: 'Durere fizică sau morală',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'tristețe',
        desc: 'Starea sufletească apăsătoare; mâhnire, amărăciune',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'bucurie',
        desc: 'Sentiment de mulțumire vie, de satisfacție sufletească',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'râs',
        desc: '1) Specie de mamifer sălbatic, carnivor, din familia felinelor, mai mare decât pisica sălbatică, cu blana galbenă-roșcată (cu pete negre) și cu smocuri de păr pe urechi. 2) Acțiunea de a râde și rezultatul ei',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'plictiseală',
        desc: 'Stare sufletească apăsătoare, ușoară depresiune morală provocată de singurătate, de lipsa de ocupație sau de o ocupație neatrăgătoare, de monotonie etc',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'mâhnire',
        desc: 'Sentiment de întristare, îndurerare, amărăciune, supărare',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'fericire',
        desc: 'Stare de mulțumire sufletească intensă și deplină. ◊ Loc. adv. Din fericire = printr-un concurs de împrejurări favorabile.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'distracție',
        desc: 'Stare de mulțumire sufletească intensă și deplină.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'pasiune',
        desc: 'Stare afectivă și intelectuală deosebit de intensă și stabilă, manifestată ca o tendință care polarizează procesele psihice ale omului, determinându-l prin intensitatea efectelor sau prin permanența acțiunii lor',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'van damme',
        desc: 'Luptător în arte marțiale, actor și regizor belgian, cunoscut mai ales ca actor de filme de acțiune cu arte marțiale',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'arnold schwarzenegger',
        desc: 'Fost culturist și actor american originar din Austria, politician republican, care a servit ca cel de-al treizeci și optulea guvernator al statului California.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'leonardo dicaprio',
        desc: 'Actor și producător de filme americane',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'vin diesel',
        desc: 'Actor, regizor și producător american. Este cunoscut mai ales pentru portretizarea lui Dominic Toretto în seria de filme The Fast and the Furious',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'vladimir putin',
        desc: 'Om politic rus',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'donald trump',
        desc: 'Politician american, care a fost cel de-al 45-lea președinte al Statelor Unite între 2017 și 2021',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'alla pugacheva',
        desc: 'Cântăreață si actrită rusă',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'filip kirkorov',
        desc: 'Cântăreț, actor, compozitor și producător muzical rus de origine bulgară; Artist al Poporului în Federația Rusă.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'zemfira',
        desc: 'Cântăreață, compozitoare și muziciană rusă de muzică rock',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'moașă',
        desc: 'Femeie (cu pregătire specială) care asistă și îngrijește femeile la naștere',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'grătar',
        desc: 'Obiect constând din vergele de fier dispuse paralel și prinse la capete, folosit pentru a frige carnea deasupra jarului.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'claustrofobie',
        desc: 'Teamă patologică de spații închise.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'scobitoare',
        desc: 'Bețișor foarte subțire și ascuțit la unul dintre capete, care servește la scoaterea rămășițelor de alimente dintre dinți sau din dinți',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'purici',
        desc: 'Nume dat mai multor insecte mici parazite, de culoare neagră-cafenie, fără aripi, cu picioarele posterioare adaptate pentru sărit, care se hrănesc cu sânge supt din corpul omului sau al unor animale.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'glamour',
        desc: 'Glamour este o revistă pentru femei publicată de Condé Nast Publications. Fondată în 1939 în Statele Unite, inițial se numea Glamour of Hollywood.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'sirenă stupidă',
        desc: 'Sirena este o ființă fabuloasă, din mitologia greacă, cu aspect de femeie, cu picioare și aripi de pasăre, mai târziu cu coadă de pește, care, prin cântecele ei, ademenea pe corăbieri în locuri primejdioase, unde aceștia își găseau moartea',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'rață urâtă',
        desc: 'Pasăre inotătoare cu ciocul lat și turtit.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'elefant roz',
        desc: 'Mamifer din jungla Asiei și Africii, foarte mare',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'veveriță nebună',
        desc: 'Mamifer rozător de talie mică, cu blană roșcată sau neagră pe spate și albă pe piept, cu coada lungă și stufoasă, care trăiește pe arbori',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'lenjerie murdară',
        desc: 'Rufărie de corp și de pat',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'ciorapi puturoși',
        desc: 'Obiect de îmbrăcăminte care acoperă piciorul, confecționat din fire de bumbac sau alt material',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'dentist drăguț',
        desc: 'Specializat în dentistică; stomatolog',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'păun',
        desc: 'Pasăre domestică mare, cu penajul masculului strălucitor',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'asistent de stomatolog',
        desc: 'Care asistă, care este de față la ceva',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'Stewardesă',
        desc: 'Femeie care face parte din personalul de bord al unui avion, având sarcina de a îndruma și de a servi călătorii.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'pompier',
        desc: 'Persoană dintr-o unitate, dintr-un corp special organizat pentru stingerea incendiilor.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'polițist',
        desc: 'Agent de poliție, funcționar de poliție. ',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'psihiatru',
        desc: 'Medic specialist în psihiatrie.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'ginecolog',
        desc: 'Medic specializat în ginecologie',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'urolog',
        desc: 'Medic specialist în urologie',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'apicultor',
        desc: 'Persoană care se ocupă cu apicultura; albinar, prisăcar, stupar',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'apicultură',
        desc: 'Creșterea și îngrijirea rațională a albinelor, în scopul folosirii produselor lor',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'arhitect',
        desc: 'Specialist în proiectarea planurilor (și a devizelor) de construire a clădirilor',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'arheolog',
        desc: 'Specialist în arheologie.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'miner',
        desc: 'Muncitor calificat care lucrează într-o mină',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'sculptor',
        desc: 'Artist care se ocupă cu sculptura',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'artist',
        desc: 'Persoană de talent care lucrează în mod creator într-un domeniu al artei',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'scriitor',
        desc: 'Autor de opere literare.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'autor',
        desc: 'Persoană care creează o operă literară, artistică, științifică sau publicistică',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'electrician',
        desc: 'Persoană calificată care lucrează sau repară instalații, mașini, aparate etc',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'contabil',
        desc: 'Care ține de contabilitate, privitor la contabilitate; contabilicesc.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'avocat',
        desc: 'Persoană care are profesiunea de a acorda asistență juridică celor interesați.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'arbitru',
        desc: 'Persoană, organizație instanță aleasă sau desemnată pentru cercetarea și rezolvarea unui litigiu.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'director',
        desc: 'Care dirijează sau conduce ceva, care indică direcția.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'actor',
        desc: 'Artist care interpretează roluri în piese de teatru, în filme etc.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'veterinar',
        desc: 'Care se referă la prevenirea, combaterea și vindecarea bolilor de care suferă animalele',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'astronaut',
        desc: 'Persoană care călătorește în spațiul cosmic cu o astronavă',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'programator',
        desc: 'Persoană specializată în întocmirea programului unui calculator',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'astrolog',
        desc: 'Persoană care practică astrologia',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'administrator',
        desc: 'Persoană care administrează, care conduce o administrație sau un serviciu de administrație.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'vânzător',
        desc: 'Persoană fizică sau juridică care vinde ceva ocazional sau permanent',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'crevetă',
        desc: 'Nume dat mai multor crustacee marine comestibile',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'caracatiță',
        desc: 'Animal marin din încrengătura moluștelor, cu corpul rotund, în formă de sac și cu opt brațe puternice, prevăzute cu ventuze',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'crab',
        desc: 'Nume dat mai multor specii de animale crustacee marine, cu zece picioare, cu abdomenul scurt și îndoit sub cefalotoracele mare și turtit',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'melc',
        desc: 'Nume dat mai multor specii de gasteropode din încrengătura moluștelor, care au corpul moale, de obicei apărat de o cochilie răsucită în spirală, și patru tentacule sensibile, la cap',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'veveriţă',
        desc: 'Mamifer rozător de talie mică, cu blană roșcată sau neagră pe spate și albă pe piept, cu coada lungă și stufoasă, care trăiește pe arbori',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'păun',
        desc: 'Pasăre domestică mare, cu penajul masculului strălucitor, albastru-verzui și cu coada foarte lungă, pe care o poate răsfira în formă de evantai',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'şarpe',
        desc: 'Ordin de reptile (veninoase și neveninoase) lipsite de membre, cu corpul cilindric, adaptate la târâre prin mișcări ondulatorii',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'urs',
        desc: 'Mamifer omnivor cu trupul masiv, acoperit de o blană brună-negricioasă sau roșcată, cu botul ascuțit și cu coada scurtă',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'struț',
        desc: 'Pasărea cea mai mare din ordinul alergătoarelor',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'girafă',
        desc: 'Mamifer patruped erbivor, cu gâtul foarte lung, care trăiește în savanele Africii.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'elefant',
        desc: 'Mamifer din jungla Asiei și Africii, foarte mare, cu nasul modificat în formă de trompă și cu colți mari de fildeș.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'ponei',
        desc: 'Cal mic de rasă englezească, cu părul lung.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'rață',
        desc: 'Pasăre inotătoare cu ciocul lat și turtit',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'gâscă',
        desc: 'Pasăre sălbatică sau domestică, înotătoare, de talie mare, având gât și cioc lung, picioare palmate și penaj, de obicei, suriu pe spate și alb pe piept',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'cocoş',
        desc: 'Masculul găinii; pasăre domestică mai mare decât găina, cu o creastă roșie dezvoltată, cu cioc ascuțit și cu penele de diferite culori',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'mascul',
        desc: 'Individ de sex bărbătesc.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'femela',
        desc: 'Individ de sex femenin.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'măgar',
        desc: 'Animal din familia calului, mai mic decât acesta',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'păianjen',
        desc: ' Animal nevertebrat terestru, de talie mică, cu abdomenul mare, nesegmentat, cu patru perechi de picioare, care urzește fire lungi (împletite în plase foarte subțiri) pentru prinderea insectelor.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'pisică',
        desc: 'Mamifer carnivor de talie mică, foarte sprinten, cu blană netedă, de diferite culori, cu ochi ageri (care văd și în întuneric) și cu ghearele ascuțite',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'omida',
        desc: 'Larva fluturilor, dăunătoare pomilor, cu corpul alcătuit din segmente, uneori acoperit cu peri.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'fluture',
        desc: 'Nume generic dat insectelor din ordinul lepidopterelor, care au corpul bombat sau alungit și catifelat, patru aripi membranoase, acoperite cu solzi mărunți de culori diferite și un aparat bucal adaptat pentru supt, a căror larvă este o omidă.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'stea de mare',
        desc: 'Specii care trăiesc în mediul marin, în apropierea coastelor, preferă locurile stâncoase,',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'căluț de mare',
        desc: 'Este un pește marin de 8-18 cm',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'albina',
        desc: 'Insectă care trăiește în roiuri și produce miere și ceară, având picioarele din urmă adaptate pentru strângerea polenului și un ac veninos în partea posterioară a abdomenului',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'scorpion',
        desc: 'Nume dat mai multor specii de arahnide având la extremitatea posterioară glande veninoase, care se deschid în vârful unui ac',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'câine',
        desc: 'Animal mamifer carnivor, domesticit, folosit pentru pază, vânătoare etc.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'rutină',
        desc: 'Capacitate câștigată printr-o practică îndelungată; (depr.) obișnuință de a acționa sau de a gândi totdeauna în același fel.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'maimuţă',
        desc: 'Nume generic dat animalelor tropicale cu conformația exterioară foarte asemănătoare cu a omului, inteligente și sociabile, cu un spirit de imitație foarte dezvoltat.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'propagandă',
        desc: 'Acțiune de răspândire a unor idei care prezintă și susțin o teorie, o concepție, un partid politic etc., cu scopul de a convinge și de a câștiga adepți.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'porc',
        desc: 'Mamifer domestic omnivor, cu capul de formă conică, cu botul alungit, cu corpul acoperit cu păr aspru, scurt și relativ rar, crescut pentru carnea și grăsimea lui',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'vacă',
        desc: 'Animal domestic din specia bovinelor, femela taurului; p. restr. carnea acestui animal, folosită ca aliment',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'hamster',
        desc: 'Mamifer din familia rozătoarelor, de talia unui șobolan, cu blana de diferite culori',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'papagal',
        desc: 'Nume dat mai multor păsări tropicale cățărătoare, cu ciocul mare și încovoiat, cu pene felurit și viu colorate, care, dresate, pot repeta sunete articulate.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'lebădă',
        desc: 'Gen de păsări acvatice, mai mari decât gâsca, cu pene albe sau (rar) negre și cu gâtul lung și arcuit',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'rac',
        desc: 'Crustaceu comestibil acoperit cu o carapace tare, de culoare neagră-verzuie, care devine roșie la fiert, cu abdomenul inelat, cu cinci perechi de picioare, dintre care cea din față este în formă de clește',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'la casa de papel',
        desc: 'este un serial de televiziune spaniol',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'jurnal',
        desc: 'Publicație periodică având apariție zilnică; ziar, gazetă. ',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'sâmbătă',
        desc: 'A șasea zi a săptămânii, care urmează după vineri',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'calendar',
        desc: 'Sistem de împărțire a timpului în ani, luni și zile, bazat pe fenomenele periodice ale naturii.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'bulă',
        desc: 'Bășică de aer sau de gaz aflată în masa unui lichid sau a unui solid. ',
      },

      {
        difficulty: Difficulty.Hard,
        word: 'sauna',
        desc: 'Baie de aburi care constă în expunerea corpului la o temperatură de 60-80ºC, produsă prin stropirea unor pietre poroase încinse, după care se activează circulația prin lovirea corpului cu un mănunchi de nuiele și prin dușuri reci.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'proteină',
        desc: 'Substanță organică cu greutate moleculară foarte mare, indispensabilă în alimentație.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'steroizi',
        desc: 'Substanță organică naturală prezentă în mulți hormoni și în acizi biliari, cu rol biologic important',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'oftalmolog',
        desc: 'Medic specializat în oftalmologie; oculist.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'pivniţă',
        desc: 'Încăpere sau grup de încăperi subterane, zidite de obicei dedesubtul unei clădiri și destinate păstrării unor materiale (lemne, cărbuni etc.) sau unor produse alimentare; beci',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'dirijor',
        desc: 'Persoană care conduce o orchestră sau un cor',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'dirijor zâmbitor',
        desc: 'Persoană care conduce o orchestră sau un cor',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'dramă',
        desc: 'Operă dramatică în care tragicul se amestecă cu comicul',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'traducător',
        desc: 'Persoană care traduce (un text) dintr-o limbă în alta',
      },

      {
        difficulty: Difficulty.Hard,
        word: 'abordare',
        desc: 'Acțiunea de a aborda și rezultatul ei',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'paznic',
        desc: 'Cel care păzește; păzitor, strajă, gardian',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'lenin',
        desc: 'Vladimir Ilici Lenin - revoluționar rus',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'rambo',
        desc: 'Rambo este un film de acțiune american',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'soldat universal',
        desc: 'Militar într-o armată',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'profesor',
        desc: 'Persoană cu o pregătire specială într-un anumit domeniu de activitate și care predă o materie de învățământ',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'eu sunt cu cu',
        desc: 'Mental instabil',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'cadou',
        desc: 'Ceea ce se primește sau se oferă în dar.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'anul nou',
        desc: 'Ziua care marchează începerea următorului an calendaristic',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'buchet',
        desc: 'Mănunchi de flori aranjate (și legate) împreună',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'premiul oscar',
        desc: 'remiul Onorific Oscar este unul dintre premiile Oscar acordate de Academia de Film și Științe. A fost acordat prima dată în 1948.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'mos craciun',
        desc: 'Moș Crăciun este un personaj mitologic care împarte cadouri tuturor copiilor în noaptea de Crăciun',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'echipă prietenoasă',
        desc: 'Grup de oameni care, sub conducerea unui șef, îndeplinesc în același timp o muncă sau o acțiune comună',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'iphone',
        desc: 'Telefon mobil create de compania Apple.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'bucătar',
        desc: 'Bărbat care are meseria de a găti mâncare',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'Departamentul de Resurse Umane',
        desc: 'Ramură importantă a administrației de stat sau a unei instituții',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'logică',
        desc: 'Știință care se ocupă cu studiul formelor și legilor fundamentale ale gândirii.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'strategie',
        desc: 'Parte componentă a artei militare, care se ocupă cu problemele pregătirii, planificării și ducerii războiului și operațiilor militare.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'Contract pe termen lung',
        desc: 'Acord încheiat, ca urmare a înțelegerii intervenite între două sau mai multe persoane.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'femeie brigadier',
        desc: 'Persoană care face parte dintr-o brigadă',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'mic tractorist',
        desc: 'Persoană care conduce un tractor; mecanic de tractor',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'fictiune',
        desc: 'Reprezentare produsă de imaginația cuiva și care nu corespunde realității sau nu are corespondent în realitate: plăsmuire a imaginației',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'taekwondo',
        desc: 'Artă marțială coreeană, caracterizată în special prin lovituri înalte cu piciorul și lovituri cu pumnul. ',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'puskin',
        desc: 'Aleksandr Sergheevici Pușkin a fost un poet și dramaturg clasic rus din perioada romantică, considerat a fi cel mai mare poet rus și fondatorul literaturii ruse moderne.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'tunet',
        desc: 'Zgomot puternic care însoțește o descărcare electrică atmosferică',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'pisică leneșă',
        desc: 'Mamifer domestic carnivor din familia felinelor leneș',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'repreți ca un papagal',
        desc: ':)',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'portofel',
        desc: 'Obiect din piele, din material plastic etc., în forma unor coperte mici cu mai multe despărțituri interioare, în care se păstrează bani',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'radar',
        desc: 'Aparat care emite unde electromagnetice și apoi le recepționează, după ce au fost reflectate de un obiect, folosit pentru a detecta și a localiza un obiect prin măsurarea timpului trecut între emisia și recepția undelor.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'stoc',
        desc: 'Cantitate de bunuri (materii prime, materiale etc.) existente, la un moment dat, ca rezervă în depozitul unui magazin, al unei întreprinderi, într-o piață în vederea asigurării continuității producției sau a desfacerii.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'abonament',
        desc: 'Convenție prin care, în schimbul unei sume (plătite înainte), se obțin pe un timp limitat unele servicii, anumite publicații etc',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'salariu',
        desc: 'Sumă de bani pe care o primește o persoană pentru munca depusă într-o perioadă de timp',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'mită',
        desc: 'Sumă de bani sau obiecte date ori promise unei persoane, cu scopul de a o determina să-și încalce obligațiile de serviciu sau să le îndeplinească mai conștiincios',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'aristocrat',
        desc: 'Persoană care aparține aristocrației, nobil',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'umbrelă',
        desc: 'Obiect alcătuit dintr-o pânză care se poate strânge sau întinde (în forma unei calote sferice) prin intermediul unor spițe metalice fixate radial pe un baston, destinat să apere de ploaie sau de soare',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'vacanta lunga',
        desc: 'Perioadă de odihnă acordată elevilor și studenților la sfârșitul unui trimestru, semestru sau an de școală ori de studii. Concediu',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'legume',
        desc: 'Nume generic dat unor vegetale ',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'fructe',
        desc: 'Produs care apare și se dezvoltă din pistilul unei flori fecundate și care conține semințele.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'căpitan',
        desc: 'Grad de ofițer superior locotenentului și inferior maiorului; persoană care are acest grad.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'avalanşă',
        desc: 'Masă de zăpadă care se desprinde de pe coasta unui munte și se rostogolește la vale',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'ciocolată',
        desc: 'Preparat comestibil făcut dintr-un amestec solidificat de pulbere de cacao și de zahăr',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'zahar',
        desc: 'Substanță dulce alcătuită din zaharoză, obținută, de obicei, din sfecla de zahăr și din trestia de zahăr și folosită în alimentație.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'vampir',
        desc: 'Personaj imaginar despre care se credea că ar suge sângele celor vii',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'glonț',
        desc: 'Mic proiectil de oțel, de aramă sau de plumb, pentru unele arme de foc',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'uragan',
        desc: 'Vânt foarte puternic cu acțiune distrugătoare, însoțit adesea de ploi torențiale',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'dinte',
        desc: 'Fiecare dintre organele osoase mici, acoperite cu un strat de smalț, așezate în cavitatea bucală a majorității vertebratelor și servind de obicei pentru a rupe, a mesteca și a fărâmița alimentele',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'bătrân făcător de minuni',
        desc: 'Bătrân făcător de minuni',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'vânător',
        desc: 'Persoană care vânează, care practică vânătoarea',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'vagabond',
        desc: '(Om sau animal) care rătăcește fără rost pe drumuri, care hoinărește fără țintă; (om) fără ocupație stabilă, fără domiciliu fix',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'abandonat',
        desc: 'Acțiunea de a abandona; părăsire.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'abatere',
        desc: '1. Acțiunea de a (se) abate și rezultatul ei. Abatere de la regulă, excepție. Încălcare a unei dispoziții cu caracter administrativ sau disciplinar. ',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'aberativ',
        desc: 'Care este departe de adevăr, care ține de aberație',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'abonat',
        desc: '(Persoană) care beneficiază de un abonament. (Persoană) care vine în mod regulat undeva.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'aborigen',
        desc: 'Băștinaș, autohton, indigen.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'abracadabra',
        desc: 'Cuvânt cabalistic căruia obscurantiștii îi atribuiau puterea magică de a realiza un lucru supranatural. ',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'abrogare',
        desc: 'Anulare, desființare, infirmare, invalidare, suprimare.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'absenta',
        desc: 'A lipsi dintr-un loc (unde ar fi trebuit să se găsească), a nu fi de față.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'absorbant',
        desc: '(Substanță) care absoarbe lichide sau vapori. ♦ (Substanță) care reține o parte din particulele sau din energia radiată de o sursă. 2. Adj. Fig. Care interesează, care captivează; către care se îndreaptă toate preocupările cuiva.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'abstracție',
        desc: 'Rezultatul procesului de abstractizare (noțiune, concept, categorie)',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'aburit',
        desc: 'Acoperit cu aburi (1); care scoate, din care ies aburi',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'academician',
        desc: 'Membru (de onoare sau titular) al unei academii.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'accelerat',
        desc: 'Care este iuțit, grăbit; care are o frecvență mai mare decât cea normală.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'acciz',
        desc: 'Impozit indirect care se percepe în unele țări asupra unor obiecte de consum.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'accepta',
        desc: 'A fi de acord cu...; a primi, a consimți să...; a admite, a aproba, a încuviința.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'acreditat',
        desc: 'Împuternicit ca reprezentant diplomatic al unui stat pe lângă guvernul unui stat străin.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'actorie',
        desc: 'Profesiunea de actor',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'acvatic',
        desc: 'De apă, care trăiește în apă.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'ademenit',
        desc: 'Care este atras, ispitit, momit, sedus.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'adevăr',
        desc: ' De care nu se poate îndoi nimeni; netăgăduit, incontestabil, real.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'adidași',
        desc: 'încălțăminte comodă de sport.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'aeroplan',
        desc: 'Avion',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'afiș',
        desc: ' Înștiințare, de obicei imprimată, expusă public, prin care se anunță ceva, prin care se dau informații în legătură cu viața politică și culturală',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'afrodiziac',
        desc: '(Substanță) care stimulează impulsurile s*****e. ',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'afumat',
        desc: '1. Care a fost expus la fum în scopul conservării. 2. Înnegrit de fum. 3. (Despre mâncăruri) Cu gust neplăcut de fum.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'agendă',
        desc: 'Carnet cu foi ca de calendar, în care se notează lucrările care urmează să fie făcute la anumite date.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'agitație',
        desc: '1. Mișcare intensă încoace și încolo de oameni, de vehicule etc. 2. Stare de neliniște excesivă, de tulburare, de tensiune nervoasă',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'agora',
        desc: 'Piață publică în orașele Greciei antice, unde se aflau principalele instituții și unde se țineau adunările publice',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'agricultor',
        desc: 'Persoană care se ocupă cu agricultura',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'aisberg',
        desc: 'Bloc (mare) de gheață desprins din calotele glaciare polare, care plutește pe oceane spre zona caldă',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'alăptare',
        desc: 'Acțiunea de a alăpta',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'aleatoriu',
        desc: 'Care depinde de o împrejurare viitoare și nesigură, întâmplător',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'alternativă',
        desc: 'Posibilitate de a alege între două soluții, între două situații etc. care se exclud',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'aluziune',
        desc: 'Modu de a spune pe departe ceva ca să se înțeleagă alt-ceva',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'amabil',
        desc: 'Prietenos, binevoitor; politicos.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'amăgit',
        desc: 'Înșelat',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'ambiție',
        desc: 'Dorință arzătoare de a realiza ceva; dorință de glorie, de onoruri, de parvenire',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'amendament',
        desc: 'Îmbunătățire, modificare adusă unui proiect de act normativ sau de tratat.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'amibă',
        desc: ' Animal protozoar (microscopic), cu corpul lipsit de membrană, format dintr-o masă de protoplasmă, cu unul sau mai multe nuclee și care se mișcă cu ajutorul pseudopodelor',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'amintire',
        desc: 'Imagine păstrată în memorie, lucru amintit.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'amprentă',
        desc: 'Imagine a unui obiect întipărită prin presare pe o suprafață',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'anchetă',
        desc: 'Cercetare ordonată sau efectuată de o autoritate publică, pentru a clarifica împrejurările în care s-a produs un fapt și pentru a stabili răspunderile.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'anarhie',
        desc: 'Stare de dezorganizare, de dezordine, de haos într-o țară, într-o instituție etc.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'aparență',
        desc: 'Înfățișare exterioară (și adesea neconformă cu realitatea) a cuiva sau a ceva',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'apocalips',
        desc: 'Parte din Noul Testament în care este înfățișat în chip alegoric sfârșitul lumii; sfârșitul lumii în religia creștină.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'apolitic',
        desc: 'Adj. Care este în afara politicii, care nu se ocupă cu politica.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'apreciere',
        desc: 'Acțiunea de a aprecia și rezultatul ei.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'armă',
        desc: 'Obiect, unealtă, aparat, mașină care servește în lupta împotriva inamicului, la vânat, în unele probe sportive etc',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'audio',
        desc: 'Element prim de compunere savantă cu semnificația „(referitor la) auz”, „referitor la frecvențele sonore auzibile',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'august',
        desc: 'A opta lună a anului',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'academie',
        desc: 'Societate de învățați, de literați, de artiști etc. creată pentru dezvoltarea științelor și a artelor; înaltă instituție culturală care reunește pe cei mai de seamă savanți și artiști.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'acasă',
        desc: 'În sau spre casa în care locuiești',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'adălmaș',
        desc: 'Băutura, beția saŭ chefu care se obișnuĭește în popor după o vînzare orĭ o cumpărare însemnată orĭ după un cîștig orĭ un noroc',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'adânc',
        desc: 'Al cărui fund se află la o distanță (relativ) mare de marginea de sus, de suprafață; adâncit, afund, adâncat, adâncos.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'adhoc',
        desc: 'Anume pentru acest scop, de circumstanță.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'admirare',
        desc: 'A privi ceva sau pe cineva cu un sentiment de încântare, de stimă etc',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'agresor',
        desc: '(Persoană fizică sau stat) care organizează sau săvârșește o agresiune.',
      },
      {
        difficulty: Difficulty.Easy,
        word: 'alcoolic',
        desc: 'Persoană care consumă în mod abuziv băuturi alcoolice; bețiv',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'aleluia',
        desc: 'Exclamație care apare ca un refren de laudă în cântări bisericești.',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'alianță',
        desc: 'Înțelegere politică între două sau mai multe state, pe bază de tratat, prin care statele respective se obligă să acționeze în comun sau să se ajute în anumite împrejurări',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'antic',
        desc: 'Care a existat în trecutul îndepărtat sau datează de atunci',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'arogant',
        desc: 'Care se poartă cu aroganță; care arată, trădează aroganță.',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'asfalt',
        desc: 'Rocă sedimentară, brună-neagră, formată prin bituminizarea unor substanțe organice sau prin oxidarea și polimerizarea petrolului',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'accent',
        desc: 'Pronunțare mai intensă, pe un ton mai înalt etc. a unei silabe dintr-un cuvânt sau a unui cuvânt dintr-un grup sintactic',
      },
      {
        difficulty: Difficulty.Medium,
        word: 'activ',
        desc: 'Care participă (în mod efectiv) la o acțiune; harnic, vrednic',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'alerta',
        desc: 'A alarma, a preveni asupra unui pericol',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'analist',
        desc: 'Specialist în analiza matematică sau psihologică. ♦ Persoană cu aptitudini deosebite în cunoașterea, în analiza',
      },
      {
        difficulty: Difficulty.Hard,
        word: 'antibiotic',
        desc: ' (Substanță) care are un efect bacteriostatic asupra dezvoltării anumitor microbi.',
      },
    ],
  },
];
