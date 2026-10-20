const SITE_NAME = "Finanças na Prática";
const CONTACT_EMAIL = "teteusantos.6583@gmail.com";

const ARTICLES = [
  {
    slug: "organizar-salario",
    category: "Organização financeira",
    title: "Como organizar o salário e fazer o dinheiro durar o mês inteiro",
    description: "Aprenda a organizar sua renda, controlar os gastos e planejar melhor o seu dinheiro.",
    date: "19 de outubro de 2026",
    content: `
      <p>Organizar o salário é um dos primeiros passos para ter mais tranquilidade financeira. Mesmo quando a renda é limitada, conhecer os gastos e planejar as despesas ajuda a tomar decisões melhores.</p>
      <h2>1. Descubra quanto você realmente recebe</h2>
      <p>Comece pelo valor líquido que entra na sua conta. Considere o salário depois dos descontos e some apenas outras rendas que você realmente recebe.</p>
      <h2>2. Anote todas as despesas</h2>
      <p>Registre aluguel, água, energia, alimentação, transporte, telefone, parcelas e pequenas compras. Os gastos pequenos também podem comprometer o orçamento quando se acumulam.</p>
      <h2>3. Separe os gastos por prioridade</h2>
      <p>Primeiro, considere moradia, alimentação, contas essenciais e transporte. Depois, avalie despesas variáveis, lazer e compras que podem esperar.</p>
      <h2>4. Monte um orçamento realista</h2>
      <p>O orçamento precisa refletir sua realidade. Não adianta definir limites impossíveis de cumprir. Use os gastos do mês anterior como ponto de partida e faça ajustes gradualmente.</p>
      <h2>5. Acompanhe o dinheiro durante o mês</h2>
      <p>Não espere o fim do mês para verificar o saldo. Confira os gastos semanalmente e compare o valor já utilizado com o limite planejado.</p>
      <h2>6. Planeje as próximas contas</h2>
      <p>Anote vencimentos e parcelas futuras. Isso ajuda a evitar atrasos e a perceber antecipadamente quando um mês terá despesas maiores.</p>
      <h2>Exemplo prático de orçamento mensal</h2>
      <p>Imagine uma pessoa com renda mensal de R$ 2.500. O exemplo abaixo é apenas ilustrativo e deve ser adaptado às despesas reais de cada família.</p>
      <div class="budget">
        <div class="example-row"><span>Moradia e contas</span><strong>R$ 900,00</strong></div>
        <div class="example-row"><span>Alimentação</span><strong>R$ 600,00</strong></div>
        <div class="example-row"><span>Transporte</span><strong>R$ 250,00</strong></div>
        <div class="example-row"><span>Telefone e internet</span><strong>R$ 100,00</strong></div>
        <div class="example-row"><span>Saúde e imprevistos</span><strong>R$ 150,00</strong></div>
        <div class="example-row"><span>Lazer e despesas pessoais</span><strong>R$ 200,00</strong></div>
        <div class="example-row total"><span>Total planejado</span><strong>R$ 2.200,00</strong></div>
        <div class="example-row"><span>Valor restante previsto</span><strong>R$ 300,00</strong></div>
      </div>
      <p>O valor restante não é automaticamente uma economia garantida. Ele depende de as despesas reais permanecerem dentro do planejamento. Se houver dívidas ou outras contas, ajuste o exemplo.</p>
      <h2>O que fazer quando o salário não cobre tudo?</h2>
      <p>Liste as despesas essenciais, os pagamentos atrasados e as dívidas. Entre em contato com os credores para conhecer alternativas de negociação e evite assumir uma nova parcela sem avaliar o orçamento.</p>
      <h2>Perguntas frequentes</h2>
      <h3>Qual é o primeiro passo para organizar o salário?</h3>
      <p>Descubra sua renda líquida e registre todas as despesas. Com essas informações, você poderá definir prioridades.</p>
      <h3>Preciso guardar dinheiro todos os meses?</h3>
      <p>Guardar dinheiro pode ajudar, mas o valor depende da renda e das obrigações. Se o orçamento estiver apertado, comece entendendo os gastos e evitando novas dívidas.</p>
      <h3>Como controlar pequenas compras?</h3>
      <p>Anote-as no mesmo dia e revise o total semanalmente. Assim, você consegue identificar hábitos que podem ser ajustados.</p>
    `
  },
  {
    slug: "orcamento-domestico",
    category: "Planejamento",
    title: "Como montar um orçamento doméstico simples",
    description: "Um método prático para acompanhar as contas da casa e planejar as despesas.",
    date: "19 de outubro de 2026",
    content: `
      <p>O orçamento doméstico reúne as receitas e despesas de uma casa. Ele ajuda a família a entender para onde o dinheiro está indo e a planejar os próximos meses.</p>
      <h2>Registre as receitas</h2>
      <p>Anote salários, trabalhos extras e outras entradas previsíveis. Evite contar com valores incertos antes de recebê-los.</p>
      <h2>Liste as despesas fixas</h2>
      <p>Inclua aluguel, prestações, internet e contas que se repetem. Anote os vencimentos para evitar esquecimentos.</p>
      <h2>Calcule as despesas variáveis</h2>
      <p>Mercado, transporte, farmácia e lazer podem mudar de um mês para outro. Use os registros anteriores para estimar limites realistas.</p>
      <h2>Revise o orçamento toda semana</h2>
      <p>Compare o planejado com o que foi gasto e faça ajustes quando necessário. Um orçamento é uma ferramenta de acompanhamento, não uma previsão perfeita.</p>
      <h2>Inclua despesas ocasionais</h2>
      <p>Material escolar, manutenção e presentes também precisam ser considerados. Quando possível, planeje essas despesas com antecedência.</p>
      <h2>Conclusão</h2>
      <p>Um registro simples, atualizado com frequência, pode ser mais útil do que uma planilha complicada que acaba sendo abandonada.</p>
    `
  },
  {
    slug: "entender-juros",
    category: "Educação financeira",
    title: "Juros: entenda como funcionam antes de contratar crédito",
    description: "Veja como os juros afetam empréstimos, compras parceladas e investimentos.",
    date: "19 de outubro de 2026",
    content: `
      <p>Juros são o custo de utilizar dinheiro emprestado ou a remuneração recebida em determinadas aplicações financeiras. O efeito depende das condições do contrato.</p>
      <h2>Juros em empréstimos</h2>
      <p>Em um empréstimo, os juros aumentam o valor que precisa ser devolvido. Antes de contratar, compare o custo total, as parcelas e o prazo.</p>
      <h2>Juros simples e compostos</h2>
      <p>Nos juros simples, o cálculo incide sobre o valor inicial. Nos compostos, os juros acumulados passam a integrar a base de cálculo dos períodos seguintes.</p>
      <h2>Observe o custo efetivo total</h2>
      <p>Além da taxa de juros, podem existir tarifas, tributos e outros custos. No Brasil, o Custo Efetivo Total (CET) ajuda a comparar operações de crédito.</p>
      <h2>Compare antes de decidir</h2>
      <p>Não escolha uma oferta apenas pelo valor da parcela. Um prazo maior pode reduzir a prestação e aumentar o total pago.</p>
      <h2>Conclusão</h2>
      <p>Leia o contrato, confira as condições e avalie se a prestação cabe no orçamento mesmo diante de despesas inesperadas.</p>
    `
  },
  {
    slug: "plano-para-dividas",
    category: "Controle financeiro",
    title: "Como criar um plano para organizar e negociar dívidas",
    description: "Organize os débitos, avalie propostas e monte um plano de pagamento possível.",
    date: "19 de outubro de 2026",
    content: `
      <p>Quando existem várias dívidas, é importante conhecer cada obrigação antes de decidir como pagar. Um plano realista reduz a chance de assumir compromissos que não cabem na renda.</p>
      <h2>1. Faça uma lista completa</h2>
      <p>Anote credor, saldo, parcela, vencimento, juros e situação de cada dívida. Consulte os contratos e os canais oficiais dos credores.</p>
      <h2>2. Proteja as despesas essenciais</h2>
      <p>Considere alimentação, moradia, água, energia, transporte e saúde ao calcular quanto pode destinar aos pagamentos.</p>
      <h2>3. Procure opções de negociação</h2>
      <p>Peça informações sobre desconto, entrada, prazo e valor total. Confira todas as condições por escrito antes de aceitar.</p>
      <h2>4. Compare as propostas</h2>
      <p>Uma parcela menor não significa necessariamente uma dívida mais barata. Compare o custo final e a possibilidade real de cumprir o acordo.</p>
      <h2>5. Evite novas dívidas desnecessárias</h2>
      <p>Enquanto organiza os pagamentos, revise compras parceladas e despesas que podem ser adiadas.</p>
      <h2>Conclusão</h2>
      <p>O plano deve respeitar sua capacidade financeira. Se a situação estiver complexa, procure órgãos de defesa do consumidor ou orientação financeira confiável.</p>
    `
  },
  {
    slug: "economizar-compras",
    category: "Economia do dia a dia",
    title: "Como economizar nas compras sem comprometer o essencial",
    description: "Planeje compras, compare preços e reduza desperdícios no dia a dia.",
    date: "19 de outubro de 2026",
    content: `
      <p>Economizar não significa deixar de comprar o que é necessário. O objetivo é gastar de forma consciente, evitando desperdícios e compras que não estavam planejadas.</p>
      <h2>Faça uma lista antes de sair</h2>
      <p>Confira o que já existe em casa e anote apenas o que falta. Isso ajuda a evitar duplicidades e compras por impulso.</p>
      <h2>Compare preços e quantidades</h2>
      <p>Observe o preço por quilo, litro ou unidade. Embalagens maiores nem sempre são mais econômicas e só compensam se o produto for utilizado.</p>
      <h2>Planeje as refeições</h2>
      <p>Organizar as refeições da semana ajuda a comprar os ingredientes necessários e a aproveitar alimentos antes que estraguem.</p>
      <h2>Avalie promoções com cuidado</h2>
      <p>Uma promoção só representa economia quando o produto é necessário e o preço é realmente vantajoso.</p>
      <h2>Acompanhe os gastos</h2>
      <p>Guarde os comprovantes ou registre os valores. Ao final do mês, identifique quais hábitos podem ser ajustados.</p>
    `
  },
  {
    slug: "reserva-emergencia",
    category: "Planejamento financeiro",
    title: "Reserva de emergência: como começar aos poucos",
    description: "Entenda a finalidade da reserva e como planejar uma meta compatível com sua renda.",
    date: "19 de outubro de 2026",
    content: `
      <p>Uma reserva de emergência é um valor separado para despesas inesperadas, como uma necessidade médica, uma manutenção urgente ou uma interrupção de renda.</p>
      <h2>Defina uma primeira meta</h2>
      <p>Se ainda não possui uma reserva, comece com um objetivo pequeno e alcançável. Criar o hábito pode ser mais importante do que começar com um valor elevado.</p>
      <h2>Calcule as despesas essenciais</h2>
      <p>Some os gastos necessários para manter a casa e as obrigações básicas. Essa conta ajuda a estimar o tamanho de uma reserva adequada à sua situação.</p>
      <h2>Escolha regularidade, não um valor impossível</h2>
      <p>Se o orçamento permitir, separe uma quantia após receber. Revise o valor quando a renda ou as despesas mudarem.</p>
      <h2>Priorize acesso e segurança</h2>
      <p>Para dinheiro de emergência, considere a facilidade de resgate, os riscos, as taxas e as regras do produto financeiro. Entenda as condições antes de aplicar.</p>
      <h2>Use a reserva para emergências reais</h2>
      <p>Compras planejadas e gastos recorrentes devem ter seu próprio planejamento. Se precisar usar a reserva, reorganize as contribuições quando for possível.</p>
      <h2>Conclusão</h2>
      <p>A reserva é construída ao longo do tempo. Adapte a meta à sua realidade e não comprometa despesas essenciais para tentar economizar.</p>
    `
  }

  ,{
    slug: "cartao-de-credito-sem-dividas",
    category: "Crédito consciente",
    title: "Como usar o cartão de crédito sem perder o controle do orçamento",
    description: "Aprenda a acompanhar compras, entender a fatura e evitar que o cartão comprometa o dinheiro do mês.",
    date: "20 de outubro de 2026",
    content: `
      <p>O cartão de crédito pode facilitar pagamentos e concentrar despesas, mas não aumenta a renda disponível. Cada compra feita hoje será uma obrigação futura, por isso é importante acompanhar os gastos desde o momento da compra.</p>
      <h2>Defina um limite pessoal</h2>
      <p>O limite liberado pelo banco não é uma meta de consumo. Defina um valor de compras que caiba no orçamento depois de separar dinheiro para moradia, alimentação, transporte, contas e outras necessidades.</p>
      <h2>Registre as compras assim que acontecerem</h2>
      <p>Use uma anotação, planilha ou aplicativo para registrar valor, data e categoria. Não espere a fatura fechar: acompanhar o total ao longo do mês ajuda a perceber quando é hora de parar de comprar.</p>
      <h2>Entenda a fatura e o vencimento</h2>
      <p>Confira o valor total, compras parceladas, cobranças recorrentes e data de vencimento. Se identificar uma cobrança que não reconhece, contate a instituição emissora pelos canais oficiais.</p>
      <h2>Evite pagar apenas o mínimo</h2>
      <p>O pagamento mínimo pode levar ao financiamento do saldo e à cobrança de juros e encargos. Se não conseguir pagar a fatura integral, entre em contato com o banco, compare as opções disponíveis e confira o custo total antes de aceitar qualquer acordo.</p>
      <h2>Cuidado com parcelamentos acumulados</h2>
      <p>Uma parcela isolada pode parecer pequena, mas várias parcelas de compras diferentes ocupam parte da renda dos próximos meses. Antes de parcelar, some os compromissos existentes e considere despesas que ainda vão vencer.</p>
      <h2>Exemplo simples</h2>
      <p>Se você recebe R$ 2.400 líquidos e já compromete R$ 1.900 com despesas essenciais e compromissos, não deve tratar os R$ 500 restantes como dinheiro totalmente livre. Ainda podem existir transporte extra, medicamentos, manutenção ou outras despesas variáveis.</p>
      <h2>Checklist antes de comprar</h2>
      <ul><li>A compra é necessária ou cabe no planejamento de lazer?</li><li>O valor total cabe no orçamento, não apenas a parcela?</li><li>Existem parcelas anteriores que ainda serão cobradas?</li><li>Será possível pagar a fatura integral no vencimento?</li></ul>
      <h2>Conclusão</h2>
      <p>O uso consciente começa com acompanhamento frequente e decisões baseadas na renda real. Se o cartão estiver dificultando o pagamento de contas essenciais, considere suspender novas compras e reorganizar o orçamento antes de voltar a utilizá-lo.</p>
      <p><strong>Nota:</strong> este material é educativo e não substitui a leitura do contrato nem a orientação individual sobre crédito.</p>
    `
  },
  {
    slug: "metas-financeiras-realistas",
    category: "Planejamento financeiro",
    title: "Como definir metas financeiras realistas e acompanhar seu progresso",
    description: "Transforme objetivos em metas com prazo, valor e etapas que possam ser acompanhadas.",
    date: "20 de outubro de 2026",
    content: `
      <p>Uma meta financeira ajuda a transformar uma intenção genérica — como economizar ou quitar uma dívida — em um plano concreto. Para funcionar, ela precisa considerar renda, despesas, prazo e imprevistos.</p>
      <h2>Escolha um objetivo específico</h2>
      <p>Em vez de escrever apenas “guardar dinheiro”, defina para que o valor será usado, quanto pretende juntar e em qual prazo. Exemplos podem ser criar uma pequena reserva, pagar uma conta pendente ou planejar uma compra necessária.</p>
      <h2>Calcule quanto será necessário</h2>
      <p>Pesquise os custos e faça uma estimativa realista. Se o preço puder mudar, inclua uma margem de segurança e revise o valor quando tiver informações melhores.</p>
      <h2>Divida o objetivo em etapas</h2>
      <p>Uma meta de R$ 600 em seis meses exigiria, em média, separar R$ 100 por mês. Esse cálculo é apenas um exemplo: se o valor não couber depois das despesas essenciais, aumente o prazo ou reduza a meta.</p>
      <h2>Inclua a meta no orçamento</h2>
      <p>Não dependa apenas do dinheiro que talvez sobre no fim do mês. Depois de pagar as necessidades prioritárias, reserve uma quantia compatível com sua realidade e acompanhe se ela está sendo mantida.</p>
      <h2>Revise sem abandonar o plano</h2>
      <p>Perda de renda, despesas médicas e outras mudanças podem exigir ajustes. Redefinir o prazo é melhor do que assumir dívidas caras para cumprir uma meta que deixou de ser viável.</p>
      <h2>Use um acompanhamento simples</h2>
      <p>Registre o valor inicial, cada contribuição, o total acumulado e o que falta. Uma revisão mensal costuma ser suficiente para identificar avanços e corrigir desvios.</p>
      <h2>Conclusão</h2>
      <p>Metas úteis são específicas, flexíveis e compatíveis com as condições reais da pessoa. Comece com um objetivo pequeno, aprenda com o processo e ajuste o plano quando necessário.</p>
    `
  },
  {
    slug: "despesas-fixas-e-variaveis",
    category: "Orçamento pessoal",
    title: "Despesas fixas e variáveis: como separar os gastos do mês",
    description: "Entenda a diferença entre gastos recorrentes e despesas que mudam e use essa divisão no orçamento.",
    date: "20 de outubro de 2026",
    content: `
      <p>Separar despesas por tipo facilita a leitura do orçamento. Essa divisão ajuda a entender quais compromissos se repetem, quais valores mudam e onde existem oportunidades de ajuste.</p>
      <h2>O que são despesas fixas?</h2>
      <p>São gastos que se repetem com frequência e costumam ter valor parecido, como aluguel, mensalidade, internet ou uma prestação. O valor pode mudar com reajustes, então é importante conferir as cobranças e os contratos.</p>
      <h2>O que são despesas variáveis?</h2>
      <p>São gastos cujo valor muda conforme o consumo ou a necessidade, como mercado, combustível, energia, lazer e farmácia. Alguns são essenciais mesmo que variem de valor.</p>
      <h2>Não confunda frequência com importância</h2>
      <p>Uma despesa variável pode ser indispensável, enquanto uma despesa fixa pode ser negociável ou cancelável. A classificação descreve o comportamento do gasto, não se ele deve ou não ser pago.</p>
      <h2>Monte uma tabela simples</h2>
      <p>Registre a categoria, o valor previsto, o valor real e a data de vencimento. Ao final do mês, compare o planejado com o gasto e anote a razão das diferenças mais importantes.</p>
      <h2>Procure ajustes possíveis</h2>
      <p>Confira serviços recorrentes que não utiliza, compare planos quando houver alternativas e planeje compras variáveis. Evite cortes que comprometam alimentação, saúde, segurança ou outras necessidades essenciais.</p>
      <h2>Reserve espaço para gastos ocasionais</h2>
      <p>Material escolar, manutenção da casa, documentos e presentes podem não ocorrer todo mês, mas são previsíveis ao longo do ano. Quando possível, divida uma estimativa anual em valores mensais.</p>
      <h2>Conclusão</h2>
      <p>Um orçamento útil não precisa ser complexo. O mais importante é registrar os gastos com consistência e revisar as estimativas com base no que realmente acontece.</p>
    `
  },
  {
    slug: "compras-parceladas-planejamento",
    category: "Consumo consciente",
    title: "Compras parceladas: o que avaliar antes de assumir uma nova prestação",
    description: "Veja como considerar o custo total, as parcelas existentes e os efeitos no orçamento futuro.",
    date: "20 de outubro de 2026",
    content: `
      <p>Parcelar uma compra distribui o pagamento por vários meses, mas também reduz a renda que ficará disponível no futuro. Antes de aceitar uma condição de pagamento, avalie o valor total e o conjunto de compromissos que já assumiu.</p>
      <h2>Compare o preço à vista e o preço parcelado</h2>
      <p>Confira se há juros, tarifas ou diferença entre os preços. Leia as condições completas e não presuma que uma oferta é mais barata apenas porque a parcela parece pequena.</p>
      <h2>Some as prestações existentes</h2>
      <p>Liste o valor e a quantidade de parcelas que ainda faltam. Some esse compromisso às despesas fixas e às estimativas de gastos essenciais dos próximos meses.</p>
      <h2>Considere mudanças no orçamento</h2>
      <p>Uma prestação que cabe em um mês com renda normal pode se tornar difícil diante de uma despesa inesperada ou de uma redução de ganhos. Evite planejar com base em horas extras ou rendas incertas que ainda não recebeu.</p>
      <h2>Leia as regras de cancelamento e atraso</h2>
      <p>Confira o contrato, as condições de troca ou cancelamento e os encargos previstos para atraso. Guarde comprovantes e documentos da compra.</p>
      <h2>Quando adiar pode ser melhor</h2>
      <p>Se a compra não for urgente e a prestação deixar o orçamento sem margem para necessidades básicas, considere juntar o valor primeiro ou escolher uma alternativa de menor custo.</p>
      <h2>Conclusão</h2>
      <p>O melhor prazo não é necessariamente o maior ou o menor: é aquele cujas condições você entende e cujo pagamento consegue sustentar. Compare o custo total e preserve espaço para as despesas essenciais.</p>
    `
  }


  ,{
    slug: "planejar-despesas-anuais",
    category: "Planejamento financeiro",
    title: "Como planejar despesas anuais sem desequilibrar o orçamento",
    description: "Organize gastos previsíveis ao longo do ano e reduza surpresas no orçamento mensal.",
    date: "20 de outubro de 2026",
    content: `
      <p>Algumas despesas não aparecem todos os meses, mas são previsíveis: impostos, matrícula, material escolar, manutenção, seguros, presentes e viagens planejadas. Quando ficam fora do orçamento, podem levar ao uso de crédito ou ao atraso de outras contas.</p>
      <h2>Faça um calendário financeiro</h2>
      <p>Liste as despesas que costumam ocorrer ao longo do ano e anote o mês provável, o valor estimado e a fonte da estimativa. Use contas anteriores, contratos e informações oficiais quando estiverem disponíveis.</p>
      <h2>Calcule uma média mensal</h2>
      <p>Se uma despesa anual estimada for de R$ 1.200, dividir esse valor por 12 resulta em R$ 100 por mês. Esse cálculo é apenas uma referência: revise a estimativa quando os preços ou as condições mudarem.</p>
      <h2>Priorize o que é essencial</h2>
      <p>Se não for possível separar o valor total, priorize obrigações com vencimento definido e necessidades essenciais. Não comprometa alimentação, moradia, saúde ou contas básicas para cumprir uma meta de poupança.</p>
      <h2>Separe o dinheiro de forma organizada</h2>
      <p>Você pode usar uma planilha, calendário ou categoria específica no seu controle financeiro. Se utilizar uma conta ou produto financeiro separado, confira tarifas, riscos, liquidez e condições antes de decidir.</p>
      <h2>Revise o planejamento</h2>
      <p>Compare os valores estimados com os valores realmente pagos. Registre mudanças e use essa informação para melhorar o próximo planejamento anual.</p>
      <h2>Conclusão</h2>
      <p>Planejar despesas previsíveis transforma grandes pagamentos em metas menores e mais fáceis de acompanhar. A estimativa deve ser realista e compatível com a renda disponível.</p>
      <p><strong>Nota:</strong> este conteúdo é educativo e não representa recomendação financeira individual.</p>
    `
  },
  {
    slug: "identificar-golpes-financeiros",
    category: "Segurança financeira",
    title: "Como reconhecer sinais de golpes financeiros e proteger seus dados",
    description: "Aprenda a identificar promessas suspeitas e confira informações antes de transferir dinheiro.",
    date: "20 de outubro de 2026",
    content: `
      <p>Golpes financeiros podem chegar por mensagens, ligações, redes sociais, anúncios e páginas que imitam empresas conhecidas. A pressa e a promessa de retorno garantido são sinais para interromper a conversa e verificar as informações.</p>
      <h2>Desconfie de promessas de lucro garantido</h2>
      <p>Investimentos e negócios envolvem condições e riscos. Desconfie de promessas de ganhos altos, rápidos e sem risco, especialmente quando exigem pagamento imediato ou recrutamento de outras pessoas.</p>
      <h2>Confira a identidade pelos canais oficiais</h2>
      <p>Não use somente o telefone ou o link recebido na mensagem. Procure o site oficial digitando o endereço por conta própria e confirme se a oferta e os contatos são legítimos.</p>
      <h2>Não compartilhe códigos e senhas</h2>
      <p>Não envie senhas, códigos de autenticação ou dados completos de cartão por mensagens. Bancos e serviços legítimos não precisam que você informe sua senha a um atendente por chat.</p>
      <h2>Antes de fazer uma transferência</h2>
      <ul><li>Confira o nome do destinatário e os dados apresentados pelo banco.</li><li>Leia as condições e pesquise a empresa em fontes oficiais.</li><li>Não tome decisões sob pressão ou ameaça de perder uma oportunidade.</li><li>Peça orientação a alguém de confiança se houver dúvidas.</li></ul>
      <h2>Se você suspeitar de fraude</h2>
      <p>Entre em contato imediatamente com a instituição financeira pelos canais oficiais, guarde comprovantes e mensagens e registre a ocorrência conforme a orientação das autoridades locais. A rapidez pode ajudar a instituição a avaliar as medidas disponíveis, mas não garante recuperação do dinheiro.</p>
      <h2>Conclusão</h2>
      <p>Verificar antes de pagar e proteger os dados de acesso são medidas importantes. Quando uma proposta parece urgente demais ou boa demais para ser verdade, pare e confirme a origem.</p>
    `
  },
  {
    slug: "comparar-contas-e-tarifas",
    category: "Consumo consciente",
    title: "Como comparar tarifas e serviços financeiros antes de contratar",
    description: "Veja quais custos, condições e funcionalidades comparar ao escolher serviços financeiros.",
    date: "20 de outubro de 2026",
    content: `
      <p>Serviços financeiros podem ter tarifas, limites, condições de uso e formas de atendimento diferentes. Comparar apenas uma taxa ou uma vantagem anunciada pode esconder custos importantes.</p>
      <h2>Identifique o que você realmente precisa</h2>
      <p>Liste os serviços que utiliza com frequência, como transferências, saques, pagamentos, cartão ou atendimento presencial. Isso ajuda a comparar opções de acordo com o uso real.</p>
      <h2>Leia a tabela de tarifas</h2>
      <p>Confira quais operações são gratuitas, quais possuem limites e quanto custa ultrapassá-los. Consulte a tabela vigente e as condições oficiais da instituição, pois os valores podem mudar.</p>
      <h2>Compare o custo total</h2>
      <p>Considere mensalidade, tarifas por operação, juros, seguros ou serviços opcionais. Verifique também se existe cobrança automática por um serviço que você não pretende utilizar.</p>
      <h2>Avalie segurança e atendimento</h2>
      <p>Considere os canais oficiais de suporte, os recursos de segurança e a facilidade para contestar operações. Leia as regras de bloqueio, cancelamento e encerramento da conta.</p>
      <h2>Guarde os documentos</h2>
      <p>Salve o contrato, a tabela de tarifas e os comprovantes relevantes. Se uma cobrança parecer incorreta, entre em contato com a instituição e registre o protocolo.</p>
      <h2>Conclusão</h2>
      <p>A opção mais adequada depende das suas necessidades e do uso que fará do serviço. Compare as condições completas em fontes oficiais antes de contratar e revise periodicamente se o serviço continua fazendo sentido.</p>
    `
  }

];

