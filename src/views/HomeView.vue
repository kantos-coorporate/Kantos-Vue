<template>
  <div class="home">

    <!-- ── HERO ── -->
    <section class="hero">
      <div class="hero-left">
        <span class="hero-badge anim-1">🌿 Angola · Agricultura Digital</span>
        <h1 class="anim-2">Do produtor<br/><em>direto</em> para si.</h1>
        <p class="hero-sub anim-3">
          A KantosPlace conecta produtores agrícolas a consumidores e negócios
          locais, promovendo comércio justo, transparente e acessível.
        </p>
        <div class="hero-btns anim-4">
          <RouterLink to="/comprar" class="btn-primary">🛒 Quero Comprar</RouterLink>
          <RouterLink to="/vender" class="btn-secondary">🌾 Quero Vender</RouterLink>
        </div>
      </div>

      <div class="hero-right anim-5">
        <!-- SVG Farm Illustration -->
        
        <!-- 
        
        <svg viewBox="0 0 400 370" fill="none" xmlns="http://www.w3.org/2000/svg" class="hero-svg">
          <ellipse cx="200" cy="310" rx="148" ry="28" fill="rgba(204,238,0,0.15)"/>
          <path d="M75 295 Q200 272 325 295" stroke="rgba(204,238,0,0.3)" stroke-width="1.5"/>
          <path d="M82 307 Q200 284 318 307" stroke="rgba(204,238,0,0.3)" stroke-width="1.5"/>
          <rect x="142" y="198" width="116" height="97" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.22)" stroke-width="1.5"/>
          <polygon points="130,198 200,150 270,198" fill="rgba(204,238,0,0.35)" stroke="rgba(204,238,0,0.6)" stroke-width="1.5"/>
          <rect x="176" y="240" width="48" height="55" rx="3" fill="rgba(204,238,0,0.15)"/>
          <rect x="150" y="214" width="26" height="20" rx="3" fill="rgba(255,255,255,0.15)"/>
          <rect x="224" y="214" width="26" height="20" rx="3" fill="rgba(255,255,255,0.15)"/>
          <circle cx="108" cy="258" r="17" fill="rgba(204,238,0,0.4)"/>
          <rect x="106" y="258" width="4" height="27" rx="2" fill="rgba(204,238,0,0.5)"/>
          <circle cx="292" cy="252" r="19" fill="rgba(204,238,0,0.4)"/>
          <rect x="290" y="252" width="4" height="33" rx="2" fill="rgba(204,238,0,0.5)"/>
          <circle cx="74" cy="272" r="11" fill="rgba(204,238,0,0.25)"/>
          <circle cx="326" cy="267" r="13" fill="rgba(204,238,0,0.25)"/>
          <circle cx="315" cy="85" r="30" fill="rgba(204,238,0,0.2)" stroke="rgba(204,238,0,0.45)" stroke-width="1.5"/>
          <circle cx="315" cy="85" r="18" fill="rgba(204,238,0,0.5)"/>
          <line x1="315" y1="48" x2="315" y2="42" stroke="rgba(204,238,0,0.6)" stroke-width="2" stroke-linecap="round"/>
          <line x1="342" y1="58" x2="347" y2="53" stroke="rgba(204,238,0,0.6)" stroke-width="2" stroke-linecap="round"/>
          <line x1="352" y1="85" x2="358" y2="85" stroke="rgba(204,238,0,0.6)" stroke-width="2" stroke-linecap="round"/>
          <line x1="342" y1="112" x2="347" y2="117" stroke="rgba(204,238,0,0.6)" stroke-width="2" stroke-linecap="round"/>
          <line x1="288" y1="58" x2="283" y2="53" stroke="rgba(204,238,0,0.6)" stroke-width="2" stroke-linecap="round"/>
          <line x1="278" y1="85" x2="272" y2="85" stroke="rgba(204,238,0,0.6)" stroke-width="2" stroke-linecap="round"/>
          <rect x="16" y="125" width="110" height="58" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
          <text x="26" y="149" font-family="DM Sans,sans-serif" font-size="9.5" fill="rgba(255,255,255,0.92)" font-weight="700">🥦 Legumes Frescos</text>
          <text x="26" y="165" font-family="DM Sans,sans-serif" font-size="8.5" fill="rgba(204,238,0,0.7)">Disponível hoje</text>
          <rect x="274" y="106" width="110" height="58" rx="6" fill="rgba(255,255,255,0.12)" stroke="rgba(255,255,255,0.22)" stroke-width="1"/>
          <text x="284" y="130" font-family="DM Sans,sans-serif" font-size="9.5" fill="rgba(255,255,255,0.92)" font-weight="700">🌽 Milho · 5kg</text>
          <text x="284" y="146" font-family="DM Sans,sans-serif" font-size="8.5" fill="rgba(204,238,0,0.7)">2.500 Kz</text>
          <path d="M126 154 Q200 134 274 135" stroke="rgba(204,238,0,0.45)" stroke-width="1.5" stroke-dasharray="5,4"/>
        </svg>
        
        -->
        <div class="hero-image"></div>


        <div class="stats-row">
          <div class="stat-card lime-card">
            <div class="stat-num">100%</div>
            <div class="stat-lbl">Transparente</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">0</div>
            <div class="stat-lbl">Intermediários</div>
          </div>
          <div class="stat-card">
            <div class="stat-num">🌍</div>
            <div class="stat-lbl">Angola</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── HOW IT WORKS STRIP ── -->
    <section class="how-strip">
      <p class="how-label">Processo</p>
      <h3 class="how-title">Como funciona em <span>4 passos</span></h3>
      <div class="how-steps">
        <div v-for="(step, i) in steps" :key="i" class="how-step">
          <div class="how-step-num">{{ step.num }}</div>
          <div class="how-step-icon">{{ step.icon }}</div>
          <div class="how-step-title">{{ step.title }}</div>
          <div class="how-step-desc">{{ step.desc }}</div>
        </div>
      </div>
    </section>

    <!-- ── CTA BANNER ── -->
    <section class="cta-banner">
      <h3>Faça parte da nova forma de <em>comprar e vender</em><br/>produtos agrícolas em Angola.</h3>
      <div class="cta-btns">
        <RouterLink to="/vender" class="btn-lime">🌾 Quero Vender na KantosPlace</RouterLink>
        <RouterLink to="/comprar" class="btn-outline-white">🛒 Quero Comprar na KantosPlace</RouterLink>
      </div>
    </section>

    <SiteFooter />
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import SiteFooter from '@/components/SiteFooter.vue'
import agricultor from '@/assets/identidade/agricultor.jpg'

