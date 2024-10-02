import { Injectable } from '@angular/core';
import { Ivacacion } from '../../vacacion';

@Injectable({
  providedIn: 'root'
})
export class DatosVacacionService {

  viajes = [
    {
      viaje: "Escapada a París",
      fecha: "15/04/2023",
      imagen: "https://cdn.pixabay.com/photo/2019/11/08/11/32/france-4611143_1280.jpg",
      descripcion: "Un viaje a la ciudad del amor, donde cada rincón cuenta una historia.",
      detalle: "París, la ciudad de las luces, siempre ha sido un destino soñado para los enamorados. En este viaje, paseamos por el emblemático Sena, donde los puentes son testigos de romances eternos. Visitamos el Louvre, donde nos perdimos entre las obras maestras, y luego disfrutamos de un café en Montmartre, observando a los artistas que capturan la esencia de la ciudad. Cada calle tiene su magia, y al caer la noche, la Torre Eiffel iluminada se convirtió en un símbolo de nuestro amor por la aventura. La gastronomía francesa nos deleitó con cada bocado, desde croissants frescos hasta macarons de colores. Volver a casa fue difícil, pero nos llevamos el corazón lleno de recuerdos inolvidables."
    },
    {
      viaje: "Safari en Kenia",
      fecha: "22/06/2023",
      imagen: "https://cdn.pixabay.com/photo/2013/05/17/07/12/elephant-111695_1280.jpg",
      descripcion: "Una aventura salvaje en la vasta sabana africana, rodeados de majestuosos animales.",
      detalle: "El safari en Kenia es una experiencia que transforma el alma. Desde el momento en que llegamos, el aroma a tierra húmeda y vegetación nos envolvió. Al amanecer, subimos a un jeep y nos adentramos en la Reserva Masai Mara, donde la vida silvestre se despliega ante nuestros ojos. Nos encontramos cara a cara con leones, jirafas y manadas de elefantes que recorren la llanura. El guía compartía historias sobre la vida de los Maasai, dándonos una perspectiva más profunda sobre la conexión entre los humanos y la naturaleza. Cada día fue una lección de respeto y asombro, con noches bajo un cielo estrellado, donde las estrellas parecen contarnos los secretos del universo. Este viaje no solo nos mostró la belleza de la fauna, sino también la necesidad de conservarla para las futuras generaciones."
    },
    {
      viaje: "Cruzando los Andes",
      fecha: "05/09/2023",
      imagen: "https://cdn.pixabay.com/photo/2020/09/17/12/44/landscape-5579077_1280.jpg",
      descripcion: "Un recorrido impresionante por montañas majestuosas y paisajes deslumbrantes.",
      detalle: "Cruzamos los Andes y entramos en un mundo donde la naturaleza se muestra en su forma más pura. Desde Santiago, tomamos un autobús hacia el sur, y a medida que ascendíamos, la vista se volvía más espectacular. Los picos nevados parecían tocar el cielo, y los glaciares brillaban a la luz del sol. Hicimos paradas en pequeños pueblos, donde la gente nos recibió con sonrisas y platos típicos, compartiendo historias de su vida en la montaña. La conexión con la cultura local fue profunda, y en cada conversación aprendimos más sobre sus tradiciones. La experiencia culminó en el Parque Nacional Torres del Paine, donde realizamos senderismo rodeados de lagos azules y torres imponentes. La sensación de libertad era indescriptible, y cada paso que dábamos nos acercaba más a la esencia de la naturaleza."
    },
    {
      viaje: "Relajación en Bali",
      fecha: "30/11/2023",
      imagen: "https://cdn.pixabay.com/photo/2022/05/14/12/04/temple-7195520_1280.jpg",
      descripcion: "Un paraíso tropical donde la paz y la belleza se encuentran en cada rincón.",
      detalle: "Bali, con su atmósfera mágica y vibrante, nos recibió con los brazos abiertos. Desde el momento en que aterrizamos, el sonido de las olas y el canto de los pájaros nos hicieron sentir como si estuviéramos en un sueño. Pasamos nuestros días explorando arrozales en terrazas y visitando templos antiguos, donde la espiritualidad y la historia se entrelazan. Las playas de arena blanca nos invitaron a relajarnos y disfrutar del sol, mientras que la gastronomía balinesa deleitó nuestros sentidos con sabores exóticos. Participar en una ceremonia tradicional nos permitió vislumbrar la rica cultura de la isla. Al final de cada día, contemplábamos puestas de sol impresionantes, momentos que se grabaron en nuestra memoria. Bali no solo es un destino, es una experiencia transformadora que nos enseñó a encontrar la paz interior."
    },
    {
      viaje: "Aventura en Marruecos",
      fecha: "10/01/2024",
      imagen: "https://cdn.pixabay.com/photo/2019/04/17/18/04/camels-4134934_1280.jpg",
      descripcion: "Una travesía mágica entre dunas doradas y la cultura bereber.",
      detalle: "Marruecos es un país lleno de contrastes, y el desierto del Sahara es su joya más brillante. Al llegar a Marrakech, nos sentimos atrapados en un bullicio de colores y aromas. Después de explorar los zocos, emprendimos un viaje hacia el desierto, donde la arena dorada se extendía hasta el horizonte. Dormimos en jaimas bajo un manto estrellado, y al amanecer, las dunas se iluminaban con tonalidades cálidas. Los guías bereberes nos contaron historias de sus ancestros y nos enseñaron a tocar la música tradicional. Las noches alrededor del fuego, con danza y relatos, nos unieron en una experiencia única. Cada día fue una nueva aventura: montamos camellos, exploramos oasis escondidos y descubrimos la hospitalidad de los pueblos nómadas. Esta travesía no solo nos mostró la belleza del desierto, sino también la riqueza cultural de Marruecos."
    },
    {
      viaje: "Ruta por la Toscana",
      fecha: "20/07/2024",
      imagen: "https://cdn.pixabay.com/photo/2015/01/25/21/17/landscapes-612094_1280.jpg",
      descripcion: "Un viaje por colinas onduladas y paisajes de ensueño, llenos de historia y sabor.",
      detalle: "La Toscana es el epítome de la belleza italiana. Desde Florencia, comenzamos nuestra ruta por viñedos y olivares que se extendían a lo largo de suaves colinas. Cada parada era un deleite para los sentidos: catas de vino en bodegas familiares, donde el vino Chianti nos hizo apreciar aún más la riqueza de la tierra. Visitamos ciudades medievales como Siena y San Gimignano, donde cada calle empedrada nos contaba historias del pasado. Las comidas eran un festín: pasta fresca, quesos locales y, por supuesto, el famoso gelato. Pero no solo disfrutamos de la gastronomía, también tuvimos la oportunidad de participar en talleres de cocina, aprendiendo los secretos de la cocina toscana. Al caer la tarde, el paisaje se bañaba en luz dorada, y nos prometimos regresar para seguir explorando este paraíso terrenal."
    }
  ];


  constructor() { }

  addViaje(viaje: Ivacacion) {
    this.viajes.unshift(viaje);
  }

  viaje = "";
  fecha = "";
  imagen = "";
  descripcion = "";
  detalle = "";
  nuevoViaje: Ivacacion;

  creaViaje(viaje: string, fecha: string, imagen: string, descripcion: string, detalle: string) {
  
    this.nuevoViaje = {
      viaje: viaje,
      fecha: fecha,
      imagen: imagen,
      descripcion: descripcion,
      detalle: detalle
    };

    this.addViaje(this.nuevoViaje);
    console.log(this.nuevoViaje);
    console.log(this.viajes);

  }

  
}
