'use client'

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const ListeningExercise= () => {
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showDialog, setShowDialog] = useState(false)

  const exercises = [
    {
      audio: '/audio/juan-history.mp3',
      question: '¿Qué hizo Juan por la mañana?',
      options: ['Fue al parque', 'Cocinó pasta', 'Leyó un libro'],
      correctAnswer: 'Fue al parque',
    },
    {
      audio: '/audio/juan-history.mp3',
      question: '¿Qué decidió hacer Juan después de su caminata?',
      options: ['Leer un libro', 'Cocinar pasta', 'Ir al cine'],
      correctAnswer: 'Cocinar pasta',
    },
    {
      audio: '/audio/juan-history.mp3',
      question: '¿Qué hizo Juan por la tarde?',
      options: ['Ver una película', 'Leer un libro', 'Dormir la siesta'],
      correctAnswer: 'Leer un libro',
    },
    {
      audio: '/audio/juan-history.mp3',
      question: '¿Qué actividad terminó Juan al final del día?',
      options: ['Terminar de leer un libro', 'Terminar de cocinar', 'Terminar de ver una serie'],
      correctAnswer: 'Terminar de leer un libro',
    },
  ]

  const handleSubmit = () => {
    if (userAnswer === exercises[currentQuestion].correctAnswer) {
      setFeedback('¡Correcto!')
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setFeedback(`Incorrecto. La respuesta correcta es: ${exercises[currentQuestion].correctAnswer}`)
    }

    if (currentQuestion < exercises.length - 1) {
      setTimeout(() => {
        setFeedback('')
        setUserAnswer('')
        setCurrentQuestion(currentQuestion + 1)
      }, 2000)
    } else {
      setShowDialog(true)
    }
  }

  return (
    <>
      <Card className="p-6 mb-4">
        <h3 className="text-lg font-semibold mb-4">Ejercicio de Escucha</h3>
        <p className="mb-4">Escucha el audio y selecciona la opción correcta.</p>
        <audio controls src={exercises[currentQuestion].audio} className="mb-4 w-full" />
        <p className="mb-2">{exercises[currentQuestion].question}</p>
        <RadioGroup onValueChange={setUserAnswer} className="mb-4">
          {exercises[currentQuestion].options.map((option, index) => (
            <div key={index} className="flex items-center space-x-2">
              <RadioGroupItem value={option} id={`option-${index}`} />
              <Label htmlFor={`option-${index}`}>{option}</Label>
            </div>
          ))}
        </RadioGroup>
        <Button onClick={handleSubmit}>Enviar Respuesta</Button>
        {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog} >
        <DialogContent className="bg-white" >
          <DialogHeader>
            <DialogTitle className="text-green-500">¡Felicidades!</DialogTitle>
            <DialogDescription>
              Has completado el ejercicio de escucha.
              Obtuviste {correctAnswers} respuestas correctas de {exercises.length}.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowDialog(false)}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default ListeningExercise