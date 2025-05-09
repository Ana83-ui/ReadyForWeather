<template>
  <header>
    <div class="top-bar">
      <h3 class="name-home">READY FOR WEATHER</h3>
    </div>
  </header>

  <main>
    <slot></slot>
    <!--permite renderizar el contenido de las vistas-->
  </main>

  <footer>
    <p>Website create by @AnaMolina</p>
  </footer>
</template>

<script setup></script>
<style>
.logo {
  width: 50px;
  border-radius: 100%;
  margin-inline-start: 230px;
  margin-top: 5px;
}
.top-bar,
footer {
  display: flex;
  gap: 10px;
  height: 50px;
  background-image: url(../assets/file-20220126-17-1i0g402.avif);
  filter: brightness(1);
  padding: 5px;
  margin: -8px;
  color: #fff;
}
header {
  height: 70px;
}
footer {
  justify-content: center;
  margin-top: 10px;
}
main {
  background-image: url(../assets/chuttersnap-M2-_GRvWWg0-unsplash.jpg);
  background-size: cover;
  filter: brightness(1);
  min-height: 820px;
}

.name-home {
  font-family: "Montserrat Underline";
  font-weight: bold;
  color: #001750;
  color: #fff;
  font-size: 1.5rem;
  margin-inline-start: 800px;
}

@media (max-width: 768px) {
  .logo {
    margin-inline-start: 20px;
    width: 40px;
  }

  .top-bar,
  footer {
    flex-direction: column;
    height: auto;
    padding: 15px;
    justify-content: center;
  }

  .name-home {
    font-size: 1.2rem;
    margin-inline-start: 20px;
    text-align: center;
  }

  header {
    height: 60px;
  }

  main {
    min-height: 600px;
  }
}

@media (max-width: 480px) {
  .logo {
    width: 35px;
    margin-inline-start: 15px;
  }

  .top-bar,
  footer {
    flex-direction: column;
    height: auto;
    padding: 10px;
  }

  .name-home {
    font-size: 1rem;
    margin-inline-start: 0;
    text-align: center;
  }

  header {
    height: 50px;
  }

  main {
    min-height: 500px;
  }
}
</style>
