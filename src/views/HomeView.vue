<template>
  <div class="home d-flex flex-column align-items-center text-center text-white">
    <!-- Logo esquina (NAVBAR ORIGINAL) -->
    <div class="logo-esquina">
      <img src="@/assets/img/logo/logo_blanco-removebg-preview.png" alt="Logo" class="logo-img" />
    </div>

    <!-- Avatar Grande y Visible -->
    <div class="avatar-container mt-5">
      <div class="avatar-wrapper">
        <img src="@/assets/img/avatar/jefer.png" alt="avatar" class="avatar-img-grande" />
       
      </div>
    </div>

    <!-- Nombre -->
    <h2 class="mt-3 fw-bold nombre-mobile">Jefferson Martinez Castillo</h2>

    <!-- Frases dinámicas -->
    <p class="text-uppercase small mb-4 subtitulo-mobile">
      <span ref="typewriter"></span>
      <span class="cursor-mobile">|</span>
    </p>

    <!-- Botones -->
    <div class="tarjeta-opciones card text-white">
      <div class="text-center mb-3">
        <i class="bi bi-lightning-charge icono-principal"></i>
      </div>

      <div class="d-grid gap-3">
        <a href="https://wa.me/584167170715" target="_blank" class="btn-custom btn-whatsapp-mobile">
          <i class="bi bi-whatsapp"></i> WHATSAPP
        </a>
        <a href="https://digital-professional-profile-full-stack-developer.vercel.app/" target="_blank" class="btn-custom btn-sitio-mobile">
          <i class="bi bi-globe"></i> SITIO WEB
        </a>
        <a href="mailto:jefferson01desarrollofullstack@gmail.com" class="btn-custom btn-email-mobile">
          <i class="bi bi-envelope"></i> EMAIL
        </a>
      </div>
    </div>

    <!-- Redes sociales -->
    <div class="redes mt-4">
      <a href="https://www.facebook.com/share/1TC7Tu9XWG/" target="_blank" class="red-social-mobile">
        <i class="bi bi-facebook"></i>
      </a>
      <a href="https://www.instagram.com/jeffersonmartinez0114?igsh=OWY5bmwwb3V3YnI3" target="_blank" class="red-social-mobile">
        <i class="bi bi-instagram"></i>
      </a>
      <a href="#" target="_blank" class="red-social-mobile">
        <i class="bi bi-linkedin"></i>
      </a>
      <a href="https://github.com/Jefferson0101desarrollofullstack" target="_blank" class="red-social-mobile">
        <i class="bi bi-github"></i>
      </a>
      <a href="https://platzi.com/p/yefer010606/" target="_blank" class="red-social-mobile">
        <i class="bi bi-mortarboard"></i>
      </a>
    </div>

    <!-- Información de contacto -->
    <div class="contacto-info-mobile">
      <div class="contacto-item">
        <i class="bi bi-telephone"></i>
        <span>+58 0416-7170715</span>
      </div>
      <div class="contacto-item">
        <i class="bi bi-envelope"></i>
        <span>jefferson01desarrollofullstack@gmail.com</span>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap-icons/font/bootstrap-icons.css'

