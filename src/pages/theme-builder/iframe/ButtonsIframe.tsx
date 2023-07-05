import Nullstack from "nullstack";

import { Button } from "nullwind";

import BaseIframe from "./BaseIframe";
interface IButtonsIframe {
  theme: object;
}
class ButtonsIframe extends Nullstack<IButtonsIframe> {
  render({ theme }) {
    return (
      <BaseIframe title="Buttons">
        <div class="flex flex-row gap-4">
          <Button theme={theme}>Primary</Button>
          <Button theme={theme} color="secondary">
            Secondary
          </Button>
          <Button theme={theme} color="info">
            Info
          </Button>
          <Button theme={theme} color="success">
            Success
          </Button>
          <Button theme={theme} color="warning">
            Warning
          </Button>
          <Button theme={theme} color="danger">
            Danger
          </Button>
        </div>
        <div class="flex flex-row gap-4">
          <Button theme={theme} outline>
            Primary
          </Button>
          <Button theme={theme} outline color="secondary">
            Secondary
          </Button>
          <Button theme={theme} outline color="info">
            Info
          </Button>
          <Button theme={theme} outline color="success">
            Success
          </Button>
          <Button theme={theme} outline color="warning">
            Warning
          </Button>
          <Button theme={theme} outline color="danger">
            Danger
          </Button>
        </div>
        <div class="flex flex-rox gap-4 items-center">
          <Button theme={theme} size="sm">
            SM
          </Button>
          <Button theme={theme}>Base</Button>
          <Button theme={theme} size="lg">
            LG
          </Button>
        </div>
        <div class="flex flex-row gap-4">
          <Button theme={theme} fullSized>
            Full Sized
          </Button>
        </div>
        <div class="flex flex-row gap-4">
          <Button theme={theme} disabled>
            Disabled
          </Button>
        </div>
      </BaseIframe>
    );
  }
}

export default ButtonsIframe;
