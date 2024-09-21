<template>
  <nav
    role="navigation"
    class="h-[50px] flex space-x-4 items-center justify-between p-4 bg-gray-800 text-white"
  >
    <a class="flex-shrink-0" href="/">
      <img
        src="https://dummyimage.com/46x30/323333/f2e6f2.png&text=CVL"
        alt="logo"
        class="w-12 h-8 rounded-lg"
      />
    </a>
    <div class="flex flex-grow items-center">
      <input
        type="search"
        name="q"
        v-model="keyword"
        autocapitalize="none"
        placeholder="e.g. naruto uploaded:7d"
        class="flex-grow p-2 border border-gray-600 rounded-l-md bg-gray-800 text-white placeholder-gray-400"
      />
      <button
        type="button"
        @click="addDocument"
        class="bg-blue-500 text-white p-2 rounded-r-md hover:bg-blue-600"
      >
        <i class="fa fa-search fa-lg"></i>
      </button>
    </div>
    <button
      class="bg-gray-600 text-white p-2 rounded-md hover:bg-gray-700 w-12"
    >
      <i class="fa fa-bars"></i>
    </button>
  </nav>
  <div id="content">
    <section
      id="image-container"
      class="relative w-full bg-gray-900 h-full overflow-auto"
      :style="{ height: `calc(var(--vh, 1vh) * 100 - 135px)` }"
      @click="handleContainerClick"
    >
      <!-- Overlay areas for navigation -->
      <div
        class="absolute left-0 top-0 bottom-0 w-1/2"
        @click.stop.prevent="prevImage"
      ></div>
      <div
        class="absolute right-0 top-0 bottom-0 w-1/2"
        @click.stop.prevent="nextImage"
      ></div>
      <template v-if="processedDocs.length > 0">
        <img
          :src="processedDocs[0].apiResponse.results[index].imageUrl"
          class="w-full h-full object-cover"
          alt="Image"
        />
      </template>
      <div
        v-if="loading"
        class="w-full h-full flex items-center justify-center"
      >
        <i class="fa fa-spinner fa-spin fa-5x"></i>
      </div>
    </section>
    <section
      class="h-[35px] flex items-center justify-between p-4 bg-gray-700 text-white"
    >
      <button type="button" @click="addDetailDocument">
        More like this {{ detailTags }}
      </button>
      <div>Add to favorites</div>
    </section>
    <section
      class="h-[50px] flex items-center justify-between p-4 bg-gray-800 text-white"
    >
      <div class="flex items-center">
        <a class="text-white hover:text-gray-400" href="/g/522416/">
          <i class="fa fa-reply"></i>
        </a>
      </div>
      <div class="flex items-center space-x-2">
        <a class="invisible" href="#">
          <i class="fa fa-chevron-left"></i><i class="fa fa-chevron-left"></i>
        </a>
        <a class="invisible" href="#">
          <i class="fa fa-chevron-left"></i>
        </a>
        <button class="bg-transparent text-white border-none">
          <span class="font-semibold">{{ index + 1 }}</span>
          <span class="mx-1">of</span>
          <span v-if="processedDocs.length > 0">{{
            processedDocs[0].apiResponse.results.length
          }}</span>
        </button>
        <a href="/g/522416/2/" class="text-white hover:text-gray-400">
          <i class="fa fa-chevron-right"></i>
        </a>
        <a href="/g/522416/433/" class="text-white hover:text-gray-400">
          <i class="fa fa-chevron-right"></i><i class="fa fa-chevron-right"></i>
        </a>
      </div>
      <div class="flex items-center">
        <button class="bg-transparent text-white border-none">
          <i class="fa fa-cog"></i>
        </button>
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, onUnmounted } from "vue";
import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  onSnapshot,
  limit,
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
    const params = new URLSearchParams(window.location.search);
    const keyword = ref(params.get("keyword") || "");
    const index = ref<number>(0);
    const loading = ref(false);
    const processedDocs = ref<any[]>([]); // Adjust type as needed
    const detailTags = ref<string>("");

    const addDocument = async () => {
      loading.value = true;
      index.value = 0;
      try {
        await addDoc(collection(db, "images"), {
          keyword: keyword.value,
          limit: 300,
          skip: 0,
          processed: false,
        });
        console.log("Document added");
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        loading.value = false;
      }
      await listenForProcessedDocuments();
    };

    const addDetailDocument = async () => {
      loading.value = true;
      try {
        await addDoc(collection(db, "details"), {
          id: processedDocs.value[0].apiResponse.results[index.value]._id,
          processed: false,
        });
        console.log("Detail Document added");
      } catch (error) {
        console.error("Error adding document: ", error);
      } finally {
        loading.value = false;
      }
      await listenForProcessedDetailDocuments();
    };

    const listenForProcessedDetailDocuments = () => {
      const q = query(
        collection(db, "details"),
        where("processed", "==", true),
        where(
          "id",
          "==",
          processedDocs.value[0].apiResponse.results[index.value]._id
        ),
        limit(1) // Restrict the query to return only one document
      );

      onSnapshot(q, (querySnapshot) => {
        detailTags.value = "";
        querySnapshot.forEach((doc) => {
          const data = doc.data().apiResponse;
          const customPrompt = data.customPrompt;
          const tags = data.tagGroups.map(
            (tagGroup: any) => tagGroup.tags[0].names[0].value
          );
          console.log(customPrompt + tags.join(" "));
          const searchPrompt = customPrompt + tags.join(" ");
          window.open(`/?keyword=${searchPrompt}`, "_blank");
        });
      });
    };

    const listenForProcessedDocuments = () => {
      const q = query(
        collection(db, "images"),
        where("processed", "==", true),
        where("keyword", "==", keyword.value) // Filter by the keyword
      );

      onSnapshot(q, (querySnapshot) => {
        processedDocs.value = [];
        querySnapshot.forEach((doc) => {
          processedDocs.value.push({ id: doc.id, ...doc.data() });
        });

        // Preload images in batches of 10 after processing documents
        const imageUrls = processedDocs.value
          .map((doc) =>
            doc.apiResponse.results.map((result: any) => result.imageUrl)
          )
          .flat();
        preloadImagesBatch(imageUrls);
      });
    };

    const preloadImagesBatch = (
      imageUrls: string[],
      startIndex = 0,
      batchSize = 10
    ) => {
      const batch = imageUrls.slice(startIndex, startIndex + batchSize);
      batch.forEach((url) => {
        const img = new Image();
        img.src = url; // Start loading the image
      });

      const nextBatchStart = startIndex + batchSize;
      if (nextBatchStart < imageUrls.length) {
        setTimeout(() => {
          preloadImagesBatch(imageUrls, nextBatchStart, batchSize);
        }, 1000); // Optional delay between batches to control preloading speed
      }
    };

    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    };

    onMounted(() => {
      updateHeight();
      window.addEventListener("resize", updateHeight);
      // listenForProcessedDocuments();
    });

    onUnmounted(() => {
      window.removeEventListener("resize", updateHeight);
    });

    const nextImage = () => {
      if (
        index.value <
        processedDocs.value[0]?.apiResponse.results.length - 1
      ) {
        index.value++;
      }
    };

    const prevImage = () => {
      if (index.value > 0) {
        index.value--;
      }
    };

    const handleContainerClick = (event: any) => {
      const { offsetX, target } = event;
      const containerWidth = target.clientWidth;
      if (offsetX > containerWidth / 2) {
        nextImage();
      } else {
        prevImage();
      }
    };

    return {
      keyword,
      loading,
      addDocument,
      addDetailDocument,
      processedDocs,
      detailTags,
      index,
      handleContainerClick,
      nextImage,
      prevImage,
    };
  },
});
</script>

<style scoped>
/* Add any styles you need here */
</style>
