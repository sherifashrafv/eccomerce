<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="error-found">
          <div
            class="error-box d-flex flex-column align-items-center justify-content-center"
          >
            <h1>Error 404 error</h1>
            <h4>This Page Dosen't exist.</h4>
            <h3>
              would You Like To Go To
              <span class="home-page">Home Page</span>
            </h3>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Error-Page",
};
</script>

<style scoped>
.image-main {
  width: 100%;
}
.imag-slider {
  width: 100px;
}
.details {
  width: 400px;
}
.info {
  height: fit-content !important;
}
.error-box {
  width: 550px;
  height: 350px;
  margin: auto;
  text-align: center;
}
.home-page {
  color: red;
}
</style>