const INFO = {
  sobre: {
    title: "Sobre o Finanças na Prática",
    description: "Conheça nosso objetivo e nossa forma de apresentar informações.",
    content: `
      <p>O Finanças na Prática é um site informativo dedicado à organização financeira pessoal e ao planejamento do orçamento doméstico.</p>
      <h2>Nosso objetivo</h2>
      <p>Nosso objetivo é apresentar conteúdos claros e acessíveis sobre controle de gastos, planejamento, dívidas e hábitos financeiros.</p>
      <h2>Como produzimos o conteúdo</h2>
      <p>Buscamos organizar os assuntos em orientações práticas, exemplos ilustrativos e explicações que ajudem o leitor a compreender melhor o tema.</p>
      <h2>Transparência editorial</h2>\n      <p>Os conteúdos são educativos, usam exemplos ilustrativos e podem ser atualizados para corrigir ou esclarecer informações. Conheça nossa <a href="/editorial">Política Editorial</a> e envie possíveis correções pela página de contato.</p>\n      <h2>Limites das informações</h2>
      <p>Os artigos têm finalidade educativa e geral. Eles não substituem uma análise individual de um profissional qualificado.</p>
    `
  },
  contato: {
    title: "Entre em contato",
    description: "Envie dúvidas, sugestões ou comunique possíveis erros no conteúdo.",
    content: `
      <p>Estamos abertos a comentários e sugestões sobre o conteúdo publicado no Finanças na Prática.</p>
      <h2>E-mail</h2>
      <p>Entre em contato pelo endereço abaixo:</p>
      <p><a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a></p>
      <p>Ao escrever, descreva o assunto da mensagem de forma clara. Não envie senhas, dados bancários completos ou informações pessoais sensíveis.</p>
    `
  },
  privacidade: {
    title: "Política de Privacidade",
    description: "Informações sobre privacidade e uso de dados no site.",
    content: `
      <p>Esta política descreve, de maneira geral, questões de privacidade relacionadas à navegação no Finanças na Prática.</p>
      <h2>Dados de navegação</h2>
      <p>O servidor ou os serviços técnicos utilizados para disponibilizar o site podem processar informações técnicas, como endereço IP, tipo de navegador, páginas solicitadas e horários de acesso, conforme suas configurações e políticas aplicáveis.</p>
      <h2>Cookies e serviços de terceiros</h2>
      <p>Serviços de terceiros, quando integrados ao site, podem utilizar cookies ou tecnologias semelhantes conforme suas próprias políticas. As práticas dependem dos serviços efetivamente ativados.</p>
      <h2>Publicidade</h2>
      <p>Se o Google AdSense ou outro serviço de publicidade for ativado, fornecedores de publicidade poderão usar cookies ou tecnologias semelhantes para veicular, personalizar, limitar a frequência ou medir anúncios, conforme as configurações disponíveis e as políticas desses fornecedores. A presença e o funcionamento desses recursos dependem da integração efetivamente realizada no site.</p>
      <p>Você pode consultar as informações do Google sobre como ele utiliza dados em sites e aplicativos que usam seus serviços de publicidade e revisar as configurações de anúncios da sua Conta Google. Esta política deve ser mantida atualizada conforme as ferramentas realmente utilizadas.</p>
      <h2>Cookies</h2>\n      <p>Leia também nossa <a href="/cookies">Política de Cookies</a>. As informações devem refletir os serviços efetivamente instalados e ser atualizadas quando houver mudanças.</p>\n      <h2>Solicitações relacionadas à privacidade</h2>\n      <p>Para dúvidas ou solicitações sobre informações pessoais relacionadas ao site, escreva para <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>, descrevendo seu pedido sem incluir senhas ou dados financeiros completos.</p>\n      <h2>Links externos</h2>
      <p>Links para outros sites levam a ambientes que possuem suas próprias políticas de privacidade.</p>
      <h2>Contato</h2>
      <p>Para dúvidas relacionadas a esta política, escreva para <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
      <p>Esta página é informativa e deve ser revisada conforme os recursos efetivamente utilizados e as exigências legais aplicáveis.</p>
    `
  },
  termos: {
    title: "Termos de Uso",
    description: "Condições gerais para utilizar o conteúdo do site.",
    content: `
      <h2>Uso do conteúdo</h2>
      <p>O conteúdo do Finanças na Prática é disponibilizado para fins informativos e educativos. O leitor é responsável por avaliar como as informações se aplicam à sua realidade.</p>
      <h2>Informações financeiras</h2>
      <p>Os artigos não constituem recomendação individual de investimento, crédito, contratação de serviços ou decisão financeira.</p>
      <h2>Precisão e atualizações</h2>
      <p>Buscamos manter o conteúdo claro e útil, mas informações, condições comerciais e regras podem mudar. Confira dados importantes em fontes oficiais.</p>
      <h2>Links externos</h2>
      <p>Links externos podem levar a páginas mantidas por terceiros. Não controlamos o conteúdo ou as políticas desses sites.</p>
      <h2>Contato</h2>
      <p>Em caso de dúvidas, escreva para <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
    `
  },
  cookies: {
    title: "Política de Cookies",
    description: "Entenda como cookies e tecnologias semelhantes podem funcionar neste site.",
    content: `
      <p>Esta página explica, de forma geral, o uso de cookies e tecnologias semelhantes no Finanças na Prática. A utilização efetiva depende dos recursos e serviços que estiverem ativados no site.</p>
      <h2>O que são cookies?</h2>
      <p>Cookies são pequenos arquivos que um site pode armazenar no navegador para lembrar preferências, manter funcionalidades ou ajudar a medir o uso de páginas.</p>
      <h2>Como podem ser utilizados</h2>
      <p>Cookies podem ser necessários para recursos técnicos, análise de audiência ou publicidade, quando esses serviços estiverem instalados. Serviços de terceiros podem tratar dados conforme suas próprias políticas.</p>
      <h2>Publicidade de terceiros</h2>
      <p>Se o Google AdSense for integrado, o Google e seus parceiros poderão usar cookies ou tecnologias semelhantes para veicular e medir anúncios, de acordo com as configurações disponíveis e as regras aplicáveis. Esta página deverá ser atualizada se os serviços utilizados mudarem.</p>
      <h2>Como gerenciar cookies</h2>
      <p>Você pode consultar as configurações de privacidade do seu navegador para bloquear ou remover cookies. Algumas funcionalidades podem não funcionar como esperado após o bloqueio.</p>
      <h2>Contato</h2>
      <p>Para dúvidas, escreva para <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
      <p>Última revisão: 20 de outubro de 2026.</p>
    `
  },
  editorial: {
    title: "Política Editorial",
    description: "Conheça os princípios usados para planejar, revisar e corrigir os conteúdos.",
    content: `
      <p>O Finanças na Prática publica material educativo sobre orçamento pessoal, organização financeira e consumo consciente. Nosso propósito é explicar conceitos de maneira acessível, sem prometer resultados financeiros.</p>
      <h2>Como abordamos os temas</h2>
      <p>Procuramos usar linguagem clara, exemplos identificados como ilustrativos e recomendações gerais que possam ser adaptadas a diferentes realidades. Os exemplos numéricos não representam garantia de resultado nem aconselhamento individual.</p>
      <h2>Fontes e verificação</h2>
      <p>Quando um conteúdo depender de regras, taxas, produtos ou informações que mudam com o tempo, o leitor deve conferir as condições atuais em fontes oficiais e nos documentos do fornecedor. Não publicamos uma referência específica sem que ela tenha sido efetivamente consultada.</p>
      <h2>Atualizações e correções</h2>
      <p>Podemos revisar textos para corrigir erros, esclarecer trechos ou atualizar informações. Se encontrar um possível erro, envie o endereço da página e uma descrição para <a href="mailto:${CONTACT_EMAIL}">${CONTACT_EMAIL}</a>.</p>
      <h2>Limites</h2>
      <p>O conteúdo é informativo e não substitui orientação financeira, jurídica, contábil ou de investimento individual. Não garantimos resultados nem recomendamos contratar produtos sem avaliar custos, riscos e condições.</p>
      <p>Última revisão: 20 de outubro de 2026.</p>
    `
  }
};

