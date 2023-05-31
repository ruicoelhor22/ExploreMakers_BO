<template>
  <footer class="footer">
    <div class="container-fluid d-flex flex-wrap justify-content-between">
      <nav>
        <ul>
          <li>
            <router-link :to="{ path: '/admin' }">ExploreMakers</router-link>
          </li>
        </ul>
      </nav>
      <div class="copyright d-flex flex-wrap">
        &copy; Programado com
        <i class="fa fa-heart heart"></i> by
        <a href="https://ruicoelhor22.github.io/ExploreMakers/" target="_blank">
          &nbsp; Rui Coelho.</a
        >&nbsp; Desenhado por
        <a href="https://ruicoelhor22.github.io/ExploreMakers/" target="_blank"
          >&nbsp; Rui Coelho.</a
        >
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style></style>
