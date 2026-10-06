# Correção cirúrgica — elemento hidráulico da Fase 4

## Objetivo
Substituir somente o desenho atual por uma mangueira hidráulica preta de alta pressão com terminal metálico prensado, claramente reconhecível em tamanho reduzido.

## Alterações
- Redesenhar o único elemento em SVG, com mangueira mais longa e espessa, leve curvatura, textura de borracha, luva prensada com ranhuras, porca sextavada e terminal orientado para a prensa.
- Reforçar volume, reflexos metálicos e sombra suave usando os tokens visuais existentes.
- Aumentar moderadamente a presença visual da peça sem cobrir título, botões ou fachada.
- Manter sem alterações a trajetória, seus pontos, o listener de scroll, o quadro de animação, a progressão bidirecional e o comportamento de movimento reduzido.

## Validação
- Conferir no Hero e na chegada à prensa em computador e celular.
- Confirmar que há uma única peça, a mangueira preta e o terminal prensado são legíveis, e a animação continua vinculada ao scroll.
- Confirmar ausência de regressões visuais, overflow e erros.

## Arquivos
- `src/routes/index.tsx`: somente o SVG do elemento.
- `src/styles.css`: somente a aparência e dimensões do elemento.
- `roadmap.md`: registrar a correção visual concluída após a validação.

Nenhuma nova fase será iniciada.
