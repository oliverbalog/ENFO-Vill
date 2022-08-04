<template>
  <div>
    <div class="position-relative">
      <!-- shape Hero -->
      <section class="section-shaped-1 my-0">
        <img
          style=" 
          object-fit: cover;
          position: absolute;
          top:0;
          width:100%;
          left:0;
          height: 100%;
          z-index:-5;"
          src="/img/bg_bulb22.webp"
        />
        <div class="hero-text">
          <div class="row text-for-hero">
            <div class="col-md-8">
              <h2>Energia fogyasztás okosan</h2>
              <p class="dark-text">
                A tudatos energia hasznosítás a fenntartható jövő kulcsa!
              </p>
              <div class="badges">
                <badge
                  style="margin-right:2em; margin-top:.8em;"
                  :rounded="true"
                  type="secondary"
                  >Villany szerelés</badge
                >
                <badge
                  style="margin-right:2em; margin-top:.8em;"
                  :rounded="true"
                  type="secondary"
                  >Bojler karbantartás</badge
                >
                <badge
                  style="margin-right:2em; margin-top:.8em;"
                  :rounded="true"
                  type="secondary"
                  >Okos fogyasztás mérés</badge
                >
              </div>
              <p class="dark-text">
                Legyen szó szerelvények cseréjéről (kapcsolók, dugaljak,
                lámpatestek) vezeték meghibásodásról vagy elektromos gép
                beüzemelésről ránk számíthat!
              </p>
              <p class="dark-text">
                Vállalkozásunk innovatív megoldásokat nyújtva szeretné
                kielégíteni elsősorban a lakossági felhasználók igényeit az
                alábbi kategóriákban:
              </p>
            </div>
          </div>
          <div class="row contact-row">
            <a class="link-reach phone-tag" href="" style="margin-right:1em;">
              <i class="ni ni-mobile-button mr-1"> </i>
              <span style="color:white !important;">+36-20-669-9150</span>
            </a>
            <a class="link-reach email-tag" href="">
              <i class="ni ni-email-83 mr-1"> </i>
              <span style="color:white !important; margin:auto;">
                info@enfo-vill.hu
              </span>
            </a>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="own-container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-1"></div>
              <div class="col-lg-2 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-chart-bar-32"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">
                    Energia felhasználás optimalizálás
                  </h6>
                  <p class="description mt-3">
                    Felhasznált energia mérés, elemzés: Az iparban már régóta
                    alkalmazott eljárás a villamos energia felhasználásának
                    optimalizálássá az energia költségek csökkentése, valamint a
                    környezetterhelés mérséklése érdekében...
                  </p>
                  <router-link to="energyopt" style="color:white !important;">
                    <base-button tag="a" type="primary" class="mt-4">
                      Tovább
                    </base-button>
                  </router-link>
                </card>
              </div>
              <div class="col-lg-2 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-bulb-61"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">
                    Rendszer korszerűsítés
                  </h6>
                  <p class="description mt-3">
                    Világítástechnika:
                  </p>
                  <p style="font-size: .85em; color:black;">
                    A LED technológiának köszönhetően a modern világító
                    testekkel jelentősen kisebb energia befektetéssel érhetjük
                    el a szükséges megvilágítást...
                  </p>
                  <p class="description mt-3">
                    Háztartási gépek:
                  </p>
                  <p style="font-size: .85em; color:black;">
                    Háztartásban használt villamos fogyasztók korszerűsítése
                    energia takarékossági szempontok alapján is indokolt
                    lehet...
                  </p>
                  <router-link
                    to="system_improve"
                    style="color:white !important;"
                  >
                    <base-button tag="a" type="primary" class="mt-4">
                      Tovább
                    </base-button>
                  </router-link>
                </card>
              </div>
              <div class="col-lg-2 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-mobile-button"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">
                    Okos otthon rendszerek:
                  </h6>
                  <p class="description mt-3">
                    Vezeték nélküli okos otthon rendszereink nagyszerű
                    lehetőséget biztosítanak a tudatos energia felhasználásra. A
                    felhasználói igényeknek megfelelően állíthatja be a melegvíz
                    előállítását, szabályozhatja és időzítheti világítási- és
                    fűtési eszközeit. Fogyasztásmérő berendezéseinkkel
                    monitorozhatja elektronika eszközeinek fogyasztását...
                  </p>
                  <router-link to="smarthome" style="color:white !important;">
                    <base-button tag="a" type="primary" class="mt-4">
                      Tovább
                    </base-button>
                  </router-link>
                </card>
              </div>

              <div class="col-lg-2 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="fa fa-shower"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>

                  <h6 class="text-primary text-uppercase">
                    Villanybojler karbantartás, telepítés
                  </h6>
                  <p class="description mt-3">
                    Telepítés
                  </p>
                  <p style="font-size: .85em; color:black;">
                    Nemrégiben még egyértelmű választásnak tűnt, ha lehetőség
                    adott volt akkor a melegvíz előállítását leggazdaságosabban
                    gázbojler felhasználásával érhettük el...
                  </p>
                  <p class="description mt-3">Karbantartás</p>
                  <p style="font-size: .85em; color:black;">
                    A villanybojler bár igen kevés figyelmet igényel
                    alkalmanként szükséges karbantartanunk...
                  </p>
                  <router-link to="boiler" style="color:white !important;">
                    <base-button tag="a" type="primary" class="mt-4">
                      Tovább
                    </base-button>
                  </router-link>
                </card>
              </div>

              <div class="col-lg-2 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="fa fa-bolt" type="primary" rounded class="mb-4">
                  </icon>
                  <h6 class="text-primary text-uppercase">
                    Elektromos hálózat és berendezés karbantartás
                  </h6>
                  <p class="description mt-3">
                    Cégeknek
                  </p>
                  <p style="color:black; font-size: .85em;">
                    Elektromos elosztószekrény karbantartás
                  </p>
                  <p class="description mt-3">
                    Lakossági
                  </p>
                  <p style="color:black; font-size: .85em;">
                    Vállalkozásunk várja megkeresését elektromos hálózatban vagy
                    berendezéseiben előforduló meghibásodások javítási
                    igényeivel kapcsolatban is...
                  </p>
                  <router-link to="electric" style="color:white !important;">
                    <base-button tag="a" type="primary" class="mt-4">
                      Tovább
                    </base-button>
                  </router-link>
                </card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Badge from "../components/Badge.vue";
