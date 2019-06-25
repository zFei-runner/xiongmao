<template>
    <router-link tag="li" class="zf-listDetail" :to="`/list/tab/${id}`">
        {{ title }}
    </router-link>
</template>

<script>
export default {
    props: {
        title: String,
        id: Number
    }

}
</script>

<style lang="scss" scoped>
li {
    width: 100%;
    height: 40px;
    font-size: 18px;
    text-align: center;
    line-height: 40px;
}
.router-link-exact-active, 
.router-link-active {
    color: orange;
}

</style>
