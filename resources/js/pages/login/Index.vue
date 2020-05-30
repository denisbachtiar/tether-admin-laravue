<template>
        <div class="auth-main particles_js">
            <div class="auth_div vivify popIn">
                <div class="card">
                    <div class="body">
                    <div class="auth_brand" style="">
                        <a class="navbar-brand" style="color: #417bcc;" href="javascript:void(0);"><img src="" width="30" height="30" class="d-inline-block align-top mr-2" alt="">tether.</a>
                    </div>
                    <form class="form-auth-small m-t-20">
                        <div class="form-group">
                            <label for="signin-email" class="control-label sr-only">Email</label>
                            <input type="email" class="form-control" id="signin-email" name="email" placeholder="admin@gmail.com">
                        </div>
                        <div class="form-group">
                            <label for="signin-password" class="control-label sr-only">Password</label>
                            <input type="password" class="form-control" id="signin-password" name="password" placeholder="Password">
                        </div>
                        <router-link :to="{ name: 'UserDashboard' }" class="btn btn-success btn-block" style="background-color: background: linear-gradient(225deg, rgba(69,134,223,1) 0%, rgba(56,100,161,1) 100%);">LOGIN</router-link>
                    </form>
                    </div>
                </div>
            </div>
        </div>
</template>

<style lang="scss" scope>
    .auth-main {
        background: linear-gradient(225deg, rgba(69,134,223,1) 0%, rgba(56,100,161,1) 100%) !important;
    }
    .form-auth-small {
        a {
            color: white !important;
        }
    }
</style>