<template>
    <div>
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
    </div>
</template>
