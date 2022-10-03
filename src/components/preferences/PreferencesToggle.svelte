<script lang="ts">
import { preferencesDialogOpen } from "../../stores/preferencesStore";

const togglePreferencesDialog = () => {
  preferencesDialogOpen.update((open) => !open);
};
</script>

<button on:click={togglePreferencesDialog}>
  <slot />
</button>
