import React, { useState } from 'react';
import { Github, Server, Code, Terminal, ArrowRight, CheckCircle, Clock, Users, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

export default function App() {
  const [activeTab, setActiveTab] = useState('overview');
  
  const steps = [
    {
      id: 1,
      title: "Создание репозитория",
      description: "Создайте новый репозиторий на GitHub с вашим проектом",
      icon: <Github className="w-6 h-6" />
    },
    {
      id: 2,
      title: "Настройка CI/CD",
      description: "Настройте GitHub Actions для автоматического деплоя",
      icon: <Code className="w-6 h-6" />
    },
    {
      id: 3,
      title: "Подключение к хостингу",
      description: "Выберите подходящий хостинг для размещения вашего сервера",
      icon: <Server className="w-6 h-6" />
    },
    {
      id: 4,
      title: "Деплой и тестирование",
      description: "Запустите автоматический деплой и протестируйте сервер",
      icon: <Terminal className="w-6 h-6" />
    }
  ];

  const hostingOptions = [
    {
      name: "VPS",
      description: "Выделенный сервер с полным контролем",
      price: "от $5/мес",
      features: ["Полный доступ", "Масштабируемость", "Безопасность"],
      icon: <Server className="w-8 h-8" />
    },
    {
      name: "Cloud Hosting",
      description: "Облачные решения с автоматическим масштабированием",
      price: "от $10/мес",
      features: ["Автоматическое масштабирование", "Высокая доступность", "Быстрое развертывание"],
      icon: <Globe className="w-8 h-8" />
    },
    {
      name: "Docker",
      description: "Контейнеризация для простого развертывания",
      price: "бесплатно",
      features: ["Портативность", "Изоляция", "Легкость"],
      icon: <Code className="w-8 h-8" />
    }
  ];

  const benefits = [
    {
      title: "Автоматизация",
      description: "GitHub Actions автоматически деплоят ваш код при каждом коммите",
      icon: <CheckCircle className="w-6 h-6" />
    },
    {
      title: "Безопасность",
      description: "Интеграция с GitHub Security для защиты ваших проектов",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Масштабируемость",
      description: "Легко масштабируйте сервер под растущие потребности",
      icon: <Clock className="w-6 h-6" />
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg">
              <Github className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">GitHub Server Deployment</h1>
              <p className="text-slate-400">Как поднять свой сервер через GitHub</p>
            </div>
          </div>
        </div>
      </header>

      {/* Navigation Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex space-x-1 bg-slate-800/50 p-1 rounded-lg mb-8">
          {['overview', 'steps', 'hosting', 'benefits'].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex-1 py-3 px-4 rounded-md text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-purple-600 text-white shadow-lg'
                  : 'text-slate-300 hover:text-white hover:bg-slate-700/50'
              }`}
            >
              {tab === 'overview' && 'Обзор'}
              {tab === 'steps' && 'Шаги'}
              {tab === 'hosting' && 'Хостинг'}
              {tab === 'benefits' && 'Преимущества'}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === 'overview' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-4">
                  Поднятие сервера через GitHub
                </h2>
                <p className="text-slate-300 text-lg leading-relaxed">
                  Автоматизируйте процесс развертывания вашего сервера с помощью GitHub Actions. 
                  Создавайте, тестируйте и деплоите ваш проект без ручного вмешательства.
                </p>
                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex items-center space-x-2 text-green-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Автоматический деплой</span>
                  </div>
                  <div className="flex items-center space-x-2 text-blue-400">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Надежная инфраструктура</span>
                  </div>
                </div>
              </div>
              <div className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-white font-semibold">Пример workflow</h3>
                  <Terminal className="w-5 h-5 text-purple-400" />
                </div>
                <pre className="text-xs text-slate-300 bg-slate-900/50 p-4 rounded-lg overflow-x-auto">
{`name: Deploy to Server
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - name: Deploy
      run: |
        ssh user@server "cd project && git pull"`
                </pre>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                { number: "1000+", label: "Проектов развернуто", icon: <Globe className="w-6 h-6" /> },
                { number: "99.9%", label: "Доступность", icon: <CheckCircle className="w-6 h-6" /> },
                { number: "24/7", label: "Поддержка", icon: <Users className="w-6 h-6" /> }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center"
                >
                  <div className="flex justify-center mb-3 text-purple-400">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                  <div className="text-slate-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Steps Tab */}
        {activeTab === 'steps' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Пошаговое руководство</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Следуйте этим шагам для автоматического развертывания вашего сервера через GitHub
              </p>
            </div>

            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all"
                >
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        Шаг {step.id}: {step.title}
                      </h3>
                      <p className="text-slate-300">{step.description}</p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 mt-2" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Hosting Tab */}
        {activeTab === 'hosting' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Варианты хостинга</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Выберите подходящую инфраструктуру для размещения вашего сервера
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {hostingOptions.map((option, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="text-purple-400 group-hover:text-purple-300 transition-colors">
                      {option.icon}
                    </div>
                    <span className="text-sm font-medium text-green-400">{option.price}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">{option.name}</h3>
                  <p className="text-slate-300 mb-4">{option.description}</p>
                  <ul className="space-y-2">
                    {option.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-slate-400">
                        <CheckCircle className="w-4 h-4 text-green-400 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}

        {/* Benefits Tab */}
        {activeTab === 'benefits' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-8"
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Преимущества</h2>
              <p className="text-slate-300 max-w-2xl mx-auto">
                Почему стоит использовать GitHub для развертывания серверов
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all text-center"
                >
                  <div className="flex justify-center mb-4 text-purple-400">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{benefit.title}</h3>
                  <p className="text-slate-300">{benefit.description}</p>
                </motion.div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-xl p-8 border border-purple-500/30">
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0">
                  <Terminal className="w-8 h-8 text-purple-400" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white mb-2">Готово к началу?</h3>
                  <p className="text-slate-300 mb-4">
                    Создайте репозиторий на GitHub и начните автоматизировать развертывание вашего сервера уже сегодня.
                  </p>
                  <button className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:from-purple-700 hover:to-blue-700 transition-all transform hover:scale-105">
                    Начать развертывание
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>

      {/* Footer */}
      <footer className="border-t border-slate-700/50 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Github className="w-6 h-6 text-purple-400" />
              <span className="text-white font-semibold">GitHub Server Deployment Guide</span>
            </div>
            <p className="text-slate-400">
              Автоматизируйте развертывание серверов с помощью GitHub Actions
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}