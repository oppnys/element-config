<template>
  <el-table
    :data="tableData"
    size="mini"
    v-bind="$attrs"
    element-loading-text="Loading"
    stripe
    border
    highlight-current-row
    @sort-change="sortBy"
    @select="selectItem"
    @select-all="selectAll"
    ref="dtTable"
  >
    <template v-for="(data, index) in labelData">
      <el-table-column
        v-if="!data.slot && !data.buttons"
        :key="index"
        :label="data.label"
        :prop="data.property"
        :type="data.type"
        :column-key="data.columnKey"
        :width="data.width"
        :min-width="data.minWidth"
        :fixed="data.fixed"
        :sortable="data.sort || false"
        :align="data.align || 'center'"
        :show-overflow-tooltip="data.showOverflowTooltip || false"
      />
      <el-table-column
        :key="index"
        v-if="data.slot"
        :label="data.label"
        :prop="data.property"
        :type="data.type"
        :column-key="data.columnKey"
        :width="data.width"
        :min-width="data.minWidth"
        :fixed="data.fixed"
        :sortable="data.sort || false"
        :align="data.align || 'center'"
        :show-overflow-tooltip="data.showOverflowTooltip || false"
      >
        <template slot-scope="scope">
          <div v-if="data.slot">
            <slot :name="data.slot" v-bind:row="scope.row"></slot>
          </div>
        </template>
      </el-table-column>
      <el-table-column
        :key="index"
        v-if="data.buttons"
        :label="data.label"
        :prop="data.property"
        :type="data.type"
        :column-key="data.columnKey"
        :width="data.width"
        :min-width="data.minWidth"
        :fixed="data.fixed"
        :sortable="data.sort || false"
        :align="data.align || 'center'"
        :show-overflow-tooltip="data.showOverflowTooltip || false"
      >
        <template slot-scope="scope">
          <div
            v-if="data.buttons"
            style="display: flex; justify-content: space-around"
          >
            <template v-for="(btn, i) in data.buttons">
              <el-button
                :key="i"
                v-if="!btn.hidden"
                :type="btn.type"
                v-bind="btn.attrs"
                @click="
                  btn.click(scope.row) ||
                    handleClick(btn.event, scope.row, scope.$index)
                "
                >{{ btn.label }}
              </el-button>
            </template>
          </div>
        </template>
      </el-table-column>
    </template>
  </el-table>
</template>

<script>
export default {
  name: 'ElementConfigTable',
  props: {
    labelData: {
      type: Array,
      default: () => []
    },
    tableData: {
      type: Array,
      default: () => []
    },
    loading: {
      type: Boolean,
      default: false
    },
    userHeight: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      selection: []
    }
  },
  methods: {
    handleClick(event, data, index) {
      this.$emit('handleClick', { event, data, index })
    },
    sortBy(params) {
      const { prop, order } = params
      this.$emit('sortBy', { prop, order })
    },
    selectAll(selection) {
      this.selection = selection
      this.selectionChange()
    },
    selectItem(selection) {
      this.selection = selection
      this.selectionChange()
    },
    selectionChange() {
      this.$emit('select', this.selection)
    },
    clearSelection() {
      this.$refs.dtTable.clearSelection()
    }
  }
}
</script>
