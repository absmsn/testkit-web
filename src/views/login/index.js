import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import request from '../../common/api'
import store from '../../reducers/index'
import { setStorage } from '../../common/localstorage'

import { SAVE_USER } from '../../reducers/constants'

import style from './style.module.scss'

function Login(props) {

  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')

  const login = (event) => {
    request.post('/login', {
      email,
      password
    }).then(res => {
      const { token, userName, message} = res.data
      switch (message) {
        case 'correct password':
          store.dispatch({
            type: SAVE_USER,
            payload: {
              token,
              userName
            }
          })
          setStorage('token', token)
          props.history.replace('/')
          break
        case 'incorrect password':
          console.log('incorrect password')
          break
        case 'user not exists':
          console.log('user not exists')
          break
        default:
          console.log('error occur when login')
      }
    })
    event.preventDefault()
  }

  return (
    <div className='login'>
      {/* 单引号 */}
      <div className={style.mainWrapper}>
        <div className={style.displayArea}>
          <form onSubmit={login}>
            <div className={style.email}
              onChange={e => setEmail(e.target.value)}>
              <input placeholder='邮箱' name='email' />
            </div>
            <div>
              <input type='password' placeholder='密码' name='password'
                onChange={e => setPassowrd(e.target.value)} />
            </div>
            <div><button type='submit'>登录</button></div>
            <div><a href='#'>忘记密码</a></div>
            <div><Link to='/signup'>没有帐户?注册</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login