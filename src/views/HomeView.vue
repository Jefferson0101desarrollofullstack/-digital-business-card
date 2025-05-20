<template>
  <div class="home d-flex flex-column align-items-center text-center text-white">
    <!-- Logo esquina -->
    <div class="logo-esquina">
      <img src="@/assets/img/logo/logo_blanco-removebg-preview.png" alt="Logo" class="logo-img" />
    </div>

    <!-- Avatar -->
    <div class="avatar-container mt-5">
      <img src="@/assets/img/avatar/jefer.png" alt="avatar" class="avatar-img" />
    </div>

    <!-- Nombre -->
    <h2 class="mt-3 fw-bold">Jefferson Martinez Castillo</h2>

    <!-- Frases dinámicas -->
    <p class="text-uppercase small mb-4 subtitulo">
      <span ref="typewriter"></span>
    </p>

    <!-- Botones -->
    <div class="tarjeta-opciones card text-white">
      <div class="text-center mb-3">
        <i class="fas fa-desktop fa-2x"></i>
      </div>

      <div class="d-grid gap-3">
        <a href="https://w.app/programador" target="_blank" class="btn-custom">
          <i class="fab fa-whatsapp"></i> WHATSAPP
        </a>
        <a href="https://digital-professional-profile-full-stack-developer.vercel.app/" target="_blank" class="btn-custom">
          <i class="fas fa-globe"></i> SITIO WEB
        </a>
      </div>
    </div>

    <!-- Redes sociales -->
    <div class="redes mt-4">
      <a href="https://www.facebook.com/share/1LEDyukosq/" target="_blank"><i class="fab fa-facebook-f"></i></a>
      <a href="https://www.instagram.com/castillojeffersonmartinez?igsh=MXhwZGVicWE2c2JudA==" target="_blank"><i class="fab fa-instagram"></i></a>
      <a href="#" target="_blank"><i class="fab fa-linkedin-in"></i></a>
      <a href="https://github.com/Jefferson0101desarrollofullstack" target="_blank"><i class="fab fa-github"></i></a>
<a href="https://platzi.com/p/yefer010606/" target="_blank">
  <i class="fas fa-graduation-cap"></i>
</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const phrases = [
        "💻 Programador Full-Stack",
        "🥁 Baterista",
        "✝️ Cristiano",
        "Construyo código, ritmos y mi fe en Cristo cada día."
      ];
      const element = this.$refs.typewriter;
      let currentPhrase = 0;
      let currentChar = 0;

      const type = () => {
        if (currentPhrase >= phrases.length) return;

        const fullText = phrases[currentPhrase];
        if (currentChar < fullText.length) {
          element.innerHTML += fullText.charAt(currentChar);
          currentChar++;
          setTimeout(type, 80);
        } else {
          currentPhrase++;
          currentChar = 0;
          if (currentPhrase < phrases.length) {
            element.innerHTML += "<br>";
            setTimeout(type, 1000);
          }
        }
      };

      type();
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-image: url('@/assets/img/fondo/1.png');
  background-size: cover;
  background-position: center;
  padding: 2rem 1rem;
}

.logo-esquina {
  position: absolute;
  top: 20px;
  left: 20px;
}

.logo-img {
  width: 90px;
  height: 90px;
  object-fit: contain;
}

.avatar-img {
  width: 120px;
  height: 120px;
  object-fit: cover;
  border-radius: 50%;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
}

.subtitulo {
  letter-spacing: 1px;
  font-size: 14px;
  min-height: 60px;
}

/* Aquí eliminamos el cursor */
.subtitulo span {
  display: inline-block;
}

.tarjeta-opciones {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 2rem;
  width: 344px;
}

.btn-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #0b5ed7;
  color: white;
  border-radius: 50px;
  padding: 0.6rem 1rem;
  text-decoration: none;
  transition: background-color 0.3s ease;
}

.btn-custom:hover {
  background-color: #084298;
  text-decoration: none;
  color: white;
}

.redes a {
  color: white;
  margin: 0 10px;
  font-size: 1.3rem;
  transition: transform 0.3s ease, color 0.3s ease;
}

.redes a:hover {
  transform: scale(1.2);
  color: #ffc107;
}
</style>