export default {
  components: { Badge },
  name: "home",
};
</script>

<style lang="scss" scoped>
.container-2 {
}

@media only screen and (min-width: 769px) {
  .hero-text {
    width: 50% !important;
    float: left !important;
    justify-self: flex-start !important;
  }
}
@media screen and (max-width: 1250px) {
  .hero-text {
    backdrop-filter: blur(10px);
    width: 90%;
    box-shadow: 0 0 10px 0px black;
  }
}
.hero-text {
  margin-bottom: 10em;
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  margin-top: 3em;
  min-height: 34em;
  width: 100% !important;
  height: fit-content !important;
  /*     background-color: rgba(189, 141, 114, 0.3);
    box-shadow: 0 0 10px 1px black;
    border-radius: 10px; */
  .dark-text {
    font-size: 1.1em;
    font-weight: 800;
  }
}

.description {
  color: black !important;
  font-size: 1em !important;
  line-height: 1.6em;
}

.section {
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgb(24, 164, 192) 70%,
    rgb(110, 110, 110) 100%
  );
}

.boilericon {
  width: calc(100%);
}
.text-for-hero {
  /* border: 2px solid red; */
}

.own-container {
  display: flex !important;
  justify-content: center !important;
  align-content: center !important;
  margin-left: 1em;
  margin-right: 1em;
}

.contact-row {
  color: white;
  font-weight: bold;
  font-size: 1.5em;
  margin-top: 2em;
  margin-left: 0;
}
.badges{
  margin-top:-1em;
  margin-bottom: .8em;
}
</style>
