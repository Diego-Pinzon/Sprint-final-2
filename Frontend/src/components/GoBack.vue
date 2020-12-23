<template>
    <v-app id="inspire">
        <div class="text-center">
            <v-btn
                rounded
                color="info"
                dark
                elevation="7"
            >
                Regresar
            </v-btn>
        </div>
    </v-app>
</template>
<script>
export default {
    methods: {
        goBack() {
            return this.$router.go(-1);
        }
    }
};
</script>

<style scoped>
.go-back {
    display: flex;
    cursos: pointer;
}
button {
    border: 0;
}
</style>