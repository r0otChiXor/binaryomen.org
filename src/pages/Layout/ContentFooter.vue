<template>
  <footer class="footer">
    <div class="container-fluid">
      <ul class="nav">
        <li class="nav-item">
          <a
            href="http://binaryomen.org"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Binary Omen
          </a>
        </li>
        <li class="nav-item">
          <a
            href="https://www.binaryomen.org/presentation"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            About Us
          </a>
        </li>
        <li class="nav-item">
          <a
            href="http://blog.binaryomen.org"
            target="_blank"
            rel="noopener"
            class="nav-link"
          >
            Blog
          </a>
        </li>
      </ul>
      <div class="copyright">
        &copy; {{ year }}, made with <i class="tim-icons icon-heart-2"></i> by
        <a href="https://binaryomen.com" rel="noopener" target="_blank">Binary Omen</a> and
        <a
          href="https://www.binaryomen.org/?ref=pdf-vuejs"
          target="_blank"
          rel="noopener"
          >Binary Omen</a
        >
        for a better web.
      </div>
    </div>
  </footer>
</template>
<script>
export default {
  data() {
    return {
      year: new Date().getFullYear()
    };
  }
};
</script>
<style></style>
