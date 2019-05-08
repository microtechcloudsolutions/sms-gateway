const Agenda = require("agenda");
const monogDBConnStr = "mongodb://127.0.0.1:27017/agenda";

const agenda = new Agenda({db:{address:monogDBConnStr,useNewUrlParser: true}});


(async function(){
    await agenda._ready
    agenda.purge()
    agenda.start();
})()


module.exports = agenda;