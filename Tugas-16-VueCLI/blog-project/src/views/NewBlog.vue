<template>
  <v-card>
    <v-divider></v-divider>
    <v-container fluid>
      <v-form ref="form" @submit="submitForm($event)">
        <v-text-field label="Title" required append-icon="mdi-format-title"></v-text-field>
        <v-text-field label="Description" required append-icon="mdi-subtitles"></v-text-field>
        <div class="text-xs-center">
          <v-btn type="submit" color="success lighten-1">
            Add Blog
            <v-icon right dark>mdi-plus-box-multiple-outline</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  data() {
    return {
      title: "",
      description: "",
    };
  },
  computed: {
    ...mapGetters({
      token: "auth/token",
    }),
  },
  methods: {
    ...mapActions({
      setAlert: "alert/set",
      setToken: "auth/setToken",
    }),
    submitForm: function(event) {
      event.preventDefault();
      console.log(this.token);

      let formData = new FormData();
      formData.append("title", this.title);
      formData.append("description", this.description);

      let header = {
        "Content-type": "application/json",
        Authorization: "Bearer " + this.token,
      };
      const config = {
        method: "post",
        url: "https://demo-api-vue.sanbercloud.com/api/v2/blog",
        data: formData,
        headers: header,
      };
      this.axios(config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
