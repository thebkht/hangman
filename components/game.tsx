"use client";

import { useEffect, useState } from "react";
import { list } from "./word-list";
import { Header } from "./site-header";
import Figure from "./figure";
import Word from "./word";
import { Button } from "./ui/button";
import Alert from "./alert";

export default function Game() {
     const [selectedWord, setSelectedWord] = useState<string>("");
     const [playable, setPlayable] = useState<boolean>(false);
     const [correctLetters, setCorrectLetters] = useState<string[]>([]);
     const [wrongLetters, setWrongLetters] = useState<string[]>([]);
     const [showNotification, setShowNotification] = useState<boolean>(false);
     const [finalMessage, setFinalMessage] = useState<string>("");

     function playAgain() {
          setPlayable(true);
          setCorrectLetters([]);
          setWrongLetters([]);
          const random = Math.floor(Math.random() * list.length);

          setSelectedWord(list[random].toLowerCase());
     }

     function checkWin(correct: string[], wrong: string[], word: string) {
          let status = "win";

          // Check for win
          word.split("").forEach((letter) => {
               if (!correct.includes(letter.toLowerCase())) {
                    status = "";
               }
          });

          // Check for lose
          if (wrong.length === 6) status = "lose";

          return status;
     }
     const buttons = [];
     for (let i = 65; i <= 90; i++) {
          buttons.push(
               <Button
                    key={i}
                    size={"icon"}
                    disabled={
                         !playable ||
                         correctLetters.includes(String.fromCharCode(i).toLowerCase()) ||
                         wrongLetters.includes(String.fromCharCode(i).toLowerCase())
                    }
                    onClick={() => {
                         const letter = String.fromCharCode(i).toLowerCase();
                         if (selectedWord.toLowerCase().includes(letter)) {
                              if (!correctLetters.includes(letter)) {
                                   setCorrectLetters((current) => [...current, letter]);
                              } else {
                                   setShowNotification(true);
                              }
                         } else {
                              if (!wrongLetters.includes(letter)) {
                                   setWrongLetters((current) => [...current, letter]);
                              } else {
                                   setShowNotification(true);
                              }
                         }
                    }}
               >
                    {String.fromCharCode(i)}
               </Button>
          );
     }

     useEffect(() => {
          if (!playable) {
               setFinalMessage("Start guessing the word");
               setShowNotification(true);
               return;
          }
          if (checkWin(correctLetters, wrongLetters, selectedWord) === "win") {
               setFinalMessage("Congratulations! 🎉 You won!");
               setPlayable(false);
               setShowNotification(true);
          } else if (checkWin(correctLetters, wrongLetters, selectedWord) === "lose") {
               setFinalMessage("Unfortunately you lost. 😕");
               setPlayable(false);
               setShowNotification(true);
          }
     }, [correctLetters, wrongLetters, selectedWord]);

     return (
          <>
               <Header onClick={playAgain} />
               <div className="container p-20 justify-center items-center flex flex-col gap-6">
                    <Figure wrongLetters={wrongLetters} />
                    <Word selectedWord={selectedWord} correctLetters={correctLetters} />
                    <div className="flex gap-2 w-1/2 mt-4 flex-wrap relative">{buttons}</div>
                    <Alert message={finalMessage} playAgain={playAgain} open={showNotification} onOpenChange={setShowNotification} desc={checkWin(correctLetters, wrongLetters, selectedWord) === "lose" ? `...the word was: ${selectedWord}` : ""} />
               </div>
          </>
     );
}
