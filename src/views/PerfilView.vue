<template>
  <div class="perfil-layout">
    <!-- Sidebar -->
    <aside :class="['sidebar', { 'sidebar-collapsed': isCollapsed }]">
      <button class="toggle-btn" @click="toggleSidebar" aria-label="Toggle Menu">
        <i :class="isCollapsed ? 'fas fa-angle-right' : 'fas fa-angle-left'"></i>
      </button>

      <div class="perfil" v-if="!isCollapsed">
        <img src="@/assets/img/avatar/jefer.png" alt="Avatar" class="avatar" />
        <h2>JEFFERSON MARTINEZ</h2>

        <div class="social-icons">
          <a href="#"><i class="fab fa-linkedin-in"></i></a>
          <a href="#"><i class="fab fa-github"></i></a>
          <a href="#"><i class="fab fa-facebook-f"></i></a>
          <a href="#"><i class="fab fa-instagram"></i></a>
          <a href="#"><i class="fab fa-twitch"></i></a>
        </div>
      </div>

      <nav class="menu">
        <router-link
          v-for="item in menuItems"
          :key="item.to"
          :to="item.to"
          class="menu-link"
          :title="isCollapsed ? item.text : ''"
          exact-active-class="router-link-exact-active"
        >
          <i :class="item.icon"></i>
          <span v-if="!isCollapsed">{{ item.text }}</span>
        </router-link>
      </nav>
    </aside>

    <!-- Contenido dinámico -->
    <main class="contenido" :class="{ 'contenido-expanded': isCollapsed }">
      <router-view />
    </main>
  </div>
</template>

<script>
export default {
  name: 'PerfilView',
  data() {
    return {
      isCollapsed: false,
      menuItems: [
        { to: '/profile', icon: 'fas fa-home', text: 'Home' },
        { to: '/profile/about', icon: 'fas fa-user', text: 'Sobre mí' },
        { to: '/profile/resume', icon: 'fas fa-file-alt', text: 'Currículum' },
        { to: '/profile/portfolio', icon: 'fas fa-briefcase', text: 'Portafolio' },
        { to: '/profile/apps', icon: 'fas fa-th-large', text: 'Aplicaciones' },
        { to: '/profile/courses', icon: 'fas fa-book', text: 'Cursos' },
        { to: '/profile/contact', icon: 'fas fa-envelope', text: 'Contacto' }
      ]
    };
  },
  methods: {
    toggleSidebar() {
      this.isCollapsed = !this.isCollapsed;
    }
  }
};
</script>

<style scoped>
.perfil-layout {
  display: flex;
  min-height: 100vh;
  font-family: 'Arial', sans-serif;
  background-color: #1e1e1e;
}

/* Sidebar */
.sidebar {
  width: 250px;
  background: url('@/assets/img/fondo/1.png') no-repeat center center;
  background-size: cover;
  background-color: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(4px);
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  position: fixed;
  height: 100vh;
  left: 0;
  top: 0;
  transition: width 0.3s ease;
  overflow: hidden;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.2);
  z-index: 10;
}

.sidebar-collapsed {
  width: 70px;
}

/* Botón toggle */
.toggle-btn {
  position: absolute;
  top: 10px;
  right: 4px;
  background-color: #42b983;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  color: white;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  transition: background-color 0.3s;
  z-index: 100;
}

.toggle-btn:hover {
  background-color: #369f6e;
}

.toggle-btn i {
  font-size: 1.2rem;
}

/* Perfil */
.perfil {
  text-align: center;
  margin-bottom: 2rem;
}

.perfil h2 {
  font-size: 16px;
  margin-top: 0.7rem;
  font-weight: bold;
  color: white;
  background-color: #2c3e50;
  padding: 6px 12px;
  border-radius: 12px;
  text-transform: uppercase;
}

.avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid white;
}

/* Redes sociales */
.social-icons {
  margin-top: 1rem;
  display: flex;
  gap: 10px;
  justify-content: center;
}

.social-icons a {
  color: white;
  font-size: 1rem;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 8px;
  border-radius: 50%;
  transition: transform 0.3s ease, background 0.3s ease;
}

.social-icons a:hover {
  transform: scale(1.2);
  background-color: #00e676;
}

/* Menu */
.menu {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.menu-link {
  display: flex;
  align-items: center;
  gap: 10px;
  color: white;
  padding: 10px 15px;
  border-radius: 8px;
  text-decoration: none;
  transition: background 0.3s;
  white-space: nowrap;
}

.menu-link i {
  font-size: 1.3rem;
  width: 24px;
  text-align: center;
}

.sidebar-collapsed .menu-link {
  justify-content: center;
  padding: 10px 0;
}

.menu-link:hover,
.menu-link.router-link-exact-active {
  background-color: #42b983;
  cursor: pointer;
}

/* Contenido dinámico */
.contenido {
  padding: 2rem;
  background: url('@/assets/img/fondo/fondo.jpg') no-repeat center center;
  background-size: cover;
  background-color: #1e1e1e;
  color: white;
  min-height: 100vh;
  transition: all 0.3s ease;
  margin-left: 250px;
  width: calc(100% - 250px);
}

.contenido-expanded {
  margin-left: 70px;
  width: calc(100% - 70px);
}

/* Responsive */
@media (max-width: 768px) {
  .sidebar {
    width: 200px;
  }

  .sidebar-collapsed {
    width: 60px;
  }

  .avatar {
    width: 80px;
    height: 80px;
  }

  .contenido {
    padding: 1rem;
  }

  .toggle-btn {
    width: 30px;
    height: 30px;
    font-size: 1rem;
    right: 6px;
  }
}

@media (max-width: 400px) {
  .perfil h2 {
    font-size: 12px;
  }

  .menu-link span {
    font-size: 13px;
  }
}
</style>
