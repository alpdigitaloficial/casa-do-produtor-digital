# Fase 4 — Animação hidráulica contínua

## Objetivo
Adicionar uma única conexão hidráulica metálica que nasce discretamente no Hero e percorre, com a rolagem, um caminho contínuo até a foto real da prensa. Todo o restante do site permanece intacto.

## Implementação

- Criar uma peça hidráulica isolada, com proporções plausíveis, volume metálico, brilho e sombra discretos; sem aparência de ícone, sem tecnologia futurista e sem biblioteca nova.
- Renderizar apenas uma instância da peça em uma camada visual não interativa, sem bloquear textos, botões ou links.
- Definir o início a partir de uma área segura do Hero e o destino a partir da posição real da foto da prensa.
- Interpolar uma trajetória curta em pontos planejados: saída do Hero, travessia lateral pelas categorias, aproximação e encaixe visual na prensa.
- Vincular posição, rotação e escala ao progresso real da rolagem; parada da rolagem congela a peça e rolagem para cima refaz o mesmo caminho ao contrário.
- Após a chegada, manter a mesma peça visualmente presa ao destino enquanto a seção da prensa estiver visível.
- Integrar o cálculo ao listener passivo e ao quadro de animação já existentes, sem criar um segundo sistema de movimento.

## Adaptações

- **Computador:** trajetória mais ampla, usando áreas livres da composição e chegada junto ao equipamento.
- **Celular/tablet:** peça menor, caminho mais curto e lateral, evitando títulos, botões e linhas das categorias.
- **Movimento reduzido:** sem viagem; peça estática e discreta junto à foto da prensa, com todo o conteúdo preservado.

## Validação obrigatória

- Verificar visualmente, em computador e celular, o mesmo elemento no Hero, durante a transição e junto à prensa.
- Medir posições intermediárias para confirmar avanço, pausa e retorno bidirecional conforme o scroll.
- Confirmar que não há desaparecimento/reaparecimento, overflow horizontal, bloqueio de interação ou alteração das áreas aprovadas.
- Conferir movimento reduzido, erros de execução e estabilidade final do site.

## Arquivos previstos

- `src/routes/index.tsx`: peça única, âncoras e cálculo da trajetória.
- `src/styles.css`: aparência metálica, camada, tamanhos e tratamento de movimento reduzido.
- `AGENTS.md`: regra estrutural da trajetória contínua.
- `roadmap.md`: conclusão da Fase 4 após todos os testes.

Não serão iniciadas novas fases, avaliações ou funções adicionais de WhatsApp.