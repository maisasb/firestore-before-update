<script setup>
// import { signIn } from "../plugins/firebase";
import { onMounted } from "vue";

onMounted(() => {
  localStorage.removeItem("local_user");
});
</script>

<template>
  <div class="login__content">
    <!-- <button
      class="login__button login__button--google"
      data-cy="login-button"
      @click="signIn"
    >
      Login com Google
    </button> -->
  </div>
</template>
