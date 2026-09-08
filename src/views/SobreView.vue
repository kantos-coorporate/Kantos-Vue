<template>
  <div class="sobre-page">
    <section class="sec">
      <div class="sobre-grid">

        <!-- Left -->
        <div>
          <span class="section-tag">Quem Somos</span>
          <h2>Aproximamos quem<br/>produz de quem consome</h2>
          <p class="section-intro">
            A KANTOS é uma startup angolana que nasceu com uma visão simples.
            Acreditamos que o setor agrícola tem enorme potencial — e queremos
            desbloqueá-lo com tecnologia.
          </p>

          <div class="pilares">
            <div v-for="p in pilares" :key="p.title" class="pilar">
              <div class="pilar-title">{{ p.title }}</div>
              <div class="pilar-desc">{{ p.desc }}</div>
            </div>
          </div>
        </div>

        <!-- Right -->
        <div class="sobre-right">
          <div class="missao-card">
            <h3>A Nossa Missão</h3>
            <p>Digitalizar e fortalecer o setor agrícola, criando oportunidades
            reais para produtores e facilitando o acesso a alimentos frescos e
            de qualidade para todos.</p>
          </div>
          <div class="visao-card">
            <h3>A Nossa Visão</h3>
            <p>Ser referência em inovação agrícola em Angola e expandir para
            outros países africanos, promovendo sustentabilidade, inclusão e
            crescimento económico.</p>
          </div>
          <div class="quote-card">
            <p class="quote-text">"Quando a tecnologia encontra a agricultura, nasce desenvolvimento."</p>
            <p class="quote-author">— KANTOS</p>
          </div>
        </div>

      </div>
    </section>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteFooter from '@/components/SiteFooter.vue'

const pilares = [
  { title: '🌱 Visibilidade', desc: 'Dar mais visibilidade e alcance aos produtores locais.' },
  { title: '⚖️ Justiça',     desc: 'Criar relações comerciais mais justas e diretas.' },
  { title: '🍽️ Segurança',   desc: 'Promover segurança alimentar e acesso a alimentos frescos.' },
  { title: '🏙️ Ligação',     desc: 'Aproximar o campo da cidade, criando valor para todos.' },
]
</script>

<style scoped>
.sobre-page { background: var(--white); min-height: calc(100vh - 68px); }

.sobre-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }

/* Pilares */
.pilares { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin-top: 2.5rem; }
.pilar {
  padding: 1.4rem; border-radius: 8px;
  background: var(--off-white); border-top: 4px solid var(--lime);
  transition: transform 0.3s;
}
.pilar:hover { transform: translateY(-3px); }
.pilar-title { font-weight: 800; color: var(--black); margin-bottom: 0.35rem; font-size: 0.92rem; }
.pilar-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.55; }

/* Cards */
.missao-card {
  background: var(--blue); color: var(--white);
  border-radius: 8px; padding: 2.2rem; margin-bottom: 1.3rem;
  border-bottom: 5px solid var(--lime);
}
.missao-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem; margin-bottom: 0.7rem; color: var(--lime);
}
.missao-card p { font-size: 0.92rem; line-height: 1.65; opacity: 0.88; }

.visao-card {
  background: var(--off-white); border-radius: 8px;
  padding: 1.8rem; border: 2px solid var(--gray);
  border-left: 5px solid var(--blue); margin-bottom: 1.3rem;
}
.visao-card h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.1rem; margin-bottom: 0.55rem; color: var(--blue);
}
.visao-card p { font-size: 0.88rem; line-height: 1.6; color: var(--muted); }

.quote-card {
  padding: 1.5rem; background: var(--black);
  border-radius: 8px; border-left: 5px solid var(--lime);
}
.quote-text {
  font-family: 'Playfair Display', serif;
  font-size: 1rem; color: var(--white);
  font-style: italic; line-height: 1.65; margin-bottom: 0.5rem;
  display: block;
}
.quote-author { font-size: 0.78rem; color: var(--lime); font-weight: 700; letter-spacing: 1px; }

@media (max-width: 900px) {
  .sobre-grid { grid-template-columns: 1fr; gap: 3rem; }
  .pilares { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 560px) {
  .pilares { grid-template-columns: 1fr; }
}
</style>
