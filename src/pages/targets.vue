<template>
    <div>
        <el-table :data="$store.state.targets" border style="width: 100%">
            <el-table-column prop="id" label="编号">
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
        </el-table>
    </div>
</template>