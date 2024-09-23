'use client'

import React, { useState } from 'react'
import { ChevronDown, ChevronRight, Book, Clock, Headphones, Mic, Pencil, BookOpen, HelpCircle } from 'lucide-react'
import Link from 'next/link'

type Practice = {
  id: string
  title: string
  icon?: React.ReactNode
  url: string
}

type TestLinks = {
  listening?: string
  speaking?: string
  writing?: string
  grammar?: string
  quiz?: string
}

type Lesson = {
  id: string
  title: string
  icon?: React.ReactNode
  url?: string
  subLessons?: Lesson[]
  practices?: Practice[]
  testLinks?: TestLinks // Enlaces específicos para los tests de cada práctica
}

const createPractices = (lessonId: string, testLinks: TestLinks): Practice[] => [
  { id: `${lessonId}-listening`, title: 'Listening', icon: <Headphones className="w-4 h-4" />, url: testLinks.listening || `${lessonId}/listening` },
  { id: `${lessonId}-speaking`, title: 'Speaking', icon: <Mic className="w-4 h-4" />, url: testLinks.speaking || `${lessonId}/speaking` },
  { id: `${lessonId}-writing`, title: 'Writing', icon: <Pencil className="w-4 h-4" />, url: testLinks.writing || `${lessonId}/writing` },
  { id: `${lessonId}-grammar`, title: 'Grammar', icon: <BookOpen className="w-4 h-4" />, url: testLinks.grammar || `${lessonId}/grammar` },
  { id: `${lessonId}-quiz`, title: 'Quiz', icon: <HelpCircle className="w-4 h-4" />, url: testLinks.quiz || `${lessonId}/quiz` },
]

