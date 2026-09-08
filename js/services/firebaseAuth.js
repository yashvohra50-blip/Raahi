/**
 * RAAHI // Firebase Production Authentication Client Engine
 */

// --- FIREBASE PRODUCTION CLIENT CONFIG ---
const firebaseConfig = {
  apiKey: atob("QUl6YVN5QlNCdDM0MUdxOGprUG5TaTAtOFg0TFRJdFNseWt3ZUNC"),
  authDomain: "raahi-50794.firebaseapp.com",
  projectId: "raahi-50794",
  storageBucket: "raahi-50794.firebasestorage.app",
  messagingSenderId: "30439141474",
  appId: "1:30439141474:web:294f728b48c81890a7213b"
};

if (typeof firebase !== "undefined" && !firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
const auth = typeof firebase !== "undefined" ? firebase.auth() : null;

export function initFirebaseAuth() {
  if (!auth) return;

  // Auth Session Listener
  auth.onAuthStateChanged((user) => {
    const btnText = document.getElementById("auth-btn-text");
    const btn = document.getElementById("auth-trigger-btn");

    if (user) {
      const displayName = user.displayName || (user.email ? user.email.split("@")[0].toUpperCase() : "OPERATOR");
      if (btnText) btnText.textContent = `${displayName} [SIGN OUT]`;
      if (btn) {
        btn.style.borderColor = "rgba(16, 185, 129, 0.6)";
        btn.onclick = () => auth.signOut();
      }
      const raahiUser = {
        email: user.email || 'operator@raahi.in',
        name: displayName,
        avatar: displayName.charAt(0),
        uid: user.uid,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('raahi_user', JSON.stringify(raahiUser));
      updateSecurityModalUser(raahiUser);
      updateSecurityModalLogs(`> Firebase Production Session Active: ${displayName}`);
      closeAuthModal();
    } else {
      if (btnText) btnText.textContent = "OPERATOR SIGN IN";
      if (btn) {
        btn.style.borderColor = "rgba(255, 255, 255, 0.08)";
        btn.onclick = openAuthModal;
      }
      localStorage.removeItem('raahi_user');
      updateSecurityModalUser(null);
      updateSecurityModalLogs('> Operator disconnected. Standby for auth clearance.');
    }
  });
}

// Google Authentication
window.loginWithGoogle = async function() {
  if (!auth) return;
  const provider = new firebase.auth.GoogleAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    closeAuthModal();
  } catch (err) {
    const errEl = document.getElementById("auth-error-msg");
    if (errEl) errEl.textContent = err.message;
  }
};

// GitHub Authentication
window.loginWithGitHub = async function() {
  if (!auth) return;
  const provider = new firebase.auth.GithubAuthProvider();
  try {
    await auth.signInWithPopup(provider);
    closeAuthModal();
  } catch (err) {
    const errEl = document.getElementById("auth-error-msg");
    if (errEl) errEl.textContent = err.message;
  }
};

// Email Authentication
window.loginWithEmail = async function() {
  if (!auth) return;
  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-password");
  const email = emailInput ? emailInput.value.trim() : "";
  const pass = passInput ? passInput.value : "";
  try {
    await auth.signInWithEmailAndPassword(email, pass);
    closeAuthModal();
  } catch (err) {
    const errEl = document.getElementById("auth-error-msg");
    if (errEl) errEl.textContent = err.message;
  }
};

// Operator Registration
window.signupWithEmail = async function() {
  if (!auth) return;
  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-password");
  const email = emailInput ? emailInput.value.trim() : "";
  const pass = passInput ? passInput.value : "";
  try {
    await auth.createUserWithEmailAndPassword(email, pass);
    closeAuthModal();
  } catch (err) {
    const errEl = document.getElementById("auth-error-msg");
    if (errEl) errEl.textContent = err.message;
  }
};

// Modal Controls
window.openAuthModal = function() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "flex";
};

window.closeAuthModal = function() {
  const modal = document.getElementById("auth-modal");
  if (modal) modal.style.display = "none";
  const err = document.getElementById("auth-error-msg");
  if (err) err.textContent = "";
};

export function triggerFirebaseSignIn(providerName = 'Google') {
  if (providerName.toLowerCase() === 'github') {
    return window.loginWithGitHub();
  }
  return window.loginWithGoogle();
}

export function openSecurityModal() {
  const overlay = document.getElementById('raahi-cyber-overlay');
  const modal = document.getElementById('raahi-cyber-modal');
  if (overlay) overlay.classList.add('active');
  if (modal) modal.classList.add('active');
}

export function closeSecurityModal() {
  const overlay = document.getElementById('raahi-cyber-overlay');
  const modal = document.getElementById('raahi-cyber-modal');
  if (overlay) overlay.classList.remove('active');
  if (modal) modal.classList.remove('active');
}

function updateSecurityModalUser(user) {
  const userStatusEl = document.getElementById('cyber-user-status');
  if (userStatusEl) {
    if (user) {
      userStatusEl.textContent = `${user.name.toUpperCase()} (ACTIVE)`;
      userStatusEl.className = 'cyber-val green';
    } else {
      userStatusEl.textContent = 'GUEST / DISCONNECTED';
      userStatusEl.className = 'cyber-val gold';
    }
  }
}

function updateSecurityModalLogs(logMsg) {
  const logsEl = document.getElementById('cyber-console-logs');
  if (logsEl) {
    logsEl.textContent += `\n${logMsg}`;
    logsEl.scrollTop = logsEl.scrollHeight;
  }
}

window.raahiTriggerFirebaseSignIn = (provider) => triggerFirebaseSignIn(provider);
window.raahiOpenSecurityModal = () => openSecurityModal();
window.raahiCloseSecurityModal = () => closeSecurityModal();
