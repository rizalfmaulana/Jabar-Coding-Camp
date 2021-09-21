<template>
  <div class="about">
    <h1>THis is Home page</h1>
  </div>
</template>

<script>
export default {
  data: () => ({
    apiDomain: "http://demo-api-vue.sanbercloud.com",
    blogs: [],
  }),
  created() {
    const api = "http://demo-api-vue.sanbercloud.com/api/v2/blog/random/3";
    this.axios.get(api).then((response) => console.log(response.data));
  },
};
</script>
