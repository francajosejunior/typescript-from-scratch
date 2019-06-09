import React, { Component } from 'react'

export interface IHelloProos {
  nome: string
}

interface IHelloState {
  msg: string
}

export default class Hello extends Component<IHelloProos, IHelloState> {
  readonly state: IHelloState = {
    msg: 'Hello'
  }
  public render() {
    return (
      <div>
        {this.state.msg} {this.props.nome}
      </div>
    )
  }
}
