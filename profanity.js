// ══════════════════════════════════════════════════════════════
//  profanity.js — Filtro de groserías v2
//  - 200+ palabras y frases
//  - Leet speak: v3rg4, p1t0, ch1ng4, put@
//  - Letras repetidas: veeeerga, puttto, chingaaa
//  - Separadores: v.e.r.g.a  v-e-r-g-a  v e r g a
//  - Abreviaturas: hdp, ctm, wtf, stfu
//  - Variantes regionales MX / AR / ES / CO / VE
// ══════════════════════════════════════════════════════════════

(function () {

  // ── 1. Tabla leet speak ──────────────────────────────────────
  const LEET = {
    '0':'o','1':'i','2':'z','3':'e','4':'a',
    '5':'s','6':'g','7':'t','8':'b','9':'g',
    '@':'a','$':'s','!':'i','+':'t','|':'i',
    '(':'c',')':'o','#':'h','%':'x','^':'a',
    'á':'a','é':'e','í':'i','ó':'o','ú':'u',
    'ä':'a','ë':'e','ï':'i','ö':'o','ü':'u',
    'à':'a','è':'e','ì':'i','ò':'o','ù':'u',
  };

  // ── 2. Normalizar texto ──────────────────────────────────────
  function normalize(str) {
    return str
      .toLowerCase()
      .split('').map(c => LEET[c] || c).join('')
      .replace(/(.)\1+/g, '$1')
      .replace(/[\s\-_.,*·•\/\\]+/g, '');
  }

  // ── 3. Lista maestra ─────────────────────────────────────────
  const PALABROTAS = [
    // MEXICANAS
    'verga','vergas','vergon','vergona','vergones','vergazo','vergazos','vergota',
    'pito','pitos','piton','pitote','pitazo',
    'pene','penes',
    'puta','putas','puto','putos','putita','putitas','putazo','putazos','putilla','puton','putona','putote',
    'pinche','pinches','pinchon','pinchona',
    'pendejo','pendeja','pendejos','pendejas','pendejada','pendejadas','pendejazo',
    'cabron','cabrona','cabrones','cabronas','cabronazo',
    'culero','culera','culeros','culeras','culerazo','culerito',
    'culo','culos','culon','culona','culonazo','culito',
    'chinga','chingas','chingada','chingadas','chingado','chingados',
    'chingadera','chingaderas','chinguen','chinguense','chingarse',
    'chingon','chingona','chingones','chingar','chingo',
    'mamada','mamadas','mamon','mamona','mamonas','mamonada','mamar','mamando',
    'mierda','mierdas','mierdero','mierdon','mierdona',
    'ojete','ojetes','ojeton','ojetona',
    'joto','jotos','jotito',
    'wey','guey','buey','huey','wei',
    'naco','naca','nacos','nacas','naquez','naquiza',
    'cono','conazo',
    'cagado','cagada','cagar','cagarse','cagadera','cagatero',
    'hdp','hijodeputa','hijadeputa','hdeputa',
    'hijo de puta','hija de puta','hijos de puta','hijas de puta',
    'vete a la chingada','vete a la verga','vete a la mierda',
    'te voy a chingar','te voy a madrear','chinga tu madre','chingue su madre','a la chingada',
    'putamadre','putisimo','putisima',
    'madrear','madrazo','madrazos','madriza',
    'te mato','te voy a matar','los mato',
    'chingate','chingatelo',
    'culiao','culiaos',
    'marica','maricas','maricon','mariconazo',
    'jodete','jodido','jodida','jodidos','jodidas',
    // ARGENTINAS
    'boludo','boluda','boludos','boludas','boludez','boludazo',
    'gil','giles','gilada',
    'forro','forra','forros','forras','forrazo',
    'pelotudo','pelotuda','pelotudos','pelotudas','pelotudez',
    'sorete','soretes','soretazo',
    'conchudo','conchuda','conchudos','conchudas',
    'ortiva','ortivas','ortivo','ortivos',
    'andate a la concha','concha de tu madre','conchadetumare',
    'la concha','la re concha','la puta que te pario','la puta madre',
    'garchar','garcha','garchando','garchada',
    // ESPAÑOLAS
    'gilipollas','gilipolla','gilipollez',
    'capullo','capullos','capulla',
    'hostia','hostias','hostiazo',
    'joder','jodido','jodida','jode',
    'follar','folla','follando','follada','folladas','follame',
    'me cago en','mecago',
    'cojones','cojon',
    'pollas','polla','pollazo',
    'subnormal','subnormales',
    'imbecil','imbeciles',
    'idiota','idiotas',
    'estupido','estupida','estupidos','estupidas',
    // COLOMBIANAS / VENEZOLANAS
    'gonorrea','gonorreas','gonorreoso',
    'malparido','malparida','malparidos','malparidas',
    'hijueputa','hijueputas','jueputa','jueputas','hp',
    'sapo','sapas','sapos',
    'ladilla','ladillas',
    'pajuo','pajua','pajuos',
    // ABREVIATURAS
    'hdp','ctm','stfu','kys','gtfo','fck','fuk','omfg','ffs',
    // INGLES
    'fuck','fucker','fuckers','fucking','fucked','fucks','fuckoff','fuckup',
    'shit','shits','shitty','bullshit',
    'bitch','bitches','son of a bitch',
    'asshole','assholes',
    'dick','dicks','dickhead','dickheads',
    'cunt','cunts',
    'bastard','bastards',
    'nigger','niggers',
    'faggot','faggots',
    'whore','whores',
    'slut','sluts',
    'motherfucker','motherfuckers',
    'cock','cocks','cocksucker',
    'pussy','pussies',
    // SEXUAL EXPLICITO
    'porno','pornos','pornografia','pornografico',
    'orgasmo','orgasmos',
    'eyacular','eyaculacion',
    'masturbacion','masturbar','masturbarse',
    'vagina','vaginas',
    'clitoris',
    'tetas','teta','tetona','tetonas','tetitas',
    'nalgas','nalga','nalgon','nalgona',
    'chichi','chichis',
    'panocha','panochas','panochon','panochona',
    'chocha','chochas','chochita',
    'pezon','pezones',
    'testiculo','testiculos',
    'pajero','pajera','pajeros','pajeras',
    'coito','coitos',
    // DISCRIMINATORIOS
    'negro de mierda','prieto de mierda','indio de mierda',
    'puto negro','puta negra',
    'mayate','mayates',
    'mongolo','mongola','mongolito',
    'mogolico','mogolica',
    'retrasado','retrasada','retrasados','retrasadas',
    'tarado','tarada','tarados','taradas',
    // AMENAZAS
    'te voy a violar','te voy a lastimar','te voy a hacer daño',
    'te parto','te parto la cara','te rompo',
    'muerto de hambre','andate a la mierda',
  ];

  const LISTA = [...new Set(PALABROTAS)];

  const SEP = '[\\s\\-_.,*·\\/\\\\]*';

  const COMPILED = LISTA.map(word => {
    const norm = normalize(word);
    // Cada caracter puede aparecer 1+ veces (cubre veeeerga → verga)
    // y puede tener separadores entre letras
    const patA = norm
      .split('')
      .map(c => {
        const vars = new Set([c.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')]);
        Object.entries(LEET).forEach(([k, v]) => {
          if (v === c) vars.add(k.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
        });
        const cls = vars.size === 1 ? [...vars][0] : `[${[...vars].join('')}]`;
        return `${cls}+`;   // + permite 1 o más repeticiones de ese char
      })
      .join(SEP);
    return { norm, reA: new RegExp(patA, 'gi') };
  });

  window.filterProfanity = function (text) {
    if (!window.profanityFilterOn) return text;
    if (!text) return text;
    const censor = m => m[0] + '*'.repeat(Math.max(m.length - 1, 2));
    let result = text;
    COMPILED.forEach(({ reA }) => {
      reA.lastIndex = 0;
      result = result.replace(reA, censor);
    });
    return result;
  };

})();
