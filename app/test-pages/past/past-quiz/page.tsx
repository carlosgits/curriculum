'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const QuizExercise = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({})
  const [feedback, setFeedback] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showDialog, setShowDialog] = useState(false)

  const exercises = [
    {
      question: '¿Cuál es la forma correcta en pasado?',
      options: ['Yo hablo', 'Yo hablé', 'Yo hablaba'],
      correctAnswer: 'Yo hablé'
    },
    {
      question: '¿Qué tiempo verbal se usa para acciones completadas en el pasado?',
      options: ['Presente', 'Pretérito perfecto simple', 'Futuro'],
      correctAnswer: 'Pretérito perfecto simple'
    },
    {
      question: '¿Cuál es el pasado de "ir"?',
      options: ['Iba', 'Fue', 'Ido'],
      correctAnswer: 'Fue'
    },
    {
      question: '¿Qué verbo está en pretérito perfecto simple?',
      options: ['He comido', 'Comía', 'Comí'],
      correctAnswer: 'Comí'
    }
  ]

  const handleSubmit = () => {
    const currentAnswer = userAnswers[currentQuestion]
    const isCorrect = currentAnswer === exercises[currentQuestion].correctAnswer

    if (isCorrect) {
      setFeedback('¡Correcto!')
      setCorrectAnswers(correctAnswers + 1)
    } else {
      setFeedback(`Incorrecto. La respuesta correcta es: ${exercises[currentQuestion].correctAnswer}`)
    }

    if (currentQuestion < exercises.length - 1) {
      setTimeout(() => {
        setFeedback('')
        setCurrentQuestion(currentQuestion + 1)
      }, 2000)
    } else {
      setShowDialog(true)
    }
  }

  return (
    <>
      <Card className="p-6 mb-4">
        <h3 className="text-lg font-semibold mb-4">Quiz de Pasado</h3>
        <p className="mb-4">Responde a las siguientes preguntas sobre el uso del pasado.</p>
        <div className="mb-4">
          <p className="mb-2">{exercises[currentQuestion].question}</p>
          <RadioGroup 
            onValueChange={(value) => setUserAnswers(prev => ({ ...prev, [currentQuestion]: value }))} 
            value={userAnswers[currentQuestion]}
            className="mb-2"
          >
            {exercises[currentQuestion].options.map((option, optionIndex) => (
              <div key={optionIndex} className="flex items-center space-x-2">
                <RadioGroupItem value={option} id={`question-${currentQuestion}-option-${optionIndex}`} />
                <Label htmlFor={`question-${currentQuestion}-option-${optionIndex}`}>{option}</Label>
              </div>
            ))}
          </RadioGroup>
        </div>
        <Button onClick={handleSubmit}>Enviar Respuesta</Button>
        {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¡Felicidades!</DialogTitle>
            <DialogDescription>
              Has completado el quiz de pasado.
              Obtuviste {correctAnswers} respuestas correctas de {exercises.length}.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowDialog(false)}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default QuizExercise