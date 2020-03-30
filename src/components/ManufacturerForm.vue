<template>
  <div class="manufacturerInfo">
    <el-form class="form" ref="form" label-width="180px">
      <el-form-item label="制造商名称">
        <el-input v-model="modelData.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button v-if="isEditing" type="primary" @click="onSubmit">修改</el-button>
        <el-button v-else @click="onSubmit">添加</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<style>
  .manufacturerInfo {
    padding-top: 10px;
  }

  .form {
    margin: 0 auto;
    width: 500px;
  }

  .el-input__inner {
    height: 50px;
  }
</style>

<script>
export default {
  props: ['model', 'isEditing'],
  computed: {
    modelData() {
      const res = { ...this.model };
      return res;
    },
  },
  methods: {
    onSubmit() {
      this.$emit('save-manufacturer', this.modelData);
    },
  },
};
</script>
