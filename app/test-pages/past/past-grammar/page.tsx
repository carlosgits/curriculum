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

const GrammarExercise = () => {
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showDialog, setShowDialog] = useState(false)

  const exercises = [
    {
      question: 'Yo _____ (comer) una manzana ayer.',
      options: ['comí', 'comió', 'comieron'],
      correctAnswer: 'comí'
    },
    {
      question: 'Ellos _____ (ir) al parque la semana pasada.',
      options: ['fueron', 'iban', 'van'],
      correctAnswer: 'fueron'
    },
    {
      question: 'Nosotros _____ (hacer) la tarea anoche.',
      options: ['hacemos', 'hicimos', 'hacíamos'],
      correctAnswer: 'hicimos'
    },
    {
      question: 'Tú _____ (escribir) una carta a tu amigo el mes pasado.',
      options: ['escribes', 'escribiste', 'escribías'],
      correctAnswer: 'escribiste'
    }
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
        <h3 className="text-lg font-semibold mb-4">Ejercicio de Gramática</h3>
        <p className="mb-4">Elige la forma correcta del verbo en pasado.</p>
        <p className="mb-2">{exercises[currentQuestion].question}</p>
        <RadioGroup onValueChange={setUserAnswer} value={userAnswer} className="mb-4">
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

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¡Felicidades!</DialogTitle>
            <DialogDescription>
              Has completado el ejercicio de gramática.
              Obtuviste {correctAnswers} respuestas correctas de {exercises.length}.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowDialog(false)}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default GrammarExercise