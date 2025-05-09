<template>
  <div>
    <h3>Tips:</h3>
    <p>{{ clothingRecommendation }}</p>
  </div>
</template>

<script setup>
import { computed } from "vue";
const props = defineProps({
  temperature: Number,
  humidity: Number,
});
const clothingRecommendation = computed(() => {
  let recommendation = "";
  if (props.temperature <= 0 && props.humidity <= 40) {
    recommendation =
      "❄️ Frío seco nivel pingüino. Abrígate como si fueras a escalar el Everest: abrigo, guantes, bufanda… ¡y café caliente en mano! ☕";
  } else if (
    props.temperature > 0 &&
    props.temperature <= 5 &&
    props.humidity < 80
  ) {
    recommendation =
      "🌧️ Frío húmedo, ese que se te mete en los huesos. Ponte capas como una cebolla impermeable 🧅 y cuida tus pies: calcetines secos o lloras. 🦶";
  } else if (
    props.temperature > 5 &&
    props.temperature <= 10 &&
    props.humidity < 40
  ) {
    recommendation =
      "🧥 Fresco seco, ideal para sacar esa chaqueta cool que no abriga pero te hace ver con estilo. 😎 ¡Solo no te confíes, lleva algo para el cuello! 🧣";
  } else if (
    props.temperature > 10 &&
    props.temperature <= 20 &&
    props.humidity >= 40
  ) {
    recommendation =
      "🍂 Fresco con estilo. Una chaqueta ligera y actitud de 'hace un poco de frío pero no lo suficiente como para quejarse'. 😌 Bufandita opcional. 🧣";
  } else if (
    props.temperature >= 10 &&
    props.temperature < 15 &&
    props.humidity >= 80
  ) {
    recommendation =
      "🌦️ Fresco y húmedo: el clima favorito del frizz. 😜 Chaqueta impermeable, buen humor, y evita abrazar árboles mojados. 🌳";
  } else if (
    props.temperature >= 15 &&
    props.temperature <= 20 &&
    props.humidity <= 40
  ) {
    recommendation =
      "🌞 Clima agradable y seco. ¡Por fin un respiro del caos! 😍 Camiseta, sonrisa y ganas de pasear. 🚶 Pero no olvides el protector solar, el sol no perdona. ☀️";
  } else if (
    props.temperature >= 15 &&
    props.temperature <= 20 &&
    props.humidity > 80
  ) {
    recommendation =
      "🌧️ Calorcito húmedo, como vivir dentro de una sopa. 🍲 Ropa fresca, botella de agua 💧 y cero ganas de abrazos sudados. 🥵";
  } else if (
    props.temperature >= 20 &&
    props.temperature <= 30 &&
    props.humidity >= 40
  ) {
    recommendation =
      "🔥 Calor seco: el horno está prendido, pero al menos no te pega en la cara. 🏜️ Ropa ligera, gafas de sol 🕶️ y mentalidad de lagarto al sol. 🦎";
  } else if (
    props.temperature >= 20 &&
    props.temperature < 25 &&
    props.humidity >= 80
  ) {
    recommendation =
      "🌴 Calor húmedo tipo sauna. Viste como si fueras al trópico: algodón, sandalias 👡, y agua como si fuera tu religión. 💦";
  } else if (
    props.temperature >= 25 &&
    props.temperature <= 30 &&
    props.humidity <= 40
  ) {
    recommendation =
      "🔥 Calor intenso: ropa ligera, abanico en mano 🌬️ y actitud de 'no me hables hasta que baje el sol'. 😤 Protector solar sí o sí. 🧴";
  } else if (
    props.temperature >= 25 &&
    props.temperature <= 30 &&
    props.humidity > 80
  ) {
    recommendation =
      "🌞 Bochorno nivel jungla. Necesitas ropa que apenas sientas, un ventilador portátil 🌪️ y la sabiduría para evitar el sol del mediodía. ☀️";
  } else if (props.temperature > 30 && props.humidity >= 40) {
    recommendation =
      "🌵 Modo desierto activado. Ropa suelta, hidratación máxima 💦, y si puedes meterte en una nevera, mejor. ❄️";
  } else if (props.temperature > 30 && props.humidity >= 80) {
    recommendation =
      "🔥🌴 Infierno tropical. Ropa mínima, actitud zen 🧘 y aire acondicionado como tu mejor amigo. 🌀 No luches contra el clima. Sobrevive. 🏝️";
  }

  return recommendation;
});
</script>

<style></style>
