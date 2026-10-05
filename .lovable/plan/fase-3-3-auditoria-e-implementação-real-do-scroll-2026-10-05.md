# Fase 3.3 — auditoria e implementação real do scroll

## Diagnóstico confirmado
- O projeto não possui biblioteca de movimento; usa APIs nativas, um listener passivo de rolagem e um `requestAnimationFrame`.
- Hero e timeline já recebem valores calculados pela rolagem, mas o Hero usa a altura da tela como referência. Como o Hero é menor que essa faixa, a foto percorre apenas uma fração dos 8 px configurados e o efeito fica quase invisível.
- A timeline usa progresso real, porém sua faixa atual não oferece uma demonstração objetiva e gradual em todos os tamanhos de tela.
- As entradas por interseção continuam presentes em outras áreas, mas não serão ampliadas nem redesenhadas nesta fase.

## Correção cirúrgica
- Calcular o progresso do Hero pela própria altura visível, fazendo a fachada percorrer uma amplitude efetiva de 14 px no computador e cerca de metade no celular.
- Manter o texto em uma segunda camada, com deslocamento menor e direção distinta, sem alterar crop, escala, textos ou botões.
- Calcular a timeline por dois limites explícitos da viewport: início próximo de 0% quando entra na área de leitura e 100% ao atravessar a seção.
- Fazer linha e marcadores avançarem e retrocederem diretamente com esse valor, sem animação automática após entrada.
- Remover da timeline qualquer dependência restante de animação genérica de entrada, preservando todo o seu desenho.

## Validação objetiva
- Medir e registrar os valores do Hero em 0%, 50% e 100% da passagem pela seção.
- Medir a timeline em descida e subida, comprovando avanço, parada e retrocesso.
- Repetir em computador, tablet, celular e movimento reduzido.
- Confirmar ausência de overflow, erros e alterações nas áreas preservadas.
- Encerrar sem iniciar a Fase 4 ou a animação hidráulica.