const CSS = `
:root { color-scheme: light; --bg:#ffffff; --surface:#ffffff; --surface2:#f5f7f6; --text:#202a24; --muted:#68736d; --accent:#177245; --border:#e4e9e5; --soft:#f7f9f7; }
* { box-sizing:border-box; }
html { scroll-behavior:smooth; scroll-padding-top:20px; }
.skip-link { position:absolute; left:12px; top:-60px; z-index:1000; padding:10px 14px; background:#fff; color:var(--text); border:2px solid var(--accent); border-radius:6px; }
.skip-link:focus { top:12px; }
:focus-visible { outline:3px solid #76b88d; outline-offset:3px; }
body { margin:0; background-color:#e8eee9; background-image:linear-gradient(rgba(248,251,249,.64),rgba(248,251,249,.64)),url("https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=85"); background-position:center center; background-size:cover; background-repeat:no-repeat; background-attachment:fixed; color:var(--text); font-family:Arial,Helvetica,sans-serif; line-height:1.75; }
a { color:var(--accent); text-decoration:none; }
a:hover { text-decoration:underline; }
button,input { font:inherit; }
.container { width:min(1120px,calc(100% - 36px)); margin:0 auto; }
header { background:#fff; border-bottom:1px solid var(--border); }
.nav { display:flex; align-items:center; justify-content:space-between; gap:24px; padding:17px 0; }
.brand { color:#17231c; font-weight:800; font-size:1.18rem; line-height:1.3; white-space:nowrap; }
.brand span { color:var(--accent); }
nav { display:flex; align-items:center; gap:22px; flex-wrap:wrap; }
nav a { color:#344139; font-size:.93rem; font-weight:600; }
.hero { padding:58px 0 35px; background:linear-gradient(90deg,rgba(247,250,248,.76) 0%,rgba(255,255,255,.62) 100%),url("https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&w=1920&q=85") center/cover no-repeat; border-bottom:1px solid var(--border); }
.eyebrow { display:inline-block; color:var(--accent); font-size:.78rem; font-weight:800; letter-spacing:.1em; text-transform:uppercase; }
h1,h2,h3 { line-height:1.25; letter-spacing:-.025em; }
h1 { font-size:clamp(2.15rem,4.6vw,3.45rem); max-width:900px; margin:12px 0 16px; }
h2 { margin-top:34px; font-size:1.55rem; }
h3 { font-size:1.12rem; margin-top:22px; }
.hero p,.lead { max-width:760px; color:var(--muted); font-size:1.08rem; }
.section { padding:38px 0 65px; }
.section-heading { margin:0 0 8px; font-size:1.85rem; }
.section-intro { color:var(--muted); margin:0 0 26px; }
.search-label { display:block; font-weight:700; margin:20px 0 6px; }
.article-search { width:100%; max-width:560px; padding:12px 15px; border:1px solid #d6ded8; border-radius:7px; background:#fff; color:var(--text); font:inherit; margin-bottom:8px; }
.article-search:focus { outline:2px solid #a8d5ba; border-color:var(--accent); }
.card[hidden] { display:none!important; }
.cards { display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:20px; }
.card { min-width:0; display:flex; flex-direction:column; padding:22px; background:#fff; border:1px solid var(--border); border-radius:9px; box-shadow:0 3px 14px rgba(20,40,27,.035); transition:transform .18s ease,box-shadow .18s ease; }
.card:hover { transform:translateY(-2px); box-shadow:0 8px 22px rgba(20,40,27,.08); }
.card .category { color:var(--accent); font-size:.76rem; font-weight:800; text-transform:uppercase; letter-spacing:.06em; }
.card h3 { font-size:1.22rem; margin:12px 0 9px; }
.card h3 a { color:var(--text); }
.card p { color:var(--muted); font-size:.95rem; margin:0 0 20px; }
.card .read { margin-top:auto; font-weight:750; }
.article-layout { display:grid; grid-template-columns:minmax(0,760px) minmax(220px,300px); gap:42px; padding:30px 0 70px; align-items:start; }
.article { min-width:0; padding:26px; background:rgba(255,255,255,.94); border:1px solid rgba(228,233,229,.95); border-radius:12px; box-shadow:0 6px 24px rgba(20,40,27,.06); }
.back { display:inline-block; margin:0 0 20px; font-weight:650; color:var(--accent); }
.article-meta { color:var(--muted); font-size:.88rem; margin:12px 0 14px; }
.article h1 { font-size:clamp(2rem,4vw,3.05rem); margin:10px 0 15px; }
.article .lead { font-size:1.1rem; margin-bottom:24px; }
.article-body { color:#303b34; font-size:1.02rem; overflow-wrap:anywhere; }
.article-body h2 { color:#202a24; margin-top:36px; font-size:1.65rem; }
.article-body h3 { color:#202a24; }
.article-body p { margin:17px 0; }
.article-body li { margin:8px 0; }
.article-body a { text-decoration:underline; }
.budget { background:#f7faf8; border:1px solid var(--border); border-radius:9px; padding:12px 20px; margin:24px 0; }
.example-row { display:grid; grid-template-columns:minmax(0,1fr) auto; align-items:start; gap:24px; padding:12px 0; border-bottom:1px solid var(--border); }
.example-row>:first-child { min-width:0; overflow-wrap:anywhere; }
.example-row>:last-child { text-align:right; white-space:nowrap; font-weight:600; }
.example-row:last-child { border-bottom:0; }
.example-row.total { color:var(--accent); font-weight:800; }
.sidebar { align-self:start; padding:22px; background:#fff; border:1px solid var(--border); border-radius:9px; }
.sidebar h3 { margin:0 0 10px; font-size:1.18rem; }
.sidebar a { display:block; color:#344139; padding:11px 0; border-bottom:1px solid var(--border); font-size:.92rem; line-height:1.45; }
.sidebar a:last-child { border-bottom:0; }
.sidebar .sidebar-label { color:var(--muted); font-size:.76rem; text-transform:uppercase; letter-spacing:.08em; font-weight:800; margin:25px 0 6px; }
.info-page { padding:38px 30px 55px; max-width:880px; margin:34px auto 55px; background:rgba(255,255,255,.94); border:1px solid rgba(228,233,229,.95); border-radius:12px; box-shadow:0 6px 24px rgba(20,40,27,.06); }
.info-page h1 { font-size:clamp(2rem,4vw,3rem); }
.info-content { color:#303b34; }
.info-content h2 { color:var(--text); }
.info-content p { margin:17px 0; }
.notice { margin:25px 0; padding:16px 19px; background:#f2f8f4; border-left:3px solid var(--accent); border-radius:4px; color:#4f5d54; }
.ad-placeholder { margin:24px 0; min-height:90px; display:flex; flex-direction:column; align-items:center; justify-content:center; border:1px solid #edf0ed; background:#fafbfa; color:#8a948d; font-size:.72rem; letter-spacing:.08em; }
.ad-placeholder span { display:block; font-size:.65rem; margin-bottom:4px; }
footer { border-top:1px solid var(--border); background:#f7f9f7; padding:32px 0; }
.footer-inner { display:flex; justify-content:space-between; align-items:flex-start; gap:25px; }
.footer-copy { max-width:480px; color:var(--muted); font-size:.88rem; }
.footer-links { display:flex; gap:14px; flex-wrap:wrap; font-size:.88rem; }
footer small { display:block; color:#77827b; margin-top:18px; }
@media(max-width:800px) { .cards { grid-template-columns:repeat(2,minmax(0,1fr)); } .article-layout { grid-template-columns:1fr; gap:25px; } .sidebar { order:2; } }
@media(max-width:560px) { body { background-attachment:scroll; } .container { width:min(100% - 28px,1120px); } .nav { align-items:flex-start; flex-direction:column; gap:12px; } nav { gap:12px 16px; } .hero { padding:42px 0 28px; } .cards { grid-template-columns:1fr; } .card { padding:20px; } .article-layout { padding-top:22px; } .article { padding:20px 16px; } .info-page { width:calc(100% - 28px); padding:28px 18px 38px; margin:22px auto 38px; } .budget { padding:10px 13px; } .example-row { gap:12px; } .footer-inner { flex-direction:column; } }
`;

