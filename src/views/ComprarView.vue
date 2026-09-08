<template>
  <div class="comprar-page">
    <section class="sec">
      <div class="comprar-grid">

        <!-- Left: benefits -->
        <div>
          <span class="section-tag">Para Compradores</span>
          <h2>Compre direto<br/>do produtor</h2>
          <p class="section-intro">
            Na KantosPlace encontra produtos agrícolas frescos, com preços claros
            e origem conhecida. Sem complicações. Sem intermediários desnecessários.
          </p>

          <ul class="benefit-list">
            <li v-for="b in benefits" :key="b">{{ b }}</li>
          </ul>

          <a
            href="mailto:kantos.io001@gmail.com?subject=Interesse em Comprar na KantosPlace"
            class="btn-primary"
          >🛒 Demonstrar Interesse</a>

          <div class="para-quem">
            <p class="pq-label">Para quem é</p>
            <div class="tags">
              <span v-for="t in targets" :key="t" class="tag tag-lime">{{ t }}</span>
            </div>
          </div>
        </div>

        <!-- Right: step cards -->
        <div class="step-cards">
          <div v-for="(step, i) in steps" :key="i" class="step-card">
            <div class="card-num">{{ step.num }}</div>
            <div class="card-icon">{{ step.icon }}</div>
            <div class="card-title">{{ step.title }}</div>
            <div class="card-desc">{{ step.desc }}</div>
          </div>
        </div>

      </div>
    </section>
    <SiteFooter />
  </div>
</template>

<script setup>
import SiteFooter from '@/components/SiteFooter.vue'

const benefits = [
  'Produtos frescos com origem conhecida',
  'Preços claros e transparentes',
  'Compra direta do produtor',
  'Processo simples e seguro',
]

const targets = ['Famílias', 'Pequenos mercados', 'Restaurantes', 'Negócios locais']

const steps = [
  { num: '01', icon: '🔍', title: 'Escolha os produtos', desc: 'Navegue pelos produtores e selecione o que precisa.' },
  { num: '02', icon: '✔️', title: 'Produtor confirma',   desc: 'O pedido só avança se o produtor puder cumprir.' },
  { num: '03', icon: '💳', title: 'Pagamento seguro',    desc: 'Pague com segurança após confirmação do produtor.' },
  { num: '04', icon: '📦', title: 'Receba ou recolha',   desc: 'Em casa ou no local combinado com o produtor.' },
]
</script>

<style scoped>
.comprar-page { background: var(--off-white); min-height: calc(100vh - 68px); }

.comprar-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: center;
}

/* Benefit list */
.benefit-list { list-style: none; margin: 2rem 0; }
.benefit-list li {
  display: flex; align-items: center; gap: 0.8rem;
  padding: 0.72rem 0;
  border-bottom: 1px solid var(--gray);
  font-size: 0.93rem;
}
.benefit-list li:last-child { border: none; }
.benefit-list li::before {
  content: '✓'; background: var(--lime); color: var(--black);
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem; font-weight: 800; flex-shrink: 0;
}

/* Para quem */
.para-quem { margin-top: 2rem; }
.pq-label {
  font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1.5px;
  color: var(--muted); margin-bottom: 0.75rem; font-weight: 700;
}

/* Step cards */
.step-cards { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
.step-card {
  background: var(--white); border-radius: 8px;
  padding: 1.5rem 1.2rem; transition: all 0.3s;
  border: 2px solid var(--gray);
  border-top: 4px solid var(--blue);
}
.step-card:hover {
  border-color: var(--blue); transform: translateY(-4px);
  box-shadow: 0 12px 30px rgba(26,31,168,0.12);
}
.card-num {
  font-family: 'Playfair Display', serif;
  font-size: 2rem; font-weight: 900; color: var(--lime-dark);
  line-height: 1; margin-bottom: 0.6rem;
}
.card-icon { font-size: 1.5rem; margin-bottom: 0.5rem; }
.card-title { font-weight: 800; font-size: 0.92rem; margin-bottom: 0.35rem; color: var(--black); }
.card-desc { font-size: 0.82rem; color: var(--muted); line-height: 1.5; }

@media (max-width: 900px) {
  .comprar-grid { grid-template-columns: 1fr; gap: 3rem; }
}
@media (max-width: 560px) {
  .step-cards { grid-template-columns: 1fr; }
}
</style>