export default {
  name: 'HomeView',
  mounted() {
    this.startTyping();
  },
  methods: {
    startTyping() {
      const phrases = [
        "💻 Programador Full-Stack",
        "🥁 Baterista Apasionado", 
        "✝️ Cristiano Comprometido",
        "🚀 Innovador Digital",
        "🎨 Creador de Experiencias",
        "🌟 Transformando ideas en código"
      ];
      const element = this.$refs.typewriter;
      let currentPhrase = 0;
      let currentChar = 0;
      let isDeleting = false;

      const type = () => {
        if (currentPhrase >= phrases.length) {
          currentPhrase = 0;
        }

        const fullText = phrases[currentPhrase];
        
        if (!isDeleting && currentChar < fullText.length) {
          element.innerHTML += fullText.charAt(currentChar);
          currentChar++;
          setTimeout(type, 80);
        } else if (!isDeleting && currentChar === fullText.length) {
          isDeleting = true;
          setTimeout(type, 2000);
        } else if (isDeleting && currentChar > 0) {
          element.innerHTML = fullText.substring(0, currentChar - 1);
          currentChar--;
          setTimeout(type, 40);
        } else {
          isDeleting = false;
          currentPhrase++;
          setTimeout(type, 500);
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
  position: relative;
}

/* NAVBAR ORIGINAL MANTENIDO */
.logo-esquina {
  position: absolute;
  top: 20px;
  left: 20px;
  z-index: 100;
}

.logo-img {
  width: 90px;
  height: 90px;
  object-fit: contain;
  filter: drop-shadow(0 0 15px rgba(0, 123, 255, 0.5));
  animation: logoFloat 4s ease-in-out infinite;
}

@keyframes logoFloat {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-8px) rotate(3deg); }
}

/* Avatar Grande y Visible */
.avatar-container {
  margin-top: 6rem !important;
}

.avatar-wrapper {
  position: relative;
  display: inline-block;
}

.avatar-img-grande {
  width: 150px;
  height: 150px;
  object-fit: cover;
  border-radius: 50%;
  border: 4px solid #007bff;
  box-shadow: 
    0 0 30px rgba(0, 123, 255, 0.6),
    inset 0 0 20px rgba(255, 255, 255, 0.1);
  animation: avatarGlow 3s ease-in-out infinite;
  display: block;
}

@keyframes avatarGlow {
  0%, 100% { 
    box-shadow: 
      0 0 30px rgba(0, 123, 255, 0.6),
      inset 0 0 20px rgba(255, 255, 255, 0.1);
  }
  50% { 
    box-shadow: 
      0 0 45px rgba(0, 123, 255, 0.9),
      inset 0 0 30px rgba(255, 255, 255, 0.2);
  }
}

.avatar-status {
  position: absolute;
  bottom: 10px;
  right: 10px;
  background: rgba(0, 0, 0, 0.85);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.8rem;
  z-index: 10;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: statusSlide 0.5s ease-out;
}

@keyframes statusSlide {
  from {
    transform: translateX(20px);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #28a745;
  border-radius: 50%;
  animation: statusPulse 2s ease-in-out infinite;
}

@keyframes statusPulse {
  0%, 100% { transform: scale(1); opacity: 1; }
  50% { transform: scale(1.3); opacity: 0.7; }
}

/* Nombre Optimizado para Móvil */
.nombre-mobile {
  font-size: 1.8rem;
  background: linear-gradient(135deg, #ffffff 0%, #007bff 50%, #ffffff 100%);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: nameShine 3s ease-in-out infinite;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  padding: 0 1rem;
}

@keyframes nameShine {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

/* Typewriter Mobile */
.subtitulo-mobile {
  letter-spacing: 1px;
  font-size: 14px;
  min-height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 2rem;
  padding: 0 1rem;
}

.cursor-mobile {
  animation: cursorBlink 1s infinite;
  color: #007bff;
  font-weight: bold;
}

@keyframes cursorBlink {
  0%, 50% { opacity: 1; }
  51%, 100% { opacity: 0; }
}

/* Tarjeta de opciones mejorada */
.tarjeta-opciones {
  background-color: rgba(0, 0, 0, 0.7);
  border-radius: 20px;
  padding: 2rem;
  width: 100%;
  max-width: 344px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  animation: cardFloat 6s ease-in-out infinite;
}

@keyframes cardFloat {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-8px); }
}

.icono-principal {
  font-size: 2.5rem;
  color: #007bff;
  animation: iconPulse 2s ease-in-out infinite;
}

@keyframes iconPulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

/* Botones mejorados para móvil */
.btn-custom {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background-color: #0b5ed7;
  color: white;
  border-radius: 50px;
  padding: 1rem 1.5rem;
  text-decoration: none;
  transition: all 0.3s ease;
  font-weight: 600;
  letter-spacing: 0.5px;
  border: none;
  position: relative;
  overflow: hidden;
}

.btn-custom::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
  transition: left 0.6s ease;
}

.btn-custom:hover::before {
  left: 100%;
}

.btn-custom:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
}

.btn-whatsapp-mobile:hover {
  background-color: #25d366;
}

.btn-sitio-mobile:hover {
  background-color: #0056b3;
}

.btn-email-mobile:hover {
  background-color: #6c757d;
}

/* Redes sociales optimizadas para móvil */
.redes {
  display: flex;
  gap: 1rem;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 2rem;
  margin-bottom: 2rem;
}

.red-social-mobile {
  color: white;
  font-size: 1.4rem;
  transition: all 0.3s ease;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 50%;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  text-decoration: none;
}

.red-social-mobile:hover {
  transform: scale(1.2);
  color: #ffc107;
  background: rgba(255, 255, 255, 0.2);
}

/* Información de contacto móvil */
.contacto-info-mobile {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  width: 100%;
  max-width: 400px;
}

.contacto-item {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 1rem 1.5rem;
  font-size: 0.9rem;
  transition: all 0.3s ease;
  width: 100%;
  justify-content: center;
}

.contacto-item:hover {
  background: rgba(255, 255, 255, 0.1);
  transform: translateX(5px);
}

.contacto-item i {
  color: #007bff;
  font-size: 1rem;
}

/* Responsive para móviles pequeños */
@media (max-width: 480px) {
  .home {
    padding: 1.5rem 1rem;
  }
  
  .logo-img {
    width: 70px;
    height: 70px;
  }
  
  .avatar-container {
    margin-top: 5rem !important;
  }
  
  .avatar-img-grande {
    width: 130px;
    height: 130px;
  }
  
  .nombre-mobile {
    font-size: 1.6rem;
  }
  
  .tarjeta-opciones {
    padding: 1.5rem;
    max-width: 300px;
  }
  
  .btn-custom {
    padding: 0.9rem 1.2rem;
    font-size: 0.9rem;
  }
  
  .red-social-mobile {
    width: 45px;
    height: 45px;
    font-size: 1.2rem;
  }
  
  .contacto-item {
    padding: 0.8rem 1.2rem;
    font-size: 0.85rem;
  }
}

@media (max-width: 360px) {
  .home {
    padding: 1rem 0.5rem;
  }
  
  .logo-img {
    width: 60px;
    height: 60px;
  }
  
  .avatar-img-grande {
    width: 120px;
    height: 120px;
  }
  
  .nombre-mobile {
    font-size: 1.4rem;
  }
  
  .tarjeta-opciones {
    padding: 1.2rem;
    max-width: 280px;
  }
  
  .btn-custom {
    padding: 0.8rem 1rem;
  }
  
  .redes {
    gap: 0.8rem;
  }
  
  .red-social-mobile {
    width: 40px;
    height: 40px;
    font-size: 1.1rem;
  }
}

/* Para tablets */
@media (min-width: 768px) {
  .avatar-img-grande {
    width: 160px;
    height: 160px;
  }
  
  .nombre-mobile {
    font-size: 2rem;
  }
  
  .tarjeta-opciones {
    max-width: 380px;
  }
}

/* Asegurar que el avatar se vea bien */
.avatar-img-grande {
  object-fit: cover;
  object-position: center center;
}

/* Mejorar legibilidad del texto */
.nombre-mobile,
.subtitulo-mobile,
.btn-custom,
.contacto-item {
  text-shadow: 0 1px 3px rgba(0, 0, 0, 0.5);
}
</style>