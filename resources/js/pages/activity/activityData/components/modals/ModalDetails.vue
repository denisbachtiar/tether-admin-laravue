<template>
    <fragment>
        <b-modal size="lg" :id="infoModal.id" :title="infoModal.title" ok-only @hide="resetInfoModal">
            <p class="mb-0">Content</p>
            <p><small>{{infoModal.content.content}}</small></p>
            <p class="mb-0">Location</p>
            <p class="mb-0"><small>{{infoModal.content.address}}</small></p>
            <gmaps-map :options="mapsData.options" style="height: 300px;">
                <gmaps-marker :options="mapsData.pos" />
            </gmaps-map>
            {{infoModal.content}}
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