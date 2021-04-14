<template>
    <div>
        <div v-for="game in games" :key="game.id">
            Title: {{ game.title }} <br />
            Description:
            {{ game.description === "" ? "No description" : game.description }}
            <br />
            Numbers: {{ game.numbers }} <br />
            Stars: {{ game.stars }} <br />
            <br />
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        games() {
            return this.$store.getters.games;
        },
    },
};
</script>