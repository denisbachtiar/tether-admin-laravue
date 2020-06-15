<template>
    <fragment>
        <b-modal ref="my-modal" title="Add New Banner">
            <b-form-group class="mb-3">
                <label>Title Banner:</label>
                <b-form-input 
                v-model="$v.form.title.$model" 
                :state="validateState('title')" 
                aria-describedby="input-title-live-feedback">
                </b-form-input>
                <b-form-invalid-feedback id="input-title-live-feedback">This is a required field and must be at least 3 characters.</b-form-invalid-feedback>
            </b-form-group>

            <b-form-group>
            <label>Deskripsi: </label>
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
import ListBanner from './ListBanner'
import { validationMixin } from "vuelidate"
import { required, minLength } from 'vuelidate/lib/validators'
export default {
    mixins: [validationMixin],
    data() {
        return {
            form: {
                title: null,
                desc: null,
            },
            saveLoading: false
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
        ListBanner
    },
    created() {
        this.$root.$refs.ModalAdd = this;
    },
    methods: {
        showModal() {
            this.$refs['my-modal'].show()
        },
        hideModal() {
            this.$refs['my-modal'].hide()
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
            this.saveLoading = !this.loading
            axios
            .post('/api/activity/banners/addnew', {
                title: this.form.title,
                description: this.form.desc
            })
            .then(response => {
                console.log(response)
                this.saveLoading = false
                this.hideModal()
                const ListBannerComp = this.$root.$refs.ListBanner
                ListBannerComp.getResults(ListBannerComp.listData.current_page);
            })
        }
    }
}
</script>
<style lang="scss">
    
</style>