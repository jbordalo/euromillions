<template>
    <div :class="{ selected }">
        <h1>{{ number }}</h1>
    </div>
</template>

<script>
import { eventBus } from "../../main.js";

export default {
    props: ["number"],
    data() {
        return { selected: false };
    },
    created() {
        eventBus.$on("numberClicked", (id) => {
            // Ensure message is for us
            if (id != this.number) return;

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
    background-color: rgb(120, 197, 248);
    margin-bottom: 5px;
}

h1 {
    font-size: 20px;
}

div:hover {
    background-color: rgb(4, 154, 255);
}

.selected {
    border: 3px solid red;
    background-color: rgb(4, 154, 255);
}

.selected:hover {
    background-color: rgb(120, 197, 248);
}
</style>