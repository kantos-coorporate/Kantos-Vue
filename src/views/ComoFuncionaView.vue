<template>
  <div class="como-page">
    <section class="sec">

      <div class="como-header">
        <span class="section-tag">Processo</span>
        <h2>Como Funciona</h2>
        <p class="section-intro">
          Simples para produtores. Simples para compradores. Transparente para todos.
        </p>
      </div>

      <!-- Tabs -->
      <div class="tabs">
        <button
          v-for="tab in tabs"
          :key="tab.key"
          :class="['tab-btn', { active: activeTab === tab.key }]"
          @click="activeTab = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- Steps -->
      <Transition name="tab-fade" mode="out-in">
        <div :key="activeTab" class="steps-grid">
          <div
            v-for="(step, i) in currentSteps"
            :key="i"
            class="step-card"
          >
            <div class="step-num">{{ step.num }}</div>
            <div class="step-icon">{{ step.icon }}</div>
            <div class="step-title">{{ step.title }}</div>
            <div class="step-desc">{{ step.desc }}</div>
          </div>
        </div>
      </Transition>

      <p class="como-footer">Simples. Seguro. Transparente.</p>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import SiteFooter from '@/components/SiteFooter.vue'

const activeTab = ref('produtores')

const tabs = [
  { key: 'produtores', label: '🌾 Para Produtores' },
  { key: 'compradores', label: '🛒 Para Compradores' },
]

const produtoresSteps = [
  { num: '01', icon: '📝', title: 'Cadastro',         desc: 'Crie a sua conta e cadastre os seus produtos, preços e dias disponíveis.' },
  { num: '02', icon: '🔔', title: 'Receba pedidos',   desc: 'Quando um cliente fizer um pedido, você recebe uma notificação imediata.' },
  { num: '03', icon: '✅', title: 'Aceite ou rejeite', desc: 'Você só aceita pedidos que consegue cumprir. Controlo total nas suas mãos.' },
  { num: '04', icon: '💳', title: 'Pagamento seguro', desc: 'Após aceitar, o cliente paga pela plataforma. O valor fica guardado.' },
  { num: '05', icon: '🚚', title: 'Entrega ou recolha', desc: 'Entregue o produto ou aguarde a recolha no dia combinado.' },
]

const compradoresSteps = [
  { num: '01', icon: '🔍', title: 'Escolha os produtos',   desc: 'Navegue, selecione o produtor e adicione ao carrinho.' },
  { num: '02', icon: '📤', title: 'Envie o pedido',        desc: 'O produtor recebe e confirma se pode atender ao seu pedido.' },
  { num: '03', icon: '🔒', title: 'Efetue o pagamento',    desc: 'Após o aceite, pague de forma segura pela plataforma.' },
  { num: '04', icon: '📦', title: 'Receba ou recolha',     desc: 'Receba em casa ou recolha no local combinado com o produtor.' },
]

const currentSteps = computed(() =>
  activeTab.value === 'produtores' ? produtoresSteps : compradoresSteps
)
</script>

<style scoped>
.como-page { background: var(--off-white); }

.como-header {
  text-align: center;
  max-width: 600px;
  margin: 0 auto 3.5rem;
}
.como-header .section-intro { margin: 0 auto; }

/* Tabs */
.tabs {
  display: flex; justify-content: center; gap: 0;
  margin-bottom: 3rem;
  border: 2px solid var(--blue);
  border-radius: 6px; width: fit-content;
  margin-left: auto; margin-right: auto;
  overflow: hidden;
}
.tab-btn {
  padding: 0.68rem 2rem; border: none;
  background: transparent; color: var(--blue);
  font-family: 'DM Sans', sans-serif; font-weight: 700;
  font-size: 0.9rem; cursor: pointer; transition: all 0.22s;
}
.tab-btn.active { background: var(--blue); color: var(--white); }
.tab-btn:not(.active):hover { background: rgba(26,31,168,0.06); }
.tab-btn:first-child { border-right: 2px solid var(--blue); }

/* Steps grid */
.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(185px, 1fr));
  gap: 1.2rem;
  max-width: 900px;
  margin: 0 auto;
}
.step-card {
  background: var(--white); border-radius: 8px;
  padding: 1.8rem 1.4rem; transition: all 0.3s;
  border: 2px solid transparent;
  border-top: 4px solid var(--lime);
}
.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 12px 30px rgba(26,31,168,0.12);
  border-color: var(--blue);
  border-top-color: var(--lime);
}
.step-num {
  font-family: 'Playfair Display', serif;
  font-size: 2.6rem; font-weight: 900;
  color: var(--blue); line-height: 1; margin-bottom: 0.8rem;
  opacity: 0.18;
}
.step-icon { font-size: 1.6rem; margin-bottom: 0.6rem; }
.step-title { font-weight: 800; font-size: 0.95rem; color: var(--black); margin-bottom: 0.4rem; }
.step-desc { font-size: 0.83rem; color: var(--muted); line-height: 1.55; }

.como-footer {
  text-align: center; margin-top: 3rem;
  font-family: 'Playfair Display', serif;
  font-size: 1.2rem; color: var(--blue); font-style: italic;
}

/* Tab transition */
.tab-fade-enter-active, .tab-fade-leave-active { transition: all 0.25s ease; }
.tab-fade-enter-from { opacity: 0; transform: translateY(10px); }
.tab-fade-leave-to { opacity: 0; transform: translateY(-6px); }

@media (max-width: 560px) {
  .steps-grid { grid-template-columns: 1fr; }
}
</style>
