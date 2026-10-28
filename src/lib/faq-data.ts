// Shared unchanged FAQ data for metadata and the code-split page.
const FAQ_ITEMS: { question: string; answer: string; visible?: boolean; directions?: boolean }[] = [
  { question: "Qual o horário de atendimento?", answer: "Segunda a sexta, das 06:50 às 17:30. Sábado, das 07:00 às 11:30. Domingo, fechado." },
  { question: "Onde fica a loja?", answer: "Avenida Dorvalino dos Santos, 1760 — Centro, Sidrolândia/MS.", directions: true },
  { question: "Não sei o nome da peça. Como peço?", answer: "Sem problema. Tire uma foto da peça, do conector, da ferramenta ou do item e envie pelo WhatsApp. Nossa equipe ajuda a identificar e verifica a disponibilidade." },
  { question: "Vocês fazem prensagem de mangueira hidráulica?", answer: "Sim. A Casa do Produtor faz prensagem de mangueiras de alta pressão, com praticidade e agilidade. Chame no WhatsApp, conte o que você precisa e, se puder, envie uma foto da mangueira e do conector." },
  { question: "Quais produtos vocês têm?", answer: "Parafusos, ferramentas e acessórios, linha agrícola, roçadeiras e itens para roçadeiras, tintas e produtos de limpeza doméstica, agrícola e automotiva. Na seção 'Variedade que acompanha o seu trabalho' você vê fotos de cada categoria." },
  { question: "Vocês atendem empresas e propriedades rurais?", answer: "Sim. A loja atende a cidade e o campo: quem busca solução para casa, oficina, empresa ou propriedade rural." },
  { question: "Como sei se o produto está disponível?", answer: "Chame no WhatsApp com o nome do produto ou uma foto. Nossa equipe confirma a disponibilidade e as opções que temos." },
  { question: "Vale levar a peça antiga ou mandar uma foto?", answer: "Vale. Se puder, leve a peça antiga ou envie uma foto com a medida. Isso ajuda a escolher o item certo, principalmente em parafusos, conectores e peças de reposição." },
  { question: "Vocês entregam?", answer: "[a preencher]", visible: false },
  { question: "Quais as formas de pagamento?", answer: "[a preencher]", visible: false },
];

export const FAQ_VISIBLE = FAQ_ITEMS.filter((item) => item.visible !== false);

export const FAQ_WHATSAPP_MESSAGE = "Olá! Vim pelo site da Casa do Produtor e tenho uma dúvida.";

export const FAQ_JSON_LD = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQ_VISIBLE.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: { "@type": "Answer", text: item.answer },
  })),
};

