<template>
  <section class="sobre-mi">
    <h2 class="titulo">Sobre mí</h2>
    <p class="subtitulo">Conoce más de mí</p>

    <div class="tarjeta">
      <img src="@/assets/img/avatar/jefer.png" alt="Foto de Jefferson" class="foto" />

      <div class="info">
        <h3>Desarrollador Web Full Stack</h3>
        <p class="descripcion">
          <em>Soy un profesional orientado a trabajar cada día en crecer profesionalmente en el área, en constante aprendizaje, y con una actitud de servidor.</em>
        </p>

        <ul class="detalles">
          <li><strong>Teléfono:</strong> +58 424 5184167</li>
          <li><strong>Dirección:</strong> Barquisimeto, Estado Lara, Venezuela</li>
          <li><strong>Correo:</strong> engelberamaya@gmail.com</li>
          <li><strong>Perfil LinkedIn:</strong> <a href="#" target="_blank">Ver</a></li>
          <li><strong>Perfil GitHub:</strong> <a href="#" target="_blank">Ver</a></li>
        </ul>

        <p>
          Estudiante de Ingeniería en Informática en la Universidad Centroccidental Lisandro Alvarado (UCLA).
          Actualmente me encuentro desarrollando mis habilidades como desarrollador web full stack, con interés en proyectos
          que aporten soluciones reales y prácticas.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'SobreMi'
}
</script>

<style scoped>
.sobre-mi {
  background-color: white;
  padding: 2rem;
  border-radius: 1rem;
  max-width: 1200px;
  margin: auto;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease-in-out;
}

.sobre-mi:hover {
  transform: scale(1.01);
}

.titulo {
  font-size: 2rem;
  text-align: center;
  color: #003366;
  margin-bottom: 0.5rem;
}

.subtitulo {
  text-align: center;
  color: #555;
  margin-bottom: 2rem;
}

.tarjeta {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  align-items: flex-start;
}

.foto {
  width: 250px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  object-fit: cover;
  transition: transform 0.3s;
}

.foto:hover {
  transform: scale(1.05);
}

.info {
  flex: 1;
  font-size: 1rem;
  color: #333;
}

.descripcion {
  margin-bottom: 1rem;
  font-style: italic;
  color: #555;
}

.detalles {
  list-style: none;
  padding: 0;
  margin-bottom: 1rem;
}

.detalles li {
  margin-bottom: 0.5rem;
}

a {
  color: #0077cc;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

@media screen and (max-width: 768px) {
  .tarjeta {
    flex-direction: column;
    align-items: center;
  }

  .foto {
    width: 80%;
  }

  .info {
    text-align: center;
  }
}
</style>
