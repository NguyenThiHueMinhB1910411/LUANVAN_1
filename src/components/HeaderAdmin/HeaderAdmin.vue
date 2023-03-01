
<template>

    <header>

        
        <div>
            <div class="pre-nav row text-center pre-nav m-0 " style="padding-top: 15px;">
                <div class="col-3">

                </div>
                <p class="col-6 row"></p>
                <div class="row col-3 d-flex justify-content-end pe-5 pt-6">

                    <div  class="col">
                        <div class=" justify-content-end">

                            <router-link class="nav-link text-dark fw-bold d-flex justify-content-end" :to="{ name: 'Login' }">Đăng nhập</router-link>

                        </div>
                    </div>
                    <div >
                        <div class="row ">
                            <a class="user-icon"><i class="fas fa-user text-dark "></i></a>
                            <span class=""><a ><i
                                        class=" fa-solid fa-right-from-bracket text-danger"
                                        style="cursor: pointer"></i></a></span>

                        </div>

                    </div>

                </div>
            </div>
        </div>

        <div class="navbar shadow navbar-expand-lg navbar-dark  row   " aria-label="Eighth navbar example">

        </div>
    </header>
</template>

