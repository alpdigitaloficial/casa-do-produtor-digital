# Fase 3.1 — Correção cirúrgica de microinterações e horários

## Objetivo
Tornar o movimento durante a navegação mais perceptível, contínuo e funcional, sem alterar a composição visual, os conteúdos, as fotografias ou os fluxos já aprovados.

## Implementação

### Movimento e continuidade
- Refinar o único ciclo de rolagem existente para coordenar profundidade leve no topo, prensa, composição de produtos, equipe e localização, com deslocamentos menores no celular.
- Manter o enquadramento superior aprovado da fachada e dar velocidades discretamente diferentes à fotografia e ao texto, sem fazê-los desaparecer rapidamente.
- Animar brevemente as linhas técnicas existentes para conectar topo, categorias, prensagem e demais seções, sem criar novos elementos decorativos.
- Escalonar a entrada da prensagem entre texto, fotografia, legenda e marcador técnico, preservando a foto real e o recorte atual.
- Fazer as camadas da composição de produtos responderem em velocidades ligeiramente diferentes, sem mudar tamanhos, recortes ou posições aprovadas.

### Interações
- Tornar a resposta amarela das categorias mais imediata no mouse, teclado e toque, com pequeno movimento do nome e da seta e sem estado móvel preso.
- Diferenciar sutilmente as respostas das três etapas de “Não encontrou o que procura?”, mantendo textos e funcionamento atuais.
- Padronizar os estados normal, foco, hover e pressionado dos CTAs existentes.
- Fazer o WhatsApp flutuante entrar discretamente após o início da rolagem, sem pulsação ou distração contínua.

### História e equipe
- Vincular marcadores e conteúdo da linha do tempo ao avanço real da linha, criando uma leitura progressiva de 2020 até hoje.
- Preservar o fundo branco e as fotos reais da equipe, acrescentando apenas profundidade editorial mínima entre fotografias e texto.

### Localização e horários
- Manter endereço, mapa, “Como chegar” e WhatsApp.
- Substituir o aviso provisório por um bloco editorial leve com os horários exatos: segunda a sexta, 06:50–17:30; sábado, 07:00–11:30; domingo, fechado.
- Garantir leitura clara e compacta no celular, sem tabela pesada.

### Desempenho e acessibilidade
- Continuar usando um único listener passivo e um único quadro de animação, atualizando apenas transformação e opacidade.
- Desativar profundidade e animações decorativas com preferência por movimento reduzido.
- Preservar foco visível, navegação por teclado, carregamento das imagens, links externos e estabilidade do layout.

## Validação
- Conferir visualmente topo, linhas técnicas, categorias, prensagem, produtos, ajuda, diferenciais, história, equipe, localização e WhatsApp.
- Testar computador, tablet e celular, incluindo toque, foco, movimento reduzido, ausência de sobreposição e ausência de rolagem horizontal.
- Confirmar fachada e prensa corretamente enquadradas, fundo branco da equipe, seis categorias, nove contatos no WhatsApp oficial, mapa funcional e horários exatos.
- Encerrar na Fase 3.1 e apresentar o resultado para validação visual, sem iniciar a animação hidráulica principal nem qualquer fase posterior.

## Fora do escopo
- Animação principal da mangueira/conector, objeto atravessando seções, Google Reviews, novas páginas, catálogo, e-commerce, câmera, formulários, banco de dados, login, painel ou novas funcionalidades comerciais.