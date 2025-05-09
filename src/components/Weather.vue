<template>
  <MainLayout>
    <template #default>
      <div>
        <RouterLink to="/">
          <button class="btn-close">
            <img src="../assets/bx-log-out-circle.svg" alt="exit icon" />
          </button>
        </RouterLink>
      </div>
      <div class="text-weather">
        <div class="texto-weather">
          <p class="temperatura">
            Temperatura actual: {{ weatherStore.temperature }} ºC
          </p>
          <!--se indica .temperature porque es donde se guarda el valor en weatherStore-->
          <p>Humedad actual: {{ weatherStore.humidity }} %</p>
          <p>Fecha actual: {{ weatherStore.time }}</p>

          <div>
            <Outfit
              :temperature="weatherStore.temperature"
              :humidity="weatherStore.humidity"
            ></Outfit>
          </div>
        </div>
      </div>
    </template>
  </MainLayout>
</template>

<script setup>
import { getWeather } from "../helpers/getWeather.js";
import { useWeatherStore } from "../store/weatherStore.js";
import { onMounted } from "vue"; //es el useEffect de react. Hook que permite que el DOM se cargue una vez montado
import MainLayout from "/src/layout/MainLayout.vue";
import Outfit from "./Outfit.vue";

const weatherStore = useWeatherStore(); //acceso al store

onMounted(async () => {
  try {
  } catch (error) {}
  navigator.geolocation.getCurrentPosition(async (position) => {
    const { temperature, humidity, time } = await getWeather(position);
    weatherStore.setTemperature(temperature); //guarda el resultado en el store
    weatherStore.setHumidity(humidity);
    weatherStore.setTime(time);
  });
});
</script>

<style>
.btn-close {
  margin-inline-start: 1600px;
  margin-top: 30px;
  background-color: transparent;
}
.text-weather {
  display: grid;
  height: 600px;
}

.texto-weather {
  align-items: center;
  margin-top: 125px;
  margin-inline-start: 625px;
  font-family: Caveat;
  font-size: 20px;
  border-radius: 10%;
  width: 600px;
  height: 425px;
  color: #001750;
  border: 1px solid #001750;
  background-color: transparent;
  padding: 20px;
  text-align: start;
}
p {
  font-weight: bold;
}

.temperatura {
  margin-top: 50px;
}

@media (max-width: 768px) {
  .texto-weather {
    width: 90%;
    margin: 20px auto 0 auto;
    font-size: 16px;
    padding: 15px;
  }

  .btn-close {
    margin: 20px auto 0 20px;
    display: block;
  }
}

@media (max-width: 480px) {
  .texto-weather {
    width: 90%;
    margin: 15px auto 0 auto;
    font-size: 14px;
    padding: 10px;
  }

  .btn-close {
    margin-inline-start: 10px;
  }

  .temperatura {
    font-size: 14px;
  }
}

@media (min-width: 769px) {
  .texto-weather {
    width: 600px;
    margin-top: 125px;
    margin-inline-start: 625px;
    font-size: 20px;
    padding: 20px;
  }

  .btn-close {
    margin-inline-start: 1600px;
    margin-top: 30px;
    display: block;
  }

  .temperatura {
    font-size: 18px;
    margin-top: 50px;
  }
}
</style>
