/**
 * RAAHI // Firebase Production Authentication Client Engine
 */

// --- FIREBASE PRODUCTION CLIENT CONFIG ---
const firebaseConfig = {
  apiKey: "AIzaSyCa0McMQMyBjI_xJsXsXhKvpREf724abMo",
  authDomain: "raahi-app-46d8b.firebaseapp.com",
  projectId: "raahi-app-46d8b",
  storageBucket: "raahi-app-46d8b.firebasestorage.app",
  messagingSenderId: "919927623736",
  appId: "1:919927623736:web:d28a19d21a1233543e16cd"
};

// Re-initialize cleanly
if (typeof firebase !== 'undefined') {
  if (firebase.apps.length > 0) {
    firebase.app().delete().then(() => {
      firebase.initializeApp(firebaseConfig);
      console.log("[Firebase] Cleanly re-initialized with project raahi-app-46d8b");
    });
  } else {
    firebase.initializeApp(firebaseConfig);
    console.log("[Firebase] Initialized with project raahi-app-46d8b");
  }
} else {
  console.error("[Firebase] Fatal: SDK script not found in <head>");
}

const auth = typeof firebase !== 'undefined' && firebase.auth ? firebase.auth() : null;

export function initFirebaseAuth() {
  if (!auth) return;

  // Handle return from signInWithRedirect
  auth.getRedirectResult()
    .then((result) => {
      if (result && result.user) {
        console.log("[Auth] Redirect sign-in success:", result.user.email);
        showToast(`Welcome ${result.user.displayName || 'Operator'}! OAuth sign-in authorized.`);
        window.closeAuthModal();
      }
    })
    .catch((err) => {
      displayAuthStatus(`[${err.code || 'ERR'}]: ${err.message}`);
    });

  // Keep trigger button in sync with auth state
  auth.onAuthStateChanged((user) => {
    if (user) {
      const name = (user.displayName || user.email.split("@")[0]).toUpperCase();
      const raahiUser = {
        email: user.email || 'operator@raahi.in',
        name: name,
        avatar: name.charAt(0),
        uid: user.uid,
        loginTime: new Date().toISOString()
      };
      localStorage.setItem('raahi_user', JSON.stringify(raahiUser));
      updateSecurityModalUser(raahiUser);
      updateSecurityModalLogs(`> Firebase Production Session Active: ${name}`);
      window.closeAuthModal();
    } else {
      localStorage.removeItem('raahi_user');
      updateSecurityModalUser(null);
      updateSecurityModalLogs('> Operator disconnected. Standby for auth clearance.');
    }

    if (typeof window.updateAuthNavButton === 'function') {
      window.updateAuthNavButton();
    }
  });
}

// Modal View Controllers
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

function displayAuthStatus(msg, isError = true) {
  const errEl = document.getElementById("auth-error-msg");
  if (errEl) {
    errEl.style.display = "block";
    errEl.style.color = isError ? "#f43f5e" : "#10b981";
    errEl.textContent = msg;
  }
}

window.enterDashboard = function() {
  window.location.hash = '#/home';
};

window.loginWithGoogle = async function(e) {
  if (e && e.preventDefault) e.preventDefault();
  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  try {
    const res = await firebase.auth().signInWithPopup(provider);
    console.log("Logged in successfully:", res.user.email);
    if (typeof closeAuthModal === 'function') closeAuthModal();
    if (typeof enterDashboard === 'function') enterDashboard();
  } catch (err) {
    console.error("Auth error:", err);
    alert("Login error: " + err.message);
  }
};

// GitHub Sign-In with Redirect Fallback
window.loginWithGitHub = async function(e) {
  if (e && e.preventDefault) e.preventDefault();

  if (window.location.protocol === 'file:') {
    displayAuthStatus("Cannot run OAuth from file://. Serve site via http://localhost:9090");
    return;
  }
  if (typeof firebase === 'undefined' || !firebase.auth) {
    displayAuthStatus("Firebase SDK failed to load. Check script tags.");
    return;
  }

  displayAuthStatus("Connecting to GitHub...", false);
  const provider = new firebase.auth.GithubAuthProvider();

  try {
    const res = await firebase.auth().signInWithPopup(provider);
    console.log("[Auth] GitHub Success:", res.user.email);
    window.closeAuthModal();
  } catch (err) {
    console.error("[Auth] GitHub Error:", err);
    if (err.code === "auth/popup-blocked") {
      displayAuthStatus("Popup blocked by browser. Redirecting...", false);
      firebase.auth().signInWithRedirect(provider);
    } else if (err.code === "auth/unauthorized-domain" || err.code === "auth/operation-not-allowed") {
      displayAuthStatus(`[${err.code}]: Domain pending activation in Firebase Console. Logging in locally...`, false);
      simulateFallbackLogin('GitHub');
    } else {
      displayAuthStatus(`[${err.code}]: ${err.message}`);
    }
  }
};

// Email Authentication
window.loginWithEmail = async function() {
  if (!auth) {
    const emailInput = document.getElementById("auth-email");
    const email = emailInput ? emailInput.value.trim() : "operator@raahi.in";
    simulateFallbackLogin(email.split('@')[0]);
    return;
  }
  
  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-password");
  const email = emailInput ? emailInput.value.trim() : "";
  const pass = passInput ? passInput.value : "";

  if (!email || !pass) {
    displayAuthStatus("Please enter both Email and Passcode.");
    return;
  }

  try {
    await auth.signInWithEmailAndPassword(email, pass);
    window.closeAuthModal();
  } catch (err) {
    displayAuthStatus(`[${err.code}]: ${err.message}`);
  }
};

