 <template>
  <MoleculesDataTable
    noHeading
    :lastColumnClass="lastColumnClass"
    :tableHeadings="tableHeadings"
    :tableBody="tableBody"
  >
    <template v-slot:table-heading>
      <thead class="bg-white">
        <tr>
          <th
            scope="col"
            class="px-6 py-3 text-left lato-semibold-18 text-secondary-lighter"
          >
            {{ tableHeadingTitle }}
          </th>
          <th scope="col"></th>
          <th scope="col" class="px-6 py-3 text-right">
            <MoleculesDropdown
              id="walletFilter-menu-button"
              :show="filterDropdown"
              title="Recent"
              :items="[]"
              buttonClasses="ml-auto"
              @toggle="filterDropdown = !filterDropdown"
            />
          </th>
        </tr>
      </thead>
    </template>
    <template v-slot:mobile-table-heading>
      <div class="flex items-center justify-between">
        <h2
          scope="col"
          class="text-left lato-semibold-18 text-secondary-lighter"
        >
          Latest Transactions
        </h2>
        <MoleculesDropdown
          id="walletFilter-menu-button"
          :show="filterDropdown"
          title="Recent"
          :items="[]"
          buttonClasses="ml-auto"
          @toggle="filterDropdown = !filterDropdown"
        />
      </div>
    </template>
  </MoleculesDataTable>
</template>


 <script lang="ts">
import { defineComponent, ref } from '@nuxtjs/composition-api'
export default defineComponent({
  name: 'DataTableWithAltHead',
  props: {
    tableHeadings: {
      type: Array,
      default: () => [],
    },
    tableBody: {
      type: Array,
      required: true,
    },
    lastColumnClass: { type: String, default: '' },
    tableHeadingTitle: { type: String, default: '' },
  },

  setup() {
    const filterDropdown = ref(false)
    return { filterDropdown }
  },
})
</script>
