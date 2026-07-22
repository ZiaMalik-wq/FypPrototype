import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { Mail, CheckCircle2, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export const ForgotPasswordPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSent, setIsSent] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    await new Promise(r => setTimeout(r, 600));
    setIsLoading(false);
    setIsSent(true);
    toast.success('Password reset link dispatched.');
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-text-primary tracking-tight">Reset Password</h3>
        <p className="text-xs text-text-secondary mt-1">
          Enter your registered university email to receive a secure password recovery link.
        </p>
      </div>

      {isSent ? (
        <div className="p-6 bg-brand-50 border border-brand-200 rounded-sm text-center space-y-3">
          <CheckCircle2 className="w-10 h-10 text-brand-600 mx-auto" />
          <h4 className="text-sm font-semibold text-text-primary">Check Your Inbox</h4>
          <p className="text-xs text-text-secondary">
            We sent a password recovery link to <span className="font-semibold">{email}</span>.
          </p>
          <Button variant="outline" size="sm" onClick={() => setIsSent(false)}>
            Try another email
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Email Address</label>
            <div className="relative">
              <Mail className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="student@university.edu.pk"
                className="w-full pl-9 pr-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
              />
            </div>
          </div>

          <Button type="submit" className="w-full" isLoading={isLoading}>
            Send Reset Link
          </Button>
        </form>
      )}

      <div className="text-center pt-2">
        <Link to="/login" className="inline-flex items-center text-xs font-medium text-text-secondary hover:text-brand-600">
          <ArrowLeft className="w-3.5 h-3.5 mr-1" /> Back to Sign In
        </Link>
      </div>
    </div>
  );
};
