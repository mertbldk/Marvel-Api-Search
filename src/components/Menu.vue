<template>
    <div id="MenuContainer">
        <router-link to="/" id="MenuLogo">
            <img src="../assets/marvellogo.png">
        </router-link>
        <div id="MenuSearchCap">
            <input @keyup.enter="Search" v-model="SearchValue" type="text" placeholder="Ara..">
            <button @click="Search"><fa icon="magnifying-glass"></fa></button>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            SearchValue : ''
        }
    },
    methods: {
        Search(){

            this.$router.push({
                name : 'Marvel',
                query : {
                    CharacterName : this.SearchValue,
                    pageID : 1
                },
            });

        }
    },
}
</script>
