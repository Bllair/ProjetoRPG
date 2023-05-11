
const Entidade = require('./Entidades.js');
const Player = require('./Player.js');

const npc = new Entidade("roberval",1,100);
const player = new Player("Churiço",10,100,5,1,10);
npc.falar("Olá")
player.falar(" Tchau ")


