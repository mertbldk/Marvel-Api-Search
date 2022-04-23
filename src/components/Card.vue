<template>
    <div id="MarvelCard" v-if="(index+1 <= PaginationNumber)">
        <div id="MarvelCardImg">
            <img :src="item.thumbnail.path + '/portrait_incredible.' + item.thumbnail.extension">
        </div>
        <div id="MarvelName">
            <div :title="item.name">{{item.name}}</div>
        </div>
        <div @click="MarvelHref" id="MarvelHref"></div>
    </div>
</template>

<script>
export default {
    props:['item','index','PaginationNumber'],
    methods: {
        MarvelHref(){
            this.$router.push({
                name : 'Character',
                params : {
                    id : this.item.id
                }
            })
        },
    },
}
</script>

