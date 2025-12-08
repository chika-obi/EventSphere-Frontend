// src/pages/Register/Register.jsx
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, User, Phone, UserCircle, UserPlus, IdCard } from 'lucide-react';
import './Register.css';

const Register = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    mobile: '',
    username: '',
    password: '',
    confirmPassword: '',
    department: '',
    enrollmentNumber: ''
  });

  const [errors, setErrors] = useState({});
  const [apiError, setApiError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(prev => ({
      ...prev,
      [name]: value
    }));

    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
    if (apiError) setApiError('');
  };

  // VALIDATION
  const validateForm = () => {
    const newErrors = {};

    // Full Name
    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Name must be at least 2 characters';
    }

    // Email
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Enter a valid email';
    }

    // Mobile
    if (!formData.mobile.trim()) {
      newErrors.mobile = 'Contact number is required';
    } else {
      const cleaned = formData.mobile.replace(/[\s\-\(\)]/g, '');
      if (!/^\+?\d{10,15}$/.test(cleaned)) {
        newErrors.mobile = 'Enter a valid contact number (10–15 digits)';
      }
    }

    // Department
    if (!formData.department.trim()) {
      newErrors.department = 'Department is required';
    }

    // Enrollment Number
    if (!formData.enrollmentNumber.trim()) {
      newErrors.enrollmentNumber = 'Enrollment number is required';
    } else if (!/^[a-zA-Z0-9]+$/.test(formData.enrollmentNumber)) {
      newErrors.enrollmentNumber = 'Only letters and numbers allowed';
    }

    // Username
    if (!formData.username.trim()) {
      newErrors.username = 'Username is required';
    } else if (formData.username.length < 3) {
      newErrors.username = 'Minimum 3 characters required';
    }

    // Password
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }

    // Confirm Password
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm password';
    } else if (formData.confirmPassword !== formData.password) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    return newErrors;
  };

  // LOCAL STORAGE REGISTRATION
  const handleSubmit = (e) => {
    e.preventDefault();
    setApiError('');

    const newErrors = validateForm();
    if (Object.keys(newErrors).length !== 0) {
      setErrors(newErrors);
      return;
    }

    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

    // Duplicate checks
    const emailExists = storedUsers.some(user => user.email === formData.email.trim().toLowerCase());
    const usernameExists = storedUsers.some(user => user.username === formData.username.trim());

    if (emailExists) {
      setErrors({ email: 'Email is already registered' });
      return;
    }

    if (usernameExists) {
      setErrors({ username: 'Username is already taken' });
      return;
    }

    // Add new user
    storedUsers.push({
      fullName: formData.fullName.trim(),
      email: formData.email.trim().toLowerCase(),
      mobile: formData.mobile.replace(/[\s\-\(\)]/g, ''),
      department: formData.department,
      enrollmentNumber: formData.enrollmentNumber,
      username: formData.username.trim(),
      password: formData.password
    });

    localStorage.setItem('users', JSON.stringify(storedUsers));

    // Navigate with SUCCESS MESSAGE
    navigate('/login', {
      state: {
        successMessage: 'Your account has been created successfully! Please log in.'
      }
    });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div className="register-header">
          <div className="register-logo">
            <UserPlus className="logo-icon" />
          </div>
          <h1 className="register-title">Create Account</h1>
          <p className="register-subtitle">Join EventSphere and stay updated always</p>
        </div>

        <div className="register-card">

          {apiError && (
            <div className="alert alert-error">{apiError}</div>
          )}

          <form onSubmit={handleSubmit} className="register-form">

            {/* FULL NAME */}
            <div className="form-group">
              <label className="form-label">Full Name</label>
              <div className="input-wrapper">
                <User className="input-icon" />
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className={`form-input ${errors.fullName ? 'input-error' : ''}`}
                  placeholder="John Doe"
                />
              </div>
              {errors.fullName && <p className="error-message">{errors.fullName}</p>}
            </div>

            {/* EMAIL */}
            <div className="form-group">
              <label className="form-label">Email Address</label>
              <div className="input-wrapper">
                <Mail className="input-icon" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`form-input ${errors.email ? 'input-error' : ''}`}
                  placeholder="you@example.com"
                />
              </div>
              {errors.email && <p className="error-message">{errors.email}</p>}
            </div>

            {/* MOBILE */}
            <div className="form-group">
              <label className="form-label">Contact Number</label>
              <div className="input-wrapper">
                <Phone className="input-icon" />
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleChange}
                  className={`form-input ${errors.mobile ? 'input-error' : ''}`}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              {errors.mobile && <p className="error-message">{errors.mobile}</p>}
            </div>

            {/* DEPARTMENT */}
            <div className="form-group">
              <label className="form-label">Department</label>
              <div className="input-wrapper">
                <UserCircle className="input-icon" />
                <select
                  name="department"
                  value={formData.department}
                  onChange={handleChange}
                  className={`form-input ${errors.department ? 'input-error' : ''}`}
                >
                  <option value="">Select Department</option>
                  <option value="Computer Science">Computer Science</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics">Electronics</option>
                  <option value="Mechanical">Mechanical</option>
                  <option value="Business Administration">Business Administration</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              {errors.department && <p className="error-message">{errors.department}</p>}
            </div>

            {/* ENROLLMENT NUMBER */}
            <div className="form-group">
              <label className="form-label">Enrollment Number</label>
              <div className="input-wrapper">
                <IdCard className="input-icon" />
                <input
                  type="text"
                  name="enrollmentNumber"
                  value={formData.enrollmentNumber}
                  onChange={handleChange}
                  className={`form-input ${errors.enrollmentNumber ? 'input-error' : ''}`}
                  placeholder="e.g., CS12345"
                />
              </div>
              {errors.enrollmentNumber && <p className="error-message">{errors.enrollmentNumber}</p>}
            </div>

            {/* USERNAME */}
            <div className="form-group">
              <label className="form-label">Username</label>
              <div className="input-wrapper">
                <UserCircle className="input-icon" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  className={`form-input ${errors.username ? 'input-error' : ''}`}
                  placeholder="johndoe"
                />
              </div>
              {errors.username && <p className="error-message">{errors.username}</p>}
            </div>

            {/* PASSWORD */}
            <div className="form-group">
              <label className="form-label">Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={`form-input ${errors.password ? 'input-error' : ''}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.password && <p className="error-message">{errors.password}</p>}
            </div>

            {/* CONFIRM PASSWORD */}
            <div className="form-group">
              <label className="form-label">Confirm Password</label>
              <div className="input-wrapper">
                <Lock className="input-icon" />
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={`form-input ${errors.confirmPassword ? 'input-error' : ''}`}
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                >
                  {showConfirmPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>
              {errors.confirmPassword && <p className="error-message">{errors.confirmPassword}</p>}
            </div>

            <button type="submit" className="btn-submit">
              Create Account
            </button>
          </form>

          <p className="signin-prompt">
            Already have an account?{' '}
            <Link to="/login" className="signin-link">Sign in instead</Link>
          </p>

        </div>
      </div>
    </div>
  );
};

export default Register;
