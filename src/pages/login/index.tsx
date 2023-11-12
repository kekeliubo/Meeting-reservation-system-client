import React, { useState } from 'react'
import './index.less'
import { useNavigate } from 'react-router-dom'
const login: React.FC = () => {
  const [account, setAccount] = useState<string>()
  const [password, setPassword] = useState<string>()
  const navigate = useNavigate()

  const handleClick = (): void => {
    localStorage.setItem('account', JSON.stringify(account))
    localStorage.setItem('password', JSON.stringify(password))
    navigate('/home/chart', { replace: true })
  }

  return (
    <div className="login">
      <div className="container">
        <div className="form">
          <div className="hd">Sign in</div>
          <div className="bd">
            <div className="inputbox">
              <h2 style={{ textAlign: 'left' }}>Account</h2>
              <input
                type="text"
                required
                value={account}
                onChange={(e) => {
                  setAccount(e.target.value)
                }}
              />
              <span>Enter your account</span>
              <i></i>
            </div>
            <div className="inputbox">
              <h2 style={{ textAlign: 'left' }}>Password</h2>
              <input
                type="text"
                required
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
              />
              <span>Enter your password</span>
              <i></i>
            </div>
            <input type="submit" value="Sign in" onClick={handleClick} />
            <h4>
              Not a member <a>sign up</a>
            </h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
