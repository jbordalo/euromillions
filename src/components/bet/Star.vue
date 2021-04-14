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
        eventBus.$on("resetSelected", () => {
            this.selected = false;
        });
    },
};
</script>

<style scoped>
div {
    height: 50px;
    width: 50px;
    text-align: center;
    border: 1px solid black;
    color: white;
    background-color: rgb(133, 210, 236);
    margin-bottom: 5px;
}

h1 {
    font-size: 20px;
}

div:hover {
    background-color: rgb(48, 179, 223);
}

.selected {
    border: 2px solid red;
    background-color: rgb(48, 179, 223);
}

.selected:hover {
    background-color: rgb(133, 210, 236);
}
</style>