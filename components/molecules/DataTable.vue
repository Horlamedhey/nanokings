<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
        <div class="space-y-6 lg:hidden">
          <slot name="mobile-table-heading"></slot>
          <div
            v-for="(tableRow, i) in tableBody"
            :key="`tableRow-${i}`"
            class="
              px-6
              py-4
              bg-white
              divide-y
              rounded-md
              shadow
              divide-secondary-lightest
              verflow-hidden
            "
          >
            <div
              v-for="(tableDataValue, tableDataName, i) in tableRow"
              :key="`tableData-${tableDataName}-${i}`"
              class="flex justify-between py-2 lato-medium-14"
            >
              <span class="inline-block capitalize text-secondary-lighter">
                {{ tableDataName }}
              </span>
              <span
                class="
                  inline-block
                  text-secondary-light
                  first-letter:capitalize
                "
                :class="{
                  'text-right': i === Object.values(tableRow).length - 1,
                  [tableDataValue.classes]: typeof tableDataValue === 'object',
                }"
              >
                {{
                  typeof tableDataValue === 'object'
                    ? tableDataValue.value
                    : tableDataValue
                }}
              </span>
            </div>
          </div>
          <h3
            v-if="tableBody.length === 0"
            class="py-10 text-center empty-content-text"
          >
            There are no transactions to show.
          </h3>
        </div>
        <div class="hidden overflow-hidden shadow sm:rounded-md lg:block">
          <table class="min-w-full">
            <slot name="table-heading"></slot>
            <thead v-if="!noHeading">
              <tr>
                <th
                  v-for="(tableHeading, i) in tableHeadings"
                  :key="`tableHeading-${i}`"
                  scope="col"
                  class="
                    px-6
                    py-3
                    text-left
                    lato-medium-14
                    text-secondary-lighter
                  "
                >
                  {{ tableHeading }}
                </th>
              </tr>
            </thead>
            <tbody class="bg-white divide-y-4">
              <tr v-for="(tableRow, i) in tableBody" :key="`tableRow-${i}`">
                <td
                  v-for="(tableDataValue, tableDataName, i) in tableRow"
                  :key="`tableData-${tableDataName}-${i}`"
                  class="
                    px-6
                    py-4
                    text-secondary-light
                    lato-medium-14
                    whitespace-nowrap
                    first-letter:capitalize
                  "
                  :class="{
                    'text-right': i === Object.values(tableRow).length - 1,
                    [tableDataValue.classes]:
                      typeof tableDataValue === 'object',
                  }"
                >
                  {{
                    typeof tableDataValue === 'object'
                      ? tableDataValue.value
                      : tableDataValue
                  }}
                </td>
              </tr>
            </tbody>
          </table>

          <h3
            v-if="tableBody.length === 0"
            class="py-10 text-center empty-content-text"
          >
            There are no transactions to show.
          </h3>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DataTable',
  props: {
    noHeading: Boolean,
    tableHeadings: {
      type: Array,
      default: () => [],
    },
    tableBody: {
      type: Array,
      required: true,
    },
    lastColumnClass: { type: String, default: '' },
  },
}
</script>

<style lang="scss" scoped>
</style>
