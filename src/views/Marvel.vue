<template>
    <div id="MarvelContainer">
        <div id="MarvelCap">
            <Card v-for="(item,index) in CharacterResult" :key="item.id" :index="index" :item="item" :PaginationNumber="PaginationNumber * 15"/>
            {{CharacterQuery}}
        </div>
        <div id="MarvelPagination">
            <div v-if="(Math.ceil(CharacterResult.length / 15) > PaginationNumber)" @click="Page(PaginationNumber+1)" id="MarvelPaginationCap">click to see more ({{CharacterResult.length - (PaginationNumber * 15)}})</div>
            <div v-else @click="Page(1)" id="MarvelPaginationCap">close all</div>
        </div>
    </div>
</template>

<script>
import Card from '../components/Card.vue';
export default {
    components : {Card},
    data() {
        return {
            CharacterResult : '',
            PaginationNumber : '',
        }
    },
    methods: {
        CharacterDataF(event){

            if(event == "" || event == undefined || event == null) {
                this.$router.push('/Error')
            }

            else{
                this.$store.dispatch('CharacterData',event)
                .then((element)=>{
                    if(element.data.results == "") this.$router.push('/Error')
                    else this.CharacterResult = element.data.results;
                });
            }

        },
        Page(event){
            this.$router.push({
                name : 'Marvel',
                query : {
                    CharacterName : this.$route.query.CharacterName,
                    pageID : this.PaginationNumber = event
                },
            });
        }
    },
    computed:{
        CharacterQuery(){
            return this.CharacterDataF(this.$route.query.CharacterName)
        },
    },
    updated() {
        this.PaginationNumber = +this.$route.query.pageID;
    },
}
</script>
