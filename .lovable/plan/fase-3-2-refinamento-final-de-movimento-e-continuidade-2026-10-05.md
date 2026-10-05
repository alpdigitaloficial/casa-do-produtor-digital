# Fase 3.2 — refinamento final de movimento e continuidade

## Objetivo
Aprimorar somente a percepção de profundidade e continuidade durante a rolagem, preservando integralmente o layout, as fotografias, os textos, as categorias, a prensagem, os horários e todos os contatos atuais.

## Alterações previstas
- Refinar o parallax já existente no Hero para que fachada e conteúdo se desloquem poucos pixels em velocidades diferentes, sem alterar crop, escala ou legibilidade.
- Recalibrar a timeline para que a linha avance conforme a posição real da rolagem dentro da seção, ativando cada marcador e seu conteúdo somente quando o progresso os alcançar.
- Simplificar a progressão da timeline no celular, mantendo leitura, áreas tocáveis e desempenho.
- Suavizar as passagens Hero → Categorias e Categorias → Prensagem usando apenas os elementos e fundos existentes, sem novos divisores ou efeitos decorativos.
- Preservar sem mudanças as interações das categorias e os movimentos atuais da prensagem, variedade, ajuda, diferenciais, equipe, localização, mapa, WhatsApp e rodapé.
- Manter exatamente os horários: segunda a sexta 06:50–17:30; sábado 07:00–11:30; domingo fechado.

## Detalhes técnicos
- Manter um único listener passivo de rolagem e um único `requestAnimationFrame` para toda a página.
- Usar somente `transform` e `opacity` para os ajustes ligados à rolagem.
- Separar a timeline das entradas genéricas por interseção, evitando que ela apareça pronta ou dependa apenas de fade.
- Desativar parallax e mostrar toda a timeline imediatamente quando `prefers-reduced-motion` estiver ativo.

## Validação
- Conferir visualmente Hero e timeline em desktop, tablet e celular.
- Confirmar progressão parcial e sequencial da timeline em diferentes posições de rolagem.
- Confirmar ausência de rolagem horizontal, erros visuais e regressões nos links de WhatsApp.
- Validar o modo de movimento reduzido e os horários publicados.
- Encerrar após apresentar esta fase; a Fase 4 não será iniciada automaticamente.
