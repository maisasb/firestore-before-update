<script setup>
import { onMounted, ref } from "vue";

import { firestore } from "../plugins/firebase";
import { datadogRum } from "@datadog/browser-rum";

const collectionCount = ref(0);

onMounted(() => {
  getData();
});

const getData = async () => {
  try {
    const querySnapshot = await firestore.collection("users").get();
    collectionCount.value = querySnapshot.docs.length;
    console.log(collectionCount.value);
    datadogRum.addAction("test", { test: collectionCount.value });
  } catch (error) {
    console.log("Error getting documents: ", error);
  }
};

// const logout = () => {
//   signOut();
// };
</script>

<template>
  <div class="hello">
    Test Firestore with Namespace
    <div>{{ collectionCount }}</div>
    <!-- <button @click="logout">Logout</button> -->
  </div>
</template>
