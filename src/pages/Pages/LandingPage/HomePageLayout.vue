<template>
  <div  class="text-style">
    <base-nav
      type="white"
      :transparent="true"
      menu-classes="justify-content-end"
      class="auth-navbar fixed-top"
    >
    
      <div slot="brand" class="navbar-wrapper">
        <a class="navbar-brand" href="/Home">
          Cryptodeveloper
        </a>
        
      </div>
    </base-nav>
    <div class="wrapper wrapper-full-page">
     <img src="img/card-primary.png" alt="binaryomen" class="imgWrapperTopRight"/>
      <div class="full-page">
        <div class="content">
          <zoom-center-transition mode="out-in">
            <router-view></router-view>
          </zoom-center-transition>
        </div> 
        <footer class="footer">
          <div class="container-fluid">
            <img src="img/card-primary.png" alt="binaryomen" class="imgWrapperBottom"/>
              <h4>Address:</h4>
              <p>
                333 N Pennington Dr
                Chandler, 85224
                USA
              </p>
              <h4 class="mt-3">Contact:</h4>
              <p>ingamx@gmail.com</p>
            
            <nav>
              <ul class="nav">
                <li class="nav-item">
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noopener"
                    class="nav-link"
                  ><i class="fab fa-facebook" style="font-size:24px"></i></a>
                </li>
                <li class="nav-item">
                  <a
                    href="http://www.twitter.com"
                    target="_blank"
                    rel="noopener"
                    class="nav-link"
                  ><i class="fab fa-twitter-square" style="font-size:24px"></i></a>
                </li>
                <li class="nav-item">
                  <a
                    href="http://www.linkedin.com"
                    target="_blank"
                    rel="noopener"
                    class="nav-link"
                  ><i class="fab fa-linkedin" style="font-size:24px"></i></a>
                </li>
              </ul>
            </nav>
            <div class="copyright">&copy; {{ year }}, made by cryptodeveloper</div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>
<script>
import { BaseNav } from "src/components";
import { ZoomCenterTransition } from "vue2-transitions";

export default {
  components: {
    BaseNav,
    ZoomCenterTransition
  },
  props: {
    backgroundColor: {
      type: String,
      default: "black"
    }
  },
  data() {
    return {
      year: new Date().getFullYear(),
    };
  },

  methods: {},
  beforeRouteUpdate(to, from, next) {
    // Close the mobile menu first then transition to next page
    if (this.showMenu) {
      this.closeMenu();
      setTimeout(() => {
        next();
      }, this.menuTransitionDuration);
    } else {
      next();
    }
  },
  mounted() {},
  watch: {}
};
</script>
<style lang="scss">
.navbar.auth-navbar {
  top: 0;
}

$scaleSize: 0.8;
@keyframes zoomIn8 {
  from {
    opacity: 0;
    transform: scale3d($scaleSize, $scaleSize, $scaleSize);
  }
  100% {
    opacity: 1;
  }
}

.wrapper-full-page .zoomIn {
  animation-name: zoomIn8;
}

.wrapper-full-page .zoomOut {
  animation-name: zoomOut8;
}

.imgWrapperBottom {
    height: 30rem;
    border-radius: 0;
    z-index: -1;
    transform: rotateX(180deg);
    position: absolute;
	bottom: 0%;
	left: 0;
}
.imgWrapperTopRight {
   max-height: 35%;
    max-width: 35%;
    border-radius: 0;
    z-index: 11;
    transform: rotateY(180deg);
    position: absolute;
	top: 0%;
	right: 0;
}
.text-style {
  font-family: 'Press Start 2P', cursive !important;
}

i.fab.fa-linkedin, i.fab.fa-twitter-square, i.fab.fa-facebook {

  &:hover {
  color: #6316de;
  }
}


</style>
