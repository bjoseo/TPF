const footer = document.getElementById('div-footer').innerHTML = `<div class="left_f footer-col ta-l ">
  <div class="footer-logo-container">
  <a href="/index.html" class="active">
  <lord-icon src="https://cdn.lordicon.com/vkweisbr.json" trigger="loop-on-hover" delay="2000"
    colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89"
    style="width:50px;height:50px">
 </lord-icon>
</a>
    <h3 class="text-mochileando">Mochileando</h3>
  </div>
  <p class="text-presentation">Somos la empresa de viajes líder en Latinoamérica que desde hace más de 4 años apuesta por el desarrollo tecnológico para revolucionar el mundo de las experiencias. </p>
  <p class='rights-text'>© 1999-2023 Mochileando. All right reserved.</p>
</div>
<div class="center_f footer-col ta-l">
  <h3>Siguenos en nuestras redes</h3>
  <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab icons-styles fa-twitter"> Twitter</i></a>
  <a href="https://www.facebook.com/" target="_blank"><i class="fab icons-styles fa-facebook"> Facebook</i></a>
  <a href="https://www.instagram.com/" target="_blank"><i class="fab icons-styles fa-instagram"> Instagram</i></a>
</div>
<div class="rigth_f footer-col ta-l">
  <h3>Mapa del sitio</h3>
  <a class="our-site" href="index.html">Home</a>
  <a class="our-site" href="/pages/login/login.html">Login</a>
  <a class="our-site" href="/pages/contacto/contacto.html">Contáctenos</a>
  <a class="our-site" href="/pages/acerca_de_nosotros/acerca_de_nosotros.html">Acerca de nosotros</a>
</div>`

let header = document.getElementById('div-header').innerHTML = `
<div class="navbar">
          <div class="topnav" id="myTopnav">
            <a href="/index.html" class="active">
              <lord-icon
                src="https://cdn.lordicon.com/vkweisbr.json"
                trigger="loop-on-hover"
                delay="2000"
                colors="outline:#121331,primary:#646e78,secondary:#2ca58d,tertiary:#1d4e89"
                style="width: 50px; height: 50px"
              >
              </lord-icon>
            </a>
            <a href="/pages/login/login.html">Login</a>
            <a href="/pages/contacto/contacto.html">Contáctenos</a>
            <a href="/pages/acerca_de_nosotros/acerca_de_nosotros.html"
              >Acerca de nosotros</a
            >
            <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
              <i class="fa fa-bars"></i>
            </a>

            <div class="usuario-box" id="usuario-container">
            <h2 id="usu-value" class="text-weather"></h2>
          </div>

            <div class="weather-box" id="weather-container">
              <div class="weather_1" id="weather-cont1">
                <h2 id="location" class="text-weather"></h2>
                <img
                  id="animated-icon"
                  src=""
                  alt=""
                  height="auto"
                  width="50px"
                />
                <h1 id="temp-value" class="text-weather"></h1>
                <h1 id="temp-description" class="text-weather"></h1>
              </div>
            </div>
          </div>
        </div>
        <div class="Carrousel">
        </div>`;

