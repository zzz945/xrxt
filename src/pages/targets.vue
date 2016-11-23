<template>
    <div>
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-table :data="targets_show" border style="width: 100%">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="name" :label="TARGET_PROP.NAME">
            </el-table-column>
            <el-table-column prop="tyshxydm" :label="TARGET_PROP.TYSHXYDM">
            </el-table-column>
            <el-table-column prop="frdb" :label="TARGET_PROP.FRDB">
            </el-table-column>
            <el-table-column prop="address" :label="TARGET_PROP.ADDRESS">
            </el-table-column>
            <el-table-column prop="phone" :label="TARGET_PROP.PHONE">
            </el-table-column>
            <el-table-column prop="beizhu" :label="TARGET_PROP.BEIZHU">
            </el-table-column>
            <el-table-column :context="_self" inline-template label="操作">
                <div>
                    <el-button size="small" @click="handleEdit($index, row)">
                        编辑
                    </el-button>
                    <el-button size="small" type="danger" @click="handleDelete($index, row)">
                        删除
                    </el-button>
                </div>
            </el-table-column>
        </el-table>
        <el-dialog :title="dialog_title" size="large" v-model="dialog_show">
            <el-form :model="target_edit">
                <el-form-item :label="TARGET_PROP.NAME">
                    <el-input v-model="target_edit === null? '' : target_edit.name"></el-input>
                </el-form-item>
                <el-form-item :label="TARGET_PROP.TYSHXYDM">
                    <el-input v-model="target_edit === null? '' : target_edit.tyshxydm"></el-input>
                </el-form-item>
                <el-form-item :label="TARGET_PROP.FRDB">
                    <el-input v-model="target_edit === null? '' : target_edit.frdb"></el-input>
                </el-form-item>
                <el-form-item :label="TARGET_PROP.ADDRESS">
                    <el-input v-model="target_edit === null? '' : target_edit.address"></el-input>
                </el-form-item>
                <el-form-item :label="TARGET_PROP.PHONE">
                    <el-input v-model="target_edit === null? '' : target_edit.phone"></el-input>
                </el-form-item>
                <el-form-item :label="TARGET_PROP.BEIZHU">
                    <el-input v-model="target_edit === null? '' : target_edit.beizhu"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="dialog_edit = false">取 消</el-button>
                <el-button type="primary" @click.native="saveEditedTarget()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>
<script>

const DEFINES = require('../defines.js') 
const DIALOG_STAT_NOUSE = 0
const DIALOG_STAT_ADD = 1
const DIALOG_STAT_EDIT = 2

export default {
  data () {
    return {
        targets_show: [],
        dialog_edit: false,
        target_edit: null,
        dialog_show: false,
        dialog_title: "",
        TARGET_PROP: DEFINES.TARGET_PROP
    }
  },
  mounted: function () {
    this.$nextTick(function () {
        this.update()
    })
  },
  methods: {
    update () {
        let _this = this
        this.$store.state.targets_db.find({}, function (err, docs) {
            _this.targets_show = docs
        })
    },
    handleEdit (index, row) {
        this.dialog_stat = DIALOG_STAT_EDIT
        this.dialog_title = "编辑检查主体"
        this.dialog_show = true
        this.target_edit = row
    },
    handleDelete (index, row) {
        this.$store.state.targets_db.remove({ _id: row._id }, {}, function (err, numRemoved) {})
        this.update()
    },
    handleAdd () {
        this.dialog_stat = DIALOG_STAT_ADD
        this.dialog_title = "新增检查主体"
        this.dialog_show = true
        this.target_edit = {
            name: "",
            tyshxydm: "",
            frdb: "",
            address: "",
            phone: "",
            beizhu: ""
        }
    },
    saveEditedTarget () {
        if (this.dialog_stat === DIALOG_STAT_ADD) {//新增
            this.$store.state.targets_db.insert(this.target_edit)
        } else {//编辑
            this.$store.state.targets_db.update({ _id: this.target_edit._id },
                {
                    name: this.target_edit.name,
                    tyshxydm: this.target_edit.tyshxydm,
                    frdb: this.target_edit.frdb,
                    address: this.target_edit.address,
                    phone: this.target_edit.phone,
                    beizhu: this.target_edit.beizhuphone
                }, {}, function (err, numReplaced) {})
        }
        this.dialog_edit = false
        this.dialog_show = false
        this.update()
    }
  }
}
</script>