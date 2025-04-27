import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div>
        <Link to="/detail">登录</Link>
        <button onClick={() => navigate('/detail/1001/tom')}>登录</button>
    </div>
  )
}
