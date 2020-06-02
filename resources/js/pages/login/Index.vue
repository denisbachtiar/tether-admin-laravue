<template>
        <div class="auth-main particles_js">
            <div class="auth_div vivify popIn">
                <div class="card">
                    <div class="body">
                    <div class="auth_brand" style="">
                        <a class="navbar-brand" style="color: #417bcc;" href="javascript:void(0);"><img src="" width="30" height="30" class="d-inline-block align-top mr-2" alt="">tether.</a>
                    </div>
                  <!--  <form class="form-auth-small m-t-20"> -->
                        <div class="form-group">
                            <label for="signin-email" class="control-label sr-only">Email</label>
                            <input type="email" class="form-control" name="email" v-model="email" placeholder="admin@gmail.com">
                        </div>
                        <div class="form-group">
                            <label for="signin-password" class="control-label sr-only">Password</label>
                            <input type="password" class="form-control" v-model="password" name="password" placeholder="Password">
                        </div>
                        <button type="button" class="btn btn-success btn-block btn-submit" v-on:click="login">LOGIN</button>
                   <!-- </form> -->
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
            password: ''
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
</style>