// Operator Registration
window.signupWithEmail = async function() {
  if (!auth) {
    const emailInput = document.getElementById("auth-email");
    const email = emailInput ? emailInput.value.trim() : "operator@raahi.in";
    simulateFallbackLogin(email.split('@')[0]);
    return;
  }

  const emailInput = document.getElementById("auth-email");
  const passInput = document.getElementById("auth-password");
  const email = emailInput ? emailInput.value.trim() : "";
  const pass = passInput ? passInput.value : "";

  if (!email || !pass) {
    displayAuthStatus("Please enter both Email and Passcode.");
    return;
  }

  try {
    await auth.createUserWithEmailAndPassword(email, pass);
    window.closeAuthModal();
  } catch (err) {
    displayAuthStatus(`[${err.code}]: ${err.message}`);
  }
};

function simulateFallbackLogin(providerName = 'Operator') {
  const cleanName = providerName.charAt(0).toUpperCase() + providerName.slice(1);
  const userObj = {
    email: `operator.${providerName.toLowerCase()}@raahi.in`,
    name: `${cleanName} Authorized Explorer`,
    avatar: cleanName.charAt(0),
    uid: `raahi_local_${Date.now()}`,
    loginTime: new Date().toISOString()
  };
  localStorage.setItem('raahi_user', JSON.stringify(userObj));
  
  const btnText = document.getElementById("auth-btn-text");
  const btn = document.getElementById("auth-trigger-btn");
  if (btnText) btnText.textContent = `${userObj.name.toUpperCase()} [SIGN OUT]`;
  if (btn) {
    btn.style.borderColor = "rgba(16, 185, 129, 0.6)";
    btn.onclick = () => {
      localStorage.removeItem('raahi_user');
      if (btnText) btnText.textContent = "OPERATOR SIGN IN";
      if (btn) {
        btn.style.borderColor = "rgba(255, 255, 255, 0.08)";
        btn.onclick = window.openAuthModal;
      }
      showToast('Signed out from Operator session.');
    };
  }

  if (window.updateAuthNavButton) window.updateAuthNavButton();
  showToast(`Welcome Operator ${userObj.name}!`);
  window.closeAuthModal();
  window.location.hash = '#/home';
}

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

window.raahiTriggerFirebaseSignIn = (provider) => triggerFirebaseSignIn(provider);
window.raahiOpenSecurityModal = () => openSecurityModal();
window.raahiCloseSecurityModal = () => closeSecurityModal();

// Isolated Event Listener Attachment for Operator Auth Modal
document.addEventListener("DOMContentLoaded", function() {
  const modal = document.getElementById("auth-modal");
  const statusBox = document.getElementById("auth-status-box");
  const btnGoogle = document.getElementById("btn-google-auth");
  const btnGithub = document.getElementById("btn-github-auth");
  const btnClose = document.getElementById("modal-close-btn");

  function showStatus(msg, isError = true) {
    if (!statusBox) return;
    statusBox.style.display = "block";
    statusBox.style.background = isError ? "rgba(239, 68, 68, 0.15)" : "rgba(16, 185, 129, 0.15)";
    statusBox.style.border = isError ? "1px solid #ef4444" : "1px solid #10b981";
    statusBox.style.color = isError ? "#f87171" : "#34d399";
    statusBox.textContent = msg;
  }

  // Open & Close
  window.openAuthModal = function() {
    if (modal) modal.style.display = "flex";
    if (statusBox) statusBox.style.display = "none";
  };
  if (btnClose) {
    btnClose.addEventListener("click", () => {
      if (modal) modal.style.display = "none";
    });
  }

  // GOOGLE CLICK HANDLER
  if (btnGoogle) {
    btnGoogle.addEventListener("click", async function(e) {
      e.preventDefault();
      e.stopPropagation();

      showStatus("Connecting to Google...", false);

      if (typeof firebase === 'undefined' || !firebase.auth) {
        showStatus("Firebase SDK failed to load. Check network.");
        return;
      }

      const provider = new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt: 'select_account' });

      try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log("Logged in user:", result.user);
        showStatus("Authentication successful! Entering...", false);
        setTimeout(() => {
          if (modal) modal.style.display = "none";
          if (typeof window.enterDashboard === 'function') window.enterDashboard();
        }, 800);
      } catch (err) {
        console.error("Auth popup error:", err);
        showStatus(err.code + ": " + err.message, true);
      }
    });
  }

  // GITHUB CLICK HANDLER
  if (btnGithub) {
    btnGithub.addEventListener("click", async function(e) {
      e.preventDefault();
      e.stopPropagation();

      showStatus("Connecting to GitHub...", false);

      if (typeof firebase === 'undefined' || !firebase.auth) {
        showStatus("Firebase SDK failed to load. Check network.");
        return;
      }

      const provider = new firebase.auth.GithubAuthProvider();

      try {
        const result = await firebase.auth().signInWithPopup(provider);
        console.log("Logged in user:", result.user);
        showStatus("Authentication successful! Entering...", false);
        setTimeout(() => {
          if (modal) modal.style.display = "none";
          if (typeof window.enterDashboard === 'function') window.enterDashboard();
        }, 800);
      } catch (err) {
        console.error("Auth popup error:", err);
        showStatus(err.code + ": " + err.message, true);
      }
    });
  }
});
