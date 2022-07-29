<template>
  <section class="energyoptsec section section-shaped section-lg my-0">
    <img class="filler-img" src="img/bg_smarthome.png" />

    <div class="container-fluid">
      <div class="col">
        <div class="row d-flex justify-content-center">
          <h1 style="text-align:center;">
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
          plusz költséget és energia fogyasztás a helytelen felhasználási mód
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
          illetően és ezt felhasználva m eghatározhatjuk a költségcsökkentés
          érdekében szükséges lépéseket. Felhasználási szokásaink
          optimalizálásával, és a szükséges karbantartások elvégzésével 10-20%
          közé tehető az energia megtakarítás. Ez egy átlagos felhasználó
          tekintetében havonta 4000-6000 Ft megtakarítást jelent. Amennyiben
          korszerűsítés is kivitelezhető a megtakarítás jelentősen megnőhet.
        </p>
        <p>
          A kevesebb villamos energia felhasználása nem csak hogy pénztárcabarát
          de ennek köszönhetően a környezetünket is óvhatjuk.
        </p>
        <h3 style="text-align:center; ">A jövő mindenki érdeke!</h3>
        <contact-form></contact-form>
      </div>
    </div>
  </section>
</template>
<script>
import ContactForm from "./components/ContactForm";
export default {
  components: { ContactForm },
};
</script>
<style scoped>
.filler-img {
  position: absolute;
  z-index: -2;
  top: 0;
  left: 0;
  width: 100vw !important;
  max-height: auto !important;
}
.energyoptsec {
  min-height: 80vh !important;
  height: fit-content !important;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    180deg,
    rgb(0, 0, 22) 70%,
    rgb(110, 110, 110) 100%
  );
  z-index: -4;
}
@media only screen and (max-width: 600px) {
  .descp-content {
    margin-top: 5em !important;
  }
}
</style>

<style scoped>
h1 {
  color: white !important;
}
.descp-content {
  margin-top: 50vh;
  background-color: rgba(255, 255, 255, 1);
  box-shadow: 0 0 10px 1px;
  border-radius: 6px;
  padding: 1em;
  font-size: 1.2em;
  color: black !important;
}

p {
  font-size: 1.2em !important;
  font-weight: 500;
}
.container-fluid {
  width: 90% !important;
}
</style>
