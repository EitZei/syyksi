/* ============================================================
   SYYTTÄJÄN TYÖPÖYTÄ — data.js
   Shared case data across all views.
   ============================================================ */

var CASES = [
  {
    id: 'R242847',
    diaarinumero: 'R 24/2847',
    kuvaus: 'Petos ja väärennys (Virtanen ym.)',
    status: 'syyteharkinnassa',
    statusLabel: 'Syyteharkinnassa',
    tuomioistuin: 'Helsingin KO',
    saapunut: '3.4.2024',
    maaraaika: '15.7.2025',
    maараikaUrgent: true,
    esitutkinta: '7100/R/3421/24',
    valmiusaste: 68,
    tags: ['Törkeä petos', 'Väärennys'],

    vastaajat: [
      { nimi: 'Virtanen, Markku Aleksi',  hetu: '150380-1234', ika: '45 v', syytekohdat: [1, 2] },
      { nimi: 'Korhonen, Sirpa Tuulikki', hetu: '220685-5678', ika: '40 v', syytekohdat: [1] },
      { nimi: 'Nieminen, Aleksi Juhani',  hetu: '120708A5555', ika: '16 v', syytekohdat: [2, 3] },
    ],
    asianomistajat: [
      { nimi: 'Järvinen, Paavo',  hetu: '260170-2222', ika: '55 v' },
      { nimi: 'Heikkinen, Leena', hetu: '150882-3333', ika: '42 v' },
      { nimi: 'Leinonen, Mats',   hetu: '010390-4444', ika: '35 v' },
    ],
    todistajat: [
      { nimi: 'Mäkinen, Esko',   rooli: 'Kirjanpitäjä' },
      { nimi: 'Saarinen, Jukka', rooli: 'Asiantuntijatodistaja' },
    ],

    charges: [
      {
        id: 'c1', num: 1, nimike: 'Törkeä petos', aika: '1.1.2023–31.12.2023', paikka: 'Helsinki',
        teonkuvaus: 'Virtanen on tekoaikana 1.1.2023–31.12.2023 Helsingissä, toimiessaan XYZ Capital Oy:n toimitusjohtajana, hankkiakseen itselleen oikeudetonta taloudellista hyötyä erehdyttänyt asianomistajia Järvistä, Heikkistä ja Leinosta esittämällä totuudenvastaisia tietoja yhtiön taloudellisesta tilanteesta ja sijoitustuotoista. Virtanen on väittänyt yhtiön hallinnoivan sijoitusvarallisuutta noin 12 miljoonan euron arvosta ja luvannut 15 prosentin vuotuisen tuoton, vaikka todellisuudessa sijoituksia ei ole tehty ja varallisuus on käytetty Virtasen henkilökohtaisiin menoihin ja aiempien sijoittajien maksuihin.\n\nPetollisilla vakuutuksillaan Virtanen on saanut asianomistajat luovuttamaan varallisuuttaan yhtiölle yhteensä 850 000 euron arvosta. Teko on tehty erityisen suunnitelmallisesti käyttämällä valehenkilöllisyyksiä ja väärennettyä asiakirja-aineistoa ja petos on kohdistunut useisiin asianomistajiin sekä kokonaisuutena arvioiden erityisen arvokkaaseen omaisuuteen.',
        riidattomat: 'Virtanen on myöntänyt toimineensa XYZ Capital Oy:n toimitusjohtajana tekoaikana. Virtanen on myöntänyt vastaanottaneensa asianomistajilta yhteensä 850 000 euroa. Virtanen ei ole kiistänyt, ettei sijoitustoimintaa ole harjoitettu esitetyssä laajuudessa.',
        kirjallinenTodistelu: [
          { teksti: 'XYZ Capital Oy:n kirjanpitodokumentit 1.1.2023–31.12.2023', teema: 'Sijoitustoimintaa ei harjoitettu väitetyssä laajuudessa' },
          { teksti: 'Sähköpostikirjeenvaihto Virtasen ja asianomistajien välillä 15.1.–18.3.2023', teema: 'Asianomistajia erehdytettiin petollisilla sijoitusvakuutuksilla' },
          { teksti: 'XYZ Capital Oy:n sijoitusesite "Growth Fund 2024" (väärennetty)', teema: 'Asianomistajille esitetyt tiedot olivat totuudenvastaisia' },
          { teksti: 'Pankkitiliotteet, tili FI12 3456 7890 (Virtanen, tammi–joulukuu 2023)', teema: 'Virtanen vastaanotti 850 000 euroa asianomistajilta' },
          { teksti: 'Kaupparekisteriote XYZ Capital Oy, 14.1.2024', teema: 'Virtanen toimi yhtiön toimitusjohtajana ja käytti siinä määräysvaltaa' },
        ],
        henkilotodistelu: [
          { teksti: 'Asianomistaja Paavo Järvinen', teema: 'Sai petolliset sijoituslupaukset ja luovutti varoja yhtiölle' },
          { teksti: 'Asianomistaja Leena Heikkinen', teema: 'Sai petolliset sijoituslupaukset ja luovutti varoja yhtiölle' },
          { teksti: 'Asianomistaja Mats Leinonen', teema: 'Sai petolliset sijoituslupaukset ja luovutti varoja yhtiölle' },
          { teksti: 'Asiantuntijatodistaja Esko Mäkinen, tilintarkastaja', teema: 'Sijoitustoiminnan puuttuminen ja varojen ohjautuminen' },
        ],
      },
      {
        id: 'c2', num: 2, nimike: 'Väärennys', aika: '15.3.2023', paikka: 'Helsinki',
        teonkuvaus: 'Virtanen ja Nieminen ovat yhdessä 15.3.2023 Helsingissä väärentäneet XYZ Capital Oy:n sijoitusesitteen "Growth Fund 2024" lisäämällä siihen totuudenvastaisia tietoja yhtiön hallinnoiman varallisuuden määrästä ja sijoitustoiminnan tuloksista. Nieminen on teknisesti toteuttanut väärentämisen muokkaamalla alkuperäistä asiakirjaa Virtasen ohjeiden mukaisesti. Väärennettyä asiakirjaa on käytetty petollisessa menettelyssä asianomistajien erehdyttämiseen.',
        riidattomat: 'Virtanen ja Nieminen ovat myöntäneet muokanneensa sijoitusesitettä. Asiakirja on tunnistettu väärennetyksi asiantuntijatutkimuksessa.',
        kirjallinenTodistelu: [
          { teksti: 'Alkuperäinen sijoitusesite "Growth Fund 2024" (aito versio)', teema: 'Väärennetyn version poikkeamat ovat näkyvissä vertailussa' },
          { teksti: 'Väärennetty sijoitusesite "Growth Fund 2024"', teema: 'Asiakirja sisältää totuudenvastaisia tietoja varallisuuden määrästä ja tuotoista' },
          { teksti: 'Digitaalinen forensiikkaraportti, Forensics Finland Oy 22.4.2024', teema: 'Nieminen suoritti muokkauksen Virtasen ohjauksessa' },
        ],
        henkilotodistelu: [
          { teksti: 'Asiantuntijatodistaja Jukka Saarinen, digitaalinen forensiikka', teema: 'Asiakirjan muokkaushistoria, ajankohta ja tekijä ovat selvitettävissä' },
        ],
      },
      {
        id: 'c3', num: 3, nimike: 'Laiton uhkaus', aika: '4.11.2023', paikka: 'Espoo',
        teonkuvaus: 'Nieminen on 4.11.2023 Espoossa uhannut asianomistaja Laine Tuomasta aiheuttaa tälle vakavaa vahinkoa, jos tämä ilmoittaa sijoituspetoksesta viranomaisille.',
        riidattomat: '',
        kirjallinenTodistelu: [],
        henkilotodistelu: [],
      },
    ],
    vaatimukset: [
      { id: 'v1a', charge: 'c1', vastaaja: 'Virtanen, Markku Aleksi',  hetu: '150380-1234 · 45 v' },
      { id: 'v1b', charge: 'c1', vastaaja: 'Korhonen, Sirpa Tuulikki', hetu: '220685-5678 · 40 v' },
      { id: 'v2a', charge: 'c2', vastaaja: 'Virtanen, Markku Aleksi',  hetu: '150380-1234 · 45 v' },
      { id: 'v2b', charge: 'c2', vastaaja: 'Nieminen, Aleksi Juhani',  hetu: '120708A5555 · 16 v' },
      { id: 'v3a', charge: 'c3', vastaaja: 'Nieminen, Aleksi Juhani',  hetu: '120708A5555 · 16 v' },
    ],

    huomiot: 3,
    huomiotItems: [
      { id: 'h1', teksti: 'Haastehakemus toimittamatta käräjäoikeuteen – tarkista toimitusmääräaika' },
      { id: 'h2', teksti: 'Korhosen puolustusasianajaja vaihtunut – päivitä yhteystiedot ja varmista tiedoksianto' },
      { id: 'h3', teksti: 'Korvausvaatimusten loppusumma (850 000 €) tarkistamatta ennen haastehakemuksen allekirjoitusta' },
    ],

    shBuckets: [
      { id: 'b1', type: 'hh', label: 'Haastehakemus 1' },
    ],
    shAssign: { v1a: 'b1', v1b: 'b1', v2a: 'b1', v2b: 'b1', v3a: 'b1' },

    yksityisoikeudellisetVaatimukset: [
      { otsikko: 'Korvausvaatimus – Järvinen', teksti: 'Asianomistaja Paavo Järvinen vaatii vastaaja Markku Aleksi Virtaselta vahingonkorvauksena <strong>200 000 euroa</strong> korkolain 4 §:n 1 momentin mukaisine korkoineen 15.1.2024 lukien.\n\nVaatimus perustuu rikoslain 36 luvun 2 §:n nojalla tehdyn törkeän petoksen aiheuttamaan taloudelliseen vahinkoon.' },
      { otsikko: 'Korvausvaatimus – Heikkinen', teksti: 'Asianomistaja Leena Heikkinen vaatii vastaaja Markku Aleksi Virtaselta vahingonkorvauksena <strong>350 000 euroa</strong> korkolain 4 §:n 1 momentin mukaisine korkoineen 22.1.2024 lukien.' },
      { otsikko: 'Korvausvaatimus – Leinonen', teksti: 'Asianomistaja Mats Leinonen vaatii vastaaja Markku Aleksi Virtaselta vahingonkorvauksena <strong>300 000 euroa</strong> korkolain 4 §:n 1 momentin mukaisine korkoineen 8.2.2024 lukien.' },
    ],

    lisatiedot: [
      { otsikko: 'Oikeuspaikkaa koskeva kannanotto', teksti: 'Asia kuuluu Helsingin käräjäoikeuden toimivaltaan, koska teot on tehty pääosin Helsingissä ja pääosa asianomistajista asuu Helsingissä.' },
      { otsikko: 'Seuraamuskannanotto', teksti: 'Syyttäjä vaatii Virtaselle ehdotonta vankeusrangaistusta rikoksen vakavuuden, suunnitelmallisuuden ja aiheutetun kokonaisvahingon (850 000 euroa) perusteella. Korhosen osalta syyttäjä vaatii ehdollista vankeusrangaistusta ottaen huomioon hänen avustajan roolensa ja nuorempi rikoshistoriansa.' },
      { otsikko: 'Muut lisätiedot', teksti: '', suljettu: true },
    ],
  },

  {
    id: 'R243891',
    diaarinumero: 'R 24/3891',
    kuvaus: 'Törkeä pahoinpitely (Heikkinen)',
    status: 'jaettu',
    statusLabel: 'Jaettu',
    tuomioistuin: 'Helsingin KO',
    saapunut: '12.6.2025',
    maaraaika: '28.7.2025',
    maараikaUrgent: false,
    esitutkinta: '7100/R/4521/25',
    valmiusaste: 0,
    tags: ['Törkeä pahoinpitely', 'Laiton uhkaus'],

    vastaajat: [
      { nimi: 'Heikkinen, Jari Petteri', hetu: '880412-3456', ika: '37 v', syytekohdat: [1, 2] },
    ],
    asianomistajat: [
      { nimi: 'Laine, Tuomas', hetu: '910305-7890', ika: '34 v' },
    ],
    todistajat: [
      { nimi: 'Mäkinen, Reetta', rooli: 'Silminnäkijä' },
    ],

    charges: [
      { id: 'c1', num: 1, nimike: 'Törkeä pahoinpitely', aika: '14.5.2025', paikka: 'Helsinki' },
      { id: 'c2', num: 2, nimike: 'Laiton uhkaus',       aika: '14.5.2025', paikka: 'Helsinki' },
    ],
    vaatimukset: [
      { id: 'v1a', charge: 'c1', vastaaja: 'Heikkinen, Jari Petteri', hetu: '880412-3456 · 37 v' },
      { id: 'v2a', charge: 'c2', vastaaja: 'Heikkinen, Jari Petteri', hetu: '880412-3456 · 37 v' },
    ],

    huomiot: 0,

    shBuckets: [],
    shAssign:  {},
  },

  {
    id: 'R241019',
    diaarinumero: 'R 24/1019',
    kuvaus: 'Kavallus (Saarinen)',
    status: 'vastaanotettu',
    statusLabel: 'Vastaanotettu',
    tuomioistuin: 'Helsingin KO',
    saapunut: '8.5.2024',
    maaraaika: '4.8.2025',
    maараikaUrgent: false,
    esitutkinta: '7100/R/2918/24',
    valmiusaste: 15,
    tags: ['Kavallus'],
    vastaajat: [
      { nimi: 'Saarinen, Kimmo Juhani', hetu: '770614-9012', ika: '48 v', syytekohdat: [1] },
    ],
    asianomistajat: [],
    todistajat: [],
    charges: [
      { id: 'c1', num: 1, nimike: 'Kavallus', aika: '1.6.2022–30.9.2023', paikka: 'Vantaa' },
    ],
    vaatimukset: [
      { id: 'v1a', charge: 'c1', vastaaja: 'Saarinen, Kimmo Juhani', hetu: '770614-9012 · 48 v' },
    ],
    huomiot: 1,
    huomiotItems: [
      { id: 'h1', teksti: 'Kirjanpitotarkastus kesken – esitutkinta odottaa lisätuloksia ennen syyteharkintaa' },
    ],

    shBuckets: [],
    shAssign:  {},
  },

  {
    id: 'R241102',
    diaarinumero: 'R 24/1102',
    kuvaus: 'Huumausainerikos (Nieminen, Korhonen)',
    status: 'odottaa',
    statusLabel: 'Odottaa',
    tuomioistuin: 'Helsingin KO',
    saapunut: '15.3.2024',
    maaraaika: null,
    maараikaUrgent: false,
    esitutkinta: '7100/R/1847/24',
    valmiusaste: 0,
    tags: ['Huumausainerikos'],
    vastaajat: [
      { nimi: 'Nieminen, Aleksi Juhani',  hetu: '120708A5555', ika: '16 v', syytekohdat: [1] },
      { nimi: 'Korhonen, Sirpa Tuulikki', hetu: '220685-5678', ika: '40 v', syytekohdat: [1] },
    ],
    asianomistajat: [],
    todistajat: [],
    charges: [
      { id: 'c1', num: 1, nimike: 'Huumausainerikos', aika: '2023–2024', paikka: 'Helsinki' },
    ],
    vaatimukset: [
      { id: 'v1a', charge: 'c1', vastaaja: 'Nieminen, Aleksi Juhani',  hetu: '120708A5555 · 16 v' },
      { id: 'v1b', charge: 'c1', vastaaja: 'Korhonen, Sirpa Tuulikki', hetu: '220685-5678 · 40 v' },
    ],
    huomiot: 2,
    huomiotItems: [
      { id: 'h1', teksti: 'Nieminen on alaikäinen (16 v) – varmista nuorisorikosprosessin erityisvaatimukset' },
      { id: 'h2', teksti: 'Esitutkintapöytäkirja toimittamatta – pyydä poliisilta viipymättä' },
    ],

    shBuckets: [],
    shAssign:  {},
  },

  {
    id: 'R235241',
    diaarinumero: 'R 23/5241',
    kuvaus: 'Törkeä rattijuopumus (Mäkinen)',
    status: 'oikeudessa',
    statusLabel: 'Oikeudessa',
    tuomioistuin: 'Helsingin KO',
    saapunut: '2.2.2024',
    maaraaika: null,
    maараikaUrgent: false,
    esitutkinta: '7100/R/0314/24',
    valmiusaste: 100,
    tags: ['Törkeä rattijuopumus'],
    vastaajat: [
      { nimi: 'Mäkinen, Timo Antero', hetu: '650923-1234', ika: '60 v', syytekohdat: [1] },
    ],
    asianomistajat: [],
    todistajat: [],
    charges: [
      { id: 'c1', num: 1, nimike: 'Törkeä rattijuopumus', aika: '3.1.2024', paikka: 'Espoo' },
    ],
    vaatimukset: [
      { id: 'v1a', charge: 'c1', vastaaja: 'Mäkinen, Timo Antero', hetu: '650923-1234 · 60 v' },
    ],
    huomiot: 0,

    shBuckets: [{ id: 'b1', type: 'hh', label: 'Haastehakemus 1' }],
    shAssign:  { v1a: 'b1' },
  },
];

function getCaseById(id) {
  return CASES.find(function(c) { return c.id === id; }) || CASES[0];
}

function getCaseIdFromUrl() {
  var hash = window.location.hash.replace('#', '');
  return hash || CASES[0].id;
}
