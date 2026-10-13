import { useState } from 'react'
import './App.css'

const quizQuestions = [
  {
    question: 'What does PM2.5 refer to?',
    options: [
      'A type of weather forecast',
      'Fine particles 2.5 micrometres or smaller',
      'The temperature during haze',
      'The amount of rainfall',
    ],
    answer: 1,
    explanation:
      'PM2.5 refers to fine airborne particles that can travel deep into the lungs.',
  },
  {
    question: 'What should you do when haze levels become unhealthy?',
    options: [
      'Exercise outdoors as usual',
      'Burn rubbish before it gets worse',
      'Reduce outdoor activity and check official advice',
      'Ignore the air-quality readings',
    ],
    answer: 2,
    explanation:
      'Reducing exposure and following official health advice can help protect your health.',
  },
  {
    question: 'Which action helps prevent haze?',
    options: [
      'Open burning of garden waste',
      'Leaving fires unattended',
      'Burning rubbish at night',
      'Avoiding open burning and reporting illegal fires',
    ],
    answer: 3,
    explanation:
      'Preventing fires and reducing pollution address important sources of haze.',
  },
]

const tips = [
  {
    number: '01',
    icon: '◉',
    title: 'Monitor air quality',
    text: 'Check the latest Malaysian Air Pollutant Index (API) and local public-health announcements.',
    tag: 'STAY INFORMED',
  },
  {
    number: '02',
    icon: '⌂',
    title: 'Reduce outdoor exposure',
    text: 'Limit strenuous exercise outdoors when pollution is unhealthy. Keep windows closed when outdoor air is polluted.',
    tag: 'REDUCE EXPOSURE',
  },
  {
    number: '03',
    icon: '♧',
    title: 'Protect your breathing',
    text: 'A well-fitted N95 respirator can reduce exposure to fine particles when used correctly.',
    tag: 'USE PROTECTION',
  },
  {
    number: '04',
    icon: '♡',
    title: 'Care for vulnerable people',
    text: 'Pay extra attention to children, older adults, pregnant people, and those with heart or lung conditions.',
    tag: 'LOOK OUT FOR OTHERS',
  },
  {
    number: '05',
    icon: '✳',
    title: 'Keep indoor air cleaner',
    text: 'Use suitable particle filtration if available and avoid adding smoke indoors through candles or burning.',
    tag: 'CLEANER INDOORS',
  },
  {
    number: '06',
    icon: '↗',
    title: 'Take action responsibly',
    text: 'Avoid open burning, dispose of waste properly, and report fires to the appropriate authorities.',
    tag: 'PREVENT HAZE',
  },
]

