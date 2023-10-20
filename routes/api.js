let __path = process.cwd()

const fs = require('fs');
const express = require('express');
const fetch = require('node-fetch');
const path = require('path');
const axios = require("axios");
const cheerio = require("cheerio");
const router  = express.Router();
const { fetchJson } = require(__path + '/lib/fetcher.js')
const request = require("request");

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///LISTA DAS APIKEYS PREMIUM
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
const keyprem = [

"JG", //Permanente
"JG-01" // 3 MÊS - ( 01/09/2023 )

];

async function getBuffer(url) {
he = await fetch(url).then(c => c.buffer())
 return he
}
async function Kibar(url) {
he = await fetch(url).then(c => c.json())
 return he
}
function MathRandom(nans) {
he = nans[Math.floor(Math.random() * nans.length)]
 return he
}

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///CHECAR PLANOS
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/checarplano', async(req, res, next) => {
const apikey = req.query.apikey;
if(!apikey) return res.json(resposta.semkey)
if(keyprem.includes(apikey)) {
res.json({
  status: 'Plano: ATIVO',
})
} else {
res.json(resposta.semkey)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PAGINAS DOS FILMES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/pags', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/filmes/${s}.html`)
} catch {
res.json(a)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PLAYERS DOS FILMES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/plays', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/filmes/players/${s}.html`)
} catch {
res.json(a)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PAGINAS DAS SERIES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/pags-series', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/series/${s}.html`)
} catch {
res.json(a)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PLAYERS DAS SERIES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/plays-series', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/series/players/${s}.html`)
} catch {
res.json(a)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PAGINAS DOS ANIMES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/pags-animes', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/animes/${s}.html`)
} catch {
res.json(a)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PLAYERS DOS ANIMES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/plays-animes', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/animes/players/${s}.html`)
} catch {
res.json(a)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PAGINAS DOS ANIMES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/pags-series', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/series/${s}.html`)
} catch {
res.json(a)
}
})

///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
///PLAYERS DOS ANIMES
///⊰᯽⊱═══❖•ೋ° △ °ೋ•❖═══⊰᯽⊰\\\
router.get('/plays-series', async(req, res, next) => {
s = req.query.s
try {
res.sendFile(__path + `/views/series/players/${s}.html`)
} catch {
res.json(a)
}
})

//─────────ೋღ 🌺 ღೋ─────────

router.get('/comedia', async(req, res, next) => {
res.sendFile(__path + `/views/abas/comedia.html`)
})

router.get('/android', async(req, res, next) => {
res.sendFile(__path + `/views/abas/android.html`)
})
router.get('/animes', async(req, res, next) => {
res.sendFile(__path + `/views/abas/animes.html`)
})
router.get('/series', async(req, res, next) => {
res.sendFile(__path + `/views/abas/series.html`)
})
router.get('/categorias', async(req, res, next) => {
res.sendFile(__path + `/views/abas/categorias-filmes.html`)
})
router.get('/animacao', async(req, res, next) => {
res.sendFile(__path + `/views/abas/animacao.html`)
})

//─────────ೋღ 🌺 ღೋ─────────

module.exports = router
