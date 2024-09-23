'use client'

import React from 'react'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'
import { Calendar, Clock, Book, Award, TrendingUp, MessageCircle, Target, Zap } from 'lucide-react'

const BarProgress = ({ title, score, color }) => (
  <div className="bg-gray-800 rounded-lg shadow-lg p-4">
    <h3 className="text-lg font-semibold mb-2 text-gray-200">{title}</h3>
    <div className="relative pt-1">
      <div className="flex mb-2 items-center justify-between">
        <div>
          <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-gray-900" style={{backgroundColor: color}}>
            {score}%
          </span>
        </div>
      </div>
      <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-700">
        <div style={{ width: `${score}%`, backgroundColor: color }} className="shadow-none flex flex-col text-center whitespace-nowrap text-gray-900 justify-center"></div>
      </div>
    </div>
  </div>
)

const StatCard = ({ icon, title, value, color }) => (
  <div className={`bg-gray-800 text-gray-200 p-3 rounded-lg flex items-center border border-${color}`}>
    {React.cloneElement(icon, { className: `w-8 h-8 text-${color}` })}
    <div className="ml-3">
      <p className="text-sm">{title}</p>
      <p className="text-2xl font-bold">{value}</p>
    </div>
  </div>
)

const LevelDisplay = ({ score, level }) => (
  <div className="relative w-64 h-64">
    <div className="absolute inset-0 bg-gray-800 rounded-lg transform rotate-45 border-4 border-cyan-400"></div>
    <div className="absolute inset-2 bg-gray-900 rounded-lg transform rotate-45"></div>
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="text-center">
        <div className="text-sm font-semibold text-gray-400">SPANISH LEVEL</div>
        <div className="text-4xl font-bold text-cyan-400">{score}/100</div>
        <div className="text-lg font-medium text-pink-500">{level}</div>
      </div>
    </div>
  </div>
)

export default function Component() {
  const scores = {
    overall: 75,
    vocabulary: 82,
    grammar: 68,
    pronunciation: 78,
    listening: 72,
    reading: 80,
    speaking: 70,
    writing: 74,
  }

  const stats = {
    streakDays: 15,
    wordsLearned: 520,
    hoursStudied: 42,
    lessonsCompleted: 28,
    xpPoints: 3750,
    conversationMinutes: 120,
  }

  const nextLesson = "Subjunctive: Wishes and Hopes"
  const dailyGoal = 30 // minutes

  const getLevel = (score) => {
    if (score >= 90) return "C2 Mastery"
    if (score >= 75) return "C1 Advanced"
    if (score >= 60) return "B2 Upper Intermediate"
    if (score >= 45) return "B1 Intermediate"
    if (score >= 30) return "A2 Elementary"
    return "A1 Beginner"
  }

  return (
    <div className="min-h-screen bg-gray-900 p-8">

      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl shadow-2xl p-8 mb-8">
              <div className="flex justify-center items-center mb-8">
                <LevelDisplay score={scores.overall} level={getLevel(scores.overall)} />
              </div>
              <p className="text-center text-cyan-400 mb-6">Great progress! Keep improving your Spanish every day.</p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                <StatCard icon={<Calendar />} title="Streak" value={`${stats.streakDays} days`} color="cyan-400" />
                <StatCard icon={<Book />} title="Words Learned" value={stats.wordsLearned} color="pink-500" />
                <StatCard icon={<Clock />} title="Hours Studied" value={stats.hoursStudied} color="yellow-400" />
                <StatCard icon={<Award />} title="Lessons Completed" value={stats.lessonsCompleted} color="cyan-400" />
                <StatCard icon={<TrendingUp />} title="XP Points" value={stats.xpPoints} color="pink-500" />
                <StatCard icon={<MessageCircle />} title="Conversation" value={`${stats.conversationMinutes} min`} color="yellow-400" />
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BarProgress title="Vocabulary" score={scores.vocabulary} color="#22d3ee" />
              <BarProgress title="Grammar" score={scores.grammar} color="#ec4899" />
              <BarProgress title="Pronunciation" score={scores.pronunciation} color="#facc15" />
              <BarProgress title="Listening Comprehension" score={scores.listening} color="#22d3ee" />
              <BarProgress title="Reading Comprehension" score={scores.reading} color="#ec4899" />
              <BarProgress title="Speaking" score={scores.speaking} color="#facc15" />
              <BarProgress title="Writing" score={scores.writing} color="#22d3ee" />
            </div>
          </div>
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Next Lesson</h3>
              <p className="text-lg text-pink-500 mb-2">{nextLesson}</p>
              <button className="bg-cyan-400 text-gray-900 py-2 px-4 rounded-lg hover:bg-pink-500 transition-colors">
                Start Lesson
              </button>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Daily Goal</h3>
              <CircularProgressbar
                value={(stats.hoursStudied * 60) / dailyGoal * 100}
                text={`${stats.hoursStudied * 60}/${dailyGoal} min`}
                styles={buildStyles({
                  textSize: '16px',
                  pathColor: '#ec4899',
                  textColor: '#22d3ee',
                  trailColor: '#374151',
                })}
              />
            </div>
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6 mb-8">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Suggested Activities</h3>
              <ul className="list-disc list-inside text-pink-500">
                <li>Practice irregular verb conjugations</li>
                <li>Listen to a Spanish podcast</li>
                <li>Read a news article in Spanish</li>
                <li>Participate in a 10-minute conversation</li>
              </ul>
            </div>
            <div className="bg-gray-800 rounded-xl shadow-2xl p-6">
              <h3 className="text-xl font-semibold text-cyan-400 mb-4">Weekly Challenges</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Target className="w-6 h-6 text-pink-500 mr-2" />
                  <span className="text-gray-200">Learn 50 new words</span>
                </div>
                <div className="flex items-center">
                  <Zap className="w-6 h-6 text-yellow-400 mr-2" />
                  <span className="text-gray-200">Complete 5 grammar exercises</span>
                </div>
                <div className="flex items-center">
                  <MessageCircle className="w-6 h-6 text-cyan-400 mr-2" />
                  <span className="text-gray-200">Have a 30-minute Spanish conversation</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


/**
 Create a vibrant and modern Spanish learning dashboard with the following characteristics:

Color Scheme:
- Primary colors: #ff6b6b (coral red), #4ecdc4 (turquoise)
- Secondary colors: #45b7d1 (light blue), #f8c43a (golden yellow)
- Text colors: #254460 (dark blue for headings), #5a6c7f (slate gray for body text)
- Background: Gradient from #ff6b6b to #4ecdc4

Style Elements:
- Use rounded corners (border-radius) for cards and buttons
- Implement subtle shadows for depth
- Utilize gradients for backgrounds and accents
- Incorporate playful icons related to language learning

Layout:
- Sidebar or secondary area for additional information and quick actions
- Grid layout for displaying various learning statistics and progress bars

Key Components:
- Large, circular progress indicator for overall Spanish level
- Colorful cards for displaying stats like streak days, words learned, and study time
- Progress bars for individual skill areas (reading, writing, speaking, listening)
- A section for the next lesson or daily goal
- Area for suggested activities or challenges

Typography:
- Use a clean, modern sans-serif font
- Vary font weights for emphasis (bold for headings, regular for body text)
- Implement a clear hierarchy with different text sizes

Interactive Elements:
- Hover effects on buttons and cards
- Animated progress bars or charts

Ensure the design is responsive and accessible, with good color contrast for readability.
 */