const lessons: Lesson[] = [
  {
    id: 'verb-tenses',
    title: 'Verb Tenses',
    icon: <Clock className="w-5 h-5" />,
    subLessons: [
      {
        id: 'past',
        title: 'Past',
        practices: createPractices('past', {
          listening: '/test-pages/past/past-listening',
          speaking: '/test-pages/past/past-speaking',
          writing: '/test-pages/past/past-writing',
          grammar: '/test-pages/past/past-grammar',
          quiz: '/test-pages/past/past-quiz'
        }),
      },
      {
        id: 'past-progressive',
        title: 'Past Progressive',
        practices: createPractices('past-progressive', {
          listening: '/tests/past-progressive/listening',
          speaking: '/tests/past-progressive/speaking',
          writing: '/tests/past-progressive/writing',
          grammar: '/tests/past-progressive/grammar',
          quiz: '/tests/past-progressive/quiz'
        }),
      },
      {
        id: 'future',
        title: 'Future',
        practices: createPractices('future', {
          listening: '/tests/future/listening',
          speaking: '/tests/future/speaking',
          writing: '/tests/future/writing',
          grammar: '/tests/future/grammar',
          quiz: '/tests/future/quiz'
        }),
      },
      {
        id: 'future-progressive',
        title: 'Future Progressive',
        practices: createPractices('future-progressive', {
          listening: '/tests/future-progressive/listening',
          speaking: '/tests/future-progressive/speaking',
          writing: '/tests/future-progressive/writing',
          grammar: '/tests/future-progressive/grammar',
          quiz: '/tests/future-progressive/quiz'
        }),
      },
      {
        id: 'present',
        title: 'Present',
        practices: createPractices('present', {
          listening: '/tests/present/listening',
          speaking: '/tests/present/speaking',
          writing: '/tests/present/writing',
          grammar: '/tests/present/grammar',
          quiz: '/tests/present/quiz'
        }),
      },
      {
        id: 'present-progressive',
        title: 'Present Progressive',
        practices: createPractices('present-progressive', {
          listening: '/tests/present-progressive/listening',
          speaking: '/tests/present-progressive/speaking',
          writing: '/tests/present-progressive/writing',
          grammar: '/tests/present-progressive/grammar',
          quiz: '/tests/present-progressive/quiz'
        }),
      },
      {
        id: 'conditional',
        title: 'Conditional',
        practices: createPractices('conditional', {
          listening: '/tests/conditional/listening',
          speaking: '/tests/conditional/speaking',
          writing: '/tests/conditional/writing',
          grammar: '/tests/conditional/grammar',
          quiz: '/tests/conditional/quiz'
        }),
      },
      {
        id: 'subjunctive',
        title: 'Subjunctive',
        practices: createPractices('subjunctive', {
          listening: '/tests/subjunctive/listening',
          speaking: '/tests/subjunctive/speaking',
          writing: '/tests/subjunctive/writing',
          grammar: '/tests/subjunctive/grammar',
          quiz: '/tests/subjunctive/quiz'
        }),
      },
    ],
  },
  {
    id: 'verbs',
    title: 'Verbs',
    icon: <Book className="w-5 h-5" />,
    subLessons: [
      {
        id: 'regular-verbs',
        title: 'Regular Verbs',
        practices: createPractices('regular-verbs', {
          listening: '/tests/regular-verbs/listening',
          speaking: '/tests/regular-verbs/speaking',
          writing: '/tests/regular-verbs/writing',
          grammar: '/tests/regular-verbs/grammar',
          quiz: '/tests/regular-verbs/quiz'
        }),
      },
      {
        id: 'irregular-verbs',
        title: 'Irregular Verbs',
        practices: createPractices('irregular-verbs', {
          listening: '/tests/irregular-verbs/listening',
          speaking: '/tests/irregular-verbs/speaking',
          writing: '/tests/irregular-verbs/writing',
          grammar: '/tests/irregular-verbs/grammar',
          quiz: '/tests/irregular-verbs/quiz'
        }),
      },
      {
        id: 'reflexive-verbs',
        title: 'Reflexive Verbs',
        practices: createPractices('reflexive-verbs', {
          listening: '/tests/reflexive-verbs/listening',
          speaking: '/tests/reflexive-verbs/speaking',
          writing: '/tests/reflexive-verbs/writing',
          grammar: '/tests/reflexive-verbs/grammar',
          quiz: '/tests/reflexive-verbs/quiz'
        }),
      },
      {
        id: 'moods-tenses',
        title: 'Moods and Tenses',
        practices: createPractices('moods-tenses', {
          listening: '/tests/moods-tenses/listening',
          speaking: '/tests/moods-tenses/speaking',
          writing: '/tests/moods-tenses/writing',
          grammar: '/tests/moods-tenses/grammar',
          quiz: '/tests/moods-tenses/quiz'
        }),
      },
      {
        id: 'imperative',
        title: 'Imperative',
        practices: createPractices('imperative', {
          listening: '/tests/imperative/listening',
          speaking: '/tests/imperative/speaking',
          writing: '/tests/imperative/writing',
          grammar: '/tests/imperative/grammar',
          quiz: '/tests/imperative/quiz'
        }),
      },
    ],
  },
  {
    id: 'adjectives',
    title: 'Adjectives',
    icon: <BookOpen className="w-5 h-5" />,
    subLessons: [
      {
        id: 'qualifying-adjectives',
        title: 'Qualifying Adjectives',
        practices: createPractices('qualifying-adjectives', {
          listening: '/tests/qualifying-adjectives/listening',
          speaking: '/tests/qualifying-adjectives/speaking',
          writing: '/tests/qualifying-adjectives/writing',
          grammar: '/tests/qualifying-adjectives/grammar',
          quiz: '/tests/qualifying-adjectives/quiz'
        }),
      },
      {
        id: 'comparatives-superlatives',
        title: 'Comparatives and Superlatives',
        practices: createPractices('comparatives-superlatives', {
          listening: '/tests/comparatives-superlatives/listening',
          speaking: '/tests/comparatives-superlatives/speaking',
          writing: '/tests/comparatives-superlatives/writing',
          grammar: '/tests/comparatives-superlatives/grammar',
          quiz: '/tests/comparatives-superlatives/quiz'
        }),
      },
      {
        id: 'possessive-adjectives',
        title: 'Possessive Adjectives',
        practices: createPractices('possessive-adjectives', {
          listening: '/tests/possessive-adjectives/listening',
          speaking: '/tests/possessive-adjectives/speaking',
          writing: '/tests/possessive-adjectives/writing',
          grammar: '/tests/possessive-adjectives/grammar',
          quiz: '/tests/possessive-adjectives/quiz'
        }),
      },
      {
        id: 'demonstrative-adjectives',
        title: 'Demonstrative Adjectives',
        practices: createPractices('demonstrative-adjectives', {
          listening: '/tests/demonstrative-adjectives/listening',
          speaking: '/tests/demonstrative-adjectives/speaking',
          writing: '/tests/demonstrative-adjectives/writing',
          grammar: '/tests/demonstrative-adjectives/grammar',
          quiz: '/tests/demonstrative-adjectives/quiz'
        }),
      },
    ],
  },
  {
    id: 'pronouns',
    title: 'Pronouns',
    icon: <Clock className="w-5 h-5" />,
    subLessons: [
      {
        id: 'personal-pronouns',
        title: 'Personal Pronouns',
        practices: createPractices('personal-pronouns', {
          listening: '/tests/personal-pronouns/listening',
          speaking: '/tests/personal-pronouns/speaking',
          writing: '/tests/personal-pronouns/writing',
          grammar: '/tests/personal-pronouns/grammar',
          quiz: '/tests/personal-pronouns/quiz'
        }),
      },
      {
        id: 'relative-pronouns',
        title: 'Relative Pronouns',
        practices: createPractices('relative-pronouns', {
          listening: '/tests/relative-pronouns/listening',
          speaking: '/tests/relative-pronouns/speaking',
          writing: '/tests/relative-pronouns/writing',
          grammar: '/tests/relative-pronouns/grammar',
          quiz: '/tests/relative-pronouns/quiz'
        }),
      },
      {
        id: 'indefinite-pronouns',
        title: 'Indefinite Pronouns',
        practices: createPractices('indefinite-pronouns', {
          listening: '/tests/indefinite-pronouns/listening',
          speaking: '/tests/indefinite-pronouns/speaking',
          writing: '/tests/indefinite-pronouns/writing',
          grammar: '/tests/indefinite-pronouns/grammar',
          quiz: '/tests/indefinite-pronouns/quiz'
        }),
      },
      {
        id: 'reflexive-pronouns',
        title: 'Reflexive Pronouns',
        practices: createPractices('reflexive-pronouns', {
          listening: '/tests/reflexive-pronouns/listening',
          speaking: '/tests/reflexive-pronouns/speaking',
          writing: '/tests/reflexive-pronouns/writing',
          grammar: '/tests/reflexive-pronouns/grammar',
          quiz: '/tests/reflexive-pronouns/quiz'
        }),
      },
      {
        id: 'direct-object-pronouns',
        title: 'Direct Object Pronouns',
        practices: createPractices('direct-object-pronouns', {
          listening: '/tests/direct-object-pronouns/listening',
          speaking: '/tests/direct-object-pronouns/speaking',
          writing: '/tests/direct-object-pronouns/writing',
          grammar: '/tests/direct-object-pronouns/grammar',
          quiz: '/tests/direct-object-pronouns/quiz'
        }),
      },
      {
        id: 'indirect-object-pronouns',
        title: 'Indirect Object Pronouns',
        practices: createPractices('indirect-object-pronouns', {
          listening: '/tests/indirect-object-pronouns/listening',
          speaking: '/tests/indirect-object-pronouns/speaking',
          writing: '/tests/indirect-object-pronouns/writing',
          grammar: '/tests/indirect-object-pronouns/grammar',
          quiz: '/tests/indirect-object-pronouns/quiz'
        }),
      },
    ],
  },
  // Agregar las demás categorías como 'Prepositions', 'Conjunctions', 'Nouns', 'Articles', 'Sentences', etc.
]


