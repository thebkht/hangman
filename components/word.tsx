"use client"
import {
     InputOTP,
     InputOTPGroup,
     InputOTPSeparator,
     InputOTPSlot,
} from "@/components/ui/input-otp"


const Word = ({ selectedWord, correctLetters }: { selectedWord: string, correctLetters: string[] }) => {
     const word = selectedWord.split("").map((letter) => (correctLetters.includes(letter) ? letter : " ")).join("")

     return (
          <>
               <InputOTP maxLength={word.length} value={word}>
                    <InputOTPGroup>
                         {selectedWord.split("").map((letter, index) => (
                              <InputOTPSlot key={index} index={index} />
                         ))}
                    </InputOTPGroup>
               </InputOTP>
               <p>{selectedWord}</p>
               <p>{word}</p>
               {correctLetters}
          </>
     )
}

export default Word