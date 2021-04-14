<template>
    <div :class="{ selected }">
        <h1>{{ number }}</h1>
        <p>{{ this.selected }}</p>
    </div>
</template>

<script>
// import { mapGetters } from "vuex";
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
    },
    // computed: {
    //     ...mapGetters({ stocks: "stockPortfolio" }),
    // },
};
</script>

<style scoped>
div {
    border: 2px solid black;
    margin-bottom: 5px;
}

div:hover {
    background-color: antiquewhite;
}

.selected {
    border: 2px solid red;
}
</style>