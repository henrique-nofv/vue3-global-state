<template>
  <div class="flex flex-col items-center justify-center w-full bg-gray-100 h-72">
    <h1 class="text-5xl font-black text-gray-700 text-purple-500">Estado global no Vue.js 3</h1>
    <div class="flex flex-col w-3/4 xl:w-1/4">
      <input type="text" class="w-full px-2 py-2 mt-7 rounded-md" @keyup.enter="handleInputChange" v-model="state.inputValue" placeholder="Ex: henrique.nofv">
      <i class="text-gray-400">{{ labelCount }}</i>
    </div>
  </div>
</template>

<script>
/* eslint-disable */ 
import { computed, reactive } from 'vue'

export default {
  props: {
    count: { type: Number, default: 0 }
  },
  emits: ['change'],
  setup (props, { emit }) {
    const state = reactive({
      inputValue: ''
    })

    const labelCount = computed(() => {
      if (props.count === 0) return 'Nenhum item encontrado'
      if (props.count === 1) return `${props.count} item encontrado`
      return `${props.count} itens encontrados`
    })

    function handleInputChange () {
      emit('change', state.inputValue)
    }

    return {
      state,
      handleInputChange,
      labelCount
    }
  }
}
</script>
