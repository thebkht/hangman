"use client"
import {
     InputOTP,
     InputOTPGroup,
     InputOTPSeparator,
     InputOTPSlot,
} from "@/components/ui/input-otp"


const Word = ({ selectedWord, correctLetters }: { selectedWord: string, correctLetters: string[] }) => {
     const binarySelectedWord = selectedWord.split("").map((letter) => letter.charCodeAt(0).toString(2))
     const binaryCorrectLetters = correctLetters.map((letter) => letter.charCodeAt(0).toString(2))

     const word = binarySelectedWord.map((letter) => {
          console.log(binaryCorrectLetters.includes(letter))
          return binaryCorrectLetters.includes(letter) ? String.fromCharCode(parseInt(letter, 2)) : " "
     }).join("")
     console.log(selectedWord)

     return (
          <>
               <InputOTP maxLength={word.length} value={word} className="my-8">
                    <InputOTPGroup>
                         {selectedWord.split("").map((letter, index) => (
                              <InputOTPSlot className="h-12 w-12 text-lg" key={index} index={index} />
                         ))}
                    </InputOTPGroup>
               </InputOTP>
          </>
     )
}

export default Word