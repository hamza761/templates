<script lang="jsx">
import { ref } from 'vue'
import { Button } from 'testing-extension-ui';

export default {
  setup() {
    const count = ref(0)
    return () => {
      return <><Button onClick={() => count.value++}>{count.value > 10 ? 'Greater than 10' : count.value} </Button></>
    }
  },
}
</script>