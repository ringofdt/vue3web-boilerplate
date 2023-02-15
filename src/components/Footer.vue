<template>
    <div class="text-center text-muted py-2">
        <div>Copyright &copy; All rights reserved</div>
        <div class="d-none">ver:{{ version }}</div>
    </div>
</template>

<script>
export default {
    setup() {
        const version = 'dev'
        return {
            version
        };
    },
};
</script>