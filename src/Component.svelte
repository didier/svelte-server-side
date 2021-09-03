<script>
  export let name
</script>

<h1>
  <span>Hello</span>
  {#if name}
    <span>
      {name}!
    </span>
  {/if}
</h1>

<style>
  h1 {color: red}
</style>