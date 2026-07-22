import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { CheckCircle2, MailCheck } from 'lucide-react';

export const VerifyEmailPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="space-y-6 text-center py-4">
      <div className="w-16 h-16 rounded-full bg-emerald-50 text-semantic-success flex items-center justify-center mx-auto shadow-subtle">
        <MailCheck className="w-8 h-8" />
      </div>

      <div className="space-y-2">
        <h3 className="text-xl font-bold text-text-primary">Email Verification Sent</h3>
        <p className="text-xs text-text-secondary max-w-xs mx-auto">
          We have dispatched a verification email to your university inbox. Please click the link inside to verify your account.
        </p>
      </div>

      <div className="pt-4 space-y-3">
        <Button className="w-full" onClick={() => navigate('/dashboard')}>
          Continue to Student Dashboard
        </Button>
        <Button variant="ghost" size="sm" className="w-full">
          Resend Verification Email
        </Button>
      </div>
    </div>
  );
};
