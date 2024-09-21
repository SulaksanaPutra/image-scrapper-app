<template>
  <div>
    <input v-model="keyword" placeholder="Enter keyword" />
    <button @click="addDocument">Add Document</button>
    <div v-if="loading">Loading...</div>

    <h2>Processed Documents</h2>
    <ul>
      <li v-for="doc in processedDocs" :key="doc.id">
        {{ doc.keyword }} - {{ doc.apiResponse }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCwdS4H0dcEdNfGQ7BOUptagbMx_81hjhs",
  authDomain: "scrapper-a3247.firebaseapp.com",
  projectId: "scrapper-a3247",
  storageBucket: "scrapper-a3247.appspot.com",
  messagingSenderId: "680602738170",
  appId: "1:680602738170:web:4c21789e962b5fc5d11843",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default defineComponent({
  setup() {
    const keyword = ref("");
    const loading = ref(false);
    const processedDocs = ref<any[]>([]); // Adjust type as needed

    const addDocument = async () => {
      loading.value = true;
      try {
        const docRef = await addDoc(collection(db, "testCollection"), {
          keyword: keyword.value,
          limit: 10,
          skip: 0,
          processed: false,
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        loading.value = false;
      }
    };

    const fetchProcessedDocuments = async () => {
      loading.value = true;
      try {
        const q = query(
          collection(db, "testCollection"),
          where("processed", "==", true)
        );
        const querySnapshot = await getDocs(q);
        processedDocs.value = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      } catch (error) {
        console.error("Error fetching documents: ", error);
      } finally {
        loading.value = false;
      }
    };

    onMounted(() => {
      fetchProcessedDocuments(); // Fetch documents when the component mounts
    });

    return {
      keyword,
      loading,
      addDocument,
      processedDocs,
    };
  },
});
</script>

<style scoped>
/* Add any styles you need here */
</style>
