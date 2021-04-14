<template>
    <div class="container">
        <div class="row">Numbers: {{ numbers }} <br />Stars: {{ stars }}</div>
        <br />

        <div class="row" v-for="row in 5" :key="row">
            <div
                class="col-sm-1"
                v-for="number in 10"
                :key="number + 10 * (row - 1)"
            >
                <app-number
                    :number="number + 10 * (row - 1)"
                    @click.native="processNumber(number + 10 * (row - 1))"
                ></app-number>
            </div>
        </div>
    </div>
</template>

<script>
// import { mapGetters } from "vuex";
import Number from "./Number.vue";

export default {
    data() {
        return {
            numbers: [],
            stars: [],
        };
    },
    methods: {
        processNumber(number) {
            console.log("Number: " + number);

            const index = this.numbers.indexOf(number);

            // Removing
            if (index !== -1) {
                console.log("log: removing " + number);
                this.numbers.splice(index, 1);
            } else {
                if (this.numbers.length == 5) {
                    console.log("log: numbers array is full");
                    return;
                }

                console.log("log: adding " + number);
                this.numbers.push(number);
            }

            // emit
        },
    },
    components: {
        appNumber: Number,
    },
};
</script>