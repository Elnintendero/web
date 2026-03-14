// Funcionalidades para Mundo de los Dinosaurios

document.addEventListener('DOMContentLoaded', function() {
    
    // Base de datos completa de dinosaurios con fechas de descubrimiento
    const dinosaurios = [
        {
            id: 1,
            nombre: "Tyrannosaurus Rex",
            nombreCientifico: "Tyrannosaurus rex",
            periodo: "cretacico",
            dieta: "carnivoro",
            longitud: 12.3,
            altura: 3.66,
            peso: 9000,
            descubrimiento: 1902,
            descubridor: "Barnum Brown",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Tyrannosaurus_rex_Sue_HMNS.jpg/800px-Tyrannosaurus_rex_Sue_HMNS.jpg",
            descripcion: "Uno de los depredadores más grandes y temidos de todos los tiempos.",
            caracteristicas: ["Dientes afilados de 15 cm", "Visión binocular", "Olfato desarrollado", "Velocidad hasta 40 km/h"]
        },
        {
            id: 2,
            nombre: "Triceratops",
            nombreCientifico: "Triceratops horridus",
            periodo: "cretacico",
            dieta: "herbivoro",
            longitud: 9,
            altura: 3,
            peso: 12000,
            descubrimiento: 1887,
            descubridor: "John Bell Hatcher",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/37/Triceratops_reconstruction_by_nobu_tamura.jpg/800px-Triceratops_reconstruction_by_nobu_tamura.jpg",
            descripcion: "Dinosaurio con tres cuernos distintivos y un gran volante óseo.",
            caracteristicas: ["Tres cuernos faciales", "Volante óseo protector", "Pico córneo", "Dientes batería"]
        },
        {
            id: 3,
            nombre: "Velociraptor",
            nombreCientifico: "Velociraptor mongoliensis",
            periodo: "cretacico",
            dieta: "carnivoro",
            longitud: 2,
            altura: 0.5,
            peso: 15,
            descubrimiento: 1923,
            descubridor: "Henry Fairfield Osborn",
            habitat: "Asia",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Velociraptor_mongoliensis_by_fred_wierum.jpg/800px-Velociraptor_mongoliensis_by_fred_wierum.jpg",
            descripcion: "Depredador pequeño pero extremadamente ágil e inteligente.",
            caracteristicas: ["Garra retráctil", "Inteligencia superior", "Plumas", "Caza en grupo"]
        },
        {
            id: 4,
            nombre: "Stegosaurus",
            nombreCientifico: "Stegosaurus armatus",
            periodo: "jurassico",
            dieta: "herbivoro",
            longitud: 9,
            altura: 4,
            peso: 5000,
            descubrimiento: 1877,
            descubridor: "Othniel Charles Marsh",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Stegosaurus_skeleton_AMNH.jpg/800px-Stegosaurus_skeleton_AMNH.jpg",
            descripcion: "Conocido por las placas óseas en su espalda y púas en la cola.",
            caracteristicas: ["Placas dorsales", "Púas tail", "Cerebro pequeño", "Estómago doble"]
        },
        {
            id: 5,
            nombre: "Brachiosaurus",
            nombreCientifico: "Brachiosaurus altithorax",
            periodo: "jurassico",
            dieta: "herbivoro",
            longitud: 25,
            altura: 12,
            peso: 56000,
            descubrimiento: 1903,
            descubridor: "Elmer S. Riggs",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Brachiosaurus_altithorax_skeletal_mount.jpg/800px-Brachiosaurus_altithorax_skeletal_mount.jpg",
            descripcion: "Uno de los dinosaurios más altos con cuello extremadamente largo.",
            caracteristicas: ["Cuello largo", "Piernas delanteras más largas", "Cabeza pequeña", "Corazón enorme"]
        },
        {
            id: 6,
            nombre: "Ankylosaurus",
            nombreCientifico: "Ankylosaurus magniventris",
            periodo: "cretacico",
            dieta: "herbivoro",
            longitud: 6.25,
            altura: 1.7,
            peso: 6000,
            descubrimiento: 1908,
            descubridor: "Barnum Brown",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Ankylosaurus_magniventris_by_fred_wierum.jpg/800px-Ankylosaurus_magniventris_by_fred_wierum.jpg",
            descripcion: "Dinosaurio acorazado con un garrote óseo en la cola.",
            caracteristicas: ["Armadura ósea", "Garrote tail", "Pico córneo", "Cuerpo bajo"]
        },
        {
            id: 7,
            nombre: "Pteranodon",
            nombreCientifico: "Pteranodon longiceps",
            periodo: "cretacico",
            dieta: "carnivoro",
            longitud: 7,
            altura: 1.8,
            peso: 20,
            descubrimiento: 1876,
            descubridor: "Othniel Charles Marsh",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Pteranodon_longiceps_by_fred_wierum.jpg/800px-Pteranodon_longiceps_by_fred_wierum.jpg",
            descripcion: "Reptil volador con una enorme envergadura de alas.",
            caracteristicas: ["Envergadura de 7m", "Cresta ósea", "Sin dientes", "Pico puntiagudo"]
        },
        {
            id: 8,
            nombre: "Diplodocus",
            nombreCientifico: "Diplodocus carnegii",
            periodo: "jurassico",
            dieta: "herbivoro",
            longitud: 35,
            altura: 8,
            peso: 15000,
            descubrimiento: 1878,
            descubridor: "Samuel Wendell Williston",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Diplodocus_carnegiei_skeletal_mount.jpg/800px-Diplodocus_carnegiei_skeletal_mount.jpg",
            descripcion: "Dinosaurio saurópodo con el cuello y cola extremadamente largos.",
            caracteristicas: ["Cuello de 8m", "Cola de 14m", "Dientes en forma de lápiz", "Patas columnares"]
        },
        {
            id: 9,
            nombre: "Spinosaurus",
            nombreCientifico: "Spinosaurus aegyptiacus",
            periodo: "cretacico",
            dieta: "carnivoro",
            longitud: 15,
            altura: 4.5,
            peso: 7000,
            descubrimiento: 1912,
            descubridor: "Ernst Stromer",
            habitat: "África",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Spinosaurus_aegyptiacus_by_fred_wierum.jpg/800px-Spinosaurus_aegyptiacus_by_fred_wierum.jpg",
            descripcion: "Dinosaurio depredador con una vela distintiva en la espalda.",
            caracteristicas: ["Vela dorsal", "Natación adaptada", "Dientes cónicos", "Cuerpo semiacuático"]
        },
        {
            id: 10,
            nombre: "Allosaurus",
            nombreCientifico: "Allosaurus fragilis",
            periodo: "jurassico",
            dieta: "carnivoro",
            longitud: 8.5,
            altura: 3,
            peso: 2300,
            descubrimiento: 1877,
            descubridor: "Othniel Charles Marsh",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Allosaurus_fragilis_by_fred_wierum.jpg/800px-Allosaurus_fragilis_by_fred_wierum.jpg",
            descripcion: "Depredador bípedo con cresta sobre los ojos.",
            caracteristicas: ["Crestas óseas", "Tientes serrados", "Brazos fuertes", "Visión excelente"]
        },
        {
            id: 11,
            nombre: "Iguanodon",
            nombreCientifico: "Iguanodon bernissartensis",
            periodo: "cretacico",
            dieta: "herbivoro",
            longitud: 10,
            altura: 4,
            peso: 4500,
            descubrimiento: 1822,
            descubridor: "Gideon Mantell",
            habitat: "Europa",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Iguanodon_bernissartensis_by_fred_wierum.jpg/800px-Iguanodon_bernissartensis_by_fred_wierum.jpg",
            descripcion: "Uno de los primeros dinosaurios descubiertos con pulgar en forma de púa.",
            caracteristicas: ["Pulgar espinoso", "Pico córneo", "Postura bípeda/cuadrúpeda", "Dientes molares"]
        },
        {
            id: 12,
            nombre: "Compsognathus",
            nombreCientifico: "Compsognathus longipes",
            periodo: "jurassico",
            dieta: "carnivoro",
            longitud: 1,
            altura: 0.3,
            peso: 3,
            descubrimiento: 1859,
            descubridor: "Joseph Oberndorfer",
            habitat: "Europa",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Compsognathus_longipes_by_fred_wierum.jpg/800px-Compsognathus_longipes_by_fred_wierum.jpg",
            descripcion: "Uno de los dinosaurios más pequeños conocidos.",
            caracteristicas: ["Tamaño diminuto", "Velocidad extrema", "Dientes afilados", "Agilidad superior"]
        },
        {
            id: 13,
            nombre: "Parasaurolophus",
            nombreCientifico: "Parasaurolophus walkeri",
            periodo: "cretacico",
            dieta: "herbivoro",
            longitud: 10,
            altura: 3,
            peso: 3500,
            descubrimiento: 1922,
            descubridor: "Charles H. Sternberg",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Parasaurolophus_walkeri_by_fred_wierum.jpg/800px-Parasaurolophus_walkeri_by_fred_wierum.jpg",
            descripcion: "Hadrosáurido con una cresta tubular distintiva.",
            caracteristicas: ["Cresta tubular", "Comunicación sonora", "Pico plano", "Postura bípeda"]
        },
        {
            id: 14,
            nombre: "Carnotaurus",
            nombreCientifico: "Carnotaurus sastrei",
            periodo: "cretacico",
            dieta: "carnivoro",
            longitud: 7.5,
            altura: 3,
            peso: 2000,
            descubrimiento: 1985,
            descubridor: "José F. Bonaparte",
            habitat: "Sudamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Carnotaurus_sastrei_by_fred_wierum.jpg/800px-Carnotaurus_sastrei_by_fred_wierum.jpg",
            descripcion: "Depredador con dos cuernos pequeños sobre los ojos.",
            caracteristicas: ["Cuernos supraorbitales", "Brazos atrofiados", "Velocidad extrema", "Piel escamosa"]
        },
        {
            id: 15,
            nombre: "Apatosaurus",
            nombreCientifico: "Apatosaurus ajax",
            periodo: "jurassico",
            dieta: "herbivoro",
            longitud: 23,
            altura: 4.5,
            peso: 23000,
            descubrimiento: 1877,
            descubridor: "Othniel Charles Marsh",
            habitat: "Norteamérica",
            imagen: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Apatosaurus_ajax_by_fred_wierum.jpg/800px-Apatosaurus_ajax_by_fred_wierum.jpg",
            descripcion: "Saurópodo masivo con cuello y cola largos.",
            caracteristicas: ["Cuello extremadamente largo", "Cola látigo", "Patas gruesas", "Dientes espatulados"]
        }
    ];

    let dinosauriosFiltrados = [...dinosaurios];
    let ordenActual = 'nombre';

    // Función para renderizar las tarjetas de dinosaurios
    function renderizarDinosaurios(dinos = dinosauriosFiltrados) {
        const container = document.getElementById('dinosaurios-container');
        container.innerHTML = '';

        dinos.forEach(dino => {
            const card = document.createElement('div');
            card.className = 'dino-card';
            card.innerHTML = `
                <div class="dino-imagen-container">
                    <img src="${dino.imagen}" alt="${dino.nombre}" class="dino-imagen" loading="lazy">
                    <div class="dino-imagen-overlay">
                        <span class="dino-periodo periodo-${dino.periodo}">${formatearPeriodo(dino.periodo)}</span>
                        <span class="dino-dieta dieta-${dino.dieta}">${formatearDieta(dino.dieta)}</span>
                    </div>
                </div>
                <div class="dino-content">
                    <h3>${dino.nombre}</h3>
                    <div class="dino-info">
                        <p><strong>Nombre científico:</strong> <em>${dino.nombreCientifico}</em></p>
                        <p><strong>Longitud:</strong> ${dino.longitud} metros</p>
                        <p><strong>Peso:</strong> ${dino.peso.toLocaleString()} kg</p>
                        <p><strong>Descubierto:</strong> ${dino.descubrimiento} por ${dino.descubridor}</p>
                        <p><strong>Hábitat:</strong> ${dino.habitat}</p>
                    </div>
                    <p style="margin-top: 10px; font-style: italic; color: var(--color-texto-claro);">${dino.descripcion}</p>
                </div>
            `;
            
            card.addEventListener('click', () => mostrarModalDetalles(dino));
            container.appendChild(card);
        });

        actualizarEstadisticas();
    }

    // Función para formatear el período
    function formatearPeriodo(periodo) {
        const periodos = {
            'triassico': 'Triásico',
            'jurassico': 'Jurásico',
            'cretacico': 'Cretácico'
        };
        return periodos[periodo] || periodo;
    }

    // Función para formatear la dieta
    function formatearDieta(dieta) {
        const dietas = {
            'herbivoro': 'Herbívoro',
            'carnivoro': 'Carnívoro',
            'omnivoro': 'Omnívoro'
        };
        return dietas[dieta] || dieta;
    }

    // Función para mostrar modal con detalles completos
    function mostrarModalDetalles(dino) {
        const modalExistente = document.querySelector('.modal');
        if (modalExistente) {
            modalExistente.remove();
        }

        const modal = document.createElement('div');
        modal.className = 'modal';
        modal.innerHTML = `
            <div class="modal-contenido">
                <span class="cerrar-modal">&times;</span>
                <div class="modal-imagen-container">
                    <img src="${dino.imagen}" alt="${dino.nombre}" class="modal-imagen">
                    <div class="modal-imagen-info">
                        <h2>${dino.nombre}</h2>
                        <p><strong>Nombre científico:</strong> <em>${dino.nombreCientifico}</em></p>
                        <p><strong>Período:</strong> <span class="dino-periodo periodo-${dino.periodo}">${formatearPeriodo(dino.periodo)}</span></p>
                        <p><strong>Dieta:</strong> <span class="dino-dieta dieta-${dino.dieta}">${formatearDieta(dino.dieta)}</span></p>
                    </div>
                </div>
                <hr style="margin: 20px 0;">
                <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin: 20px 0;">
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <h4 style="color: var(--color-primario); margin-bottom: 5px;">Longitud</h4>
                        <p style="font-size: 1.5em; font-weight: bold;">${dino.longitud} m</p>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <h4 style="color: var(--color-primario); margin-bottom: 5px;">Altura</h4>
                        <p style="font-size: 1.5em; font-weight: bold;">${dino.altura} m</p>
                    </div>
                    <div style="text-align: center; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                        <h4 style="color: var(--color-primario); margin-bottom: 5px;">Peso</h4>
                        <p style="font-size: 1.5em; font-weight: bold;">${(dino.peso/1000).toFixed(1)} ton</p>
                    </div>
                </div>
                <div style="margin: 20px 0;">
                    <h4 style="color: var(--color-secundario); margin-bottom: 10px;">Descripción</h4>
                    <p style="line-height: 1.6;">${dino.descripcion}</p>
                </div>
                <div style="margin: 20px 0;">
                    <h4 style="color: var(--color-secundario); margin-bottom: 10px;">Características principales</h4>
                    <ul style="list-style: none; padding: 0;">
                        ${dino.caracteristicas.map(carac => `<li style="margin: 8px 0; padding-left: 20px; position: relative;">🦕 ${carac}</li>`).join('')}
                    </ul>
                </div>
                <div style="margin: 20px 0; padding: 15px; background: #f8f9fa; border-radius: 8px;">
                    <h4 style="color: var(--color-secundario); margin-bottom: 10px;">Información del descubrimiento</h4>
                    <p><strong>Año:</strong> ${dino.descubrimiento}</p>
                    <p><strong>Descubridor:</strong> ${dino.descubridor}</p>
                    <p><strong>Hábitat:</strong> ${dino.habitat}</p>
                </div>
            </div>
        `;
        
        document.body.appendChild(modal);
        modal.style.display = 'block';
        
        // Cerrar modal
        modal.querySelector('.cerrar-modal').addEventListener('click', () => {
            modal.remove();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.remove();
            }
        });
    }

    // Función para actualizar estadísticas
    function actualizarEstadisticas() {
        const totalEspecies = dinosauriosFiltrados.length;
        document.getElementById('total-especies').textContent = totalEspecies;

        // Período más representado
        const periodos = dinosauriosFiltrados.reduce((acc, dino) => {
            acc[dino.periodo] = (acc[dino.periodo] || 0) + 1;
            return acc;
        }, {});
        const periodoPopular = Object.keys(periodos).reduce((a, b) => periodos[a] > periodos[b] ? a : b, '');
        document.getElementById('periodo-popular').textContent = formatearPeriodo(periodoPopular);

        // Dinosaurio más grande (por longitud)
        const dinoGrande = dinosauriosFiltrados.reduce((max, dino) => 
            dino.longitud > max.longitud ? dino : max, dinosauriosFiltrados[0]);
        document.getElementById('dino-grande').textContent = dinoGrande ? dinoGrande.nombre : '-';

        // Primer descubierto
        const primerDescubierto = [...dinosauriosFiltrados].sort((a, b) => a.descubrimiento - b.descubrimiento)[0];
        document.getElementById('primer-descubierto').textContent = primerDescubierto ? 
            `${primerDescubierto.nombre} (${primerDescubierto.descubrimiento})` : '-';
    }

    // Función de búsqueda
    function buscarDinosaurios(termino) {
        const terminoLower = termino.toLowerCase();
        dinosauriosFiltrados = dinosaurios.filter(dino => 
            dino.nombre.toLowerCase().includes(terminoLower) ||
            dino.nombreCientifico.toLowerCase().includes(terminoLower) ||
            dino.descripcion.toLowerCase().includes(terminoLower) ||
            dino.habitat.toLowerCase().includes(terminoLower)
        );
        renderizarDinosaurios();
    }

    // Función de filtrado
    function filtrarDinosaurios() {
        const periodo = document.getElementById('filtro-periodo').value;
        const dieta = document.getElementById('filtro-dieta').value;
        
        dinosauriosFiltrados = dinosaurios.filter(dino => {
            const coincidePeriodo = !periodo || dino.periodo === periodo;
            const coincideDieta = !dieta || dino.dieta === dieta;
            return coincidePeriodo && coincideDieta;
        });
        
        renderizarDinosaurios();
    }

    // Función de ordenamiento
    function ordenarDinosaurios() {
        const criterios = ['nombre', 'longitud', 'peso', 'descubrimiento'];
        const indiceActual = criterios.indexOf(ordenActual);
        ordenActual = criterios[(indiceActual + 1) % criterios.length];
        
        dinosauriosFiltrados.sort((a, b) => {
            if (ordenActual === 'nombre') {
                return a.nombre.localeCompare(b.nombre);
            } else if (ordenActual === 'longitud') {
                return b.longitud - a.longitud;
            } else if (ordenActual === 'peso') {
                return b.peso - a.peso;
            } else if (ordenActual === 'descubrimiento') {
                return a.descubrimiento - b.descubrimiento;
            }
        });
        
        renderizarDinosaurios();
        
        // Actualizar texto del botón
        const btnOrdenar = document.getElementById('btn-ordenar');
        const etiquetas = {
            'nombre': '📊 Ordenar por Nombre',
            'longitud': '📊 Ordenar por Longitud',
            'peso': '📊 Ordenar por Peso',
            'descubrimiento': '📊 Ordenar por Descubrimiento'
        };
        btnOrdenar.textContent = etiquetas[ordenActual];
    }

    // Quiz de Dinosaurios
    let currentQuestion = 0;
    let score = 0;
    let selectedAnswer = null;
    let quizActive = false;

    const quizQuestions = [
        {
            question: "¿Cuál era el dinosaurio más grande que jamás existió?",
            options: ["Tyrannosaurus Rex", "Argentinosaurus", "Brachiosaurus", "Spinosaurus"],
            correct: 1
        },
        {
            question: "¿En qué período vivió el Tyrannosaurus Rex?",
            options: ["Triásico", "Jurásico", "Cretácico", "Pérmico"],
            correct: 2
        },
        {
            question: "¿Qué dinosaurio tenía tres cuernos faciales distintivos?",
            options: ["Stegosaurus", "Triceratops", "Ankylosaurus", "Pteranodon"],
            correct: 1
        },
        {
            question: "¿Cuál era la dieta del Velociraptor?",
            options: ["Herbívoro", "Carnívoro", "Omnívoro", "Piscívoro"],
            correct: 1
        },
        {
            question: "¿Qué dinosaurio es conocido por sus placas óseas en la espalda?",
            options: ["Allosaurus", "Stegosaurus", "Iguanodon", "Carnotaurus"],
            correct: 1
        },
        {
            question: "¿Cuál era el dinosaurio volador más grande?",
            options: ["Pteranodon", "Velociraptor", "Compsognathus", "Parasaurolophus"],
            correct: 0
        },
        {
            question: "¿Qué dinosaurio tenía una vela distintiva en la espalda?",
            options: ["Tyrannosaurus Rex", "Spinosaurus", "Diplodocus", "Apatosaurus"],
            correct: 1
        },
        {
            question: "¿Cuál era el dinosaurio más pequeño conocido?",
            options: ["Velociraptor", "Compsognathus", "Parasaurolophus", "Iguanodon"],
            correct: 1
        },
        {
            question: "¿Qué dinosaurio tenía un garrote óseo en la cola?",
            options: ["Stegosaurus", "Triceratops", "Ankylosaurus", "Brachiosaurus"],
            correct: 2
        },
        {
            question: "¿Cuál era el dinosaurio más largo?",
            options: ["Tyrannosaurus Rex", "Brachiosaurus", "Diplodocus", "Spinosaurus"],
            correct: 2
        }
    ];

    function inicializarQuiz() {
        const startBtn = document.getElementById('start-quiz');
        const restartBtn = document.getElementById('restart-quiz');
        
        startBtn.addEventListener('click', comenzarQuiz);
        restartBtn.addEventListener('click', reiniciarQuiz);
    }

    function comenzarQuiz() {
        currentQuestion = 0;
        score = 0;
        quizActive = true;
        
        document.getElementById('quiz-content').style.display = 'block';
        document.getElementById('quiz-result').style.display = 'none';
        
        mostrarPregunta();
        actualizarProgreso();
    }

    function mostrarPregunta() {
        if (currentQuestion >= quizQuestions.length) {
            mostrarResultados();
            return;
        }

        const question = quizQuestions[currentQuestion];
        const quizContent = document.getElementById('quiz-content');
        
        quizContent.innerHTML = `
            <div class="question-container">
                <div class="question-text">${currentQuestion + 1}. ${question.question}</div>
                <div class="options-container">
                    ${question.options.map((option, index) => `
                        <button class="option-button" data-index="${index}" onclick="seleccionarRespuesta(${index})">
                            ${option}
                        </button>
                    `).join('')}
                </div>
                <div class="quiz-navigation">
                    <button class="btn-quiz" onclick="verificarRespuesta()" id="verify-btn">Verificar Respuesta</button>
                    <button class="btn-quiz" onclick="siguientePregunta()" id="next-btn" style="display: none;">Siguiente Pregunta</button>
                </div>
            </div>
        `;
        
        selectedAnswer = null;
        actualizarProgreso();
    }

    function seleccionarRespuesta(index) {
        selectedAnswer = index;
        
        // Actualizar estado visual de los botones
        const options = document.querySelectorAll('.option-button');
        options.forEach((option, i) => {
            option.classList.remove('selected');
            if (i === index) {
                option.classList.add('selected');
            }
        });
    }

    function verificarRespuesta() {
        if (selectedAnswer === null) {
            alert('Por favor selecciona una respuesta');
            return;
        }

        const question = quizQuestions[currentQuestion];
        const options = document.querySelectorAll('.option-button');
        const verifyBtn = document.getElementById('verify-btn');
        const nextBtn = document.getElementById('next-btn');
        
        // Mostrar respuestas correctas e incorrectas
        options.forEach((option, index) => {
            option.style.pointerEvents = 'none';
            if (index === question.correct) {
                option.classList.add('correct');
            } else if (index === selectedAnswer && index !== question.correct) {
                option.classList.add('incorrect');
            }
        });

        // Actualizar puntuación
        if (selectedAnswer === question.correct) {
            score++;
            document.getElementById('score').textContent = score;
        }

        // Cambiar botones
        verifyBtn.style.display = 'none';
        nextBtn.style.display = 'block';
    }

    function siguientePregunta() {
        currentQuestion++;
        mostrarPregunta();
    }

    function actualizarProgreso() {
        const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
        document.getElementById('progress-fill').style.width = progress + '%';
        document.getElementById('quiz-counter').textContent = `Pregunta ${currentQuestion + 1} de ${quizQuestions.length}`;
    }

    function mostrarResultados() {
        quizActive = false;
        const percentage = (score / quizQuestions.length) * 100;
        
        document.getElementById('quiz-content').style.display = 'none';
        document.getElementById('quiz-result').style.display = 'block';
        
        document.getElementById('correct-answers').textContent = score;
        document.getElementById('percentage').textContent = percentage.toFixed(1) + '%';
        
        const resultMessage = document.getElementById('result-message');
        let message = '';
        let messageClass = '';
        
        if (percentage >= 90) {
            message = '🏆 ¡Excelente! Eres un verdadero experto en dinosaurios';
            messageClass = 'excellent';
        } else if (percentage >= 70) {
            message = '🌟 ¡Muy bien! Tienes un gran conocimiento sobre dinosaurios';
            messageClass = 'good';
        } else if (percentage >= 50) {
            message = '👍 ¡Bien! Sigue aprendiendo sobre dinosaurios';
            messageClass = 'fair';
        } else {
            message = '📚 ¡Sigue practicando! El mundo de los dinosaurios es fascinante';
            messageClass = 'poor';
        }
        
        resultMessage.textContent = message;
        resultMessage.className = 'result-message ' + messageClass;
    }

    function reiniciarQuiz() {
        currentQuestion = 0;
        score = 0;
        selectedAnswer = null;
        quizActive = true;
        
        document.getElementById('score').textContent = '0';
        document.getElementById('quiz-content').style.display = 'block';
        document.getElementById('quiz-result').style.display = 'none';
        
        mostrarPregunta();
    }

    // Funcionalidad del mapa interactivo
    function inicializarMapa() {
        const continentes = document.querySelectorAll('.continente');
        const regionDinosaurios = document.getElementById('region-dinosaurios');
        
        continentes.forEach(continente => {
            continente.addEventListener('click', () => {
                const region = continente.dataset.region;
                mostrarDinosauriosPorRegion(region);
                
                // Actualizar estado visual
                continentes.forEach(c => c.classList.remove('active'));
                continente.classList.add('active');
            });
        });
    }

    function mostrarDinosauriosPorRegion(region) {
        const regionDinosaurios = document.getElementById('region-dinosaurios');
        const dinosauriosRegion = dinosaurios.filter(dino => {
            const habitat = dino.habitat.toLowerCase();
            switch(region) {
                case 'norteamerica':
                    return habitat.includes('norteamérica') || habitat.includes('america del norte');
                case 'sudamerica':
                    return habitat.includes('sudamérica') || habitat.includes('america del sur');
                case 'europa':
                    return habitat.includes('europa');
                case 'asia':
                    return habitat.includes('asia');
                case 'africa':
                    return habitat.includes('áfrica') || habitat.includes('africa');
                default:
                    return false;
            }
        });

        if (dinosauriosRegion.length === 0) {
            regionDinosaurios.innerHTML = `
                <div class="info-mensaje">
                    <p>🔍 No se encontraron dinosaurios para esta región</p>
                    <p>Esta región puede no haber tenido dinosaurios conocidos o la información no está disponible en nuestra base de datos.</p>
                </div>
            `;
            return;
        }

        const regionNombres = {
            'norteamerica': 'Norteamérica',
            'sudamerica': 'Sudamérica',
            'europa': 'Europa',
            'asia': 'Asia',
            'africa': 'África'
        };

        regionDinosaurios.innerHTML = `
            <h4>🦕 Dinosaurios de ${regionNombres[region]}</h4>
            <p style="color: var(--color-texto-claro); margin-bottom: 15px;">
                Se encontraron ${dinosauriosRegion.length} especies en esta región
            </p>
            ${dinosauriosRegion.map(dino => `
                <div class="dinosaurio-region">
                    <h4>${dino.nombre}</h4>
                    <p><strong>Nombre científico:</strong> <em>${dino.nombreCientifico}</em></p>
                    <p><strong>Período:</strong> 
                        <span class="periodo-badge periodo-${dino.periodo}">${formatearPeriodo(dino.periodo)}</span>
                    </p>
                    <p><strong>Dieta:</strong> ${formatearDieta(dino.dieta)}</p>
                    <p><strong>Longitud:</strong> ${dino.longitud} metros</p>
                    <p><strong>Descubrimiento:</strong> ${dino.descubrimiento} por ${dino.descubridor}</p>
                    <p style="margin-top: 8px; font-style: italic; color: var(--color-texto-claro);">${dino.descripcion}</p>
                </div>
            `).join('')}
        `;
    }

    // Control de música
    let musicaReproduciendo = false;
    let audioElement;

    function inicializarMusica() {
        audioElement = document.getElementById('musica-fondo');
        const btnMusica = document.getElementById('btn-musica');
        const volumenSlider = document.getElementById('volumen');
        
        // Establecer volumen inicial
        audioElement.volume = volumenSlider.value / 100;
        
        // Control de reproducción/pausa
        btnMusica.addEventListener('click', () => {
            if (musicaReproduciendo) {
                audioElement.pause();
                btnMusica.textContent = '🎵 Música';
                btnMusica.classList.remove('playing');
            } else {
                audioElement.play();
                btnMusica.textContent = '⏸️ Pausar';
                btnMusica.classList.add('playing');
            }
            musicaReproduciendo = !musicaReproduciendo;
        });
        
        // Control de volumen
        volumenSlider.addEventListener('input', (e) => {
            audioElement.volume = e.target.value / 100;
        });
        
        // Manejar errores de carga de audio
        audioElement.addEventListener('error', () => {
            console.log('Error al cargar la música de Jurassic Park');
            btnMusica.textContent = '🎵 Música (Error)';
            btnMusica.style.opacity = '0.5';
        });
        
        // Actualizar botón cuando la música termina
        audioElement.addEventListener('ended', () => {
            musicaReproduciendo = false;
            btnMusica.textContent = '🎵 Música';
            btnMusica.classList.remove('playing');
        });
    }

    // Event listeners
    document.getElementById('buscador').addEventListener('input', (e) => {
        buscarDinosaurios(e.target.value);
    });

    document.getElementById('filtro-periodo').addEventListener('change', filtrarDinosaurios);
    document.getElementById('filtro-dieta').addEventListener('change', filtrarDinosaurios);
    document.getElementById('btn-ordenar').addEventListener('click', ordenarDinosaurios);

    // Inicializar la página
    renderizarDinosaurios();
    inicializarMapa();
    inicializarQuiz();
    inicializarMusica();

    // Agregar efectos de animación al cargar la página
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease-in';
            }
        });
    });

    // Observar las tarjetas cuando se creen
    setTimeout(() => {
        document.querySelectorAll('.dino-card').forEach(card => {
            observer.observe(card);
        });
    }, 100);

    console.log('🦕 Mundo de los Dinosaurios - Funcionalidades cargadas exitosamente!');
});
