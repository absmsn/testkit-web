import React from 'react'
import style from './style.module.scss'

function Home() {
  return (
    <div className={style.bodyWrapper}>
      <div className={style.header}></div>
      <div className={style.sidebar}>
        <div className={style.menu}>
          <div className={style.menuItem}>
            <div className={style.avatar}></div>
            <div className={style.content}></div>
          </div>
        </div>
      </div>
      <div className={style.contentArea}>
      </div>
    </div>
  )
}

export default Home