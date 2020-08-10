import React, { useState } from 'react'
import { Input, Button } from 'antd'

import style from './style.module.scss'
import 'antd/dist/antd.css';

export default function SignupCode(props) {

  return (
    <div className={style.mainWrapper}>
      <div className={style.mainArea}>
        <div className={style.headerText}>输入注册码</div>
        <div>注册码已发送到example@xxx.com</div>
        <form>
          <Input placeholder="6位注册码"></Input>
          <Button type="primary">确定</Button>
        </form>
      </div>
    </div>
  )
}