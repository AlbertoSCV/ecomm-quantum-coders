import * as React from 'react'

interface Props {
  onSubmit: (account: string, password: string) => any
}

interface State {
  account: string
  password: string
}

export default class Login extends React.Component<Props, State> {
  state = { account: '', password: '' }

  render () {
    const {account, password} = this.state

    const handleSubmit = (event: React.SyntheticEvent<HTMLFormElement>) => {
      event.preventDefault()
      this.props.onSubmit(account, password)
    }

    const updateAccount = (event: React.SyntheticEvent<HTMLInputElement>) => {
      this.setState({ account: event.currentTarget.value })
    }

    const updatePassword = (event: React.SyntheticEvent<HTMLInputElement>) => {
      this.setState({ password: event.currentTarget.value })
    }

    return (
      <form onSubmit={handleSubmit}>
        <fieldset>
          <input type='text' placeholder='Username' value={account} onChange={updateAccount} />
        </fieldset>
        <fieldset>
          <input type='password' placeholder='Password' value={password} onChange={updatePassword} />
        </fieldset>
        <fieldset>
          <input type='submit' value='Log in' />
        </fieldset>
      </form>
    )
  }
}