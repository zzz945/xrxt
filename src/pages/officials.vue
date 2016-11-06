<template>
    <div>
        <el-table :data="$store.state.officials" border style="width: 100%">
            <el-table-column prop="id" label="编号">
            </el-table-column>
            <el-table-column prop="name" label="姓名">
            </el-table-column>
            <el-table-column prop="sex" label="性别">
            </el-table-column>
            <el-table-column prop="office" label="科室">
            </el-table-column>
            <el-table-column prop="position" label="职位">
            </el-table-column>
            <el-table-column prop="phone" label="电话">
            </el-table-column>
        </el-table>
    </div>
</template>