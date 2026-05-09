import { createContext, useContext, useState, useCallback, useEffect, ReactNode } from 'react';

export type AppRoute =
  | 'dashboard'
  | 'insights'
  | 'settings'
  | 'profile'
  | 'create'
  | 'record'
  | 'error'
  | 'getting-started';

export interface AppState {
  route: AppRoute;
  darkMode: boolean;
  mobileMenuOpen: boolean;
  profileOpen: boolean;
  lastError: string | null;
  errorVisible: boolean;
}

interface AppContextValue {
  state: AppState;
  navigate: (route: AppRoute) => void;
  toggleDarkMode: () => void;
  toggleMobileMenu: () => void;
  openProfile: () => void;
  closeProfile: () => void;
  showError: (message: string) => void;
  clearError: () => void;
  resetLocalData: () => void;
}

const STORAGE_KEY = 'ops-scope-check-0510-state';

function loadState(): Partial<AppState> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw);
    return {
      darkMode: typeof parsed.darkMode === 'boolean' ? parsed.darkMode : false,
      route: parsed.route,
    };
  } catch {
    return {};
  }
}

function saveState(state: AppState) {
  try {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ darkMode: state.darkMode, route: state.route })
    );
  } catch {
    // ignore storage errors
  }
}

const defaultState: AppState = {
  route: 'dashboard',
  darkMode: false,
  mobileMenuOpen: false,
  profileOpen: false,
  lastError: null,
  errorVisible: false,
};

const AppContext = createContext<AppContextValue | null>(null);

export function AppProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<AppState>(() => {
    const saved = loadState();
    return { ...defaultState, ...saved };
  });

  useEffect(() => {
    saveState(state);
  }, [state.darkMode, state.route]);

  const navigate = useCallback((route: AppRoute) => {
    setState((s) => ({ ...s, route, mobileMenuOpen: false }));
  }, []);

  const toggleDarkMode = useCallback(() => {
    setState((s) => ({ ...s, darkMode: !s.darkMode }));
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setState((s) => ({ ...s, mobileMenuOpen: !s.mobileMenuOpen }));
  }, []);

  const openProfile = useCallback(() => {
    setState((s) => ({ ...s, profileOpen: true }));
  }, []);

  const closeProfile = useCallback(() => {
    setState((s) => ({ ...s, profileOpen: false }));
  }, []);

  const showError = useCallback((message: string) => {
    setState((s) => ({ ...s, lastError: message, errorVisible: true, route: 'error' }));
  }, []);

  const clearError = useCallback(() => {
    setState((s) => ({ ...s, lastError: null, errorVisible: false, route: 'dashboard' }));
  }, []);

  const resetLocalData = useCallback(() => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    setState({ ...defaultState, route: 'dashboard' });
  }, []);

  return (
    <AppContext.Provider
      value={{
        state,
        navigate,
        toggleDarkMode,
        toggleMobileMenu,
        openProfile,
        closeProfile,
        showError,
        clearError,
        resetLocalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useApp() {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error('useApp must be used within AppProvider');
  return ctx;
}
