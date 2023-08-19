<script>
import { ref, h } from 'vue'
import { Button } from 'testing-extension-ui';

export default {
  setup() {
    const count = ref(0)
    return () => {
      return h(Button, { onClick: () => count.value++ }, count.value > 10 ? 'Greater than 10' : count.value)
    }
  }
}
</script>