import { useEffect, useState } from 'react';

type Screen = 'intro' | 'welcome1' | 'welcome2' | 'welcome3' | 'home';

const learningCards = [
  {
    title: 'Tillar',
    text: "English va boshqa tillarni o‘rganing",
    accent: 'blue'
  },
  {
    title: 'Fanlar',
    text: 'Matematika, fizika, biologiya va boshqalar',
    accent: 'purple'
  },
  {
    title: 'Kitoblar',
    text: 'Bilim va o‘qish uchun yagona makon',
    accent: 'teal'
  }
];

const homeCards = ['Tillar', 'Fanlar', 'Kitoblar', 'Musiqa'];

export default function App() {
  const [screen, setScreen] = useState<Screen>('intro');

  useEffect(() => {
    if (screen !== 'intro') return;

    const timer = window.setTimeout(() => {
      setScreen('welcome1');
    }, 1800);

    return () => window.clearTimeout(timer);
  }, [screen]);

  const goToNext = () => {
    if (screen === 'welcome1') setScreen('welcome2');
    else if (screen === 'welcome2') setScreen('welcome3');
    else if (screen === 'welcome3') setScreen('home');
  };

  return (
    <div className="app-shell">
      {screen === 'intro' && (
        <div className="screen intro-screen fade-in">
          <div className="brand-lockup">
            <div className="brand-mark">I</div>
            <div className="brand-copy">
              <h1>Idrok Lab</h1>
              <p>Bilim. Til. Tafakkur.</p>
            </div>
          </div>
        </div>
      )}

      {screen === 'welcome1' && (
        <div className="screen fade-in">
          <div className="glass-card info-card compact-card">
            <div className="mini-brand">
              <span className="mini-icon">I</span>
              <span>Idrok Lab</span>
            </div>
            <h2>Ilm olishning yangi makoni</h2>
            <p>
              Til, fanlar, kitoblar va boshqa bilimlarni bitta joyda o‘rganing.
            </p>
            <button className="primary-btn" onClick={goToNext}>
              Boshlash
            </button>
          </div>
        </div>
      )}

      {screen === 'welcome2' && (
        <div className="screen fade-in">
          <div className="explore-panel">
            <div className="section-heading">
              <p className="eyebrow">Darsliklar</p>
              <h3>Bilimlar</h3>
            </div>

            <div className="topic-list">
              {learningCards.map((card) => (
                <div key={card.title} className={`topic-card ${card.accent}`}>
                  <div className="topic-badge">{card.title}</div>
                  <h4>{card.title}</h4>
                  <p>{card.text}</p>
                </div>
              ))}
            </div>

            <button className="primary-btn" onClick={goToNext}>
              Davom etish
            </button>
          </div>
        </div>
      )}

      {screen === 'welcome3' && (
        <div className="screen fade-in">
          <div className="glass-card welcome-final">
            <div className="brand-lockup small-brand">
              <div className="brand-mark">I</div>
            </div>
            <h2>Bilim sari birinchi qadam</h2>
            <button className="primary-btn" onClick={goToNext}>
              Idrok Lab'ni boshlash
            </button>
          </div>
        </div>
      )}

      {screen === 'home' && (
        <div className="screen home-screen fade-in">
          <div className="mobile-frame">
            <header className="topbar">
              <div className="brand-inline">
                <div className="brand-mark small">I</div>
                <span>Idrok Lab</span>
              </div>
            </header>

            <main className="home-main">
              <p className="greeting">Bugun nimani o‘rganamiz?</p>

              <div className="home-grid">
                {homeCards.map((item, index) => (
                  <div key={item} className={`home-card card-${index + 1}`}>
                    {item}
                  </div>
                ))}
              </div>
            </main>

            <nav className="bottom-nav" aria-label="Main navigation">
              <button className="nav-item active">
                <span>Home</span>
              </button>
              <button className="nav-item">
                <span>Learn</span>
              </button>
              <button className="nav-item">
                <span>Library</span>
              </button>
              <button className="nav-item">
                <span>Profile</span>
              </button>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
}
