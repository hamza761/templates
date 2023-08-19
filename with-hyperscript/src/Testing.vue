<script>
import { h } from 'vue'
import { Typography } from 'testing-extension-ui';

export default {
  setup() {
    return () => {
      return h(Typography, null, 'Testing Components is here')
    }
  }
}
</script>