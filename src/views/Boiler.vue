<template>
  <section class="energyoptsec my-0">
    <!-- <img class="filler-img" src="img/bg_smarthome.png" /> -->
    <div class="parallax">
    </div>
    <div class="container-fluid">
      <div class="col">
        <div class="row d-flex justify-content-center">
          <h1 class="title">
            Villanybojler karbantartás-telepítés
          </h1>
        </div>
      </div>
      <div class="descp-content">
        <p class="second-title">Telepítés</p>
        <p>
          Nemrégiben még egyértelmű választásnak tűnt, ha lehetőség adott volt akkor a melegvíz előállítását leggazdaságosabban gázbojler felhasználásával érhettük el. Ám ez mostanra már nem ennyire egyértelmű dolog. Az egekbe szökött gáz árak és a gázbojlerek magas telepítési költségei miatt jobb választás lehet egy modern elektromos bojler beszerzése. A mai modern készülékek képesek megtanulni melegvíz felhasználási szokásainkat és ezen igényeknek megfelelően csak a szükséges melegvíz mennyiséget fűti így mindig biztosak lehetünk benne, hogy csak a szükséges energiát használtuk fel a melegvíz előállítására. 
        </p>
        <p>
          Bojlerek cseréjével telepítésével kapcsolatban is várjuk kedves ügyfeleink megkeresését.
        </p>
        <p class="second-title">Bojler karbantartás</p>
        <p>
          A villanybojler bár igen kevés figyelmet igényel alkalmanként szükséges karbantartanunk. A csapvízben megtalálható ásványi anyagok melegítés hatására a vízből kiváló vízkövet képeznek mely 2-3 év alatt a bojlerben a fűtőszál köré lerakódást képeznek. Ez a lerakódás 2-3 év alatt akár 2-5 kg is lehet, ami azt jelenti, hogy a fűtőszál teljesítményének 50-70% kárba vész és csak a vízkövet melegíti. Amennyiben sercegő hangot hall fűtés közben vagy a megszokotthoz képest csökkent a melegvíz hőmérséklete szinte biztos, hogy a probléma önnél is fennáll. Karbantartás során egy újnevezett aktív anód rúd cseréje is indokolt lehet. Ez az alkatrész felel a bojler test épségéért. Az anód rúd egy magnézium ötvözet mely a vasnál kevésbé nemes anyag így a „önfeláldozó” módon védi a vas és réz elemeket a korróziótól. 
        </p>
        <p>
          Karbantartás során tömítések cseréje minden esetben szükséges!
        </p>
        <p>Bojlerek karbantartásával kapcsolatban is várjuk szíves megkeresésüket!</p>
        <p>Bojler vízkő eltávolítás ára 20000-35000 Ft közé tehető a felhasznált anyagok és a különböző gyártók függvényében. </p>
        <p>A fenti ár nem tartalmazza az esetlegesen felmerülő további javításokat, mint pl.: hőfok szabályzó, vezérlő panel, hőelem stb. meghibásodások javítása</p>
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
  background-image: url("/img/boiler.webp");
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