function escapeHTML(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function baseHTML(title, description, content, canonicalPath = "/", siteOrigin = "https://ferramentasprticas.site-996.workers.dev", schema = null, robots = "index,follow,max-image-preview:large") {
  const canonical = siteOrigin + canonicalPath;
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": SITE_NAME,
    "url": siteOrigin + "/",
    "inLanguage": "pt-BR"
  };
  const structuredData = schema || websiteSchema;
  const safeStructuredData = JSON.stringify(structuredData).replace(/</g, "\\u003c");
  return `<!doctype html>
<html lang="pt-BR">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="description" content="${escapeHTML(description)}">
<meta name="theme-color" content="#177245">
<meta name="author" content="Finanças na Prática">
<meta name="referrer" content="strict-origin-when-cross-origin">
<meta name="robots" content="${robots}">
<meta property="og:image:alt" content="Finanças na Prática — educação financeira para o dia a dia">
<meta name="twitter:card" content="summary">
<meta property="og:locale" content="pt_BR">
<meta property="og:type" content="${schema && schema["@type"] === "Article" ? "article" : "website"}">
<meta property="og:site_name" content="${SITE_NAME}">
<meta property="og:title" content="${escapeHTML(title)} | ${SITE_NAME}">
<meta property="og:description" content="${escapeHTML(description)}">
<meta property="og:url" content="${canonical}">
<link rel="canonical" href="${canonical}">
<script type="application/ld+json">${safeStructuredData}</script>
<title>${escapeHTML(title)} | ${SITE_NAME}</title>
<style>${CSS}</style>
</head>
<body>
<a class="skip-link" href="#main-content">Pular para o conteúdo</a>
<header>
  <div class="container nav">
    <a class="brand" href="/" aria-label="Finanças na Prática - Página inicial">Finanças <span>na Prática</span></a>
    <nav aria-label="Navegação principal">
      <a href="/">Início</a>
      <a href="/#artigos">Artigos</a>
      <a href="/#artigos">Categorias</a>
      <a href="/#artigos">Em alta</a>
      <a href="/sobre">Sobre nós</a>
      <a href="/contato">Contato</a>
    </nav>
  </div>
</header>
${content}
<footer>
  <div class="container footer-inner">
    <div class="footer-copy">
      <a class="brand" href="/">Finanças <span>na Prática</span></a>
      <p>Informação e orientação geral para ajudar você a organizar o orçamento e compreender melhor suas finanças.</p>
      <small>© ${new Date().getFullYear()} Finanças na Prática. Todos os direitos reservados.</small>
    </div>
    <div class="footer-links">
      <a href="/sobre">Sobre</a>
      <a href="/contato">Contato</a>
      <a href="/privacidade">Privacidade</a>
      <a href="/termos">Termos de uso</a>
      <a href="/cookies">Cookies</a>
      <a href="/editorial">Política editorial</a>
    </div>
  </div>
</footer>
</body>
</html>`;
}

