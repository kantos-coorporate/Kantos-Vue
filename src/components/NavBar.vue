<template>
  <nav>
    <!-- Logo -->
    <RouterLink to="/" class="logo-wrap">
      <!-- Replace the src below with your actual logo file path, e.g. /logo.png -->
      <img src="../assets/identidade/logo.jpeg" alt="KANTOS" class="logo-img" />
     </RouterLink>

    <!-- Desktop links -->
    <ul class="nav-links">
      <li v-for="link in links" :key="link.to">
        <RouterLink
          :to="link.to"
          :class="['nav-btn', link.cta ? 'nav-cta' : '']"
          custom
          v-slot="{ navigate, isActive }"
        >
          <button
            @click="navigate"
            :class="{ active: isActive, 'nav-cta-btn': link.cta }"
          >
            {{ link.label }}
          </button>
        </RouterLink>
      </li>
    </ul>

    <!-- Hamburger -->
    <button class="hamburger" @click="mobileOpen = !mobileOpen" aria-label="Menu">
      <span :class="{ open: mobileOpen }"></span>
      <span :class="{ open: mobileOpen }"></span>
      <span :class="{ open: mobileOpen }"></span>
    </button>
  </nav>

  <!-- Mobile menu -->
  <Transition name="slide">
    <div v-if="mobileOpen" class="mobile-menu">
      <RouterLink
        v-for="link in links"
        :key="link.to"
        :to="link.to"
        class="mobile-link"
        :class="{ 'mobile-cta': link.cta }"
        @click="mobileOpen = false"
      >
        <span class="mobile-icon">{{ link.icon }}</span>
        {{ link.label }}
      </RouterLink>
    </div>
  </Transition>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const mobileOpen = ref(false)

const links = [
  { to: '/',         label: 'Home',          icon: '🏠' },
  { to: '/como',     label: 'Como Funciona', icon: '⚙️' },
  { to: '/vender',   label: 'Vender',        icon: '🌾' },
  { to: '/comprar',  label: 'Comprar',       icon: '🛒' },
  { to: '/sobre',    label: 'Sobre',         icon: '💙' },
  { to: '/contacto', label: 'Contacto',      icon: '📩', cta: true },
]
</script>

<style scoped>
nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 200;
  height: 68px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  background: var(--black);
  border-bottom: 2px solid var(--lime);
  box-shadow: 0 2px 24px rgba(0, 0, 0, 0.35);
}

/* Logo */
.logo-wrap {
  display: flex;
  align-items: center;
  flex-shrink: 0;
  text-decoration: none;
}
.logo-img {
  height: 30px;
  width: auto;
  display: block;
  mix-blend-mode: screen;
  transition: opacity 0.2s;
}
.logo-img:hover { opacity: 0.85; }

/* Nav links */
.nav-links {
  display: flex;
  align-items: center;
  gap: 0.1rem;
  list-style: none;
}

.nav-links button {
  background: none;
  border: none;
  font-family: 'DM Sans', sans-serif;
  cursor: pointer;
  color: rgba(255, 255, 255, 0.55);
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.48rem 0.9rem;
  border-radius: 6px;
  transition: all 0.2s;
  white-space: nowrap;
  position: relative;
}
.nav-links button::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0.9rem; right: 0.9rem;
  height: 2px;
  background: var(--lime);
  border-radius: 2px;
  transform: scaleX(0);
  transition: transform 0.25s;
}
.nav-links button:hover {
  color: var(--white);
  background: rgba(255, 255, 255, 0.07);
}
.nav-links button.active {
  color: var(--white);
  font-weight: 700;
}
.nav-links button.active::after { transform: scaleX(1); }

/* CTA button */
.nav-cta-btn {
  background: var(--lime) !important;
  color: var(--black) !important;
  padding: 0.48rem 1.25rem !important;
  border-radius: 6px !important;
  font-weight: 800 !important;
}
.nav-cta-btn::after { display: none !important; }
.nav-cta-btn:hover {
  background: var(--lime-dark) !important;
  color: var(--black) !important;
  transform: translateY(-1px);
}
.nav-cta-btn.active {
  background: var(--lime-dark) !important;
  color: var(--black) !important;
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  cursor: pointer;
  padding: 4px;
  background: none;
  border: none;
}
.hamburger span {
  display: block;
  width: 24px; height: 2px;
  background: var(--white);
  border-radius: 2px;
  transition: all 0.3s;
}
.hamburger span.open:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger span.open:nth-child(2) { opacity: 0; }
.hamburger span.open:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile menu */
.mobile-menu {
  position: fixed;
  top: 68px; left: 0; right: 0;
  background: var(--black);
  z-index: 199;
  border-bottom: 3px solid var(--lime);
  box-shadow: 0 12px 32px rgba(0, 0, 0, 0.5);
  padding: 0.5rem 0 1rem;
}
.mobile-link {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  text-decoration: none;
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.95rem;
  font-weight: 500;
  padding: 0.95rem 5%;
  border-bottom: 1px solid rgba(255, 255, 255, 0.07);
  transition: all 0.18s;
}
.mobile-link:last-child { border: none; }
.mobile-link:hover, .mobile-link.router-link-active {
  color: var(--lime);
  background: rgba(204, 238, 0, 0.06);
  border-left: 4px solid var(--lime);
  padding-left: calc(5% - 4px);
}
.mobile-cta {
  color: var(--lime) !important;
  font-weight: 800 !important;
}
.mobile-icon { font-size: 1rem; }

/* Slide transition for mobile menu */
.slide-enter-active, .slide-leave-active {
  transition: all 0.28s ease;
}
.slide-enter-from, .slide-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Responsive */
@media (max-width: 900px) {
  .nav-links { display: none; }
  .hamburger { display: flex; }
}
</style>
