<template>
    <div class="p-3 m-n3 overflow-hidden">
        <div id="carousel-multiple" class="carousel slide carousel-multiple" data-ride="carousel" data-maximum-items-per-slide="6">
            <div class="row position-relative">
                <div class="row carousel-inner mx-0">
                    <div v-for="item in array" :key="item" class="carousel-item col-sm-6 col-md-4 col-lg-3 col-xl-2 active">
                        <div class="p-5 w-100 text-center bg-primary rounded shadow-sm display-1 text-light">{{ item }}</div>
                    </div>
                </div>

                <a class="carousel-control-prev w-auto px-5 px-xl-4" href="#carousel-multiple" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>

                <a class="carousel-control-next w-auto px-5 px-xl-4" href="#carousel-multiple" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                array: [1,2,3,4,5,6,7,8]
            }
        },
    };
</script>


<style lang="scss" scoped>
@mixin bs-multiple-carousel-item-repeater($count) {
  $result-selector: "";

  //main loop
  @while $count > 0 {
    $result-selector: $result-selector + "+ .carousel-item";
    $count: $count - 1;

    //secondary loop
    $nested-count: $count;
    @while $nested-count > 0 {
      $result-selector: $result-selector + "+ .carousel-item";
      $nested-count: $nested-count - 1;
    }

    @if $count != 0 {
      $result-selector: $result-selector + ",";
    }
  }

  #{$result-selector} {
    @content;
  }
}

@mixin bs-multiple-carousel-item-nesting($count) {
  $result-selector: "";

  //main loop
  @while $count > 0 {
    $result-selector: $result-selector + "+ .carousel-item";
    $count: $count - 1;
  }

  #{$result-selector} {
    @content;
  }
}

@mixin bs-multiple-carousel($items-count: 2) {
  .carousel-item.active,
  .carousel-item-next,
  .carousel-item-prev {
    display: flex; //block
  }

  .carousel-inner {
    overflow: visible;

    .carousel-item {
      // NEW to v4.3.1: all margin-right properties come with -100% as default
      // causing all hidden items to be out of the screen
      margin-right: inherit;

      &.active {
        @include bs-multiple-carousel-item-repeater($items-count) {
          display: flex; //block // three visible items
        }

        // prevents opposite direction "animation"
        &:not(.carousel-item-right):not(.carousel-item-left) {
          transition: none;

          @include bs-multiple-carousel-item-repeater($items-count - 1) {
            transition: none;
          }
        }

        // allows new item to be visible in order to "slide in" into place
        @include bs-multiple-carousel-item-nesting($items-count) {
          position: absolute;
          top: 0;
          right: -(percentage(1 / $items-count));
          z-index: -1;
          display: flex; //block
          visibility: visible;
          height: 100%;
        }
      } // .active
      &-next,
      &-prev {
        position: relative;
        transform: translate3d(0, 0, 0);
      }
    } // .carousel-item

    // farthest right hidden item must be also positioned for animations
    .carousel-item-prev.carousel-item-right {
      position: absolute;
      top: 0;
      right: 100%;
      z-index: -1;
      display: flex; //block
      visibility: visible;
      height: 100%;
      transform: translate3d(100%, 0, 0);
    }
  } // .carousel-inner

  // left or forward direction
  .active.carousel-item-left + .carousel-item-next.carousel-item-left {
    position: relative;
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  .carousel-item-next.carousel-item-left {
    @include bs-multiple-carousel-item-repeater($items-count) {
      position: relative;
      transform: translate3d(-100%, 0, 0);
      visibility: visible;
    }
  }

  // right or previous direction
  .active.carousel-item-right + .carousel-item-prev.carousel-item-right {
    position: relative;
    transform: translate3d(100%, 0, 0);
    display: flex; //block
    visibility: visible;
  }

  .carousel-item-prev.carousel-item-right {
    @include bs-multiple-carousel-item-repeater($items-count) {
      position: relative;
      transform: translate3d(100%, 0, 0);
      display: flex; //block
      visibility: visible;
    }
  }
}

.carousel-multiple {
    //"media-breakpoint-between(xs)"
    &::before { display: block; margin-bottom: 20px; font-size: 30px; }

    //"media-breakpoint-between(sm, sm)"
    @media (min-width: 576px) and (max-width: 767px) {
        @include bs-multiple-carousel(2);
    }

    //"media-breakpoint-between(md)"
    @media (min-width: 768px) and (max-width: 991px) {
        @include bs-multiple-carousel(3);
    }

    //"media-breakpoint-between(lg)"
    @media (min-width: 992px) and (max-width: 1199px) {
        @include bs-multiple-carousel(4);
    }

    //"media-breakpoint-between(xl)"
    @media (min-width: 1200px) {
        @include bs-multiple-carousel(6);
    }
}

</style>
