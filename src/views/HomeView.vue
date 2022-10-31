<template>
  <main>
    <div class="container">
      <header>
        <h1>Welcome back, {{ user.name }}</h1>
        <span>You've got {{ tasks.length }} pending tasks.</span>
      </header>
      <SearchInput @searching="searchTaskByTitle" />
      <ol>
        <li v-for="(task, index) in tasks" :key="index">
          {{ task.title }}
        </li>
      </ol>
    </div>
  </main>
</template>

<script lang="ts">
import { computed, ComputedRef, defineComponent, onBeforeMount } from "vue";
import SearchInput from "@/components/SearchInput.vue";
import { Task } from "@/domain/entities/task";
import { User } from "@/domain/entities/user";
import store from "@/store";

export default defineComponent({
  components: { SearchInput },
  setup() {
    const user: User = new User(0, "Bellini");

    const tasks: ComputedRef<Task[]> = computed(
      () => store.getters["taskState/listOfAllTasks"]
    );

    const listAllTask = async () => {
      try {
        await store.dispatch("taskState/listAllTasks");
      } catch (e) {
        console.log(e);
      }
    };

    const searchTaskByTitle = (title: string) => {
      console.log(title);
    };

    onBeforeMount(listAllTask);

    return {
      user,
      tasks,
      searchTaskByTitle,
    };
  },
});
</script>

<style scoped>
main {
  width: 100%;
  height: 100%;
  display: flex;
}
.container {
  display: flex;
  flex-direction: column;
  max-width: 60rem;
  width: 100%;
  margin: 4rem auto 0;
}
</style>
