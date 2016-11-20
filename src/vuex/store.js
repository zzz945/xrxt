import Vue from 'vue'
import Vuex from 'vuex'
const Datastore = require('nedb')
const assert = require('assert')  
const fs = require('fs')

const OFFICIALS_DB_PATH = 'dist/assets/officials.db'
const TARGETS_DB_PATH = 'dist/assets/targets.db'
const OFFICIALS = [
        {"name": "张", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "郭", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "宋", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "王", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "李", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "赵", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "周", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "吴", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "刘", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"},
        {"name": "曹", "sex": "男", "age": "18", "office": "信息科", "position": "科长", "phone": "18888888888"}
    ]
const TARGETS = [
        {"name": "百度", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "阿里", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "腾讯", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "搜狐", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "网易", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "乐视", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "京东", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "小米", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "华为", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"},
        {"name": "oppo", "corporation": "马云", "registered_capital": "1000万", "address": "南山街", "phone": "18888888888"}
    ]
    
const state = {
  officials_db: null,
  targets_db: null,
  officials: [],
  targets: []
}

function init_db () {
  state.officials_db = new Datastore({ filename: OFFICIALS_DB_PATH})
  state.targets_db = new Datastore({ filename: TARGETS_DB_PATH})
  state.officials_db.loadDatabase()
  state.targets_db.loadDatabase()
}

fs.stat(OFFICIALS_DB_PATH, function(err, stat) {
  assert((err == null && stat.isFile())|| err.code == 'ENOENT')
  if(err == null && stat.isFile()) {
    console.log('读取数据库...')
    init_db()

    state.officials_db.find({}, function (err, docs) {
      state.officials = docs
    })
    state.targets_db.find({}, function (err, docs) {
      state.targets = docs
    })
  } else {//第一次运行，存入初始化数据
    console.log('初始化数据库...')
    init_db()

    state.officials_db.insert(OFFICIALS)
    state.targets_db.insert(TARGETS)
    state.officials = OFFICIALS
    state.targets = TARGETS
  }
})

Vue.use(Vuex)

const mutations = {
}

export default new Vuex.Store({
  state,
  mutations
})
