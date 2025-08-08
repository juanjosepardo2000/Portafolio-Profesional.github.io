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
                  title: "Asistente Virtual - Mapa Interactivo",
                  thumbnail: "images/mapa/asistente virtual.png",
                  description: `
                    <p>El <strong>Asistente Virtual UTPL</strong> es un sistema interactivo que integra inteligencia artificial, procesamiento de lenguaje natural (NLP) y visualización geográfica, con el objetivo de optimizar la consulta y exploración de información sobre <em>movilidad estudiantil</em> y <em>convenios internacionales</em> de la Universidad Técnica Particular de Loja (UTPL).</p>
                    
                    <div class="image-container">
                      <img src="images/mapa/MAPA MUNDI.png" alt="MAPA MUNDI" style="max-width: 30%; height: auto; border-radius: 5px;">
                    </div>

                    <h3>Arquitectura y Funcionamiento</h3>
                    <p>El sistema combina una interfaz gráfica interactiva (front-end) con un motor de búsqueda y respuesta (back-end) conectado a <strong>Firebase Firestore</strong>. El flujo básico de operación es:</p>
                    <ol>
                      <li>Captura de entrada por voz (Web Speech API) o texto (formulario).</li>
                      <li>Procesamiento de la consulta usando modelos NLP para entender la intención.</li>
                      <li>Búsqueda dinámica en la base de datos estructurada de <em>Global Campus UTPL</em>.</li>
                      <li>Entrega de respuesta enriquecida con enlaces y recursos.</li>
                      <li>Interacción visual: resalta en el mapa el país o universidad correspondiente.</li>
                    </ol>

                    <h3>Tecnologías Clave</h3>
                    <table style="border-collapse: collapse; margin: auto; text-align: center;">
                      <tr>
                        <th style="border: 1px solid #ccc; padding: 8px;">Componente</th>
                        <th style="border: 1px solid #ccc; padding: 8px;">Tecnología</th>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #ccc; padding: 8px;">Interfaz Web</td>
                        <td style="border: 1px solid #ccc; padding: 8px;">HTML5, CSS3, JavaScript</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #ccc; padding: 8px;">Mapa Interactivo</td>
                        <td style="border: 1px solid #ccc; padding: 8px;">Mapbox GL JS (WebGL)</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #ccc; padding: 8px;">Procesamiento de Lenguaje</td>
                        <td style="border: 1px solid #ccc; padding: 8px;">NLP.js / OpenAI API</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #ccc; padding: 8px;">Base de Datos</td>
                        <td style="border: 1px solid #ccc; padding: 8px;">Firebase Firestore</td>
                      </tr>
                      <tr>
                        <td style="border: 1px solid #ccc; padding: 8px;">Integración de Voz</td>
                        <td style="border: 1px solid #ccc; padding: 8px;">Web Speech API</td>
                      </tr>
                    </table>

                    <h3>Ejemplos de Implementación</h3>
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
                    </div>

                    <p>Además, el mismo framework se ha utilizado para crear versiones del asistente con mapas temáticos, como el <strong>Mapa Interactivo de Ecuador</strong>, que integra información cultural y trivias interactivas.</p>

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

                    <h3>Beneficios Clave</h3>
                    <ul>
                      <li>Acceso inmediato a información confiable y actualizada.</li>
                      <li>Interacción natural con lenguaje humano.</li>
                      <li>Experiencia visual inmersiva con mapas interactivos.</li>
                      <li>Compatibilidad multiplataforma (navegadores modernos).</li>
                    </ul>
                  `,
                  additionalDescription: ``
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
                },
                proyecto4: {
                    title: "Módulo Técnico: Agendamiento de Citas Médicas 🩺",
                    thumbnail: "images/minthy/agendamiento_minthy_project/principal_agendamiento.jpg", 
                    description: `
                      <p>El <strong> Módulo de Agendamiento de Citas Médicas </strong> es un sistema interactivo y responsivo que forma
                       parte de una plataforma de telemedicina que me encuentro desarrollando <strong> "Minthy" </strong> ,
                      desarrollada para ofrecer atención médica eficiente y accesible. Este módulo está diseñado para facilitar 
                      la programación de consultas médicas, optimizando la disponibilidad de los profesionales y mejorando la experiencia del 
                      paciente. El usuario puede seleccionar especialidad, fecha y modalidad (presencial o videollamada), 
                      recibiendo confirmación inmediata con registro automático en su historial.</p>

                      <h3>Arquitectura y Flujo de Funcionamiento</h3>
                      <ol>
                        <li>El paciente selecciona la especialidad médica deseada.</li>
                        <li>El sistema consulta en <em>Firestore</em> los profesionales disponibles.</li>
                        <li>Se elige fecha y hora en función de la disponibilidad en tiempo real.</li>
                        <li>Se confirma la cita y se envía notificación automática (push/email).</li>
                        <li>El evento queda registrado en el historial tanto del paciente como del médico.</li>
                      </ol>
                      <div class="image-container">
                        <img src="images/minthy/agendamiento_minthy_project/diagrama_de_flujo_agendamiento.png" 
                            alt="Diagrama de Flujo - Agendamiento" 
                            style="max-width: 100%; height: auto; border-radius: 5px;">
                      </div>

                      <h3>Tecnologías Utilizadas</h3>
                      <table style="border-collapse: collapse; margin: auto; text-align: center;">
                        <tr>
                          <th style="border: 1px solid #ccc; padding: 8px;">Componente</th>
                          <th style="border: 1px solid #ccc; padding: 8px;">Tecnología</th>
                        </tr>
                        <tr>
                          <td style="border: 1px solid #ccc; padding: 8px;">Interfaz</td>
                          <td style="border: 1px solid #ccc; padding: 8px;">Ionic 7 + Angular 16</td>
                        </tr>
                        <tr>
                          <td style="border: 1px solid #ccc; padding: 8px;">UI/UX</td>
                          <td style="border: 1px solid #ccc; padding: 8px;">Angular Material, ReactiveFormsModule, Ngx-Toastr</td>
                        </tr>
                        <tr>
                          <td style="border: 1px solid #ccc; padding: 8px;">Autenticación</td>
                          <td style="border: 1px solid #ccc; padding: 8px;">Firebase Authentication</td>
                        </tr>
                        <tr>
                          <td style="border: 1px solid #ccc; padding: 8px;">Base de Datos</td>
                          <td style="border: 1px solid #ccc; padding: 8px;">Firebase Firestore</td>
                        </tr>
                        <tr>
                          <td style="border: 1px solid #ccc; padding: 8px;">Notificaciones</td>
                          <td style="border: 1px solid #ccc; padding: 8px;">Firebase Cloud Messaging, EmailJS</td>
                        </tr>
                      </table>

                      <h3>Características Técnicas Destacadas</h3>
                      <ul>
                        <li><strong>Control dinámico de disponibilidad:</strong> los médicos gestionan sus horarios y el sistema bloquea automáticamente las horas ocupadas.</li>
                        <li><strong>Actualización en tiempo real:</strong> listeners activos en Firestore (<code>snapshotChanges()</code>) para reflejar cambios instantáneamente.</li>
                        <li><strong>Integración con módulo de videollamadas:</strong> generación automática de enlace único para citas virtuales.</li>
                        <li><strong>Prevención de conflictos:</strong> validación en backend que evita citas duplicadas o traslapadas.</li>
                        <li><strong>Optimización UX:</strong> animaciones con Ionic Animations API y carga visual con ngx-spinner/mat-progress-bar.</li>
                      </ul>

                      <h3>Vista Previa de la Aplicación</h3>
                      <video controls style="width: 100%; max-width: 500px; border-radius: 10px; display: block; margin: auto;">
                        <source src="videos/proyecto4.mp4" type="video/mp4">
                        Tu navegador no soporta la etiqueta de video.
                      </video>
                    `,
                    additionalDescription: ``
                  },


                proyecto5: {
                  title: "Automatización y Web Scraping para extracción de transacciones en el transporte urbano de Loja",
                  thumbnail: "images/webscraping/webscraping.png",
                  description: `
                  <p>Este proyecto fue desarrollado para optimizar el proceso de fiscalización del uso de tarjetas electrónicas en el sistema de transporte urbano de Loja.
                   Anteriormente, la recolección de transacciones debía hacerse manualmente, descargando una a una las hojas diarias desde el sistema KBus, lo que consumía mucho tiempo y recursos.
                  Mediante el uso de Python y técnicas de web scraping, se automatiza por completo la extracción de transacciones diarias durante un mes completo. El sistema inicia sesión en la plataforma, 
                  consulta los datos día por día, gestiona la paginación de resultados y genera automáticamente un archivo Excel limpio y formateado con toda la información necesaria para ser analizada.</p>
                    
                  `,
                  
                  additionalDescription: `

                  <h3 style="color:#2c3e50;"> Diagrama de flujo </h3>
                    <div style="text-align:center; margin: 20px 0;">
                      <img src="images/webscraping/flujograma.png" alt="Diagrama de flujo Web Scraping" style="max-width:80%; border-radius:10px;">
                    </div>
                  <p>El proceso inicia con una autenticación mediante sesión persistente, estableciendo conexión con la plataforma KBus a través de credenciales válidas. 
                  Posteriormente, el script registra un rango de fechas (por ejemplo, todo el mes de octubre), y para cada día envía solicitudes con filtros personalizados 
                  que permiten recuperar todas las transacciones realizadas. Para asegurar la cobertura total de los datos, se implementa un sistema de paginación automática que 
                  registra cada página de resultados hasta completarlas. Las transacciones recolectadas se almacenan temporalmente en memoria para luego ser convertidas en un DataFrame 
                  utilizando la librería Pandas, donde se realiza la limpieza y renombrado de columnas según el formato requerido para la fiscalización. Finalmente, se genera un archivo Excel profesional, 
                  con estilos aplicados a encabezados, formatos de moneda y fechas, facilitando su integración con hojas de cálculo preexistentes que contienen macros para el análisis de uso indebido de tarjetas. 
                  Esta arquitectura garantiza una extracción de datos confiable, escalable y lista para su análisis mensual.<p>
                  
                  <h3 style="color:#2c3e50;"> Video demostrativo </h3>
                  <p>El video a continuación muestra cómo el sistema inicia sesión en el portal de KBus, extrae todas las transacciones, las procesa y genera el Excel final automáticamente.</p>

                  <div style="text-align: center;">
                    <a href="https://youtu.be/TkPGdmKY57Q" target="_blank">
                      <img src="images/webscraping/webscraping.png" alt="Ver video de Webscraping" style="width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: 0.3s;">
                    </a>
                    <p style="font-weight: bold;">▶ Haz clic en la imagen para ver el video</p>
                  </div>

                  <!--
                    <div style="display: flex; justify-content: center; gap: 30px; flex-wrap: wrap;">
                      <div class="video-container" style="max-width: 400px;">
                        <video controls style="width: 100%; height: auto;">
                          <source src="images/webscraping/video_webscraping.mp4" type="video/mp4">
                          Tu navegador no soporta la etiqueta de video.
                        </video>
                      </div>
                    </div>
                    -->

                  <h3>Tecnologías utilizadas</h3>
                  <table style="width: 80%; max-width: 900px; margin: 0 auto; border-collapse: collapse; text-align: center;">
                    <thead>
                      <tr style="background-color: #2c3e50; color: white;">
                        <th style="padding: 10px; border: 1px solid #ccc;">Categoría</th>
                        <th style="padding: 10px; border: 1px solid #ccc;">Tecnología</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-code"></i> Lenguaje de programación</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">Python</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-robot"></i> Librerías de automatización</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">requests, time</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-database"></i> Procesamiento de datos</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">pandas, datetime</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-file-export"></i> Exportación de reportes</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">openpyxl</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-file-excel"></i> Formato de archivos</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">Excel (.xlsx)</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-gears"></i> Técnicas utilizadas</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">Web scraping, manejo de sesiones, paginación automática, exportación con estilo</td>
                      </tr>
                    </tbody>
                  </table>



                  `
                  
                },

                proyecto6: {

                title: "Automatización Inteligente de Extracción y Análisis de Facturas con IA y Power BI",
                thumbnail: "images/facturia/portada.png",
                description: `
                  <p>Este sistema automatiza la lectura de facturas PDF, extrae sus datos clave mediante inteligencia artificial, 
                  los almacena en una base de datos SQLite y los visualiza en un tablero interactivo de
                  Power BI, reduciendo el tiempo de procesamiento y errores humanos en la gestión contable.</p>
                `,
                
                additionalDescription: `

                  <h3 style="color:#2c3e50; font-size: 1.2em;">Objetivo del proyecto</h3>
                  <div style="text-align:center; margin: 20px 0;">
                    <img src="images/facturia/objetivo_facturia.png" alt="Ahorro de tiempo" style="max-width:30%; border-radius:10px;">
                  </div>
                  <ul style="text-align:left; margin-left:20px;">
                    <li>▶<strong>  Reducir</strong> el tiempo invertido en el registro de facturas.</li>
                    <li>▶<strong>  Minimizar</strong> errores humanos en la transcripción de datos.</li>
                    <li>▶<strong>  Centralizar y visualizar</strong> la información de facturas para análisis rápido y toma de decisiones.</li>
                  </ul>

                  <h3 style="color:#2c3e50; font-size: 1.2em;">Flujo de uso</h3>
                  <ul style="text-align:left; margin-left:20px;">
                    <li>1. El usuario sube facturas en formato PDF a una carpeta.</li>
                    <li>2. El sistema analiza cada factura usando IA (modelo de OpenAI) con un prompt especializado.</li>
                    <li>3. Se extraen datos clave: fecha, proveedor, concepto, importe y moneda.</li>
                    <li>4. Los datos se almacenan automáticamente en una base de datos SQLite.</li>
                    <li>5. Power BI consume los datos para generar reportes interactivos y filtrables.</li>
                  </ul>  

                  <h3 style="color:#2c3e50; font-size: 1.2em;">Video demostrativo</h3>
                  <p>El video a continuación muestra el uso de la herramienta de automatización para la extracción y análisis de facturas.</p>

                  <div style="text-align: center;">
                    <a href="https://youtu.be/TkPGdmKY57Q" target="_blank">
                      <img src="images/facturia/portada.png" alt="Ver video demostrativo" style="width: 300px; border-radius: 10px; box-shadow: 0 4px 8px rgba(0,0,0,0.2); transition: 0.3s;">
                    </a>
                    <p style="font-weight: bold;">▶ Haz clic en la imagen para ver el video</p>
                  </div>

                  <h3 style="color:#2c3e50; font-size: 1.2em;">Arquitectura del sistema</h3>
                  <div style="text-align:center; margin: 20px 0;">
                    <img src="images/facturia/diagrama_facturia.png" alt="Diagrama de arquitectura de facturas" style="max-width:80%; border-radius:10px;">
                  </div>
                  <p style="text-align:left;">El sistema se compone de tres bloques principales:
                    <li><strong>Entrada</strong> (facturas PDF) </li>
                    <li><strong>Procesamiento IA</strong> (extracción con GPT-4o-mini y PyMuPDF), en donde se lee el PDF, se extraen los datos de la factura y se tienen los datos listos para su almacenamiento</li>
                    <li><strong>Almacenamiento</strong> (base de datos SQLite)</li>
                    <li><strong>Visualización</strong> (Power BI conectado directamente a la base de datos)</li>
                    Esta arquitectura permite que cualquier factura subida sea procesada de forma rápida y consistente, 
                    asegurando que los reportes en Power BI estén siempre actualizados y listos para su consulta.</p>
                

 

                  <h3>Tecnologías utilizadas</h3>
                  <table style="width: 80%; max-width: 900px; margin: 0 auto; border-collapse: collapse; text-align: center;">
                    <thead>
                      <tr style="background-color: #2c3e50; color: white;">
                        <th style="padding: 10px; border: 1px solid #ccc;">Categoría</th>
                        <th style="padding: 10px; border: 1px solid #ccc;">Tecnología</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-code"></i> Lenguaje de programación</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">Python 3.10</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-robot"></i> IA / PNL </td>
                        <td style="padding: 10px; border: 1px solid #ccc;">API de OpenAI (GPT-4o-mini)</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-database"></i> Procesamiento de datos</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">	PyMuPDF</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-file-export"></i> Base de datos</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">SQLite</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-file-excel"></i> Visualización</td>
                        <td style="padding: 10px; border: 1px solid #ccc;">Power BI</td>
                      </tr>
                      <tr>
                        <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-gears"></i> Manipulación de datos </td>
                        <td style="padding: 10px; border: 1px solid #ccc;">Pandas</td>
                      </tr>
                    </tbody>
                  </table>

                  `
                },

               proyecto7: {
              title: "Módulo de Teleconsulta: Videollamada Médica",
              thumbnail: "images/teleconsulta/portada.png", // Imagen de portada del proyecto
              description: `
                  <p>
                  Este módulo forma parte de una plataforma de telemedicina diseñada para permitir a médicos y pacientes conectarse en tiempo real mediante videollamadas, garantizando una comunicación efectiva y segura. Su arquitectura se ha desarrollado con el objetivo de ser escalable, robusta y adaptable a diferentes entornos médicos, ofreciendo una experiencia de usuario optimizada en dispositivos móviles y de escritorio.
                  </p>



                  <h4>Objetivo del Módulo</h4>
                  <p>
                  El módulo de teleconsulta ha sido diseñado para cubrir las necesidades de atención médica a distancia, permitiendo la interacción visual y auditiva en tiempo real. Esto reduce la necesidad de desplazamientos, mejora la eficiencia de los profesionales de la salud y amplía el acceso a la atención médica, especialmente en zonas rurales o de difícil acceso.
                  </p>

                  <h4>Características Principales</h4>
                  <ul>
                      <li><strong>Interfaz de Usuario Dinámica:</strong> Pantallas diferenciadas para cada etapa del flujo: carga inicial, información de la cita, videollamada en vivo y mensajes de error en caso de problemas técnicos.</li>
                      <li><strong>Integración con Jitsi Meet API:</strong> Uso de la API externa para incrustar la videollamada en un contenedor propio, empleando un servidor alternativo (8x8.vc) para mejorar la velocidad de conexión.</li>
                      <li><strong>Gestión de Roles:</strong> Asignación automática de rol de moderador al médico, permitiéndole controlar la sala y gestionar la participación.</li>
                      <li><strong>Seguridad y Estabilidad:</strong> Verificación previa de compatibilidad del navegador, manejo de estados de conexión y recuperación ante fallos.</li>
                      <li><strong>Diseño Responsivo:</strong> Adaptación total a dispositivos móviles y escritorio mediante media queries y componentes flexibles.</li>
                      <li><strong>Controles de Dispositivo:</strong> Funciones para activar o desactivar micrófono y cámara en tiempo real.</li>
                      <li><strong>Finalización Segura de la Llamada:</strong> Confirmación antes de salir y liberación de recursos para evitar consumo innecesario.</li>
                  </ul>

                  <div class="imagen-proyecto">
                      <img src="images/teleconsulta/captura1.png" alt="Pantalla de carga y verificación de compatibilidad" />
                  </div>

                <h4>Arquitectura del Módulo</h4>
                <p>
                La arquitectura del módulo de Teleconsulta está diseñada bajo un enfoque modular y desacoplado, lo que permite mantener una clara separación entre la lógica de negocio, la presentación de la interfaz y la comunicación en tiempo real. Esto facilita la escalabilidad, el mantenimiento y la integración con otros componentes de la plataforma de telemedicina.
                </p>

                <p>
                El flujo general parte de la interfaz de usuario desarrollada en Ionic y Angular, que interactúa con servicios internos para gestionar estados, verificar compatibilidad y establecer la conexión con el servidor de videollamadas mediante la API de Jitsi Meet. 
                </p>

                <h4>Componentes principales:</h4>
                <ul>
                    <li><strong>Capa de Presentación (Frontend):</strong>  
                        Implementada con Angular e Ionic. Contiene las pantallas de carga, información de la cita, videollamada y mensajes de error. Utiliza directivas y binding para renderizar contenido dinámicamente según el estado de la conexión.</li>
                    
                    <li><strong>Capa de Lógica y Control:</strong>  
                        Gestiona los estados de la aplicación (cargando, en llamada, error), controla los roles de usuario (médico/paciente), maneja la activación/desactivación de dispositivos de audio y video, y procesa la finalización segura de la sesión.</li>
                    
                    <li><strong>Capa de Comunicación en Tiempo Real:</strong>  
                        Integración con Jitsi Meet API a través de un servicio especializado. Se encarga de inicializar la conexión, configurar la sala de videollamada, aplicar roles y gestionar eventos en tiempo real.</li>
                    
                    <li><strong>Capa de Servicios y Utilidades:</strong>  
                        Contiene funciones reutilizables como la verificación de compatibilidad del navegador, el manejo de rutas internas mediante Angular Router y la gestión de parámetros recibidos por URL.</li>
                </ul>

                <p>
                A continuación, se puede adjuntar un diagrama de bloques que ilustre la relación entre estas capas, los flujos de datos y los eventos que ocurren desde que el usuario inicia sesión hasta que finaliza la videollamada.
                </p>


                  <div class="imagen-proyecto">
                      <img src="images/teleconsulta/captura2.png" alt="Pantalla de información de la consulta" />
                  </div>

                  <h3>Flujo de Uso</h3>
                  <ol>
                      <li>El usuario accede al módulo y se verifica la compatibilidad del navegador.</li>
                      <li>Se muestra una pantalla de carga con indicadores visuales del progreso.</li>
                      <li>Antes de iniciar la videollamada, se presenta una tarjeta con los datos de la cita: nombre del médico, paciente, hora y ID de la sala.</li>
                      <li>La videollamada se inicia en un contenedor dedicado, utilizando Jitsi Meet API.</li>
                      <li>Durante la llamada, el usuario puede controlar micrófono y cámara.</li>
                      <li>Al finalizar, se solicita confirmación y se liberan los recursos asociados.</li>
                  </ol>

                  <div class="imagen-proyecto">
                      <img src="images/teleconsulta/captura3.png" alt="Videollamada en vivo con Jitsi Meet" />
                  </div>

                          <h3>Tecnologías utilizadas</h3>
        <table style="width: 80%; max-width: 900px; margin: 0 auto; border-collapse: collapse; text-align: center;">
            <thead>
                <tr style="background-color: #2c3e50; color: white;">
                    <th style="padding: 10px; border: 1px solid #ccc;">Categoría</th>
                    <th style="padding: 10px; border: 1px solid #ccc;">Tecnología</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-code"></i> Framework Frontend</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">Angular, Ionic</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-terminal"></i> Lenguajes</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">TypeScript, HTML5, SCSS (Sass)</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-video"></i> Comunicación en Tiempo Real</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">Jitsi Meet API (Servidor alternativo 8x8.vc)</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-palette"></i> UI/UX</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">Componentes de Ionic (botones, tarjetas, íconos, alertas)</td>
                </tr>
                <tr>
                    <td style="padding: 10px; border: 1px solid #ccc;"><i class="fa-solid fa-route"></i> Manejo de Estado y Rutas</td>
                    <td style="padding: 10px; border: 1px solid #ccc;">Angular Router, Services</td>
                </tr>
            </tbody>
        </table>

                  <h3>Demostración</h3>
                  <p>[Video demostrativo del módulo en funcionamiento mostrando cada etapa del flujo]</p>
              `
          },



                };
            
              // Obtener los detalles del proyecto seleccionado
              const project = projects[projectId];
            
              if (project) {
                // Actualizar los elementos del DOM con los detalles del proyecto
                document.getElementById("project-title").textContent = project.title;
                const thumbnailElement = document.getElementById("project-thumbnail");
                thumbnailElement.src = project.thumbnail;
                // Hacer el thumbnail más grande
                thumbnailElement.style.width = "100%";
                thumbnailElement.style.maxWidth = "200px";
                thumbnailElement.style.height = "auto";
                thumbnailElement.style.display = "block";
                thumbnailElement.style.margin = "20px auto";
                thumbnailElement.style.borderRadius = "10px";
                thumbnailElement.style.boxShadow = "0 4px 8px rgba(0,0,0,0.1)";
                document.getElementById("project-description").innerHTML = project.description; // Usar innerHTML
                const architectureElement = document.getElementById("project-architecture");
                  if (architectureElement && project.architecture) {
                    architectureElement.innerHTML = project.architecture;
                  } else if (architectureElement) {
                    architectureElement.innerHTML = "";
                  }
                document.getElementById("project-video").querySelector("source").src = project.video;
                document.getElementById("project-video").load(); // Recargar el video
                document.getElementById("project-additional-description").innerHTML = project.additionalDescription; // Usar innerHTML
            
                // Mostrar la sección de detalles del proyecto
          const projectDetails = document.getElementById("project-details");
          projectDetails.style.display = "flex";

          // ⭐ SCROLL SUAVE hacia la sección de detalles ⭐
          setTimeout(() => {
              projectDetails.scrollIntoView({
                  behavior: 'smooth',
                  block: 'start'
              });
          }, 100);

          } else {
              console.error("Proyecto no encontrado:", projectId);
                          
    // Mostrar un mensaje de error en la interfaz
                document.getElementById("project-details").innerHTML = `
                  <p style="color: red;">El proyecto seleccionado no se encuentra.</p>
                `;
              }
            }

/* ============================== Portfolio Filter ============================ */
/* ============================== Portfolio Filter ============================ */
const filterButtons = document.querySelectorAll('.filter-item');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remover clase active de todos los botones
        filterButtons.forEach(btn => btn.classList.remove('active'));
        // Agregar clase active al botón clickeado
        button.classList.add('active');
        
        const filterValue = button.getAttribute('data-filter');
        
        portfolioItems.forEach(item => {
            const isSecondaryVersion = item.classList.contains('secondary-version');
            
            if (filterValue === 'all') {
                // En "Todos", solo mostrar las versiones primarias (ocultar secundarias)
                if (isSecondaryVersion) {
                    item.style.display = 'none';
                    item.classList.add('hide');
                    item.classList.remove('show');
                } else {
                    item.style.display = 'block';
                    item.classList.add('show');
                    item.classList.remove('hide');
                }
            } else {
                // En filtros específicos, mostrar según la categoría
                if (item.getAttribute('data-category') === filterValue) {
                    item.style.display = 'block';
                    item.classList.add('show');
                    item.classList.remove('hide');
                } else {
                    item.style.display = 'none';
                    item.classList.add('hide');
                    item.classList.remove('show');
                }
            }
        });
    });
});
