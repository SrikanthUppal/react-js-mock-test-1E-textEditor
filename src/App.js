import {Component} from 'react'
import TextEditor from './components/TextEditor'
import TextContext from './context/TextContext'
import './App.css'

// Replace your code here
class App extends Component {
  state = {
    isBold: false,
    isItalic: false,
    isDecorate: false,
  }

  toggleBold = () => {
    this.setState(prev => ({
      isBold: !prev.isBold,
    }))
  }

  toggleItalic = () => {
    this.setState(prev => ({
      isItalic: !prev.isItalic,
    }))
  }

  toggleDecorate = () => {
    this.setState(prev => ({
      isDecorate: !prev.isDecorate,
    }))
  }

  render() {
    const {isBold, isItalic, isDecorate} = this.state
    console.log(isBold)
    console.log(isItalic)
    console.log(isDecorate)
    return (
      <TextContext.Provider
        value={{
          isBold,
          isItalic,
          isDecorate,
          toggleBold: this.toggleBold,
          toggleItalic: this.toggleItalic,
          toggleDecorate: this.toggleDecorate,
        }}
      >
        <TextEditor />
      </TextContext.Provider>
    )
  }
}

export default App
