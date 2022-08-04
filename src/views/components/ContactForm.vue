<template>
  <section class="contactsec section section-shaped section-lg my-0">
    <div class="">
      <div class="row justify-content-center">
        <div class="col-lg-6 col-md-10 col-sm-12">
          <card
            type="secondary"
            shadow
            header-classes="bg-white pb-5"
            body-classes="px-lg-5 py-lg-5"
            class="border-0"
          >
            <h5 style="text-align:center; color:black; margin-bottom: 1em;">
              Ajánlat kéréssel kapcsolatban keressen bizalommal!
            </h5>
            <form role="form">
              <div class="row">
                <div class="col-12">
                  <div class="row">
                    <div class="col-12 item">
                      <base-input
                        v-model="contact_name"
                        alternative
                        class="mb-3"
                        placeholder="Név"
                        :valid="is_name_valid"
                        :invalid="is_name_invalid"
                        addon-left-icon="ni ni-badge"
                      >
                      </base-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 item">
                      <base-input
                        v-model="contact_email"
                        alternative
                        class="mb-3"
                        placeholder="Email"
                        :valid="is_email_valid"
                        :invalid="is_email_invalid"
                        addon-left-icon="ni ni-email-83"
                      >
                      </base-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 item">
                      <base-input
                        v-model="contact_phone"
                        alternative
                        class="mb-3"
                        placeholder="Telefonszám"
                        :valid="is_phone_valid"
                        :invalid="is_phone_invalid"
                        addon-left-icon="fa fa-phone"
                      >
                      </base-input>
                    </div>
                  </div>
                  <div class="row">
                    <div class="col-12 item">
                      <custom-textfield
                        is_textfield
                        v-model="contact_text"
                        :valid="is_text_valid"
                        :invalid="is_text_invalid"
                        alternative
                        class="mb-3"
                        placeholder="Üzenet"
                        addon-left-icon="fa fa-commenting"
                      >
                      </custom-textfield>
                    </div>
                  </div>
                  <div class="item text-center">
                    <base-button @click="send" type="primary" class="my-4 btn"
                      >Ajánlatkérés</base-button
                    >
                  </div>
                </div>
              </div>
            </form>
            <h5
              v-if="this.has_response"
              style="text-align:center; color:green; margin-bottom: 1em;"
            >
              {{ this.contact_response.response }}
            </h5>
          </card>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "contact-form",
  data() {
    return {
      contact_name: "",
      contact_email: "",
      contact_phone: "",
      contact_text: "",
      contact_response: "",
    };
  },
  methods: {
    async send() {
      if (
        this.is_name_valid &&
        !this.is_phone_invalid &&
        this.is_text_valid &&
        !this.is_email_invalid
      ) {
        const url = "https://enfo-vill.herokuapp.com/sendmail";
        const params = {
          body: JSON.stringify({
            name: this.contact_name,
            email: this.contact_email,
            phone: this.contact_phone,
            message: this.contact_text,
          }),
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          }
        };

        const dresponse = await fetch(url, params);
        this.contact_response = await dresponse.json();
      }
    },
  },
  computed: {
    has_response() {
      return this.contact_response.response;
    },
    is_name_valid() {
      if (
        this.contact_name.length > 4 &&
        /^[ a-zA-ZàèìòùÀÈÌÒÙáéíóúýÁÉÍÓÚÝâêîôûÂÊÎÔÛãñõÃÑÕäëïöüÿÄËÏÖÜŸçÇßØøÅåÆæœ'`'\-]+$/.test(
          this.contact_name
        )
      ) {
        return true;
      }
      return false;
    },
    is_name_invalid() {
      if (!this.is_name_valid && this.contact_name.length !== 0) {
        return true;
      }
      return false;
    },
    is_email_valid() {
      if (
        this.contact_email.length > 4 &&
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.contact_email)
      ) {
        return true;
      }
      return false;
    },
    is_email_invalid() {
      if (!this.is_email_valid && this.contact_email.length !== 0) {
        return true;
      }
      return false;
    },
    is_phone_valid() {
      if (
        this.contact_phone.length > 4 &&
        /((?:\+?3|0)6)(?:-|\()?(\d{1,2})(?:-|\))?(\d{3})-?(\d{3,4})/.test(
          this.contact_phone
        )
      ) {
        return true;
      }
      return false;
    },
    is_phone_invalid() {
      if (!this.is_phone_valid && this.contact_phone.length !== 0) {
        return true;
      }
      return false;
    },
    is_text_valid() {
      if (this.contact_text.length > 10) {
        return true;
      }
      return false;
    },
    is_text_invalid() {
      if (!this.is_text_valid && this.contact_text.length > 0) {
        return true;
      }
      return false;
    },
  },
};
</script>

<style scoped>
.section-shaped {
  padding-top: 0.5em !important;
  padding-bottom: 0.5em !important;
}
</style>
