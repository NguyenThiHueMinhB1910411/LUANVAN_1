<script>
import SidebarStaff from "../../components/SidebarStaff/SidebarStaff.vue";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin.vue";
export default {
    components: {
        SidebarStaff,
        HeaderAdmin,

    },
};
</script>

<template>
<HeaderAdmin/>
<div class="row">
    <SidebarStaff class="col-2" />

    <router-view class="col-9 ">

    </router-view>

</div>
</template>
