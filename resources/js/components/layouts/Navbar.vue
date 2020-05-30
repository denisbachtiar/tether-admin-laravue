<template>
    <fragment>
        <nav class="navbar top-navbar">
            <div class="container-fluid">
                <div class="navbar-left">
                    <ul class="nav navbar-nav">
                        <li class="ml-3">
                            <label class="switch">
                                <input type="checkbox" class="checkmode" />
                                <span class="slider round"></span>
                            </label>
                        </li>
                    </ul>
                </div>
                <div class="navbar-right ml-auto">
                    <div id="navbar-menu">
                        <ul class="nav navbar-nav">
                            <li>
                                <a
                                    href="javasript:void(0)"
                                    data-toggle="modal"
                                    data-target=".modalLogout"
                                    class="icon-menu"
                                    v-b-modal.modal-1
                                    ><i class="icon-power"></i
                                ></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="progress-container">
                <div class="progress-bar" id="myBar"></div>
            </div>
        </nav>
        <b-modal id="modal-1">
            <template v-slot:modal-title>
            Using <code>$bvModal</code> Methods
            </template>
            <div class="d-block text-center">
            <h3>Hello From This Modal!</h3>
            </div>
            <template v-slot:modal-footer>
                <b-button @click="$bvModal.hide('modal-1')">Cancel</b-button>
                <router-link :to="{ name: 'Login' }" class="btn btn-danger" style="color: white !important">Logout</router-link>
            </template>
        </b-modal>
    </fragment>
</template>
