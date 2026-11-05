// ============================================================
// GUIA INTERATIVO DA FEIRA DE CIÊNCIAS 2026
// Instituto Educacional Missão Paz
// ============================================================

// Imagem fallback para resiliência contra falhas de rede/links (S-1)
const IMG_FALLBACK = "data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%230f172a' width='600' height='400'/%3E%3Ctext fill='%2338bdf8' font-family='sans-serif' font-size='20' font-weight='bold' x='50%25' y='50%25' text-anchor='middle' dy='8'%3EImagem Indispon%C3%ADvel%3C/text%3E%3C/svg%3E";

// ============================================================
// DADOS DO SISTEMA (100% CONFORME COM A REGRA DE PRIVACIDADE)
// ============================================================

const imagens6Ano = Object.entries(
  import.meta.glob(
    './assets/Img-6ano/**/*.{avif,gif,jpg,jpeg,png,webp,AVIF,GIF,JPG,JPEG,PNG,WEBP}',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
)
  .sort(([a], [b]) => a.localeCompare(b, 'pt-BR', { numeric: true }))
  .map(([, url]) => url);


const imagens7Ano = Object.entries(
  import.meta.glob(
    './assets/Img-7ano/**/*.{avif,gif,jpg,jpeg,png,webp,AVIF,GIF,JPG,JPEG,PNG,WEBP}',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
)
  .sort(([a], [b]) => a.localeCompare(b, 'pt-BR', { numeric: true }))
  .map(([, url]) => url);

  
const imagens8Ano = Object.entries(
  import.meta.glob(
    './assets/Img-8ano/**/*.{avif,gif,jpg,jpeg,png,webp,AVIF,GIF,JPG,JPEG,PNG,WEBP}',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
)
  .sort(([a], [b]) => a.localeCompare(b, 'pt-BR', { numeric: true }))
  .map(([, url]) => url);


const imagens9Ano = Object.entries(
  import.meta.glob(
    './assets/Img-9ano/**/*.{avif,gif,jpg,jpeg,png,webp,AVIF,GIF,JPG,JPEG,PNG,WEBP}',
    {
      eager: true,
      query: '?url',
      import: 'default',
    }
  )
)
  .sort(([a], [b]) => a.localeCompare(b, 'pt-BR', { numeric: true }))
  .map(([, url]) => url);


const projetos = [
  {
    id: 1,
    titulo: 'Estação de Economia de Água com Sensores',
    subtema: 'Água: cada gota conta',
    turma: '6º Ano • Ensino Fundamental II',
    nivel: 'Ensino Fundamental II',
    odsNumero: 6,
    ods: 'ODS 6: Água Potável e Saneamento',
    categoria: 'ODS 6 • Recursos Hídricos',
    categoriaCor: { from: '#0284c7', to: '#06b6d4' },
    andar: '4º Andar',
    sala: 'Quadra do Sol',
    ordemVisita: 4,
    icone: '💧',
    descricao: 'Protótipo e maquete inteligente com sensor de nível de água (Arduino/Micro:bit), medição de consumo, alarme de desperdício e app móvel.',
    detalhes: 'Integrando todas as disciplinas da Base Nacional Comum Curricular, o projeto do 6º ano ataca o problema do desperdício de água unindo pesquisa comunitária e automação física. O protótipo monitora o volume em caixas d\'água e reservatórios através de sensores de nível, emitindo alertas visuais em LED e sonoros em caso de transbordamento ou vazamento contínuo, integrando dados em painel digital.',
    produtoFinal: 'Protótipo de sistema inteligente de economia de água (sensor + LED + simulação de caixa d\'água) com aplicativo integrado.',
    disciplinas: [
      { nome: 'Português / Inglês', icone: '✍️', funcao: 'Produção de textos informativos e campanhas de conscientização sobre preservação.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Cálculo de consumo hídrico residencial/escolar e elaboração de gráficos comparativos.' },
      { nome: 'Ciências', icone: '🔬', funcao: 'Ciclo da água, processos de tratamento, poluição hídrica e preservação de mananciais.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Mapeamento dos recursos hídricos do Brasil e do mundo, aquíferos e bacias hidrográficas.' },
      { nome: 'História', icone: '📜', funcao: 'Evolução histórica do saneamento básico desde as primeiras civilizações até os dias atuais.' },
      { nome: 'Artes', icone: '🎨', funcao: 'Instalações artísticas visuais representando a dinâmica dos rios e aquíferos.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Criação de maquete com sensor de nível de água (Arduino ou Micro:bit).' },
      { nome: 'Educação Física', icone: '⚽', funcao: 'Jogos cooperativos com dinâmicas sobre preservação ambiental e trabalho coletivo.' }
    ],
    materiais: ['Arduino / Micro:bit', 'Sensor de nível de água por contato', 'LEDs indicadores (Verde/Amarelo/Vermelho)', 'Buzzer alarme sonoro', 'Maquete de caixa d\'água', 'Display LCD'],
    resultados: 'Detecção imediata de variações de nível com alerta de transbordamento em menos de 2 segundos.',
    imagens: imagens6Ano,
    equipeQtd: 4,
    professor: 'Corpo Docente do 6º Ano'
  },
  {
    id: 2,
    titulo: 'EcoLab Digital & Reciclagem Criativa',
    subtema: 'Do lixo ao luxo: repensando o consumo',
    turma: '7º Ano • Ensino Fundamental II',
    nivel: 'Ensino Fundamental II',
    odsNumero: 12,
    ods: 'ODS 12: Consumo e Produção Responsáveis',
    categoria: 'ODS 12 • Consumo Responsável',
    categoriaCor: { from: '#10b981', to: '#059669' },
    andar: '4º Andar',
    sala: 'Quadra',
    ordemVisita: 5,
    icone: '♻️',
    descricao: 'Site educativo interativo sobre reciclagem e exposição de objetos úteis e artísticos transformados a partir de resíduos e sucata.',
    detalhes: 'O 7º ano investigou o ciclo de vida dos produtos de consumo e a cadeia de descarte. Os estudantes desenvolveram a plataforma "EcoLab Digital" – um site interativo de conscientização ambiental – além de uma exposição física de upcycling que transforma materiais recicláveis (plásticos, papelão, metais) em peças de design funcional e utilitários cotidianos.',
    produtoFinal: '"EcoLab Digital" – site interativo educativo + exposição de produtos reciclados e de upcycling.',
    disciplinas: [
      { nome: 'Português / Inglês', icone: '✍️', funcao: 'Slogans, campanhas publicitárias ecológicas e redação de textos argumentativos.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Quantificação de resíduos da escola; cálculo de porcentagens e gráficos comparativos.' },
      { nome: 'Ciências', icone: '🔬', funcao: 'Química da reciclagem, compostagem de matéria orgânica e tempo de decomposição.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Cadeia produtiva global, logística reversa e impactos da extração de matéria-prima.' },
      { nome: 'História', icone: '📜', funcao: 'Revolução Industrial, consumo em massa e o surgimento da cultura do descarte.' },
      { nome: 'Artes', icone: '🎨', funcao: 'Criação de objetos utilitários, brinquedos e artefatos decorativos com materiais recicláveis.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Desenvolvimento do site educativo "EcoLab Digital" com dicas e jogos ecológicos.' },
      { nome: 'Educação Física', icone: '⚽', funcao: 'Gincana ecológica com provas cooperativas de agilidade e coleta seletiva.' }
    ],
    materiais: ['Portal Web EcoLab Digital', 'Resíduos plásticos PET e tampinhas', 'Papelão e embalagens longa vida', 'Composteira didática', 'Tintas ecológicas'],
    resultados: 'Mapeamento de 100% dos resíduos escolares e criação de mais de 25 artefatos utilitários reaproveitados.',
    imagens: imagens7Ano,
    equipeQtd: 4,
    professor: 'Corpo Docente do 7º Ano'
  },
  {
    id: 3,
    titulo: 'Estação Climática Sustentável',
    subtema: 'Planeta em alerta: soluções para o clima',
    turma: '8º Ano • Ensino Fundamental II',
    nivel: 'Ensino Fundamental II',
    odsNumero: 13,
    ods: 'ODS 13: Ação Contra a Mudança Global do Clima',
    categoria: 'ODS 13 • Ação Climática',
    categoriaCor: { from: '#0ea5e9', to: '#6366f1' },
    andar: '3º Andar',
    sala: 'Local a confirmar',
    ordemVisita: 3,
    icone: '🌦️',
    descricao: 'Miniestação meteorológica escolar equipada com sensores IoT de temperatura, umidade e luminosidade, transmitindo dados em tempo real.',
    detalhes: 'O 8º ano traz a ciência meteorológica e a telemetria ambiental para a rotina da escola. Com sensores calibrados e conectados a microcontroladores, a estação coleta parâmetros climáticos locais em tempo contínuo, transmitindo-os para um painel digital escolar e servindo de base para debates sobre acordos climáticos e redução de emissões.',
    produtoFinal: 'Estação Climática Sustentável com sensores IoT e painel de dados em tempo real exibido no mural digital.',
    disciplinas: [
      { nome: 'Português / Inglês', icone: '✍️', funcao: 'Artigos de opinião sobre justiça climática e debates sobre os acordos da ONU.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Análise estatística de dados climáticos locais, médias históricas e projeções.' },
      { nome: 'Ciências', icone: '🔬', funcao: 'Efeito estufa, dinâmica atmosférica, gases poluentes e energias renováveis.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Climas mundiais, biomas em risco, regimes de chuva e prevenção de desastres.' },
      { nome: 'História', icone: '📜', funcao: 'Evolução das Conferências Ambientais (Eco-92, Quioto e Acordo de Paris).' },
      { nome: 'Artes', icone: '🎨', funcao: 'Painéis infográficos e maquetes cenográficas representando biomas sob estresse térmico.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Montagem da miniestação meteorológica (sensores DHT22, LDR e painel digital).' },
      { nome: 'Educação Física', icone: '⚽', funcao: 'Atividades ao ar livre monitorando qualidade do ar, hidratação e incidência de radiação UV.' }
    ],
    materiais: ['ESP32 com módulo Wi-Fi', 'Sensor DHT22 (temperatura e umidade)', 'Sensor LDR de luminosidade', 'Display OLED informativo', 'Dashboard web de telemetria'],
    resultados: 'Monitoramento ininterrupto 24/7 com atualização de dados a cada 10 segundos no mural digital.',
    imagens: imagens8Ano,
    equipeQtd: 4,
    professor: 'Corpo Docente do 8º Ano'
  },
  {
    id: 4,
    titulo: 'Cidade Inteligente Sustentável',
    subtema: 'A cidade que queremos construir',
    turma: '9º Ano • Ensino Fundamental II',
    nivel: 'Ensino Fundamental II',
    odsNumero: 11,
    ods: 'ODS 11: Cidades e Comunidades Sustentáveis',
    categoria: 'ODS 11 • Cidades Sustentáveis',
    categoriaCor: { from: '#f59e0b', to: '#d97706' },
    andar: '2º Andar',
    sala: 'Local a confirmar',
    ordemVisita: 2,
    icone: '🏙️',
    descricao: 'Maquete arquitetônica interativa com energia solar, sensores de movimento, semáforo inteligente e modelagem 3D de bairros sustentáveis.',
    detalhes: 'O 9º ano idealizou e prototipou soluções para centros urbanos humanizados e ecológicos. A maquete interativa combina planejamento urbano, modelagem 3D digital (SketchUp e Tinkercad) e circuitos físicos com iluminação fotovoltaica adaptativa que acende conforme o fluxo detectado por sensores de movimento, além de semáforos que priorizam pedestres e transporte público.',
    produtoFinal: 'Maquete de "Cidade Inteligente Sustentável" com iluminação solar e sensores automatizados.',
    disciplinas: [
      { nome: 'Português / Inglês', icone: '✍️', funcao: 'Projetos de intervenção urbana e redação de cartas de reivindicação pública.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Cálculo de escalas arquitetônicas, proporções de áreas verdes e densidade demográfica.' },
      { nome: 'Ciências', icone: '🔬', funcao: 'Mobilidade limpa, matrizes energéticas não poluentes e controle de ilhas de calor.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Urbanização brasileira, desafios metropolitanos e ordenamento territorial.' },
      { nome: 'História', icone: '📜', funcao: 'Crescimento e evolução das cidades desde a Antiguidade até as megalópoles.' },
      { nome: 'Artes', icone: '🎨', funcao: 'Construção de maquetes arquitetônicas sustentáveis em escala com iluminação cenográfica.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Modelagem 3D de bairros sustentáveis (SketchUp, Tinkercad) e circuito de automação.' },
      { nome: 'Educação Física', icone: '⚽', funcao: 'Mobilidade ativa (ciclovias, caminhabilidade e ergonomia nas cidades modernas).' }
    ],
    materiais: ['Maquete em escala física', 'Placas solares fotovoltaicas mini', 'Sensores de presença infravermelhos (PIR)', 'Semáforos com LEDs e Arduino', 'Peças modeladas em 3D'],
    resultados: 'Simulação com 40% de redução no consumo de energia na iluminação pública através de automação responsiva.',
    imagens: imagens9Ano,
    equipeQtd: 4,
    professor: 'Corpo Docente do 9º Ano'
  },
  {
    id: 5,
    titulo: 'Horta Automatizada com Irrigação Inteligente',
    subtema: 'Do campo ao futuro: agricultura inteligente',
    turma: '1ª Série • Ensino Médio',
    nivel: 'Ensino Médio',
    odsNumero: 2,
    ods: 'ODS 2: Fome Zero e Agricultura Sustentável',
    categoria: 'ODS 2 • Agricultura Inteligente',
    categoriaCor: { from: '#10b981', to: '#14b8a6' },
    andar: '5º Andar',
    sala: 'Espaço Conviver',
    ordemVisita: 8,
    icone: '🌱',
    descricao: 'Sistema automatizado de irrigação acionado por sensores de umidade do solo com monitoramento remoto por aplicativo e controle de pH.',
    detalhes: 'Unindo a biologia vegetal, a química do solo e a robótica, a 1ª série do Ensino Médio concebeu um sistema agroecológico de precisão. Sensores higrômetros analisam a umidade da terra em tempo real; ao atingir o limiar crítico, relés acionam a microirrigação por gotejamento na dosagem exata, minimizando perdas e garantindo máxima eficiência nutritiva.',
    produtoFinal: 'Horta automatizada com irrigação inteligente acionada por sensores e monitoramento em tempo real por aplicativo.',
    disciplinas: [
      { nome: 'Português / Inglês', icone: '✍️', funcao: 'Relatórios técnicos de campo e entrevistas estruturadas com produtores agrícolas.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Medição de vazão de água, proporções de nutrientes e curvas de produtividade.' },
      { nome: 'Biologia', icone: '🔬', funcao: 'Microbiologia do solo, fisiologia radicular e princípios de agroecologia.' },
      { nome: 'Química', icone: '🧪', funcao: 'Formulação de fertilizantes naturais orgânicos e medição e correção do pH do solo.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Panorama da agricultura no Brasil e no mundo, agricultura familiar e segurança alimentar.' },
      { nome: 'História', icone: '📜', funcao: 'Evolução histórica das técnicas agrícolas (Revolução Neolítica, Verde e Agricultura 4.0).' },
      { nome: 'Artes', icone: '🎨', funcao: 'Representações visuais, infografia botânica e design dos canteiros escolares.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Sistema de irrigação automatizado com sensores de umidade (Arduino/ESP32 e relés).' },
      { nome: 'Educação Física', icone: '⚽', funcao: 'Alimentação saudável, valor nutricional de orgânicos frescos e desempenho físico.' }
    ],
    materiais: ['Sensores higrômetros de solo', 'Bomba d\'água submersível 5V/12V', 'Módulo relé acionador', 'Tubulação de microgotejamento', 'Sensor de pH do solo', 'App móvel de monitoramento'],
    resultados: 'Economia comprovada de mais de 60% de água comparada a sistemas convencionais de rega manual.',
    imagens: [
      'https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1581092921461-eab62e97a782?auto=format&fit=crop&q=80&w=1200'
    ],
    equipeQtd: 4,
    professor: 'Corpo Docente da 1ª Série EM'
  },
  {
    id: 6,
    titulo: 'Miniusina Solar Fotovoltaica',
    subtema: 'Energia que move o mundo',
    turma: '2ª Série • Ensino Médio',
    nivel: 'Ensino Médio',
    odsNumero: 7,
    ods: 'ODS 7: Energia Limpa e Acessível',
    categoria: 'ODS 7 • Energia Limpa',
    categoriaCor: { from: '#eab308', to: '#f97316' },
    andar: '4º Andar',
    sala: 'Quadra',
    ordemVisita: 6,
    icone: '⚡',
    descricao: 'Protótipo funcional de miniusina solar com painel fotovoltaico, controlador de carga e bateria, alimentando LEDs e pequenos motores.',
    detalhes: 'A 2ª série do Ensino Médio investigou as leis da física e termodinâmica que regem a conversão de luz em eletricidade limpa. A miniusina montada pelos alunos conta com células fotovoltaicas, sistema de regulação de carga, armazenamento em bateria e circuitos de distribuição, demonstrando na prática o papel vital da energia solar na descarbonização.',
    produtoFinal: 'Protótipo funcional de miniusina de energia solar para alimentar LEDs e pequenos motores demonstrativos.',
    disciplinas: [
      { nome: 'Português / Inglês', icone: '✍️', funcao: 'Artigos científicos de síntese e apresentações orais em formato de conferência.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Cálculo de consumo energético (kWh), dimensionamento de painéis e payback financeiro.' },
      { nome: 'Física', icone: '⚛️', funcao: 'Efeito fotovoltaico, leis de Ohm, rendimento de conversão e circuitos elétricos.' },
      { nome: 'Química', icone: '🧪', funcao: 'Combustíveis e reações químicas energéticas; eletroquímica das baterias de íon-lítio.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Matriz energética mundial e brasileira, potencial de irradiação solar no território.' },
      { nome: 'História', icone: '📜', funcao: 'As revoluções energéticas na história: do carvão mineral à transição renovável.' },
      { nome: 'Artes', icone: '🎨', funcao: 'Protótipos visuais e esculturas cinéticas ativadas pela energia solar gerada.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Miniusina solar com placa fotovoltaica, sensor de corrente, bateria e conversor.' },
      { nome: 'Educação Física', icone: '⚽', funcao: 'Conversão de energia biológica em trabalho mecânico e biomecânica do movimento.' }
    ],
    materiais: ['Painel solar fotovoltaico 20W', 'Controlador de carga PWM', 'Bateria selada estacionária 12V', 'Inversor/regulador de tensão', 'Fitas LED de alta eficiência', 'Motores elétricos DC'],
    resultados: 'Geração autônoma de até 20W capaz de alimentar iluminação e pequenos motores de forma 100% limpa.',
    imagens: [
      'https://images.unsplash.com/photo-1508514177221-188b1cf16f9e?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1558441719-8b489c63f7d2?auto=format&fit=crop&q=80&w=1200'
    ],
    equipeQtd: 4,
    professor: 'Corpo Docente da 2ª Série EM'
  },
  {
    id: 7,
    titulo: 'InovaPaz: Site sobre toda a feira de Ciencias',
    subtema: 'Inovar para transformar',
    turma: '3ª Série • Ensino Médio',
    nivel: 'Ensino Médio',
    odsNumero: 9,
    ods: 'ODS 9: Indústria e Inovação',
    categoria: 'ODS 9 • Indústria & Inovação',
    categoriaCor: { from: '#8b5cf6', to: '#ec4899' },
    andar: '1º Andar / Térreo',
    sala: 'Local a confirmar',
    ordemVisita: 1,
    icone: '📱',
    descricao: 'Sites real desenvolvido pelos alunos.',
    detalhes: 'Como culminância do Ensino Médio, a 3ª série assumiu o desafio de desenvolver produtos digitais reais para a comunidade.',
    produtoFinal: 'Site personalisado sobre a feira de ciências.',
    disciplinas: [
      { nome: 'Português / Inglês', icone: '✍️', funcao: 'Pitch de apresentação executivo, relatórios técnicos e manuais de usuário.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Modelagem matemática de algoritmos, lógica booleana e análise de métricas.' },
      { nome: 'Física', icone: '⚛️', funcao: 'Automação industrial, sensores ultrassônicos/infravermelhos e circuitos de potência.' },
      { nome: 'Química', icone: '🧪', funcao: 'Materiais semicondutores e sustentabilidade nos processos industriais.' },
      { nome: 'Biologia', icone: '🔬', funcao: 'Biotecnologia aplicada, biomimética e inovação inspirada na natureza.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Geografia da inovação global, centros de alta tecnologia e logística integrada.' },
      { nome: 'História', icone: '📜', funcao: 'As quatro Revoluções Industriais: da máquina a vapor à Inteligência Artificial.' },
      { nome: 'Artes', icone: '🎨', funcao: 'UI/UX Design, identidade visual dos aplicativos e prototipagem de telas no Figma.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Criação de aplicativos (Reciclagem e Água), site ODS e automação de controle de acesso.' },
      { nome: 'Educação Física', icone: '⚽', funcao: 'Ergonomia no ambiente digital, saúde postural e prevenção de LER/DORT.' }
    ],
    materiais: ['Ambiente de desenvolvimento web/mobile', 'Microcontrolador ESP32', 'Sensor ultrassônico HC-SR04', 'Servo motor SG90 de portão', 'Protótipo mecânico de acesso'],
    resultados: 'Lançamento de 3 ferramentas digitais completas e protótipo de automação de acesso com resposta em 0.2s.',
    imagens: [
      'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=1200'
    ],
    equipeQtd: 4,
    professor: 'Corpo Docente da 3ª Série EM'
  },
  {
    id: 8,
    titulo: 'Biodigestor Escolar: Biogás Sustentável',
    subtema: 'Transformando sobras orgânicas em energia limpa',
    turma: 'Ensino Médio • 1ª e 2ª Séries',
    nivel: 'Ensino Médio',
    odsNumero: 7,
    ods: 'ODS 7: Energia Limpa & ODS 12: Consumo Responsável',
    categoria: 'Destaque Inovador • Bioenergia',
    categoriaCor: { from: '#ef4444', to: '#f97316' },
    andar: '4º e 5º Andares',
    andares: ['4º Andar', '5º Andar'],
    sala: 'Local a confirmar',
    ordemVisita: 7,
    icone: '🔥',
    descricao: 'Grande destaque da Mostra: produção de biogás a partir de resíduos orgânicos da cantina escolar, com demonstração ao vivo da queima e biofertilização.',
    detalhes: 'Considerado um dos maiores destaques da Feira de Ciências, o biodigestor anaeróbico foi construído por alunos do Ensino Médio para reaproveitar restos de alimentos da cantina escolar. Bactérias metanogênicas realizam a fermentação biológica sem oxigênio, produzindo gás metano (biogás) capaz de acender uma chama demonstrativa ao vivo com segurança, além de fornecer biofertilizante líquido concentrado para a horta da escola.',
    produtoFinal: 'Biodigestor funcional com demonstração ao vivo da queima de chama limpa de biogás e geração de biofertilizante.',
    disciplinas: [
      { nome: 'Química', icone: '🧪', funcao: 'Digestão anaeróbica, purificação do biogás (filtragem de H2S) e estequiometria de combustão.' },
      { nome: 'Biologia', icone: '🔬', funcao: 'Microbiologia de bactérias metanogênicas e ciclo fechado de nutrientes orgânicos.' },
      { nome: 'Física', icone: '⚛️', funcao: 'Medição de pressão em manômetro, termodinâmica dos gases e sistema de escape com corta-chama.' },
      { nome: 'Matemática', icone: '📐', funcao: 'Relação entre quilos de restos alimentares coletados na cantina e litros de biogás gerado.' },
      { nome: 'Geografia', icone: '🌍', funcao: 'Impactos da bioenergia na redução das emissões de gases de efeito estufa e resíduos urbanos.' },
      { nome: 'História', icone: '📜', funcao: 'História do uso de biogás e desenvolvimento de tecnologias sustentáveis para comunidades.' },
      { nome: 'Tecnologia', icone: '💻', funcao: 'Instrumentação de controle de temperatura e monitoramento da pressão da câmara.' },
      { nome: 'Português / Oratória', icone: '✍️', funcao: 'Condução da demonstração científica ao vivo e protocolos de segurança pública.' }
    ],
    materiais: ['Bombona hermética com selo d\'água', 'Válvula de retenção e corta-chama de segurança', 'Manômetro de pressão de gás', 'Filtro purificador', 'Bico de Bunsen para chama demonstrativa', 'Sobras orgânicas da cantina'],
    resultados: 'Produção contínua de biogás com chama azulada estável e 5L semanais de biofertilizante orgânico de alto rendimento.',
    imagens: [
      'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=1200',
      'https://images.unsplash.com/photo-1508873696983-2df5703bc20d?auto=format&fit=crop&q=80&w=1200'
    ],
    equipeQtd: 4,
    professor: 'Coordenação de Ciências da Natureza'
  }
];

const predio = {
  quintoAndar: {
    id: 'quintoAndar',
    numero: '5',
    nome: '5º Andar',
    icone: '🤝',
    descricao: 'Espaço Conviver • 1ª Série do Ensino Médio • ODS 02 e 07',
    cor: '#eab308',
    salas: [
      { nome: 'Espaço Conviver', tipo: 'especial' },
      { nome: 'Local a confirmar', tipo: 'projeto' }
    ]
  },
  quartoAndar: {
    id: 'quartoAndar',
    numero: '4',
    nome: '4º Andar',
    icone: '🏀',
    descricao: '6º ano na Quadra do Sol • 7º ano e 2ª Série do Ensino Médio na quadra',
    cor: '#1685cf',
    salas: [
      { nome: 'Quadra do Sol', tipo: 'especial' },
      { nome: 'Quadra', tipo: 'especial' },
      { nome: 'Local a confirmar', tipo: 'projeto' }
    ]
  },
  terceiroAndar: {
    id: 'terceiroAndar',
    numero: '3',
    nome: '3º Andar',
    icone: '🌦️',
    descricao: '8º ano • ODS 13',
    cor: '#2fa650',
    salas: [{ nome: 'Local a confirmar', tipo: 'projeto' }]
  },
  segundoAndar: {
    id: 'segundoAndar',
    numero: '2',
    nome: '2º Andar',
    icone: '🏙️',
    descricao: '9º ano • ODS 11',
    cor: '#7b2cbf',
    salas: [{ nome: 'Local a confirmar', tipo: 'projeto' }]
  },
  primeiroAndar: {
    id: 'primeiroAndar',
    numero: '1',
    nome: '1º Andar / Térreo',
    icone: '📱',
    descricao: '3ª Série do Ensino Médio',
    cor: '#ed5b24',
    salas: [{ nome: 'Local a confirmar', tipo: 'projeto' }]
  }
};

function getProjectFloors(project) {
  return Array.isArray(project.andares) && project.andares.length
    ? project.andares
    : [project.andar];
}

function projectBelongsToFloor(project, floorName) {
  return getProjectFloors(project).includes(floorName);
}

function getProjectLocationLabel(project) {
  const floors = getProjectFloors(project);
  const floorLabel = floors.length > 1
    ? `${floors.map(floor => floor.replace('º Andar', 'º')).join(' e ')} Andares`
    : floors[0];
  return `${floorLabel} • ${project.sala || 'Local a confirmar'}`;
}

// ============================================================
// CONFIGURAÇÕES E ESTADO
// ============================================================

let currentScreen = 'home';
let currentProject = null;
let searchQuery = '';
let activeFilter = 'todos';
let activeAndarFilter = 'todos';
let activeSalaFilter = 'todos';
let isGuidedRoute = false;
let lightboxImages = [];
let lightboxIndex = 0;

const navStack = [];
let __skipNextNavPush = false;
let isHandlingHash = false;
let lastHandledHash = null;

const appDiv = document.getElementById('app');
const backBarContainer = document.getElementById('back-bar-container');
const toastContainer = document.getElementById('toast-container');
const modalContainer = document.getElementById('modal-container');

const navButtonsMobile = ['btn-home', 'btn-projetos', 'btn-mapa', 'btn-sobre'].map(id => document.getElementById(id));
const navButtonsDesktop = ['btn-home-desktop', 'btn-projetos-desktop', 'btn-mapa-desktop', 'btn-sobre-desktop'].map(id => document.getElementById(id));

// ============================================================
// SISTEMA DE NOTIFICAÇÕES (TOAST)
// ============================================================

function showToast(message, icon = '✨') {
  if (!toastContainer) return;
  const toast = document.createElement('div');
  toast.className = 'toast-item';
  toast.innerHTML = `
    <span class="text-lg">${icon}</span>
    <span>${message}</span>
  `;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('toast-out');
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ============================================================
// COMPARTILHAMENTO E QR CODE (F-6)
// ============================================================

function openShareModal(projetoId) {
  const proj = projetos.find(p => p.id === projetoId);
  if (!proj || !modalContainer) return;

  const url = `${window.location.origin}${window.location.pathname}#projeto/${proj.id}`;
  const isLightTheme = document.documentElement.dataset.theme === 'light';
  const qrBackground = isLightTheme ? 'ffffff' : '0f172a';
  const qrForeground = isLightTheme ? '0f172a' : '22d3ee';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(url)}&bgcolor=${qrBackground}&color=${qrForeground}&qzone=2`;

  modalContainer.innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target === this) closeModal()">
      <div class="glass-card max-w-md w-full p-6 md:p-8 relative text-center border border-white/20 shadow-2xl">
        <button onclick="closeModal()" class="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all" aria-label="Fechar modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>

        <div class="text-4xl mb-2">${proj.icone}</div>
        <h3 class="text-xl font-black text-white font-heading mb-1">${proj.titulo}</h3>
        <p class="text-xs text-slate-400 mb-5">Escaneie o QR Code ou compartilhe o link direto deste projeto</p>

        <div class="qr-code-frame p-4 bg-slate-900/90 rounded-2xl inline-block border border-escola-accent/30 shadow-inner mb-5">
          <img src="${qrUrl}" alt="QR Code para ${proj.titulo}" class="w-48 h-48 rounded-lg mx-auto" onerror="this.src='${IMG_FALLBACK}'" />
        </div>

        <div class="flex gap-2 mb-3">
          <input type="text" id="share-url-input" value="${url}" readonly class="input-base text-xs flex-1 select-all bg-white/5" />
          <button onclick="copyProjectLink('${url}')" class="btn-primary text-xs px-4 py-2 shrink-0">
            Copiar
          </button>
        </div>

        ${navigator.share ? `
          <button onclick="navigator.share({ title: '${proj.titulo}', text: '${proj.descricao}', url: '${url}' })" class="btn-secondary w-full justify-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/>
              <line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
            </svg>
            Compartilhar via Celular
          </button>
        ` : ''}
      </div>
    </div>
  `;
}

function openSiteShareModal() {
  if (!modalContainer) return;

  const url = new URL('/', window.location.href).href;
  const isLightTheme = document.documentElement.dataset.theme === 'light';
  const qrBackground = isLightTheme ? 'ffffff' : '0f172a';
  const qrForeground = isLightTheme ? '0f172a' : '22d3ee';
  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=240x240&data=${encodeURIComponent(url)}&bgcolor=${qrBackground}&color=${qrForeground}&qzone=2`;

  modalContainer.innerHTML = `
    <div class="modal-backdrop" onclick="if(event.target === this) closeModal()">
      <div class="glass-card max-w-md w-full p-6 md:p-8 relative text-center border border-white/20 shadow-2xl">
        <button onclick="closeModal()" class="absolute top-4 right-4 w-9 h-9 rounded-xl bg-white/10 hover:bg-white/20 flex items-center justify-center text-slate-300 hover:text-white transition-all" aria-label="Fechar modal">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
          </svg>
        </button>

        <div class="text-4xl mb-2">📲</div>
        <h3 class="text-xl font-black text-white font-heading mb-1">Compartilhe a página inicial</h3>
        <p class="text-xs text-slate-400 mb-5">Escaneie o QR Code ou copie o link para abrir o guia desde o início</p>

        <div class="qr-code-frame p-4 bg-slate-900/90 rounded-2xl inline-block border border-escola-accent/30 shadow-inner mb-5">
          <img src="${qrUrl}" alt="QR Code para abrir a página inicial da EXPO ODS FUTURO 2026" class="w-48 h-48 rounded-lg mx-auto" onerror="this.src='${IMG_FALLBACK}'" />
        </div>

        <div class="flex gap-2 mb-3">
          <input type="text" id="share-url-input" value="${url}" readonly class="input-base text-xs flex-1 select-all bg-white/5" />
          <button onclick="copyProjectLink('${url}', 'Link do site copiado!')" class="btn-primary text-xs px-4 py-2 shrink-0">
            Copiar
          </button>
        </div>

        ${navigator.share ? `
          <button onclick="navigator.share({ title: 'EXPO ODS FUTURO 2026', text: 'Conheça a Feira de Ciências 2026 do Instituto Educacional Missão Paz.', url: '${url}' })" class="btn-secondary w-full justify-center text-xs">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <circle cx="18" cy="5" r="3"/><circle cx="6" cy="12" r="3"/><circle cx="18" cy="19" r="3"/>
              <line x1="8.59" x2="15.42" y1="13.51" y2="17.49"/><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"/>
            </svg>
            Compartilhar via Celular
          </button>
        ` : ''}
      </div>
    </div>
  `;
}

function copyProjectLink(url, successMessage = 'Link do projeto copiado!') {
  navigator.clipboard.writeText(url).then(() => {
    showToast(successMessage, '📋');
  }).catch(() => {
    const input = document.getElementById('share-url-input');
    if (input) {
      input.select();
      document.execCommand('copy');
      showToast(successMessage, '📋');
    }
  });
}

function closeModal() {
  if (modalContainer) modalContainer.innerHTML = '';
}

// ============================================================
// ROTEAMENTO POR HASH (F-5)
// ============================================================

function syncHash(newHash) {
  if (isHandlingHash) return;
  if (window.location.hash !== newHash) {
    history.pushState(null, '', newHash);
  }
  lastHandledHash = newHash.replace(/^#/, '').trim();
}

function handleHashChange() {
  const hash = window.location.hash.replace(/^#/, '').trim();
  if (isHandlingHash || hash === lastHandledHash) return;
  lastHandledHash = hash;
  isHandlingHash = true;

  try {
    if (!hash || hash === 'home') {
      renderHome(false);
    } else if (hash.startsWith('projeto/')) {
      const id = parseInt(hash.replace('projeto/', ''), 10);
      if (id && projetos.some(p => p.id === id)) {
        renderProjetoDetalhes(id, false);
      } else {
        renderHome(false);
      }
    } else if (hash === 'projetos') {
      renderProjetos(false);
    } else if (hash.startsWith('mapa')) {
      const parts = hash.split('/');
      const andar = parts[1] ? decodeURIComponent(parts[1]) : null;
      const sala = parts[2] ? decodeURIComponent(parts[2]) : null;
      renderMapa(andar, sala, false);
    } else if (hash === 'sobre') {
      renderSobre(false);
    } else {
      renderHome(false);
    }
  } finally {
    isHandlingHash = false;
  }
}

window.addEventListener('hashchange', handleHashChange);
window.addEventListener('popstate', handleHashChange);

// ============================================================
// NAVEGAÇÃO E HISTÓRICO
// ============================================================

function updateActiveNav(screen) {
  const screens = ['home', 'projetos', 'mapa', 'sobre'];
  const idx = screens.indexOf(screen);

  navButtonsMobile.forEach((btn, i) => {
    if (btn) {
      if (i === idx) btn.classList.add('active-escola');
      else btn.classList.remove('active-escola');
    }
  });

  navButtonsDesktop.forEach((btn, i) => {
    if (btn) {
      if (i === idx) btn.classList.add('active-escola');
      else btn.classList.remove('active-escola');
    }
  });
}

function pushNav(entry) {
  if (__skipNextNavPush) {
    __skipNextNavPush = false;
    return;
  }
  navStack.push(entry);
  if (navStack.length > 50) navStack.shift();
  renderBackBar();
}

function renderBackBar() {
  if (!backBarContainer) return;
  const canGoBack = navStack.length > 1;
  if (!canGoBack) {
    backBarContainer.classList.add('hidden');
    backBarContainer.innerHTML = '';
    return;
  }
  const current = navStack[navStack.length - 1];
  const prev = navStack[navStack.length - 2];
  const label = (prev && prev.label) ? prev.label : 'Voltar';
  const currentLabel = (current && current.label) ? current.label : '';

  backBarContainer.classList.remove('hidden');
  backBarContainer.innerHTML = `
    <div class="flex items-center gap-3 flex-wrap glass-card px-3 py-2 md:px-4 md:py-2.5">
      <button onclick="window.goBack()" class="group inline-flex items-center gap-2 px-3 py-1.5 rounded-xl text-sm md:text-base font-semibold text-escola-accent hover:text-white hover:bg-escola-accent/10 transition-all duration-200 active:scale-95 shrink-0" aria-label="Voltar para a página anterior">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="transition-transform group-hover:-translate-x-0.5 md:w-5 md:h-5">
          <path d="m15 18-6-6 6-6"/>
        </svg>
        <span class="hidden sm:inline">${label}</span>
        <span class="sm:hidden">Voltar</span>
      </button>
      ${currentLabel ? `
        <div class="flex items-center gap-2 min-w-0 flex-1">
          <span class="w-px h-5 bg-white/10 shrink-0"></span>
          <span class="text-[11px] md:text-xs text-slate-400 font-medium uppercase tracking-wide shrink-0">Você está em:</span>
          <span class="text-xs md:text-sm text-slate-100 font-semibold truncate min-w-0">${currentLabel}</span>
        </div>
      ` : ''}
    </div>
  `;
}

function goBack() {
  if (navStack.length <= 1) {
    if (currentScreen !== 'home') { renderHome(); }
    return;
  }
  navStack.pop();
  const prev = navStack[navStack.length - 1];
  if (!prev) { renderHome(); return; }
  __skipNextNavPush = true;
  try {
    if (prev.type === 'projeto' && prev.id != null) {
      renderProjetoDetalhes(prev.id);
    } else if (prev.type === 'mapa-destaque') {
      renderMapa(prev.andar || null, prev.sala || null);
    } else if (prev.screen === 'home') { renderHome(); }
    else if (prev.screen === 'projetos') { renderProjetos(); }
    else if (prev.screen === 'mapa') { renderMapa(); }
    else if (prev.screen === 'sobre') { renderSobre(); }
    else { renderHome(); }
  } catch (e) {
    __skipNextNavPush = false;
    renderHome();
  }
  renderBackBar();
}

// Transição de tela suave com correção de scroll jump (UX-4)
function screenTransition(newHtml, onMounted = null) {
  if (!appDiv) return;
  appDiv.style.opacity = '0';
  appDiv.style.transform = 'translateY(8px)';
  appDiv.style.transition = 'all 0.2s cubic-bezier(0.16, 1, 0.3, 1)';

  setTimeout(() => {
    appDiv.innerHTML = newHtml;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    requestAnimationFrame(() => {
      appDiv.style.opacity = '1';
      appDiv.style.transform = 'translateY(0)';
      if (typeof onMounted === 'function') {
        onMounted();
      }
    });
  }, 160);
}

function getProjetosBySala(andarNome, salaNome) {
  return projetos.filter(p => projectBelongsToFloor(p, andarNome) && p.sala === salaNome);
}

// ============================================================
// PARTÍCULAS DE FUNDO OTIMIZADAS (S-4 / F-7)
// ============================================================

function createParticles() {
  const container = document.getElementById('particles-container');
  if (!container) return;
  container.innerHTML = '';

  // Respeita prefers-reduced-motion
  if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // Otimização conforme concorrência de hardware e tela
  const cores = navigator.hardwareConcurrency || 4;
  const isMobile = window.innerWidth < 768;
  const count = cores <= 2 ? 8 : (isMobile ? 12 : 24);

  for (let i = 0; i < count; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';

    const size = Math.random() * 3 + 2;
    const colors = [
      'rgba(34, 211, 238,',
      'rgba(14, 165, 233,',
      'rgba(139, 92, 246,',
      'rgba(16, 185, 129,'
    ];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const opacity = (Math.random() * 0.4 + 0.2).toFixed(2);

    particle.style.width = `${size}px`;
    particle.style.height = `${size}px`;
    particle.style.left = `${Math.random() * 100}%`;
    particle.style.background = `${color} ${opacity})`;
    particle.style.boxShadow = `0 0 ${size * 2}px ${color} 0.3)`;
    particle.style.animationDuration = `${Math.random() * 15 + 10}s`;
    particle.style.animationDelay = `${Math.random() * 8}s`;

    container.appendChild(particle);
  }
}

// ============================================================
// LIGHTBOX SEGURO (SEM JSON.STRINGIFY INLINE - BUG #5)
// ============================================================

function openLightbox(images, startIndex = 0) {
  lightboxImages = images;
  lightboxIndex = startIndex;
  renderLightbox();
  document.body.style.overflow = 'hidden';
}

function openProjetoLightbox(projetoId, startIndex = 0) {
  const proj = projetos.find(p => p.id === projetoId);
  if (!proj || !proj.imagens.length) return;
  openLightbox(proj.imagens, startIndex);
}

function renderLightbox() {
  const existing = document.querySelector('.lightbox-overlay');
  if (existing) existing.remove();

  const overlay = document.createElement('div');
  overlay.className = 'lightbox-overlay';
  overlay.onclick = (e) => {
    if (e.target === overlay) closeLightbox();
  };

  overlay.innerHTML = `
    <button class="lightbox-close" onclick="closeLightbox()" aria-label="Fechar visualizador">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
      </svg>
    </button>
    ${lightboxImages.length > 1 ? `
      <button class="lightbox-nav lightbox-prev" onclick="prevLightboxImage()" aria-label="Foto anterior">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m15 18-6-6 6-6"/>
        </svg>
      </button>
      <button class="lightbox-nav lightbox-next" onclick="nextLightboxImage()" aria-label="Próxima foto">
        <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="m9 18 6-6-6-6"/>
        </svg>
      </button>
    ` : ''}
    <img src="${lightboxImages[lightboxIndex]}" alt="Imagem ampliada da galeria" class="lightbox-image" onerror="this.src='${IMG_FALLBACK}'" />
    <div class="lightbox-counter">${lightboxIndex + 1} / ${lightboxImages.length}</div>
  `;

  document.body.appendChild(overlay);
}

function closeLightbox() {
  const overlay = document.querySelector('.lightbox-overlay');
  if (overlay) {
    overlay.style.opacity = '0';
    setTimeout(() => {
      overlay.remove();
      document.body.style.overflow = '';
    }, 200);
  }
}

function nextLightboxImage() {
  lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
  renderLightbox();
}

function prevLightboxImage() {
  lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
  renderLightbox();
}

document.addEventListener('keydown', (e) => {
  const hasLightbox = !!document.querySelector('.lightbox-overlay');
  if (hasLightbox) {
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') nextLightboxImage();
    if (e.key === 'ArrowLeft') prevLightboxImage();
    return;
  }
  const hasModal = modalContainer && modalContainer.children.length > 0;
  if (hasModal && e.key === 'Escape') {
    closeModal();
    return;
  }
  if (e.key === 'Escape') {
    e.preventDefault();
    goBack();
  }
});

// ============================================================
// TELA: HOME (INÍCIO)
// ============================================================

function renderHome(pushHash = true) {
  currentScreen = 'home';
  updateActiveNav('home');
  pushNav({ screen: 'home', label: 'Início' });
  if (pushHash) syncHash('#home');

  const totalIntegrantes = projetos.reduce((acc, p) => acc + (p.equipeQtd || 0), 0);

  const html = `
    <div class="space-y-8 md:space-y-12 fade-in">
      <!-- Hero Section Oficial -->
      <section class="relative overflow-hidden rounded-3xl p-6 sm:p-10 md:p-14 glass-card border border-white/10">
        <div class="hero-orb" style="width: 340px; height: 340px; background: #22d3ee; top: -100px; left: -80px;"></div>
        <div class="hero-orb" style="width: 280px; height: 280px; background: #8b5cf6; bottom: -80px; right: -60px; animation-delay: -3s;"></div>
        <div class="hero-orb" style="width: 220px; height: 220px; background: #10b981; top: 40%; right: 20%; animation-delay: -5s;"></div>

        <div class="relative z-10 max-w-4xl">
          <div class="flex flex-wrap items-center gap-2 mb-4 animate-fade-in-up">
            <span class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-escola-accent/10 border border-escola-accent/30 text-escola-accent font-bold text-xs tracking-wider uppercase backdrop-blur-md">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-escola-accent opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-escola-accent"></span>
              </span>
              EXPO ODS FUTURO • 3ª Etapa
            </span>
            <span class="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300 font-medium text-xs backdrop-blur-md">
              Instituto Educacional Missão Paz
            </span>
          </div>

          <h1 class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black font-heading leading-[1.08] mb-4 text-balance animate-fade-in-up" style="animation-delay: 0.1s;">
            ODS em Ação:<br/>
            <span class="hero-gradient-text">Tecnologia, Sustentabilidade e Futuro</span>
          </h1>

          <p class="text-base sm:text-lg md:text-xl text-slate-300 leading-relaxed mb-6 max-w-3xl animate-fade-in-up text-balance" style="animation-delay: 0.15s;">
            Projeto interdisciplinar do Ensino Fundamental II (6º ao 9º ano) e Ensino Médio (1ª a 3ª série), desenvolvendo soluções reais e criativas alinhadas aos Objetivos de Desenvolvimento Sustentável.
          </p>

          <!-- Versículo Oficial de Inspiração -->
          <div class="mb-8 p-4 md:p-5 rounded-2xl bg-gradient-to-r from-escola-accent/10 via-cyan-500/5 to-escola-primary/10 border border-escola-accent/25 backdrop-blur-md animate-fade-in-up max-w-3xl" style="animation-delay: 0.2s;">
            <div class="flex items-start gap-3">
              <span class="text-xl md:text-2xl shrink-0 mt-0.5">📖</span>
              <div>
                <p class="text-xs sm:text-sm md:text-base italic text-slate-200 leading-relaxed font-serif">
                  "Esqueça o que se foi; não vivam no passado. Vejam, estou fazendo uma coisa nova! Ela já está surgindo! Vocês não a reconhecem? Até no deserto vou abrir um caminho e riachos no ermo."
                </p>
                <div class="text-[11px] md:text-xs font-bold text-escola-accent tracking-wider uppercase mt-1.5">— Isaías 43:18-19</div>
              </div>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 sm:gap-4 animate-fade-in-up" style="animation-delay: 0.25s;">
            <button onclick="renderProjetos()" class="btn-primary text-base justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
              Explorar Projetos (${projetos.length})
            </button>
            <button onclick="renderMapa()" class="btn-secondary text-base justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M14.106 5.553a2 2 0 0 1 1.788 0l3.659-1.83A1 1 0 0 1 21 4.618v13.118a2 2 0 0 1-2.894 1.789l-3.106-1.553m-4.212-10.42-3.658-1.83A2 2 0 0 0 6.106 3.74l-3.106 1.553A2 2 0 0 0 1.894 7l12.212 6.106a2 2 0 0 0 1.788 0l3.106-1.553A2 2 0 0 0 20.106 9.894Z"/>
                <line x1="8" x2="8" y1="3" y2="21"/><line x1="16" x2="16" y1="3" y2="21"/>
              </svg>
              Mapa do Prédio
            </button>
            <button type="button" onclick="openSiteShareModal()" class="btn-secondary text-base justify-center" aria-label="Abrir QR Code e link da página inicial">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                <rect width="6" height="6" x="3" y="3" rx="1"/><rect width="6" height="6" x="15" y="3" rx="1"/><rect width="6" height="6" x="3" y="15" rx="1"/>
                <path d="M15 15h2v2h-2zM19 15h2M19 19h2M15 19v2M11 3v2M11 7v2M3 11h2M7 11h2"/>
              </svg>
              QR Code do Site
            </button>
          </div>
        </div>
      </section>

      <!-- Estatísticas Oficiais do Evento -->
      <section class="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 stagger" aria-label="Estatísticas do evento">
        ${[
      { label: 'Projetos Inovadores', valor: projetos.length, icone: '💡', from: '#22d3ee', to: '#0ea5e9' },
      { label: 'Metas ODS Trabalhadas', valor: '7+', icone: '🎯', from: '#10b981', to: '#06b6d4' },
      { label: 'Andares de Exposição', valor: Object.values(predio).length, icone: '🏢', from: '#8b5cf6', to: '#ec4899' },
      { label: 'Turmas em Ação', valor: '6º ao 3º EM', icone: '🎓', from: '#f59e0b', to: '#ef4444' },
    ].map(stat => `
          <div class="glass-card-hover p-4 md:p-5 text-center group">
            <div class="text-2xl md:text-3xl mb-2 group-hover:scale-125 transition-transform duration-300">${stat.icone}</div>
            <div class="stat-number text-2xl sm:text-3xl md:text-4xl font-black font-heading mb-1 leading-none" style="--from: ${stat.from}; --to: ${stat.to};">
              ${stat.valor}
            </div>
            <div class="text-slate-400 text-xs md:text-sm font-medium">${stat.label}</div>
          </div>
        `).join('')}
      </section>

      <!-- O QUE TORNA ESTE PROJETO ESPECIAL (Os 5 Pilares) -->
      <section class="glass-card p-6 md:p-8 relative overflow-hidden">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-6">
          <div>
            <span class="text-escola-accent font-bold text-xs uppercase tracking-wider block mb-1">Diferencial Pedagógico</span>
            <h3 class="text-xl md:text-2xl font-black text-white font-heading flex items-center gap-2">
              <span>🌟</span> O que torna este projeto especial
            </h3>
          </div>
          <span class="text-xs text-slate-400">Metodologia ativa • Protagonismo • Inovação</span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3.5 md:gap-4 stagger">
          ${[
      { icone: '🌐', titulo: 'Interdisciplinar Real', desc: 'Integra todas as disciplinas de forma real e prática — de matemática a artes.' },
      { icone: '💡', titulo: 'Protagonismo Juvenil', desc: 'Incentiva a liderança e iniciativa direta dos estudantes na busca de soluções.' },
      { icone: '🤖', titulo: 'Tecnologia Aplicada', desc: 'Uso de sensores, automação, microcontroladores, programação e modelagem 3D.' },
      { icone: '🚀', titulo: 'Produtos Reais e Úteis', desc: 'Gera produtos funcionais e inovadores que resolvem problemas da comunidade.' },
      { icone: '🏛️', titulo: 'Mostra Interativa', desc: 'Culmina em uma Mostra Cultural moderna, viva, interativa e impactante.' }
    ].map((item, idx) => `
            <div class="glass-card-hover p-4 rounded-2xl flex flex-col justify-between" style="animation-delay: ${idx * 0.05}s;">
              <div>
                <div class="text-3xl mb-2.5">${item.icone}</div>
                <h4 class="font-bold text-white text-sm mb-1.5 leading-snug">${item.titulo}</h4>
                <p class="text-slate-300 text-xs leading-relaxed">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- GRANDES DESTAQUES INOVADORES -->
      <section class="glass-card p-6 md:p-8">
        <div class="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
          <div>
            <span class="text-amber-400 font-bold text-xs uppercase tracking-wider block mb-1">Mostra Cultural • 3ª Etapa</span>
            <h3 class="text-xl md:text-2xl font-black text-white font-heading flex items-center gap-2.5">
              <span>⚡</span> Grandes Destaques Inovadores
            </h3>
            <p class="text-slate-400 text-sm mt-0.5">Tecnologias práticas desenvolvidas pelas turmas</p>
          </div>
          <button onclick="renderProjetos()" class="self-start sm:self-auto text-escola-accent hover:text-cyan-300 font-semibold text-sm flex items-center gap-1.5 transition-colors group">
            Ver todas as bancadas
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 stagger">
          ${[
      { id: 8, titulo: 'Biodigestor Escolar', sub: 'EM • 1ª e 2ª Séries', desc: 'Produção de biogás a partir de resíduos orgânicos da cantina com demonstração ao vivo da chama.', icone: '🔥', cor: '#ef4444' },
      { id: 1, titulo: 'Estação de Economia de Água', sub: '6º Ano', desc: 'Medição de consumo hídrico, alarme de desperdício e app que monitora o uso diário.', icone: '💧', cor: '#0ea5e9' },
      { id: 5, titulo: 'Horta Automatizada', sub: '1ª Série EM', desc: 'Irrigação inteligente acionada por sensores de umidade de solo e telemetria por app.', icone: '🌱', cor: '#10b981' },
      { id: 4, titulo: 'Cidade Inteligente Sustentável', sub: '9º Ano', desc: 'Maquete com energia solar, sensores de movimento, semáforo adaptativo e bairros em 3D.', icone: '🏙️', cor: '#f59e0b' },
      { id: 7, titulo: 'Apps e Sites Criados pelos Alunos', sub: '3ª Série EM', desc: 'App de reciclagem, app de água, portal ODS e portão inteligente com sensor de presença.', icone: '📱', cor: '#8b5cf6' },
      { id: 3, titulo: 'Estação Climática Escolar', sub: '8º Ano', desc: 'Telemetria meteorológica contínua com dados em tempo real exibidos em painel digital.', icone: '🌦️', cor: '#06b6d4' }
    ].map((dest, i) => `
            <div role="button" tabindex="0"
                 onclick="renderProjetoDetalhes(${dest.id})"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); renderProjetoDetalhes(${dest.id});}"
                 class="glass-card-hover p-5 rounded-2xl flex flex-col justify-between cursor-pointer group relative overflow-hidden"
                 style="animation-delay: ${i * 0.05}s;"
                 aria-label="Ver destaque ${dest.titulo}">
              <div class="absolute top-0 right-0 w-24 h-24 rounded-full opacity-15 blur-2xl group-hover:opacity-30 transition-opacity" style="background: ${dest.cor};"></div>
              <div>
                <div class="flex items-center justify-between gap-2 mb-3">
                  <div class="w-12 h-12 rounded-xl flex items-center justify-center text-2xl group-hover:scale-110 transition-transform" style="background: ${dest.cor}22; border: 1px solid ${dest.cor}44;">
                    ${dest.icone}
                  </div>
                  <span class="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-white/90 border border-white/10 bg-white/5">
                    ${dest.sub}
                  </span>
                </div>
                <h4 class="font-bold text-white text-base mb-1.5 group-hover:text-escola-accent transition-colors leading-snug">${dest.titulo}</h4>
                <p class="text-slate-300 text-xs md:text-sm leading-relaxed mb-4">${dest.desc}</p>
              </div>
              <div class="pt-3 border-t border-white/[0.08] flex items-center justify-between text-xs font-semibold text-escola-accent">
                <span>Ver protótipo completo</span>
                <span class="group-hover:translate-x-1 transition-transform">➔</span>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- NAVEGAÇÃO PELOS 5 ANDARES -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-4 stagger">
        ${Object.values(predio).map((andar, i) => `
          <div role="button" tabindex="0"
               onclick="renderMapa('${andar.nome}')"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); renderMapa('${andar.nome}');}"
               class="glass-card-hover p-5 md:p-6 cursor-pointer group relative overflow-hidden"
               aria-label="Explorar o ${andar.nome}">
            <div class="absolute top-0 right-0 w-24 h-24 rounded-full opacity-20 blur-2xl group-hover:opacity-40 transition-opacity" style="background: ${andar.cor};"></div>
            <div class="relative z-10">
              <div class="flex items-center justify-between mb-4">
                <div class="text-4xl group-hover:scale-110 transition-transform duration-300">${andar.icone}</div>
                <div class="w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-sm" style="background: linear-gradient(135deg, ${andar.cor}44, ${andar.cor}22); border: 1px solid ${andar.cor}44;">
                  ${andar.numero}
                </div>
              </div>
              <h4 class="text-lg font-bold text-white mb-1 group-hover:text-escola-accent transition-colors">${andar.nome}</h4>
              <p class="text-slate-400 text-xs md:text-sm mb-4 leading-relaxed">${andar.descricao}</p>
              <div class="flex items-center justify-between">
                <div class="flex -space-x-2">
                  ${projetos.filter(p => projectBelongsToFloor(p, andar.nome)).slice(0, 3).map(p => `
                    <div class="w-6 h-6 md:w-7 md:h-7 rounded-full border-2 border-escola-darker flex items-center justify-center text-xs overflow-hidden" style="background: linear-gradient(135deg, ${p.categoriaCor.from}, ${p.categoriaCor.to});" title="${p.titulo}">
                      ${p.icone}
                    </div>
                  `).join('')}
                </div>
                <span class="text-escola-accent font-bold text-xs group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                  Ver no mapa
                  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6"/>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        `).join('')}
      </section>
    </div>
  `;

  screenTransition(html);
}

// ============================================================
// TELA: PROJETOS (LISTAGEM + FILTROS + ROTA GUIADA)
// ============================================================

function renderProjetos(pushHash = true) {
  currentScreen = 'projetos';
  updateActiveNav('projetos');
  pushNav({ screen: 'projetos', label: 'Catálogo de Projetos' });
  if (pushHash) syncHash('#projetos');

  const categorias = [...new Set(projetos.map(p => p.categoria))];
  const andares = Object.values(predio).map(andar => andar.nome);

  const html = `
    <div class="space-y-6 md:space-y-8 fade-in">
      <div class="text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-escola-primary/15 border border-escola-primary/25 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-escola-primary">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
          </svg>
          <span class="text-escola-primary font-bold text-xs uppercase tracking-wider">Catálogo</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 font-heading">
          Todos os <span class="hero-gradient-text">Projetos</span>
        </h2>
          <p class="text-slate-400 text-sm md:text-base">${activeSalaFilter !== 'todos' ? `Projetos em ${activeSalaFilter} • ${activeAndarFilter}` : `${projetos.length} trabalhos incríveis esperando sua visita`}</p>
          ${activeSalaFilter !== 'todos' ? '<button onclick="clearLocationFilter()" class="text-escola-accent hover:text-cyan-300 text-xs font-semibold mt-2">Limpar filtro do espaço</button>' : ''}
      </div>

      <div class="search-input-wrapper max-w-xl mx-auto">
        <div class="relative">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500">
            <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
          </svg>
          <input
            id="search-input"
            type="text"
            placeholder="Buscar por título, categoria, sala ou andar..."
            value="${searchQuery}"
            class="input-base pl-12 pr-12 text-sm md:text-base"
            aria-label="Campo de busca de projetos"
          />
          <button onclick="clearSearch()" class="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-lg flex items-center justify-center text-slate-500 hover:text-white hover:bg-white/10 transition-all" id="clear-search-btn" style="display: ${searchQuery ? 'flex' : 'none'};" aria-label="Limpar busca">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
              <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
            </svg>
          </button>
        </div>
      </div>

      <div class="space-y-3">
        <!-- Filtro de Categorias com Ícones (UX-3) -->
        <div class="flex flex-wrap gap-2 md:gap-2.5 justify-center" id="filter-container">
          <button onclick="filterProjetos('todos')" data-filter="todos" class="filter-btn px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${activeFilter === 'todos' ? 'bg-escola-accent text-escola-darker shadow-escola' : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'}">
            🔬 Todas as Áreas (${projetos.length})
          </button>
          ${categorias.map(cat => {
    const count = projetos.filter(p => p.categoria === cat).length;
    const proj = projetos.find(p => p.categoria === cat);
    const isSelected = activeFilter === cat;
    return `
              <button onclick="filterProjetos('${cat}')" data-filter="${cat}" class="filter-btn px-4 py-2 rounded-full text-xs md:text-sm font-bold transition-all duration-200 ${isSelected ? 'shadow-lg text-white' : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'}" style="--cor-from: ${proj?.categoriaCor.from}; --cor-to: ${proj?.categoriaCor.to}; ${isSelected ? `background: linear-gradient(135deg, ${proj?.categoriaCor.from}cc, ${proj?.categoriaCor.to}bb); border-color: transparent;` : ''}">
                ${proj?.icone || '🔬'} ${cat} (${count})
              </button>
            `;
  }).join('')}
        </div>

        <!-- Filtro por Andar (F-2) & Botão de Rota Guiada (F-3) -->
        <div class="flex flex-wrap items-center justify-center gap-2 pt-1 border-t border-white/[0.06] max-w-3xl mx-auto">
          <span class="text-xs text-slate-400 font-semibold uppercase tracking-wider mr-1">Andar:</span>
          <button onclick="filterAndar('todos')" class="andar-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeAndarFilter === 'todos' ? 'bg-escola-secondary text-white font-bold shadow-md' : 'bg-white/5 text-slate-400 hover:text-white'}">
            Todos
          </button>
          ${andares.map(and => `
            <button onclick="filterAndar('${and}')" class="andar-btn px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${activeAndarFilter === and ? 'bg-escola-secondary text-white font-bold shadow-md' : 'bg-white/5 text-slate-400 hover:text-white'}">
              ${and}
            </button>
          `).join('')}

          <span class="w-px h-4 bg-white/10 mx-1 hidden sm:inline"></span>

          <!-- Rota Guiada Sequencial (F-3) -->
          <button onclick="toggleGuidedRoute()" class="px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 ${isGuidedRoute ? 'bg-gradient-to-r from-emerald-500 to-teal-500 text-white shadow-lg shadow-emerald-500/25 ring-2 ring-emerald-400' : 'bg-white/5 border border-white/10 text-slate-300 hover:bg-white/10 hover:text-white'}">
            <span>🗺️</span>
            <span>${isGuidedRoute ? 'Rota Guiada Ativa (1º/Térreo ➔ 5º)' : 'Ativar Rota Recomendada'}</span>
          </button>
        </div>
      </div>

      <div id="projetos-grid" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 stagger">
        ${renderProjetoCards(getFilteredProjetos())}
      </div>
    </div>
  `;

  screenTransition(html, () => {
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
      searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.toLowerCase();
        const clearBtn = document.getElementById('clear-search-btn');
        if (clearBtn) clearBtn.style.display = searchQuery ? 'flex' : 'none';
        applyFilters();
      });
    }
  });
}

function getFilteredProjetos() {
  let resultado = [...projetos];

  if (activeFilter !== 'todos') {
    resultado = resultado.filter(p => p.categoria === activeFilter || p.nivel === activeFilter);
  }

  if (activeAndarFilter !== 'todos') {
    resultado = resultado.filter(p => projectBelongsToFloor(p, activeAndarFilter));
  }

  if (activeSalaFilter !== 'todos') {
    resultado = resultado.filter(p => p.sala === activeSalaFilter && projectBelongsToFloor(p, activeAndarFilter));
  }

  // Busca textual abrangente (título, ODS, turma, subtema, materiais, disciplinas)
  if (searchQuery) {
    const q = searchQuery.toLowerCase();
    resultado = resultado.filter(p =>
      p.titulo.toLowerCase().includes(q) ||
      (p.subtema && p.subtema.toLowerCase().includes(q)) ||
      (p.turma && p.turma.toLowerCase().includes(q)) ||
      (p.ods && p.ods.toLowerCase().includes(q)) ||
      p.descricao.toLowerCase().includes(q) ||
      getProjectLocationLabel(p).toLowerCase().includes(q) ||
      p.categoria.toLowerCase().includes(q) ||
      (p.produtoFinal && p.produtoFinal.toLowerCase().includes(q)) ||
      p.materiais.some(m => m.toLowerCase().includes(q)) ||
      (p.disciplinas && p.disciplinas.some(d => d.nome.toLowerCase().includes(q) || d.funcao.toLowerCase().includes(q)))
    );
  }

  // Ordenação por rota física recomendada se ativada (F-3)
  if (isGuidedRoute) {
    resultado.sort((a, b) => a.ordemVisita - b.ordemVisita);
  }

  return resultado;
}

function renderProjetoCards(lista) {
  if (!lista.length) {
    return `
      <div class="col-span-full glass-card p-10 text-center">
        <div class="text-5xl mb-4">🔍</div>
        <h4 class="text-xl font-bold text-white mb-2">Nenhum projeto encontrado</h4>
        <p class="text-slate-400 text-sm">Tente ajustar os filtros ou os termos de busca</p>
        <button onclick="clearFilters()" class="btn-primary mt-5 text-sm">
          Limpar todos os filtros
        </button>
      </div>
    `;
  }

  return lista.map((proj, idx) => {
    return `
      <article role="button" tabindex="0"
               onclick="renderProjetoDetalhes(${proj.id})"
               onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); renderProjetoDetalhes(${proj.id});}"
               class="glass-card-hover cursor-pointer group overflow-hidden flex flex-col focus-visible:ring-2 focus-visible:ring-escola-accent"
               style="animation-delay: ${idx * 0.04}s;"
               aria-label="Projeto ${proj.titulo} - ${proj.categoria}">
        <div class="relative h-48 md:h-52 overflow-hidden bg-slate-900">
          <img src="${proj.imagens[0]}" alt="Foto do projeto ${proj.titulo}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out" loading="lazy" onerror="this.src='${IMG_FALLBACK}'" />
          <div class="absolute inset-0 bg-gradient-to-t from-escola-darker via-escola-darker/30 to-transparent"></div>

          <div class="absolute top-3 left-3 badge-categoria text-white backdrop-blur-md"
               style="background: linear-gradient(135deg, ${proj.categoriaCor.from}cc, ${proj.categoriaCor.to}99); border-color: ${proj.categoriaCor.from}66; box-shadow: 0 4px 20px -5px ${proj.categoriaCor.from}55;">
            ${proj.icone} ${proj.categoria}
          </div>

          <div class="absolute top-3 right-3 flex items-center gap-1.5">
            ${isGuidedRoute ? `
              <div class="px-2.5 py-1 rounded-full bg-emerald-500/90 text-white text-[10px] font-black border border-white/20 shadow-md">
                Passo ${proj.ordemVisita}
              </div>
            ` : ''}
            <div class="px-2.5 py-1 rounded-full bg-escola-darker/70 backdrop-blur-md text-white text-[10px] md:text-xs font-bold border border-white/10 flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                <circle cx="8.5" cy="8.5" r="1.5"/>
                <polyline points="21 15 16 10 5 21"/>
              </svg>
              ${proj.imagens.length}
            </div>
          </div>

          <div class="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
            <span class="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-slate-200 text-xs font-semibold">
              🎓 ${proj.turma.split('•')[0].trim()}
            </span>
          </div>
        </div>

        <div class="p-5 flex-1 flex flex-col justify-between">
          <div>
            <div class="flex items-center gap-2 mb-1.5 flex-wrap">
              <span class="text-[11px] font-bold text-escola-accent uppercase tracking-wider">${proj.ods}</span>
            </div>
            <h3 class="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-escola-accent transition-colors leading-snug">
              ${proj.titulo}
            </h3>
            <div class="text-xs text-slate-400 italic mb-2.5">"${proj.subtema}"</div>
            <p class="text-slate-300 text-xs md:text-sm mb-3 line-clamp-2 leading-relaxed">
              ${proj.descricao}
            </p>

            <div class="p-2.5 rounded-xl bg-white/[0.03] border border-white/[0.08] mb-3 flex items-start gap-2">
              <span class="text-sm shrink-0">🚀</span>
              <div class="text-[11px] text-slate-300 leading-snug">
                <strong class="text-white font-semibold">Produto da Mostra:</strong> ${proj.produtoFinal}
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between gap-3 pt-3 border-t border-white/[0.06] text-xs">
            <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-escola-accent/10 border border-escola-accent/25 text-escola-accent font-bold">
              📍 ${getProjectLocationLabel(proj)}
            </div>
            <span class="text-slate-400 font-medium flex items-center gap-1 group-hover:text-escola-accent transition-colors">
              <span>Ver detalhes</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="group-hover:translate-x-1 transition-transform">
                <path d="m9 18 6-6-6-6"/>
              </svg>
            </span>
          </div>
        </div>
      </article>
    `;
  }).join('');
}

function filterProjetos(categoria) {
  activeFilter = categoria;
  renderProjetos();
}

function filterAndar(andar) {
  activeAndarFilter = andar;
  activeSalaFilter = 'todos';
  renderProjetos();
}

function filterLocation(andar, sala) {
  activeFilter = 'todos';
  activeAndarFilter = andar;
  activeSalaFilter = sala;
  isGuidedRoute = false;
  searchQuery = '';
  renderProjetos();
}

function clearLocationFilter() {
  activeSalaFilter = 'todos';
  renderProjetos();
}

function toggleGuidedRoute() {
  isGuidedRoute = !isGuidedRoute;
  if (isGuidedRoute) {
    showToast('Rota guiada ativada! Ordem otimizada por andares.', '🗺️');
  }
  renderProjetos();
}

function applyFilters() {
  const grid = document.getElementById('projetos-grid');
  if (grid) {
    grid.style.opacity = '0';
    setTimeout(() => {
      grid.innerHTML = renderProjetoCards(getFilteredProjetos());
      requestAnimationFrame(() => {
        grid.style.opacity = '1';
      });
    }, 120);
  }
}

function clearSearch() {
  searchQuery = '';
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  const clearBtn = document.getElementById('clear-search-btn');
  if (clearBtn) clearBtn.style.display = 'none';
  applyFilters();
}

function clearFilters() {
  activeFilter = 'todos';
  activeAndarFilter = 'todos';
  activeSalaFilter = 'todos';
  isGuidedRoute = false;
  searchQuery = '';
  renderProjetos();
}

// ============================================================
// TELA: DETALHES DO PROJETO (ACESSIBILIDADE + PRIVACIDADE)
// ============================================================

function renderProjetoDetalhes(projetoId, pushHash = true) {
  currentScreen = 'projeto-detalhes';
  currentProject = projetos.find(p => p.id === projetoId);
  if (!currentProject) return;
  const proj = currentProject;
  pushNav({ type: 'projeto', screen: 'projeto-detalhes', id: projetoId, label: proj.titulo });
  if (pushHash) syncHash(`#projeto/${proj.id}`);

  const html = `
    <div class="space-y-6 md:space-y-8 fade-in max-w-4xl mx-auto">
      <div class="flex items-center justify-between gap-3 flex-wrap">
        <!-- Botão Voltar com touch target mínimo de 44px (UX-2) -->
        <button onclick="window.goBack()" class="group inline-flex items-center gap-2 text-slate-300 hover:text-white font-semibold text-sm transition-all" aria-label="Voltar à tela anterior">
          <div class="w-11 h-11 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-escola-accent/15 group-hover:border-escola-accent/40 group-hover:text-escola-accent transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:-translate-x-0.5 transition-transform">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </div>
          <span>Voltar</span>
        </button>

        <div class="flex items-center gap-2.5">
          <!-- Botão Compartilhar / QR Code (F-6) -->
          <button onclick="openShareModal(${proj.id})" class="inline-flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-slate-200 hover:text-white font-bold text-xs md:text-sm transition-all" aria-label="Abrir QR Code e compartilhar">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <rect width="5" height="5" x="3" y="3" rx="1"/>
              <rect width="5" height="5" x="16" y="3" rx="1"/>
              <rect width="5" height="5" x="3" y="16" rx="1"/>
              <path d="M21 16h-3a2 2 0 0 0-2 2v3"/>
              <path d="M21 21v.01"/>
              <path d="M12 7v3a2 2 0 0 1-2 2H7"/>
              <path d="M3 12h.01"/>
              <path d="M12 3h.01"/>
              <path d="M12 16v.01"/>
              <path d="M16 12h1"/>
              <path d="M21 12v.01"/>
              <path d="M12 21v-1"/>
            </svg>
            <span class="hidden sm:inline">QR Code</span>
          </button>
        </div>
      </div>

      <!-- Hero Card do Projeto -->
      <div class="relative overflow-hidden rounded-3xl glass-card">
        <div class="project-detail-hero h-64 sm:h-72 md:h-80 relative overflow-hidden bg-slate-900">
          <img src="${proj.imagens[0]}" alt="Foto principal de ${proj.titulo}" class="w-full h-full object-cover" fetchpriority="high" decoding="async" onerror="this.src='${IMG_FALLBACK}'" />
          <div class="absolute inset-0 bg-gradient-to-t from-escola-darker via-escola-darker/60 to-transparent"></div>

          <div class="project-hero-top-tags absolute top-4 left-4 flex flex-wrap gap-2">
            <span class="project-hero-chip badge-categoria text-white backdrop-blur-md shadow-lg"
                  style="background: linear-gradient(135deg, ${proj.categoriaCor.from}dd, ${proj.categoriaCor.to}bb); border-color: rgba(255,255,255,0.25);">
              ${proj.icone} ${proj.categoria}
            </span>
            <span class="project-hero-chip px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-bold text-xs">
              🎓 ${proj.turma}
            </span>
          </div>

          <div class="project-hero-copy absolute bottom-5 left-5 right-5 md:left-7 md:right-7">
            <div class="project-hero-meta flex items-center gap-2 mb-2.5 flex-wrap">
              <span class="project-hero-chip project-hero-location inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-escola-accent/20 backdrop-blur-md border border-escola-accent/40 text-escola-accent text-xs font-bold">
                📍 ${getProjectLocationLabel(proj)}
              </span>
              <span class="project-hero-chip project-hero-ods inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15 text-white/90 text-xs font-bold">
                🎯 ${proj.ods}
              </span>
            </div>
            <h2 class="text-2xl sm:text-3xl md:text-4xl font-black font-heading text-white leading-tight mb-1">
              ${proj.titulo}
            </h2>
            <div class="text-escola-accent font-semibold text-xs sm:text-sm md:text-base italic mb-2">
              "${proj.subtema}"
            </div>
            <p class="text-sm md:text-base text-slate-300 leading-relaxed max-w-3xl line-clamp-2 md:line-clamp-none">
              ${proj.descricao}
            </p>
          </div>
        </div>
      </div>

      <!-- Card Destaque: PRODUTO FINAL DA MOSTRA CULTURAL -->
      <section class="p-5 md:p-6 rounded-3xl bg-gradient-to-r from-escola-accent/15 via-cyan-500/10 to-escola-primary/15 border border-escola-accent/30 shadow-card flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div class="w-14 h-14 rounded-2xl bg-escola-accent/20 border border-escola-accent/40 flex items-center justify-center text-3xl shrink-0">
          🚀
        </div>
        <div class="flex-1 min-w-0">
          <div class="text-xs uppercase font-extrabold tracking-wider text-escola-accent mb-1">
            Produto Final da Mostra Cultural
          </div>
          <div class="text-white font-bold text-base md:text-lg leading-snug">
            ${proj.produtoFinal}
          </div>
        </div>
      </section>

      <!-- Galeria com abertura segura (Bug #5) -->
      <section class="glass-card p-6 md:p-8">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-5 font-heading flex items-center gap-2.5">
          <span class="text-2xl">📸</span> Registros Fotográficos do Projeto
        </h3>
        <div class="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 stagger">
          ${proj.imagens.map((img, i) => `
            <div role="button" tabindex="0"
                 onclick="openProjetoLightbox(${proj.id}, ${i})"
                 onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); openProjetoLightbox(${proj.id}, ${i});}"
                 class="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer glass-card-hover p-0 focus-visible:ring-2 focus-visible:ring-escola-accent"
                 style="animation-delay: ${i * 0.05}s;"
                 aria-label="Ampliar foto ${i + 1} de ${proj.titulo}">
              <img src="${img}" alt="Registro ${i + 1} - ${proj.titulo}" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" loading="lazy" onerror="this.src='${IMG_FALLBACK}'" />
              <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end p-4">
                <div class="flex items-center gap-2 text-white font-bold text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="group-hover:scale-125 transition-transform">
                    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
                  </svg>
                  Ampliar
                </div>
              </div>
              <div class="absolute top-2 right-2 w-7 h-7 rounded-full bg-black/60 backdrop-blur-sm flex items-center justify-center text-white text-xs font-bold group-hover:bg-escola-accent group-hover:text-escola-darker transition-all">
                ${i + 1}
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- NOVA SEÇÃO: MATRIZ INTERDISCIPLINAR (Função das Disciplinas) -->
      <section class="glass-card p-6 md:p-8">
        <div class="flex items-center justify-between gap-3 flex-wrap mb-5">
          <div>
            <h3 class="text-xl md:text-2xl font-bold text-white font-heading flex items-center gap-2.5">
              <span class="text-2xl">🧩</span> Matriz Interdisciplinar
            </h3>
            <p class="text-slate-400 text-xs md:text-sm mt-1">Como cada área do conhecimento atuou na construção desta solução</p>
          </div>
          <span class="px-3 py-1 rounded-full bg-escola-accent/15 border border-escola-accent/30 text-escola-accent text-xs font-bold">
            ${proj.disciplinas?.length || 8} Disciplinas Integradas
          </span>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 stagger">
          ${(proj.disciplinas || []).map((disc, idx) => `
            <div class="glass-card-hover p-4 rounded-2xl flex gap-3.5 items-start" style="animation-delay: ${idx * 0.04}s;">
              <div class="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-xl shrink-0">
                ${disc.icone}
              </div>
              <div class="min-w-0 flex-1">
                <h4 class="text-white font-bold text-sm mb-1">${disc.nome}</h4>
                <p class="text-slate-300 text-xs md:text-sm leading-relaxed">${disc.funcao}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 md:gap-6">
        <section class="glass-card p-6 md:p-8 lg:col-span-3">
          <h3 class="text-xl md:text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2.5">
            <span class="text-2xl">📋</span> Metodologia & Desenvolvimento
          </h3>
          <div class="prose-content text-sm md:text-base space-y-4 leading-relaxed text-slate-300">
            <p>${proj.detalhes}</p>
          </div>
        </section>

        <div class="space-y-5 md:space-y-6 lg:col-span-2">
          <section class="glass-card p-6 md:p-7">
            <h3 class="text-lg md:text-xl font-bold text-white mb-4 font-heading flex items-center gap-2.5">
              <span class="text-xl">🧰</span> Materiais e Recursos
            </h3>
            <ul class="space-y-2.5">
              ${proj.materiais.map(m => `
                <li class="flex items-center gap-3 text-sm text-slate-300">
                  <div class="w-1.5 h-1.5 rounded-full bg-escola-accent flex-shrink-0"></div>
                  <span>${m}</span>
                </li>
              `).join('')}
            </ul>
          </section>

          <section class="glass-card p-6 md:p-7 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-32 h-32 rounded-full opacity-20 blur-3xl" style="background: ${proj.categoriaCor.from};"></div>
            <h3 class="text-lg md:text-xl font-bold text-white mb-3 font-heading flex items-center gap-2.5 relative">
              <span class="text-xl">🏆</span> Resultados & Impacto
            </h3>
            <p class="text-sm md:text-base text-slate-200 leading-relaxed font-medium relative">
              ${proj.resultados}
            </p>
          </section>
        </div>
      </div>

      <!-- Seção Equipe & Orientação Pedagógica -->
      <section class="glass-card p-6 md:p-8">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-5 font-heading flex items-center gap-2.5">
          <span class="text-2xl">👥</span> Equipe & Orientação Pedagógica
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class="glass-card-hover p-5 rounded-2xl flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-escola-accent/20 border border-escola-accent/40 flex items-center justify-center text-2xl shrink-0">
              👨‍🏫
            </div>
            <div>
              <div class="text-xs text-slate-400 font-semibold uppercase tracking-wider">Orientação Docente</div>
              <div class="text-white font-bold text-sm md:text-base">${proj.professor}</div>
            </div>
          </div>

          <div class="glass-card-hover p-5 rounded-2xl flex items-center gap-4">
            <div class="w-12 h-12 rounded-xl bg-escola-secondary/20 border border-escola-secondary/40 flex items-center justify-center text-2xl shrink-0">
              🎓
            </div>
            <div>
              <div class="text-xs text-slate-400 font-semibold uppercase tracking-wider">Turma Responsável</div>
              <div class="text-white font-bold text-sm md:text-base">${proj.turma}</div>
            </div>
          </div>

          <div class="glass-card-hover p-5 rounded-2xl flex items-center gap-4 sm:col-span-2 md:col-span-1">
            <div class="w-12 h-12 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-2xl shrink-0">
              📍
            </div>
            <div>
              <div class="text-xs text-slate-400 font-semibold uppercase tracking-wider">Local no Prédio</div>
              <div class="text-white font-bold text-sm md:text-base">${getProjectLocationLabel(proj)}</div>
            </div>
          </div>
        </div>
      </section>

      <!-- Ações Principais -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
        <button onclick="renderMapaParaProjeto('${getProjectFloors(proj).join('|')}', '${proj.sala}')" class="btn-primary w-full justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          Ver localização no mapa
        </button>
        <button onclick="openProjetoLightbox(${proj.id}, 0)" class="btn-secondary w-full justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
            <circle cx="8.5" cy="8.5" r="1.5"/>
            <polyline points="21 15 16 10 5 21"/>
          </svg>
          Abrir galeria completa
        </button>
      </div>
    </div>
  `;

  screenTransition(html);
}

// ============================================================
// TELA: MAPA INTERATIVO (BUG #2 CORRIGIDO + SCROLL TO HIGHLIGHT UX-8)
// ============================================================

function renderMapa(andarDestaque = null, salaDestaque = null, pushHash = true) {
  const andaresDestacados = typeof andarDestaque === 'string'
    ? andarDestaque.split('|').filter(Boolean)
    : [];
  const mapaHash = salaDestaque
    ? `#mapa/${encodeURIComponent(andarDestaque || '')}/${encodeURIComponent(salaDestaque)}`
    : andarDestaque
      ? `#mapa/${encodeURIComponent(andarDestaque)}`
      : '#mapa';
  currentScreen = 'mapa';
  updateActiveNav('mapa');
  if (pushHash) syncHash(mapaHash);

  if (andarDestaque || salaDestaque) {
    pushNav({
      type: 'mapa-destaque',
      screen: 'mapa',
      andar: andarDestaque,
      sala: salaDestaque,
      label: `Mapa • ${salaDestaque || andarDestaque || 'Destaque'}`
    });
  } else {
    pushNav({ screen: 'mapa', label: 'Mapa do Prédio' });
  }

  const andaresOrdem = Object.keys(predio);
  const mapaIlustradoUrl = '/planta-feira-ciencias.jpeg';


  const html = `
    <div class="space-y-6 md:space-y-8 fade-in max-w-5xl mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-escola-purple/15 border border-escola-purple/25 mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-escola-purple">
            <path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.618v13.118a2 2 0 0 1-2.894 1.789l-3.106-1.553m-4.212-10.42-3.658-1.83A2 2 0 0 0 6.106 3.74l-3.106 1.553A2 2 0 0 0 1.894 7l12.212 6.106a2 2 0 0 0 1.788 0l3.106-1.553A2 2 0 0 0 20.106 9.894Z"/>
          </svg>
          <span class="text-escola-purple font-bold text-xs uppercase tracking-wider">Navegação</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-3 font-heading">
          Mapa <span class="hero-gradient-text">Interativo</span>
        </h2>
        <p class="text-slate-400 text-sm md:text-base">
          Consulte os cinco andares, as turmas, os espaços indicados e os projetos da feira • ${projetos.length} exposições ativas
        </p>
      </div>

      <figure class="map-reference-card glass-card p-3 sm:p-4 md:p-5">
        <div class="flex flex-col sm:flex-row sm:items-end justify-between gap-3 mb-4">
          <div>
            <div class="inline-flex items-center gap-2 text-escola-accent text-[10px] md:text-xs font-bold uppercase tracking-[0.16em] mb-1.5">
              <span aria-hidden="true">🗺️</span> Planta ilustrada
            </div>
            <h3 class="text-lg md:text-xl font-black font-heading text-white">Mapa geral do prédio</h3>
            <p class="text-slate-400 text-xs md:text-sm mt-1">Visão visual dos andares e espaços de exposição.</p>
          </div>
          <a href="${mapaIlustradoUrl}" target="_blank" rel="noopener noreferrer" class="btn-secondary text-xs md:text-sm justify-center" aria-label="Abrir a planta do prédio em tamanho original em uma nova guia">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="M15 3h6v6"/><path d="M10 14 21 3"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
            </svg>
            Ampliar planta
          </a>
        </div>
        <a class="map-reference-image-link" href="${mapaIlustradoUrl}" target="_blank" rel="noopener noreferrer" aria-label="Ampliar a imagem completa da planta do prédio">
          <img class="map-reference-image" src="${mapaIlustradoUrl}" alt="Planta ilustrada da Feira de Ciências com espaços de exposição identificados do 1º ao 5º andar e uma legenda lateral colorida." width="1600" height="1131" loading="eager" decoding="async" />
        </a>
        <figcaption class="map-reference-caption text-slate-400 text-xs md:text-sm">
          A planta mostra a distribuição de 1º/térreo a 5º andar. Os cartões abaixo usam as mesmas localizações exibidas nos filtros e detalhes; salas não informadas aparecem como “Local a confirmar”.
          <span class="md:hidden"> Toque em “Ampliar planta” para visualizar os detalhes em tamanho original.</span>
        </figcaption>
      </figure>

      <div class="glass-card p-4 md:p-6">
        <div class="flex flex-wrap items-center justify-center gap-3 md:gap-6 mb-6">
          <div class="flex items-center gap-2.5">
            <div class="w-4 h-4 rounded-md bg-gradient-to-br from-escola-accent to-escola-primary shadow-escola"></div>
            <span class="text-slate-300 text-xs md:text-sm font-medium">Com projeto</span>
          </div>
          <div class="flex items-center gap-2.5">
            <div class="w-4 h-4 rounded-md bg-white/10 border border-white/20"></div>
            <span class="text-slate-400 text-xs md:text-sm font-medium">Espaço indicado na planta</span>
          </div>
          <div class="flex items-center gap-2.5">
            <div class="w-4 h-4 rounded-md bg-gradient-to-br from-escola-warning to-escola-danger"></div>
            <span class="text-slate-300 text-xs md:text-sm font-medium">Local a confirmar</span>
          </div>
          ${salaDestaque ? `
            <div class="flex items-center gap-2.5 px-3 py-1 rounded-full bg-escola-accent/15 border border-escola-accent/30">
              <div class="w-4 h-4 rounded-md bg-escola-accent animate-pulse-glow"></div>
              <span class="text-escola-accent text-xs md:text-sm font-bold">Destacada: ${salaDestaque}</span>
            </div>
          ` : ''}
        </div>

        <div class="space-y-4 md:space-y-5 stagger">
          ${andaresOrdem.map((andarKey, idx) => {
    const andar = predio[andarKey];
    const isDestacado = andaresDestacados.includes(andar.nome);
    const projetosDoAndar = projetos.filter(p => projectBelongsToFloor(p, andar.nome));
    const floorIdAttr = isDestacado && andar.nome === andaresDestacados[0] ? 'id="andar-destacado"' : '';

    return `
              <div ${floorIdAttr} class="andar-card glass-card p-5 md:p-7 border transition-all duration-300 ${isDestacado ? 'border-escola-primary/50 pulse-glow bg-escola-primary/5' : 'border-white/5'}" style="animation-delay: ${idx * 0.08}s;">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-5">
                  <div class="flex items-center gap-4">
                    <div class="relative">
                      <div class="w-14 h-14 md:w-16 md:h-16 rounded-2xl flex items-center justify-center text-3xl md:text-4xl shadow-lg relative z-10"
                           style="background: linear-gradient(135deg, ${andar.cor}44, ${andar.cor}11); border: 1px solid ${andar.cor}55;">
                        ${andar.icone}
                      </div>
                      <div class="absolute -top-2 -right-2 w-7 h-7 md:w-8 md:h-8 rounded-full bg-escola-darker border-2 flex items-center justify-center text-white text-xs md:text-sm font-black shadow-lg"
                           style="border-color: ${andar.cor}88; background: linear-gradient(135deg, ${andar.cor}, ${andar.cor}dd);">
                        ${andar.numero}
                      </div>
                    </div>
                    <div>
                      <h3 class="text-lg md:text-2xl font-black font-heading text-white flex items-center gap-2">
                        ${andar.nome}
                        ${isDestacado ? `<span class="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-escola-accent/20 text-escola-accent text-[10px] font-bold border border-escola-accent/30">📍 Localização Selecionada</span>` : ''}
                      </h3>
                      <p class="text-slate-400 text-xs md:text-sm mt-1">${andar.descricao}</p>
                    </div>
                  </div>
                  <div class="flex items-center gap-4">
                    <div class="text-right">
                      <div class="text-2xl md:text-3xl font-black stat-number" style="--from: ${andar.cor}; --to: ${andar.cor}aa;">
                        ${projetosDoAndar.length}
                      </div>
                      <div class="text-[10px] md:text-xs text-slate-400 font-bold uppercase tracking-wider">Projetos</div>
                    </div>
                  </div>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2.5 md:gap-3">
                  ${andar.salas.map((sala, sIdx) => {
      const projetosNaSala = projetosDoAndar.filter(p => p.sala === sala.nome);
      const projetoNaSala = projetosNaSala[0];
      const isSalaDestacada = isDestacado && salaDestaque === sala.nome;
      const hasProjeto = projetosNaSala.length > 0;
      const isEspecial = sala.tipo === 'especial';

      let classes = 'sala-card relative p-3 md:p-4 rounded-xl text-center transition-all duration-300 border min-h-[84px] md:min-h-[100px] flex flex-col items-center justify-center gap-1.5 focus-visible:ring-2 focus-visible:ring-escola-accent ';
      let style = `animation-delay: ${sIdx * 0.03}s;`;

      if (isSalaDestacada) {
        classes += 'ring-2 ring-escola-accent scale-105 z-10 pulse-glow border-escola-accent cursor-pointer ';
        style += ' background: linear-gradient(135deg, rgba(34, 211, 238, 0.25), rgba(14, 165, 233, 0.15));';
      } else if (hasProjeto) {
        classes += 'has-projeto border-escola-accent/30 hover:-translate-y-1.5 hover:border-escola-accent/60 cursor-pointer ';
        style += ` background: linear-gradient(135deg, ${projetoNaSala.categoriaCor.from}22, ${projetoNaSala.categoriaCor.to}11);`;
      } else if (isEspecial) {
        classes += 'border-escola-warning/30 hover:border-escola-warning/50 cursor-help ';
        style += ' background: linear-gradient(135deg, rgba(245, 158, 11, 0.12), rgba(239, 68, 68, 0.08));';
      } else {
        classes += 'border-white/10 hover:border-white/20 hover:bg-white/[0.04] cursor-default ';
      }

      const onclick = hasProjeto
        ? projetosNaSala.length > 1
          ? `onclick="filterLocation('${andar.nome}', '${sala.nome}');"`
          : `onclick="renderProjetoDetalhes(${projetoNaSala.id})"`
        : '';
      const onkeydown = hasProjeto
        ? projetosNaSala.length > 1
          ? `onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); filterLocation('${andar.nome}', '${sala.nome}');}"`
          : `onkeydown="if(event.key==='Enter'||event.key===' '){event.preventDefault(); renderProjetoDetalhes(${projetoNaSala.id});}"`
        : '';
      const idAttr = isSalaDestacada && andar.nome === andaresDestacados[0] ? 'id="sala-destacada"' : '';
      const roleAttr = hasProjeto ? 'role="button" tabindex="0"' : '';

      return `
                      <div ${idAttr} class="${classes}" style="${style}" ${onclick} ${onkeydown} ${roleAttr} aria-label="${sala.nome}${hasProjeto ? ` - ${projetosNaSala.length} projeto(s)` : ''}">
                        <div class="text-lg md:text-2xl ${hasProjeto ? 'group-hover:scale-110 transition-transform duration-300' : ''}">
                          ${hasProjeto ? projetoNaSala.icone : isEspecial ? '⭐' : '🚪'}
                        </div>
                        <div class="font-bold text-[11px] md:text-sm leading-tight ${isSalaDestacada ? 'text-escola-accent' :
          hasProjeto ? 'text-white/95' :
            isEspecial ? 'text-escola-warning' : 'text-slate-400'
        }">
                          ${sala.nome}
                        </div>
                        ${hasProjeto ? `
                          <div class="text-[9px] md:text-[10px] text-slate-300 font-semibold leading-tight line-clamp-1 px-1">
                            ${projetosNaSala.length > 1 ? `${projetosNaSala.length} projetos • ver todos neste espaço` : projetoNaSala.titulo}
                          </div>
                        ` : ''}
                        ${isSalaDestacada ? `
                          <div class="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-escola-accent flex items-center justify-center text-escola-darker text-[10px] font-black shadow-escola animate-bounce">
                            📍
                          </div>
                        ` : ''}
                      </div>
                    `;
    }).join('')}
                </div>
              </div>
            `;
  }).join('')}
        </div>
      </div>

      <div class="glass-card p-5 md:p-7">
        <h3 class="text-lg md:text-xl font-bold text-white mb-4 font-heading flex items-center gap-2.5">
          <span class="text-xl">📌</span> Projetos por Andar
        </h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 stagger">
          ${Object.values(predio).map((andar, i) => {
    const projetosAndar = projetos.filter(p => projectBelongsToFloor(p, andar.nome));
    return `
              <div class="glass-card-hover p-4 md:p-5" style="animation-delay: ${i * 0.08}s;">
                <div class="flex items-center gap-2 mb-3">
                  <span class="text-2xl">${andar.icone}</span>
                  <span class="font-bold text-white">${andar.nome}</span>
                </div>
                <div class="space-y-2">
                  ${projetosAndar.length ? projetosAndar.map(p => `
                    <button onclick="renderProjetoDetalhes(${p.id})" class="w-full text-left px-3 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 hover:border-escola-accent/30 transition-all duration-200 group flex items-center gap-2.5 cursor-pointer">
                      <span class="text-lg">${p.icone}</span>
                      <div class="flex-1 min-w-0">
                        <div class="text-white/95 text-xs md:text-sm font-semibold truncate">${p.titulo}</div>
                        <div class="text-slate-400 text-[10px] md:text-xs">${getProjectLocationLabel(p)}</div>
                      </div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" class="text-slate-500 group-hover:text-escola-accent group-hover:translate-x-0.5 transition-all">
                        <path d="m9 18 6-6-6-6"/>
                      </svg>
                    </button>
                  `).join('') : '<p class="text-slate-500 text-xs italic px-3 py-2">Nenhum projeto neste andar</p>'}
                </div>
              </div>
            `;
  }).join('')}
        </div>
      </div>
    </div>
  `;

  // Rola suavemente até a sala destacada se especificada (UX-8)
  screenTransition(html, () => {
    if (salaDestaque) {
      setTimeout(() => {
        const destacadaEl = document.getElementById('sala-destacada') || document.getElementById('andar-destacado');
        if (destacadaEl) {
          destacadaEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }
      }, 250);
    }
  });
}

function renderMapaParaProjeto(andar, sala) {
  renderMapa(andar, sala);
}

// ============================================================
// TELA: SOBRE (UX-6 - NOME DA INSTITUIÇÃO ATUALIZADO)
// ============================================================

function renderSobre(pushHash = true) {
  currentScreen = 'sobre';
  updateActiveNav('sobre');
  pushNav({ screen: 'sobre', label: 'Sobre o Evento' });
  if (pushHash) syncHash('#sobre');

  const html = `
    <div class="space-y-6 md:space-y-8 fade-in max-w-4xl mx-auto">
      <div class="text-center max-w-2xl mx-auto">
        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-escola-accent/15 border border-escola-accent/30 mb-3">
          <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-escola-accent">
            <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"/>
            <circle cx="12" cy="10" r="3"/>
          </svg>
          <span class="text-escola-accent font-bold text-xs uppercase tracking-wider">Instituto Educacional Missão Paz</span>
        </div>
        <h2 class="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-2 font-heading">
          Projeto Interdisciplinar • <span class="hero-gradient-text">Mostra Cultural ODS</span>
        </h2>
        <p class="text-slate-300 text-sm md:text-base">
          Tema Geral: <strong>"ODS em Ação: Tecnologia, Sustentabilidade e Futuro"</strong>
        </p>
      </div>

      <!-- Card Inspirador: Versículo Lema -->
      <section class="p-5 md:p-6 rounded-3xl bg-gradient-to-r from-escola-accent/15 via-cyan-500/10 to-escola-primary/15 border border-escola-accent/30 shadow-card">
        <div class="flex items-start gap-3.5">
          <span class="text-2xl md:text-3xl shrink-0">📖</span>
          <div>
            <p class="text-sm md:text-base italic text-slate-100 font-serif leading-relaxed">
              "Esqueça o que se foi; não vivam no passado. Vejam, estou fazendo uma coisa nova! Ela já está surgindo! Vocês não a reconhecem? Até no deserto vou abrir um caminho e riachos no ermo."
            </p>
            <div class="text-xs font-bold text-escola-accent uppercase tracking-wider mt-2">
              — Isaías 43:18-19
            </div>
          </div>
        </div>
      </section>

      <!-- Estrutura Geral do Projeto -->
      <section class="glass-card p-6 md:p-8 relative overflow-hidden">
        <div class="hero-orb" style="width: 250px; height: 250px; background: #22d3ee; top: -80px; right: -60px; opacity: 0.2;"></div>
        <div class="relative z-10">
          <h3 class="text-xl md:text-2xl font-bold text-white mb-4 font-heading flex items-center gap-2">
            <span>🎓</span> Estrutura Geral do Projeto
          </h3>
          <p class="text-slate-300 text-sm md:text-base mb-6 leading-relaxed">
            O Projeto Interdisciplinar articula as diretrizes curriculares nacionais aos 17 Objetivos de Desenvolvimento Sustentável da ONU, unindo teoria em sala de aula à criação prática de protótipos úteis.
          </p>

          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.5 md:gap-4 stagger">
            <div class="glass-card-hover p-4 rounded-2xl">
              <div class="text-2xl mb-1.5">👥</div>
              <h4 class="text-white font-bold text-sm mb-1">Participantes</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Ensino Fundamental II (6º ao 9º ano) e Ensino Médio (1ª a 3ª série).</p>
            </div>
            <div class="glass-card-hover p-4 rounded-2xl">
              <div class="text-2xl mb-1.5">📊</div>
              <h4 class="text-white font-bold text-sm mb-1">Avaliação</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Trabalho 2 de cada etapa letiva trimestral com acompanhamento contínuo.</p>
            </div>
            <div class="glass-card-hover p-4 rounded-2xl">
              <div class="text-2xl mb-1.5">🏆</div>
              <h4 class="text-white font-bold text-sm mb-1">Culminância</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Mostra Cultural na 3ª etapa: <strong>EXPO ODS FUTURO</strong>.</p>
            </div>
            <div class="glass-card-hover p-4 rounded-2xl">
              <div class="text-2xl mb-1.5">🔬</div>
              <h4 class="text-white font-bold text-sm mb-1">Metodologia</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Projetos, pesquisa científica, prototipagem, experimentação e design thinking.</p>
            </div>
            <div class="glass-card-hover p-4 rounded-2xl sm:col-span-2">
              <div class="text-2xl mb-1.5">🎯</div>
              <h4 class="text-white font-bold text-sm mb-1">Objetivo Geral</h4>
              <p class="text-slate-400 text-xs leading-relaxed">Desenvolver soluções reais e criativas para problemas globais, alinhadas às metas das ODS, integrando todas as áreas do conhecimento escolar.</p>
            </div>
          </div>
        </div>
      </section>

      <!-- O Que Torna Este Projeto Especial -->
      <section class="glass-card p-6 md:p-8">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-5 font-heading flex items-center gap-2.5">
          <span class="text-2xl">✨</span> O que torna este projeto especial
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 stagger">
          ${[
      { titulo: 'Interdisciplinaridade Real', desc: 'Integra todas as disciplinas de forma real e prática no dia a dia da sala de aula.', icone: '🌐' },
      { titulo: 'Protagonismo Juvenil', desc: 'Incentiva a liderança e autoria dos alunos na busca por soluções sustentáveis.', icone: '💡' },
      { titulo: 'Tecnologia Aplicada', desc: 'Aplica sensores, automação, microcontroladores, programação e modelagem 3D.', icone: '🤖' },
      { titulo: 'Produtos Reais e Úteis', desc: 'Gera produtos funcionais e inovadores que atendem a comunidade escolar e além.', icone: '🚀' },
      { titulo: 'Mostra Moderna e Viva', desc: 'Culmina em uma Mostra Cultural viva, tecnológica, interativa e transformadora.', icone: '🏛️' }
    ].map((item, i) => `
            <div class="glass-card-hover p-4 rounded-2xl flex gap-3 items-start" style="animation-delay: ${i * 0.05}s;">
              <div class="text-2xl shrink-0 mt-0.5">${item.icone}</div>
              <div>
                <h4 class="text-white font-bold text-sm mb-1">${item.titulo}</h4>
                <p class="text-slate-400 text-xs leading-relaxed">${item.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Informações Práticas do Evento -->
      <section class="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 stagger">
        ${[
      {
        icone: '📅',
        titulo: 'Data da Culminância',
        valor: '3ª Etapa Letiva',
        sub: 'Mostra Cultural Oficial',
        cor: '#22d3ee'
      },
      {
        icone: '⏰',
        titulo: 'Horário & Acesso',
        valor: '8h às 11h',
        sub: 'Aberto a pais, comunidade e visitantes',
        cor: '#10b981'
      },
      {
        icone: '📍',
        titulo: 'Local do Evento',
        valor: 'Instituto Missão Paz',
        sub: 'Prédio escolar (1º Andar/Térreo ao 5º Andar)',
        cor: '#8b5cf6'
      }
    ].map((info, i) => `
          <div class="glass-card-hover p-5 md:p-6 text-center" style="animation-delay: ${i * 0.08}s;">
            <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl mx-auto mb-4 shadow-card"
                 style="background: linear-gradient(135deg, ${info.cor}33, ${info.cor}11); border: 1px solid ${info.cor}44;">
              ${info.icone}
            </div>
            <h4 class="text-slate-400 text-xs font-bold uppercase tracking-wider mb-2">${info.titulo}</h4>
            <div class="text-lg md:text-xl font-black text-white mb-1">${info.valor}</div>
            <div class="text-slate-400 text-xs">${info.sub}</div>
          </div>
        `).join('')}
      </section>

      <!-- Dicas para Visitantes -->
      <section class="glass-card p-6 md:p-8">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-5 font-heading flex items-center gap-2.5">
          <span class="text-2xl">💡</span> Dicas para uma Ótima Visita
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4 stagger">
          ${[
      { titulo: 'Siga a Rota Recomendada', desc: 'Ative a rota guiada no catálogo para percorrer os andares de exposição do 1º andar/térreo ao 5º andar.', icone: '🏁' },
      { titulo: 'Use o Mapa Interativo', desc: 'Consulte as turmas e os projetos por andar. Quando a sala ainda não foi definida, o guia mostra “Local a confirmar”.', icone: '🗺️' },
      { titulo: 'Converse com os Alunos', desc: 'Pergunte aos pesquisadores sobre as hipóteses, testes e o papel de cada disciplina no protótipo.', icone: '🗣️' },
      { titulo: 'Compartilhe pelo QR Code', desc: 'Cada projeto tem um QR Code exclusivo para você abrir no seu celular e compartilhar.', icone: '📱' },
      { titulo: 'Assista às Demonstrações', desc: 'Confira a chama ao vivo no Biodigestor e a telemetria em tempo real na Estação Climática.', icone: '⚡' },
      { titulo: 'Peça uma demonstração', desc: 'Converse com os estudantes e peça para ver o protótipo ou a solução que desenvolveram.', icone: '🔬' }
    ].map((dica, i) => `
            <div class="glass-card-hover p-4 md:p-5 flex gap-3 md:gap-4" style="animation-delay: ${i * 0.05}s;">
              <div class="text-3xl md:text-4xl flex-shrink-0">${dica.icone}</div>
              <div>
                <h4 class="font-bold text-white text-sm md:text-base mb-1">${dica.titulo}</h4>
                <p class="text-slate-400 text-xs md:text-sm leading-relaxed">${dica.desc}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </section>

      <!-- Suporte -->
      <section class="glass-card p-6 md:p-8">
        <h3 class="text-xl md:text-2xl font-bold text-white mb-5 font-heading flex items-center gap-2.5">
          <span class="text-2xl">❓</span> Ponto de Informações e Suporte
        </h3>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div class="glass-card-hover p-5 flex gap-4 items-center">
            <div class="w-14 h-14 rounded-2xl bg-escola-accent/15 border border-escola-accent/30 flex items-center justify-center text-3xl flex-shrink-0">
              ℹ️
            </div>
            <div>
              <h4 class="font-bold text-white mb-0.5">Orientação durante a visita</h4>
              <p class="text-slate-400 text-sm">Procure um monitor identificado ou consulte a equipe do evento; o ponto exato de atendimento será confirmado pela organização.</p>
            </div>
          </div>
          <div class="glass-card-hover p-5 flex gap-4 items-center">
            <div class="w-14 h-14 rounded-2xl bg-escola-danger/15 border border-escola-danger/30 flex items-center justify-center text-3xl flex-shrink-0">
              📍
            </div>
            <div>
              <h4 class="font-bold text-white mb-0.5">Salas dos projetos</h4>
              <p class="text-slate-400 text-sm">Confira o mapa; locais ainda sem sala definida aparecem como “Local a confirmar”.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `;

  screenTransition(html);
}

// ============================================================
// INICIALIZAÇÃO E BINDINGS (BUG #1 CORRIGIDO)
// ============================================================

function bindNavButtons() {
  const btnMap = {
    'btn-home': () => renderHome(),
    'btn-projetos': () => renderProjetos(),
    'btn-mapa': () => renderMapa(),
    'btn-sobre': () => renderSobre(),
    'btn-home-desktop': () => renderHome(),
    'btn-projetos-desktop': () => renderProjetos(),
    'btn-mapa-desktop': () => renderMapa(),
    'btn-sobre-desktop': () => renderSobre(),
  };

  Object.entries(btnMap).forEach(([id, fn]) => {
    const btn = document.getElementById(id);
    if (btn) btn.addEventListener('click', fn);
  });
}

function updateThemeToggleLabel() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
  const label = nextTheme === 'light' ? 'Ativar modo claro' : 'Ativar modo escuro';
  button.setAttribute('aria-label', label);
  button.setAttribute('title', label);
  const text = button.querySelector('.theme-toggle-label');
  if (text) text.textContent = nextTheme === 'light' ? 'Modo claro' : 'Modo escuro';
}

function setTheme(theme) {
  const nextTheme = theme === 'light' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nextTheme;
  try {
    sessionStorage.setItem('feira_ciencias_theme_session_2026', nextTheme);
  } catch (error) {
    // O tema continua alternável mesmo se o navegador bloquear o armazenamento da sessão.
  }

  const themeColor = document.querySelector('meta[name="theme-color"]');
  if (themeColor) themeColor.setAttribute('content', nextTheme === 'light' ? '#f4f8fc' : '#020617');
  updateThemeToggleLabel();
}

function initThemeToggle() {
  const button = document.getElementById('theme-toggle');
  if (!button) return;

  updateThemeToggleLabel();
  button.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  });
}

// Exportações no escopo global para onclicks da UI
window.renderHome = renderHome;
window.renderProjetos = renderProjetos;
window.renderMapa = renderMapa;
window.renderSobre = renderSobre;
window.renderProjetoDetalhes = renderProjetoDetalhes;
window.renderMapaParaProjeto = renderMapaParaProjeto;
window.filterProjetos = filterProjetos;
window.filterAndar = filterAndar;
window.filterLocation = filterLocation;
window.clearLocationFilter = clearLocationFilter;
window.toggleGuidedRoute = toggleGuidedRoute;
window.clearSearch = clearSearch;
window.clearFilters = clearFilters;
window.openLightbox = openLightbox;
window.openProjetoLightbox = openProjetoLightbox;
window.closeLightbox = closeLightbox;
window.nextLightboxImage = nextLightboxImage;
window.prevLightboxImage = prevLightboxImage;
window.goBack = goBack;
window.openShareModal = openShareModal;
window.openSiteShareModal = openSiteShareModal;
window.closeModal = closeModal;
window.copyProjectLink = copyProjectLink;

let __appInited = false;
function initApp() {
  if (__appInited) return;
  __appInited = true;
  initThemeToggle();
  createParticles();
  bindNavButtons();

  // Se houver hash na URL, inicializa direto na rota correspondente
  if (window.location.hash) {
    handleHashChange();
  } else {
    renderHome(false);
  }
}

// Inicialização única e idempotente (Bug #1 corrigido)
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initApp);
} else {
  initApp();
}

// Developed by: Miguel A. Pacheco & Leonardo Marques | Instituto Educacional Missão Paz 3001