function renderHome(siteOrigin) {
  const cards = ARTICLES.map(article => `
    <article class="card">
      <span class="category">${escapeHTML(article.category)}</span>
      <h3><a href="/artigos/${article.slug}">${escapeHTML(article.title)}</a></h3>
      <p>${escapeHTML(article.description)}</p>
      <a class="read" href="/artigos/${article.slug}">Ler artigo →</a>
    </article>
  `).join("");

  const content = `
    <main id="main-content">
      <section class="hero">
        <div class="container">
          <span class="eyebrow">Educação financeira para o dia a dia</span>
          <h1>Cuide melhor do seu dinheiro, um passo de cada vez.</h1>
          <p>Conteúdos práticos para organizar o salário, entender as despesas, planejar objetivos e tomar decisões financeiras com mais informação.</p>
          <div class="notice">Comece pelo básico: conheça sua renda, registre seus gastos e defina prioridades que façam sentido para sua realidade.</div>
        </div>
      </section>
      <section class="section" id="artigos">
        <div class="container">
          <h2 class="section-heading">Artigos para organizar sua vida financeira</h2>
          <p class="section-intro">Guias sobre orçamento, planejamento, economia e educação financeira.</p>
          <label class="search-label" for="article-search">Buscar artigos</label>
          <input id="article-search" class="article-search" type="search" placeholder="Ex.: orçamento, cartão, dívidas..." aria-label="Buscar artigos por título ou assunto">
          <p id="search-status" class="section-intro" aria-live="polite">Exibindo todos os artigos.</p>
          <div class="cards" id="article-cards">${cards}</div>
          <script>
          (() => {
            const input = document.getElementById("article-search");
            const cards = Array.from(document.querySelectorAll("#article-cards .card"));
            const status = document.getElementById("search-status");
            if (!input || !status) return;
            input.addEventListener("input", () => {
              const query = input.value.trim().toLocaleLowerCase("pt-BR");
              let visible = 0;
              cards.forEach(card => {
                const match = card.textContent.toLocaleLowerCase("pt-BR").includes(query);
                card.hidden = !match;
                if (match) visible++;
              });
              status.textContent = query ? visible + (visible === 1 ? " artigo encontrado." : " artigos encontrados.") : "Exibindo todos os artigos.";
            });
          })();
          </script>
        </div>
      </section>
      <section class="section">
        <div class="container">
          <h2 class="section-heading">Um planejamento que cabe na sua realidade</h2>
          <p class="section-intro">Não existe uma única fórmula para todas as famílias. Use as informações como ponto de partida e adapte as decisões à sua renda, às suas despesas e aos seus objetivos.</p>
          <p><a href="/artigos/organizar-salario">Comece aprendendo a organizar seu salário →</a></p>
        </div>
      </section>
    </main>
  `;
  return baseHTML("Organização financeira e orçamento pessoal", "Aprenda a organizar o salário, controlar despesas, planejar o orçamento doméstico e entender conceitos financeiros.", content, "/", siteOrigin);
}

