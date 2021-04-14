<template>
    <div>
        <div class="game" v-for="game in games" :key="game.id">
            <h2>{{ game.title }}</h2>

            <h3>
                {{
                    game.description === ""
                        ? "No description"
                        : game.description
                }}
            </h3>

            <div
                class="circle number"
                v-for="number in game.numbers"
                :key="number"
            >
                {{ number }}
            </div>
            <br />
            <div class="circle star" v-for="star in game.stars" :key="star">
                {{ star }}
            </div>

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

<style scoped>
.game {
    border: 1px solid black;
    font-size: 20px;
    padding-left: 10px;
    text-align: center;
}

h2 {
    margin-bottom: 5px;
}
h3 {
    margin-top: 5px;
}

.circle {
    width: 50px;
    height: 50px;
    padding: 10px;
    margin: 5px;
    border-radius: 50%;
}

.number {
    display: inline-block;
    border: 2px solid blue;
    color: white;
    background-color: rgb(4, 154, 255);
}

.star {
    display: inline-block;
    border: 2px solid rgb(122, 205, 233);
    color: white;
    background-color: lightblue;
}
</style>