<template>
  <section class="energyoptsec my-0">
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
        <p>
          Az iparban már régóta alkalmazott eljárás a villamos energia
          felhasználásának optimalizálássá az energia költségek csökkentése és a
          környezetterhelés mérséklése érdekében.
        </p>
        <p>
          Napjainkra azonban az elektromos berendezések elterjedésének
          köszönhetően, valamint a magas energiaárak okán ennek a lakossági
          felhasználók körében is aktualitása van. Egy átlag családi házban
          számos elektromos berendezés található, melyek gyakran generálnak
          plusz költséget és energia fogyasztást a helytelen felhasználási mód,
          vagy az elmaradt karbantartások miatt. Ezeket a plusz költségek az
          energiafelhasználás monitorozásával gyorsan kiszűrhetők és hatékonyan
          kezelhetőek. Néhány egyszerű példát felsorakoztatva, mint például
          korszerűtlen világító berendezések, vízkő lerakódásokkal telt bojler,
          esetleges laza vagy régi vezeték csatlakozások, kötések, amelyek nem
          csak hogy energia veszteséget okoznak, de tűzveszélyesek is.
        </p>
        <p>
          Mérési eljárásunknak köszönhetően láthatóvá tudjuk tenni ezeket a
          rejtett költségeket és megismerheti a nagyobb fogyasztóinak, mint
          például villanytűzhely, elektromos vízmelegítő, hűtő, fagyasztó stb.
          üzemeltetési költségeit.
        </p>
        <p>
          A folyamat során a lakáselosztóba telepített fogyasztásmérő műszerrel
          a teljes családi ház vagy kiválasztott épületrész fogyasztását mérjük.
          Nagyobb felhasználási szigetekre (média sarok, munkaállomás) és a főbb
          fogyasztókra almérőket helyezünk. Ezt követően ügyfelünknek nincs más
          teendője, mint addig felhasználási szokásainak megfelelően üzemeltesse
          eszközeit. Az egy hetes mérési periódust követően az adatokat ki
          elemezve pontos képet kapunk a berendezések üzemeltetési költségeit
          illetően és ezt felhasználva meghatározhatjuk a költségcsökkentés
          érdekében szükséges lépéseket. Felhasználási szokásaink
          optimalizálásával, és a szükséges karbantartások elvégzésével 10-20%
          közé tehető az energia megtakarítás. Ez egy átlagos felhasználó
          tekintetében havonta 4000-6000 Ft megtakarítást jelent. Amennyiben
          korszerűsítés is kivitelezhető, a megtakarítás jelentősen megnőhet.
        </p>
        <p>
          A kevesebb villamos energia felhasználása nem csak hogy pénztárcabarát,
          de ennek köszönhetően a környezetünket is óvhatjuk.
        </p>
        <h3 style="text-align:center; ">A jövő mindenki érdeke!</h3>
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
  
}
.parallax{
  background-image: url("/img/bg_smarthome.webp");
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
