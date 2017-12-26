import { Component as HyperComponent } from 'hyperhtml/esm';
import { Unsubscribe } from 'redux';

import { store } from 'store';

import './ScoreDisplayComponent.scss';

interface ComponentState {
  currentScore: number;
  highScore: number;
}

export class ScoreDisplayComponent extends HyperComponent<ComponentState> {
  private unsubscribeCallback: Unsubscribe;

  constructor() {
    super();

    this.updateState();
    this.updateState = this.updateState.bind(this);
  }

  public render() {
    const { currentScore, highScore } = this.state;

    return this.html`
      <div onconnected=${this} ondisconnected=${this} class='score-display'>
        <div>Score: ${currentScore}</div>
        <div>High score: ${highScore}</div>
      </div>
    `;
  }

  public onconnected() {
    this.unsubscribeCallback = store.subscribe(this.updateState);
  }

  public ondisconnected() {
    this.unsubscribeCallback();
  }

  private updateState() {
    const gameState = store.getState().game;

    this.setState({
      currentScore: gameState.get('currentScore'),
      highScore: gameState.get('highScore')
    });
  }
}
