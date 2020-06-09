<template>
    <div class="col-md-6 col-sm-12">
        <h1>{{crumbs[1].text}}</h1>
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item">
                        <a href="#">Tether</a>
                    </li>
                    <li class="breadcrumb-item active" v-for="(item, index) in crumbs" :key="index" aria-current="page">
                        {{item.text}}
                    </li>
                </ol>
            </nav>
    </div>
</template>

<script>
export default {
  computed: {
    crumbs: function() {
      let pathArray = this.$route.path.split("/")
      pathArray.shift()
      let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
        breadcrumbArray.push({
          path: path,
          to: breadcrumbArray[idx - 1]
            ? "/" + breadcrumbArray[idx - 1].path + "/" + path
            : "/" + path,
          text: this.$route.matched[idx].meta.breadCrumb || path,
        });
        return breadcrumbArray;
      }, [])
      return breadcrumbs;
    }
  }
};
</script>