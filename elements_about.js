const footer = document.getElementById('div-footer').innerHTML = `<div class="left_f footer-col ta-l ">
  <div class="footer-logo-container">
    <script src="https://cdn.lordicon.com/ritcuqlt.js"></script>
    <lord-icon src="https://cdn.lordicon.com/vkweisbr.json" trigger="loop-on-hover" delay="2000"
      colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89" style="width:50px;height:50px">
    </lord-icon>
    <h3 class="text-mochileando">Mochileando</h3>
  </div>
  <p class="text-presentation">Somos la empresa de viajes líder en Latinoamérica que desde hace más de 4 años apuesta por el desarrollo tecnológico para revolucionar el mundo de las experiencias. </p>
  <p>© 1999-2023 Mochileando. All right reserved.</p>
</div>
<div class="center_f footer-col ta-l">
  <h3>Siguenos en nuestras redes</h3>
  <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab icons-styles fa-twitter"> Twitter</i></a>
  <a href="https://www.facebook.com/" target="_blank"><i class="fab icons-styles fa-facebook"> Facebook</i></a>
  <a href="https://www.instagram.com/" target="_blank"><i class="fab icons-styles fa-instagram"> Instagram</i></a>
</div>
<div class="rigth_f footer-col ta-l">
  <h3>Mapa del sitio</h3>
  <a class="our-site" href="/index.html">Home</a>
  <a class="our-site" href="/pages/suscribete.html">Suscribete</a>
  <a class="our-site" href="/pages/contacto.html">Contáctenos</a>
  <a class="our-site" href="../pages/acerca_de_nosotros.html">Acerca de nosotros</a>
</div>`

let header = document.getElementById('div-header').innerHTML = `
<div class="navbar">
  <div class="topnav-us" id="myTopnav">

    <a href="/index.html" class="active">
      <lord-icon src="https://cdn.lordicon.com/vkweisbr.json" trigger="loop-on-hover" delay="2000"
        colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89"
        style="width:50px;height:50px">
     </lord-icon>
   </a>
    <a href="/pages/suscribete.html">Suscribete</a>
    <a href="/pages/contacto.html">Contáctenos</a>
    <a href="/pages/acerca_de_nosotros.html">Acerca de nosotros</a>
    <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
    <i class="fa fa-bars"></i>
    </a>
  </div>
</div>`;
