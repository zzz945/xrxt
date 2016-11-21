import Vue from 'vue'
import Vuex from 'vuex'
const Datastore = require('nedb')

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
  officials_db_path: OFFICIALS_DB_PATH,
  targets_db_path: TARGETS_DB_PATH,
  initDb: function(first) {
    this.officials_db = new Datastore({ filename: this.officials_db_path})
    this.targets_db = new Datastore({ filename: this.targets_db_path})
    this.officials_db.loadDatabase()
    this.targets_db.loadDatabase()
    if (first) {
      this.officials_db.insert(OFFICIALS)
      this.targets_db.insert(TARGETS)
    }
  }
}

const mutations = {
}

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations
})
