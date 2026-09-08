<template>
  <div class="vender-page">
    <section class="sec">
      <div class="vender-grid">

        <!-- Left: benefits -->
        <div>
          <span class="section-tag">Para Produtores</span>
          <h2>Venda com mais<br/>visibilidade e organização</h2>
          <p class="section-intro">
            A KantosPlace ajuda produtores agrícolas a vender de forma simples,
            previsível e segura. Sem intermediários. Sem promessas impossíveis.
          </p>

          <ul class="benefit-list">
            <li v-for="b in benefits" :key="b">{{ b }}</li>
          </ul>

          <a
            href="mailto:kantos.io001@gmail.com?subject=Candidatura para Vender na KantosPlace"
            class="btn-lime"
          >🌾 Candidatar-se à Plataforma</a>

          <div class="para-quem">
            <p class="pq-label">Para quem é</p>
            <div class="tags">
              <span v-for="t in targets" :key="t" class="tag">{{ t }}</span>
            </div>
          </div>
        </div>

        <!-- Right: payment flow -->
        <div>
          <div class="payment-flow">
            <h3>💰 Como funciona o pagamento?</h3>
            <div
              v-for="(step, i) in flowSteps"
              :key="i"
              class="flow-step"
            >
              <div class="flow-num">{{ i + 1 }}</div>
              <div class="flow-text">{{ step }}</div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer class="dark-footer">
      <p>© 2025 KANTOS · KantosPlace · Angola</p>
    </footer>
  </div>
</template>

<script setup>
const benefits = [
  'Cadastre os seus produtos e defina preços',
  'Defina os seus dias e horários disponíveis',
  'Aceite apenas pedidos que consegue cumprir',
  'Receba pagamentos de forma segura',
  'Controlo total da sua disponibilidade',
]

const targets = ['Agricultores', 'Pequenos produtores', 'Cooperativas']

const flowSteps = [
  'O cliente faz o pedido',
  'Você aceita o pedido',
  'O cliente paga na plataforma',
  'O valor fica seguro até à entrega',
  '✅ Entrega confirmada → Pagamento recebido',
]
</script>

<style scoped>
.vender-page {
  background: var(--blue);
  color: var(--white);
  position: relative;
  overflow: hidden;
  min-height: calc(100vh - 68px);
}
.vender-page::before {
  content: '';
  position: absolute; top: 0; right: 0;
  width: 6px; height: 100%;
  background: var(--lime);
}
.vender-page::after {
  content: '';
  position: absolute; bottom: -120px; left: -120px;
  width: 340px; height: 340px;
  border: 2px solid rgba(204,238,0,0.12);
  border-radius: 50%;
}

/* Override global tag for dark bg */
.vender-page .section-tag {
  background: rgba(204,238,0,0.2);
  color: var(--lime);
}
.vender-page h2 { color: var(--white); }
.vender-page .section-intro { color: rgba(255,255,255,0.68); }

.vender-grid {
  display: grid; grid-template-columns: 1fr 1fr;
  gap: 5rem; align-items: start; position: relative; z-index: 1;
}

/* Benefit list */
.benefit-list { list-style: none; margin-bottom: 2.5rem; }
.benefit-list li {
  display: flex; align-items: flex-start; gap: 0.85rem;
  padding: 0.85rem 0; border-bottom: 1px solid rgba(255,255,255,0.07);
  font-size: 0.93rem; color: rgba(255,255,255,0.87);
}
.benefit-list li:last-child { border: none; }
.benefit-list li::before {
  content: '✓';
  background: var(--lime); color: var(--black);
  width: 22px; height: 22px; border-radius: 50%;
  display: flex; align-items: center; justify-content: center;
  font-size: 0.72rem; font-weight: 800; flex-shrink: 0; margin-top: 1px;
}

/* Para quem */
.para-quem { margin-top: 2rem; }
.pq-label {
  font-size: 0.72rem; text-transform: uppercase; letter-spacing: 1.5px;
  color: rgba(255,255,255,0.4); margin-bottom: 0.75rem; font-weight: 700;
}

/* Payment flow */
.payment-flow {
  background: rgba(0,0,0,0.25);
  border: 1px solid rgba(255,255,255,0.1);
  border-left: 4px solid var(--lime);
  border-radius: 8px; padding: 2.2rem;
}
.payment-flow h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.15rem; color: var(--lime); margin-bottom: 1.5rem;
}
.flow-step {
  display: flex; align-items: center; gap: 1rem;
  padding: 0.75rem 0;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}
.flow-step:last-child { border: none; }
.flow-num {
  width: 32px; height: 32px; background: var(--lime); color: var(--black);
  border-radius: 50%; display: flex; align-items: center; justify-content: center;
  font-weight: 800; font-size: 0.8rem; flex-shrink: 0;
}
.flow-text { font-size: 0.88rem; color: rgba(255,255,255,0.82); }

.dark-footer {
  background: rgba(0,0,0,0.35);
  color: rgba(255,255,255,0.35);
  text-align: center;
  padding: 1.8rem 5%;
  font-size: 0.8rem;
}

@media (max-width: 900px) {
  .vender-grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
