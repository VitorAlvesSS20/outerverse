import aberturaTrack from '../assets/sounds/Abertura.mp3';
import encerramentoTrack from '../assets/sounds/Encerramento.mp3';
import escarlataTrack from '../assets/sounds/Escarlata.mp3';
import auroraTrack from '../assets/sounds/Aurora.mp3';
import criptaTrack from '../assets/sounds/Cripta.mp3';

export type ChapterInsert =
  | {
      id: string;
      type: 'separator';
      afterParagraph: number;
      label?: string;
    }
  | {
      id: string;
      type: 'image';
      afterParagraph: number;
      src: string;
      alt: string;
      caption?: string;
    }
  | {
      id: string;
      type: 'video';
      afterParagraph: number;
      src: string;
      caption?: string;
      poster?: string;
      autoPlay?: boolean;
      loop?: boolean;
      muted?: boolean;
    }
  | {
      id: string;
      type: 'scare';
      afterParagraph: number;
      triggerText: string;
      src: string;
      alt: string;
      caption?: string;
    };

export interface Chapter {
  id: number;
  title: string;
  content: string;
  inserts?: ChapterInsert[];
}

export interface Book {
  id: number;
  title: string;
  description: string;
  author: string;
  tags: string[];
  coverImage: string;
  chapters: Chapter[];
  musicTracks: string[];
}

