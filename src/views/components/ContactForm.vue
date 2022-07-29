<template>
<section class="contactsec section section-shaped section-lg my-0">
  <div class="">
    <div class="row justify-content-center">
      <div class="col-lg-10 col-md-10 col-sm-12">
        <card type="secondary" shadow
                          header-classes="bg-white pb-5"
                          body-classes="px-lg-5 py-lg-5"
                          class="border-0">

    <h5 style="text-align:center;">Keressen minket az árajánlatért!</h5>
    <form role="form">
      <div class="row">
        <div class="col-12">
          <div class="row">
            <div class="col-12 item">
              <base-input
                alternative
                class="mb-3"
                placeholder="Név"
                addon-left-icon="ni ni-badge"
              >
              </base-input>
            </div>
          </div>
          <div class="row">
            <div class="col-12 item">
              <base-input
                alternative
                class="mb-3"
                placeholder="Email"
                addon-left-icon="ni ni-email-83"
              >
              </base-input>
            </div>
          </div>
          <div class="item text-center">
            <base-button type="primary" class="my-4 btn"
              >Ajánlatkérés</base-button
            >
          </div>
        </div>
      </div>
    </form>

        </card>
      </div>
    </div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>
.section-shaped{
  padding-top: .5em !important;
  padding-bottom: .5em !important;
}
</style>
