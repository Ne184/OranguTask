import EventEmitter from "eventemitter3";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }

  constructor() {
    super();
    this.emojis = [];
    this.banana = "🍌";
    this.emit(Application.events.READY);
  }

  setEmojis(emojis) {
    this.emojis = emojis;
    let modifiedEmojis = this.addBananas();
    let paragraph = document.createElement('p');
    const div = document.querySelector("div");
    paragraph.textContent = modifiedEmojis;
    div.appendChild(paragraph);
  }

  addBananas() {
    // this.setEmojis(["monkey1","monkey2"]);
    let modifiedArray = (this.emojis).map((e) =>{
      return e + "🍌";
    });
    return modifiedArray;
  }
}
