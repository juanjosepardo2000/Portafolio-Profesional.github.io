/* ============================== typing animation ============================ */
var typed = new Typed(".typing",{
    strings:["","Hardware and Software developer","Hardware and Software developer","Hardware and Software developer","Hardware and Software developer"],
    typeSpeed:100,
    BackSpeed:60,
    loop:true
})
/* ============================== Aside ============================ */
const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length,
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length;
      for(let i=0; i<totalNavList; i++)
      {
          const a = navList[i].querySelector("a");
          a.addEventListener("click", function()
          {
              removeBackSection();
              for(let j=0; j<totalNavList; j++)
              {
                  if(navList[j].querySelector("a").classList.contains("active"))
                  {
                      addBackSection(j);
                     // allSection[j].classList.add("back-section");
                  }
                  navList[j].querySelector("a").classList.remove("active");
              }
              this.classList.add("active")
              showSection(this);
              if(window.innerWidth < 1200)
              {
                  asideSectionTogglerBtn();
              }
          })
      }
      function removeBackSection()
      {
        for(let i=0; i<totalSection; i++)
        {
            allSection[i].classList.remove("back-section");
        }   
      }
      function addBackSection(num)
      {
        allSection[num].classList.add("back-section");
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++)
          {
              allSection[i].classList.remove("active");
          }
          const target = element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("active")
      }
      function updateNav(element)
      {
          for(let i=0; i<totalNavList; i++)
          {
              navList[i].querySelector("a").classList.remove("active");
              const target = element.getAttribute("href").split("#")[1];
              if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
              {
                navList[i].querySelector("a").classList.add("active");
              }
          }
      }
      document.querySelector(".hire-me").addEventListener("click", function()
      {
          const sectionIndex = this.getAttribute("data-section-index");
          //console.log(sectionIndex);
          showSection(this);
          updateNav(this);
          removeBackSection();
          addBackSection(sectionIndex);
      })
      const navTogglerBtn = document.querySelector(".nav-toggler"),
            aside = document.querySelector(".aside");
            navTogglerBtn.addEventListener("click", () => 
            {
                asideSectionTogglerBtn();
            })
            function asideSectionTogglerBtn()
            {
                aside.classList.toggle("open");
                navTogglerBtn.classList.toggle("open");
                for(let i=0; i<totalSection; i++ )
                {
                    allSection[i].classList.toggle("open");
                }
            }
            function showProjectDetails(projectId) {
              // Datos de los proyectos
                const projects = {
                proyecto1: {
                  title: "YouLumiere: Monitoreo Inteligente de la Salud",
                  thumbnail: "images/iomt.jpg",
                  description: `
                  
                  <p>YouLumiere es una innovadora plataforma diseñada para el monitoreo remoto de la salud de pacientes de la tercera edad, aprovechando tecnologías emergentes como el Internet de las Cosas Médicas (IoMT) y la Inteligencia Artificial.</p>
                  <div class="video-container" style="max-width: 400px; margin: 0 auto;">
                    <video controls style="width: 100%; height: auto;">
                    <source src="videos/iomt.mp4" type="video/mp4">
                    Tu navegador no soporta la etiqueta de video.
                    </video>
                  </div>
                  <p>A través del IoMT, YouLumiere conecta sensores de signos vitales con certificación médica para medir con precisión parámetros esenciales como temperatura corporal, niveles de glucosa en sangre, presión arterial, oxigenación, peso y otros indicadores clave. Esto permite al personal médico monitorear la salud de sus pacientes en tiempo real, sin importar la distancia.</p>
                  <div class="image-container">
                  
                  </div>
                  <h3>Asistente Virtual con Inteligencia Artificial</h3>
                  <div class="image-container">
                    <img src="images/Asistente.png" alt="Asistente virtual" style="max-width: 30%; height: auto; border-radius: 5px;">
                  </div>
                  <p>Además del monitoreo de signos vitales, YouLumiere busca mejorar la calidad de vida de los pacientes mediante un asistente virtual basado en inteligencia artificial. Este asistente proporcionará acompañamiento a personas de la tercera edad que viven solas, brindándoles apoyo en su rutina diaria y facilitando la interacción con el sistema de monitoreo.</p>
                  <p>Gracias a su integración con la red de sensores, el asistente podrá ofrecer recordatorios personalizados sobre la toma de medicamentos, hábitos saludables y alertas médicas cuando detecte anomalías en los signos vitales. Asimismo, servirá como un compañero interactivo que fomentará el bienestar emocional de los pacientes.</p>
                  `,
                  architecture: `
                  <h3>Arquitectura del Sistema</h3>
                  <p>Desde un enfoque técnico, YouLumiere se basa en una arquitectura IoMT (Internet de las Cosas Médicas) compuesta por hardware y software, dividiéndose en los siguientes componentes clave: <p>
                  <ul>
                    <li><strong>Sensores de signos vitales:</strong> Dispositivos médicos encargados de medir parámetros como temperatura corporal, glucosa en sangre, presión arterial, oxigenación, peso y otros signos vitales relevantes.</li>
                    <li><strong>Gateway:</strong> Un nodo de comunicación que recibe los datos de los sensores, los procesa y los envía a la nube para su almacenamiento y análisis.</li>
                    <li><strong>Almacenamiento:</strong> Una base de datos segura donde se guardan los registros de cada paciente, permitiendo el acceso histórico y el análisis de tendencias en su salud.</li>
                    <li><strong>Interfaz de usuario:</strong> Plataforma accesible desde una página web y una aplicación móvil, donde médicos y profesionales de la salud pueden visualizar los datos de los pacientes en tiempo real.</li>
                  </ul>
                  <div class="image-container">
                    <img src="images/arquitectura.png" alt="Diagrama de Arquitectura" style="max-width: 80%; height: auto; border-radius: 10px;">
                  <p>En la imagen anterior se ilustra la arquitectura de YouLumiere. En el extremo izquierdo, un paciente utiliza distintos sensores para la medición de sus signos vitales. Estos sensores transmiten los datos a un Gateway, el cual se encarga de recolectar, procesar y enviar la información a través de Bluetooth. Posteriormente, el Gateway envía los datos procesados a una base de datos en la nube, donde quedan almacenados de forma segura.</p>
                  <p>Finalmente, los médicos pueden acceder a esta información mediante una interfaz gráfica intuitiva, ya sea a través de una página web o una aplicación móvil, lo que les permite visualizar los signos vitales de sus pacientes de manera remota y en tiempo real.</p>
                   
             
                  <h4>Descripción de cada componente </h4>
                  <h5>Sensores de signos vitales</h5>
                  </div>
                  <div class="image-container">
                    <img src="images/sensores.png" alt="Sensores de signos vitales" style="max-width: 30%; height: auto; border-radius: 8px;">
                  </div>
                  
                  <p>En la red IoMT de YouLumiere, se integran sensores certificados para la medición de signos vitales, como:</p>
                  <ul>
                    <li>- Termómetros digitales</li>
                    <li>- Glucómetros</li>
                    <li>- Tensiómetros</li>
                    <li>- Pulsioxímetros</li>
                    <li>- Básculas inteligentes</li>
                    <li>- Otros sensores médicos según las necesidades del personal de salud</li>
                  </ul>
                  <p>Para garantizar la conectividad con el sistema, todos los sensores utilizados deben contar con un módulo Bluetooth, ya que esta tecnología permite la transmisión de datos en tiempo real hacia el Gateway, optimizando la comunicación y asegurando la precisión de los registros médicos.</p>
                  
                  
                  <h5>Gateway: Procesamiento y Transmisión de Datos desde los Sensores IoMT</h5>
                
                    <img src="images/gateway.png" alt="Gateway" style="max-width: 25%; height: auto; border-radius: 8px;">
          
                  <p>El Gateway es un componente fundamental en la arquitectura de YouLumiere, ya que actúa como intermediario entre los sensores IoMT y la base de datos en la nube. Su función principal es recibir los datos de los dispositivos biomédicos a través de Bluetooth, procesarlos y enviarlos en tiempo real a Firebase Firestore para su almacenamiento y posterior visualización en la interfaz de usuario.</p>
                  <ul>
                  <h6>  Hardware del Gateway</h6>
                  <img src="images/raspberry.png" alt="raspberry" style="max-width: 25%; height: auto; border-radius: 8px;">
                  <p>El Gateway está implementado en una Raspberry Pi, un dispositivo de bajo consumo y alta flexibilidad, ideal para entornos IoT..</p>
                  <h7> Especificaciones </h7>
                  <ul>
                    <li> •	Raspberry Pi 4 Model B con 4GB de RAM </li>
                    <li> •	Módulo Bluetooth 5.0 integrado para la comunicación con los sensores</li>
                    <li> •	Conexión WiFi/Ethernet para el envío de datos a la nube</li>
                    <li> •	Almacenamiento en microSD con sistema operativo Raspberry Pi OS</li>
                  </ul>

                  <h6>  Software del Gateway</h6>  
                  <img src="images/rasp-python.png" alt="Python" style="max-width: 25%; height: auto; border-radius: 8px;">
                  <p>El software del Gateway está desarrollado en Python, utilizando librerías específicas para la comunicación con los sensores y la gestión de datos..</p>
                  <h7> Tecnologías utilizadas </h7>
                  <ul>
                    <li> •	PyBluez para la comunicación Bluetooth con los sensores IoMT </li>
                    <li> •	Firebase Admin SDK para el envío de datos a la abse de datos </li>
                    <li> •	PySerial para la comunicación serie con dispositivos externos </li>
                    <li> •	Flask para la creación de una API RESTful </li>
                    <li> •	Pytest para pruebas unitarias y de integración </li>  
                    <li> •	OpenCV para procesamiento de imágenes </li>
                    <li> •	NumPy y Pandas para el análisis de datos </li>
                    <li> •	Requests para realizar peticiones HTTP a servicios externos </li>
                    <li> •	Flask-SocketIO para la comunicación en tiempo real con la interfaz de usuario</li>
                    <li> •	Framework de desarrollo Node JS  para la creación de una API RESTful</li>
                  </ul>
                  

                  <h6>  Proceso de adquisición de datos </h6>  
                  <h7> Recepción de datos desde los sensores </h7>
                  <img src="images/envio_datos .png" alt="raspberry" style="max-width: 25%; height: auto; border-radius: 8px;">
                  <ul>
                    <li> •	Los sensores envían los valores biomédicos vía Bluetooth Low Energy (BLE) o Bluetooth clásico. </li>
                    <li> •	La Raspberry Pi escanea y se empareja con los dispositivos mediante PyBluez </li>
                    <li> •	Se establece una conexión estable y se reciben los datos en formato byte o string.</li>
                  </ul>

                  <h7> Procesamiento y validación de datos </h7>
                  <img src="images/procesamiento.png" alt="raspberry" style="max-width: 25%; height: auto; border-radius: 8px;">
                  <ul>
                    <li> •	Los datos recibidos son procesados y convertidos a un formato legible (JSON o CSV).</li>
                    <li> •	Se convierten los valores crudos en unidades médicas estándar (°C, mmHg, mg/dL, %SpO2)..</li>
                    <li> •	Se aplican filtros y transformaciones necesarias para el análisis posterior.</li>
                    <li> •	Se validan los datos para asegurar su integridad y precisión.</li>
                    <li> •	Se generan alertas si los valores están fuera de los rangos normales.</li>
                  </ul>

                  <h7> Envío de datos a la nube </h7>
                  <img src="images/datos-nube.png" alt="raspberry" style="max-width: 25%; height: auto; border-radius: 8px;">
                  <ul>
                    <li> •	Los datos procesados se envían a Firebase Firestore mediante el Firebase Admin SDK.</li>
                    <li> •	Se utilizan WebSockets para mantener una conexión en tiempo real con la interfaz de usuario.</li>
                    <li> •	Se asegura la transmisión segura de datos mediante HTTPS y autenticación.</li>
                  </ul>

                  <h7> Flujo completo de datos </h7>
                  <img src="images/Flujo.png" alt="Flujo" style="max-width: 100%; height: auto; border-radius: 8px;"
                  <ul>
                    <li> •	Los sensores envían datos al Gateway mediante Bluetooth.</li>
                    <li> •	El Gateway procesa y valida los datos.</li>
                    <li> •	Los datos se envían a Firebase Firestore.</li>
                    <li> •	La interfaz de usuario recibe actualizaciones en tiempo real.</li>
                    <li> •	Los médicos pueden acceder a los datos desde cualquier dispositivo conectado a Internet.</li>
                  </ul>





                  `,
                  additionalDescription: `
                  <h3>Interfaz de Usuario (Frontend) y Consumo de Datos desde Firebase </h3>
                  <img src="images/interfaz.png" alt="interaccion" style="max-width: 70%; height: auto; border-radius: 8px;"
                  <p>La interfaz de usuario de YouLumiere está diseñada para ofrecer una experiencia fluida e intuitiva a médicos y cuidadores, permitiéndoles visualizar y analizar en tiempo real los signos vitales de los pacientes.</p>
                  <p>La interfaz está disponible en dos plataformas:</p>
                  <ul>
                    <li> • Aplicación web, desarrollada con Next.js.</li>
                    <li> • Aplicación móvil, construida con Flutter.</li>
                  </ul>
                  <p>Ambas aplicaciones consumen los datos de Firebase Firestore a través de un servicio API que gestiona las peticiones y respuestas en tiempo real.</p>

                  <h6>Arquitectura Frontend </h6>
                  <p>La arquitectura del frontend de YouLumiere se basa en una estructura modular y escalable, utilizando tecnologías modernas para garantizar un rendimiento óptimo y una experiencia de usuario fluida, utilizando tecnologías modernas para garantizar rendimiento y escalabilidad:</p>
                  <ul> 
                    <li>•	Next.js para la aplicación web, aprovechando su capacidad de renderizado del lado del servidor (SSR) y generación de sitios estáticos (SSG).</li>
                    <li>•	Flutter para la aplicación móvil, permitiendo un desarrollo multiplataforma con una única base de código.</li>
                    <li>•	Firebase Firestore como base de datos en tiempo real, facilitando la sincronización de datos entre dispositivos.</li>
                    <li>•	React y Redux para la gestión del estado en la aplicación web.</li>
                    <li>•	Flutter Bloc para la gestión del estado en la aplicación móvil.</li>
                  </ul>

                  <h6>Consumo de datos desde Firebase </h6>
                  <p> Los datos de los signos vitales se obtienen en tiempo real desde Firebase Firestore, lo que permite a los médicos visualizar información actualizada sin necesidad de recargar la página o la aplicación. El sistema se basa en suscripciones a los datos, lo que significa que cualquier cambio realizado en la base de datos se refleja automáticamente en la interfaz del usuario. </p>
                  
                  <h6>Visualización de datos </h6>
                  <p> Los datos obtenidos se presentan en la interfaz mediante gráficos interactivos, tablas dinámicas y alertas visuales. </p>
                  <ul> 
                    <li>•	Gráficos de líneas y barras para mostrar tendencias a lo largo del tiempo.</li>
                    <li>•	Tablas con datos en tiempo real, permitiendo a los médicos filtrar y buscar información específica.</li>
                    <li>•	Alertas visuales que indican anomalías en los signos vitales, facilitando la identificación de situaciones críticas.</li>
                    <li>•	Notificaciones push para alertar a los médicos sobre cambios importantes en la salud de los pacientes.</li>
                  </ul>


                  <h3>Interacción con el sistema </h3>
                  <p> La interfaz de usuario permite a los médicos interactuar con el sistema de diversas maneras:</p>
                  <ul>
                    <li>•	Acceso a la información de los pacientes mediante un sistema de autenticación seguro.</li>
                    <li>•	Visualización de datos históricos y tendencias a lo largo del tiempo.</li>
                    <li>•	Configuración de alertas personalizadas según las necesidades del paciente.</li>
                    <li>•	Acceso a informes detallados sobre el estado de salud de los pacientes.</li>
                    <li>•	Comunicación directa con los pacientes a través de la aplicación móvil.</li>
                    <li>•	Acceso a un asistente virtual basado en IA para responder preguntas y brindar apoyo emocional.</li>
                  </ul>
                  <p>La interfaz de usuario de YouLumiere está diseñada para ser intuitiva y fácil de usar, permitiendo a los médicos y cuidadores acceder a la información crítica de manera rápida y eficiente. La combinación de tecnologías modernas y un enfoque centrado en el usuario garantiza que YouLumiere sea una herramienta valiosa para el monitoreo remoto de la salud de los pacientes.</p>
                  
                  <h6>Flujo completo de los datos </h6>
                  <img src="images/interaccion.png" alt="interaccion" style="max-width: 70%; height: auto; border-radius: 8px;"
                  <li> 1.	El paciente utiliza los sensores IoMT para medir signos vitales
                  <li> 2.	Los datos se transmiten al Gateway mediante Bluetooth.
                  <li> 3.	El Gateway procesa y envía los datos a Firebase Firestore.
                  <li> 4.	El frontend (web y móvil) obtiene los datos en tiempo real.
                  <li> 5.	Los datos son visualizados en gráficos interactivos, permitiendo un monitoreo eficiente
                  


                  `
                  
                },
                proyecto2: {
                  title: "Asistente virtual-Mapa Interactivo",
                  thumbnail: "images/mapa/asistente virtual.png",
                  description: `
                  <p>El Asistente Virtual UTPL es una herramienta innovadora creada para facilitar el acceso a información clave sobre movilidad estudiantil y
                   convenios internacionales que ofrece la Universidad Técnica Particular de Loja (UTPL)</p>
                   <div class="image-container">
                    <img src="images/mapa/MAPA MUNDI.png" alt="MAPA MUNDI" style="max-width: 30%; height: auto; border-radius: 5px;">
                  </div>
                  <p>Este asistente está integrado a un mapa interactivo del mundo, donde los estudiantes pueden explorar los diferentes países y universidades con las que la UTPL tiene convenios. Al mismo tiempo, pueden hablar con el asistente usando su voz o escribiendo sus preguntas, y recibir respuestas rápidas, claras y actualizadas
                   gracias a un sistema de inteligencia artificial conectado con la base de datos oficial de Global Campus UTPL.</p>

                   <p>Está pensado para que cualquier estudiante, sin necesidad de conocimientos técnicos, pueda obtener información confiable sobre destinos, requisitos, fechas importantes, y procesos de postulación para vivir una experiencia internacional con la UTPL.<p>
                      <!-- Contenedor principal en flex -->
                      <div style="display: flex; justify-content: center; gap: 50px; flex-wrap: wrap;">
                      <div class="video-container" style="max-width: 200px;">
                        <video controls style="width: 100%; height: auto;">
                          <source src="images/mapa/Mapa funcionando.mp4" type="video/mp4">
                          Tu navegador no soporta la etiqueta de video.
                        </video>
                      </div>
                      <div class="video-container" style="max-width: 200px;">
                        <video controls style="width: 100%; height: auto;">
                          <source src="images/mapa/Mapa mundi funcionando 1.mp4" type="video/mp4">
                          Tu navegador no soporta la etiqueta de video.
                        </video>
                      </div>
                      <!-- Aquí CIERRA el contenedor flex de los videos -->

                  <p>Bajo el mismo modelo se han realizado otros asistentes virtuales integrados a un mapa como lo es en este caso un mapa del Ecuador que permite conocer sobre la cultura del país y hacer participe al usuario de trivias.</p>
                  <!-- Contenedor principal en flex -->
                      <div style="display: flex; justify-content: center; gap: 50px; flex-wrap: wrap;">
                      <div class="video-container" style="max-width: 200px;">
                        <video controls style="width: 100%; height: auto;">
                          <source src="images/mapa/mapa ecuador .mp4" type="video/mp4">
                          Tu navegador no soporta la etiqueta de video.
                        </video>
                      </div>
                      <div class="video-container" style="max-width: 200px;">
                        <video controls style="width: 100%; height: auto;">
                          <source src="images/mapa/mapa ecuador 2.mp4" type="video/mp4">
                          Tu navegador no soporta la etiqueta de video.
                        </video>
                      </div>
                    </div>
                      <!-- Aquí CIERRA el contenedor flex de los videos -->
                  <p>El Asistente Virtual UTPL es un sistema inteligente de consulta en lenguaje natural, potenciado por modelos de IA y herramientas de procesamiento de voz y texto, integrado a una interfaz visual basada en un mapa interactivo WebGL. Su objetivo es responder preguntas frecuentes sobre movilidad internacional 
                  utilizando una base de conocimientos estructurada en Firebase Firestore, actualizada por el equipo de Global Campus UTPL. El sistema realiza las siguientes funciones 
                  </p>
                  <ul>
                    <li>•	Escucha o interpreta texto escrito por el usuario.</li>
                    <li>•	Procesa la consulta usando NLP (procesamiento de lenguaje natural).</li>
                    <li>•	Realiza una búsqueda en tiempo real en la base de datos.</li>
                    <li>•	Devuelve respuestas inmediatas con enlaces o recursos relevantes.</li>
                    <li>•	Destaca el país o institución en el mapa si aplica.</li>
                  </ul>
                  `  
                 
                  ,  
                  architecture: `
                  `
                  ,
                  additionalDescription: `
                  `

                },
                proyecto3: {
                  title: "Asistente Virtual con IA",
                  thumbnail: "images/proyecto3.jpg",
                  description: `
                  <p>Un asistente virtual para consultas estudiantiles basado en IA.</p>
                  `,
                  video: "videos/proyecto3.mp4",
                  additionalDescription: `
                  <p>Desarrollado con Python y frameworks como Flask/FastAPI.</p>
                  `
                }
                };
            
              // Obtener los detalles del proyecto seleccionado
              const project = projects[projectId];
            
              if (project) {
                // Actualizar los elementos del DOM con los detalles del proyecto
                document.getElementById("project-title").textContent = project.title;
                document.getElementById("project-thumbnail").src = project.thumbnail;
                document.getElementById("project-description").innerHTML = project.description; // Usar innerHTML
                document.getElementById("project-architecture").innerHTML = project.architecture; // Usar innerHTML
                document.getElementById("project-video").querySelector("source").src = project.video;
                document.getElementById("project-video").load(); // Recargar el video
                document.getElementById("project-additional-description").innerHTML = project.additionalDescription; // Usar innerHTML
            
                // Mostrar la sección de detalles del proyecto
                document.getElementById("project-details").style.display = "block";
              } else {
                console.error("Proyecto no encontrado:", projectId);
                // Mostrar un mensaje de error en la interfaz
                document.getElementById("project-details").innerHTML = `
                  <p style="color: red;">El proyecto seleccionado no se encuentra.</p>
                `;
              }
            }