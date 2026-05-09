import { useCallback } from 'react';
import { useApp, type AppRoute } from '../contexts/AppContext';

export function useAppState() {
  const { state, navigate, toggleDarkMode, toggleMobileMenu, openProfile, closeProfile, showError, clearError, resetLocalData } = useApp();

  const goTo = useCallback((route: AppRoute) => navigate(route), [navigate]);

  return {
    route: state.route,
    darkMode: state.darkMode,
    mobileMenuOpen: state.mobileMenuOpen,
    profileOpen: state.profileOpen,
    lastError: state.lastError,
    errorVisible: state.errorVisible,
    goTo,
    toggleDarkMode,
    toggleMobileMenu,
    openProfile,
    closeProfile,
    showError,
    clearError,
    resetLocalData,
  };
}
