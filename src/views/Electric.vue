<template>
  <section class="energyoptsec my-0">
    <!-- <img class="filler-img" src="img/bg_smarthome.png" /> -->
    <div class="parallax">
    </div>
    <div class="container-fluid">
      <div class="col">
        <div class="row d-flex justify-content-center">
          <h1 class="title">
            Energia fogyasztás feltérképezése
          </h1>
        </div>
      </div>
      <div class="descp-content">
        <p class="second-title">Cégeknek</p>
        <p>
          Elektromos elosztószekrény karbantartás:
        </p>
        <p>
          Vállaljuk elektromos kapcsolószekrények időszakos karbantartását takarítását üzemi és irodai környezetben. 
        </p>
        <ul>
          <li>Kötések ellenőrzése </li>
          <li>Portalanítás</li>
          <li>Hőkamerás felülvizsgálat</li>
          <li>Karbantartási jegyzőkönyv készítése</li>
        </ul>
        <p class="second-title">Lakossági</p>
        <p>
          Vállalkozásunk várja megkeresését elektromos hálózatban vagy berendezéseiben előforduló meghibásodások javítási igényeivel kapcsolatban is. 
        </p>
        <ul>
          <li>Kismegszakító csere</li>
          <li>Érintésvédelmi (Fi-relé) beszerelése</li>
          <li>Kapcsolók, dugaljak, világító berendezések cseréje  </li>
        </ul>
      </div>
      <div class="contact">
        <contact-form></contact-form>
      </div>
    </div>
  </section>
</template>
<script>

export default {

};
</script>
<style scoped>
/* .filler-img {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100vw !important;
  max-height: auto !important;
} */
.energyoptsec {
  min-height: 80vh !important;
  height: fit-content !important;
  padding-top: 6em;


  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 70%,
    rgb(110, 110, 110) 100%
  );
  z-index: -4;
}
@media only screen and (max-width: 600px) {
  .descp-content {
    margin-top: 10em !important;
  }
  .parallax{
    height: 34vh !important;
  }
}
.title:hover{
  transform: scale(2);
}
</style>

<style lang="scss" scoped>
.second-title{
  font-weight: bold;
  text-decoration: underline;
}
h1 {
  color: white !important;
}
.descp-content {
  margin-top: 50vh;
  border-radius: 5px;
  padding: .5em;
  font-size: 1em;
  color: rgb(0, 0, 0) !important;
  background: linear-gradient(
    180deg,
    rgb(255, 255, 255) 30%,
    #f4f5f7 100%
  );
  ul > li{
    font-size: 1.2em;
  }
  
}
.parallax{
  background-image: url("/img/electric.webp");
  height: 65vh;
  width: 100%;

  position: absolute;
  top: 0;

  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.descp-content > h3 {
    color: rgb(0, 0, 0) !important;
}
.descp2{
  margin-top: 1em;
}

p {
  font-size: 1.2em !important;
  font-weight: 500;
}
.container-fluid {
  width: 99vw;
}
.contact{
  margin-top: .8em;
}
.title{
  text-align:center;
  border: 2px solid rgb(24, 164, 192);
  padding: 1em;
  background-color: rgb(12, 88, 103,.8);
  backdrop-filter: blur(10px);
  border-radius: 4px;
  cursor:default;
  text-transform:uppercase;
  pointer-events: all !important;
  font-size: 1em;
  transition:cubic-bezier(0.075, 0.82, 0.165, 1) transform .5s;
  &:hover {
        transform: scale(1.2);
        transition:cubic-bezier(0.075, 0.82, 0.165, 1) all .5s;
    }
}
@media screen and (max-width: 600px) {
  .title:hover{
    transform: scale(1.05);
    transition:cubic-bezier(0.075, 0.82, 0.165, 1) all .5s;
  }
}

</style>
