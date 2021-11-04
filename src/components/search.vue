<template>
  <b-container>
    <b-row class="header__search-row">
      <b-col class="form-wrapper" md="4" offset-md="4" sm="8" offset-sm="2">
        <b-form class="form">
          <b-input-group size="sm" class="mb-2">
            <b-input-group-prepend is-text size="sm" class="form__icon">
              <b-icon icon="search"></b-icon>
            </b-input-group-prepend>
            <b-form-input type="search" placeholder="Search terms" v-model="search" class="form__input"></b-form-input>
          </b-input-group>
        </b-form>  
      </b-col>    
    </b-row>
  </b-container>
</template>

<script>
export default {
  computed: {
    search: {
      get() {
        return this.$store.getters.search
      },
      set(newValue) {
        this.$store.commit('updateSearch', newValue)
      }
    }
  },

}
</script>

<style lang="scss">
  .form-wrapper {
    padding: 0 10px;
  }
  .form {
    margin: 30px 0;
  }
  .input-group-text {
    background: white;
  }
</style>