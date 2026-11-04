# TODO — Guia da Feira de Ciências 2026

## 1. Guia visual e navegação principal
- [x] Entregar um site responsivo e acessível para celulares, tablets e computadores, reaproveitando e organizando os arquivos existentes em `Feira de ciencias/guia-feira` como base visual, estrutural e de conteúdo.
- [x] Disponibilizar uma página inicial com apresentação da Feira de Ciências 2026, destaques e acessos rápidos às principais áreas do guia.
- [x] Manter navegação interna consistente entre início, projetos, detalhes, mapa e informações do evento.

## 2. Exploração dos projetos
- [x] Disponibilizar uma página de projetos com listagem visual dos trabalhos participantes.
- [x] Permitir busca por projetos e filtros para facilitar a descoberta pelos critérios disponíveis nos arquivos existentes.
- [x] Disponibilizar uma página de detalhes para cada projeto, com informações completas, imagens e navegação relacionada.

## 3. Orientação no evento
- [x] Disponibilizar um mapa interativo do prédio para orientar visitantes entre espaços, salas e projetos.
- [x] Disponibilizar uma página sobre o evento com informações institucionais, programação ou orientações presentes nos materiais fornecidos.

## 4. Imagens e recursos existentes
- [x] Integrar uma galeria de imagens às páginas do site utilizando os recursos visuais existentes.
- [x] Preservar os recursos interativos compatíveis com o projeto: transições, galeria, busca, filtros, QR Code e histórico de navegação.
- [x] Remover dos cartões e detalhes dos projetos a ação “Votar neste Projeto”, os indicadores de voto e o feedback de voto; manter o QR Code e o compartilhamento de cada projeto.
- [x] Oferecer um modo claro opcional, mantendo o modo escuro como padrão ao abrir o site em desktop e celular; permitir alternar para o modo claro e manter a escolha durante a sessão atual. No modo claro, adaptar superfícies, textos, navegação, linhas, brilhos e partículas preservando a identidade visual e o contraste.
- [x] Nas páginas de projetos abertas por link em celular, evitar que as etiquetas de categoria/ODS, turma, andar/sala e ODS se sobreponham entre si ou ao título e à descrição, preservando a apresentação visual do restante do site.
- [x] No modo claro, garantir contraste legível nas etiquetas de andar/sala e ODS das páginas de projetos, usando cores que combinem com a paleta clara sem alterar o modo escuro.
- [x] Na página inicial, oferecer um botão para abrir um QR Code e link de compartilhamento que sempre levem à página inicial do site; manter os QR Codes e links de projetos existentes apontando para os detalhes de cada projeto.
- [x] Substituir o ícone SVG flutuante do cabeçalho pela imagem de logo fornecida, preservando a proporção da arte e integrando-a visualmente aos temas escuro e claro sem alterar o restante do cabeçalho.

## 5. Entrega WebDev
- [x] Servir o projeto com a configuração Vite existente ou equivalente compatível com o código importado.
- [x] Expor `GET /manus-routes.json` com as rotas reais da SPA, incluindo a tela inicial e as telas por hash de projetos, detalhes, mapa e sobre.
- [x] Validar que o build de produção gera uma saída estática com `index.html`.
- [x] Salvar um checkpoint destas alterações no repositório canônico do projeto.
