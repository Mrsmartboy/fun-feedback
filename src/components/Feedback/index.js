import {useState} from 'react'
import {Container,CardContainer,Header,ListContainer,ItemContainer,LogoImage,Name,LoveEmoji,ThankYou,Support} from './styled'
const Feedback=(props)=>{
    const [action,setAction]=useState(true)
    const {resources}=props  
    const {emojis,loveEmojiUrl}=resources 

    const onClickImage=()=>{ 
        setAction(prevState=>(!prevState))

    }


    return(
        <Container>
            <CardContainer>
                {action?<>
                <Header>How satisfied are you with our customer support performance?</Header>
                <ListContainer>
                  {emojis.map(eachEmoji=>(
                    <ItemContainer>
                        <LogoImage src={eachEmoji.imageUrl} alt={eachEmoji.name} onClick={onClickImage}/>
                        <Name>{eachEmoji.name}</Name>
                    </ItemContainer>
                  ))}
                </ListContainer>
                </>:(<>
                  <LoveEmoji src={loveEmojiUrl} alt="love emoji" />
                  <ThankYou>Thank You!</ThankYou>
                  <Support>We will use your feedback to improve our customer support performance.</Support>
                </>)}
                
            </CardContainer>
        </Container>
    )

}

export default Feedback