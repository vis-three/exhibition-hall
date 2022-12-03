<template>
  <div class="App-container">
    <div class="app-title">vis-three-exhibition-hall</div>

    <div class="app-box">
      <div
        class="app-item"
        v-for="(item, index) in config"
        :index="index"
        @click="jump(item.url)"
      >
        <div class="app-preview">
          <img :src="item.url + '/preview.png'" alt="" />
        </div>
        <div class="app-message">
          <div class="app-name" v-text="item.name"></div>
          <div class="app-author">作者：{{ item.author }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, onUnmounted, reactive, ref } from "vue";

export default defineComponent({
  setup() {
    const getConfig = async () => {
      const res = await fetch(import.meta.env.BASE_URL + "/app.json");
      return await res.json();
    };

    const config = reactive<any[]>([]);

    getConfig().then((res: any[]) => {
      config.push(...res);
    });

    const getMessage = (item: any) => {
      return `${item.desp}:${item.author}`;
    };

    const jump = (url: string) => {
      window.open(import.meta.env.BASE_URL + url + "/index.html");
    };

    return {
      config,
      getMessage,
      jump,
    };
  },
});
</script>

<style scoped>
.App-container {
}

.app-title {
  margin: 40px;
  font-size: 48px;
  text-align: center;
}
.app-box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 20px;
}

.app-item {
  margin-right: 16px;
  margin-bottom: 16px;
  box-shadow: 2px 2px 6px rgb(51, 197, 255);
  padding: 8px;
  cursor: pointer;
  transition: all ease 800ms;
}

.app-item:hover {
  box-shadow: 2px 2px 12px rgb(255, 51, 238);
}

.app-preview {
  width: 15vw;
  height: 15vh;
  margin-bottom: 12px;
}

.app-preview > img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

.app-message {
  width: 100%;
  text-align: center;
}

.app-name {
  margin-bottom: 4px;
  font-weight: bold;
}

.app-author {
  font-size: 14px;
  color: grey;
}
</style>