export const books: Book[] = [
  {
    id: 1,
    title: '— Hemodome —',
    description: 'Hemodome é um conto sobrenatural que narra a visão de um jovem em uma Academia que não só estuda o seu corpo, como também se aproveita dos dons de sua raça. O protagonista, e grande parte dos personagens não são Humanos, mas sim Hemorrágicos. Uma raça amaldiçoada que nasce da falha da transformação de um individuo em Vampiro, em função disso, sofrem de mutações físicas intensas e adquirem a capacidade de usar Magia, porém sofrem com hemorragias constantes.',
    author: 'Verso',
    tags: ['Sobrenatural', 'Grotesco', 'Body Horror', 'Filosofico'],
    coverImage: 'https://i.pinimg.com/736x/d0/52/bc/d052bcaae122de7fb29daa37daf8f841.jpg',
    musicTracks: [
      aberturaTrack,
      encerramentoTrack,
      escarlataTrack,
      auroraTrack,
      criptaTrack,
    ],
    chapters: [
      {
        id: 1,
        inserts: [
          {
            id: 'cap-1-separador-refeitorio',
            type: 'separator',
            afterParagraph: 3,
            label: 'Registro interno da Abel Academy',
          },
          {
            id: 'cap-1-ilustracao-refeitorio',
            type: 'image',
            afterParagraph: 6,
            src: 'https://media.discordapp.net/attachments/1507358778582896682/1508654144221614090/77f738bf86188c93746c3a91c80ee32b.jpg?ex=6a165329&is=6a1501a9&hm=aea60710d5d5eff1489eda5ad095cb02c1dd1255e4e39ce8bc9fbdea6f74bedd&=&format=webp&width=920&height=306',
            alt: 'Corredor escuro com luz vermelha atravessando a nevoa',
            caption: 'Os corredores proximos ao refeitorio pareciam respirar antes do incidente.',
          },
          {
            id: 'cap-1-susto-porcelana',
            type: 'scare',
            afterParagraph: 18,
            triggerText: 'Examinar os estilhacos de porcelana',
            src: 'https://media.discordapp.net/attachments/1507358778582896682/1508654144901218445/552e54fa56549149f65f3c00939b80fb.jpg?ex=6a165329&is=6a1501a9&hm=5e1a9205d119eef64ea308ebe1eb49233c00dd32e8c4364dfbba9c385b1551e0&=&format=webp&width=800&height=800',
            alt: 'Rosto parcialmente oculto emergindo da escuridao',
            caption: 'Havia algo refletido no leite derramado.',
          },
        ],
        title: 'VÉSPERAS DE PORCELANA E FERRO',
        content: `O ar dentro da Academia Abel nunca circulava. Ele estagnava, pesado como um lençol úmido, sempre impregnado pelo cheiro metálico e adocicado de sangue. Não era o odor escancarado de um matadouro, mas o aroma insidioso de uma ferida que se recusa a cicatrizar, uma hemorragia lenta, disfarçada por uniformes de seda e colarinhos engomados.

Naquele santuário de tortura biológica, o silêncio era luxo. O ambiente era constantemente cortado pelo som úmido de fluidos escapando de corpos deformados.

Vex, um estudante do terceiro ciclo e aspirante ao Ocultismo Carmim, encarava o refeitório. A arquitetura do lugar parecia projetada para esmagar o espírito. Gárgulas agonizantes pendiam do teto, como se chorassem lágrimas de pedra sobre os alunos.

Vex mantinha a postura rígida, uma disciplina que aprendeu convivendo com a dor crônica. Por baixo do uniforme negro e escarlate, sua pele pálida era um mapa de agonia.

Sua mutação particular, a marca deixada pelo "Príncipe do Sangue", manifestava-se como fendas nas costelas e no pescoço, parecidas com brânquias. Elas não serviam para respirar. Serviam para chorar sangue, o tempo todo. Era preciso um esforço mental absurdo para não rasgar a própria carne em busca de alívio.

Diante dele, sobre a mesa de carvalho manchada, repousava sua salvação temporária: um cálice de porcelana branca cheio de leite.

A ironia era óbvia. Eles eram monstros. Predadores com sangue especial, imunes a venenos e capazes de regenerações milagrosas. Mas ali estavam, reduzidos a bebês chorões, dependendo de leite para silenciar a fome de suas células. Na academia, o consumo de leite não era nutrição; era uma coleira. A linha tênue que separava o estudante erudito da besta canibal.

Ao redor de Vex, outros mutantes participavam do mesmo ritual silencioso. A tensão era elétrica.

À sua esquerda, uma jovem da linhagem dos Hemofílicos tremia. Seus olhos múltiplos, parecidos com os de um inseto, moviam-se freneticamente. Ela estava perto do limite. Um susto ou um acesso de fúria seriam suficientes para ativar o "Modo Carniçal", transformando aquela garota frágil em uma força destrutiva e irracional. Vex podia sentir o calor febril emanando dela. O cheiro de adrenalina azeda começava a vencer o aroma do leite.

Mais adiante, isolado no canto, um Vetor da Praga apodrecia o ambiente ao seu redor. A madeira da mesa sob seus dedos enluvados escurecia e mofava em tempo real. Ele sequer bebia o leite; apenas existia como uma praga viva.

Vex ergueu o cálice. O contraste do líquido branco com suas mãos pálidas era gritante. Ele bebeu. O líquido morno desceu rasgando e o efeito foi imediato: o milhão de agulhas espetando seus nervos silenciou. O desejo de se cortar e deixar o sangue jorrar foi controlado. Por enquanto.

Ele colocou o cálice na mesa. O clique da porcelana ecoou pelo salão.

Com a mente limpa da dor, ele voltou a pensar em seus planos. Como Ocultista, ele não queria apenas aguentar a maldição; queria dominá-la. Para Vex, aquele sangue não era desperdício. Era tinta para reescrever a realidade. Ele moveu o indicador sobre a mesa, desenhando um símbolo com a ponta do dedo melada de vermelho: um glifo de coagulação. O sangue na madeira brilhou por um segundo antes de sumir. Um pequeno triunfo.

Mas a paz na Academia Abel dura pouco.

CRACK.

O som de porcelana estilhaçando cortou o refeitório. O tempo pareceu parar.

Na mesa ao lado, o cálice da garota-inseto tinha caído. O leite se espalhava pelas lajotas do chão, mas vinha acompanhado de algo escuro. No espasmo, ela havia mordido a própria língua.

Uma gota. Uma única gota de sangue fresco e carmim caiu bem no meio do leite branco...

O cheiro atingiu o salão como uma explosão. Não era o odor suave de antes. Era sangue novo, oxigenado, carregado de pânico. O cheiro do gatilho.

Em um segundo, dezenas de cabeças moveram-se em direção à mesa. Pupilas se dilataram até os olhos ficarem completamente pretos. Mutações escondidas sob as roupas começaram a rasgar tecidos. Tentáculos se retesaram nas mangas. Ossos estalaram sob os coletes. A "civilidade" sumiu. Só sobrou a fome.

As fendas nas costelas de Vex se abriram violentamente. O gotejamento virou um riacho, encharcando sua camisa de sangue. Uma onda de selvageria atingiu seu cérebro. A Adrenalina Carmim batia na porta, oferecendo o poder de um deus em troca de sua sanidade.

Vex agarrou a borda da mesa com tanta força que os nós dos seus dedos empalideceram. Ele lutou contra o próprio corpo, enquanto o refeitório da Academia Abel despencava no abismo, prestes a virar um matadouro.`,
      },
      {
        id: 2,
        inserts: [
          {
            id: 'cap-2-separador-caos',
            type: 'separator',
            afterParagraph: 2,
            label: 'O Refeitório Desmorona',
          },
          {
            id: 'cap-2-imagem-metamorfose',
            type: 'scare',
            afterParagraph: 7,
            triggerText: 'Observar a metamorfose da aluna',
            src: 'https://cdn.discordapp.com/attachments/1507358778582896682/1508796816634937486/bf2c0d9adae4e0e9f970c9e237758cd3.jpg?ex=6a16d809&is=6a158689&hm=9f6852a30c849f0ea96f14d9c3d60ccf3cd0d8a9a6285423aec1667489f4dddb',
            alt: 'Figura humanóide distorcida em escuridão com tons vermelhos',
            caption: 'A metamorfose do Modo Carniçal não era uma transformação - era uma revelação do que sempre estivera preso.',
          },
          {
            id: 'cap-2-separador-thorne',
            type: 'separator',
            afterParagraph: 15,
            label: 'A Entrada do Decano Thorne',
          },
          {
            id: 'cap-2-imagem-thorne',
            type: 'scare',
            afterParagraph: 18,
            triggerText: 'Encarar Decano Thorne',
            src: 'https://media.discordapp.net/attachments/1507358778582896682/1508797903085502514/3e4aa171246b9ab399d088f030fc9b4d.jpg?ex=6a16d90c&is=6a15878c&hm=627f8c879093356c92ca8ce54854244a3192073c880cef0c29d87a732595d69d&=&format=webp&width=920&height=920',
            alt: 'Silhueta de figura alta e elegante',
            caption: 'A presença de Thorne era uma corrente de ar gelado que extinguia toda a fúria.',
          },
        ],
        title: 'A EUCARISTIA DO CAOS',
        content: `O silêncio que se seguiu ao estilhaçar da porcelana não foi uma ausência de som. Foi um vácuo faminto, uma pressão que sugava o oxigênio dos pulmões. Naquela fração de segundo, a civilidade da Academia Abel, aquela pátina fina de erudição e etiqueta, descascou como tinta velha sob o calor de uma fornalha.

O átomo da discórdia fora lançado: uma gota de sangue vivo, pulsante de terror, diluindo-se na brancura do leite entornado. Para um Hemorrágico, aquele aroma não era um sinal. Era uma ordem que não aceitava recusas.

Vex sentiu o impacto antes mesmo de conseguir pensar. Suas fendas dérmicas, antes apenas lacrimejantes, escancararam-se em um espasmo violento. O sangue que jorrava delas agora queimava, quase corrosivo.

O Sangue Tipo C em suas veias, geralmente uma torrente contida, transformou-se em um mar revolto de células gigantescas e agressivas. A dor mudou. Não era mais um peso surdo; era a eletricidade sibilante da caça.

Ao seu redor, o refeitório virou um quadro de horror. A jovem Hemofílica agora era o epicentro de uma metamorfose grotesca. Seus múltiplos olhos de inseto giravam em órbitas independentes, inundados por uma hemorragia interna que os tornava rubis negros.

Ela soltou um som que nenhum humano conseguiria produzir: um estalido úmido de ossos se alongando e carne se rasgando. O Modo Carniçal a havia reivindicado. Suas mãos viraram garras longas, cravando-se na mesa de carvalho com tanta força que a madeira ancestral lascou sob a pressão.

— C-contenham-se! — Vex tentou gritar, mas a voz saiu como um sussurro áspero, sufocado pelo gosto de ferro em sua própria garganta.

A razão era um náufrago no oceano do instinto. O refeitório explodiu. Hemorrágicos que minutos atrás discutiam filosofia lançaram-se uns sobre os outros, movidos por uma gravidade biológica irresistível.

Era uma dança de aberrações. Membros extras brotavam rasgando as costuras dos uniformes, caudas de osso chicoteavam o ar e tentáculos de carne crua buscavam o calor do fluxo vital alheio.

Vex, no entanto, era um Ocultista. Sua mente fora temperada pelo estudo das geometrias do sangue. Enquanto o caos se instalava, ele se recusou a ceder. Tornou-se uma âncora.

Com um movimento rápido e doloroso, ele enfiou a mão direita na própria ferida aberta nas costelas. Com a palma inundada pelo fluido quente, começou a desenhar um arco sobre a mesa.

— Sanguis est vinculum, sanguis est lex... — entoou. As palavras carregadas de poder vibraram na medula de seus ossos.

O sangue que ele espalhava obedeceu. Sob o comando de sua vontade, o líquido escarlate solidificou-se no ar, moldando-se em fios de uma teia intrincada. Uma rede de contenção mágica que brilhava com uma luz vermelha doentia. Ele não queria ferir, queria estancar o caos.

Mas a fúria ao redor era vasta demais. Um aluno, cuja mutação transformara a coluna vertebral em uma crista de espinhos ósseos, saltou em direção a Vex. Os olhos dele estavam injetados, completamente vazios de consciência.

O impacto foi brutal. Vex foi lançado contra os pilares de pedra. O choque expulsou o ar de seus pulmões e fez suas fendas sangrarem ainda mais. A dor tentou arrastá-lo para a loucura. Ele sentiu a força titânica do agressor, o vigor de uma besta que ignorava a própria integridade física para estraçalhar o alvo.

Foi nesse instante, no auge do tumulto, que as portas de bronze do refeitório foram escancaradas por uma força invisível e gélida.

O som que se seguiu não foi um grito, mas o toque de um sino de prata: uma nota única, pura e insuportavelmente alta que reverberou pelas paredes da Academia Abel.

O efeito foi devastador. A nota agiu direto no Sangue Tipo C, forçando uma coagulação instantânea e dolorosa. Os Hemorrágicos em estado de fúria desmoronaram no chão. Seus corpos começaram a convulsionar enquanto a magia externa forçava seus sistemas a uma parada artificial.

No limiar das portas, emoldurado pela luz pálida do crepúsculo, estava o Decano Thorne. Ele não era um Hemorrágico. Era um ser de uma linhagem distinta, um dos "Pastores" da Academia. Sua presença exalava um frio que sugava todo o calor e a fúria do ambiente. Em sua mão, ele segurava um incensário de prata, de onde emanava uma fumaça azulada com cheiro de ozônio e cânfora, o antídoto químico para o frenesi do sangue.

— Animais... — a voz de Thorne era uma lâmina de gelo, sem qualquer emoção humana. 
— Vocês buscam a transcendência através do ocultismo, mas caem ao primeiro sussurro da carne. Que espetáculo deplorável.

Vex, apoiado contra o pilar, lutava para não desmaiar enquanto a fumaça de Thorne forçava suas mutações a se retraírem. A dor da retração era pior do que a da expansão. Era como se mil ganchos de ferro estivessem puxando sua pele de volta ao lugar, costurando suas feridas com linha de gelo.

Os Pacificadores da Academia — autômatos de ferro e couro que não possuíam sangue para ser corrompido — entraram no salão. Eles começaram a recolher os caídos com uma eficiência mecânica e brutal. Os alunos eram arrastados como sacos de carne em direção às câmaras de purificação, onde receberiam banhos de leite enriquecido e isolamento sensorial.

Thorne caminhou pelo rastro de destruição. Seus sapatos polidos evitavam as poças de leite e sangue com um desdém coreografado. Ele parou diante de Vex. Seus olhos, de um azul gélido e inumano, analisaram o símbolo incompleto que o jovem desenhara na mesa.

— Um esforço louvável, Jovem Atlas — disse o Decano, sem qualquer elogio no tom. 
— Você tentou impor ordem ao caos. Mas esqueceu-se de uma lição fundamental da nossa instituição: o sangue de um Hemorrágico não conhece a ordem. Ele conhece apenas o dono. E o dono de vocês não está nestas salas de aula.

Vex ergueu o olhar, a visão ainda borrada por manchas vermelhas.

— O Príncipe... — murmurou, com a voz falha.

— O Príncipe do Sangue deu-lhes a matéria-prima. — Thorne inclinou-se, seu hálito cheirava como pipoca mofada. 
— A Academia dá-lhes a forma. Mas hoje, vocês provaram que ainda são apenas argila úmida e sangrenta. Limpe-se. O Conselho quer um relatório sobre este "incidente". E não pense que sua tentativa de contenção o livrará da punição. Na Academia Abel, a falha de um é a falha da raça.

Thorne deu as costas, sua capa negra flutuando como as asas de um abutre sobre o campo de batalha.

Vex permaneceu ali, entre os destroços de porcelana e os ecos de gritos silenciados, sentindo o gosto amargo do leite e do ferro em sua língua. Ele olhou para suas mãos; o sangue ocultista que ele conjurara agora era apenas uma mancha seca e sem brilho na madeira.`,
      },
      {
        id: 3,
        inserts: [
          {
            id: 'cap-3-separador-descenso',
            type: 'separator',
            afterParagraph: 1,
            label: 'Descida às Cisternas',
          },
          {
            id: 'cap-3-imagem-corridores',
            type: 'scare',
            afterParagraph: 4,
            triggerText: 'Aproximar-se da banheira',
            src: 'https://media.discordapp.net/attachments/1507358778582896682/1508799075338686644/4c49b518b2597fc42d1f9f6ffa56eb65.jpg?ex=6a16da23&is=6a1588a3&hm=b8475572340fd63d7c95cc5cb9218335d6225cb5aeb085441fb7d052770803a6&=&format=webp&width=920&height=920',
            alt: 'Corredor subterrâneo com uma leve neblina',
            caption: 'Os túneis da Academia Abel respiravam com uma vida própria, antiga e corrompida.',
          },
          {
            id: 'cap-3-separador-seraphina',
            type: 'separator',
            afterParagraph: 9,
            label: 'Seraphina emerge das Águas',
          },
          {
            id: 'cap-3-imagem-cisterna',
            type: 'scare',
            afterParagraph: 13,
            triggerText: 'Corpo hipnotizante emerge da banheira',
            src: 'https://media.discordapp.net/attachments/1507358778582896682/1508802907217334282/afd39e0360419f086cb28b73f6d6aa15.jpg?ex=6a16ddb5&is=6a158c35&hm=e178f78e5900493bab126b819f39b0dade7b8f9be1f61f972bc4f1663e7ee7b7&=&format=webp&width=445&height=445',
            alt: 'Banheira de leite',
            caption: 'O leite alquímico guardava os segredos de mutações que o conhecimento comum jamais poderia compreender.',
          },
          {
            id: 'cap-3-separador-verdade',
            type: 'separator',
            afterParagraph: 20,
            label: 'O Preço da Verdade',
          },
        ],
        title: 'A LITURGIA DAS CISTERNAS ALVAS',
        content: `O descenso para as entranhas da Academia Abel era uma jornada através de círculos concêntricos de um frio estéril. Vex era conduzido pelos Pacificadores — os autômatos de latão e couro cujas engrenagens rangiam num compasso rítmico, indiferentes à agonia que escoltavam. O ar, antes saturado pelo odor de ferro, tornara-se denso com uma névoa de cânfora e leite vaporizado. Eles haviam chegado às Cisternas de Marfim, o local onde a carne rebelde dos Hemorrágicos era forçada ao arrependimento através da hidroterapia alquímica.

Vex cambaleava. Sua silhueta projetava uma sombra trêmula contra as paredes de azulejos pálidos. Sob a luz bruxuleante das lâmpadas de gás néon, ele parecia um espectro. Sua pele, de uma palidez tão extrema que beirava o azulado, assemelhava-se a um pergaminho molhado esticado sobre um esqueleto fino e elegante.

As fendas em seu pescoço, agora forçadas a se fechar pela magia de Thorne, pareciam cicatrizes de navalha arroxeadas, pulsando com o esforço de conter o fluxo interno. Seus olhos, de um castanho tão escuro que as pupilas se perdiam na íris, carregavam o brilho febril de quem habita permanentemente o limiar da exaustão.

Ao ser empurrado para dentro de uma cela circular de mármore, ele percebeu que não estava sozinho. No centro da câmara, imersa até a cintura em uma banheira esculpida em quartzo, repousava Seraphina, uma veterana da linhagem dos Vetores da Praga.

Seraphina era uma visão de beleza grotesca. Seu rosto possuía traços aristocráticos, um nariz afilado e lábios que mantinham um arco de desdém permanente. No entanto, a mutação nela fora menos sutil. De suas costas e ombros, projetavam-se afiadas estruturas ósseas que lembravam as nervuras de asas de morcego, mas sem a membrana; eram apenas hastes de marfim vivo que perfuravam sua pele.

Sua pele não era lisa como a de Vex, mas craquelada como porcelana antiga. Das fendas mínimas em seus braços brotavam pequenas flores de um fungo carmesim, cujos esporos brilhavam fracamente no vapor. Seu cabelo era uma cascata de fios brancos como a neve, mas mofados nas pontas, onde a Praga era mais intensa.

— O jovem Ocultista sobreviveu à comunhão de sangue do refeitório~ — a voz de Seraphina era profunda e vibrante, carregada de ironia. 
— Venha, Vex. O leite está quentinho.

Vex tirou sua túnica babada pelo próprio soro vital com movimentos mecânicos. Seus dedos longos e finos, com as pontas sempre vermelhas pelo sangue acumulado, tremiam. Ele mergulhou na cisterna oposta. O líquido branco e espesso envolveu seu corpo, e ele soltou um suspiro entrecortado.

O leite não era apenas um nutriente. Naquela concentração alquímica, ele agia como um selante biológico, acalmando a sede das células e forçando as mutações a um estado de dormência dolorosa.

— O Decano Thorne falou sobre o Príncipe — murmurou Vex, encostando a nuca na borda fria do mármore. 
— Ele disse que somos apenas argila úmida.

Seraphina riu. O som fez com que as pequenas flores em seus braços libertassem uma nuvem de esporos que flutuaram sobre a superfície do leite como poeira de rubi.

— Thorne é um pastor que odeia o rebanho. Ele nos vê como erros de cálculo de uma dividade esquecida. Mas olhe só para você, Vex. — Ela estendeu a mão, cujas unhas eram negras e longas como espinhos. 
— Você é um Ocultista. Possui um potencial além das bestas consumidas por seus instintos selvagens. Você busca impor ordem no caos... Isso não é ser argila. Isso é ser o escultor e a pedra ao mesmo tempo! hah-

A luz da câmara oscilou. Vex observou as veias de Seraphina, visíveis sob a pele craquelada. O Sangue Tipo C nela não corria; ele parecia rastejar como uma substância viva, levando a corrupção da Praga para cada centímetro de seu ser. Ela era um ecossistema vivo de agonia.

— Por que nos mantêm aqui, Seraphina? — perguntou ele, a voz ganhando firmeza sob o efeito analgésico do banho. — Se somos tão perigosos, se a nossa biologia ameaça o equilíbrio do Domo, por que não nos erradicam de uma vez?

Seraphina inclinou a cabeça. Seus olhos prateados fixaram-se nele com uma intensidade predatória.

— Porque o Príncipe do Sangue não nos criou por mero capricho, meu jovem. Somos uma arma que ainda não aprendeu a usar a si mesma. A Academia Abel não é uma escola, é um campo de provas. Eles nos testam, nos quebram e nos remendam com leite e rituais para ver qual de nós alcançará a Metamorfose Final sem sucumbir à loucura.

Ela se ergueu da banheira. O leite escorria por suas costas e pelas hastes ósseas como uma cascata líquida. Ela caminhou em direção a Vex com uma graça inumana, cada passo deixando uma mancha de umidade floral no chão de azulejos. Ao chegar perto, ela se inclinou. Vex pôde sentir o cheiro de terra molhada e decomposição doce que emanava de sua pele.

— Thorne teme o que aconteceu hoje no refeitório — sussurrou ela perto de seu ouvido, o calor de sua respiração contrastando com o frio do ambiente. — Ele teme que a fome comece a superar o controle. Mas ele não sabe que alguns de nós já pararam de temer a dor. Alguns de nós começaram a saboreá-la.

Ela deslizou o dedo de unha negra pelo pescoço de Vex, parando exatamente sobre uma de suas fendas fechadas. A pressão foi mínima, mas Vex sentiu uma faísca de poder percorrer sua medula.

— O Conselho exigirá seu relatório, Ocultista. Eles buscarão sinais de traição ou fraqueza. Dê a eles a submissão que desejam, mas guarde o seu sangue para o que está por vir. As paredes do Hemodome estão começando a suar, Vex. e não é água o que está brotando das pedras.

Seraphina afastou-se, desaparecendo nas sombras antes que os Pacificadores retornassem para retirá-lo da cisterna.

Vex permaneceu no banho de leite, sentindo sua pele agora tensa e artificialmente curada. Ele olhou para o próprio reflexo na superfície branca do líquido. Não via mais apenas um estudante trágico ou uma mutação interrompida. Via a promessa de algo antigo e faminto, uma força que nenhum volume de leite ou oração ao Príncipe poderia conter por muito mais tempo.`,
      },
      {
        id: 4,
        inserts: [
          {
            id: 'cap-4-separador-biblioteca',
            type: 'separator',
            afterParagraph: 2,
            label: 'A Biblioteca da Abel Academy',
          },
          {
            id: 'cap-4-imagem-corridores-biblioteca',
            type: 'image',
            afterParagraph: 5,
            src: 'https://media.discordapp.net/attachments/1507358778582896682/1508806572304760883/a5388649fae59beba3f97bfbb8a673b1.jpg?ex=6a16e11f&is=6a158f9f&hm=302b51c07037a1600b788621cf6c4f02c2f06b9e494c25477dfe64304ee9eefd&=&format=webp&width=920&height=920',
            alt: 'Estantes de biblioteca gótica com livros antigos e iluminação sombria',
            caption: 'Os corredores da Biblioteca pulsavam com o conhecimento de transformações proibidas.',
          },
          {
            id: 'cap-4-separador-vesper',
            type: 'separator',
            afterParagraph: 9,
            label: 'Mestre Vesper - Guardião dos Códices',
          },
          {
            id: 'cap-4-imagem-codex',
            type: 'scare',
            afterParagraph: 15,
            triggerText: 'Examinar o Codex Cruor',
            src: 'https://media.discordapp.net/attachments/1507358778582896682/1508807181275758592/22a0c3216cfb5eee3024f173856fece2.jpg?ex=6a16e1b0&is=6a159030&hm=20b52d8dd0196bf8e95f2b5490cc8c911f480cf8ed6123d4b3a14abb90d8fb32&=&format=webp&width=823&height=930',
            alt: 'Livro antigo aberto com páginas bege e textura de pergaminho sob luz morna',
            caption: 'O Codex Cruor não era apenas um livro - era uma janela para o que o Príncipe havia planejado.',
          },
          {
            id: 'cap-4-separador-visao',
            type: 'separator',
            afterParagraph: 18,
            label: 'A Visão do Primum Cruor',
          },
          
        ],
        title: 'OS CÓDICES DE CARNE E A BIBLIOTECA DOS LAMENTOS',
        content: `A purificação nas Cisternas de Marfim deixara em Vex uma sensação de dormência sintética, como se sua alma tivesse sido envolta em gesso. O leite alquímico, agora seco sobre seus poros, formava uma película invisível que silenciava o latejar de suas fendas, mas não conseguia apagar o incêndio frio que as palavras de Seraphina haviam acendido em seu espírito.

Ele caminhava pelos corredores transversais da Academia. Ali, a arquitetura gótica se fundia a protuberâncias orgânicas que lembravam veias petrificadas escalando as colunas de mármore negro. Seu destino não era o dormitório, nem o confessionário dos Pastores. Era o coração intelectual do Domo: a Biblioteca.

Vex avançava com uma elegância fragilizada. Seus ombros estreitos acentuavam a magreza do tronco, e o uniforme escarlate, agora limpo, parecia pesado demais para sua estrutura exangue. A palidez de seu rosto era interrompida apenas pelas olheiras profundas, sombras de um roxo doentio que testemunhavam noites de vigília e dor. Cada passo ecoava no vazio, um som seco que contrastava com o sussurro constante de líquidos que parecia emanar das próprias paredes.

Ao cruzar o portal de ferro batido, cujas ornamentações representavam o sacrifício do Príncipe do Sangue, Vex foi recebido pelo aroma opressor de pergaminho antigo, cera de abelha e o cheiro constante de cobre oxidado.

A Biblioteca não guardava livros comuns. Ali, o conhecimento era preservado em volumes encadernados com pele humana tratada, cujas páginas de velino fino ainda retinham a capacidade de pulsar sob o toque dos dedos. As estantes subiam em espirais vertiginosas, desaparecendo na penumbra do teto, onde morcegos albinos voavam em órbitas preguiçosas.

No centro do átrio, sentado atrás de um balcão de obsidiana, encontrava-se o Guardião dos Códices, um ser conhecido apenas como Mestre Vesper.

Vesper era um monumento à mutação especializada. Sua pele tinha a textura de couro curtido e um tom amarelado, como o de um cadáver preservado em formol. Ele não possuía olhos; em seu lugar, órbitas lisas cobertas por uma fina camada de pele ocultavam sua visão mundana.

Sua mutação compensatória, porém, era formidável: ao longo de seu crânio alongado e descendo pelas laterais do pescoço, Vesper ostentava seis orelhas adicionais. Todas se moviam de forma independente, captando desde a circulação sanguínea de Vex até o rangido das prateleiras nos níveis superiores. Suas mãos tinham seis dedos longos e nodosos, ideais para manusear as delicadas e perigosas obras.

— O jovem Ocultista busca as sombras de uma verdade que o leite não pode curar — disse Vesper. Sua voz soava como o atrito de folhas secas, sem que Vex tivesse pronunciado uma única palavra. — Sinto o cheiro da influência de Seraphina em suas vestes. Ela fede a fungos e a segredos mal enterrados.

— Mestre Vesper — Vex curvou-se em um gesto de respeito ritualístico. — Busco os registros do Primum Cruor. Quero entender a natureza da interrupção. Se somos uma mutação interrompida, como dizem os Pastores, deve haver um registro da forma que deveríamos ter assumido.

As múltiplas orelhas de Vesper tremeram em uníssono. O Guardião soltou um riso asmático que terminou em um pigarro úmido.

— A Metamorfose Final. O sonho de todo Hemorrágico que se recusa a aceitar o cabresto da Academia. Siga-me, Vex. Mas saiba que o conhecimento, tal como o nosso sangue, exige um preço que muitos não estão dispostos a pagar.

Vesper levantou-se, revelando sua estatura incomum e curvada, e conduziu o rapaz para os níveis inferiores, onde a luz das lâmpadas de óleo mal conseguia penetrar a escuridão. Eles pararam diante de um cofre de bronze cujas fechaduras eram acionadas por fluidos. Vesper não utilizou chaves. Ele perfurou o próprio pulso com uma garra metálica acoplada ao dedo e deixou que uma quantidade precisa de seu sangue espesso e escuro preenchesse as ranhuras da porta.

Com um som de sucção, o cofre se abriu.

Lá dentro repousava o Codex Cruor, um livro que parecia respirar. Sua capa era feita de músculo estriado preservado, e grandes veias azuis cruzavam a superfície, pulsando em um ritmo lento e hipnótico.

— Este volume contém as visões dos primeiros que foram tocados pelo Príncipe antes da construção do Domo — sussurrou Vesper, afastando-se. — Ele não se lê com os olhos, mas com o tato. Deixe que sua dor se conecte à dor do escriba.

Vex hesitou. Ele sentiu o Sangue Tipo C em suas veias reagir à proximidade do Codex. A película de leite em suas mãos pareceu rachar, e as fendas no peito arderam com urgência. Ele estendeu os dedos longos e pálidos, tocando a superfície morna do livro.

Instantaneamente, a Biblioteca desapareceu.

Vex não estava mais em uma sala de estudos, mas em um deserto de cinzas sob um céu da cor de carne crua. À sua frente, uma figura colossal se erguia — o Príncipe do Sangue. Não era um homem, nem um monstro, mas uma massa quimérica de fluidos e formas em constante mudança, cujos olhos eram como sóis negros emanando uma gravidade insuportável.

Ele sentiu seu próprio corpo começar a se desmanchar. Suas mutações, as fendas, os dedos alongados, não eram falhas; eram ganchos, alças de uma evolução que fora violentamente interrompida no meio do caminho.

Ele viu o *Primum Cruor*: o estado de existência onde o Hemorrágico não sofria mais com a hemorragia, porque ele se tornava o próprio sangue. Uma entidade líquida capaz de moldar o mundo à sua vontade. Imortal, insaciável e divina. O Modo Carniçal que eles experimentavam na Academia era apenas um estalido de eletricidade comparado à tempestade eterna que era a mutação completa.

A visão era de uma beleza aterradora. Vex viu a si mesmo, não mais como um aluno pálido e doente, mas como um senhor da matéria vital, capaz de erguer castelos de hemoglobina e transformar exércitos em poças de plasma com um mero pensamento.

Contudo, a visão tinha um lado sombrio. Para cada passo em direção a essa divindade, uma parte da consciência humana era devorada. O preço da Metamorfose Final era a obliteração do "eu".

A conexão foi bruscamente interrompida quando Vesper fechou o Codex.

Vex caiu de joelhos no chão de pedra fria. O suor misturava-se ao sangue que agora voltava a vazar de suas fendas, rompendo a barreira do leite. Seus olhos castanhos estavam dilatados, e ele tremia violentamente.

— Você viu, não viu? — Vesper inclinou-se sobre ele, as seis orelhas captando a arritmia do coração do jovem. — A glória e o abismo. Agora você entende por que os Pastores nos mantêm aqui, mergulhados em leite e rituais de contenção. Eles não estão nos curando. Estão nos impedindo de acordar. A Abel Academy não é um hospital... é um selo de segurança colocado sobre uma divindade que eles temem não poder controlar.

Vex ergueu o olhar para o Guardião, sua mente ainda ecoando com os gritos da visão.

— Nós somos o sacrifício que mantém o Domo de pé — murmurou ele, a voz agora carregada de uma clareza cortante.

— Somos o sacrifício e o altar — corrigiu Vesper, entregando ao rapaz um pequeno frasco contendo um líquido negro e viscoso. — Use isto quando a dor se tornar insuportável. Não é leite. É um destilado de memórias de quem veio antes. Isso o ajudará a manter a sanidade quando você decidir quebrar o selo. Porque você vai decidir, Vex.

O rapaz guardou o frasco nas dobras de seu uniforme. Ao sair da Biblioteca, a luz da lua parecia diferente. Ele não era mais apenas um estudante de ocultismo tentando sobreviver à sua biologia. Ele era o portador de uma verdade herética.

O caminho de volta aos dormitórios parecia agora um desfile de prisioneiros. Ao longe, ele ouviu o grito de outro aluno entrando no Modo Carniçal, seguido pelo som rítmico dos Pacificadores marchando para contê-lo.

O garoto apertou o frasco em seu bolso. A era da contenção estava chegando ao fim. O sangue estava começando a ferver.`
      },
      {
        id: 5,
        title: 'A CONSPIRAÇÃO DAS FLORES DE LODO',
        content: `— Em breve. . . —`,
      },
    ],
  },
];
