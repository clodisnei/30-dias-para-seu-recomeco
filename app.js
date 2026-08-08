const STORAGE_KEY = 'oqrm-plano-30-dias-v2';
const LEGACY_KEY = 'oqrm-plano-30-dias-prototipo-v1';
const APP_CONFIG = window.APP_CONFIG || {};
const MEDIA_CONTENT = window.MEDIA_CONTENT || {};
const STAGE_AUDIO_KEYS = {1:'stage1',2:'stage2',3:'stage3',4:'stage4'};
const stageData = {"1":{"number":1,"title":"Reconhecer onde você está","quote":"“Você sente toda a dor. Mas não precisa entregar a vida inteira a ela.”","author":"— Clodisnei Cavalcante Peres","description":["Antes de reconstruir hábitos ou definir metas, é necessário compreender o terreno. Esta etapa não exige que você encontre respostas completas. Ela convida a reconhecer o que aconteceu, o que está urgente, o que permaneceu e quem pode oferecer apoio.","O objetivo não é permanecer analisando a dor indefinidamente. É impedir que você tente resolver com disciplina aquilo que, neste momento, pode precisar de descanso, proteção, tratamento, alimento, companhia ou tempo."],"goals":["localizar o estado atual sem julgamento","dar um nome possível ao que mudou","separar fatos, interpretações e medos","reconhecer recursos que ainda existem","identificar necessidades urgentes","mapear pessoas e serviços de apoio","aprender a descansar sem abandonar a si mesmo"],"closing":"Não procure realizar esta etapa de maneira perfeita. O objetivo é produzir clareza suficiente para que o próximo passo seja possível.","range":[1,7]},"2":{"number":2,"title":"Retomar o movimento","quote":"“Mudei a ferramenta. Não abandonei o propósito.”","author":"— Clodisnei Cavalcante Peres","description":["Movimento não significa voltar imediatamente à rotina de antes. Significa produzir sinais pequenos de participação: abrir a janela, organizar um espaço, alimentar o corpo, concluir uma tarefa curta e construir pontos de retorno.","Esta etapa utiliza o princípio dos hábitos mínimos. O gesto escolhido deve caber nas condições atuais. Quando o corpo ou a saúde impuserem limites, adapte a ação e procure orientação adequada."],"goals":["começar o dia com um sinal simples","organizar um espaço pequeno","movimentar o corpo com segurança","proteger o descanso noturno","cuidar de alimentação e hidratação","concluir uma pendência curta","montar uma rotina mínima e flexível"],"closing":"Não procure realizar esta etapa de maneira perfeita. O objetivo é produzir clareza suficiente para que o próximo passo seja possível.","range":[8,14]},"3":{"number":3,"title":"Reconstruir significado e identidade","quote":"“O que restou de mim não foi apenas uma parte do homem que eu era. Foi a matéria com a qual comecei a construir o homem que sou.”","author":"— Clodisnei Cavalcante Peres","description":["Perder uma pessoa, uma capacidade, um relacionamento ou um papel pode alterar a resposta para a pergunta “quem sou eu?”. Esta etapa não procura transformar a perda em benefício obrigatório. Procura separar identidade de função e reconhecer valores, vínculos e capacidades que não dependem de uma única atividade.","Algumas práticas podem despertar emoções profundas. Utilize o formato mais seguro, pare quando necessário e procure companhia ou acompanhamento para aquilo que não deve ser atravessado sozinho."],"goals":["reconhecer o que mudou e merece ser lamentado","perceber o que a perda não definiu","identificar valores que orientam escolhas","ampliar a identidade para além da produtividade","praticar gratidão sem negar a dor","receber ajuda sem perder a própria voz","organizar palavras que ainda precisam de lugar"],"closing":"Não procure realizar esta etapa de maneira perfeita. O objetivo é produzir clareza suficiente para que o próximo passo seja possível.","range":[15,21]},"4":{"number":4,"title":"Construir continuidade","quote":"“A flexibilidade não é inimiga da consistência. É uma das condições que permitem que ela sobreviva à vida real.”","author":"— Clodisnei Cavalcante Peres","description":["Recomeçar não é realizar uma sequência perfeita durante trinta dias. É criar pontos de retorno. Nesta etapa, você observará gatilhos, planejará respostas, organizará uma semana possível e preparará um plano para os dias em que a rotina voltar a se desfazer.","A continuidade não depende apenas de disciplina. Ela também depende de apoio, acessibilidade, ambiente, saúde, recursos e capacidade de adaptar o plano sem interpretar toda interrupção como fracasso."],"goals":["reconhecer gatilhos e sinais de sobrecarga","preparar respostas mais seguras","organizar um ritmo semanal possível","criar versões alternativas para a rotina","retomar aprendizado e curiosidade","transformar valores em contribuição","preparar um plano para os dias difíceis","definir uma direção para os próximos noventa dias","escrever uma declaração pessoal de recomeço"],"closing":"Não procure realizar esta etapa de maneira perfeita. O objetivo é produzir clareza suficiente para que o próximo passo seja possível.","range":[22,30]}};
const dayData = {"1":{"stage":1,"title":"Onde você está agora","subtitle":"O primeiro passo é localizar-se, não corrigir-se.","reflection":["Depois de uma perda ou de um período difícil, podemos funcionar no automático. Cumprimos tarefas, respondemos às pessoas e atravessamos o dia sem perceber com clareza o que está acontecendo dentro de nós.","Hoje, o objetivo não é resolver nada. É parar por alguns minutos e reconhecer o estado do corpo, da mente e do ambiente. Dar nome ao presente diminui a confusão e ajuda a escolher o próximo cuidado."],"practice":["Sente-se ou permaneça numa posição confortável. Respire sem tentar controlar perfeitamente o ritmo.","Observe três pontos: o que sente no corpo, quais pensamentos aparecem e qual necessidade parece mais próxima.","Complete a frase: “Hoje eu estou...” e registre a primeira resposta honesta."],"care":"","questions":["O que está mais pesado hoje?","O que não precisa ser resolvido agora?"],"minimum":"Beba um copo de água e nomeie uma emoção ou sensação presente."},"2":{"stage":1,"title":"Dê um nome possível ao que aconteceu","subtitle":"Nomear não significa compreender tudo.","reflection":["Algumas perdas possuem um nome claro: morte, doença, separação, demissão, mudança de cidade. Outras chegam como uma sequência de acontecimentos e deixam apenas a sensação de que a vida saiu do lugar.","Você não precisa escrever todos os detalhes. Uma frase simples pode ser suficiente para começar: “Minha vida mudou quando...” ou “O que mais me afetou foi...”. O objetivo é reconhecer o acontecimento sem transformar esta prática numa exposição que você ainda não consegue suportar."],"practice":["Escreva ou grave uma frase que descreva o que mudou.","Acrescente: “O que isso alterou na minha rotina foi...”.","Pare antes de entrar em detalhes que provoquem sofrimento intenso."],"care":"Em perdas traumáticas ou muito recentes, não force recordações. Interrompa a prática se perceber aumento intenso do sofrimento e procure apoio.","questions":["Qual parte do acontecimento consigo nomear hoje?","Que parte ainda precisa de tempo ou acompanhamento?"],"minimum":"Registre apenas uma frase verdadeira sobre o que mudou."},"3":{"stage":1,"title":"Fato, interpretação e medo","subtitle":"Nem tudo o que a mente anuncia já aconteceu.","reflection":["Quando algo difícil acontece, o fato real se mistura rapidamente com conclusões e previsões. Uma limitação pode se transformar em “minha vida acabou”. Um término pode virar “ninguém ficará comigo”. Uma falha pode parecer “eu nunca consigo”.","Separar essas camadas não apaga a gravidade do fato. Apenas impede que uma interpretação momentânea seja tratada automaticamente como destino."],"practice":["Divida uma folha em três partes: fato, interpretação e medo.","No campo “fato”, escreva apenas o que poderia ser verificado.","Nos outros campos, registre o significado que atribuiu e aquilo que teme que aconteça."],"care":"","questions":["O que eu sei?","O que estou concluindo ou prevendo sem ter certeza?"],"minimum":"Escolha uma frase e acrescente: “Neste momento, isso é um medo, não uma certeza.”"},"4":{"stage":1,"title":"Reconheça o que permaneceu","subtitle":"Reconhecer não é minimizar a perda.","reflection":["Quando a ausência ocupa todo o campo de atenção, podemos deixar de perceber capacidades, vínculos, recursos e valores que continuam presentes. Fazer esse levantamento não exige gratidão forçada nem otimismo.","A pergunta de hoje é prática: com o que ainda posso contar? Talvez a resposta inclua uma pessoa, uma habilidade, uma consulta marcada, um lugar seguro, a fé, a voz, a memória, um benefício, um recurso de acessibilidade ou a capacidade de pedir ajuda."],"practice":["Liste cinco coisas que ainda permanecem disponíveis.","Ao lado de cada uma, escreva como ela pode ajudá-lo nesta semana.","Escolha uma delas para utilizar hoje."],"care":"","questions":["O que a perda não conseguiu retirar de mim?","Que recurso tenho ignorado por parecer pequeno?"],"minimum":"Nomeie uma capacidade, uma pessoa ou um recurso que ainda existe."},"5":{"stage":1,"title":"Necessidades antes de metas","subtitle":"Nem todo momento pede produtividade.","reflection":["É difícil construir uma rotina quando necessidades básicas estão desorganizadas. Antes de exigir desempenho, observe se existe algo mais urgente: saúde, segurança, alimentação, sono, medicação, documentação, renda, proteção ou companhia.","Uma necessidade urgente não é desculpa para abandonar a vida. É informação para ordenar prioridades. Algumas fases exigem que o primeiro objetivo seja estabilizar o terreno."],"practice":["Faça uma lista curta das necessidades atuais.","Marque cada item como: urgente, importante ou pode esperar.","Escolha uma ação responsável para o item mais urgente."],"care":"","questions":["O que estou tentando resolver com força de vontade, mas precisa de outro tipo de ajuda?","Que tarefa pode esperar para que eu cuide do essencial?"],"minimum":"Realize uma ação básica: alimentar-se, tomar água, descansar, marcar atendimento ou pedir companhia."},"6":{"stage":1,"title":"Quem pode caminhar com você","subtitle":"Autonomia não é fazer tudo sozinho.","reflection":["Uma reconstrução raramente é individual. Algumas pessoas oferecem escuta. Outras ajudam com transporte, informação, trabalho, cuidado, fé ou encaminhamento profissional. Nem todas conseguem oferecer o mesmo tipo de apoio.","Mapear a rede evita pedir a uma única pessoa aquilo que ela não pode sustentar e ajuda a perceber que companhia pode assumir formas diferentes."],"practice":["Crie três grupos: apoio emocional, ajuda prática e apoio profissional ou espiritual.","Escreva pelo menos um nome ou serviço em cada grupo possível.","Envie uma mensagem objetiva a uma pessoa: diga do que precisa, sem exigir que ela adivinhe."],"care":"","questions":["Quem costuma me escutar sem diminuir o que sinto?","De que ajuda concreta preciso nesta semana?"],"minimum":"Envie uma mensagem ou anote o contato de alguém que possa ajudar."},"7":{"stage":1,"title":"Descansar sem abandonar-se","subtitle":"Pausa e desistência não são a mesma coisa.","reflection":["Depois de dias intensos, o corpo e a mente podem precisar de recolhimento. O descanso se torna perigoso apenas quando se transforma em abandono prolongado, isolamento absoluto ou interrupção de cuidados importantes.","Hoje, permita uma pausa com limites gentis: descanse e preserve um pequeno vínculo com a vida. Pode ser tomar banho, abrir a janela, atender uma ligação, tomar a medicação ou fazer uma refeição."],"practice":["Escolha um período de descanso sem culpa.","Antes de descansar, defina uma ação simples que manterá o cuidado básico.","Ao final, observe se a pausa trouxe algum alívio ou se você precisa de companhia."],"care":"","questions":["De que tipo de descanso realmente preciso?","Que cuidado mínimo impedirá que a pausa se transforme em abandono?"],"minimum":"Descanse e preserve uma ação básica de cuidado."},"8":{"stage":2,"title":"Abra a janela","subtitle":"Um dia pode começar com um gesto pequeno.","reflection":["Na minha reconstrução, a primeira sequência era simples: abrir a janela, dobrar o cobertor e arrumar a cama. Essas ações não resolviam a vida. Elas apenas comunicavam ao corpo e à mente que a noite havia terminado e que eu ainda participava daquele dia.","Seu gesto não precisa ser igual ao meu. O importante é criar um começo visível, possível e repetível."],"practice":["Escolha uma sequência de até três ações para iniciar o dia.","Realize as ações com atenção, sem transformá-las numa corrida.","Repita a mesma sequência pelos próximos sete dias, adaptando quando necessário."],"care":"","questions":["Que gesto me ajuda a reconhecer que o dia começou?","Qual sequência cabe até num dia difícil?"],"minimum":"Abra a janela, organize a cama ou realize uma única ação que marque o início do dia."},"9":{"stage":2,"title":"Cuide de um espaço pequeno","subtitle":"Organização externa pode oferecer um ponto de apoio.","reflection":["Quando tudo parece desorganizado, tentar arrumar a casa inteira aumenta a sensação de fracasso. Escolher uma superfície pequena cria um resultado visível e reduz a quantidade de estímulos ao redor.","O objetivo não é limpeza perfeita. É recuperar um espaço que possa apoiar o próximo gesto: uma mesa para estudar, uma cadeira para descansar, uma pia para preparar alimento ou um caminho livre para circular com segurança."],"practice":["Escolha uma área que possa ser organizada em até quinze minutos.","Retire apenas o que não pertence ao local e descarte o lixo evidente.","Pare quando o tempo terminar, mesmo que ainda exista trabalho."],"care":"","questions":["Que espaço mais interfere no meu bem-estar?","O que posso simplificar para reduzir esforço?"],"minimum":"Organize uma superfície ou guarde cinco objetos."},"10":{"stage":2,"title":"Movimente o corpo possível","subtitle":"O movimento de hoje deve respeitar o corpo de hoje.","reflection":["O exercício físico foi uma porta de entrada importante nas minhas reconstruções. Mas o movimento não precisa assumir a forma de treino intenso. Alongar, caminhar com segurança, levantar-se da cadeira ou realizar exercícios orientados também pode representar participação.","A comparação deve ser com suas condições atuais, não com o corpo de antes nem com a rotina de outra pessoa."],"practice":["Escolha um movimento seguro e compatível com sua condição.","Defina uma duração pequena, como cinco ou dez minutos.","Observe como estava antes e como ficou depois, sem exigir que o humor mude completamente."],"care":"Em caso de doença, dor, tontura, limitação funcional ou longo período de inatividade, procure orientação médica e profissional antes de iniciar ou ampliar exercícios.","questions":["Que movimento é seguro para mim?","Preciso de avaliação ou orientação antes de aumentar a intensidade?"],"minimum":"Faça um alongamento leve ou movimente-se por dois minutos."},"11":{"stage":2,"title":"Prepare o descanso","subtitle":"O sono começa antes de deitar.","reflection":["Perdas e preocupações podem alterar o sono. Nem sempre é possível controlar quando ele chegar, mas podemos preparar melhor o ambiente e reduzir algumas barreiras.","Hoje, escolha uma mudança pequena para o período noturno: diminuir estímulos, separar a medicação conforme orientação, deixar água por perto, organizar o quarto ou estabelecer um horário aproximado para encerrar tarefas."],"practice":["Observe o que costuma prolongar sua noite.","Escolha uma ação de desaceleração para os trinta minutos anteriores ao descanso.","Anote o horário aproximado em que se deitou e como acordou."],"care":"","questions":["O que dificulta meu descanso atualmente?","Que mudança depende de mim e qual precisa de avaliação profissional?"],"minimum":"Reduza um estímulo e prepare o ambiente para dormir."},"12":{"stage":2,"title":"Alimente o básico","subtitle":"Cuidado também é aquilo que sustenta o corpo.","reflection":["Em períodos de sofrimento, alimentação e hidratação podem se tornar irregulares. Algumas pessoas esquecem de comer; outras utilizam a comida para anestesiar emoções. O objetivo de hoje não é construir uma dieta perfeita.","A prática é reconhecer que o corpo precisa de condições mínimas para atravessar o dia e que dificuldades persistentes merecem orientação profissional."],"practice":["Observe quando foi sua última refeição e quanta água bebeu.","Planeje uma refeição possível com os recursos disponíveis.","Deixe água num lugar acessível e seguro."],"care":"","questions":["Que barreira dificulta meu cuidado com a alimentação?","Quem pode ajudar quando preparar alimento é difícil?"],"minimum":"Beba água e faça uma refeição ou lanche possível."},"13":{"stage":2,"title":"Conclua uma pendência curta","subtitle":"Uma tarefa encerrada pode devolver direção.","reflection":["Pendências acumuladas ocupam espaço mental. Muitas parecem grandes porque evitamos olhar para elas. Escolher uma tarefa de até quinze minutos pode interromper o ciclo de adiamento sem transformar o dia numa maratona.","Não escolha o problema mais complexo. Escolha algo que possa realmente ser encerrado: responder uma mensagem, guardar documentos, marcar uma consulta ou pagar uma conta, quando houver condições."],"practice":["Liste três pendências pequenas.","Escolha a que pode ser concluída com menor esforço e maior utilidade.","Defina quinze minutos e pare quando terminar ou quando o tempo acabar."],"care":"","questions":["Que pendência ocupa mais espaço do que deveria?","Qual ação encerra ou encaminha essa tarefa?"],"minimum":"Faça uma ligação, envie uma mensagem ou guarde um documento."},"14":{"stage":2,"title":"Construa sua rotina mínima","subtitle":"A rotina deve oferecer retorno, não prisão.","reflection":["Uma rotina mínima é o conjunto de ações que ajuda você a manter algum cuidado mesmo quando o dia não segue o plano. Ela precisa ser curta, adaptável e ligada a necessidades reais.","Escolha três pontos de apoio: um para a manhã, um para a tarde e um para a noite. Não inclua tudo o que gostaria de fazer. Inclua aquilo que deseja proteger."],"practice":["Defina uma ação mínima para a manhã.","Defina uma ação mínima para a tarde.","Defina uma ação mínima para a noite e escolha quando revisará a rotina."],"care":"","questions":["Qual ação me ajuda a começar?","Qual ação me ajuda a encerrar o dia sem abandonar o cuidado?"],"minimum":"Escolha uma única ação para repetir amanhã."},"15":{"stage":3,"title":"Reconheça o que mudou","subtitle":"Aceitar um fato não significa aprová-lo.","reflection":["Algumas reconstruções ficam paralisadas porque tentamos agir como se nada tivesse mudado. Reconhecer a perda permite adaptar expectativas, ambientes e ferramentas.","Hoje, registre aquilo que não funciona mais da mesma maneira. Não procure imediatamente um lado positivo. Permita que a mudança seja nomeada como mudança."],"practice":["Complete: “Depois do que aconteceu, ficou mais difícil...”.","Complete: “Preciso parar de exigir de mim...”.","Identifique uma adaptação que pode reduzir sofrimento ou esforço desnecessário."],"care":"","questions":["O que ainda estou tentando fazer exatamente como antes?","Que limite precisa ser respeitado sem ser tratado como toda a minha identidade?"],"minimum":"Reconheça uma mudança e uma adaptação possível."},"16":{"stage":3,"title":"O que a perda não decidiu","subtitle":"Uma perda importante não possui o direito de definir tudo.","reflection":["A visão mudou muitas partes da minha vida, mas não retirou minha voz, minha memória, minha curiosidade, minha fé nem a capacidade de aprender. Isso não diminui a deficiência. Apenas impede que ela seja a única medida da existência.","Faça o mesmo exercício com sua história: não para negar o que aconteceu, mas para delimitar o alcance da perda."],"practice":["Escreva: “A perda mudou...”.","Depois escreva: “A perda não decidiu...”.","Escolha um aspecto preservado e utilize-o numa ação pequena."],"care":"","questions":["Que parte de mim continua presente?","Que capacidade posso utilizar de uma maneira adaptada?"],"minimum":"Complete a frase: “Isso mudou minha vida, mas não retirou de mim...”."},"17":{"stage":3,"title":"Escolha seus valores","subtitle":"Valores orientam quando o caminho anterior deixa de existir.","reflection":["Metas podem ser interrompidas por acontecimentos que não controlamos. Valores são direções mais amplas: cuidado, honestidade, fé, aprendizado, família, justiça, contribuição, coragem ou presença.","Você pode não conseguir cumprir a meta antiga, mas ainda pode expressar um valor de outra maneira. Aprender deixou de depender apenas de enxergar uma tela quando passei a utilizar recursos de acessibilidade e ditado por voz."],"practice":["Escolha cinco valores importantes para você.","Reduza a lista para três valores que deseja proteger nesta fase.","Escreva uma ação pequena que represente cada um deles."],"care":"","questions":["Que valor continuou aparecendo mesmo nos períodos difíceis?","Como posso vivê-lo nas condições atuais?"],"minimum":"Escolha um valor e realize uma ação coerente com ele."},"18":{"stage":3,"title":"Quem é você além do que faz","subtitle":"Identidade não é uma lista de tarefas concluídas.","reflection":["Quando meu trabalho, a direção, os treinos e outras capacidades foram interrompidos, a pergunta apareceu: “Se eu não posso mais fazer tudo o que fazia, quem sou eu agora?”. Durante anos, tentei responder provando utilidade.","Hoje compreendo que funções fazem parte de mim, mas não são toda a minha identidade. Sou também meus vínculos, valores, escolhas, histórias, aprendizados e a maneira como continuo participando da vida."],"practice":["Liste os papéis que mudaram ou foram perdidos.","Liste qualidades, vínculos e valores que existem além desses papéis.","Escreva uma resposta atual para: “Quem sou eu agora?”."],"care":"","questions":["Quem eu era antes de receber determinada função ou capacidade?","Que identidade desejo construir sem negar o passado?"],"minimum":"Escreva três palavras que descrevam quem você é além da produtividade."},"19":{"stage":3,"title":"Gratidão sem negar a dor","subtitle":"A gratidão não precisa apagar aquilo que falta.","reflection":["Gratidão forçada pode parecer uma ordem para deixar de sofrer. A prática de hoje é diferente: reconhecer algo verdadeiro que continua existindo, ao mesmo tempo em que a dor também é reconhecida.","Você pode sentir saudade e agradecer por uma lembrança. Pode lamentar uma limitação e reconhecer um recurso de acessibilidade. As duas experiências podem coexistir."],"practice":["Registre uma coisa difícil que está presente.","Registre três coisas pequenas e verdadeiras que também estão presentes.","Escolha uma delas e demonstre cuidado ou agradecimento de maneira concreta."],"care":"","questions":["O que consigo agradecer sem mentir para mim mesmo?","Que presença pequena tenho deixado passar despercebida?"],"minimum":"Reconheça uma coisa boa e uma coisa difícil no mesmo dia."},"20":{"stage":3,"title":"Receber ajuda sem perder a voz","subtitle":"Alguém pode caminhar com você sem caminhar por você.","reflection":["Aceitar ajuda pode despertar medo de dependência, vergonha ou sensação de incapacidade. Mas apoio não precisa retirar sua participação nas decisões.","Na minha vida, Juci não caminha por mim. Ela caminha comigo. Essa diferença preserva o reconhecimento do apoio e também minha responsabilidade sobre escolhas, limites e direção."],"practice":["Identifique uma tarefa em que a ajuda reduziria risco ou esforço excessivo.","Defina exatamente que tipo de ajuda precisa.","Ao pedir, diga também como deseja continuar participando da decisão ou da atividade."],"care":"","questions":["Que ajuda tenho recusado por medo de parecer fraco?","Como posso aceitar apoio preservando minha voz?"],"minimum":"Peça ajuda para uma tarefa específica ou aceite uma oferta segura."},"21":{"stage":3,"title":"Dê um lugar às palavras","subtitle":"Nem toda carta precisa ser enviada.","reflection":["Algumas palavras permanecem dentro de nós porque não houve tempo, segurança ou oportunidade para dizê-las. Escrever ou gravar uma mensagem pode ajudar a organizar o que está disperso.","Você pode escrever para alguém que partiu, para uma versão antiga de si mesmo, para o próprio corpo ou para o futuro. O objetivo não é provocar uma emoção específica. É oferecer uma forma segura para aquilo que precisa de linguagem."],"practice":["Escolha o destinatário da carta ou do áudio.","Comece com: “O que eu ainda precisava dizer é...”.","Encerre quando perceber que chegou ao limite possível para hoje."],"care":"Esta prática é opcional. Em luto recente, trauma, abuso ou conflito intenso, faça-a somente se parecer segura e interrompa quando necessário. Acompanhamento profissional pode ser importante.","questions":["Que palavra tem permanecido presa?","O que desejo levar comigo e o que desejo deixar de carregar sozinho?"],"minimum":"Escreva ou grave apenas três frases."},"22":{"stage":4,"title":"Observe seus gatilhos","subtitle":"Aquilo que acontece antes de uma reação também faz parte do padrão.","reflection":["Um som, horário, lugar, data, mensagem ou sensação física pode ativar uma sequência automática. Reconhecer o gatilho não significa evitá-lo para sempre. Significa perceber o início da sequência antes que ela conduza toda a resposta.","Hoje, escolha um padrão cotidiano que gostaria de compreender. Não trabalhe sozinho com gatilhos traumáticos ou situações que envolvam risco."],"practice":["Registre o que aconteceu imediatamente antes da reação.","Observe o que sentiu no corpo, pensou e fez em seguida.","Identifique o primeiro ponto em que uma pausa seria possível."],"care":"","questions":["Qual sinal aparece primeiro?","Que ambiente, horário ou situação aumenta minha vulnerabilidade?"],"minimum":"Nomeie um gatilho e o primeiro sinal que ele produz."},"23":{"stage":4,"title":"Prepare uma resposta possível","subtitle":"Planejar antes reduz a dependência do improviso.","reflection":["Quando estamos cansados ou emocionalmente ativados, fica mais difícil escolher. Um plano simples pode oferecer direção: “Quando eu perceber X, farei Y antes de decidir o restante”.","A resposta deve ser segura e concreta. Pode incluir respirar, afastar-se por alguns minutos, ligar para alguém, usar um recurso de acessibilidade, consultar um profissional ou adiar uma conversa até recuperar condições."],"practice":["Escolha um gatilho identificado ontem.","Complete: “Quando eu perceber..., primeiro vou...”.","Deixe o lembrete num lugar acessível."],"care":"","questions":["Que resposta costuma piorar a situação?","Qual alternativa protege melhor a mim e às pessoas ao redor?"],"minimum":"Escreva uma frase “quando-então” para um gatilho cotidiano."},"24":{"stage":4,"title":"Desenhe uma semana real","subtitle":"Não coloque todos os projetos no mesmo dia.","reflection":["Uma semana possível distribui responsabilidades, cuidado, estudo, descanso e imprevistos. Ela não exige que todas as áreas da vida recebam atenção diariamente.","Hoje, observe seus compromissos fixos e escolha onde cabem as práticas importantes. Deixe espaços livres. Um cronograma completamente ocupado não possui lugar para a vida real."],"practice":["Marque compromissos fixos, tratamentos e necessidades da casa.","Distribua até três prioridades ao longo da semana.","Reserve períodos sem tarefa para descanso, deslocamentos ou imprevistos."],"care":"","questions":["O que precisa acontecer toda semana, mas não todos os dias?","Onde posso reduzir expectativas para proteger continuidade?"],"minimum":"Escolha uma prioridade para amanhã e outra para um dia diferente."},"25":{"stage":4,"title":"Crie planos A, B e C","subtitle":"Adaptar o tamanho do passo protege o propósito.","reflection":["Existem dias de energia, tempo e condições diferentes. Quando só existe um plano ideal, qualquer mudança parece fracasso. Criar versões permite continuar sem ignorar limites.","O plano A é a prática completa. O plano B é uma versão reduzida. O plano C é o gesto mínimo que mantém o vínculo com o hábito."],"practice":["Escolha um hábito que deseja preservar.","Escreva a versão A, a versão B e a versão C.","Defina qual sinal indicará que precisa usar uma versão menor."],"care":"","questions":["Em que situações costumo abandonar tudo porque não posso fazer o ideal?","Qual versão mínima mantém a direção?"],"minimum":"Realize hoje a versão que corresponde às suas condições, sem culpa."},"26":{"stage":4,"title":"Volte a aprender","subtitle":"A curiosidade também pode ser uma forma de cuidado.","reflection":["Aprender devolveu direção a diferentes fases da minha vida. Quando a visão diminuiu, precisei mudar a forma de estudar, utilizando ampliação, leitores de tela e áudio. Mudei a ferramenta, não o propósito.","Escolha um assunto que desperte curiosidade. Não precisa ser útil imediatamente nem fazer parte de um grande curso. O objetivo é lembrar que sua mente ainda pode encontrar novos caminhos."],"practice":["Escolha um conteúdo acessível e confiável.","Estude por vinte minutos ou pelo tempo possível.","Registre uma ideia que aprendeu e uma pergunta que ficou."],"care":"","questions":["O que tenho vontade de compreender melhor?","Que adaptação torna o aprendizado possível?"],"minimum":"Escute, leia ou assista a dez minutos de um conteúdo que desperte curiosidade."},"27":{"stage":4,"title":"Transforme valor em contribuição","subtitle":"Ser útil não exige salvar todo mundo.","reflection":["Contribuição pode devolver sentido, mas também pode se transformar numa tentativa de provar valor ou evitar a própria dor. O gesto saudável respeita limites e não exige que você resolva a vida de outra pessoa.","Pode ser compartilhar conhecimento, ouvir alguém, realizar uma tarefa em casa, indicar um serviço, agradecer ou criar algo que ajude. Pequenas contribuições também possuem significado."],"practice":["Escolha um valor importante, como cuidado, conhecimento ou presença.","Pense numa contribuição pequena e específica.","Realize-a sem assumir uma responsabilidade que não lhe pertence."],"care":"","questions":["Quero contribuir ou estou tentando provar que ainda tenho valor?","Que gesto ajuda sem me abandonar?"],"minimum":"Faça uma ação útil que possa ser concluída hoje."},"28":{"stage":4,"title":"Prepare-se para os dias difíceis","subtitle":"Um plano de crise cotidiana deve ser feito antes da exaustão.","reflection":["Haverá dias em que a saudade, a dor, o cansaço ou um imprevisto diminuirão sua capacidade. Preparar uma lista simples evita que você precise inventar tudo quando estiver vulnerável.","Inclua cuidados básicos, pessoas de contato, serviços importantes e aquilo que não deve ser interrompido sem orientação."],"practice":["Escreva três sinais de que está chegando ao limite.","Defina três cuidados mínimos para esses dias.","Registre duas pessoas ou serviços que poderá procurar."],"care":"Diante de risco imediato, violência, incapacidade de manter a própria segurança ou sofrimento insuportável, procure serviços locais de emergência e apoio profissional. O plano pessoal não substitui atendimento.","questions":["Como meu corpo e meu comportamento avisam que preciso de ajuda?","O que não devo enfrentar sozinho?"],"minimum":"Anote um contato e uma ação de cuidado para um dia difícil."},"29":{"stage":4,"title":"Escolha uma direção para noventa dias","subtitle":"Direção é mais sustentável do que uma lista infinita.","reflection":["Os trinta dias não precisam terminar com uma vida completamente reorganizada. Escolha uma direção para os próximos três meses e proteja poucos elementos que realmente sustentam essa direção.","Uma meta útil é específica, adaptável e ligada às condições atuais. Ela também reconhece os apoios necessários."],"practice":["Escolha uma área principal: saúde, relacionamento, estudo, trabalho, organização ou cuidado emocional.","Defina um hábito pequeno e uma ação maior para os próximos noventa dias.","Identifique apoio, recurso ou adaptação necessários."],"care":"","questions":["Que mudança faria diferença real sem exigir que eu reconstrua tudo?","Como saberei que estou avançando?"],"minimum":"Escreva uma direção e o primeiro passo da próxima semana."},"30":{"stage":4,"title":"Escreva sua declaração de recomeço","subtitle":"O plano termina; sua participação continua.","reflection":["Você não precisa encerrar estes trinta dias completamente bem. Talvez algumas dores continuem, tarefas permaneçam abertas e hábitos ainda estejam instáveis. O objetivo foi mostrar que existe um ponto possível de participação.","Hoje, reconheça o caminho percorrido e escreva uma declaração que não dependa de perfeição. Ela deve dizer quem você escolhe ser, o que deseja proteger e qual passo continuará realizando."],"practice":["Complete: “O que restou de mim é...”.","Complete: “Com isso, eu escolho construir...”.","Complete: “Quando eu parar, meu ponto de retorno será...”."],"care":"","questions":["Quem sou eu agora?","Que parte viva de mim desejo levar para os próximos dias?"],"minimum":"Diga em voz alta ou registre uma frase de continuidade."}};

