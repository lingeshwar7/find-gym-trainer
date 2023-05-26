<template>
  <base-card>
    <h2>Find Your Coach</h2>
    <span class="filter-option">
      <input type="checkbox" id="personal" checked @change="setFilter" />
      <label for="personal">Personal</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="group" checked @change="setFilter" />
      <label for="group">Group</label>
    </span>
    <span class="filter-option">
      <input type="checkbox" id="crossfit" checked @change="setFilter" />
      <label for="crossfit">CrossFit</label>
    </span>
  </base-card>
</template>

<script>
export default {
  emits: ['change-filter'],
  data() {
    return {
      filters: {
        Personal: true,
        Group : true,
        CrossFit: true,
      },
    };
  },
  methods: {
    setFilter(event) {
      const inputId = event.target.id;
      const isActive = event.target.checked;
      const updatedFilters = {
        ...this.filters,
        [inputId]: isActive,
      };
      this.filters = updatedFilters;
      this.$emit('change-filter', updatedFilters);
    },
  },
};
</script>

<style scoped>
h2 {
  margin: 0.5rem 0;
}

.filter-option {
  margin-right: 1rem;
}

.filter-option label,
.filter-option input {
  vertical-align: middle;
}

.filter-option label {
  margin-left: 0.25rem;
}

.filter-option.active label {
  font-weight: bold;
}
</style>
