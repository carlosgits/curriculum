'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Book, Clock, Calendar, Bell, Star, BarChart2 } from 'lucide-react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

type Lesson = {
  id: string
  title: string
  icon: React.ReactNode
  subLessons?: Lesson[]
}

const lessons: Lesson[] = [
    {
      id: 'verb-tenses',
      title: 'Verb Tenses',
      icon: <Clock className="w-5 h-5" />,
      subLessons: [
        { id: 'past', title: 'Past', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'past-progressive', title: 'Past Progressive', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'future', title: 'Future', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'future-progressive', title: 'Future Progressive', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'present', title: 'Present', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'present-progressive', title: 'Present Progressive', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'conditional', title: 'Conditional', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'subjunctive', title: 'Subjunctive', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'verbs',
      title: 'Verbs',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'regular-verbs', title: 'Regular Verbs', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'irregular-verbs', title: 'Irregular Verbs', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'reflexive-verbs', title: 'Reflexive Verbs', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'moods-tenses', title: 'Moods and Tenses', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'imperative', title: 'Imperative', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'adjectives',
      title: 'Adjectives',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'qualifying-adjectives', title: 'Qualifying Adjectives', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'comparatives-superlatives', title: 'Comparatives and Superlatives', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'possessive-adjectives', title: 'Possessive Adjectives', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'demonstrative-adjectives', title: 'Demonstrative Adjectives', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'pronouns',
      title: 'Pronouns',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'personal-pronouns', title: 'Personal Pronouns', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'relative-pronouns', title: 'Relative Pronouns', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'indefinite-pronouns', title: 'Indefinite Pronouns', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'reflexive-pronouns', title: 'Reflexive Pronouns', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'direct-object-pronouns', title: 'Direct Object Pronouns', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'indirect-object-pronouns', title: 'Indirect Object Pronouns', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'prepositions',
      title: 'Prepositions',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'prepositions-of-place', title: 'Prepositions of Place', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'prepositions-of-time', title: 'Prepositions of Time', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'compound-prepositions', title: 'Compound Prepositions', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'conjunctions',
      title: 'Conjunctions',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'coordinating-conjunctions', title: 'Coordinating Conjunctions', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'subordinating-conjunctions', title: 'Subordinating Conjunctions', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'nouns',
      title: 'Nouns',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'common-proper-nouns', title: 'Common and Proper Nouns', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'countable-uncountable-nouns', title: 'Countable and Uncountable Nouns', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'gender-number', title: 'Gender and Number of Nouns', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'articles',
      title: 'Articles',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'definite-articles', title: 'Definite Articles', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'indefinite-articles', title: 'Indefinite Articles', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'sentences',
      title: 'Sentences',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'simple-sentences', title: 'Simple Sentences', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'compound-sentences', title: 'Compound Sentences', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'subordinate-sentences', title: 'Subordinate Sentences', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'adverbs',
      title: 'Adverbs',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'adverbs-of-place', title: 'Adverbs of Place', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'adverbs-of-time', title: 'Adverbs of Time', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'adverbs-of-manner', title: 'Adverbs of Manner', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
    {
      id: 'agreement',
      title: 'Agreement',
      icon: <Book className="w-5 h-5" />,
      subLessons: [
        { id: 'gender-number-agreement', title: 'Gender and Number Agreement', icon: <ChevronRight className="w-4 h-4" /> },
        { id: 'verb-agreement', title: 'Verb Agreement', icon: <ChevronRight className="w-4 h-4" /> },
      ],
    },
  ]
  

const LessonCard: React.FC<{ lesson: Lesson; isExpanded: boolean; onToggle: () => void }> = ({ lesson, isExpanded, onToggle }) => {
  return (
    <div className="mb-2">
      <div
        className="bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-gray-50 border border-gray-200"
        onClick={onToggle}
      >
        <div className="flex items-center">
          <div className="text-indigo-600 mr-3">
            {lesson.icon}
          </div>
          <span className="font-medium text-gray-800">{lesson.title}</span>
        </div>
        {lesson.subLessons && (
          isExpanded ? <ChevronDown className="w-5 h-5 text-gray-500" /> : <ChevronRight className="w-5 h-5 text-gray-500" />
        )}
      </div>
      {isExpanded && lesson.subLessons && (
        <div className="pl-4 mt-2 space-y-2">
          {lesson.subLessons.map((subLesson) => (
            <div key={subLesson.id} className="bg-gray-50 rounded-lg p-3 flex items-center cursor-pointer transition-all duration-300 hover:bg-gray-100 border border-gray-200">
              <div className="text-indigo-500 mr-2">
                {subLesson.icon}
              </div>
              <span className="text-gray-700">{subLesson.title}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const ProgressBar: React.FC<{ value: number; label: string }> = ({ value, label }) => {
  return (
    <div className="mb-4">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        <span className="text-sm font-medium text-gray-500">{value}%</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div
          className="bg-indigo-600 h-2 rounded-full transition-all duration-500 ease-out"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </div>
  )
}

export default function SpanishExamElegant() {
  const [expandedLessons, setExpandedLessons] = useState<string[]>([])
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)

  const toggleLesson = (lessonId: string) => {
    setExpandedLessons((prev) =>
      prev.includes(lessonId) ? prev.filter((id) => id !== lessonId) : [...prev, lessonId]
    )
  }

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev)
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className={`bg-white w-64 p-6 transition-all duration-300 shadow-lg ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <h2 className="text-2xl font-semibold text-gray-800 mb-6">Lecciones</h2>
        {lessons.map((lesson) => (
          <LessonCard
            key={lesson.id}
            lesson={lesson}
            isExpanded={expandedLessons.includes(lesson.id)}
            onToggle={() => toggleLesson(lesson.id)}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <button
          className="mb-6 bg-white text-indigo-600 py-2 px-4 rounded-lg shadow-md hover:bg-indigo-50 transition-colors duration-300 font-medium border border-indigo-200"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Cerrar Menú' : 'Abrir Menú'}
        </button>

        <h1 className="text-4xl font-bold text-gray-800 mb-8">Examen de Español</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Progress Section */}
          <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6 border border-gray-200">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">Tu Progreso</h2>
            <div className="flex items-center mb-8">
              <div className="w-32 h-32 mr-6">
                <CircularProgressbar
                  value={75}
                  text={`75%`}
                  styles={buildStyles({
                    textSize: '20px',
                    pathColor: '#4f46e5',
                    textColor: '#1f2937',
                    trailColor: '#e5e7eb',
                  })}
                />
              </div>
              <div>
                <p className="text-gray-600 mb-3">Excelente progreso. Continúa con tu aprendizaje.</p>
                <button className="bg-indigo-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-indigo-700 transition-colors duration-300 shadow-md">
                  Iniciar Examen
                </button>
              </div>
            </div>
            <ProgressBar value={80} label="Comprensión Lectora" />
            <ProgressBar value={65} label="Expresión Escrita" />
            <ProgressBar value={70} label="Comprensión Auditiva" />
            <ProgressBar value={60} label="Expresión Oral" />
          </div>

          {/* Notifications and Recent Lessons */}
          <div className="space-y-8">
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Notificaciones</h2>
              <ul className="space-y-4">
                <li className="flex items-center">
                  <Bell className="w-5 h-5 text-indigo-600 mr-3" />
                  <span className="text-gray-600">Próximo examen: 15 de julio</span>
                </li>
                <li className="flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-3" />
                  <span className="text-gray-600">5 lecciones completadas esta semana</span>
                </li>
              </ul>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Lecciones Recientes</h2>
              <ul className="space-y-4">
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Verbos Irregulares</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Repasar</a>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Preposiciones de Lugar</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Repasar</a>
                </li>
                <li className="flex items-center justify-between">
                  <span className="text-gray-600">Pasado Progresivo</span>
                  <a href="#" className="text-indigo-600 hover:text-indigo-800 font-medium">Repasar</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-8 bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">Estadísticas de Aprendizaje</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <Calendar className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">15</p>
              <p className="text-gray-600">Días de racha</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <Book className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">250</p>
              <p className="text-gray-600">Palabras aprendidas</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">10h</p>
              <p className="text-gray-600">Tiempo de estudio</p>
            </div>
            <div className="bg-gray-50 rounded-lg p-4 text-center border border-gray-200">
              <BarChart2 className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
              <p className="text-2xl font-bold text-gray-800">85%</p>
              <p className="text-gray-600">Precisión en exámenes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
