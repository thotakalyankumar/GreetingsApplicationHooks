import {useState} from 'react'

import {
  MainContainer,
  NameInput,
  MsgContent,
  NameText,
} from './styledComponents'

const GreetUser = () => {
  const [name, setName] = useState('')
  const onChangeName = event => setName(event.target.value)
  return (
    <MainContainer>
      <NameInput
        type="text"
        value={name}
        placeholder="Your name"
        onChange={onChangeName}
      />
      <MsgContent>
        Hello <NameText>{name}</NameText>
      </MsgContent>
    </MainContainer>
  )
}

export default GreetUser
