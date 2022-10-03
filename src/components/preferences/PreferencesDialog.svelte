<script lang="ts">
import { onMount } from "svelte";
import { preferencesDialogOpen } from "../../stores/preferencesStore";
import PreferencesMenu from "./PreferencesMenu.svelte";

let dialog: HTMLDialogElement;

$: {
  if ($preferencesDialogOpen) {
    dialog?.showModal();
  } else {
    dialog?.close();
  }
}

onMount(() => {
  const onClose = () => {
    preferencesDialogOpen.set(false);
  };

  dialog.addEventListener("close", onClose);
  return () => dialog.removeEventListener("close", onClose);
});
</script>

<dialog bind:this={dialog}
  class="min-w-full min-h-full p-0 m-0 shadow-sm select-none sm:ml-auto sm:mb-auto sm:rounded-bl-md sm:min-w-min sm:min-h-min backdrop:bg-black/10 backdrop:transition-colors dark:backdrop:bg-black/30 dark:shadow-none dark:bg-surface-dark dark:text-gray-200">
  <PreferencesMenu />
</dialog>
