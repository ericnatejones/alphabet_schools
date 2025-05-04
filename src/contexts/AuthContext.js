import React, { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Check for existing session on mount
  useEffect(() => {
    const storedUser = localStorage.getItem('currentUser');
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (err) {
        console.error('Failed to parse stored user data', err);
        localStorage.removeItem('currentUser');
      }
    }
    setLoading(false);
  }, []);

  // Update localStorage when user changes
  useEffect(() => {
    if (currentUser) {
      localStorage.setItem('currentUser', JSON.stringify(currentUser));
    } else {
      localStorage.removeItem('currentUser');
    }
  }, [currentUser]);

  // Mock login function - would connect to your authentication service in production
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          // Mock validation
          if (email === 'student@example.com' && password === 'password') {
            const user = {
              id: '1',
              name: 'Demo Student',
              email: 'student@example.com',
              role: 'student',
              school: 'Code School',
              cohort: 'May 2025',
              avatar: 'https://via.placeholder.com/150',
              completedCourses: ['AI School'],
              currentProjects: ['Character Creator Tool']
            };
            setCurrentUser(user);
            setLoading(false);
            resolve(user);
          } else if (email === 'creator@example.com' && password === 'password') {
            const user = {
              id: '2',
              name: 'Demo Creator',
              email: 'creator@example.com',
              role: 'creator',
              avatar: 'https://via.placeholder.com/150',
              createdAssets: ['Fantasy Character', 'Magic Sword'],
              ownedNFTs: ['eth:0x123...456:1']
            };
            setCurrentUser(user);
            setLoading(false);
            resolve(user);
          } else {
            setError('Invalid email or password');
            setLoading(false);
            resolve(null);
          }
        }, 1000);
      });
    } catch (err) {
      setError('Login failed');
      setLoading(false);
      return null;
    }
  };

  const register = async (userData) => {
    setLoading(true);
    setError(null);
    
    try {
      // Simulate API call
      return new Promise((resolve) => {
        setTimeout(() => {
          const newUser = {
            id: Date.now().toString(),
            ...userData,
            avatar: 'https://via.placeholder.com/150',
            createdAt: new Date().toISOString()
          };
          setCurrentUser(newUser);
          setLoading(false);
          resolve(newUser);
        }, 1000);
      });
    } catch (err) {
      setError('Registration failed');
      setLoading(false);
      return null;
    }
  };

  const logout = () => {
    setCurrentUser(null);
  };

  const updateProfile = (updates) => {
    setCurrentUser(prev => ({
      ...prev,
      ...updates
    }));
  };

  return (
    <AuthContext.Provider value={{ 
      currentUser, 
      loading, 
      error, 
      login, 
      logout, 
      register,
      updateProfile
    }}>
      {children}
    </AuthContext.Provider>
  );
};
