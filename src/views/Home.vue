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
          height: 100%;
          z-index:-5"
          src="/img/bg_bulb22.png"
        />
        <div class="hero-text">
          <div class="row">
            <div class="col-md-8">
          <h2>Energia fogyasztás okosan</h2>
          <p class="dark-text">
            A tudatos energia hasznosítás a fenntartható jövő kulcsa!
          </p>
          <p class="dark-text">
            Legyen szó szerelvények cseréjéről (kapcsolók, dugaljak,
            lámpatestek) vezeték meghibásodásról vagy elektromos gép
            beüzemelésről ránk számíthat!
          </p>
          <p class="dark-text">
            Vállalkozásunk innovatív megoldásokat nyújtva szeretné kielégíteni
            elsősorban a lakossági felhasználók igényeit az alábbi
            kategóriákban:
          </p>
            </div>
          </div>
        </div>
      </section>
      <!-- 1st Hero Variation -->
    </div>
    <section class="section section-lg pt-lg-0 mt--200">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-12">
            <div class="row">
              <div class="col-lg-4 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-chart-bar-32"
                    type="primary"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-primary text-uppercase">
                    Energiafelhasználás optimalizálás
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
              <div class="col-lg-4 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon
                    name="ni ni-istanbul"
                    type="success"
                    rounded
                    class="mb-4"
                  >
                  </icon>
                  <h6 class="text-success text-uppercase">Build Something</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>
                  <div>
                    <badge type="success" rounded>business</badge>
                    <badge type="success" rounded>vision</badge>
                    <badge type="success" rounded>success</badge>
                  </div>
                  <base-button tag="a" href="#" type="success" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-4 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>
                  <div>
                    <badge type="warning" rounded>marketing</badge>
                    <badge type="warning" rounded>product</badge>
                    <badge type="warning" rounded>launch</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-6 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>
                  <div>
                    <badge type="warning" rounded>marketing</badge>
                    <badge type="warning" rounded>product</badge>
                    <badge type="warning" rounded>launch</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Learn more
                  </base-button>
                </card>
              </div>
              <div class="col-lg-6 mt-4">
                <card class="border-0" hover shadow body-classes="py-5">
                  <icon name="ni ni-planet" type="warning" rounded class="mb-4">
                  </icon>
                  <h6 class="text-warning text-uppercase">Prepare Launch</h6>
                  <p class="description mt-3">
                    Argon is a great free UI package based on Bootstrap 4 that
                    includes the most important components and features.
                  </p>
                  <div>
                    <badge type="warning" rounded>marketing</badge>
                    <badge type="warning" rounded>product</badge>
                    <badge type="warning" rounded>launch</badge>
                  </div>
                  <base-button tag="a" href="#" type="warning" class="mt-4">
                    Learn more
                  </base-button>
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

export default {
  name: "home",
};
</script>

<style lang="scss" scoped>
.container-2 {
}

@media only screen and (min-width: 600px) {
  .hero-text {
    width: 50% !important;
    float: left !important;
    justify-self: flex-start !important;
  }
}
.hero-text {
  margin-bottom: 10em;
  padding: 0.5em;
  padding-left: 2em;
  padding-right: 2em;
  margin-top: 3em;
  min-height: 25em;
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
    rgb(24, 164, 192) 10%,
    rgb(110, 110, 110) 80%
  );
}
</style>
