<template>
  <div style="padding: 24px;">
    <el-row :gutter="20">
      <el-col :span="6">
        <p> </p>
      </el-col>
      <el-col :span="12">
        <el-form>
          <el-form-item label="执法人员数量">
            <el-input-number v-model="input_count_official" :min="0" :max="$store.state.officials.length">
            </el-input-number>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <p> </p>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <p> </p>
      </el-col>
      <el-col :span="12">
        <el-form>
          <el-form-item label="执法对象数量">
            <el-input-number v-model="input_count_target" :min="0" :max="$store.state.targets.length"></el-input-number>
          </el-form-item>
        </el-form>
      </el-col>
      <el-col :span="6">
        <p> </p>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="6">
        <p> </p>
      </el-col>
      <el-col :span="12">
        <el-button @click="pick">随机抽取</el-button>
      </el-col>
      <el-col :span="6">
        <p> </p>
      </el-col>
    </el-row>
    <el-row v-show="show_result" :gutter="20">
      <el-col :span="6">
        <p> </p>
      </el-col>
      <el-col :span="12">
        <p>抽取结果：</p>
        <p>执法人员：<span v-for="item in officials_picked"><a href="#" @click="showOfficialInfo(item)">{{item.name}}</a>&nbsp;</span></p>
        <p>执法对象：<span v-for="item in targets_picked"><a href="#" @click="showTargetInfo(item)">{{item.name}}</a>&nbsp;</span></p>
      </el-col>
      <el-col :span="6">
        <p> </p>
      </el-col>
    </el-row>
    <el-dialog title="执法人员信息" v-model="show_offical_info">
      <el-row :gutter="20">
        <el-col :span="6">
          <p>编号:{{offical_showed.id}}</p>
        </el-col>
        <el-col :span="6">
          <p>姓名:{{offical_showed.name}}</p>
        </el-col>
        <el-col :span="6">
          <p>性别:{{offical_showed.sex}}</p>
        </el-col>
        <el-col :span="6">
          <p>年龄:{{offical_showed.age}}</p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="8">
          <p>科室:{{offical_showed.office}}</p>
        </el-col>
        <el-col :span="8">
          <p>职位:{{offical_showed.position}}</p>
        </el-col>
        <el-col :span="8">
          <p>电话:{{offical_showed.phone}}</p>
        </el-col>
      </el-row>
    </el-dialog>
    <el-dialog title="执法人员信息" v-model="show_target_info">
      <el-row :gutter="20">
        <el-col :span="5">
          <p>编号:{{target_showed.id}}</p>
        </el-col>
        <el-col :span="5">
          <p>姓名:{{target_showed.name}}</p>
        </el-col>
        <el-col :span="5">
          <p>法人:{{target_showed.corporation}}</p>
        </el-col>
        <el-col :span="9">
          <p>注册资本:{{target_showed.registered_capital}}</p>
        </el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="12">
          <p>地址:{{target_showed.address}}</p>
        </el-col>
        <el-col :span="12">
          <p>电话:{{target_showed.phone}}</p>
        </el-col>
      </el-row>
    </el-dialog>
  </div>
</template>

<script>

export default {
  data () {
    return {
      input_count_official: 0,
      input_count_target: 0,
      officials_picked: [],
      targets_picked: [],
      show_result: false,
      show_offical_info: false,
      show_target_info: false,
      offical_showed: {},
      target_showed: {}
    }
  },
  methods: {
    pick () {
      if (this.input_count_official === 0 && this.input_count_target === 0) {
        this.$notify( {
          title: '错误',
          message: '请输入参数',
          duration: 6000
        })
        return
      }
      this.officials_picked = []
      this.targets_picked = []

      let tmp = this.$store.state.officials.slice()
      for(let i = 0; i < this.input_count_official; i++) {
        let idx = Math.round(Math.random()*(tmp.length - 1))
        this.officials_picked.push(tmp[idx])
        tmp.splice(idx, 1)
      }

      tmp = this.$store.state.targets.slice()
      for(let i = 0; i < this.input_count_target; i++) {
        let idx = Math.round(Math.random()*(tmp.length - 1))
        this.targets_picked.push(tmp[idx])
        tmp.splice(idx, 1) 
      }

      this.show_result = true
    },
    showOfficialInfo (item) {
      this.offical_showed = item
      this.show_offical_info = true 
    },
    showTargetInfo (item) {
      this.target_showed = item
      this.show_target_info = true 
    }
  }
}
</script>