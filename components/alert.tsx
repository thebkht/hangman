"use client"

import {
     AlertDialog,
     AlertDialogAction,
     AlertDialogCancel,
     AlertDialogContent,
     AlertDialogDescription,
     AlertDialogFooter,
     AlertDialogHeader,
     AlertDialogTitle,
     AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

export default function Alert({ message, desc, playAgain, ...props }: { message: string, playAgain: () => void, desc: string } & React.ComponentPropsWithoutRef<typeof AlertDialog>) {
     return (
          <AlertDialog {...props}>
               <AlertDialogContent className="max-w-xs">
                    <AlertDialogHeader className="sm:text-center">
                         <AlertDialogTitle>{message}</AlertDialogTitle>
                         {desc !== "" && <AlertDialogDescription>{desc}</AlertDialogDescription>}
                    </AlertDialogHeader>
                    <AlertDialogFooter className="sm:justify-center">
                         <AlertDialogAction onClick={playAgain}>New Game</AlertDialogAction>
                    </AlertDialogFooter>
               </AlertDialogContent>
          </AlertDialog>
     )
}