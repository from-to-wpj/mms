import {getToken, setToken, setUser, getUser, removeToken} from '../../utils/auth'
import { login, getUserInfo, logout} from '../../api/login'

const user = {
  state:{
    token:getToken(),
    user:getUser()
  },
  mutations:{
    SET_TOKEN(state,token){
      state.token = token
      setToken(token)
    },
    SET_USER(state,user){
      state.user = user
      setUser(user)
    }
  },
  actions:{
    // 登录获取token
    Login({commit},form){
      return new Promise((resolve,reject)=>{
        login(form.username.trim(),form.password).then(res=>{
          const resp = res.data
          commit('SET_TOKEN',resp.data.token)
          resolve(resp)
        }).catch(err=>{
          reject(err)
        })
      })
    },
    
    // 获取用户信息
    GetUserInfo({commit, state}){
      return new Promise((resolve,reject)=>{
        getUserInfo(state.token).then(res=>{
          const resp = res.data
          commit('SET_USER',resp.data)
          resolve(resp)
        }).catch(err=>{
          reject(err)
        })
      })
    },

    Logout({commit,state}){
      return new Promise((resolve,reject)=>{
        logout(state.token).then(res=>{
          const resp = res.data
          commit("SET_TOKEN",'')
          commit("SET_USER",null)
          removeToken()
          resolve(resp)
        }).catch(err=>{
          reject(err)
        })
      })
    }


  }
}

export default user
