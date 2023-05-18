import { useState, useEffect } from 'react'

import TopBackBar from "../components/TopBarBack";

const REACT_APP_API_URL = process.env.REACT_APP_API_URL


function Support() {
    const [ value, setValue ] = useState(null)
    const [ message, setMessage ] = useState(null)
    const [ previousChats, setPreviousChats]= useState([])
    const [ currentTitle, setCurrentTitle ]= useState(null)
    const [ loading, setLoading ]= useState(false)

  
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
      setLoading(true)
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
       // const response = await fetch('http://localhost:5005/api/completions', options)
        const response = await fetch(`${REACT_APP_API_URL}/completions`, options)
        const data = await response.json()
        setMessage(data.choices[0].message)
        setLoading(false)

      } catch (error) {
        console.error(error)
      }
    }
  
    useEffect(() =>{
  
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
              {loading && 
                <div className="d-flex justify-content-center">
                  <div className="spinner-border " role="status">
                    <span className="sr-only"></span>
                  </div>
                </div>   
              }

            </ul>
            <div className="bottom-section">
              <div className="input-group input-container p-3">
                <input value={value} onChange={(e) => setValue(e.target.value)} type="text" className="form-control search-input" placeholder="e.g. What is Chardonnay?"/>
                <div class="">
                  <button id="submit" onClick={getMessages} class="btn search-btn py-2" type="button">➢</button>
                </div>
              </div>
            </div>
        </section>
      </div>
    )
}

export default Support