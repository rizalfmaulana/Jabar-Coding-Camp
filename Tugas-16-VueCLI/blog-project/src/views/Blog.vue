<template>
  <div>
    <v-card v-if="blog.id">
      <v-img :src="blog.photo ? photoDomain + blog.photo : 'https://www.ilmubahasainggris.com/wp-content/uploads/2017/03/NGC.jpg'" class="white--text" height="200px">
        <v-card-title class="fill-height align-end" v-text="blog.title"></v-card-title>
      </v-img>

      <v-card-text>
        <v-simple-table dense>
          <tbody>
            <tr>
              <td><v-icon>mdi-format-title</v-icon> Judul</td>
              <td class="blue--text">{{ blog.title }}</td>
            </tr>
            <tr>
              <td><v-icon>mdi-note</v-icon> Deskripsi</td>
              <td class="blue--text">{{ blog.description }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>

      <div class="pa-2" v-if="!guest">
        <div>
          <input type="file" name="photo" ref="photo" />
          <v-btn color="blue" dark @click="uploadImage">
            <v-icon left>mdi-file-image</v-icon>
            upload
          </v-btn>
        </div>

        <v-btn color="blue" dark>
          <v-icon left>mdi-file-document-edit-outline</v-icon>
          Edit
        </v-btn>
        <v-btn color="red" dark @click="deleteBlog">
          <v-icon left>mdi-delete</v-icon>
          Delete
        </v-btn>
      </div>
    </v-card>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data: () => ({
    blog: {},
    apiDomain: "https://demo-api-vue.sanbercloud.com",
    photoDomain: "https://demo-api-vue.sanbercloud.com",
  }),
  computed: {
    ...mapGetters({
      guest: "auth/guest",
      user: "auth/user",
      token: "auth/token",
    }),
  },

  methods: {
    ...mapActions({
      setAlert: "alert/set",
    }),
    close() {
      this.$emit("closed", false);
    },
    go() {
      let { id } = this.$route.params;

      const config = {
        method: "get",
        url: `${this.apiDomain}/api/v2/blog/${id}`,
      };

      this.axios(config)
        .then((response) => {
          let { blog } = response.data;
          this.blog = blog;
        })
        .catch((error) => console.log(error));
    },
    uploadImage() {
      let { id } = this.$route.params;
      let file = this.$refs.photo.files[0];
      let formData = new FormData();
      formData.append("photo", file);
      const config = {
        method: "post",
        url: `${this.apiDomain}/api/v2/blog/${id}/upload-photo`,
        data: formData,
        headers: {
          Authorization: "Bearer" + this.token,
        },
      };
      this.axios(config)
        .then((response) => {
          console.log(response.data);

          this.setAlert({
            status: true,
            color: "success",
            text: "upload berhasil",
          });
          this.close();
        })
        .catch((response) => {
          console.log(response);
          this.setAlert({
            status: true,
            color: "error",
            text: "register gagal",
          });
        });
    },
    deleteBlog() {
      let { id } = this.$route.params;
      const config = {
        method: "post",
        url: `${this.apiDomain}/api/v2/blog/${id}`,
        params: { _method: "DELETE" },
        headers: {
          Authorization: "Bearer" + this.token,
        },
      };

      this.axios(config)
        .then((response) => {
          console.log(response);
          alert(response.data.message);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  created() {
    this.go();
  },
};
</script>
<style scoped></style>
