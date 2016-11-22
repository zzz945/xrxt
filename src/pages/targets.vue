<template>
    <div>
        <el-button type="primary" @click="handleAdd">新增执法对象</el-button>
        <el-table :data="targets_show" border style="width: 100%">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="name" label="公司">
            </el-table-column>
            <el-table-column prop="corporation" label="法人">
            </el-table-column>
            <el-table-column prop="registered_capital" label="注册资金">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
            <el-table-column prop="phone" label="电话">
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
        <el-dialog title="执法目标信息" size="large" v-model="dialog_show">
            <el-form :model="target_edit">
                <el-form-item label="名称">
                    <el-input v-model="target_edit === null? '' : target_edit.name"></el-input>
                </el-form-item>
                <el-form-item label="法人">
                    <el-input v-model="target_edit === null? '' : target_edit.corporation"></el-input>
                </el-form-item>
                <el-form-item label="注册资金">
                    <el-input v-model="target_edit === null? '' : target_edit.registered_capital"></el-input>
                </el-form-item>
                <el-form-item label="地址">
                    <el-input v-model="target_edit === null? '' : target_edit.address"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="target_edit === null? '' : target_edit.phone"></el-input>
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
const DIALOG_STAT_NOUSE = 0
const DIALOG_STAT_ADD = 1
const DIALOG_STAT_EDIT = 2

export default {
  data () {
    return {
        targets_show: [],
        dialog_edit: false,
        target_edit: null,
        dialog_show: false
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
        this.dialog_show = true
        this.target_edit = row
    },
    handleDelete (index, row) {
        this.$store.state.targets_db.remove({ _id: row._id }, {}, function (err, numRemoved) {})
        this.update()
    },
    handleAdd () {
        this.dialog_stat = DIALOG_STAT_ADD
        this.dialog_show = true
        this.target_edit = {
            name: "",
            corporation: "",
            registered_capital: "",
            address: "",
            phone: ""
        }
    },
    saveEditedTarget () {
        if (this.dialog_stat === DIALOG_STAT_ADD) {//新增
            this.$store.state.targets_db.insert(this.target_edit)
        } else {//编辑
            this.$store.state.targets_db.update({ _id: this.target_edit._id },
                {
                    name: this.target_edit.name,
                    corporation: this.target_edit.corporation,
                    registered_capital: this.target_edit.registered_capital,
                    address: this.target_edit.address,
                    phone: this.target_edit.phone
                }, {}, function (err, numReplaced) {})
        }
        this.dialog_edit = false
        this.dialog_show = false
        this.update()
    }
  }
}
</script>