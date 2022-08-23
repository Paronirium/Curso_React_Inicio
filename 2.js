// react ejemplo basico 1. por Paronirium. 23/08/22
// Archivo js enlazado a html mediante script scr
// Las siguientes librerías son necesarias para el desarrollo:
{
  /* <script
    src="https://unpkg.com/react/umd/react.development.js"
    crossorigin
  ></script>
  <script
    src="https://unpkg.com/react-dom/umd/react-dom.development.js"
    crossorigin
  ></script>
  <script src="https://unpkg.com/babel-standalone@6/babel.min.js"></script> 

  ojo!!!!!!!!!!
El presente script de invocación debe incluir en la etiqueta : type= "text/babel*/
}

//Se vinculan las ids de los elementos reactivos
const $app = document.querySelector("#app");
const contenedor = document.getElementById("root");

// Se vincula la orden de la librería que activa react cuando se requiere
const root = ReactDOM.createRoot(contenedor);
// Se vincula la orden de la librería que activa los estados
const useState = React.useState;
//Función que va a ejecutar el renderizado de elementos. La función debe de nombrarse en Pascal Case.
//Esta función contiene como argumentos Props

const Avatar = ({ id, name, size }) => {
  //Vinculación deconstructora que llama de dos formas al estado
  const [activado, desactivado] = useState(true);
  //Vinculaciones de propiedades a props
  const src = `https://randomuser.me/api/portraits/men/${id}.jpg`;

  //Gestión de cambio de clases y de estilos asociados
  let picclassName = "";
  if (size === "pequeño") {
    picclassName = "es-pequeño";
  } else if (size === "grande") {
    picclassName = "es-grande";
  }
  //Ternaria cambia clases según estados
  const imgclassName = activado ? "" : "disabled";
  return (
    //Elementos a renderizar en el HTML
    <picture className={picclassName}>
      {/* Ternaria que gestiona cambios dependiendo de los estados activos */}
      {id ? (
        <img
          onClick={() => {
            desactivado(!activado);
          }}
          src={src}
          className={imgclassName}
        />
      ) : (
        <img src="https://st.depositphotos.com/1034986/2740/i/600/depositphotos_27402497-stock-photo-funny-bearded-man-with-golden.jpg" />
      )}
      <strong>{activado ? name : "se fue a tomar por el culo"}</strong>
    </picture>
  );
};
//   Función que llama al renderizado de elementos según las props establecidas
root.render(
  <div>
    {/* Estos estados pueden variarse de forma manual o dinámica mediante nuevas vinculaciones */}
    <Avatar id={24} name={"Hijo Puta"} size={"grande"} />
    <Avatar name={"Malnacido"} />
    <Avatar id={18} name={"Soplapollas"} />
  </div>
);
