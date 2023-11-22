
function tocar(id) {
  var som = new Audio(`/sons/${id}.mp3`);
  var div = document.getElementById(id)
  som.onended = function() {
      div.classList.remove("escuro");
  };
  div.classList.add("escuro");
  som.play();
}