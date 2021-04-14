<template>
    <div :class="{ selected }">
        <h1>{{ number }}</h1>
        <p>{{ this.selected }}</p>
    </div>
</template>

<script>
// import { mapGetters } from "vuex";

export default {
    props: ["number"],
    data() {
        return { selected: false };
    },
    // computed: {
    //     ...mapGetters({ stocks: "stockPortfolio" }),
    // },
};
</script>

<style scoped>
div {
    border: 1px solid black;
    margin-bottom: 5px;
}

div:hover {
    background-color: antiquewhite;
}

.selected {
    border: 1px solid red;
}
</style>