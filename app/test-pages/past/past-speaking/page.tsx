'use client'

import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Mic } from 'lucide-react'
import Image from 'next/image'

const SpeakingExercise = () => {
  const [isRecording, setIsRecording] = useState(false)
  const [feedback, setFeedback] = useState('')

  const exercise = {
    image: '/images/party.jpg',
    promptText: 'Ayer, en la fiesta...'
  }

  const handleRecording = () => {
    setIsRecording(!isRecording)
    if (isRecording) {
      setFeedback('Grabación finalizada. Un tutor revisará tu respuesta pronto.')
    } else {
      setFeedback('Grabación iniciada. Habla claramente.')
    }
  }

  return (
    <Card className="p-6 mb-4">
      <h3 className="text-lg font-semibold mb-4">Ejercicio de Habla</h3>
      <p className="mb-4">Describe lo que ves en la imagen usando el tiempo pasado.</p>
      <Image src={exercise.image} alt="Imagen para describir" className="mb-4 w-full" />
      <p className="mb-4">{exercise.promptText}</p>
      <Button onClick={handleRecording} className="flex items-center">
        <Mic className="mr-2" />
        {isRecording ? 'Detener Grabación' : 'Iniciar Grabación'}
      </Button>
      {feedback && <p className="mt-4 font-semibold">{feedback}</p>}
    </Card>
  )
}

export default SpeakingExercise