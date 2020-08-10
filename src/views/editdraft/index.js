import React, { useState, useEffect } from 'react'
import { Input, Button, Tag, Select, TimePicker, InputNumber, Radio, Checkbox } from 'antd'
import moment from 'moment'

import style from './style.module.scss'
import 'antd/dist/antd.css';

export default function SignupCode(props) {

  let [testName, setTestName] = useState("哲学概论")
  let [testDuration, setTestDuration] = useState(moment("1:10:00", "HH:mm:ss"))
  let [qustionNum, setQuestionNum] = useState(10)

  return (
    <div className={style.mainWrapper}>
      <div className={style.infoOverview}>
        <p className={style.headerText}>考试信息</p>
        <div className={style.testInfo}>
          <div className={style.infoItemTagContainer}>
            <Tag className={style.infoItemTag} color="cyan">考试名称</Tag>
          </div>
          <div className={style.infoItemContentContainer}>
            <Input size="middle" className={style.infoItemContent}
              value={testName} onChange={e => setTestName(e.target.value)}></Input>
          </div>
          <div className={style.infoItemTagContainer}>
            <Tag className={style.infoItemTag} color="cyan">考试时长</Tag>
          </div>
          <div className={style.infoItemContentContainer}>
            <TimePicker className={style.infoItemContent}
              value={testDuration} onChange={setTestDuration}></TimePicker>
          </div>
          <div className={style.infoItemTagContainer}>
            <Tag className={style.infoItemTag} color="cyan">总题数</Tag>
          </div>
          <div className={style.infoItemContentContainer}>
            <InputNumber className={style.infoItemContent}
              value={qustionNum} onChange={setQuestionNum}></InputNumber>
          </div>
        </div>
        <div className={style.answererInfo}></div>
      </div>
      <div className={style.editContainer}>
        <div className={style.addQuestionBtnGroup}>
          <Radio.Group defaultValue="singleChoice" buttonStyle="solid">
            <Radio.Button value="singleChoice">单选题</Radio.Button>
            <Radio.Button value="multiChoice">多选题</Radio.Button>
            <Radio.Button value="fllBlank">填空题</Radio.Button>
            <Radio.Button value="trueOrFalse">判断题</Radio.Button>
          </Radio.Group>
        </div>
        <div className={style.editArea}>
          <div className={style.questionArea}>
            <div className={style.questionNo}>1</div>
            <div className={`${style.question} ${style.singleChoice}`}>
              <div className={style.questionHeader}>
                <div className={style.headerText}>题目</div>
                <Input className={style.questionHeaderInput} placeholder="在此输入题目"></Input>
              </div>
              <div className={style.questionBody}>
                <div className={style.headerText}>内容</div>
                <Radio.Group className={style.choiceGroup}>
                  <div className={style.choiceItem}>
                    <Radio className={style.choiceRadio} value={1}>A</Radio>
                    <Input placeholder="选项内容"></Input>
                    <div className={style.choiceItemDelete}></div>
                  </div>
                  <div className={style.choiceItem}>
                    <Radio className={style.choiceRadio} value={2}>B</Radio>
                    <Input placeholder="选项内容"></Input>
                    <div className={style.choiceItemDelete}></div>
                  </div>
                </Radio.Group>
                <Button>新建选项</Button>
                <div className={style.questionOption}>
                  <Checkbox>打乱选项顺序</Checkbox>
                </div>
                <div className={style.questionScore}>
                  <span>总分</span>
                  <InputNumber></InputNumber>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={style.questionOverview}></div>
    </div>
  )
}