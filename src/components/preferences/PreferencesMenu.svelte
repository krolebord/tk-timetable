<script lang="ts">
import Icon from '@iconify/svelte';
import ThemeSelect from './ThemeSelect.svelte';
</script>

<div>
  <form method="dialog" class="flex flex-row justify-between px-4 py-4 sm:justify-end lg:px-8 text-end">
    <p class="sm:hidden">Settings</p>
    <button type="submit" value="Canceled!">
      <Icon icon="mdi:close" class="text-blue-400 text-[24px]" />
    </button>
  </form>
  <div class="flex flex-col gap-1 px-4 pb-2">
    <ThemeSelect />
  </div>
</div>
