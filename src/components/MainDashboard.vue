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
        value=""
        v-model="keyword"
        autocapitalize="none"
        placeholder="e.g. naruto uploaded:7d"
        class="flex-grow p-2 border border-gray-600 rounded-l-md bg-gray-800 text-white placeholder-gray-400"
      />
      <button
        type="button"
        @click="searchImages()"
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

      <img
        v-if="images.length > 0"
        :src="images[index].imageUrl"
        class="w-full h-full object-cover"
        alt="Image"
      />
      <div v-else class="w-full h-full flex items-center justify-center">
        <i class="fa fa-spinner fa-spin fa-5x"></i>
      </div>
    </section>
    <section
      class="h-[35px] flex items-center justify-between p-4 bg-gray-700 text-white"
    >
      <button type="button" @click="getMoreLikeThis">More like this</button>
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
          <span class="font-semibold">{{ meta.skip + index + 1 }}</span>
          <span class="mx-1">of</span>
          <span>{{ initialMeta.total + initialMeta.skip }}</span>
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
<script setup lang="ts">
import axios from "axios";
import { ref, onMounted, onUnmounted } from "vue";

const baseUrl = "http://192.168.1.4:3000";
const params = new URLSearchParams(window.location.search);
const keyword = ref(params.get("keyword") || "");
const images = ref<any[]>([]);
const index = ref<number>(0);

const meta = ref({
  keyword: keyword.value,
  limit: 10,
  skip: 0,
  total: 10,
});
const initialMeta = ref({
  keyword: keyword.value,
  limit: 10,
  skip: 0,
  total: 10,
});
const updateHeight = () => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
};

onMounted(() => {
  updateHeight();
  window.addEventListener("resize", updateHeight);
});

onUnmounted(() => {
  window.removeEventListener("resize", updateHeight);
});

const nextImage = async () => {
  index.value = index.value + 1;
  if (index.value == initialMeta.value.limit) {
    if (initialMeta.value.total == initialMeta.value.limit) {
      images.value = [];
      index.value = 0;
      await searchImages();
    }
    return;
  } else {
    await updateNext();
  }
};

const prevImage = async () => {
  await updatePrev();
  index.value = index.value - 1;
};

const handleContainerClick = (event) => {
  const { offsetX, target } = event;
  const containerWidth = target.clientWidth;
  if (offsetX > containerWidth / 2) {
    nextImage();
  } else {
    prevImage();
  }
};

const fetchImages = async () => {
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/images/${keyword.value}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

const updateNext = async () => {
  console.log(images.value[index.value]);
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/next/${keyword.value}`,
      headers: {
        "Content-Type": "application/json",
      },
      data: { ...images.value[index.value] },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};

const updatePrev = async () => {
  try {
    const response = await axios({
      method: "POST",
      url: `${baseUrl}/prev/${keyword.value}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(response.data);
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
const getMoreLikeThis = async () => {
  const image = images.value[index.value];
  try {
    const response = await axios({
      method: "GET",
      url: `${baseUrl}/image/${image.id}`,
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = response.data.data;
    const customPrompt = data.customPrompt;
    const tags = data.tagGroups.map(
      (tagGroup: any) => tagGroup.tags[0].names[0].value
    );
    const searchPrompt = customPrompt + tags.join(" ");
    window.open(`/?keyword=${searchPrompt}`, "_blank");
    // images.value = [];
    // keyword.value = searchPrompt;
    // await searchImages();
  } catch (error) {
    console.error("Error fetching images:", error);
  }
};
const sleep = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
const searchImages = async () => {
  const response = await fetchImages();
  images.value = [...response.data];
  meta.value = { ...response.meta };
  initialMeta.value = { ...response.meta };
  index.value = 0;
  await updateNext();
};
</script>
