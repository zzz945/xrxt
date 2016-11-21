<template>
    <div>
        <el-table :data="officials_show" border style="width: 100%">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="sex" label="性别">
            </el-table-column>
            <el-table-column prop="age" label="年龄">
            </el-table-column>
            <el-table-column prop="office" label="科室">
            </el-table-column>
            <el-table-column prop="position" label="职位">
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
        <el-dialog title="执法人员信息" size="large" v-model="dialog_edit">
            <el-form :model="official_edit">
                <el-form-item label="姓名">
                    <el-input v-model="official_edit === null? '' : official_edit.name"></el-input>
                </el-form-item>
                <el-form-item label="性别">
                    <el-input v-model="official_edit === null? '' : official_edit.sex"></el-input>
                </el-form-item>
                <el-form-item label="年龄">
                    <el-input v-model="official_edit === null? '' : official_edit.age"></el-input>
                </el-form-item>
                <el-form-item label="科室">
                    <el-input v-model="official_edit === null? '' : official_edit.office"></el-input>
                </el-form-item>
                <el-form-item label="职位">
                    <el-input v-model="official_edit === null? '' : official_edit.position"></el-input>
                </el-form-item>
                <el-form-item label="电话">
                    <el-input v-model="official_edit === null? '' : official_edit.phone"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click.native="dialog_edit = false">取 消</el-button>
                <el-button type="primary" @click.native="saveEditedOfficial()">确 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
  data () {
    return {
        officials_show: [],
        dialog_edit: false,
        official_edit: null
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
        this.$store.state.officials_db.find({}, function (err, docs) {
            _this.officials_show = docs
        })
    },
    handleEdit (index, row) {
        this.dialog_edit = true
        this.official_edit = row
    },
    handleDelete (index, row) {
        this.$store.state.officials_db.remove({ _id: row._id }, {}, function (err, numRemoved) {})
        this.update()
    },
    saveEditedOfficial () {
        console.log(this.official_edit)
        this.$store.state.officials_db.update({ _id: this.official_edit._id },
            {
                name: this.official_edit.name,
                sex: this.official_edit.sex,
                age: this.official_edit.age,
                office: this.official_edit.office,
                position: this.official_edit.position,
                phone: this.official_edit.phone
            }, {}, function (err, numReplaced) {})
        this.dialog_edit = false
    }
  }
}
</script>