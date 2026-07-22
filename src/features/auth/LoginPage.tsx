import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { useAppDispatch } from '@/store';
import { loginSuccess } from '@/store/slices/authSlice';
import { mockStudentUser, mockAdminUser } from '@/services/mockData';
import { Button } from '@/components/common/Button';
import { toast } from 'sonner';
import { Mail, Lock, ArrowRight } from 'lucide-react';

const loginSchema = z.object({
  email: z.string().email('Please enter a valid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional()
});

type LoginFormData = z.infer<typeof loginSchema>;

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors, isSubmitting }
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'ali.khan@comsats.edu.pk',
      password: 'Password123!',
      rememberMe: true
    }
  });

  const onSubmit = async (data: LoginFormData) => {
    // Simulate backend API authentication check
    await new Promise(res => setTimeout(res, 800));

    if (data.email.includes('admin')) {
      dispatch(loginSuccess({ user: mockAdminUser, token: 'mock-jwt-admin-token' }));
      toast.success('Signed in successfully as Administrator.');
      navigate('/admin');
    } else {
      dispatch(loginSuccess({ user: mockStudentUser, token: 'mock-jwt-student-token' }));
      toast.success('Signed in successfully. Welcome back, Ali!');
      navigate('/dashboard');
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-xl font-bold text-text-primary tracking-tight">Sign In to Your Account</h3>
        <p className="text-xs text-text-secondary mt-1">
          Access your skill gap reports, recommendations, and labor trends.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        {/* Email Field */}
        <div className="space-y-1">
          <label className="text-xs font-semibold text-text-primary block">University Email Address</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
            <input
              {...register('email')}
              type="email"
              placeholder="e.g. student@university.edu.pk"
              className="w-full pl-9 pr-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring placeholder:text-text-muted"
            />
          </div>
          {errors.email && <p className="text-[11px] text-semantic-danger font-medium mt-0.5">{errors.email.message}</p>}
        </div>

        {/* Password Field */}
        <div className="space-y-1">
          <div className="flex justify-between items-center">
            <label className="text-xs font-semibold text-text-primary block">Password</label>
            <Link to="/forgot-password" className="text-xs text-brand-600 hover:underline">
              Forgot password?
            </Link>
          </div>
          <div className="relative">
            <Lock className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
            <input
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className="w-full pl-9 pr-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring placeholder:text-text-muted"
            />
          </div>
          {errors.password && <p className="text-[11px] text-semantic-danger font-medium mt-0.5">{errors.password.message}</p>}
        </div>

        {/* Remember Me */}
        <div className="flex items-center space-x-2">
          <input
            {...register('rememberMe')}
            type="checkbox"
            id="rememberMe"
            className="w-4 h-4 text-brand-600 rounded-xs border-surface-border focus:ring-brand-600"
          />
          <label htmlFor="rememberMe" className="text-xs text-text-secondary select-none cursor-pointer">
            Keep me signed in on this device
          </label>
        </div>

        {/* Quick Demo Pre-fill Buttons */}
        <div className="p-3 bg-slate-50 border border-surface-border rounded-sm space-y-1.5">
          <p className="text-[11px] font-semibold text-text-secondary uppercase tracking-wider">Quick Demo Pre-fills:</p>
          <div className="flex gap-2">
            <button
              type="button"
              onClick={() => { setValue('email', 'ali.khan@comsats.edu.pk'); setValue('password', 'Password123!'); }}
              className="text-[11px] bg-white border border-slate-200 px-2 py-1 rounded-xs hover:border-brand-600 text-brand-700"
            >
              Student Persona
            </button>
            <button
              type="button"
              onClick={() => { setValue('email', 'tariq.admin@skillgap.ai'); setValue('password', 'AdminPass123!'); }}
              className="text-[11px] bg-white border border-slate-200 px-2 py-1 rounded-xs hover:border-brand-600 text-brand-700"
            >
              System Admin
            </button>
          </div>
        </div>

        {/* Submit */}
        <Button type="submit" className="w-full" isLoading={isSubmitting} rightIcon={<ArrowRight className="w-4 h-4" />}>
          Sign In
        </Button>
      </form>

      <div className="text-center text-xs text-text-secondary pt-2">
        Don't have an account yet?{' '}
        <Link to="/register" className="font-semibold text-brand-600 hover:underline">
          Create student account
        </Link>
      </div>
    </div>
  );
};