const steps = [
  { num: '01', icon: '🔍', title: 'Escolha produtos',   desc: 'Encontre produtores, veja preços e selecione o que precisa.' },
  { num: '02', icon: '✅', title: 'Produtor confirma',  desc: 'O pedido é aceite apenas se o produtor puder cumprir.' },
  { num: '03', icon: '🔒', title: 'Pagamento seguro',   desc: 'O pagamento é feito na plataforma após confirmação.' },
  { num: '04', icon: '📦', title: 'Entrega ou recolha', desc: 'Receba em casa ou recolha diretamente com o produtor.' },
]
</script>

<style scoped>
/* HERO */
.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: calc(100vh - 68px);
  position: relative;
}
.hero::after {
  content: '';
  position: absolute;
  top: 0; right: 0;
  width: 50%; height: 100%;
  background: var(--blue);
  z-index: 0;
}

.hero-left {
  position: relative; z-index: 2;
  display: flex; flex-direction: column; justify-content: center;
  padding: 6% 5% 6% 7%;
  background: var(--off-white);
}
.hero-right {
  position: relative; z-index: 2;
  display: flex; flex-direction: column;
  justify-content: center; align-items: center;
  padding: 5% 7% 5% 5%;
}

.hero-badge {
  display: inline-flex; align-items: center; gap: 0.5rem;
  background: var(--lime); color: var(--black);
  font-size: 0.72rem; font-weight: 800; letter-spacing: 1.5px;
  text-transform: uppercase; padding: 0.4rem 1rem;
  border-radius: 4px; margin-bottom: 1.6rem; width: fit-content;
}

.hero-image{
  position:absolute;
  inset:0;

  background-image:url('@/assets/identidade/agricultor.jpg');
  background-size:cover;
  background-position:center;

  z-index:0;
}

