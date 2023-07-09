const { createApp } = Vue;

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    /* El código define una instancia de la aplicación Vue. Aquí se especifican los datos 
    utilizados por la aplicación, incluyendo la lista de usuarios, la URL del backend, 
    indicadores de error y carga, así como los atributos para almacenar los valores del 
    formulario de usuario.
     */

    return {
      usuarios: [], // Almacena los usuarios obtenidos del backend
      //url: "http://localhost:5000/usuarios", // URL local
      url: "https://jose14056411.pythonanywhere.com/usuarios", // URL del backend donde se encuentran los usuarios
      error: false,
      cargando: true,
      // Atributos para el almacenar los valores del formulario
      mail: "",
      nombre: "",
      password: "",
    };
  },
  methods: {
    fetchData(url) {
      /**El método fetchData realiza una solicitud HTTP utilizando la función fetch a la URL
       * especificada. Luego, los datos de respuesta se convierten en formato JSON y se
       * asignan al arreglo usuarios. Además, se actualiza la variable cargando para indicar
       * que la carga de usuarios ha finalizado. En caso de producirse un error, se muestra
       * en la consola y se establece la variable error en true.
       *
       */
      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los usuarios obtenidos al arreglo 'usuarios'
          this.usuarios = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    eliminar(usuario) {
      /* El método eliminar toma un parámetro usuario y construye la URL para eliminar ese 
      usuario en particular. Luego, realiza una solicitud fetch utilizando el método 
      HTTP DELETE a la URL especificada. Después de eliminar el usuario, la página se 
      recarga para reflejar los cambios.
       */
      // Construye la URL para eliminar el usuario especificado
      console.log(usuario);
      const url = this.url + "/" + usuario;
      var options = {
        method: "DELETE", // Establece el método HTTP como DELETE
      };
      fetch(url, options)
        .then((res) => res.text()) // Convierte la respuesta en texto (or res.json())
        .then((res) => {
          location.reload(); // Recarga la página actual después de eliminar el usuario
        });
    },

    getUsuario() {
      // Construye la URL para recuperar el usuario especificado
      var usuario = document.getElementsByName("mail")[0].value;
      const url = this.url + "/" + usuario;
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          const Usu = data.nombre;
          sessionStorage.setItem("usu", JSON.stringify(Usu));
        })
        .then(function () {
          window.location.href = "/index.html"; // Redirigir a la página de inicio
        })

        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    grabar() {
      /* El método grabar se encarga de guardar los datos de un nuevo usuario en el servidor. 
      Primero, se crea un objeto usuario con los datos ingresados en el formulario. Luego, 
      se configuran las opciones para la solicitud fetch, incluyendo el cuerpo de la solicitud 
      como una cadena JSON, el método HTTP como POST y el encabezado Content-Type como 
      application/json. Después, se realiza la solicitud fetch a la URL especificada 
      utilizando las opciones establecidas. Si la operación se realiza con éxito, se muestra 
      un mensaje de éxito y se redirige al usuario a la página de usuarios. Si ocurre 
      algún error, se muestra un mensaje de error.
       */
      // Crear un objeto 'usuario' con los datos del formulario
      let usuario = {
        mail: this.mail,
        nombre: this.nombre,
        password: this.password,
      };

      // Configurar las opciones para la solicitud fetch
      var options = {
        body: JSON.stringify(usuario), // Convertir el objeto a una cadena JSON
        method: "POST", // Establecer el método HTTP como POST
        headers: { "Content-Type": "application/json" },
        redirect: "follow",
      };

      // Realizar una solicitud fetch para guardar el usuario en el servidor
      fetch(this.url, options)
        .then(function () {
          alert("Registro grabado!");
          window.location.href = "./login.html"; // Redirigir a la página de login
        })
        .catch((err) => {
          console.error(err);
          alert("Error al Grabar.");
        });
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount("#app");

function obtenerValor() {
  var y = document.getElementsByName("mail")[0].value;
  document.getElementById("demo2").innerHTML = y;
  alert("Stop getUsuario tres");
}
