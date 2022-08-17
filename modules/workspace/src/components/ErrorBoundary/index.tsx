import React from 'react'

export type Props = {
  children: React.ReactNode | React.ReactNode[]
}

export type State = {
  isError: boolean
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state = {
    isError: false,
  }

  componentDidCatch() {
    this.setState({ isError: true })
  }

  render() {
    return this.state.isError ? (
      <div> Что-то пошло не так...</div>
    ) : (
      this.props.children
    )
  }
}
