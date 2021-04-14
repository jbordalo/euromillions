<template>
    <div :class="{ selected }">
        <h1>{{ star }}</h1>
    </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
    props: ["star"],
    data() {
        return { selected: false };
    },
    created() {
        eventBus.$on("starClicked", (id) => {
            // Ensure message is for us
            if (id != this.star) return;

            this.selected = !this.selected;
        });
    },
};
</script>

<style scoped>
div {
    height: 50px;
    width: 50px;
    text-align: center;
    border: 2px solid black;
    background-color: rgb(243, 195, 150);
    margin-bottom: 5px;
}

h1 {
    font-size: 20px;
}

div:hover {
    background-color: rgb(246, 167, 93);
}

.selected {
    border: 2px solid rgb(255, 136, 0);
    background-color: rgb(246, 167, 93);
}

.selected:hover {
    background-color: rgb(243, 195, 150);
}
</style>