function dateToISO(dateText) {
  const months = { janeiro: "01", fevereiro: "02", março: "03", abril: "04", maio: "05", junho: "06", julho: "07", agosto: "08", setembro: "09", outubro: "10", novembro: "11", dezembro: "12" };
  const match = String(dateText).match(/^(\d{1,2}) de ([a-zç]+) de (\d{4})$/i);
  if (!match || !months[match[2].toLocaleLowerCase("pt-BR")]) return undefined;
  return `${match[3]}-${months[match[2].toLocaleLowerCase("pt-BR")]}-${match[1].padStart(2, "0")}`;
}

function renderArticle(article, siteOrigin) {
  const related = ARTICLES.filter(item => item.slug !== article.slug).slice(0, 5);
  const plainText = article.content.replace(/<[^>]*>/g, " ").replace(/&nbsp;/g, " ");
  const readingMinutes = Math.max(2, Math.ceil(plainText.trim().split(/\s+/).length / 200));
  const content = `
    <main class="container article-layout" id="main-content">
      <article class="article">
        <a class="back" href="/#artigos">← Voltar para artigos</a>
        <div class="article-meta">${escapeHTML(article.category)} &nbsp;·&nbsp; ${readingMinutes} min de leitura &nbsp;·&nbsp; ${escapeHTML(article.date)} &nbsp;·&nbsp; Equipe Finanças na Prática</div>
        <h1>${escapeHTML(article.title)}</h1>
        <p class="lead">${escapeHTML(article.description)}</p>
        <div class="article-body">${article.content}</div>
        <div class="notice">Este conteúdo é informativo e educativo. Avalie sua realidade antes de tomar decisões financeiras.</div>
        <p><a href="/#artigos">← Ver outros artigos</a></p>
      </article>
      <aside class="sidebar">
        <h3>Mais acessados</h3>
        ${related.map(item => `<a href="/artigos/${item.slug}">${escapeHTML(item.title)}</a>`).join("")}
        <div class="sidebar-label">Categorias</div>
        ${[...new Set(ARTICLES.map(item => item.category))].slice(0, 8).map(category => `<a href="/#artigos">${escapeHTML(category)}</a>`).join("")}
      </aside>
    </main>
  `;
  const published = dateToISO(article.date);
  const schema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": article.title,
    "description": article.description,
    "mainEntityOfPage": siteOrigin + "/artigos/" + article.slug,
    "url": siteOrigin + "/artigos/" + article.slug,
    "inLanguage": "pt-BR",
    "author": { "@type": "Organization", "name": SITE_NAME, "url": siteOrigin + "/sobre" },
    "publisher": { "@type": "Organization", "name": SITE_NAME, "url": siteOrigin + "/sobre" },
    ...(published ? { "datePublished": published, "dateModified": published } : {})
  };
  return baseHTML(article.title, article.description, content, "/artigos/" + article.slug, siteOrigin, schema);
}

