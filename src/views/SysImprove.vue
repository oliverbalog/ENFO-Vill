<template>
  <section class="energyoptsec my-0">
    <!-- <img class="filler-img" src="img/bg_smarthome.png" /> -->
    <div class="parallax">
    </div>
    <div class="container-fluid">
      <div class="col">
        <div class="row d-flex justify-content-center">
          <h1 class="title">
            Rendszer korszerűsítés
          </h1>
        </div>
      </div>
      <div class="descp-content">
        <p class="second-title">Világítástechnika</p>
        <p>
          A LED technológiának köszönhetően a modern világító testekkel jelentősen kisebb energia befektetéssel érhetjük el a szükséges megvilágítást. Köszönhetően a megannyi választható és variálható szín hőmérsékletnek szemünk épségét is óvhatjuk.
        </p>
        <p>
          Vállaljuk otthona megvilágításának korszerűsítését, átalakítását LED technológia kiépítését legyen szó akár egy hangulatos rejtett világításról vagy épület világítás korszerűsítéséről. 
        </p>
        <p class="second-title">Háztartási gépek</p>
        <p>
          Háztartásban használt villamos fogyasztók korszerűsítése energia takarékossági szempontok alapján is indokolt lehet. A technológia fejlődésének köszönhetően modern energiatakarékos gépek beszerzésével jelentős összegeket spórolhatunk meg így akár az egy befektetésnek is tekinthető mely idővel megtérül.
        </p>
        <p>
          Régebbi típusú háztartási gépein (hűtő, villanytűzhely-sütő, mosó vagy mosogató ép) történő fogyasztás mérést követően javaslatot teszünk annak cseréjére amennyiben az indokolt, valamint újonnan vásárolt gépek beüzemelését is vállaljuk.
        </p>
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
  p {
    margin-left: 1em;
  }
  .second-title{
    margin-left: 0;
  }
}
.parallax{
  background-image: url("/img/system_improve.webp");
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
  .descp-content{
  }
}

</style>
