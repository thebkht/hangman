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