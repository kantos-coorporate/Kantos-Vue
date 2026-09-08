<template>
  <div class="contacto-page">
    <section class="sec">
      <div class="contacto-grid">

        <!-- Left: contact info -->
        <div>
          <span class="section-tag">Fale Connosco</span>
          <h2>Vamos construir<br/>juntos</h2>
          <p class="section-intro">
            Tem questões? Quer saber mais sobre a plataforma?
            Entre em contacto connosco.
          </p>

          <div class="contact-items">
            <a
              v-for="item in contacts"
              :key="item.label"
              :href="item.href"
              :target="item.external ? '_blank' : undefined"
              class="contact-item"
            >
              <div class="contact-icon">{{ item.icon }}</div>
              <div>
                <div class="contact-label">{{ item.label }}</div>
                <div>{{ item.value }}</div>
              </div>
            </a>
          </div>

          <div class="socials">
            <a
              v-for="s in socials"
              :key="s.label"
              :href="s.href"
              target="_blank"
              :title="s.label"
              class="social-btn"
            >{{ s.short }}</a>
          </div>
        </div>

        <!-- Right: CTA box -->
        <div>
          <div class="cta-box">
            <h3>Faça parte da nova forma de comprar e vender produtos agrícolas em Angola</h3>
            <p>Junte-se à KantosPlace e faça parte do movimento que está a transformar a agricultura angolana.</p>
            <div class="cta-btns">
              <a
                href="mailto:kantos.io001@gmail.com?subject=Interesse em Vender na KantosPlace"
                class="btn-lime"
              >🌾 Quero Vender na KantosPlace</a>
              <a
                href="mailto:kantos.io001@gmail.com?subject=Interesse em Comprar na KantosPlace"
                class="btn-outline-white"
              >🛒 Quero Comprar na KantosPlace</a>
            </div>
          </div>
        </div>

      </div>
    </section>

    <footer class="contact-footer">
      <p>
        © 2025 KANTOS · KantosPlace · Angola &nbsp;|&nbsp;
        <a href="https://www.linkedin.com/company/kantos-ao/" target="_blank">LinkedIn</a> ·
        <a href="https://www.instagram.com/kantos_ao" target="_blank">Instagram</a> ·
        <a href="https://www.facebook.com/share/1Hps9phQ9Q/" target="_blank">Facebook</a>
      </p>
      <p class="sub">Do produtor direto para si. 🌿</p>
    </footer>
  </div>
</template>

<script setup>
const contacts = [
  { icon: '✉️', label: 'Email',      value: 'kantos.io001@gmail.com',  href: 'mailto:kantos.io001@gmail.com' },
  { icon: '📞', label: 'Telefone',   value: '+244 938 861 103',         href: 'tel:+244938861103' },
  { icon: '📱', label: 'Alternativo',value: '+244 947 564 666',         href: 'tel:+244947564666' },
  { icon: '💬', label: 'WhatsApp',   value: '+244 938 861 103',         href: 'https://wa.me/244938861103', external: true },
]

const socials = [
  { label: 'LinkedIn',  short: 'in', href: 'https://www.linkedin.com/company/kantos-ao/' },
  { label: 'Instagram', short: 'ins', href: 'https://www.instagram.com/kantos_ao' },
  { label: 'Facebook',  short: 'fb', href: 'https://www.facebook.com/share/1Hps9phQ9Q/' },
]
</script>

<style scoped>
.contacto-page { background: var(--black); color: var(--white); min-height: calc(100vh - 68px); }

/* Override tag for dark background */
.contacto-page .section-tag { background: rgba(204,238,0,0.15); color: var(--lime); }
.contacto-page h2 { color: var(--white); }
.contacto-page .section-intro { color: rgba(255,255,255,0.55); }

.contacto-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 5rem; align-items: start; }

/* Contact items */
.contact-items { display: flex; flex-direction: column; gap: 0.9rem; margin-top: 2rem; }
.contact-item {
  display: flex; align-items: center; gap: 1rem;
  text-decoration: none; color: rgba(255,255,255,0.75);
  font-size: 0.92rem; padding: 1rem 1.2rem;
  background: rgba(255,255,255,0.04); border-radius: 6px;
  border: 1px solid rgba(255,255,255,0.08); transition: all 0.2s;
}
.contact-item:hover { color: var(--white); background: rgba(255,255,255,0.08); border-color: var(--lime); }
.contact-icon {
  width: 40px; height: 40px; background: var(--blue);
  border-radius: 6px; display: flex; align-items: center;
  justify-content: center; font-size: 1rem; flex-shrink: 0;
}
.contact-label { font-size: 0.7rem; color: rgba(255,255,255,0.38); margin-bottom: 2px; letter-spacing: 0.5px; }

/* Socials */
.socials { display: flex; gap: 0.8rem; margin-top: 2rem; }
.social-btn {
  width: 44px; height: 44px;
  background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1);
  border-radius: 6px; display: flex; align-items: center; justify-content: center;
  text-decoration: none; color: rgba(255,255,255,0.6);
  font-size: 0.85rem; font-weight: 800; transition: all 0.25s;
}
.social-btn:hover { background: var(--lime); color: var(--black); border-color: var(--lime); }

/* CTA Box */
.cta-box {
  background: var(--blue); border-radius: 8px;
  padding: 2.8rem; border-bottom: 5px solid var(--lime);
}
.cta-box h3 {
  font-family: 'Playfair Display', serif;
  font-size: 1.5rem; color: var(--white); margin-bottom: 0.9rem; line-height: 1.3;
}
.cta-box p { font-size: 0.88rem; color: rgba(255,255,255,0.6); margin-bottom: 2rem; line-height: 1.6; }
.cta-btns { display: flex; flex-direction: column; gap: 0.8rem; }

/* Footer */
.contact-footer {
  background: #0a0a0a;
  color: rgba(255,255,255,0.35);
  text-align: center; padding: 1.8rem 5%; font-size: 0.8rem;
}
.contact-footer a { color: var(--lime); text-decoration: none; }
.sub { margin-top: 0.35rem; font-size: 0.75rem; }

@media (max-width: 900px) {
  .contacto-grid { grid-template-columns: 1fr; gap: 3rem; }
}
</style>
