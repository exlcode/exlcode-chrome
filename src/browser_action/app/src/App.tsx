import * as React from "react";
import { Classes, Button, ButtonGroup } from "@blueprintjs/core";

const DARK_THEME = Classes.DARK;

declare global {
  const chrome: any;
}

class App extends React.Component {
  public render() {
    return (
      <div
        style={{
          height: "100%",
          width: "100%",
          padding: "20px",
          backgroundColor: "#1B232F"
        }}
        className={DARK_THEME}
      >
        <img src="exlcode-logo.svg" style={{ height: "40px" }} />
        <div
          style={{ marginTop: "15px", marginRight: "9px", marginLeft: "9px" }}
        >
          <p style={{ textAlign: "center" }}>
            The EXLcode Chrome extension currently supports launching the online
            IDE directly from this popup, as well as via "Edit with EXLcode"
            buttons rendered on GitHub repo pages.
          </p>
          <p style={{ textAlign: "center" }}>
            Support for fully-offline editing and more 3rd party platforms is
            coming soon!
          </p>
          <ButtonGroup style={{ paddingTop: "8px", width: "100%" }}>
            <Button
              style={{ width: "50%" }}
              intent={"primary"}
              onClick={this.handleOpenIDE}
              rightIcon="share"
            >
              Open IDE
            </Button>
            <Button
              style={{ width: "50%" }}
              onClick={this.handleSendFeedback}
              rightIcon="feed"
            >
              Feedback
            </Button>
          </ButtonGroup>

          <div />
          <div
            style={{ width: "100%", textAlign: "center", marginTop: "15px" }}
          >
            <a onClick={this.handleStarMeOnGH}>Star me on GitHub</a>
          </div>
        </div>
      </div>
    );
  }

  private handleStarMeOnGH = () => {
    chrome.tabs.create({
      url: "https://github.com/exlcode/exlcode-chrome"
    });
  };

  private handleSendFeedback = () => {
    chrome.tabs.create({
      url:
        "https://github.com/exlcode/exlcode-chrome/issues/new?labels=feedback"
    });
  };

  private handleOpenIDE = () => {
    chrome.tabs.create({ url: "https://exlcode.com/ide" });
  };
}

export default App;
