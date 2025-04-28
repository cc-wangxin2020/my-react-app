import React from 'react'
// import { useNavigate } from 'react-router-dom'
import { Card, Form, Input } from 'antd'

export default function Login() {
  // const navigate = useNavigate()
  const handleSubmit = (value) => {
    console.log(value);
  }
  return (
    <div>
      <Card className=' bg-amber-300'>
        <Form onFinish={handleSubmit}>
          <Form.Item name='name'>
            <Input placeholder='请输入用户名'></Input>
          </Form.Item>
          <Form.Item name='password'>
            <Input placeholder='请输入密码'></Input>
          </Form.Item>
          <Form.Item>
            <button type='submit'>登录</button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  )
}
