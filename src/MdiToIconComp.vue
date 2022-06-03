<script>
export default {
  name: "Icon",
  props: {
    path: String,
    size: {
      type: [String, Number],
      default: 24,
    },
    color: {
      type: String,
      default: "#000",
    },
    spin: {
      type: Boolean,
      default: false,
    },
    pulse: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const onePx = 0.041666666666666664; //i scale equals 24px. so one px equals 0.041666666666666664 in scale.

    function getAnimations() {
      const animations = [];
      if (this.props.spin) {
        animations.push("spin-right-infinite");
      }
      if (this.props.pulse) {
        animations.push("pulse-infinite");
      }
      return animations.length ? animations.join(" ") : null;
    }
    return {
      props,
      getAnimations,
      onePx,
    };
  },
};
</script>

<template>
  <div class="svg-icon--box">
    <svg
      viewbox="0 0 50 50"
      :style="`height:${size}px; width:${size}px;`"
      :class="getAnimations()"
    >
      <path
        :d="props.path"
        :fill="props.color"
        :style="'transform:scale(' + props.size * onePx + ');'"
      />
    </svg>
  </div>
</template>

<style scoped>
.svg-icon--box {
  display: inline-flex;
  justify-content: center;
  align-items: center;
}
/* icon animations */
.spin-right-infinite {
  animation-name: infinite-spin-right-anim;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes infinite-spin-right-anim {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.pulse-infinite {
  animation-name: infinite-pulse-anim;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

@keyframes infinite-pulse-anim {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
