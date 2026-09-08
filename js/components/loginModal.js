/**
 * RAAHI // Split-Screen Crazy Login Modal & Auth Engine
 * Inspired by Helix Reader with Quote Rotator, Ambient Neon Gradients, and Live Session Management
 */

const RAAHI_AUTH_QUOTES = [
  {
    text: "The world is a book, and those who do not travel read only one page.",
    author: "Saint Augustine"
  },
  {
    text: "Not all those who wander are lost.",
    author: "J.R.R. Tolkien"
  },
  {
    text: "Live as if you were to die tomorrow. Learn as if you were to live forever.",
    author: "Mahatma Gandhi"
  },
  {
    text: "Where the mind is without fear and the head is held high, into that heaven of freedom let my country awake.",
    author: "Rabindranath Tagore"
  },
  {
    text: "The journey of a thousand miles begins with a single step.",
    author: "Lao Tzu"
  },
  {
    text: "To travel is to live, to experience, and to discover the soul of the earth.",
    author: "Hans Christian Andersen"
  },
  {
    text: "Travel expands the mind and fills the gap of unknown horizons.",
    author: "Rumi"
  },
  {
    text: "India is the cradle of the human race, the birthplace of human speech, the mother of history.",
    author: "Mark Twain"
  }
];

let currentQuoteIdx = 0;
let quoteTimer = null;

export function initAuthModal() {
  injectAuthModalHTML();
  updateAuthNavButton();
  startQuoteRotation();
}