const myCards1 = [{
    city: 'Jujuy',
    country: 'ARG',
    urlImg: '/assets/locations-img/pumamarca.jpg',
    description: 'Ubicada al norte de Salta, se encuentra la Provincia de Jujuy. Esta región del país presenta montes, verdes planicies, ríos, lagunas de ensueño, con paisajes vistosos y climas agradables que hacen que el visitante pueda desarrollar actividades tales como trekking, turismo cultural y safaris fotográficos.',
  },
  {
    city: 'Roma',
    country: 'ITL',
    urlImg: '/assets/locations-img/roma.jpg',
    description: 'La capital italiana es un lugar con hermosos paisajes, pero aún más encantador por sus edificios, esculturas, pinturas, tesoros arqueológicos y las historias que cuentan. Es la única ciudad del mundo que tiene un país dentro de su territorio, que es el Vaticano.',
  },
  {
    city: 'Curaçao',
    country: 'CW',
    urlImg: '/assets/locations-img/Curaçao.jpg',
    description: 'Curaçao es una isla colonizada por los Países Bajos y uno de los maravillosos destinos del Caribe. El sitio está a solo 70 km de Venezuela y es parte del Reino de Holanda. El holandés es el idioma principal de la isla, pero aquí se habla inglés, español y principalmente papiamento.',
  }
]
const myCards2 = [{
    city: 'Miami',
    country: 'EU',
    urlImg: '/assets/locations-img/miami.jpg',
    description: 'Paseando por la ciudad te darás cuenta de que Miami es mucho más que un destino para ver de un vistazo. Es un lugar para quedarse, descansar y divertirse... y lo mejor es que la ciudad atrae a públicos completamente diferentes: familias con niños, jóvenes que buscan vida nocturna y gente mayor que quiere descansar.',
  },
  {
    city: 'Cancun',
    country: 'MX',
    urlImg: 'assets/locations-img/cancun.jpg',
    description: 'Cancún es uno de los destinos más famosos de México y uno de los más completos del Caribe, con opciones de ocio y descanso para todas las edades. Y no faltan razones para esto: hay innumerables opciones de entretenimiento, cultura y exageración, sin mencionar el maravilloso mar Caribe.',
  },
  {
    city: 'Barcelona',
    country: 'ESP',
    urlImg: '/assets/locations-img/barcelona.jpg',
    description: 'Barcelona, ​​la capital de la región española de Cataluña, es un destino turístico completo. Una ciudad donde la historia está viva, impresa en cada callejón de Ciutat Vella, y la belleza de edificios como la Sagrada Familia es impresionante.',
  },
  {
    city: 'Estanbul',
    country: 'TK',
    urlImg: '/assets/locations-img/Curaçao.jpg',
    description: 'Estambul es histórica, moderna, vibrante e interesante, y no podía ser de otra manera, ya que está influenciada por diferentes culturas y es la única ciudad del mundo que está presente en dos continentes: Europa y Asia. Una ciudad que existe desde el 667 a. C. y ha estado bajo dominio griego, romano y otomano',
  },
  {
    city: 'Islas Phi Phi',
    country: 'TH',
    urlImg: '/assets/locations-img/phi_phi.jpg',
    description: 'Aguas de un tono azul turquesa que solo hay que ver de cerca para creer, vida marina en abundancia, arena blanca, acantilados de piedra caliza y mucho verde alrededor completan el paradisíaco paisaje de Phi Phi, la famosa isla del sur de Tailandia, que sirvió de telón de fondo para la película "La Playa", con el actor Leonardo DiCaprio.',
  },
  {
    city: 'Taj Mahal',
    country: 'IND',
    urlImg: '/assets/locations-img/Taj_Mahal.jpg',
    description: 'El Taj Mahal es la principal atracción turística de la India y uno de los monumentos más importantes del mundo. Ubicado en la ciudad de Agra, fue votado como una de las Nuevas Siete Maravillas del Mundo Moderno y atrae visitantes durante todo el año. Visitar el Taj Mahal es lo más destacado de un viaje a la India.',
  }
]

function loadCards(array, id) {
  const section = document.getElementById(id);
  if (!section) {
    throw new Error(`Element with id "${id}" not found`);
  }
  section.innerHTML = '';
  const fragment = document.createDocumentFragment();
  array.forEach((card) => {
    const article = document.createElement('article');
    article.innerHTML = `
    <div class="article-wrapper">
      <figure>
        <img src=${card.urlImg} alt=${card.city}, ${card.country} />
      </figure>
      <div class="article-body">
        <h2>${card.city}, ${card.country}</h2>
        <p>
        ${card.description}
        </p>
        <a href="/pages/error_404/error_404.html" class="read-more">
          Descubra más 
          <svg xmlns="http://www.w3.org/2000/svg" class="icon" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clip-rule="evenodd" />
          </svg>
        </a>
      </div>
    </div>
  `;
    fragment.appendChild(article);
  });
  section.appendChild(fragment);
}

loadCards(myCards1, 'id-section-elegidos');
loadCards(myCards2, 'id-section-recomendaciones');
