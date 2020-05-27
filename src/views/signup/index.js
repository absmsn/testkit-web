import React, { useState } from 'react'
import request from '../../common/api'
import style from './style.module.scss'
import { Link } from 'react-router-dom'
// import { createBrowserHistory } from 'history'

function Signup(props) {
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassowrd] = useState('')

  const signup = (event) => {
    request.post('/signup', {
      userName,
      email,
      password
    }).then(res => {
      console.log(res.data)
    })
    event.preventDefault()
  }

  return (
    <div className="login">
      {/* 单引号 */}
      <div className={style.mainWrapper}>
        <div className={style.displayArea}>
          <form onSubmit={signup}>
            <div>
              <input type="text" name="userName" placeholder="用户名"
                onChange={e => setUserName(e.target.value)} />
            </div>
            <div className={style.email}>
              <input placeholder="邮箱" name="email"
                onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <input type="password" placeholder="密码" name="password"
                onChange={e => setPassowrd(e.target.value)} />
            </div>
            <div><button type="submit">注册</button></div>
            <div><Link to="/login">已有账户?登录</Link></div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup