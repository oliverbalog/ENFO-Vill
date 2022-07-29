<template>
    <div>
        <hero></hero>
        <basic-elements></basic-elements>
        <inputs></inputs>
        <custom-controls></custom-controls>
        <javascript-components></javascript-components>
        <icons></icons>
        <carousel></carousel>
        <contact-form></contact-form>
    </div>
</template>
<script>
import Hero from "./components/Hero";
import BasicElements from "./components/BasicElements";
import Inputs from "./components/Inputs";
import CustomControls from "./components/CustomControls";
import JavascriptComponents from "./components/JavascriptComponents";
import Carousel from "./components/Carousel";
import Icons from "./components/Icons";
import ContactForm from "./components/ContactForm";

export default {
  name: "components",
  components: {
    Hero,
    BasicElements,
    Inputs,
    CustomControls,
    JavascriptComponents,
    Carousel,
    Icons,
    ContactForm
  }
};
</script>

    ContactForm