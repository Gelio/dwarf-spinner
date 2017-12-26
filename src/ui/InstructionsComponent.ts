import { Component as HyperComponent, wire } from 'hyperhtml/esm';

import './InstructionsComponent.scss';

interface ComponentState {
  isMobile: boolean;
}

export class InstructionsComponent extends HyperComponent<ComponentState> {
  constructor() {
    super();

    this.onDesktopDeviceSelected = this.onDesktopDeviceSelected.bind(this);
    this.onMobileDeviceSelected = this.onMobileDeviceSelected.bind(this);
  }

  public get defaultState(): ComponentState {
    return {
      isMobile: window.innerWidth < 800
    };
  }

  public render() {
    const { isMobile } = this.state;
    const instructions = isMobile ? MobileInstructions() : DesktopInstructions();

    return this.html`
      <div class="instructions">
        <h2>Instructions</h2>
        <div class="device-type-options">
          <span>
            <input type="radio" name="device-type" value="mobile" id="mobile-device-radio"
              checked=${isMobile} onchange=${this.onMobileDeviceSelected}
            >
            <label for="mobile-device-radio">Mobile</label>
          </span>

          <span>
            <input type="radio" name="device-type" value="desktop" id="desktop-device-radio"
              checked=${!isMobile} onchange=${this.onDesktopDeviceSelected}
            >
            <label for="desktop-device-radio">Desktop</label>
          </span>
        </div>

        <ul>
          ${instructions}
          <li>You can switch illumination models and shading models with the dropdowns just below
            the game</li>
        </ul>
      </div>
    `;
  }

  private onMobileDeviceSelected() {
    this.setState({
      isMobile: true
    });
  }

  private onDesktopDeviceSelected() {
    this.setState({
      isMobile: false
    });
  }
}

function DesktopInstructions() {
  return wire(DesktopInstructions)`
    <li>Use up/down arrow keys to accelerate the fidget spinner.</li>
    <li>While dwarf is not released, use left/right arrow keys to rotate the fidget spinner horizontally.</li>
    <li>Press the <em>Space</em> key to release the dwarf.</li>
    <li>Press the <em>R</em> key to restart the game.</li>
    <li>While the dwarf is in the air, use left/right arrow keys to rotate the reflector on dwarf's head</li>
    <li>While the dwarf is in the air, click repeatedly to slow down dwarf's rotation</li>
  `;
}

function MobileInstructions() {
  return wire(MobileInstructions)`
    <li>Swipe up/down to accelerate the fidget spinner.</li>
    <li>While dwarf is not released, pan left/right to rotate the fidget spinner horizontally.</li>
    <li>Tap to release the dwarf.</li>
    <li>Long press to restart the game.</li>
    <li>While the dwarf is in the air, pan left/right to rotate the reflector on dwarf's head</li>
    <li>While the dwarf is in the air, tap repeatedly to slow down dwarf's rotation</li>
  `;
}