function injectAuthModalHTML() {
  if (document.getElementById('raahi-auth-modal-overlay')) return;

  const overlay = document.createElement('div');
  overlay.id = 'raahi-auth-modal-overlay';
  overlay.className = 'auth-modal-overlay';
  overlay.onclick = (e) => {
    if (e.target === overlay) window.raahiCloseAuthModal();
  };

  overlay.innerHTML = `
    <div class="auth-modal-container" role="dialog" aria-modal="true" aria-label="Sign In to RAAHI">
      <button class="auth-close-btn" onclick="window.raahiCloseAuthModal()" aria-label="Close Modal">✕</button>

      <!-- Left Side: Crazy Brand & Quote Rotator -->
      <div class="auth-brand-side">
        <div class="auth-brand-aura"></div>
        <div class="auth-brand-content">
          <div class="auth-brand-logo">
            <span class="auth-logo-mark"></span>
            <span class="auth-logo-text">RAAHI</span>
          </div>

          <span class="auth-eyebrow">NATIONAL TOURISM DISCOVERY</span>
          <h2 class="auth-brand-headline">Unlock Unexplored<br>India & Royal Stays</h2>
          <p class="auth-brand-desc">
            Sync your travel itineraries, bookmark heritage palaces, and access real-time municipal fair prices across all 36 States & Union Territories.
          </p>

          <!-- Quote Card Widget -->
          <div class="auth-quote-card" id="auth-quote-card">
            <div class="quote-mark">“</div>
            <p id="auth-quote-text">${RAAHI_AUTH_QUOTES[0].text}</p>
            <div class="quote-author-row">
              <span class="quote-line"></span>
              <span id="auth-quote-author">${RAAHI_AUTH_QUOTES[0].author}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Right Side: Login & Registration Form -->
      <div class="auth-form-side">
        <div class="auth-form-wrapper">
          <div class="auth-tabs">
            <button class="auth-tab-btn active" id="auth-tab-login" onclick="window.raahiSwitchAuthTab('login')">Sign In</button>
            <button class="auth-tab-btn" id="auth-tab-signup" onclick="window.raahiSwitchAuthTab('signup')">Create Account</button>
          </div>

          <!-- Header Titles -->
          <div class="auth-header-block">
            <h3 class="auth-form-title" id="auth-form-title">Welcome Back</h3>
            <p class="auth-form-sub" id="auth-form-sub">Enter your credentials to access your RAAHI passport.</p>
          </div>

          <!-- Quick Social Login -->
          <div class="auth-social-btns">
            <button class="auth-social-btn" onclick="window.raahiSocialLogin('Google')">
              <svg width="18" height="18" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/></svg>
              <span>Google</span>
            </button>
            <button class="auth-social-btn" onclick="window.raahiSocialLogin('GitHub')">
              <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              <span>GitHub</span>
            </button>
          </div>

          <div class="auth-divider">
            <span>OR CONTINUE WITH EMAIL</span>
          </div>

          <!-- Main Input Form -->
          <form id="raahi-auth-form" onsubmit="window.raahiHandleAuthSubmit(event)">
            <!-- Full Name field (Only shown on signup) -->
            <div class="auth-input-group" id="auth-group-name" style="display: none;">
              <label for="auth-input-name">Full Name</label>
              <div class="auth-input-field">
                <span class="auth-input-icon">👤</span>
                <input type="text" id="auth-input-name" placeholder="e.g. Vikramaditya Singh" />
              </div>
            </div>

            <!-- Email field -->
            <div class="auth-input-group">
              <label for="auth-input-email">Email Address</label>
              <div class="auth-input-field">
                <span class="auth-input-icon">✉️</span>
                <input type="email" id="auth-input-email" required placeholder="explorer@raahi.in" />
              </div>
            </div>

            <!-- Password field -->
            <div class="auth-input-group">
              <label for="auth-input-password">Password</label>
              <div class="auth-input-field">
                <span class="auth-input-icon">🔒</span>
                <input type="password" id="auth-input-password" required placeholder="••••••••" />
                <button type="button" class="auth-toggle-pwd" onclick="window.raahiTogglePasswordVisibility()" aria-label="Toggle Password Visibility">👁️</button>
              </div>
            </div>

            <!-- Form Footer Options -->
            <div class="auth-form-options">
              <label class="auth-checkbox-label">
                <input type="checkbox" id="auth-remember-me" checked />
                <span>Keep me signed in</span>
              </label>
              <a href="javascript:void(0)" class="auth-forgot-link" onclick="alert('Password reset link has been dispatched to your email address.')">Forgot Password?</a>
            </div>

            <!-- Submit Button -->
            <button type="submit" class="auth-submit-btn" id="auth-submit-btn">
              <span>SIGN IN TO RAAHI</span>
              <span class="btn-arrow">→</span>
            </button>
          </form>

          <div class="auth-footer-note">
            By continuing, you agree to RAAHI's <a href="#about">Terms of Service</a> & <a href="#about">Privacy Policy</a>.
          </div>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(overlay);
}

function startQuoteRotation() {
  if (quoteTimer) clearInterval(quoteTimer);
  quoteTimer = setInterval(() => {
    currentQuoteIdx = (currentQuoteIdx + 1) % RAAHI_AUTH_QUOTES.length;
    const textEl = document.getElementById('auth-quote-text');
    const authorEl = document.getElementById('auth-quote-author');
    if (textEl && authorEl) {
      textEl.style.opacity = '0';
      authorEl.style.opacity = '0';
      setTimeout(() => {
        textEl.textContent = RAAHI_AUTH_QUOTES[currentQuoteIdx].text;
        authorEl.textContent = RAAHI_AUTH_QUOTES[currentQuoteIdx].author;
        textEl.style.opacity = '1';
        authorEl.style.opacity = '1';
      }, 400);
    }
  }, 6000);
}

// Global functions attached to window for event binding
window.raahiOpenAuthModal = function(tab = 'login') {
  injectAuthModalHTML();
  const overlay = document.getElementById('raahi-auth-modal-overlay');
  if (overlay) {
    overlay.classList.add('active');
    document.body.classList.add('lock-scroll');
    window.raahiSwitchAuthTab(tab);
  }
};

window.raahiCloseAuthModal = function() {
  const overlay = document.getElementById('raahi-auth-modal-overlay');
  if (overlay) {
    overlay.classList.remove('active');
    document.body.classList.remove('lock-scroll');
  }
};

window.raahiSwitchAuthTab = function(tab) {
  const loginBtn = document.getElementById('auth-tab-login');
  const signupBtn = document.getElementById('auth-tab-signup');
  const title = document.getElementById('auth-form-title');
  const sub = document.getElementById('auth-form-sub');
  const nameGroup = document.getElementById('auth-group-name');
  const submitBtn = document.getElementById('auth-submit-btn');

  if (!loginBtn || !signupBtn) return;

  if (tab === 'signup') {
    loginBtn.classList.remove('active');
    signupBtn.classList.add('active');
    title.textContent = 'Join RAAHI';
    sub.textContent = 'Create your account to save itineraries & explore India.';
    if (nameGroup) nameGroup.style.display = 'block';
    if (submitBtn) submitBtn.querySelector('span').textContent = 'CREATE MY ACCOUNT';
  } else {
    signupBtn.classList.remove('active');
    loginBtn.classList.add('active');
    title.textContent = 'Welcome Back';
    sub.textContent = 'Enter your credentials to access your RAAHI passport.';
    if (nameGroup) nameGroup.style.display = 'none';
    if (submitBtn) submitBtn.querySelector('span').textContent = 'SIGN IN TO RAAHI';
  }
};

window.raahiTogglePasswordVisibility = function() {
  const pwdInput = document.getElementById('auth-input-password');
  const toggleBtn = document.querySelector('.auth-toggle-pwd');
  if (!pwdInput) return;
  if (pwdInput.type === 'password') {
    pwdInput.type = 'text';
    if (toggleBtn) toggleBtn.textContent = '🙈';
  } else {
    pwdInput.type = 'password';
    if (toggleBtn) toggleBtn.textContent = '👁️';
  }
};

window.raahiHandleAuthSubmit = function(e) {
  e.preventDefault();
  const email = document.getElementById('auth-input-email').value.trim();
  const nameInput = document.getElementById('auth-input-name');
  const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : email.split('@')[0];

  const userObj = {
    email: email,
    name: name.charAt(0).toUpperCase() + name.slice(1),
    avatar: name.charAt(0).toUpperCase(),
    loginTime: new Date().toISOString()
  };

  localStorage.setItem('raahi_user', JSON.stringify(userObj));
  window.raahiCloseAuthModal();
  updateAuthNavButton();

  showToast(`Welcome back, ${userObj.name}! Signed into RAAHI.`);
};

window.raahiSocialLogin = function(provider) {
  const userObj = {
    email: `explorer.${provider.toLowerCase()}@raahi.in`,
    name: `${provider} Traveler`,
    avatar: provider.charAt(0),
    loginTime: new Date().toISOString()
  };

  localStorage.setItem('raahi_user', JSON.stringify(userObj));
  window.raahiCloseAuthModal();
  updateAuthNavButton();

  showToast(`Successfully authenticated with ${provider}!`);
};

window.raahiLogout = function() {
  localStorage.removeItem('raahi_user');
  updateAuthNavButton();
  showToast('Logged out from RAAHI session.');
};

function updateAuthNavButton() {
  const navContainer = document.getElementById('raahi-nav-auth-container');
  const user = JSON.parse(localStorage.getItem('raahi_user') || 'null');

  if (!navContainer) return;

  if (user) {
    navContainer.innerHTML = `
      <div class="raahi-user-profile-menu">
        <button class="raahi-user-avatar-btn" onclick="window.raahiToggleUserDropdown(event)" title="${user.name}">
          <span>${user.avatar || '👤'}</span>
        </button>
        <div class="raahi-user-dropdown" id="raahi-user-dropdown">
          <div class="user-dropdown-header">
            <strong>${user.name}</strong>
            <small>${user.email}</small>
          </div>
          <a href="#journey-discovery" class="user-dropdown-item" onclick="window.raahiOpenJourneyDrawer()">♡ My Saved Journeys</a>
          <a href="#stays" class="user-dropdown-item">🏰 Verified Stays</a>
          <button class="user-dropdown-item logout" onclick="window.raahiLogout()">✕ Sign Out</button>
        </div>
      </div>
    `;
  } else {
    navContainer.innerHTML = `
      <button onclick="window.raahiOpenAuthModal('login')" class="btn gold" style="padding: 8px 18px; font-size: 0.78rem; font-weight: 700; border-radius: 99px; letter-spacing: 0.05em; display: inline-flex; align-items: center; gap: 6px; cursor: pointer;">
        🔑 SIGN IN
      </button>
    `;
  }
}

window.raahiToggleUserDropdown = function(e) {
  e.stopPropagation();
  const dropdown = document.getElementById('raahi-user-dropdown');
  if (dropdown) {
    dropdown.classList.toggle('active');
  }
};

document.addEventListener('click', () => {
  const dropdown = document.getElementById('raahi-user-dropdown');
  if (dropdown && dropdown.classList.contains('active')) {
    dropdown.classList.remove('active');
  }
});

function showToast(msg) {
  let toast = document.getElementById('raahi-auth-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'raahi-auth-toast';
    toast.className = 'raahi-auth-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => {
    toast.classList.remove('show');
  }, 3500);
}