const initialState = {
  version: 4,
  profile: { name: '', startDate: '', started: false, onboardingSeen: false },
  baseline: { loss: '', care: '', remains: '', support: '', energy: 5, sleep: 5, hope: 5, supportScore: 5 },
  commitment: { text: '', minimum: '', support: '' },
  days: {},
  finalReview: { answers: Array(8).fill(''), energy: 5, sleep: 5, hope: 5, supportScore: 5, saved: false },
  maintenance: { direction: '', habits: ['', '', ''], minimum: '', support: '', signs: '', reviewDay: '', saved: false },
  favorites: {},
  backup: { lastExportAt: '', remindersShown: [] },
  reminders: { enabled: false, time: '19:00', permission: 'default', lastShownDate: '' },
  settings: { font: 'normal', contrast: false, dark: false, motion: false },
  route: 'home'
};

let state = loadState();
let recognition = null;
let activeDictationTarget = null;
let deferredInstallPrompt = null;
let draftTimer = null;
let reminderTimer = null;
let storageAvailable = true;

function clone(value) { return JSON.parse(JSON.stringify(value)); }
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY) || localStorage.getItem(LEGACY_KEY);
    const saved = raw ? JSON.parse(raw) : null;
    if (!saved) return clone(initialState);
    const merged = deepMerge(clone(initialState), saved);
    if (typeof merged.commitment === 'string') merged.commitment = { text: merged.commitment, minimum: '', support: '' };
    merged.version = 4;
    return merged;
  } catch { return clone(initialState); }
}
function deepMerge(target, source) {
  for (const key of Object.keys(source || {})) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) target[key] = deepMerge(target[key] || {}, source[key]);
    else target[key] = source[key];
  }
  return target;
}
function saveState() { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); storageAvailable=true; return true; } catch { storageAvailable=false; return false; } }
function escapeHTML(value='') { return String(value ?? '').replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function formatDate(value) { if (!value) return ''; return new Intl.DateTimeFormat('pt-BR').format(new Date(`${value}T12:00:00`)); }
function localISODate() { const d=new Date(); return `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`; }
function toast(message) { const el=document.querySelector('#toast'); el.textContent=message; el.classList.add('show'); clearTimeout(toast.timer); toast.timer=setTimeout(()=>el.classList.remove('show'),2600); }
function completedCount() { return Object.values(state.days).filter(d => d.status).length; }
function draftCount() { return Object.values(state.days).filter(d => !d.status && ((d.answers||[]).some(Boolean) || d.notes)).length; }
function currentDay() { for (let n=1; n<=30; n++) if (!state.days[n]?.status) return n; return 30; }
function routeTo(route) { location.hash = route; }
function stageForDay(n) { return stageData[dayData[n].stage]; }
function statusLabel(status) { return ({planned:'Fiz como planejado',adapted:'Adaptei',rested:'Descansei',help:'Pedi ajuda'})[status] || 'Rascunho'; }


function bookCoverMarkup(size='') {
  const coverPath=APP_CONFIG.coverPath || 'capa/capa-livro.jpg';
  return `<div class="book-cover-shell ${size}"><img class="book-cover-image" data-book-cover src="${escapeHTML(coverPath)}" alt="Capa do livro O Que Restou de Mim, de Clodisnei Cavalcante Peres"><div class="book-cover-mockup ${size}" data-cover-fallback hidden aria-label="Capa provisória do livro O Que Restou de Mim"><span class="cover-kicker">O QUE</span><span>RESTOU</span><span>DE MIM</span><i></i><small>Clodisnei Cavalcante Peres</small></div></div>`;
}
function audioCard(key,compact=false) {
  const item=MEDIA_CONTENT[key]; if(!item) return '';
  const transcript=escapeHTML(item.transcript || '').split(/\n\s*\n/).filter(Boolean).map(p=>`<p>${p}</p>`).join('');
  return `<section class="${compact?'audio-card compact':'section card audio-card'}" data-audio-card><div class="audio-heading"><span class="audio-icon" aria-hidden="true">♪</span><div><p class="eyebrow">Na voz do autor</p><h2>${escapeHTML(item.title)}</h2><p>${escapeHTML(item.description || '')}</p></div></div><audio controls preload="metadata" aria-label="${escapeHTML(item.title)}"><source data-audio-source src="${escapeHTML(item.src)}" type="audio/mpeg">Seu navegador não conseguiu reproduzir este áudio.</audio><p class="media-missing" data-media-missing hidden><strong>Áudio ainda não adicionado.</strong> Coloque o arquivo <code>${escapeHTML(item.src)}</code> no projeto e publique novamente.</p><details class="transcript"><summary>Ler a transcrição</summary><div>${transcript}</div></details></section>`;
}
function bookButtons() {

  const products = [
    {
      key: 'physicalBookUrl',
      label: APP_CONFIG.physicalBookLabel || 'Comprar livro físico',
      icon: '📘',
      primary: true
    },
    {
      key: 'ebookUrl',
      label: APP_CONFIG.ebookLabel || 'Comprar e-book',
      icon: '📱',
      primary: false
    },
    {
      key: 'methodUrl',
      label: APP_CONFIG.methodLabel || 'Conhecer o Método',
      icon: '🌱',
      primary: false
    }
  ];

  const buttons = products.map(product => {

    const available = String(APP_CONFIG[product.key] || '').trim();

    return `
      <button
        class="button ${product.primary ? 'primary' : 'secondary'}"
        type="button"
        data-product-link="${product.key}">
        <span aria-hidden="true">${product.icon}</span>
        ${escapeHTML(product.label)}
        ${available ? '' : ' — em breve'}
      </button>
    `;
  }).join('');

  return `
    <div class="hero-actions">
      ${buttons}
    </div>
  `;
}
function isStandalone() { return window.matchMedia?.('(display-mode: standalone)').matches || window.navigator.standalone === true; }
function reminderSummaryCard() {
  const r=state.reminders || initialState.reminders;
  return `<section class="section card reminder-summary"><div><p class="eyebrow">Lembrete opcional</p><h2>${r.enabled?`Lembrete diário às ${escapeHTML(r.time)}`:'Continue no seu ritmo'}</h2><p>${r.enabled?'O aplicativo lembrará você quando estiver aberto ou quando você retornar depois do horário escolhido.':'Escolha um horário para receber um lembrete sem cobrança por sequência perfeita.'}</p></div><button class="button secondary" data-route="reminders">${r.enabled?'Ajustar lembrete':'Configurar lembrete'}</button></section>`;
}

function applySettings() {
  const sizes = { small: .9, normal: 1, large: 1.15, xlarge: 1.32 };
  document.documentElement.style.setProperty('--font-scale', sizes[state.settings.font] || 1);
  document.body.classList.toggle('high-contrast', !!state.settings.contrast);
  document.body.classList.toggle('dark', !!state.settings.dark);
  document.body.classList.toggle('reduce-motion', !!state.settings.motion);
  document.querySelector('#contrastToggle').checked = !!state.settings.contrast;
  document.querySelector('#darkToggle').checked = !!state.settings.dark;
  document.querySelector('#motionToggle').checked = !!state.settings.motion;
}

function render() {
  const hash = location.hash.replace('#','') || state.route || 'home';
  state.route = hash; saveState();
  const main = document.querySelector('#conteudo');
  let html;
  if (hash.startsWith('day/')) html = dayPage(Number(hash.split('/')[1]));
  else if (hash.startsWith('stage/')) html = stagePage(Number(hash.split('/')[1]));
  else if (hash.startsWith('intro/')) html = onboardingPage(Number(hash.split('/')[1]));
  else if (hash.startsWith('backup/')) html = backupPage(Number(hash.split('/')[1]));
  else if (hash === 'start') html = startPage();
  else if (hash === 'baseline') html = baselinePage();
  else if (hash === 'journey') html = journeyPage();
  else if (hash === 'journal') html = journalPage();
  else if (hash === 'review') html = reviewPage();
  else if (hash === 'maintenance') html = maintenancePage();
  else if (hash === 'completion') html = completionPage();
  else if (hash === 'summary') html = summaryPage();
  else if (hash === 'insights') html = insightsPage();
  else if (hash === 'privacy') html = privacyPage();
  else if (hash === 'install') html = installPage();
  else if (hash === 'reminders') html = remindersPage();
  else if (hash === 'about') html = aboutPage();
  else html = homePage();
  main.innerHTML = `<div class="page">${html}</div>`;
  bindPageEvents();
  document.querySelectorAll('.bottom-nav button').forEach(btn => {
    const target=btn.dataset.route;
    const journeyRoutes = hash.startsWith('day/') || hash.startsWith('stage/') || hash.startsWith('backup/') || ['review','maintenance','completion'].includes(hash);
    const journalRoutes = ['summary','insights'].includes(hash);
    btn.classList.toggle('active', target === hash || (journeyRoutes && target === 'journey') || (journalRoutes && target === 'journal'));
  });
  main.focus({preventScroll:true});
}

function homePage() {
  const done=completedCount(), drafts=draftCount(), day=currentDay();
  if (!state.profile.started) return `
    <section class="hero">
      <p class="eyebrow">O Que Restou de Mim</p>
      <h1>30 Dias para o Seu Recomeço</h1>
      <p class="lead">A versão interativa do plano prático criado a partir do livro de Clodisnei Cavalcante Peres.</p>
      <div class="quote">“Uma reconstrução não começa pela vida inteira. Começa pelo ponto em que você está.”<br><small>— Clodisnei Cavalcante Peres</small></div>
      <div class="hero-actions"><button class="button primary" data-route="intro/1">Conhecer e começar</button><button class="button ghost" data-route="about">Sobre o livro</button></div>
    </section>
    ${audioCard('welcome')}
    <section class="section card origin-card">
      <div class="origin-grid">${bookCoverMarkup()}<div><p class="eyebrow">De onde nasceu este plano</p><h2>Uma história real transformada em prática</h2><p>O livro reúne uma trajetória de perdas, limitações, luto e reconstrução. Este aplicativo transforma aprendizados dessa caminhada em reflexões, práticas possíveis, perguntas e passos mínimos.</p><p><strong>Você não precisa ter lido o livro para começar.</strong> Na obra, encontrará a história e as experiências que deram origem a esta jornada.</p><div class="actions-stack"><button class="button secondary" data-route="about">Conhecer o livro e o autor</button>${bookButtons()}</div></div></div>
    </section>
    <section class="section card install-banner" id="installBanner"><p class="eyebrow">Instalar</p><h2>${isStandalone()?'Aplicativo instalado':'Use como aplicativo'}</h2><p>${isStandalone()?'Você já está usando a versão instalada.':'Adicione o plano à tela inicial para abrir com um toque e usar os conteúdos já visitados mesmo sem internet.'}</p><div class="hero-actions">${isStandalone()?'':`<button class="button secondary" id="installApp">Instalar aplicativo</button>`}<button class="button secondary" data-route="install">Ver instruções</button></div></section>
    <section class="section card"><p class="eyebrow">Como funciona</p><h2>Um caminho que cabe na vida real</h2>
      <ul class="principles">
        <li><span class="number">1</span><span><strong>Uma reflexão por dia.</strong><br><small>Textos curtos para localizar o momento presente.</small></span></li>
        <li><span class="number">2</span><span><strong>Uma prática possível.</strong><br><small>Você pode realizar, adaptar, descansar ou pedir ajuda.</small></span></li>
        <li><span class="number">3</span><span><strong>Um passo mínimo.</strong><br><small>Nos dias difíceis, uma ação pequena mantém um ponto de retorno.</small></span></li>
        <li><span class="number">4</span><span><strong>Um registro particular.</strong><br><small>As respostas ficam guardadas somente neste aparelho.</small></span></li>
      </ul>
    </section>`;
  const allDone = done === 30;
  return `
    <section class="hero">
      <p class="eyebrow">Olá, ${escapeHTML(state.profile.name || 'vamos continuar')}</p>
      <h1>${allDone ? 'O plano termina. O cuidado continua.' : 'Seu ponto de retorno está aqui.'}</h1>
      <p>${allDone ? 'Você percorreu os trinta dias. Agora pode revisar o caminho e preparar os próximos noventa dias.' : 'Você não precisa recuperar o ritmo inteiro. Continue pela próxima ação possível.'}</p>
      <div class="progress-wrap"><div class="progress-label"><span>${done} de 30 dias registrados</span><span>${Math.round(done/30*100)}%</span></div><div class="progress-track" aria-label="${done} de 30 dias registrados"><span style="width:${done/30*100}%"></span></div></div>
      <div class="hero-actions"><button class="button primary" data-route="${allDone?'review':`day/${day}`}">${allDone?'Fazer revisão final':done?'Continuar a jornada':'Abrir o Dia 1'}</button><button class="button ghost" data-route="journey">Ver todos os dias</button></div>
    </section>
    ${reminderSummaryCard()}
    <section class="section grid two"><div class="stat"><strong>${done}</strong><span>dias registrados</span></div><div class="stat"><strong>${drafts}</strong><span>rascunhos salvos</span></div></section>
    <section class="section card"><div class="card-header"><div><p class="eyebrow">${allDone?'Próxima etapa':'Próximo passo'}</p><h2>${allDone?'Revisão dos 30 dias':`Dia ${day}`}</h2></div><span class="day-number">${allDone?'✓':day}</span></div>
      ${allDone?'<p>Compare seu ponto de partida com o momento atual sem transformar o plano em prova.</p>':`<h3>${escapeHTML(dayData[day].title)}</h3><p>${escapeHTML(dayData[day].subtitle)}</p>`}
      <button class="button secondary full" data-route="${allDone?'review':`day/${day}`}">${allDone?'Abrir revisão':'Abrir prática'}</button></section>
    <section class="section card"><p class="eyebrow">Seu retrato</p><h2>Veja o caminho sem julgamentos</h2><p>A análise mostra apenas informações descritivas dos seus registros: formas de participação, rascunhos, reflexões marcadas e comparação das notas iniciais e finais.</p><button class="button secondary" data-route="insights">Abrir análise da jornada</button></section>`;
}

function onboardingPage(step=1) {
  const safeStep=Math.min(3,Math.max(1,Number(step)||1));
  const screens={
    1:{eyebrow:'Uma extensão do livro',title:'Esta jornada nasceu de uma história real',text:'O plano faz parte de O Que Restou de Mim, livro em que Clodisnei Cavalcante Peres narra perdas, limitações, luto e os caminhos que encontrou para continuar participando da própria vida.',icon:'◌'},
    2:{eyebrow:'Como funciona',title:'Reflexão, prática, registro e passo mínimo',text:'Durante trinta dias, você encontrará uma reflexão, uma prática possível, perguntas para registro e uma versão mínima para os dias em que fazer tudo não for possível.',icon:'30'},
    3:{eyebrow:'Sem cobrança por perfeição',title:'O ritmo precisa caber na sua vida',text:'Você poderá realizar a prática, adaptar, descansar ou pedir ajuda. Pode pausar, permanecer mais tempo numa etapa e retornar quando for necessário. Seus registros ficam apenas neste aparelho.',icon:'✓'}
  };
  const item=screens[safeStep];
  return `<section class="onboarding card"><div class="onboarding-icon" aria-hidden="true">${item.icon}</div><div class="onboarding-dots" aria-label="Tela ${safeStep} de 3">${[1,2,3].map(n=>`<span class="${n===safeStep?'active':''}"></span>`).join('')}</div><p class="eyebrow">${item.eyebrow}</p><h1>${item.title}</h1><p class="lead">${item.text}</p>${safeStep===1?audioCard('welcome',true):''}
    <div class="onboarding-actions"><button class="button secondary" type="button" data-complete-intro="start">Pular apresentação</button>${safeStep>1?`<button class="button secondary" data-route="intro/${safeStep-1}">← Voltar</button>`:''}<button class="button primary" ${safeStep<3?`data-route="intro/${safeStep+1}"`:'data-complete-intro="start"'}>${safeStep<3?'Continuar':'Começar meu recomeço'}</button></div></section>`;
}

function startPage() { return `
  <section class="card"><p class="eyebrow">Antes de começar</p><h1>Vamos preparar seu espaço</h1>
    <p class="lead">Não é necessário criar conta. Seu nome, suas respostas e seu progresso serão guardados somente neste navegador.</p>
    <form id="startForm">
      <div class="form-group"><label for="name">Como você gostaria de ser chamado?</label><input id="name" name="name" type="text" autocomplete="name" value="${escapeHTML(state.profile.name)}" placeholder="Nome ou apelido" required></div>
      <div class="form-group"><label for="startDate">Data de início</label><input id="startDate" name="startDate" type="date" value="${state.profile.startDate || localISODate()}" required></div>
      <div class="notice"><strong>Qual é o ritmo recomendado?</strong><p>A sugestão é realizar uma prática por dia. Porém, você pode permanecer mais tempo numa etapa, pausar, retornar ou adaptar o ritmo. O objetivo não é terminar rapidamente: é construir movimentos que possam continuar depois do Dia 30.</p></div>
      <div class="notice privacy-callout"><strong>Privacidade local</strong><p>O aplicativo não envia seus registros para um servidor. Faça um backup periódico para evitar perda ao limpar o navegador ou trocar de aparelho.</p><button class="text-link" type="button" data-route="privacy">Entender como seus dados são cuidados</button></div>
      <div class="hero-actions"><button class="button primary" type="submit">Continuar</button><button class="button secondary" type="button" data-route="home">Voltar</button></div>
    </form>
  </section>`; }

function baselinePage() {
  const b=state.baseline, c=state.commitment;
  return `<section class="card"><p class="eyebrow">Um retrato honesto</p><h1>Onde você está começando?</h1>
    <p>Registre apenas o suficiente para localizar o momento atual. Em situações traumáticas ou muito recentes, não force detalhes.</p>
    <form id="baselineForm">
      ${textareaField('loss','O que mudou ou foi perdido?',b.loss)}
      ${textareaField('care','O que mais precisa de cuidado neste momento?',b.care)}
      ${textareaField('remains','O que ainda permanece disponível em você ou ao seu redor?',b.remains)}
      ${textareaField('support','Quem pode caminhar com você durante este plano?',b.support)}
      <h2>De zero a dez, como estão hoje?</h2>
      ${scoreField('energy','Minha energia',b.energy)}${scoreField('sleep','Meu sono',b.sleep)}${scoreField('hope','Minha esperança de encontrar um próximo passo',b.hope)}${scoreField('supportScore','Minha sensação de apoio',b.supportScore)}
      <div class="notice"><strong>Lembrete</strong><p>O número não é um diagnóstico. Ele apenas ajuda a comparar o ponto de partida com aquilo que você perceberá ao final.</p></div>
      <h2 class="section">Um compromisso possível</h2>
      ${textareaField('commitmentText','Durante os próximos trinta dias, eu me comprometo a:',c.text)}
      ${textareaField('commitmentMinimum','Quando eu não conseguir realizar a prática completa, meu passo mínimo será:',c.minimum)}
      ${textareaField('commitmentSupport','A pessoa ou o serviço que procurarei quando precisar de apoio será:',c.support)}
      <button class="button primary full" type="submit">Salvar e abrir minha jornada</button>
    </form></section>`;
}
function textareaField(id,label,value='') { return `<div class="form-group"><label for="${id}">${label}</label><textarea id="${id}" name="${id}">${escapeHTML(value)}</textarea></div>`; }
function scoreField(id,label,value=5) { return `<div class="form-group"><label for="${id}">${label}</label><div class="range-row"><input id="${id}" name="${id}" type="range" min="0" max="10" value="${Number(value)}" oninput="this.nextElementSibling.value=this.value"><output>${Number(value)}</output></div></div>`; }

function journeyPage() {
  const done=completedCount();
  return `<section class="card"><p class="eyebrow">Sua jornada</p><h1>Trinta pontos de retorno</h1>
    <p>Você pode abrir qualquer dia. O mapa não exige sequência perfeita: voltar, adaptar, descansar e pedir ajuda também fazem parte do caminho.</p>
    <div class="progress-wrap"><div class="progress-label"><span>${done} dias registrados</span><span>${Math.round(done/30*100)}%</span></div><div class="progress-track" style="background:var(--surface-2)"><span style="width:${done/30*100}%"></span></div></div>
  </section>
  <section class="section stage-list">${Object.values(stageData).map(stageJourneyCard).join('')}</section>
  <section class="section card"><h2>Depois do Dia 30</h2><p>Compare seu ponto de partida, organize os próximos noventa dias e escreva seu mapa de retorno.</p><div class="hero-actions"><button class="button secondary" data-route="review">Revisão final</button><button class="button secondary" data-route="maintenance">Plano de manutenção</button></div></section>
  <section class="section notice warning"><strong>Importante</strong><p>O plano não substitui atendimento médico, psicológico, psiquiátrico, jurídico, social ou pastoral. Diante de risco imediato, violência, sintomas físicos importantes ou sofrimento impossível de suportar sozinho, procure ajuda local e profissional com prioridade.</p></section>`;
}
function stageJourneyCard(stage) {
  const [start,end]=stage.range;
  return `<article class="card stage-card"><div class="stage-meta"><span>Etapa ${stage.number}</span><span>Dias ${start} a ${end}</span></div><h2>${escapeHTML(stage.title)}</h2><p>${escapeHTML(stage.description[0] || '')}</p><button class="button secondary" data-route="stage/${stage.number}">Conhecer a etapa</button><div class="day-map" style="margin-top:16px" aria-label="Dias ${start} a ${end}">${Array.from({length:end-start+1},(_,i)=>dayButton(start+i)).join('')}</div></article>`;
}
function dayButton(n) {
  const saved=state.days[n] || {}, done=!!saved.status, draft=!done && ((saved.answers||[]).some(Boolean) || saved.notes);
  const cls=['day-dot','available',done?'complete':'',draft?'draft':'',n===currentDay()?'current':''].filter(Boolean).join(' ');
  const label=done?'registrado':draft?'rascunho salvo':'disponível';
  return `<button class="${cls}" type="button" data-route="day/${n}" aria-label="Dia ${n}, ${label}">${n}<small>${done?'✓':draft?'rascunho':'abrir'}</small></button>`;
}
function stagePage(n) {
  const s=stageData[n]; if(!s) return journeyPage();
  const [start,end]=s.range;
  return `<section class="hero"><p class="eyebrow">Etapa ${n} · Dias ${start} a ${end}</p><h1>${escapeHTML(s.title)}</h1><div class="quote">${escapeHTML(s.quote)}<br><small>${escapeHTML(s.author)}</small></div></section>
  ${audioCard(STAGE_AUDIO_KEYS[n])}
  <section class="section card">${s.description.map(p=>`<p>${escapeHTML(p)}</p>`).join('')}<h2>Ao longo desta etapa</h2><ul class="stage-goals">${s.goals.map(g=>`<li>${escapeHTML(g)}</li>`).join('')}</ul><p class="notice">${escapeHTML(s.closing)}</p></section>
  <section class="section card"><h2>Dias desta etapa</h2><div class="day-map">${Array.from({length:end-start+1},(_,i)=>dayButton(start+i)).join('')}</div></section>
  <button class="button secondary full section" data-route="journey">Voltar à jornada</button>`;
}

function dayPage(n) {
  const data=dayData[n]; if(!data) return `<section class="card empty"><h1>Dia não encontrado</h1><button class="button primary" data-route="journey">Voltar ao mapa</button></section>`;
  const saved=state.days[n] || {}, stage=stageForDay(n), favorite=!!state.favorites?.[n];
  return `<section class="card"><p class="eyebrow">Etapa ${stage.number} — ${escapeHTML(stage.title)}</p>
    <div class="day-heading"><div class="day-number">${n}</div><div><h1>${escapeHTML(data.title)}</h1><p class="lead">${escapeHTML(data.subtitle)}</p></div></div>
    ${data.reflection.map(p=>`<p>${escapeHTML(p)}</p>`).join('')}
    <button class="favorite-button ${favorite?'active':''}" type="button" data-favorite-day="${n}" aria-pressed="${favorite}"><span aria-hidden="true">${favorite?'★':'☆'}</span>${favorite?'Guardado em “O que quero levar comigo”':'Quero lembrar desta reflexão'}</button></section>
    <section class="section card"><h2>Prática de hoje</h2><ol class="practice-list">${data.practice.map(item=>`<li>${escapeHTML(item)}</li>`).join('')}</ol></section>
    ${data.care?`<section class="section notice warning"><strong>Cuidado</strong><p>${escapeHTML(data.care)}</p></section>`:''}
    <section class="section minimum"><strong>Passo mínimo</strong>${escapeHTML(data.minimum)}</section>
    <form id="dayForm" data-day="${n}">
      <section class="section card"><p class="eyebrow">Seu espaço particular</p><h2>Perguntas para o registro</h2>
        ${data.questions.map((q,i)=>`<div class="question form-group"><label for="answer${i}">${escapeHTML(q)}</label><div class="text-tools"><button type="button" data-dictate="answer${i}" aria-label="Ditar resposta">🎙 Ditar</button></div><textarea id="answer${i}" name="answer${i}" placeholder="Escreva ou use o botão Ditar...">${escapeHTML(saved.answers?.[i] || '')}</textarea></div>`).join('')}
        <div class="form-group"><label for="notes">Meu registro livre</label><div class="text-tools"><button type="button" data-dictate="notes">🎙 Ditar</button></div><textarea id="notes" name="notes" placeholder="O que mais precisa ficar registrado hoje?">${escapeHTML(saved.notes || '')}</textarea></div>
        <div class="saved-indicator" id="draftIndicator" aria-live="polite">${saved.savedAt?'Registro salvo neste aparelho.':''}</div>
      </section>
      <section class="section card"><h2>Como foi possível participar hoje?</h2><p>Não existe uma única forma correta de concluir o dia.</p>
        <div class="status-options">${statusOption('planned','Fiz como planejado',saved.status)}${statusOption('adapted','Adaptei',saved.status)}${statusOption('rested','Descansei',saved.status)}${statusOption('help','Pedi ajuda',saved.status)}</div>
        <button class="button primary full" type="submit" style="margin-top:18px">Salvar meu dia</button>
      </section>
    </form>
    <div class="section grid two"><button class="button secondary" type="button" data-route="${n>1?`day/${n-1}`:`stage/${stage.number}`}">← Anterior</button><button class="button secondary" type="button" data-route="${n<30?`day/${n+1}`:'review'}">${n<30?'Próximo →':'Revisão final →'}</button></div>`;
}

function statusOption(value,label,current) { return `<label class="status-option"><input type="radio" name="status" value="${value}" ${current===value?'checked':''}><span>${label}</span></label>`; }

function backupPage(n) {
  const next=n<30?`day/${n+1}`:'review';
  return `<section class="hero backup-hero"><p class="eyebrow">Pausa de proteção</p><h1>Guarde uma cópia da sua caminhada</h1><p>Você chegou ao Dia ${n}. Suas respostas estão salvas neste navegador, mas podem ser apagadas se o aparelho for trocado ou se os dados do navegador forem limpos.</p></section>
    <section class="section card"><h2>Faça um backup em poucos segundos</h2><p>O arquivo é preparado no seu próprio aparelho. Ele reúne seu progresso e suas anotações para que possam ser restaurados depois.</p><div class="actions-stack"><button class="button primary" id="exportData">Fazer backup agora</button><button class="button secondary" data-route="${next}">Continuar a jornada</button></div><p class="hint">Último backup: ${state.backup?.lastExportAt?formatDate(state.backup.lastExportAt.slice(0,10)):'nenhum backup registrado neste aparelho'}.</p></section>
    <section class="section notice"><strong>Se preferir continuar agora</strong><p>Você pode voltar à área Registros e fazer a cópia de segurança em outro momento.</p></section>`;
}

function reviewPage() {
  const r=state.finalReview, questions=[
    'O que compreendi melhor sobre minha perda ou fase atual?', 'Que necessidade deixei de ignorar?', 'Qual hábito mínimo foi mais útil?',
    'Que prática não funcionou para mim e precisa ser adaptada?', 'Quem se mostrou parte da minha rede de apoio?', 'Que limite aprendi a respeitar?',
    'Que capacidade, valor ou vínculo percebi que ainda permanece?', 'Qual é o próximo passo que realmente cabe na minha vida?'
  ];
  return `<section class="card"><p class="eyebrow">Depois do Dia 30</p><h1>Revisão dos 30 dias</h1><p class="lead">Observe mudanças sem transformar o plano em prova.</p>
    <p>Volte ao ponto de partida e observe clareza, pedidos de ajuda, adaptações, pequenos hábitos e a maneira como passou a falar consigo mesmo.</p></section>
    <form id="reviewForm"><section class="section card"><h2>Responda com honestidade</h2>${questions.map((q,i)=>textareaField(`review${i+1}`,`${i+1}. ${q}`,r.answers?.[i]||'')).join('')}</section>
    <section class="section card"><h2>De zero a dez, como estão hoje?</h2>
      ${scoreCompare('energy','Minha energia',state.baseline.energy,r.energy)}${scoreCompare('sleep','Meu sono',state.baseline.sleep,r.sleep)}${scoreCompare('hope','Minha esperança de encontrar um próximo passo',state.baseline.hope,r.hope)}${scoreCompare('supportScore','Minha sensação de apoio',state.baseline.supportScore,r.supportScore)}
      <div class="notice"><strong>Importante</strong><p>Melhora não é uma linha reta. Um número menor hoje não apaga o que você aprendeu. Pode indicar cansaço, um acontecimento recente ou a necessidade de outro tipo de cuidado.</p></div>
      <button class="button primary full" type="submit" style="margin-top:18px">Salvar revisão e continuar</button></section></form>`;
}
function scoreCompare(id,label,before,now) { return `<div class="form-group"><label for="review-${id}">${label}</label><div class="score-compare"><span>Antes: <strong>${Number(before)}</strong></span><input id="review-${id}" name="${id}" type="range" min="0" max="10" value="${Number(now)}" oninput="this.nextElementSibling.value=this.value"><output>${Number(now)}</output></div></div>`; }

function maintenancePage() {
  const m=state.maintenance;
  return `<section class="card"><p class="eyebrow">Os próximos noventa dias</p><h1>Plano de manutenção</h1><p>Escolha poucos elementos. O objetivo é criar um mapa para retornar quando a rotina se quebrar.</p>
    <form id="maintenanceForm">
      ${textareaField('direction','Minha direção principal',m.direction)}
      <fieldset><legend>Três hábitos ou cuidados que desejo proteger</legend>${[0,1,2].map(i=>`<div class="form-group"><label for="habit${i}">Hábito ou cuidado ${i+1}</label><input id="habit${i}" name="habit${i}" type="text" value="${escapeHTML(m.habits?.[i]||'')}"></div>`).join('')}</fieldset>
      ${textareaField('maintenanceMinimum','Minha versão mínima para dias difíceis',m.minimum)}
      ${textareaField('maintenanceSupport','Pessoas, serviços ou recursos de apoio',m.support)}
      ${textareaField('signs','Sinais de que preciso reduzir o ritmo ou pedir ajuda',m.signs)}
      <div class="form-group"><label for="reviewDay">Dia da semana em que revisarei este plano</label><select id="reviewDay" name="reviewDay"><option value="">Escolha um dia</option>${['Segunda-feira','Terça-feira','Quarta-feira','Quinta-feira','Sexta-feira','Sábado','Domingo'].map(d=>`<option ${m.reviewDay===d?'selected':''}>${d}</option>`).join('')}</select></div>
      <div class="minimum"><strong>Regra de retorno</strong>Quando eu interromper a rotina, não precisarei começar a vida inteira de novo. Retomarei a próxima ação possível.</div>
      <button class="button primary full" type="submit" style="margin-top:18px">Salvar meu plano de manutenção</button>
    </form></section>`;
}

function completionPage() {
  const declaration = state.days[30]?.answers?.filter(Boolean).join(' ') || '';
  return `<section class="hero" style="text-align:center"><div class="completion-mark" aria-hidden="true">✓</div><p class="eyebrow">O plano termina. O cuidado continua.</p><h1>${escapeHTML(state.profile.name || 'Você')} chegou até aqui.</h1><p>O valor deste plano não está na sequência perfeita. Está no que você conseguiu reconhecer e no ponto de retorno que começou a construir.</p></section>
    ${audioCard('final')}
    ${declaration?`<section class="section card"><p class="eyebrow">Sua declaração</p><p class="lead summary-answer">${escapeHTML(declaration)}</p></section>`:''}
    <section class="section card"><p>Recomeçar não significa recuperar tudo o que foi perdido nem voltar exatamente à pessoa que você era. Algumas perdas mudam o caminho. Algumas exigem tratamento, acessibilidade, proteção, apoio e tempo.</p><p>Mas você pode continuar participando da própria vida. Pode receber ajuda sem perder a voz. Pode mudar a ferramenta sem abandonar o propósito. Pode descansar e depois retornar.</p><div class="quote">“O que restou de mim não foi apenas uma parte do homem que eu era. Foi a matéria com a qual comecei a construir o homem que sou.”<br><small>— Clodisnei Cavalcante Peres</small></div></section>
    <section class="section card"><p>Leve consigo aquilo que funcionou. Adapte o que não coube. Procure ajuda para o que não deve ser atravessado sozinho. E, quando parecer que tudo parou novamente, volte ao primeiro gesto possível.</p><p class="lead"><strong>Abra a janela.<br>O restante pode começar depois.</strong></p>
      <div class="actions-stack no-print"><button class="button primary" data-route="summary">Ver meu resumo</button><button class="button secondary" id="exportData">Fazer backup</button><button class="button secondary" data-route="maintenance">Revisar plano de manutenção</button><button class="button secondary" data-route="reminders">Ajustar lembrete</button><button class="button secondary" id="sharePlan">Compartilhar este plano</button></div></section>`;
}

function journalPage() {
  const entries=Object.entries(state.days).filter(([,d])=>d.status || (d.answers||[]).some(Boolean) || d.notes).sort((a,b)=>Number(b[0])-Number(a[0]));
  const favorites=Object.keys(state.favorites||{}).filter(n=>state.favorites[n] && dayData[n]).sort((a,b)=>Number(a)-Number(b));
  return `<section class="card"><p class="eyebrow">Seus registros</p><h1>O que você vem percebendo</h1><p>Os textos abaixo estão armazenados neste aparelho.</p>
    <div class="hero-actions"><button class="button secondary" id="exportData">Fazer backup</button><label class="button secondary" for="importData">Restaurar backup</label><input class="file-input" id="importData" type="file" accept="application/json"><button class="button secondary" data-route="summary">Gerar meu caderno em PDF</button><button class="button secondary" data-route="insights">Análise da jornada</button><button class="button secondary danger" id="clearData">Apagar dados</button></div></section>
    <section class="section card"><p class="eyebrow">O que quero levar comigo</p><h2>Reflexões marcadas</h2>${favorites.length?`<div class="favorite-list">${favorites.map(n=>`<article class="favorite-item"><div><strong>Dia ${n} — ${escapeHTML(dayData[n].title)}</strong><p>${escapeHTML(dayData[n].reflection[0])}</p></div><button class="button secondary" data-route="day/${n}">Abrir</button></article>`).join('')}</div>`:'<p class="muted">Use o botão “Quero lembrar desta reflexão” dentro de um dia para reunir aqui as ideias que deseja levar adiante.</p>'}</section>
    <section class="section">${entries.length?entries.map(([n,d])=>`<article class="card journal-entry"><div class="journal-meta"><strong>Dia ${n} — ${escapeHTML(dayData[n]?.title||'')}</strong><span>${escapeHTML(statusLabel(d.status))}</span></div>${(d.answers||[]).filter(Boolean).map(a=>`<p class="summary-answer">${escapeHTML(a)}</p>`).join('')}${d.notes?`<p class="summary-answer">${escapeHTML(d.notes)}</p>`:''}<button class="button secondary" data-route="day/${n}">Editar registro</button></article>`).join(''):`<div class="empty"><h2>Nenhum registro ainda</h2><p>Quando você salvar um rascunho ou concluir um dia, ele aparecerá aqui.</p><button class="button primary" data-route="day/1">Abrir o Dia 1</button></div>`}</section>`;
}

function summaryPage() {
  const r=state.finalReview, m=state.maintenance, entries=Object.entries(state.days).filter(([,d])=>d.status || (d.answers||[]).some(Boolean) || d.notes).sort((a,b)=>Number(a[0])-Number(b[0]));
  const favorites=Object.keys(state.favorites||{}).filter(n=>state.favorites[n] && dayData[n]).sort((a,b)=>Number(a)-Number(b));
  return `<section class="hero summary-section"><p class="eyebrow">Caderno pessoal</p><h1>Meu recomeço</h1><p>${escapeHTML(state.profile.name)} · Início em ${formatDate(state.profile.startDate)} · ${completedCount()} dias registrados</p><div class="hero-actions no-print"><button class="button primary" id="printSummary">Gerar meu caderno em PDF</button><button class="button ghost" id="exportData">Fazer backup</button><button class="button ghost" data-route="insights">Ver análise</button></div></section>
    <section class="section card summary-section"><h2>Ponto de partida</h2><p><strong>O que mudou:</strong><br><span class="summary-answer">${escapeHTML(state.baseline.loss)}</span></p><p><strong>O que precisava de cuidado:</strong><br><span class="summary-answer">${escapeHTML(state.baseline.care)}</span></p><p><strong>O que permaneceu:</strong><br><span class="summary-answer">${escapeHTML(state.baseline.remains)}</span></p><p><strong>Rede de apoio:</strong><br><span class="summary-answer">${escapeHTML(state.baseline.support)}</span></p></section>
    <section class="section card summary-section"><h2>Meu compromisso</h2><p class="summary-answer">${escapeHTML(state.commitment.text)}</p><p><strong>Passo mínimo:</strong> ${escapeHTML(state.commitment.minimum)}</p><p><strong>Apoio:</strong> ${escapeHTML(state.commitment.support)}</p></section>
    ${favorites.length?`<section class="section card summary-section"><h2>O que quero levar comigo</h2>${favorites.map(n=>`<p><strong>Dia ${n} — ${escapeHTML(dayData[n].title)}</strong><br><span class="summary-answer">${escapeHTML(dayData[n].reflection[0])}</span></p>`).join('')}</section>`:''}
    ${r.saved?`<section class="section card summary-section"><h2>Revisão dos 30 dias</h2>${r.answers.map((a,i)=>a?`<p><strong>${i+1}.</strong> <span class="summary-answer">${escapeHTML(a)}</span></p>`:'').join('')}<p><strong>Energia:</strong> ${r.energy}/10 · <strong>Sono:</strong> ${r.sleep}/10 · <strong>Esperança:</strong> ${r.hope}/10 · <strong>Apoio:</strong> ${r.supportScore}/10</p></section>`:''}
    ${m.saved?`<section class="section card summary-section"><h2>Plano de manutenção</h2><p><strong>Direção:</strong><br><span class="summary-answer">${escapeHTML(m.direction)}</span></p><p><strong>Hábitos:</strong> ${m.habits.filter(Boolean).map(escapeHTML).join(' · ')}</p><p><strong>Versão mínima:</strong><br><span class="summary-answer">${escapeHTML(m.minimum)}</span></p><p><strong>Apoios:</strong><br><span class="summary-answer">${escapeHTML(m.support)}</span></p><p><strong>Sinais:</strong><br><span class="summary-answer">${escapeHTML(m.signs)}</span></p><p><strong>Revisão:</strong> ${escapeHTML(m.reviewDay)}</p></section>`:''}
    <section class="section"><h2>Registros dos dias</h2>${entries.map(([n,d])=>`<article class="card journal-entry summary-section"><div class="journal-meta"><strong>Dia ${n} — ${escapeHTML(dayData[n].title)}</strong><span>${escapeHTML(statusLabel(d.status))}</span></div>${(d.answers||[]).filter(Boolean).map(a=>`<p class="summary-answer">${escapeHTML(a)}</p>`).join('')}${d.notes?`<p class="summary-answer">${escapeHTML(d.notes)}</p>`:''}</article>`).join('')||'<div class="empty">Nenhum registro ainda.</div>'}</section>`;
}

function insightsPage() {
  const counts={planned:0,adapted:0,rested:0,help:0};
  Object.values(state.days).forEach(d=>{if(d.status && counts[d.status]!==undefined) counts[d.status]++;});
  const total=Object.values(counts).reduce((a,b)=>a+b,0), favorites=Object.values(state.favorites||{}).filter(Boolean).length;
  const labels={planned:'Fiz como planejado',adapted:'Adaptei',rested:'Descansei',help:'Pedi ajuda'};
  const max=Math.max(...Object.values(counts));
  const common=max?Object.keys(counts).filter(k=>counts[k]===max).map(k=>labels[k]).join(' e '):'ainda não há registros suficientes';
  const r=state.finalReview;
  const delta=(before,after)=>{const d=Number(after)-Number(before);return `${d>0?'+':''}${d}`;};
  return `<section class="hero"><p class="eyebrow">Análise da jornada</p><h1>Seu caminho em dados simples</h1><p>Esta leitura descreve o que foi registrado no aplicativo. Ela não faz diagnóstico, não interpreta sua personalidade e não substitui uma avaliação profissional.</p></section>
    <section class="section grid insight-grid"><div class="stat"><strong>${total}</strong><span>dias concluídos</span></div><div class="stat"><strong>${draftCount()}</strong><span>rascunhos</span></div><div class="stat"><strong>${favorites}</strong><span>reflexões guardadas</span></div><div class="stat"><strong>${Math.round(total/30*100)}%</strong><span>do mapa registrado</span></div></section>
    <section class="section card"><h2>Formas de participação</h2><p>Todos os quatro modos são legítimos dentro do plano.</p><div class="participation-bars">${Object.entries(counts).map(([k,v])=>`<div><div class="bar-label"><span>${labels[k]}</span><strong>${v}</strong></div><div class="mini-track"><span style="width:${total?v/total*100:0}%"></span></div></div>`).join('')}</div><p class="notice"><strong>Registro mais frequente:</strong> ${common}. Isto é apenas uma descrição das escolhas salvas, não uma avaliação de desempenho.</p></section>
    ${r.saved?`<section class="section card"><h2>Comparação entre início e revisão final</h2><div class="comparison-grid">${[['Energia','energy'],['Sono','sleep'],['Esperança','hope'],['Sensação de apoio','supportScore']].map(([label,key])=>`<div class="comparison-card"><strong>${label}</strong><span>${state.baseline[key]} → ${r[key]}</span><small>Variação: ${delta(state.baseline[key],r[key])}</small></div>`).join('')}</div><p class="hint">Uma nota menor não apaga aprendizados. Ela pode refletir o momento em que a revisão foi preenchida.</p></section>`:`<section class="section notice"><strong>A comparação aparecerá depois</strong><p>Quando você concluir a revisão dos 30 dias, esta página mostrará lado a lado as notas iniciais e finais.</p></section>`}
    <section class="section card"><h2>Próximas formas de olhar para o caminho</h2><div class="actions-stack"><button class="button secondary" data-route="journal">Rever meus registros</button><button class="button secondary" data-route="summary">Gerar meu caderno em PDF</button><button class="button secondary" data-route="maintenance">Revisar meu plano de manutenção</button></div></section>`;
}

function privacyPage() { return `<section class="hero"><p class="eyebrow">Privacidade</p><h1>Seus registros pertencem a você</h1><p>O aplicativo foi construído para funcionar sem cadastro obrigatório e sem enviar suas respostas ao autor.</p></section>
  <section class="section card"><h2>Onde os dados ficam</h2><p>Nome, data de início, respostas, progresso, preferências e reflexões marcadas ficam no armazenamento local do navegador usado neste aparelho.</p><p><strong>O autor não consegue ler suas anotações.</strong> O aplicativo atual não possui conta de usuário nem banco de dados remoto.</p></section>
  <section class="section card"><h2>Como evitar perdas</h2><p>Limpar os dados do navegador, remover o aplicativo ou trocar de aparelho pode apagar os registros locais. Use “Fazer backup” para gerar um arquivo e “Restaurar backup” para recuperar a jornada.</p><div class="actions-stack"><button class="button primary" id="exportData">Fazer backup agora</button><button class="button secondary" data-route="journal">Abrir meus registros</button></div></section>
  <section class="section card"><h2>Controle do leitor</h2><p>Você pode exportar uma cópia, restaurar um arquivo ou apagar todos os dados locais pela área Registros. O compartilhamento do plano envia somente o endereço do aplicativo, nunca suas respostas.</p></section>
  <section class="section notice warning"><strong>Conteúdo sensível</strong><p>Evite registrar informações de terceiros que não sejam necessárias. Em aparelhos compartilhados, considere usar bloqueio de tela e manter o arquivo de backup em local protegido.</p></section>`; }

function installPage() {
  const installed=isStandalone();
  return `<section class="hero"><p class="eyebrow">Instalação</p><h1>${installed?'O aplicativo já está instalado':'Coloque o plano na tela inicial'}</h1><p>${installed?'Você está usando o aplicativo no modo instalado.':'A instalação cria um ícone no celular, abre o plano como aplicativo e facilita o acesso aos conteúdos já visitados.'}</p>${installed?'':`<div class="hero-actions"><button class="button primary" id="installApp">Tentar instalação automática</button></div>`}</section>
  <section class="section card"><h2>No Android com Chrome</h2><ol class="practice-list"><li>Toque em <strong>Instalar aplicativo</strong> nesta página.</li><li>Se o botão automático não funcionar, abra o menu de três pontos do Chrome.</li><li>Escolha <strong>Instalar app</strong> ou <strong>Adicionar à tela inicial</strong>.</li><li>Confirme a instalação.</li></ol></section>
  <section class="section card"><h2>No iPhone ou iPad com Safari</h2><ol class="practice-list"><li>Abra este endereço no Safari.</li><li>Toque no botão <strong>Compartilhar</strong>.</li><li>Escolha <strong>Adicionar à Tela de Início</strong>.</li><li>Confirme em <strong>Adicionar</strong>.</li></ol><p class="hint">O iPhone não exibe o mesmo aviso automático do Android; a instalação é feita pelo menu Compartilhar.</p></section>
  <section class="section notice"><strong>Funcionamento offline</strong><p>Depois da primeira abertura, as páginas visitadas ficam disponíveis sem internet. A capa e cada áudio são guardados no aparelho após serem carregados pelo menos uma vez.</p></section>
  <button class="button secondary full section" data-route="home">Voltar ao início</button>`;
}

function remindersPage() {
  const r=state.reminders || initialState.reminders;
  const permission=('Notification' in window)?Notification.permission:'indisponível';
  return `<section class="hero"><p class="eyebrow">Lembretes opcionais</p><h1>Um convite para retornar, não uma cobrança</h1><p>Escolha um horário. O aplicativo mostrará o lembrete quando estiver aberto ou quando você retornar depois desse horário.</p></section>
  <form id="reminderForm"><section class="section card"><label class="switch-row"><span><strong>Ativar lembrete diário</strong><small>Você poderá desativar a qualquer momento.</small></span><input type="checkbox" name="enabled" role="switch" ${r.enabled?'checked':''}></label><div class="form-group"><label for="reminderTime">Horário do lembrete</label><input id="reminderTime" name="time" type="time" value="${escapeHTML(r.time || '19:00')}"></div><div class="notice"><strong>Mensagem</strong><p>“Seu ponto de retorno está aqui. Faça o próximo passo possível quando estiver pronto.”</p></div><button class="button primary full" type="submit" style="margin-top:18px">Salvar lembrete</button></section></form>
  <section class="section card"><h2>Notificações do navegador</h2><p>Permissão atual: <strong>${escapeHTML(permission)}</strong>.</p><p>Quando permitidas, as notificações podem aparecer enquanto o aplicativo estiver ativo. Em alguns celulares, o navegador suspende aplicativos fechados; por isso, o app também verifica o lembrete quando você o abre novamente.</p><div class="hero-actions"><button class="button secondary" id="testReminder" type="button">Testar lembrete</button><button class="button secondary" data-route="install">Instalar na tela inicial</button></div></section>
  <section class="section notice warning"><strong>Limite técnico</strong><p>Esta versão não usa servidor nem coleta dados. Por isso, não promete notificações em segundo plano com o aplicativo totalmente fechado. Uma versão futura com notificações push exigiria serviço de envio e consentimento adicional.</p></section>`;
}

function aboutPage() { return `<section class="hero"><p class="eyebrow">Sobre o projeto</p><h1>Uma extensão digital do livro</h1><p class="lead">Esta versão transforma o plano prático de <em>O Que Restou de Mim</em> numa experiência interativa, acessível e particular.</p><div class="hero-actions"><button class="button primary" data-route="${state.profile.started?'journey':'intro/1'}">${state.profile.started?'Abrir minha jornada':'Conhecer e começar'}</button><button class="button ghost" id="sharePlan">Compartilhar o plano</button></div></section>
  <section class="section card book-section"><div class="origin-grid">${bookCoverMarkup('large')}<div><p class="eyebrow">O livro</p><h2>O Que Restou de Mim</h2><p><strong>Como a Hipnose, a PNL e a Neurociência Me Ajudaram a Recomeçar Depois das Perdas</strong></p><p>Relato autobiográfico sobre perda da visão, rupturas familiares, fé, identidade, luto e reconstrução. O plano de trinta dias apresentado ao final da obra deu origem a este aplicativo.</p><dl class="book-meta"><div><dt>Autor</dt><dd>Clodisnei Cavalcante Peres</dd></div><div><dt>Edição</dt><dd>1ª edição · Paranavaí, PR · 2026</dd></div><div><dt>ISBN ePub</dt><dd>978-65-02-25964-1</dd></div></dl><p>Você não precisa ter lido o livro para usar o aplicativo. No livro, encontrará a história e as experiências que deram origem às práticas.</p>${bookButtons()}</div></div></section>
  <section class="section card"><p class="eyebrow">Sobre o autor</p><h2>Clodisnei Cavalcante Peres</h2><p>Nascido e residente em Paranavaí, no Paraná, possui formação em massoterapia, hipnose clínica e Programação Neurolinguística — PNL. Cursa Ciências Econômicas e Filosofia na modalidade EAD pelo Centro Universitário UniFatecie e mantém estudos em terapia sistêmica, neurociência e Terapia Cognitivo-Comportamental.</p><p>Com aproximadamente 5% de acuidade visual, utiliza ampliação, leitores de tela, comandos de voz e ditado em áudio para estudar, organizar projetos e escrever. O próprio desenvolvimento acessível deste aplicativo continua a ideia central do livro: mudar a ferramenta sem abandonar o propósito.</p></section>
  <section class="section card"><h2>Cinco princípios do plano</h2><ul class="principles">
    <li><span class="number">1</span><span><strong>Verdade antes de aparência.</strong><br><small>Registre o que realmente aconteceu.</small></span></li><li><span class="number">2</span><span><strong>Segurança antes de desempenho.</strong><br><small>Necessidades de saúde e proteção vêm primeiro.</small></span></li><li><span class="number">3</span><span><strong>Pequeno antes de perfeito.</strong><br><small>Um gesto possível vale mais que um plano ideal.</small></span></li><li><span class="number">4</span><span><strong>Adaptação antes de abandono.</strong><br><small>Mude a ferramenta sem abandonar o propósito.</small></span></li><li><span class="number">5</span><span><strong>Companhia antes de isolamento.</strong><br><small>Pedir ajuda também é participar da própria vida.</small></span></li></ul></section>
  <section class="section card"><h2>Instalação e lembretes</h2><p>Você pode instalar o plano na tela inicial e escolher um horário de lembrete. As notificações dependem das permissões e recursos do navegador.</p><div class="hero-actions"><button class="button secondary" data-route="install">Como instalar</button><button class="button secondary" data-route="reminders">Configurar lembrete</button></div></section>
  <section class="section card"><h2>Privacidade e acessibilidade</h2><p>O aplicativo oferece ampliação de texto, alto contraste, modo escuro, movimento reduzido, leitura em voz alta, ditado quando disponível e navegação por teclado.</p><div class="hero-actions"><button class="button secondary" data-route="privacy">Ler a política de privacidade</button><button class="button secondary" id="sharePlan">Compartilhar este plano</button></div></section>
  <section class="section notice warning"><strong>Cuidado</strong><p>Este plano não substitui atendimento médico, psicológico, psiquiátrico, jurídico, social ou pastoral. Diante de risco imediato, violência, sintomas físicos importantes ou sofrimento impossível de suportar sozinho, procure ajuda local e profissional com prioridade.</p></section>
  <section class="section card"><div class="quote">“O que restou de mim não foi apenas uma parte do homem que eu era. Foi a matéria com a qual comecei a construir o homem que sou.”<br><small>— Clodisnei Cavalcante Peres</small></div></section>`; }

function bindPageEvents() {
  document.querySelectorAll('[data-route]').forEach(el=>el.addEventListener('click',()=>routeTo(el.dataset.route)));
  document.querySelectorAll('[data-complete-intro]').forEach(el=>el.addEventListener('click',()=>{state.profile.onboardingSeen=true;saveState();routeTo(el.dataset.completeIntro||'start');}));
  document.querySelector('#startForm')?.addEventListener('submit', e=>{ e.preventDefault(); const f=new FormData(e.currentTarget); state.profile.name=String(f.get('name')).trim(); state.profile.startDate=f.get('startDate'); state.profile.onboardingSeen=true; saveState(); routeTo('baseline'); });
  document.querySelector('#baselineForm')?.addEventListener('submit', e=>{ e.preventDefault(); const f=new FormData(e.currentTarget); ['loss','care','remains','support'].forEach(k=>state.baseline[k]=f.get(k)); ['energy','sleep','hope','supportScore'].forEach(k=>state.baseline[k]=Number(f.get(k))); state.commitment={text:f.get('commitmentText'),minimum:f.get('commitmentMinimum'),support:f.get('commitmentSupport')}; state.profile.started=true; saveState(); toast('Seu ponto de partida foi salvo.'); routeTo('day/1'); });
  const dayForm=document.querySelector('#dayForm');
  dayForm?.addEventListener('input',()=>{ clearTimeout(draftTimer); document.querySelector('#draftIndicator').textContent='Salvando rascunho…'; draftTimer=setTimeout(()=>saveDayDraft(dayForm),450); });
  dayForm?.addEventListener('submit', e=>{ e.preventDefault(); const form=e.currentTarget, n=Number(form.dataset.day), f=new FormData(form), status=f.get('status'); if(!status){toast('Escolha como foi possível participar hoje.'); form.querySelector('input[name="status"]').focus();return;} saveDayFromForm(form,status); toast('Seu dia foi salvo. Você pode voltar quando precisar.'); const milestone=[7,14,21,30].includes(n); const shown=state.backup?.remindersShown||[]; if(milestone && !shown.includes(n)){state.backup.remindersShown=[...shown,n];saveState();setTimeout(()=>routeTo(`backup/${n}`),500);}else setTimeout(()=>routeTo(n<30?`day/${n+1}`:'review'),500); });
  document.querySelector('#reviewForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);state.finalReview.answers=Array.from({length:8},(_,i)=>f.get(`review${i+1}`)||'');['energy','sleep','hope','supportScore'].forEach(k=>state.finalReview[k]=Number(f.get(k)));state.finalReview.saved=true;saveState();toast('Sua revisão foi salva.');routeTo('maintenance');});
  document.querySelector('#maintenanceForm')?.addEventListener('submit',e=>{e.preventDefault();const f=new FormData(e.currentTarget);state.maintenance={direction:f.get('direction')||'',habits:[f.get('habit0')||'',f.get('habit1')||'',f.get('habit2')||''],minimum:f.get('maintenanceMinimum')||'',support:f.get('maintenanceSupport')||'',signs:f.get('signs')||'',reviewDay:f.get('reviewDay')||'',saved:true};saveState();toast('Seu plano de manutenção foi salvo.');routeTo('completion');});
  document.querySelectorAll('[data-dictate]').forEach(btn=>btn.addEventListener('click',()=>startDictation(btn.dataset.dictate,btn)));
  document.querySelectorAll('[data-favorite-day]').forEach(btn=>btn.addEventListener('click',()=>toggleFavorite(Number(btn.dataset.favoriteDay))));
  document.querySelectorAll('#exportData').forEach(btn=>btn.addEventListener('click',exportData));
  document.querySelectorAll('#sharePlan').forEach(btn=>btn.addEventListener('click',sharePlan));
  document.querySelectorAll('[data-product-link]').forEach(btn =>
  btn.addEventListener('click', openProductLink));
  document.querySelector('#importData')?.addEventListener('change',importData);
  document.querySelector('#printSummary')?.addEventListener('click',()=>window.print());
  document.querySelector('#clearData')?.addEventListener('click',()=>{if(confirm('Apagar todos os registros deste aplicativo neste aparelho?')){try{localStorage.removeItem(STORAGE_KEY);localStorage.removeItem(LEGACY_KEY);}catch{}state=clone(initialState);applySettings();routeTo('home');toast('Os dados foram apagados.');}});
  const installBanner=document.querySelector('#installBanner'); if(installBanner && deferredInstallPrompt) installBanner.classList.add('visible');
  document.querySelectorAll('#installApp').forEach(btn=>btn.addEventListener('click',installApp));
  document.querySelector('#reminderForm')?.addEventListener('submit',saveReminderSettings);
  document.querySelector('#testReminder')?.addEventListener('click',()=>showReminderNotification(true));
  bindOptionalMedia();
}

function bindOptionalMedia() {
  document.querySelectorAll('[data-book-cover]').forEach(img=>{
    const fallback=img.parentElement.querySelector('[data-cover-fallback]');
    const showFallback=()=>{img.hidden=true;if(fallback)fallback.hidden=false;};
    const showImage=()=>{img.hidden=false;if(fallback)fallback.hidden=true;};
    img.addEventListener('error',showFallback,{once:true});
    img.addEventListener('load',showImage,{once:true});
    if(img.complete) img.naturalWidth?showImage():showFallback();
  });
  document.querySelectorAll('[data-audio-source]').forEach(source=>{
    const audio=source.closest('audio'), card=source.closest('[data-audio-card]'), missing=card?.querySelector('[data-media-missing]');
    const fail=()=>{if(audio)audio.hidden=true;if(missing)missing.hidden=false;};
    const ok=()=>{if(audio)audio.hidden=false;if(missing)missing.hidden=true;};
    source.addEventListener('error',fail,{once:true});
    audio?.addEventListener('canplay',ok,{once:true});
    audio?.load();
  });
}
function openProductLink(event) {

  const key = event.currentTarget.dataset.productLink;

  const labels = {
    physicalBookUrl: 'O livro físico',
    ebookUrl: 'O e-book',
    methodUrl: 'O Método'
  };

  const url = String(APP_CONFIG[key] || '').trim();

  if (!url) {
    toast(`${labels[key] || 'Este produto'} estará disponível em breve.`);
    return;
  }

  try {
    window.open(
      new URL(url, location.href).href,
      '_blank',
      'noopener,noreferrer'
    );
  } catch {
    toast('O endereço configurado não é válido.');
  }
}
async function saveReminderSettings(event) {
  event.preventDefault();
  const f=new FormData(event.currentTarget), enabled=f.get('enabled')==='on', time=String(f.get('time')||'19:00');
  let permission=('Notification' in window)?Notification.permission:'indisponível';
  if(enabled && 'Notification' in window && permission==='default') {
    try{permission=await Notification.requestPermission();}catch{}
  }
  state.reminders={...(state.reminders||initialState.reminders),enabled,time,permission};
  saveState();scheduleReminder();toast(enabled?'Lembrete ativado.':'Lembrete desativado.');render();
}
function reminderDueNow() {
  const r=state.reminders||initialState.reminders;
  if(!r.enabled || !state.profile.started || completedCount()>=30) return false;
  const [h,m]=String(r.time||'19:00').split(':').map(Number), now=new Date();
  return now.getHours()>h || (now.getHours()===h && now.getMinutes()>=m);
}
async function showReminderNotification(test=false) {
  const title='30 Dias para o Seu Recomeço', body=test?'Este é um teste. Seu lembrete está funcionando enquanto o aplicativo está ativo.':'Seu ponto de retorno está aqui. Faça o próximo passo possível quando estiver pronto.';
  let shown=false;
  if('Notification' in window && Notification.permission==='granted') {
    try{
      if('serviceWorker' in navigator){const reg=await navigator.serviceWorker.ready;await reg.showNotification(title,{body,icon:'icons/icon-192.png',badge:'icons/icon-192.png',tag:'recomeco-diario',data:{url:`${location.pathname}#day/${currentDay()}`}});}
      else new Notification(title,{body,icon:'icons/icon-192.png',tag:'recomeco-diario'});
      shown=true;
    }catch{}
  }
  toast(shown?(test?'Notificação de teste enviada.':'Seu lembrete de hoje chegou.'):(test?'Lembrete de teste: seu ponto de retorno está aqui.':'Seu ponto de retorno está aqui.'));
  if(!test){state.reminders.lastShownDate=localISODate();saveState();}
}
function maybeShowDueReminder() {
  const r=state.reminders||initialState.reminders;
  if(reminderDueNow() && r.lastShownDate!==localISODate()) showReminderNotification(false);
}
function scheduleReminder() {
  clearTimeout(reminderTimer); reminderTimer=null;
  const r=state.reminders||initialState.reminders;
  if(!r.enabled || !state.profile.started || completedCount()>=30) return;
  maybeShowDueReminder();
  const [h,m]=String(r.time||'19:00').split(':').map(Number), now=new Date(), next=new Date(now);
  next.setHours(h,m,0,0); if(next<=now) next.setDate(next.getDate()+1);
  reminderTimer=setTimeout(()=>{showReminderNotification(false);scheduleReminder();},Math.max(1000,next-now));
}

function toggleFavorite(n) {
  state.favorites=state.favorites||{};
  state.favorites[n]=!state.favorites[n];
  saveState();
  render();
  toast(state.favorites[n]?'Reflexão guardada.':'Reflexão removida.');
}

function saveDayFromForm(form,statusOverride=null) { const n=Number(form.dataset.day), f=new FormData(form), previous=state.days[n]||{}; state.days[n]={answers:dayData[n].questions.map((_,i)=>f.get(`answer${i}`)||''),notes:f.get('notes')||'',status:statusOverride ?? f.get('status') ?? previous.status ?? '',savedAt:new Date().toISOString()};saveState(); }
function saveDayDraft(form) { saveDayFromForm(form); const el=document.querySelector('#draftIndicator'); if(el) el.textContent='Rascunho salvo neste aparelho.'; }

function startDictation(targetId, button) {
  const SpeechRecognition=window.SpeechRecognition||window.webkitSpeechRecognition;
  if(!SpeechRecognition){toast('O ditado não está disponível neste navegador. Use o microfone do teclado do celular.');return;}
  if(recognition) recognition.stop(); activeDictationTarget=document.getElementById(targetId); recognition=new SpeechRecognition(); recognition.lang='pt-BR'; recognition.interimResults=false; recognition.continuous=false;
  const original=button.textContent; button.textContent='● Ouvindo…';
  recognition.onresult=e=>{const transcript=Array.from(e.results).map(r=>r[0].transcript).join(' ');activeDictationTarget.value=`${activeDictationTarget.value}${activeDictationTarget.value?' ':''}${transcript}`;activeDictationTarget.dispatchEvent(new Event('input',{bubbles:true}));};
  recognition.onerror=()=>toast('Não foi possível usar o microfone. Verifique a permissão do navegador.');
  recognition.onend=()=>{button.textContent=original;recognition=null;activeDictationTarget=null;}; recognition.start();
}
function exportData() { const now=new Date().toISOString();state.backup=state.backup||{lastExportAt:'',remindersShown:[]};state.backup.lastExportAt=now;saveState();const payload={app:'30 Dias para o Seu Recomeço',exportedAt:now,data:state};const blob=new Blob([JSON.stringify(payload,null,2)],{type:'application/json'});const url=URL.createObjectURL(blob),a=document.createElement('a');a.href=url;a.download=`meu-plano-30-dias-${localISODate()}.json`;a.click();URL.revokeObjectURL(url);toast('Arquivo de backup preparado.'); }
function importData(event) { const file=event.target.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{try{const parsed=JSON.parse(reader.result),incoming=parsed.data||parsed;if(!incoming.profile||!incoming.days)throw new Error('Formato inválido');if(confirm('Restaurar este backup substituirá os dados atuais. Continuar?')){state=deepMerge(clone(initialState),incoming);state.version=4;saveState();applySettings();render();toast('Backup restaurado.');}}catch{toast('Não foi possível restaurar este arquivo.');}event.target.value='';};reader.readAsText(file); }
function sharePlan() {
  const url=location.protocol.startsWith('http')?`${location.origin}${location.pathname}`:location.href.split('#')[0];
  const data={title:'30 Dias para o Seu Recomeço',text:'Conheça o aplicativo gratuito 30 Dias para o Seu Recomeço, inspirado no livro O Que Restou de Mim, de Clodisnei Cavalcante Peres.',url};
  if(navigator.share){navigator.share(data).catch(()=>{});return;}
  if(navigator.clipboard?.writeText){navigator.clipboard.writeText(`${data.text}\n${url}`).then(()=>toast('Link copiado para compartilhar.')).catch(()=>toast('Não foi possível copiar o link.'));return;}
  const area=document.createElement('textarea');area.value=`${data.text}\n${url}`;document.body.appendChild(area);area.select();try{document.execCommand('copy');toast('Link copiado para compartilhar.');}catch{toast('Copie o endereço do navegador para compartilhar.');}area.remove();
}

function installApp() { if(isStandalone()){toast('O aplicativo já está instalado neste aparelho.');return;} if(!deferredInstallPrompt){toast('Abra as instruções de instalação para o seu celular.');routeTo('install');return;} deferredInstallPrompt.prompt(); deferredInstallPrompt.userChoice.then(choice=>{if(choice.outcome==='accepted')toast('Instalação iniciada.');}).finally(()=>{deferredInstallPrompt=null;}); }
function speakPage() { if(!('speechSynthesis' in window)){toast('A leitura em voz alta não está disponível neste navegador.');return;}if(speechSynthesis.speaking){speechSynthesis.cancel();toast('Leitura interrompida.');return;}const text=document.querySelector('#conteudo').innerText.replace(/\s+/g,' ').trim();const utter=new SpeechSynthesisUtterance(text);utter.lang='pt-BR';utter.rate=.92;speechSynthesis.speak(utter);toast('Leitura em voz alta iniciada.'); }

window.addEventListener('beforeinstallprompt',e=>{e.preventDefault();deferredInstallPrompt=e;document.querySelector('#installBanner')?.classList.add('visible');});
window.addEventListener('hashchange',render);
window.addEventListener('appinstalled',()=>{deferredInstallPrompt=null;toast('Aplicativo instalado com sucesso.');render();});
document.addEventListener('visibilitychange',()=>{if(document.visibilityState==='visible'){maybeShowDueReminder();scheduleReminder();}});
document.addEventListener('DOMContentLoaded',()=>{
  applySettings();render();scheduleReminder();
  document.querySelectorAll('.topbar [data-route], .bottom-nav [data-route]').forEach(el=>el.addEventListener('click',()=>routeTo(el.dataset.route)));
  document.querySelector('#accessibilityButton').addEventListener('click',()=>document.querySelector('#accessibilityDialog').showModal());
  document.querySelector('#readPage').addEventListener('click',speakPage);
  document.querySelectorAll('[data-font]').forEach(btn=>btn.addEventListener('click',()=>{state.settings.font=btn.dataset.font;saveState();applySettings();toast('Tamanho do texto atualizado.');}));
  document.querySelector('#contrastToggle').addEventListener('change',e=>{state.settings.contrast=e.target.checked;saveState();applySettings();});
  document.querySelector('#darkToggle').addEventListener('change',e=>{state.settings.dark=e.target.checked;saveState();applySettings();});
  document.querySelector('#motionToggle').addEventListener('change',e=>{state.settings.motion=e.target.checked;saveState();applySettings();});
  if('serviceWorker' in navigator && location.protocol.startsWith('http')) navigator.serviceWorker.register('sw.js').catch(()=>{});
});
