<script lang="ts">
import type { get } from "svelte/store";

import { themeStore } from "../../stores/themeStore";

import Select from "../select/Select.svelte";
  type ThemeOption = {
    id: string;
    label: string;
    value: typeof $themeStore
  };

  const options: ThemeOption[] = [
    { id: "light", label: "Light", value: "light" },
    { id: "dark", label: "Dark", value: "dark" },
    { id: "system", label: "System", value: null },
  ];
</script>

<div>
  <label for="theme-select">Theme:&nbsp;</label>
  <Select options={options} bind:selected={$themeStore} id={"theme-select"} />
</div>
