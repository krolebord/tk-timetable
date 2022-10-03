<script lang="ts">
  type TId = $$Generic<string | number>;
  type T = $$Generic;
  type SelectItem = $$Generic<{ id: TId; label?: string, value: T }>;

  export let selected: T;
  export let options: SelectItem[];
  export let placeholder: string | undefined = undefined;
  export let id: string | undefined = undefined;
  export let className: string = '';

  const optionsMap = new Map(options.map(option => {
    return [option.id, option.value];
  }));

  let selectedId: TId = options.find(option => option.value === selected)?.id ?? options[0].id;
  $: selected = optionsMap.get(selectedId)!;
</script>

<select class={'bg-transparent rounded-[0.25rem] px-1 py-1 border border-slate-900/10 dark:border-slate-50/[0.06]' + className} bind:value={selectedId} id={id}>
  {#if placeholder}
    <option value="" disabled selected hidden>{placeholder}</option>
  {/if}
  {#each options as option}
    <option value={option.id} selected={option.value === selected}>
      {option.label ?? option.value}
    </option>
  {/each}
</select>
