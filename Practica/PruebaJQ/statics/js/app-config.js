function buscarJugador() {
    alert("SSSS");
};

App = {

init: function(){

    App.bindEvents();
},

elements: {

    buscarJugadorBtn: $(".buscar-jugador-btn-js"),
    jugadorTxt: $(".jugador-txt-js"),
},

bindEvents: function () {
    App.elements.buscarJugadorBtn.on("click", function(){

alert('El Jugador es : ' + App.elements.jugadorTxt.val());

    })
    // $(".buscar-jugador-btn-js").on("click", buscarJugador)
    
}


};