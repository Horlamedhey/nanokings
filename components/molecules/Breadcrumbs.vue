<template>
  <nav class="flex" aria-label="Breadcrumb">
    <ol class="flex items-center space-x-4">
      <li>
        <!-- :to="$route.path.split('/').reverse().slice(1).reverse().join('/')" -->
        <div class="flex items-center">
          <span class="ml-4 lora-bold-20 text-secondary">
            {{ $route.path.split('/')[2].split('-').join(' ') }}
          </span>
        </div>
      </li>

      <li>
        <!-- :to="$route.path" -->
        <div class="flex items-center">
          <AtomsIconsChevronRightSmall />
          <span class="ml-4 lora-bold-20 text-secondary" aria-current="page">
            {{ $route.path.split('/')[3].split('-').join(' ') }}
          </span>
        </div>
      </li>
    </ol>
  </nav>
</template>

<script>
export default {
  name: 'Breadcrumbs',
}
</script>
