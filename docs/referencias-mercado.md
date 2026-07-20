# Referências de Mercado — Redesign Urolaser

Fonte: busca de sites de clínicas de urologia/saúde premium (BR + global) e guias de design de saúde.
Coletado em 2026-07 via web_search/web_extract (Composio/NotebookLM indisponível na conta).

## 1. Paleta de cor (psicologia em saúde)
- Azul = 85% dos logos de saúde (confiança, tranquilidade, segurança). Mas é CLICHÊ.
- Verde = 22% (saúde/cura/natureza) — diferencia de "clínica genérica azul".
- **Estudo de Sarah Babin**: pacientes preferem cores frias (49%), quentes (29%), muted (14%), bright (7%). Abordagem "temperada" (neutros + pop de cor) agrada.
- Tendência: 42% dos sites usam tom neutro (branco/cinza/bege) + 1 acento de cor.
- **EVITAR**: gradiente roxo→azul (o que o site atual tem — tell de IA), e azul-turquesa genérico de clínica.

### Paletas referência reais
- UT Southwestern (hospital top EUA): azul institucional #004c97 / #00355d + cinza #636466 + acentos (verde #00ab4e, laranja #f26531, vermelho #e52334). Tipografia: Helvetica Neue (titular) + Minion Pro (serif p/ sofisticação) + Myriad Pro Condensed.
- Nourish: "dark blue, light teal" + "greenish-blues, light purple".
- Alma (saúde mental): dark green + bege + light green.
- Hims: preto/branco + acentos quentes (marrom, verde, roxo) — abordagem "muted premium".
- Instagram (@progress): "organic palette (Green, Dark Ivory, Grey) + Poppins" — "inviting, patient-centered".

## 2. Tipografia (saúde confiável, não fria)
- **Serif + Sans** dá sofisticação sem frieza (Minion Pro p/ subheads/body, Helvetica p/ titulos).
- Poppins = "clean, accessible, inviting" (usado em clínica orgânica).
- **NÃO usar**: Inter/Roboto (sem personalidade — tell de IA). O site atual usa (via Tailwind default) fontes genéricas.
- Jerarquia: titulos Bold left-justified sentence-case; corpo Regular ≥10pt (web ≥16px); tracking aberto só em caps curtos.
- Fluido `clamp()` p/ titulos de marketing; `rem` fixo p/ corpo.

## 3. Estrutura de seções (jornada do paciente)
Segundo Nopio (15 anos design clínico), 7 features essenciais:
1. **Contato visível em TODA página** (telefone/endereço/hores no header+footer) — paciente no celular quer ligar já.
2. **Agendamento online** (60%+ preferem) — CTA "Agendar" proeminente.
3. **Bios dos médicos** com foto + credenciais + personalidade (constrói confiança ANTES da visita).
4. **Páginas de serviço** (cada serviço = sua página, não só lista).
5. **Recursos do paciente** (formulários, preparo, FAQs).
6. **Mobile-first** (60%+ das buscas de saúde são no celular).
7. **HTTPS + conformidade** (LGPD no BR).

### Jornada em 3 estágios
- **Discovery**: "você oferece o que preciso?" + "você é perto?" (localização VCA-BA) + sinais de credibilidade.
- **Evaluation**: bios, especialidades, provas sociais, diferenciais.
- **Action**: agendar/ligar — 1 CTA óbvio, não 5 competindo.

## 4. Sinais de confiança (trust elements)
- Fotos reais da equipe (já temos 7).
- CRM/RQE visíveis (já temos).
- Depoimentos/avaliações (94% dos pacientes influenciados por reviews online).
- Certificações (SBU filiado?, acreditação).
- Localização clara (Vitória da Conquista-BA).

## 5. O que NÃO fazer (tells de "site de IA")
- Gradiente roxo→azul em titulos.
- Glassmorphism em todos os cards.
- Eyebrow uppercase em TODA seção.
- Grids idênticos repetitivos (especialidades = tratamentos = equipe iguais).
- Hover zoom em fotos.
- Numbered markers (01/02/03).
- Paleta roxo/violeta dominante.
