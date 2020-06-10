<template>
    <fragment>
        <b-modal size="lg" :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
            <b-carousel
                id="carousel-fade"
                style="text-shadow: 0px 0px 2px #000"
                fade
                indicators
                img-width="100%"
                img-height="200px !important"
            >
                <b-carousel-slide v-for="(item, index) in infoModal.content.images" :key="index" :img-src="item.image"></b-carousel-slide>
            </b-carousel>
            <p class="mb-0 mt-3">Content</p>
            <p><small>{{infoModal.content.content}}</small></p>
            <p class="mb-0">Location</p>
            <p class="mb-0"><small>{{infoModal.content.address}}</small></p>
            <gmaps-map :options="mapsData.options" style="height: 300px;">
                <gmaps-marker :options="mapsData.pos" />
            </gmaps-map>
        </b-modal>
    </fragment>
</template>

<script>
import { gmapsMap, gmapsMarker } from 'x5-gmaps'
export default {
    props: {
        infoData: {
            type: Object,
            default: null
        }
    },
    components: {
        gmapsMap,
        gmapsMarker
    },
    created() {
        this.$root.$refs.ModalDetails = this;
    },
    data() {
        return {
            infoModal: {
                id: 'info-modal',
                title: '',
                content: ''
            },
            mapsData: { 
                pos: {position: { lat: '', lng: '' }},
                options: {
                    center: { lat: '', lng: '' },
                    zoom: 12, 
                } 
            },
        }
    },
    methods: {
        info(item, index, button){
            this.infoModal.title = this.infoData.items.title
            this.infoModal.content = this.infoData.items
            this.mapsData.pos.position.lat = parseFloat(this.infoData.items.lat)
            this.mapsData.pos.position.lng = parseFloat(this.infoData.items.long)
            this.mapsData.options.center.lat = parseFloat(this.infoData.items.lat)
            this.mapsData.options.center.lng = parseFloat(this.infoData.items.long)
            // console.log(this.mapsData)
            this.$root.$emit('bv::show::modal', this.infoModal.id, button)
        },
        resetInfoModal() {
            this.infoModal.title = ''
            this.infoModal.content = ''
        },
    }
}
</script>
<style lang="scss">
    .carousel-inner {
        height: 250px;
    }
</style>