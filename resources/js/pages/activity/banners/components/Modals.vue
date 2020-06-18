<template>
    <fragment>
        <b-modal ref="my-modal" title="Add New Banner" @hide="hideModal">
        <file-pond 
        allow-multiple="false" 
        max-files="1" 
        ref="pond"
        :files="myFile"
        instant-upload="false"
        v-on:updatefiles="handleFilePondUpdateFile"
        v-on:init="handleFilePondInit"/>
            <b-form-group class="mb-3">
                <label>Title</label>
                <b-form-input 
                v-model="$v.form.title.$model" 
                :state="validateState('title')" 
                aria-describedby="input-title-live-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="input-title-live-feedback">This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group>
            <label>Deskripsi</label>
            <b-form-textarea
                v-model="$v.form.desc.$model"
                rows="3"
                :state="validateState('desc')"
                aria-describedby="input-desc-live-feedback"
                required
            ></b-form-textarea>
            <b-form-invalid-feedback id="input-desc-live-feedback">This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
            </b-form-group>
            <template v-slot:modal-footer>
                <b-button variant="success" @click="postNewBanner" type="button" v-bind:class="saveLoading ? 'disabled':''">
                    <span v-show="saveLoading"><b-spinner label="Spinning" small></b-spinner> loading...</span>
                    <span v-show="!saveLoading">Save</span>
                </b-button>
            </template>
        </b-modal>
    </fragment>
</template>

<script>
import vueFilePond from 'vue-filepond';

// Import plugins
import FilePondPluginFileValidateType from 'filepond-plugin-file-validate-type'
import FilePondPluginImagePreview from 'filepond-plugin-image-preview'
import FilePondPluginFilePoster from 'filepond-plugin-file-poster'
// Import styles
import 'filepond/dist/filepond.min.css'
import 'filepond-plugin-image-preview/dist/filepond-plugin-image-preview.min.css'

// Create FilePond component
const FilePond = vueFilePond(FilePondPluginFileValidateType, FilePondPluginImagePreview, FilePondPluginFilePoster);

import ListBanner from './ListBanner'
import { validationMixin } from "vuelidate"
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    data() {
        return {
            idBanner: null,
            myFile: ['/images/1592470425.png'],
            form: {
                title: null,
                desc: null,
                image: null
            },
            saveLoading: false,
        }
    },
    validations: {
        form: {
            title: {
                required,
                minLength: minLength(3)
            },
            desc: {
                required,
                minLength: minLength(3)
            }
        }
    },
    components: {
        ListBanner,
        FilePond
    },
    created() {
        this.$root.$refs.Modals = this;
    },
    methods: {
        handleFilePondUpdateFile(files) {
            // this.myFile = files[0].file
            console.log(files[0].file)
        },
        handleFilePondInit: function() {
                console.log('FilePond has initialized');

                // example of instance method call on pond reference
                this.$refs.pond.getFiles();
            },
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
            this.idBanner = null
            this.form.title = null
            this.form.desc = null
        },
        validateState(title) {
            const { $dirty, $error } = this.$v.form[title];
            return $dirty ? !$error : null;
        },
        postNewBanner() {
            this.$v.form.$touch();
            if (this.$v.form.$anyError) {
                return;
            }
            else {
                if (this.idBanner != null){
                    this.saveLoading = !this.loading
                    axios
                    .post('/api/activity/banners/editbanner', {
                        id: this.idBanner,
                        title: this.form.title,
                        description: this.form.desc
                    })
                    .then(response => {
                        this.hideModal()
                        // console.log(response)
                        this.saveLoading = false
                        const ListBannerComp = this.$root.$refs.ListBanner
                        ListBannerComp.getResults(ListBannerComp.listData.current_page);
                    })
                }
                else{
                    this.saveLoading = !this.loading
                    let data = new FormData()
                    data.append('title', this.form.title)
                    data.append('description', this.form.desc)
                    data.append('image', this.myFile)
                    const config = {
                        headers: { 'content-type': 'multipart/form-data' }
                    }
                    axios
                    .post('/api/activity/banners/addnew',data, config)
                    .then(response => {
                        // console.log(response)
                        this.saveLoading = false
                        this.hideModal()
                        const ListBannerComp = this.$root.$refs.ListBanner
                        ListBannerComp.getResults(ListBannerComp.listData.current_page);
                    })
                }
            }
        }
    }
}
</script>
<style lang="scss">
    
</style>