.hero-right{
  position:relative;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  padding:5% 7% 5% 5%;
  overflow:hidden;
}


h1 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(2.5rem, 4.8vw, 4.2rem);
  font-weight: 900; line-height: 1.06;
  color: var(--black); margin-bottom: 1.3rem;
}
h1 em { font-style: normal; color: var(--blue); }

.hero-sub {
  font-size: 1.05rem; line-height: 1.65;
  color: var(--muted); max-width: 440px;
  margin-bottom: 2.4rem; font-weight: 300;
}
.hero-btns { display: flex; gap: 1rem; flex-wrap: wrap; }

.hero-svg { width: 100%; max-width: 400px; }

.stats-row{
  display:flex;
  gap:1rem;
  margin-top:20rem;
  position:relative;
  z-index:2;
}

.stat-card {
  background: rgba(255,255,255,0.12);
  border: 1px solid rgba(255,255,255,0.18);
  border-radius: 8px; padding: 0.85rem 1.2rem;
  text-align: center; color: var(--white);
}
.lime-card { background: var(--lime); border-color: var(--lime); }
.stat-num { font-family: 'Playfair Display', serif; font-size: 1.6rem; font-weight: 900; }
.stat-lbl { font-size: 0.68rem; opacity: 0.75; margin-top: 2px; letter-spacing: 0.5px; }
.lime-card .stat-num, .lime-card .stat-lbl { color: var(--black); }
.lime-card .stat-lbl { opacity: 0.65; }

/* HOW STRIP */
.how-strip { background: var(--white); padding: 5rem 7%; }
.how-label {
  text-align: center;
  font-size: 0.72rem; font-weight: 800; letter-spacing: 2.5px;
  text-transform: uppercase; color: var(--blue); margin-bottom: 0.5rem;
}
.how-title {
  text-align: center;
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.5vw, 2rem);
  color: var(--black); margin-bottom: 3rem; font-weight: 900;
}
.how-title span { color: var(--blue); }
.how-steps { display: grid; grid-template-columns: repeat(4, 1fr); gap: 0; }
.how-step {
  padding: 2rem 1.5rem;
  border-right: 1px solid var(--gray);
}
.how-step:last-child { border: none; }
.how-step-num {
  font-family: 'Playfair Display', serif;
  font-size: 3rem; font-weight: 900;
  color: var(--lime); line-height: 1; margin-bottom: 0.8rem;
  -webkit-text-stroke: 1px var(--lime-dark);
}
.how-step-icon { font-size: 1.5rem; margin-bottom: 0.6rem; }
.how-step-title { font-weight: 800; font-size: 0.92rem; margin-bottom: 0.4rem; color: var(--black); }
.how-step-desc { font-size: 0.8rem; color: var(--muted); line-height: 1.55; }

/* CTA BANNER */
.cta-banner {
  background: var(--black);
  padding: 5rem 7%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem; align-items: center;
}
.cta-banner h3 {
  font-family: 'Playfair Display', serif;
  font-size: clamp(1.5rem, 2.8vw, 2.2rem);
  color: var(--white); line-height: 1.25; font-weight: 900;
}
.cta-banner h3 em { font-style: italic; color: var(--lime); }
.cta-btns { display: flex; flex-direction: column; gap: 0.9rem; }

/* RESPONSIVE */
@media (max-width: 900px) {
  .hero { grid-template-columns: 1fr; }
  .hero::after { display: none; }
  .hero-left { padding: 10% 6% 4%; align-items: center; text-align: center; }
  .hero-sub { text-align: center; margin: 0 auto 2.4rem; }
  .hero-btns { justify-content: center; }
  .hero-right { padding: 4% 6% 8%; background: var(--blue); }
  .stats-row { justify-content: center; }
  .how-steps { grid-template-columns: 1fr 1fr; }
  .how-step { border-bottom: 1px solid var(--gray); border-right: none; }
  .cta-banner { grid-template-columns: 1fr; gap: 2rem; text-align: center; }
  .cta-btns { align-items: center; }
}
@media (max-width: 560px) {
  .how-steps { grid-template-columns: 1fr; }
  .how-strip { padding: 3.5rem 5%; }
}
</style>