function renderInfo(page, slug, siteOrigin) {
  const content = `
    <main class="container info-page" id="main-content">
      <a class="back" href="/">← Voltar para o início</a>
      <span class="eyebrow">Finanças na Prática</span>
      <h1>${escapeHTML(page.title)}</h1>
      <p class="lead">${escapeHTML(page.description)}</p>
      <div class="info-content">${page.content}</div>
    </main>
  `;
  return baseHTML(page.title, page.description, content, "/" + slug, siteOrigin);
}

function renderNotFound(siteOrigin) {
  const content = `
    <main class="container info-page" id="main-content">
      <span class="eyebrow">Erro 404</span>
      <h1>Página não encontrada</h1>
      <p class="lead">Não encontramos a página que você tentou acessar. O endereço pode estar incorreto ou o conteúdo pode ter sido movido.</p>
      <p><a href="/">Voltar para a página inicial →</a></p>
    </main>
  `;
  return baseHTML("Página não encontrada", "A página solicitada não foi encontrada.", content, "/404", siteOrigin, null, "noindex,follow");
}

function getPage(pathname, siteOrigin) {
  if (pathname === "/" || pathname === "") {
    return { html: renderHome(siteOrigin), status: 200 };
  }

  if (pathname.startsWith("/artigos/")) {
    const slug = pathname.slice("/artigos/".length).replace(/\/+$/, "");
    const article = ARTICLES.find(item => item.slug === slug);
    return article
      ? { html: renderArticle(article, siteOrigin), status: 200 }
      : { html: renderNotFound(siteOrigin), status: 404 };
  }

  const slug = pathname.replace(/^\/+|\/+$/g, "");
  if (Object.prototype.hasOwnProperty.call(INFO, slug)) {
    return { html: renderInfo(INFO[slug], slug, siteOrigin), status: 200 };
  }

  return { html: renderNotFound(siteOrigin), status: 404 };
}

