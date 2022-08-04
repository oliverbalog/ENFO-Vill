<template>
  <footer class="footer">
    <div class="container-fluid">
      <div class="row align-items-center justify-content-md-between">
        <div class="col-md-6">
          <div class="copyright">
            &copy; {{ year }}
            <a href="" target="_blank" rel="noopener">ENFO-Vill</a>, Developed:
            <a href="https://www.olivers.hu" target="_blank" rel="noopener"
              >Balog Olivér</a
            >
          </div>
        </div>
        <div class="col-md-6">
          <ul class="nav nav-footer justify-content-end">
            <li class="nav-item">
              <router-link to="/Energyopt" class="nav-link"
                >Energia felhasználás optimalizálás
              </router-link>
            </li>
            <li class="nav-item">
              <router-link to="/system_improve" class="nav-link"
                >Rendszer korszerűsítés</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/smarthome" class="nav-link"
                >Okos otthon rendszerek</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/boiler" class="nav-link"
                >Villanybojler karbantartás, telepítés</router-link
              >
            </li>
            <li class="nav-item">
              <router-link to="/electric" class="nav-link"
                >Elektromos hálózat és berendezés karbantartás</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  name: "app-footer",
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },
};
</script>
<style></style>
