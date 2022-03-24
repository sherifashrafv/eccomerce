<template>
  <div class="content mt-3">
    <div class="container">
      <div class="row">
        <div class="col-lg-12">
          <div class="box-content rounded d-flex align-items-end flex-column">
            <div>
              <h3 class="mb-3">{{ $t("content.head") }}</h3>
            </div>
            <div class="body text-right">
              <p class="text-right">{{ $t("content.description") }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Content-Omar-Afandy",
};
</script>

<style scoped>
.box-content {
  background: white;
  padding: 25px 15px;
}
.body {
  width: 87%;
  line-height: 2.3;
  padding: 0 !important;
  margin: 0;
  color: #7c7e7e;
  font-weight: 500;
}
</style>
