<template>
    <div class="container">
        <br />
        <!-- TITLE -->
        <div class="row">
            <label style="padding-right: 49px">Title: </label>
            <input type="text" v-model="title" />
        </div>
        <!-- DESCRIPTION -->
        <div class="row">
            <label>Description: </label>
            <input type="text" v-model="description" />
        </div>
        <!-- NUMBERS -->
        <h2>Numbers</h2>
        <br />
        <div class="row" v-for="row in 5" :key="'Number' + row">
            <div
                class="col-md-1 col-xs-4"
                v-for="number in 10"
                :key="'Number' + (number + 10 * (row - 1))"
            >
                <app-number
                    :number="number + 10 * (row - 1)"
                    @click.native="processNumber(number + 10 * (row - 1))"
                ></app-number>
            </div>
        </div>
        <br /><br />
        <!-- STARS -->
        <h2>Stars</h2>
        <br />
        <div class="row" v-for="row in 2" :key="'Star' + row">
            <div
                class="col-sm-1"
                v-for="star in 6"
                :key="'Star' + (star + 6 * (row - 1))"
            >
                <app-star
                    :star="star + 6 * (row - 1)"
                    @click.native="processStar(star + 6 * (row - 1))"
                ></app-star>
            </div>
        </div>
        <br />
        <!-- SUBMIT -->
        <div class="pull-left">
            <button
                class="btn btn-info"
                @click="saveGame"
                :disabled="
                    numbers.length !== 5 ||
                    stars.length !== 2 ||
                    this.title.trim() === ''
                "
            >
                Submit
            </button>
        </div>
    </div>
</template>

<script>
import { mapActions } from "vuex";
import Number from "./Number.vue";
import Star from "./Star.vue";
import { eventBus } from "../../main.js";

export default {
    data() {
        return {
            title: "",
            description: "",
            numbers: [],
            stars: [],
            NUMBERS_LIMIT: 5,
            STARS_LIMIT: 2,
        };
    },
    methods: {
        ...mapActions(["addGame"]),
        processNumber(number) {
            const index = this.numbers.indexOf(number);

            // Removing
            if (index !== -1) {
                console.log("log: removing number " + number);
                this.numbers.splice(index, 1);
            } else {
                if (this.numbers.length == this.NUMBERS_LIMIT) {
                    console.log("log: numbers array is full");
                    return;
                }

                console.log("log: adding number " + number);
                this.numbers.push(number);
            }

            // emit
            eventBus.$emit("numberClicked", number);
        },
        processStar(star) {
            const index = this.stars.indexOf(star);

            // Removing
            if (index !== -1) {
                console.log("log: removing star " + star);
                this.stars.splice(index, 1);
            } else {
                if (this.stars.length == this.STARS_LIMIT) {
                    console.log("log: stars array is full");
                    return;
                }

                console.log("log: adding star " + star);
                this.stars.push(star);
            }

            // emit
            eventBus.$emit("starClicked", star);
        },
        saveGame() {
            // { title, description, numbers, stars }
            const game = {
                title: this.title,
                description: this.description,
                numbers: this.numbers,
                stars: this.stars,
            };
            console.log("log: saving game ");
            console.log(game);

            this.addGame(game);

            // Prepare for next bet
            this.resetBet();
        },
        resetBet() {
            this.numbers = [];
            this.stars = [];
            this.title = "";
            this.description = "";
            eventBus.$emit("resetSelected");
        },
    },
    components: {
        appNumber: Number,
        appStar: Star,
    },
};
</script>
