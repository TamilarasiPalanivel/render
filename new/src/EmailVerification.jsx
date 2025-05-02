import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

function EmailVerification() {
  const [message, setMessage] = useState('Verifying your email...');
  const [isVerified, setIsVerified] = useState(false);
  const [searchParams] = useSearchParams(); // Use react-router-dom's useSearchParams

  useEffect(() => {
    const verifyEmail = async () => {
      const token = searchParams.get('token'); // Get the token from query parameters
      console.log('Token:', token); // Log the token for debugging  
      if (!token) {
        setMessage('Invalid or missing token.');
        return;
      }

      try {
        // Decode the token if it's URL-encoded
        const decodedToken = decodeURIComponent(token);

        const response = await fetch(`http://localhost:5000/api/auth/verify-email?token=${decodedToken}`, {
          method: 'GET',
        });

        if (response.ok) {
          setMessage('Your email has been successfully verified! 🎉');
          setIsVerified(true);
        } else {
          const errorData = await response.json();
          setMessage(errorData.error || 'Failed to verify email.');
        }
      } catch (error) {
        setMessage('An error occurred while verifying your email.');
      }
    };

    verifyEmail();
  }, [searchParams]);

  return (
    <div className="App">
      <div className="card">
        <h1>Email Verification</h1>
        <p>{message}</p>
        {isVerified && (
          <h1>
            <a href="/login">Go to Login</a>
          </h1>
        )}
      </div>
    </div>
  );
}

export default EmailVerification;