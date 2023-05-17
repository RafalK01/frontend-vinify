import { useState, useEffect } from 'react'

import TopBackBar from "../components/TopBarBack";

function Support() {
    const [ value, setValue ] = useState(null)
    const [ message, setMessage ] = useState(null)
    const [ previousChats, setPreviousChats]= useState([])
    const [ currentTitle, setCurrentTitle ]= useState(null)
  
    const createNewChat = () => {
      setMessage(null)
      setValue('')
      setCurrentTitle(null)
    }
  
    const handleClick = (uniqueTitle) => {
      setCurrentTitle(uniqueTitle)
      setMessage(null)
      setValue('')
    }
  
    const getMessages = async () => {
      const options = {
        method: 'POST',
        body: JSON.stringify({
          message: value
        }),
        headers: {
          'Content-Type' : 'application/json'
        }
      }
  
      try {
        const response = await fetch('http://localhost:5005/api/completions', options)
        const data = await response.json()
        console.log(data)
        setMessage(data.choices[0].message)
  
      } catch (error) {
        console.error(error)
      }
    }
  
    useEffect(() =>{
      console.log(currentTitle, value, message)
  
      if(!currentTitle && value && message){
        setCurrentTitle(value)
      }
      if(currentTitle && value && message){
        setPreviousChats(prevChats => (
          [...prevChats, 
          {
            title: currentTitle,
            role: 'user',
            content: value
          },
          {
            title: currentTitle,
            role: message.role,
            content:message.content
          }
        ]
        ))
      }
    }, [message, currentTitle])
  
  
   const currentChat =  previousChats.filter(previousChat => previousChat.title === currentTitle)
   const uniqueTitles = Array.from(new Set(previousChats.map(previousChat => previousChat.title)))



    return (
      <div className="support">
        <TopBackBar>
          <div>AI Support</div>
        </TopBackBar>
        {/* //top section with buttons to start a new chat */}
        <section className="text-center mt-2">
          <button className="btn green-button w-75" onClick={createNewChat}> + New Chat</button>
          <ul className="history d-flex m-2 p-1 justify-content-center">
            {uniqueTitles?.map((uniqueTitle, index) => 
            <li className="btn m-1" key={index} onClick={() => handleClick(uniqueTitle)}>{uniqueTitle}</li>)}
          </ul>
        </section>
        {/* --------section with Q&A ------------- */}
        <section className ="h-75 main d-flex flex-column justify-content-between">
          {!currentTitle && <h3 className="text-center mx-3">Cheers, ask me anything about wine... 🍷</h3>}
            <ul className="feed card mx-3">
              {currentChat?.map((chatMessage, index) => 
                <li key={index} className={chatMessage.role === "user" ? "question" : "answer"}>
                <p className="chat-element m-0 p-2">{chatMessage.content}</p>
              </li>)}
            </ul>
            <div className="bottom-section">
              <div className="input-group input-container p-3">
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" class="form-control" placeholder="e.g. What is Chardonnay?"/>
                <div class="input-group-append">
                  <button id="submit" onClick={getMessages} class="btn btn-outline-secondary" type="button">➢</button>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
}

export default Support