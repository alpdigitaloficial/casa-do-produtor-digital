# Fase 3 — Microinterações e experiência de navegação

## Objetivo
Adicionar uma camada discreta de resposta e profundidade ao site atual, sem alterar a composição visual aprovada, conteúdos, fotografias, navegação ou funcionamento comercial.

## Implementação

### Entrada e continuidade do topo
- Criar uma entrada inicial curta e sequencial para fachada, texto, título, botões e informações auxiliares.
- Aplicar profundidade mínima à fachada e saída suave do conteúdo no começo da rolagem.
- Manter exatamente o enquadramento atual da fachada, o título, os CTAs e a ligação visual existente com as categorias.

### Interações dos elementos existentes
- Refinar categorias com resposta imediata em mouse, teclado e toque, preservando o destaque amarelo, estrutura e links atuais do WhatsApp.
- Padronizar estados normal, hover, foco e pressionado dos botões e links, com deslocamento mínimo de ícones e contraste claro.
- Adicionar resposta discreta ao WhatsApp flutuante, sem pulsação contínua e sem cobrir conteúdo no celular.
- Aplicar respostas sutis às três etapas de “Não encontrou o que procura?”, sem alterar textos ou funcionamento.

### Profundidade fotográfica
- Usar deslocamentos leves e independentes nas camadas da composição de produtos, sem mudar fotos, recortes ou posições aprovadas.
- Dar entrada e profundidade discretas à foto real da prensa, sem implementar a animação futura da peça hidráulica.
- Aplicar profundidade mínima às fotografias da equipe e da localização, preservando o fundo branco da equipe e sem filtros nos rostos.

### Progressão durante a rolagem
- Refinar as entradas existentes para uma sequência curta e legível em diferenciais e demais conteúdos.
- Fazer a linha do tempo avançar quando entrar em cena, coordenando linha, marcadores, anos e textos.
- Aproveitar somente algumas linhas e recortes já existentes para suavizar transições entre seções, sem adicionar divisores repetitivos.

### Técnica, desempenho e acessibilidade
- Centralizar a leitura da rolagem em um único ciclo leve, atualizando apenas propriedades de transformação e opacidade.
- Usar observação de visibilidade para entradas e sequências, sem atrasar cliques ou links externos.
- Desativar profundidade e reduzir movimentos quando o visitante preferir menos animação.
- Preservar foco visível, navegação por teclado, carregamento das imagens e estabilidade do layout.

## Validação
- Conferir visualmente a entrada inicial, rolagem, categorias, botões, fotos, linha do tempo e WhatsApp.
- Testar computador, tablet e celular para garantir leitura, toque, ausência de sobreposição e ausência de rolagem horizontal.
- Confirmar que os nove contatos continuam usando o WhatsApp oficial, o mapa permanece funcional e não há erros.
- Verificar o modo de movimento reduzido.
- Encerrar na Fase 3 e apresentar o resultado para validação visual, sem iniciar a animação principal nem qualquer fase posterior.

## Fora do escopo
- Animação da peça hidráulica entre o topo e a prensagem, objeto 3D, novas páginas, produtos, categorias, formulários, avaliações, câmera, catálogo, e-commerce, login, banco de dados ou mudanças estruturais/visuais.
