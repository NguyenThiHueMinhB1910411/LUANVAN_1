<script>
import SidebarAdmin from "../../components/SidebarAdmin/SidebarAdmin.vue";
import HeaderAdmin from "../../components/HeaderAdmin/HeaderAdmin.vue";
export default {
    components: {
        SidebarAdmin,
        HeaderAdmin,

    },
};
</script>

<template>
<HeaderAdmin />
<div class="row">
    <SidebarAdmin class="col-3" />

    <router-view class="col-9">

    </router-view>

</div>
</template>
