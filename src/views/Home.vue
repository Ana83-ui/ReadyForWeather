<template>
  <MainLayout>
    <template #default>
      <!--default permite que todo el contenido de Home se renderice correctamente-->
      <div class="text-home">
        <div class="text-2">
          <div class="texto">
            <h3 class="title">
              ¿El estado de ánimo del cielo te tiene dudando ante el armario?
            </h3>
            <p>
              Con <span><strong>Ready For Weather</strong> </span> ya no tendrás
              que adivinar qué ropa llevar.
            </p>
            <p>
              Mediante tu posición actual, consulta las prendas más adecuadas
              según la temperatura, la humedad y las condiciones climáticas
              actuales.
            </p>
            <p>
              Olvídate de las decisiones difíciles por la mañana, y comienza tu
              día con la tranquilidad de saber que estás perfectamente preparad@
              para cualquier cambio en el clima.
            </p>
            <p>¡Prepárate para dejar al clima sin palabras!</p>
            <router-link to="/weather">
              <button class="btn">Consultar</button>
            </router-link>
          </div>
          <div class="text-2"></div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script setup>
import MainLayout from "../layout/MainLayout.vue";
</script>

<style>
.text-home {
  display: grid;
  height: 600px;
}

.text-2 {
  display: flex;

  align-items: center;
  margin-top: 200px;
  margin-inline-start: 625px;
}
.texto {
  font-family: Caveat;
  font-size: 20px;
  border-radius: 10%;
  width: 600px;
  height: 425px;
  color: #001750;
  border: 1px solid #001750;
  background-color: transparent;

  padding: 20px;
}

.btn {
  font-family: Jost, sans-serif;
  font-weight: bold;
  font-size: 1rem;
  background-image: url(../assets/lluvia.jpg);
  background-size: 50%;
  background-position: 25% 15%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  border: 1px solid #001750;
  margin-top: 20px;
}

.title {
  font-family: Montserrat;
  font-weight: bold;
  font-size: 1rem;
  background-image: url(../assets/lluvia.jpg);
  background-size: 50%;
  background-position: 25% 15%;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

span {
  font-family: "Montserrat Underline";
}

@media (max-width: 768px) {
  .text-2 {
    margin-top: 100px;
    margin-inline-start: 50px;
  }

  .texto {
    width: 90%;
    height: auto;
    margin-inline-start: auto;
    margin-inline-end: auto;
    font-size: 16px;
    padding: 15px;
  }

  .btn {
    font-size: 0.9rem;
    padding: 10px 20px;
    margin-top: 15px;
  }

  .title {
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .text-2 {
    margin-top: 50px;
    margin-inline-start: 20px;
  }

  .texto {
    width: 100%;
    font-size: 14px;
    padding: 10px;
    margin: 0;
  }

  .btn {
    font-size: 0.8rem;
    padding: 8px 16px;
    margin-top: 10px;
  }

  .title {
    font-size: 0.8rem;
  }
}

@media (min-width: 769px) {
  .text-2 {
    margin-top: 200px;
    margin-inline-start: 625px;
  }

  .texto {
    width: 600px;
    height: 425px;
    font-size: 20px;
    padding: 20px;
  }

  .btn {
    font-size: 1rem;
    padding: 12px 24px;
    margin-top: 20px;
  }

  .title {
    font-size: 1rem;
  }
}
</style>
