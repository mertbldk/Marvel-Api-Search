<template>
    <div id="CharacterContainer">
        <div id="CharacterCap">
            <div id="CharacterImg">
                <img :src="CharacterImg">
            </div>
            <div id="CharacterInfo">
                <div id="CharacterTitleCap">
                    <div id="CharacterTitleName" :title="CharacterName">{{CharacterName}}</div>
                    <div id="CharacterTitleDate">
                        <span>Release Date</span>
                        <span>{{CharacterDate}}</span>
                    </div>
                </div>
                <div id="CharacterText">
                    <p>{{CharacterText}}</p>
                </div>
                <div id="CharacterMore">
                    <a :href="CharacterUrl" target="_bland">Go For More</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            CharacterImg : '',
            CharacterName : '',
            CharacterDate : '',
            CharacterText : '',
            CharacterUrl : '',
        }
    },
    created() {

        this.$store.dispatch('CharacterID',this.$route.params.id)
        .then(element => {
            this.CharacterImg = element.data.results[0].thumbnail.path + "." + element.data.results[0].thumbnail.extension;
            this.CharacterName = element.data.results[0].name;
            this.CharacterDate = (new Date(element.data.results[0].modified).getDate() < 10 ? "0"+new Date(element.data.results[0].modified).getDate() : new Date(element.data.results[0].modified).getDate()) + "." + (new Date(element.data.results[0].modified).getDay() < 10 ? "0"+new Date(element.data.results[0].modified).getDay() : new Date(element.data.results[0].modified).getDay()) + "." + new Date(element.data.results[0].modified).getFullYear();
            this.CharacterText = element.data.results[0].description == "" ? 'No İnformation' : element.data.results[0].description;
            this.CharacterUrl = element.data.results[0].urls[0].url;
        });

    },
}
</script>