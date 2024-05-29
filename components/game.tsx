'use client'

import { useEffect, useState } from "react"
import { list } from "./word-list"
import { Header } from "./site-header"
import Figure from "./figure"
import Word from "./word"
import { Button } from "./ui/button"

export default function Game() {
     const [selectedWord, setSelectedWord] = useState<string>("")
     const [playable, setPlayable] = useState<boolean>(false)
     const [correctLetters, setCorrectLetters] = useState<string[]>([])
     const [wrongLetters, setWrongLetters] = useState<string[]>([])
     const [showNotification, setShowNotification] = useState<boolean>(false)

     function playAgain() {
          setPlayable(true)
          setCorrectLetters([])
          setWrongLetters([])
          const random = Math.floor(Math.random() * list.length)
          setSelectedWord(list[random])
     }

     const buttons = []
     for (let i = 65; i <= 90; i++) {
          buttons.push(
               <Button key={i}
                    size={'icon'}
                    disabled={correctLetters.includes(String.fromCharCode(i).toLowerCase()) || wrongLetters.includes(String.fromCharCode(i).toLowerCase())}
                    onClick={() => {
                         const letter = String.fromCharCode(i).toLowerCase()
                         if (selectedWord.includes(letter)) {
                              if (!correctLetters.includes(letter)) {
                                   setCorrectLetters((current) => [...current, letter])
                              } else {
                                   setShowNotification(true)
                              }
                         } else {
                              if (!wrongLetters.includes(letter)) {
                                   setWrongLetters((current) => [...current, letter])
                              } else {
                                   setShowNotification(true)
                              }
                         }
                    }}>
                    {String.fromCharCode(i)}
               </Button>
          )
     }

     return (<>
          <Header onClick={playAgain} />
          <div className="container p-24">
               <Figure wrongLetters={wrongLetters} />
               <Word selectedWord={selectedWord} correctLetters={correctLetters} />
               <div className="flex gap-2 w-1/3 flex-wrap">
                    {buttons}
               </div>
          </div>
     </>)
}