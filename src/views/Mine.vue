<template>
    
</template>

<script>
export default {
    data () {
        return {
            name: 'zhangsan'
        }
    },
    beforeCreate () {
        console.log('beforeCreate:')
        console.log(this)
        console.log(this.name)
    },
    created () {
        console.log('created:')
        console.log(this)
        console.log(this.name)
    },
    beforeMount () {
        console.log('beforeMount:')
        console.log(this)
        console.log(this.name)
    },
    mounted () {
        console.log('mounted:')
        console.log(this)
        console.log(this.name)
    }

}
</script>

<style>

</style>
