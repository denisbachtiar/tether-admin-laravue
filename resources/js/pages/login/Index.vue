<template>
        <div class="auth-main particles_js">
        <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="2"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="false"
      >
      </vue-particles>
            <div class="auth_div vivify popIn">
                <div class="card">
                    <div class="body">
                    <div class="auth_brand" style="">
                        <a class="navbar-brand" style="color: #417bcc;" href="javascript:void(0);"><img src="../../../../public/img/theter-icon.png" width="30" height="30" class="d-inline-block align-top mr-2" alt="">tether.</a>
                    </div>
                  <form class="form-auth-small m-t-20" @submit.prevent="login">
                    <b-alert v-model="showDismissibleAlert" variant="danger" dismissible>Data yang diinputkan salah
                    </b-alert>
                        <div class="form-group">
                            <label for="signin-email" class="control-label sr-only">Email</label>
                            <input type="email" class="form-control" name="email" v-model="email" placeholder="Email" required>
                        </div>
                        <div class="form-group">
                            <label for="signin-password" class="control-label sr-only">Password</label>
                            <input type="password" class="form-control" v-model="password" name="password" placeholder="Password" required>
                        </div>
                        <button type="submit" class="btn btn-success btn-block btn-submit">LOGIN</button>
                   </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<script>
export default {
    data () {
        return {
            email: '',
            password: '',
            showDismissibleAlert: false
        }
    },
    methods: {
        login() {
            // console.log(this.email)
            this.$store
                .dispatch('login', {
                    email: this.email,
                    password: this.password
                })
                .then(() => {
                    this.$router.push({name: 'UserDashboard'})
                    // console.log(response)
                })
                .catch(err => {
                    console.log(err)
                    this.showDismissibleAlert = true
                })
        }
    }
}
</script>

<style lang="scss" scope>
    .auth-main {
        background: linear-gradient(225deg, rgba(69,134,223,1) 0%, rgba(56,100,161,1) 100%) !important;
    }
    .form-auth-small {
        a {
            color: white !important;
        }
    }
    .btn {
        &.btn-submit {
            background: linear-gradient(225deg, rgba(69,134,223,1) 0%, rgba(56,100,161,1) 100%);
        }
    }
    .form-control {
        &::placeholder {
            color: #dadada;
        }
    }
    .particles_js #particles-js {
        z-index: 2;
    }
</style>