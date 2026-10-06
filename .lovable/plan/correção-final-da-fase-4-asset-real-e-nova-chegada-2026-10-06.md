# Correção final da Fase 4 — asset real e nova chegada

## Objetivo
Substituir o desenho atual por um único recorte realista de mangueira hidráulica preta com terminal metálico prensado, usando as fotos fornecidas como referência, e recalibrar apenas o início e o destino da trajetória.

## Implementação
- Criar um asset transparente baseado principalmente na segunda foto e apoiado pela textura da primeira, sem fundo branco e sem aparência de ilustração.
- Trocar o SVG pelo novo asset único, preservando a mesma camada não interativa.
- Reposicionar o início para uma área mais central e segura do Hero.
- Recalibrar o destino para o espaço acima de “Serviço especializado / Prensagem de mangueiras hidráulicas”, sem entrar na foto da prensa.
- Manter o listener passivo, o único quadro de animação, a interpolação, a pausa, o retorno e o comportamento de movimento reduzido.

## Validação
- Conferir reconhecimento da mangueira e do terminal no Hero.
- Conferir chegada acima do título, sem cobrir texto e sem mangueira adicional na máquina.
- Testar descida, pausa, retorno, computador, celular, movimento reduzido, overflow e erros.

## Arquivos previstos
- Novo asset transparente em `src/assets`.
- `src/routes/index.tsx`: troca do elemento e recalibração dos pontos.
- `src/styles.css`: apresentação do asset.
- `roadmap.md`: conclusão após os testes.

Nenhuma nova fase será iniciada.
