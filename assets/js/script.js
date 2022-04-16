document.addEventListener('DOMContentLoaded', function() {
    var i = 0;
    function move() {
      if (i == 0) {
        i = 1;
        var elem = document.getElementById("progressbar");
        var info = document.getElementById("info");

        var width = 10;
        var id = setInterval(frame, 30);

        function frame() {
          if (width >= 100) {
            clearInterval( id) ;
            i = 0;
            info.innerHTML = "Desconto aplicado com sucesso!";
          } else {
            width++;
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
          }
        }
      }
    }

    move();

});