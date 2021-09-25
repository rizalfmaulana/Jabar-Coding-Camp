<template>
  <v-card>
    <v-divider></v-divider>
    <v-container fluid>
      <v-form ref="form">
        <v-text-field label="Title" required append-icon="mdi-email"></v-text-field>
        <v-text-field label="Description" required append-icon="mdi-email"></v-text-field>
        <div class="text-xs-center">
          <v-btn color="success lighten-1">
            Add Blog
            <v-icon right dark>mdi-lock-open</v-icon>
          </v-btn>
        </div>
      </v-form>
    </v-container>
  </v-card>
</template>
