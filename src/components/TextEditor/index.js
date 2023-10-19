import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'
import TextContext from '../../context/TextContext'

import {
  AppContainer,
  ResponsiveContainer,
  LeftSide,
  Heading,
  Image,
  RightSide,
  ButtonsContainer,
  Button,
  Button1,
  Button2,
  TextArea,
  ListItem,
} from './styledComponents'

const TextEditor = () => (
  <TextContext.Consumer>
    {value => {
      const {
        isBold,
        toggleBold,
        isItalic,
        toggleItalic,
        isDecorate,
        toggleDecorate,
      } = value

      const color = isBold ? '#faff00' : '#f1f5f9'
      const fontWeight = isBold ? 'bold' : 'normal'
      const color1 = isItalic ? '#faff00' : '#f1f5f9'
      const fontStyle = isItalic ? 'italic' : 'normal'
      const color2 = isDecorate ? '#faff00' : '#f1f5f9'
      const textDecoration = isDecorate ? 'underline' : 'normal'

      const onChangeBold = () => {
        toggleBold()
      }
      const onChangeItalic = () => {
        toggleItalic()
      }
      const onChangeTextDecoration = () => {
        toggleDecorate()
      }
      return (
        <AppContainer>
          <ResponsiveContainer>
            <LeftSide>
              <Heading>Text Editor</Heading>
              <Image
                src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png "
                alt="text editor"
              />
            </LeftSide>
            <RightSide>
              <ButtonsContainer>
                <ListItem>
                  <Button
                    color={color}
                    data-testid="bold"
                    onClick={onChangeBold}
                  >
                    <VscBold size={22} />
                  </Button>
                </ListItem>
                <ListItem>
                  <Button1
                    color1={color1}
                    data-testid="italic"
                    onClick={onChangeItalic}
                  >
                    <GoItalic size={22} />
                  </Button1>
                </ListItem>
                <ListItem>
                  <Button2
                    color2={color2}
                    data-testid="underline"
                    onClick={onChangeTextDecoration}
                  >
                    <AiOutlineUnderline size={22} />
                  </Button2>
                </ListItem>
              </ButtonsContainer>
              <TextArea
                fontWeight={fontWeight}
                fontStyle={fontStyle}
                textDecoration={textDecoration}
                rows={6}
                cols={50}
              />
            </RightSide>
          </ResponsiveContainer>
        </AppContainer>
      )
    }}
  </TextContext.Consumer>
)
export default TextEditor
