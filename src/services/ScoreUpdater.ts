import { GameStateType } from 'common/GameStateType';
import { configuration } from 'configuration';

import { ApplicationEventEmitter } from 'events/ApplicationEventEmitter';
import { RestartEvent } from 'events/RestartEvent';

import { ApplicationWorld } from 'models/ApplicationWorld';

import { updateScore } from 'actions/GameActions';
import { getGameState, store } from 'store';

export class ScoreUpdater {
  private readonly applicationWorld: ApplicationWorld;
  private readonly eventEmitter: ApplicationEventEmitter;
  private intervalId: number;

  constructor(applicationWorld: ApplicationWorld, eventEmitter: ApplicationEventEmitter) {
    this.applicationWorld = applicationWorld;
    this.eventEmitter = eventEmitter;

    this.updateScore = this.updateScore.bind(this);
  }

  public init() {
    // @ts-ignore
    this.intervalId = setInterval(this.updateScore, configuration.scoreUpdateInterval);
    this.eventEmitter.on(RestartEvent.name, this.updateScore);
  }

  public destroy() {
    clearInterval(this.intervalId);
    this.eventEmitter.removeListener(RestartEvent.name, this.updateScore);
  }

  private updateScore() {
    if (getGameState() === GameStateType.AcceleratingSpinner) {
      return;
    }

    const newScore = this.getScore();
    const oldScore = store.getState().game.get('currentScore');

    if (Math.abs(newScore - oldScore) > configuration.scoreDifferenceThreshold) {
      store.dispatch(updateScore(this.getScore()));

    }
  }

  private getScore() {
    const dwarfPosition = this.applicationWorld.dwarf.body.position;
    const spinnerPosition = this.applicationWorld.fidgetSpinner.body.position;

    const xDelta = dwarfPosition.x - spinnerPosition.x;
    const yDelta = dwarfPosition.y - spinnerPosition.y;

    return Math.round(Math.sqrt(xDelta ** 2 + yDelta ** 2) * 10) / 10;
  }
}