const PracticeItem: React.FC<{ practice: Practice }> = ({ practice }) => (
  <Link href={practice.url}>
    <div className="bg-gray-50 rounded-lg p-2 flex items-center cursor-pointer transition-all duration-300 hover:bg-gray-100 border border-gray-200">
      <div className="text-indigo-500 mr-2">
        {practice.icon}
      </div>
      <span className="text-sm text-gray-700">{practice.title}</span>
    </div>
  </Link>
)

const LessonCard: React.FC<{ 
  lesson: Lesson; 
  expandedLessons: string[]; 
  toggleLesson: (id: string) => void;
  isSubLesson?: boolean;
}> = ({ lesson, expandedLessons, toggleLesson, isSubLesson = false }) => {
  const isExpanded = expandedLessons.includes(lesson.id)

  return (
    <div className="mb-2">
      <div
        className={`bg-white rounded-lg p-4 flex items-center justify-between cursor-pointer transition-all duration-300 hover:bg-gray-50 border border-gray-200 ${isSubLesson ? 'pl-8' : ''}`}
        onClick={() => toggleLesson(lesson.id)}
      >
        <div className="flex items-center">
          {!isSubLesson && (
            <div className="text-indigo-600 mr-3">
              {lesson.icon}
            </div>
          )}
          <span className="font-medium text-gray-800">{lesson.title}</span>
        </div>
        {(lesson.subLessons || lesson.practices) && (
          isExpanded ? (
            <ChevronDown className="w-5 h-5 text-gray-500" />
          ) : (
            <ChevronRight className="w-5 h-5 text-gray-500" />
          )
        )}
      </div>

      {isExpanded && (
        <div className="pl-4 mt-2 space-y-2">
          {lesson.subLessons?.map((subLesson) => (
            <LessonCard
              key={subLesson.id}
              lesson={subLesson}
              expandedLessons={expandedLessons}
              toggleLesson={toggleLesson}
              isSubLesson={true}
            />
          ))}
          {lesson.practices && (
            <div className="grid grid-cols-1 gap-2">
              {lesson.practices.map((practice) => (
                <PracticeItem key={practice.id} practice={practice} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}

const Sidebar: React.FC = () => {
  const [expandedLessons, setExpandedLessons] = useState<string[]>([])

  const toggleLesson = (lessonId: string) => {
    setExpandedLessons((prev) => {
      if (prev.includes(lessonId)) {
        return prev.filter((id) => !id.startsWith(lessonId))
      } else {
        return [...prev, lessonId]
      }
    })
  }

  return (
    <div className="bg-white w-64 p-6 transition-all duration-300 shadow-lg h-[100vh] overflow-y-auto">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Lecciones</h2>
      {lessons.map((lesson) => (
        <LessonCard
          key={lesson.id}
          lesson={lesson}
          expandedLessons={expandedLessons}
          toggleLesson={toggleLesson}
        />
      ))}
    </div>
  )
}

export default Sidebar
