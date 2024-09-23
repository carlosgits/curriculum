'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

const WritingExercise= () => {
  const [userAnswer, setUserAnswer] = useState('')
  const [feedback, setFeedback] = useState('')
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [correctAnswers, setCorrectAnswers] = useState(0)
  const [showDialog, setShowDialog] = useState(false)

  const exercises = [
    {
      sentence: 'Ayer, María _____ (ir) al supermercado y _____ (comprar) frutas.',
      correctAnswer: 'fue, compró'
    },
    {
      sentence: 'El año pasado, nosotros _____ (viajar) a España y _____ (conocer) muchos lugares interesantes.',
      correctAnswer: 'viajamos, conocimos'
    },
    {
      sentence: 'Anoche, yo _____ (preparar) la cena y luego _____ (ver) una película.',
      correctAnswer: 'preparé, vi'
    },
    {
      sentence: 'La semana pasada, ellos _____ (estudiar) mucho y _____ (aprobar) el examen.',
      correctAnswer: 'estudiaron, aprobaron'
    }
  ]

  const handleSubmit = () => {
    if (userAnswer.toLowerCase() === exercises[currentQuestion].correctAnswer) {
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
        <h3 className="text-lg font-semibold mb-4">Ejercicio de Escritura</h3>
        <p className="mb-4">Completa la oración con el verbo en pasado.</p>
        <p className="mb-2">{exercises[currentQuestion].sentence}</p>
        <Input
          type="text"
          placeholder="Escribe tu respuesta"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="mb-4"
        />
        <Button onClick={handleSubmit}>Enviar Respuesta</Button>
        {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>¡Felicidades!</DialogTitle>
            <DialogDescription>
              Has completado el ejercicio de escritura.
              Obtuviste {correctAnswers} respuestas correctas de {exercises.length}.
            </DialogDescription>
          </DialogHeader>
          <Button onClick={() => setShowDialog(false)}>Cerrar</Button>
        </DialogContent>
      </Dialog>
    </>
  )
}

export default WritingExercise