import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*  status:
*   0:在获取桌牌页面，未获取桌牌
*   1:在获取桌牌页面，已获取桌牌
*   2:在点菜页面，未点菜
*   3:在点菜页面，已点菜
*   4:在提交订单页面，未提交
*   5:在提交订单页面，已提交
*/
const state = {
  officials: [{id: 0, name: "张", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 1, name: "郭", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 2, name: "宋", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 3, name: "王", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 4, name: "李", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 5, name: "赵", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 6, name: "周", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 7, name: "吴", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 8, name: "刘", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"},
                    {id: 9, name: "曹", sex: "男", age: "18", office: "信息科", position: "科长", phone: "18888888888"}],
  targets: [{id: 0, name: "百度", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "阿里", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "腾讯", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "搜狐", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "网易", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "乐视", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "京东", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "小米", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "华为", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"},
                    {id: 0, name: "oppo", corporation: "马云", registered_capital: "1000万",address: "南山街", phone: "18888888888"}]
}
export default new Vuex.Store({
  state
})
