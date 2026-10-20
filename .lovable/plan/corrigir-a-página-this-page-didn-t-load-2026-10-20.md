# Corrigir a página “This page didn't load”

## Diagnóstico confirmado
- O site publicado retorna HTTP 500; a mesma página no preview local retorna HTTP 200.
- Os registros de 20/10/2026 mostram: `No such module "assets/@tanstack/react-router"`, importado por `assets/server-D00V_-q6.js`.
- A falha acontece ao carregar o site publicado, antes de exibir seu conteúdo. Ainda não foi confirmado qual botão “Salvar” foi usado nem sua ligação com essa falha.
- Nenhum arquivo do site foi alterado nesta investigação.

## Correção proposta
1. Restaurar a configuração de publicação compatível com Lovable, incluindo todas as dependências necessárias no resultado publicado.
2. Preservar o tratamento de erros já existente e conectar a entrada de servidor à configuração correta.
3. Manter o modo de exportação estática usado na hospedagem externa, quando compatível, sem modificar o fluxo de hospedagem externa nesta correção.
4. Não alterar fotos, textos, cores, seções, botões, vídeo ou mangueira animada.

## Validação
- Verificar o resultado da compilação automática e executar os testes existentes pertinentes.
- Conferir que a versão corrigida abre no preview e que as dependências não ficam ausentes do pacote de publicação.
- Repetir a ação de “Salvar”, caso seja um controle acessível no projeto; se for um controle do editor Lovable, solicitar ao usuário que repita a ação após a correção.
- A confirmação no endereço publicado depende de uma nova publicação autorizada pelo usuário; não publicar automaticamente.

## Detalhes técnicos
- Arquivo principal: `vite.config.ts`, atualmente usando plugins manuais de Vite/TanStack em vez do wrapper já instalado `@lovable.dev/vite-tanstack-config`.
- Usar o wrapper de configuração do projeto e `tanstackStart.server.entry: "server"`, mantendo as opções compatíveis necessárias.
- Não adicionar dependências externalizadas em `ssr.external` ou `resolve.external`: o ambiente publicado exige os pacotes incluídos na compilação.
- Registrar a configuração de publicação em `AGENTS.md` após a correção.