import React from 'react';

const texts = [
  'I like long walks on the beach...',
  'I can have a heated debate on chocolate...',
  'Another extra thing about me...',
  'Oh, and I love to code!'
];

let changer;
export default class ScrollingTextComp extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      running: true
    };
  }

  componentDidMount() {
    this.changeText(texts);
  }

  componentWillUnmount = () => {
    clearInterval(changer);
  };

  changeText = texts => {
    let textIndex = 0;
    let letterIndex = 0;
    let currentText;
    let currentLetter;
    let backspace = false;
    let textArr = texts;
    changer = setInterval(
      () => {
        if (!this.state.running) clearInterval(changer);
        currentText = textArr[textIndex];
        currentLetter = currentText[letterIndex];
        if (backspace) {
          if (this.state.text.length) {
            this.setState({
              text: this.state.text.slice(0, -1)
            });
          } else {
            backspace = false;
          }
        } else {
          this.setState({
            text: this.state.text.concat(currentLetter)
          });
          letterIndex += 1;
          if (
            this.state.text.includes('...') ||
            this.state.text.includes('!')
          ) {
            backspace = true;
            textIndex += 1;
            letterIndex = 0;
            if (textIndex === textArr.length) clearInterval(changer);
          }
        }
      },
      80,
      textArr
    );
  };

  render() {
    return (
      <div>
        {this.state.text ? (
          <p style={{ color: 'grey', fontSize: '20px' }}>{this.state.text}</p>
        ) : (
          <p style={{ color: 'transparent', fontSize: '20px' }}>#######</p>
        )}
      </div>
    );
  }
}