const myths = [
  {
    myth: 'If I can see clearly, the air must be safe.',
    fact: 'Not necessarily. Fine particles can be present even when visibility looks normal. Check official readings.',
  },
  {
    myth: 'Any face mask protects equally against haze.',
    fact: 'Masks differ. A well-fitted N95 respirator can filter fine particles more effectively than a loose cloth mask.',
  },
  {
    myth: 'Haze only affects people with asthma.',
    fact: 'Anyone can experience irritation. Children, older adults, and people with heart or lung conditions may face greater risks.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [questionIndex, setQuestionIndex] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [quizFinished, setQuizFinished] = useState(false)
  const [revealedMyths, setRevealedMyths] = useState([])

  const question = quizQuestions[questionIndex]

  function answerQuestion(index) {
    if (selectedAnswer !== null) return
    setSelectedAnswer(index)
    if (index === question.answer) setScore((current) => current + 1)
  }

  function nextQuestion() {
    if (questionIndex === quizQuestions.length - 1) {
      setQuizFinished(true)
    } else {
      setQuestionIndex((current) => current + 1)
      setSelectedAnswer(null)
    }
  }

  function restartQuiz() {
    setQuestionIndex(0)
    setSelectedAnswer(null)
    setScore(0)
    setQuizFinished(false)
  }

  function toggleMyth(index) {
    setRevealedMyths((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index],
    )
  }

  return (
    <main>
      <nav className="navbar">
        <a className="brand" href="#home">
          <span className="brand-mark">H</span>
          HAZE<span className="brand-light">AWARE</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
        >
          {menuOpen ? '✕' : '☰'}
        </button>

        <div className={`nav-links ${menuOpen ? 'show' : ''}`}>
          {[
            ['Home', '#home'],
            ['Learn', '#learn'],
            ['Health', '#health'],
            ['Stay Safe', '#protect'],
            ['Take Action', '#action'],
          ].map(([label, href]) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a
            className="nav-cta"
            href="https://apims.doe.gov.my/"
            target="_blank"
            rel="noreferrer"
          >
            Official Air Quality ↗
          </a>
        </div>
      </nav>

      <section className="hero" id="home">
        <div className="hero-copy">
          <div className="eyebrow">
            <span className="live-dot"></span>
            AIR QUALITY AWARENESS · MALAYSIA
          </div>
          <h1>
            Clearer skies
            <br />
            start with <span className="hero-highlight">awareness.</span>
          </h1>
          <p>
            Haze is a serious air pollution issue that affects our health,
            communities and environment. Learn what causes haze, how it
            affects you, and what we can do together for cleaner, healthier
            skies in Malaysia.
          </p>
          <div className="hero-buttons">
            <a className="button button-primary" href="#learn">
              Understand haze <span>→</span>
            </a>
            <a className="button button-outline" href="#protect">
              Protect your health
            </a>
          </div>
          <div className="hero-footnote">
            <span>01 / UNDERSTAND</span>
            <span>02 / PROTECT</span>
            <span>03 / PREVENT</span>
          </div>
        </div>

        <div className="hero-art">
          <img
            className="hero-photo"
            src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=1400&q=85"
            alt="City skyline illustrating the urban environment"
          />
          <div className="hero-photo-overlay"></div>
          <span className="art-number">HAZE / 001</span>
          <div className="art-caption">
            <span className="caption-dot"></span>
            <div>
              <strong>THE AIR WE SHARE</strong>
              <p>One atmosphere. One responsibility.</p>
            </div>
          </div>
        </div>

        <div className="hero-bottom">
          <span>KNOW THE AIR. PROTECT YOUR FUTURE.</span>
          <a href="#learn">SCROLL TO EXPLORE ↓</a>
        </div>
      </section>

      <section className="quick-facts">
        <article>
          <span className="fact-icon blue">◉</span>
          <div>
            <strong>Understand the causes</strong>
            <p>Learn where haze comes from and why it happens in our region.</p>
          </div>
        </article>
        <article>
          <span className="fact-icon coral">♡</span>
          <div>
            <strong>Know the health risks</strong>
            <p>Find out how haze can affect you and vulnerable groups.</p>
          </div>
        </article>
        <article>
          <span className="fact-icon green">♧</span>
          <div>
            <strong>Take practical action</strong>
            <p>Discover steps to protect yourself, your family and the environment.</p>
          </div>
        </article>
      </section>

      <section className="section learn-section" id="learn">
        <div className="section-intro">
          <span className="section-kicker">01 — THE BASICS</span>
          <h2>Haze, <span>explained.</span></h2>
        </div>
        <div className="learn-copy">
          <p className="lead">
            Haze is a combination of smoke, dust and other fine particles in
            the air. It can reduce visibility and affect our health.
          </p>
          <p>
            In Southeast Asia, haze episodes can be associated with forest and
            peatland fires, open burning and other pollution sources. Wind can
            carry smoke over long distances, while weather conditions influence
            how long pollution remains in an area.
          </p>
          <a
            href="https://www.who.int/health-topics/air-pollution"
            target="_blank"
            rel="noreferrer"
            className="text-link"
          >
            Learn more about air pollution ↗
          </a>
        </div>
      </section>

      <section className="science-band">
        <div className="science-visual">
          <div className="particle particle-one"></div>
          <div className="particle particle-two"></div>
          <div className="particle particle-three"></div>
          <div className="particle particle-four"></div>
          <div className="particle particle-five"></div>
          <div className="particle particle-six"></div>
          <div className="particle particle-seven"></div>
          <div className="particle particle-eight"></div>
          <div className="particle-label">PM2.5</div>
        </div>
        <div className="science-copy">
          <span className="section-kicker">THE SCIENCE</span>
          <h2>Small particles.<br /><span>Big consequences.</span></h2>
          <p>
            PM2.5 means particulate matter with a diameter of 2.5 micrometres
            or less. These particles can penetrate deep into the lungs, and
            some may enter the bloodstream.
          </p>
          <div className="science-note">
            <span>!</span>
            <p>
              You cannot reliably judge PM2.5 levels by sight or smell alone.
              Check official air-quality information.
            </p>
          </div>
        </div>
      </section>

      <section className="section causes-section" id="causes">
        <div className="section-heading">
          <div>
            <span className="section-kicker">02 — ROOT CAUSES</span>
            <h2>Where does haze <span>come from?</span></h2>
          </div>
          <p>Understanding the causes helps us focus on meaningful prevention.</p>
        </div>
        <div className="cause-grid">
          <article className="cause-card cause-fire">
            <span className="cause-number">01 / LAND</span>
            <div className="cause-symbol">♨</div>
            <h3>Forest &amp; peatland fires</h3>
            <p>
              Fires release smoke and fine particles. Peatland fires can be
              particularly difficult to extinguish and may smoulder underground.
            </p>
            <span className="cause-tag">SMOKE EMISSIONS</span>
          </article>
          <article className="cause-card cause-burning">
            <span className="cause-number">02 / HUMAN ACTIVITY</span>
            <div className="cause-symbol">↯</div>
            <h3>Open burning</h3>
            <p>
              Burning rubbish, vegetation or land releases pollutants and can
              start fires that spread beyond the original area.
            </p>
            <span className="cause-tag">PREVENTABLE SOURCE</span>
          </article>
          <article className="cause-card cause-pollution">
            <span className="cause-number">03 / EMISSIONS</span>
            <div className="cause-symbol">▥</div>
            <h3>Urban air pollution</h3>
            <p>
              Vehicle exhaust, industry and other combustion sources contribute
              to particulate matter and poor air quality.
            </p>
            <span className="cause-tag">DAILY EMISSIONS</span>
          </article>
        </div>
      </section>

      <section className="section air-section">
        <div className="air-heading">
          <span className="section-kicker">03 — READ THE AIR</span>
          <h2>What does the <span>API tell us?</span></h2>
          <p>
            Malaysia uses the Air Pollutant Index (API) to communicate air-pollution
            levels. This is a general reference guide, not a live reading for
            your location.
          </p>
        </div>
        <div className="api-scale">
          <article className="api-card api-good">
            <span>0–50</span><strong>Good</strong>
            <p>Air quality is generally satisfactory.</p>
          </article>
          <article className="api-card api-moderate">
            <span>51–100</span><strong>Moderate</strong>
            <p>Generally acceptable, with possible concerns for some people.</p>
          </article>
          <article className="api-card api-unhealthy">
            <span>101–200</span><strong>Unhealthy</strong>
            <p>Reduce exposure, especially if you are sensitive to pollution.</p>
          </article>
          <article className="api-card api-very">
            <span>201–300</span><strong>Very Unhealthy</strong>
            <p>Limit outdoor exposure and follow official advice.</p>
          </article>
          <article className="api-card api-hazardous">
            <span>301+</span><strong>Hazardous</strong>
            <p>Take protective action and follow public-health instructions.</p>
          </article>
        </div>
        <div className="api-disclaimer">
          <span>ⓘ</span>
          <p>
            These are general Malaysian API categories. Consult current official
            readings and local instructions. Other countries may use different
            index systems.
          </p>
          <a href="https://apims.doe.gov.my/" target="_blank" rel="noreferrer">
            View official API ↗
          </a>
        </div>
      </section>

      <section className="section health-section" id="health">
        <div className="section-heading">
          <div>
            <span className="section-kicker">04 — HEALTH &amp; WELLBEING</span>
            <h2>Haze affects <span>more than visibility.</span></h2>
          </div>
          <p>The effects depend on pollution levels, exposure duration and individual health.</p>
        </div>
        <div className="health-layout">
          <div className="health-main">
            <div className="health-symbol">♡</div>
            <span>KNOW THE WARNING SIGNS</span>
            <h3>Listen to your body.</h3>
            <p>
              Eye and throat irritation, coughing, wheezing and breathing
              discomfort can occur during polluted-air episodes.
            </p>
            <p>
              Seek urgent medical care for severe breathing difficulty, chest
              pain or other serious symptoms.
            </p>
          </div>
          <div className="health-groups">
            <article><span className="group-icon">01</span><h3>Children</h3><p>Developing lungs and outdoor activity can increase concern.</p></article>
            <article><span className="group-icon">02</span><h3>Older adults</h3><p>May be more vulnerable to the effects of polluted air.</p></article>
            <article><span className="group-icon">03</span><h3>Heart or lung conditions</h3><p>Pollution may worsen asthma, COPD or cardiovascular disease.</p></article>
            <article><span className="group-icon">04</span><h3>Outdoor workers</h3><p>May need extra measures to reduce prolonged exposure.</p></article>
          </div>
        </div>
      </section>

      <section className="section protection-section" id="protect">
        <div className="section-heading">
          <div>
            <span className="section-kicker">05 — YOUR SAFETY PLAN</span>
            <h2>Stay safe when <span>haze hits.</span></h2>
          </div>
          <p>Use these practical steps alongside official public-health advice.</p>
        </div>
        <div className="tips-grid">
          {tips.map((tip) => (
            <article className="tip-card" key={tip.number}>
              <div className="tip-top">
                <span className="tip-icon">{tip.icon}</span>
                <span>{tip.number}</span>
              </div>
              <span className="tip-tag">{tip.tag}</span>
              <h3>{tip.title}</h3>
              <p>{tip.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section myths-section">
        <div className="section-heading">
          <div>
            <span className="section-kicker">06 — MYTH OR FACT?</span>
            <h2>Clear the air on <span>common myths.</span></h2>
          </div>
          <p>Tap each card to reveal the facts.</p>
        </div>
        <div className="myth-grid">
          {myths.map((item, index) => {
            const isOpen = revealedMyths.includes(index)
            return (
              <button
                className={`myth-card ${isOpen ? 'revealed' : ''}`}
                key={item.myth}
                onClick={() => toggleMyth(index)}
                aria-expanded={isOpen}
              >
                <span className="myth-label">{isOpen ? 'THE FACT' : 'THE MYTH'}</span>
                <strong>{item.myth}</strong>
                {isOpen && <p>{item.fact}</p>}
                <span className="myth-action">{isOpen ? 'Hide fact ↑' : 'Reveal the fact ↓'}</span>
              </button>
            )
          })}
        </div>
      </section>

      <section className="section quiz-section" id="action">
        <div className="quiz-intro">
          <span className="section-kicker">07 — TEST YOUR KNOWLEDGE</span>
          <h2>How much do <span>you know?</span></h2>
          <p>Take this quick quiz and see what you have learned about haze, air pollution and staying safe.</p>
          <div className="quiz-decoration">?</div>
        </div>
        <div className="quiz-panel">
          {!quizFinished ? (
            <>
              <div className="quiz-progress">
                <span>QUESTION {questionIndex + 1} OF {quizQuestions.length}</span>
                <span>{Math.round(((questionIndex + 1) / quizQuestions.length) * 100)}%</span>
              </div>
              <div className="progress-track">
                <div className="progress-fill" style={{ width: `${((questionIndex + 1) / quizQuestions.length) * 100}%` }}></div>
              </div>
              <h3>{question.question}</h3>
              <div className="answer-list">
                {question.options.map((option, index) => {
                  let className = 'answer-option'
                  if (selectedAnswer !== null && index === question.answer) className += ' correct'
                  else if (selectedAnswer === index) className += ' incorrect'
                  return (
                    <button className={className} key={option} onClick={() => answerQuestion(index)} disabled={selectedAnswer !== null}>
                      <span>{String.fromCharCode(65 + index)}</span>{option}
                    </button>
                  )
                })}
              </div>
              {selectedAnswer !== null && (
                <div className="quiz-feedback" aria-live="polite">
                  <strong>{selectedAnswer === question.answer ? 'Correct! Well done.' : 'Not quite. Learn from this.'}</strong>
                  <p>{question.explanation}</p>
                </div>
              )}
              {selectedAnswer !== null && (
                <button className="button button-primary quiz-next" onClick={nextQuestion}>
                  {questionIndex === quizQuestions.length - 1 ? 'See my results →' : 'Next question →'}
                </button>
              )}
            </>
          ) : (
            <div className="quiz-results">
              <span className="result-icon">{score === 3 ? '★' : '✓'}</span>
              <span className="section-kicker">QUIZ COMPLETE</span>
              <h3>You scored {score} out of {quizQuestions.length}!</h3>
              <p>{score === 3 ? 'Excellent! You have a strong understanding of haze awareness.' : 'Every answer is a learning opportunity. Keep exploring the guide to build your knowledge.'}</p>
              <button className="button button-primary" onClick={restartQuiz}>Try again ↻</button>
            </div>
          )}
        </div>
      </section>

      <section className="action-banner">
        <div>
          <span className="section-kicker">OUR SHARED RESPONSIBILITY</span>
          <h2>Cleaner air starts <span>with us.</span></h2>
          <p>Prevent open burning. Share reliable information. Protect vulnerable people. Support action for healthier air.</p>
        </div>
        <a href="https://www.doe.gov.my/" target="_blank" rel="noreferrer" className="button button-dark">
          Explore Malaysia's DOE ↗
        </a>
      </section>

      <footer className="footer">
        <a href="#home" className="brand">
          <span className="brand-mark">H</span>HAZE<span className="brand-light">AWARE</span>
        </a>
        <p>Understand the haze. Protect each breath.</p>
        <div className="footer-links">
          <a href="#learn">Learn</a>
          <a href="#protect">Stay safe</a>
          <a href="#home">Back to top ↑</a>
        </div>
        <small>Educational resource. Consult official agencies for current air-quality data and health advice.</small>
      </footer>
    </main>
  )
}

export default App