export default {
  async fetch(request) {
    const url = new URL(request.url);
    if (request.method !== "GET" && request.method !== "HEAD") {
      return new Response("Método não permitido", {
        status: 405,
        headers: { "Allow": "GET, HEAD", "Content-Type": "text/plain; charset=utf-8" }
      });
    }

    const pathname = url.pathname.replace(/\/{2,}/g, "/");
    const siteOrigin = url.origin;
    if (pathname === "/robots.txt") {
      const body = `User-agent: *\nAllow: /\nSitemap: ${siteOrigin}/sitemap.xml\n`;
      return new Response(request.method === "HEAD" ? null : body, { status: 200, headers: { "Content-Type": "text/plain; charset=utf-8", "Cache-Control": "public, max-age=3600", "X-Content-Type-Options": "nosniff" } });
    }
    if (pathname === "/sitemap.xml") {
      const paths = ["/", ...Object.keys(INFO).map(slug => "/" + slug), ...ARTICLES.map(article => "/artigos/" + article.slug)];
      const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${paths.map(path => `<url><loc>${siteOrigin}${path}</loc><lastmod>${new Date().toISOString().slice(0,10)}</lastmod></url>`).join("")}</urlset>`;
      return new Response(request.method === "HEAD" ? null : body, { status: 200, headers: { "Content-Type": "application/xml; charset=utf-8", "Cache-Control": "public, max-age=3600", "X-Content-Type-Options": "nosniff" } });
    }
    const result = getPage(pathname, siteOrigin);
    const headers = {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "public, max-age=300",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin",
      "X-Frame-Options": "SAMEORIGIN",
      "Permissions-Policy": "camera=(), microphone=(), geolocation=()"
    };

    return new Response(request.method === "HEAD" ? null : result.html, {
      status: result.status,
      headers
    });
  }
};