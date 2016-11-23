<template>
    <div>
        <el-button type="primary" @click="handleAdd">新增</el-button>
        <el-button @click="handleImport">导入</el-button>
        <el-button @click="handleExport">导出</el-button>
        <input id="fileDialogImport" hidden type="file" accept=".xls,.xlsx,application/ms-excel">
        <input id="fileDialogExport" hidden type="file" nwsaveas="执法人员.xlsx" />
        <el-table :data="officials_show" border style="width: 100%">
            <el-table-column type="index">
            </el-table-column>
            <el-table-column prop="name" :label="OFFICIAL_PROP.NAME">
            </el-table-column>
            <el-table-column prop="sex" :label="OFFICIAL_PROP.SEX">
            <el-table-column prop="office" :label="OFFICIAL_PROP.OFFICE">
            </el-table-column>
            <el-table-column prop="position" :label="OFFICIAL_PROP.POSITION">
            </el-table-column>
            </el-table-column>
            <el-table-column prop="bzxz" :label="OFFICIAL_PROP.BZXZ">
            </el-table-column>
            <el-table-column prop="zfzbh" :label="OFFICIAL_PROP.ZFZBH">
            </el-table-column>
            <el-table-column prop="zffw" :label="OFFICIAL_PROP.ZFFW">
            </el-table-column>
            <el-table-column prop="phone" :label="OFFICIAL_PROP.PHONE">
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
            <el-form :model="official_edit">
                <el-form-item :label="OFFICIAL_PROP.NAME">
                    <el-input v-model="official_edit === null? '' : official_edit.name"></el-input>
                </el-form-item>
                <el-form-item :label="OFFICIAL_PROP.SEX">
                    <el-input v-model="official_edit === null? '' : official_edit.sex"></el-input>
                </el-form-item>
                <el-form-item :label="OFFICIAL_PROP.OFFICE">
                    <el-input v-model="official_edit === null? '' : official_edit.office"></el-input>
                </el-form-item>
                <el-form-item :label="OFFICIAL_PROP.POSITION">
                    <el-input v-model="official_edit === null? '' : official_edit.position"></el-input>
                </el-form-item>
                <el-form-item :label="OFFICIAL_PROP.BZXZ">
                    <el-input v-model="official_edit === null? '' : official_edit.bzxz"></el-input>
                </el-form-item>
                <el-form-item :label="OFFICIAL_PROP.ZFZBH">
                    <el-input v-model="official_edit === null? '' : official_edit.zfzbh"></el-input>
                </el-form-item>
                <el-form-item :label="OFFICIAL_PROP.ZFFW">
                    <el-input v-model="official_edit === null? '' : official_edit.zffw"></el-input>
                </el-form-item>
                <el-form-item :label="OFFICIAL_PROP.PHONE">
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

const DEFINES = require('../defines.js')  
const DIALOG_STAT_NOUSE = 0
const DIALOG_STAT_ADD = 1
const DIALOG_STAT_EDIT = 2

export default {
  data () {
    return {
        officials_show: [],
        dialog_stat: DIALOG_STAT_NOUSE,
        dialog_show: false,
        dialog_title: "",
        official_edit: null,
        OFFICIAL_PROP: DEFINES.OFFICIAL_PROP
    }
  },
  mounted: function () {
    this.$nextTick(function () {
        let import_dialog = document.querySelector("#fileDialogImport")
        import_dialog.addEventListener("change", function(evt) {        
            /*XLSX = require('xlsx')
            let workbook = XLSX.readFile(this.value)
            let first_sheet_name = workbook.SheetNames[0];
            let worksheet = workbook.Sheets[first_sheet_name];
            let json = XLSX.utils.sheet_to_json(worksheet)*/
            console.log("import", this.value)
            import_dialog.value = ""
        }, false)
        let export_dialog = document.querySelector("#fileDialogExport")
        export_dialog.addEventListener("change", function(evt) {
            console.log("export", this.value)
            export_dialog.value = ""
        }, false)
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
        this.dialog_stat = DIALOG_STAT_EDIT
        this.dialog_title = "编辑检查人员"
        this.dialog_show = true
        this.official_edit = row
    },
    handleDelete (index, row) {
        this.$store.state.officials_db.remove({ _id: row._id }, {}, function (err, numRemoved) {})
        this.update()
    },
    handleAdd () {
        this.dialog_stat = DIALOG_STAT_ADD
        this.dialog_title = "新增检查人员"
        this.dialog_show = true
        this.official_edit = {
            name: "",
            sex: "",
            office: "",
            position: "",
            bzxz: "",
            zfzbh: "",
            zffw: "",
            phone: ""
        }
    },
    handleImport () {
        let chooser = document.querySelector("#fileDialogImport")
        chooser.click()
    },
    handleExport () {
        let chooser = document.querySelector("#fileDialogExport")
        chooser.click()
    },
    saveEditedOfficial () {
        if (this.dialog_stat === DIALOG_STAT_ADD) {//新增
            this.$store.state.officials_db.insert(this.official_edit)
        } else {//编辑
            this.$store.state.officials_db.update({ _id: this.official_edit._id },
            {
                name: this.official_edit.name,
                sex: this.official_edit.sex,
                office: this.official_edit.office,
                position: this.official_edit.position,
                bzxz: this.official_edit.bzxz,
                zfzbh: this.official_edit.zfzbh,
                zffw: this.official_edit.zffw,
                phone: this.official_edit.phone
            }, {}, function (err, numReplaced) {}) 
        }
        
        this.dialog_stat = DIALOG_STAT_NOUSE
        this.dialog_show = false
        this.update()
    }
  }
}
</script>