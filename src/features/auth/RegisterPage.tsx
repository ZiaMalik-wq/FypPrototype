import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useNavigate, Link } from 'react-router-dom';
import { Button } from '@/components/common/Button';
import { toast } from 'sonner';
import { User, Mail, Lock, GraduationCap, Building2 } from 'lucide-react';

const registerSchema = z.object({
  fullName: z.string().min(2, 'Full name is required'),
  email: z.string().email('Valid email is required'),
  university: z.string().min(2, 'University name is required'),
  program: z.string().min(2, 'Degree program is required'),
  graduationYear: z.coerce.number().min(2024).max(2030),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  confirmPassword: z.string()
}).refine(data => data.password === data.confirmPassword, {
  message: "Passwords do not match",
  path: ["confirmPassword"]
});

type RegisterFormData = z.infer<typeof registerSchema>;

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      graduationYear: 2027
    }
  });

  const onSubmit = async (_data: RegisterFormData) => {
    await new Promise(res => setTimeout(res, 800));
    toast.success('Registration successful! Verification email sent.');
    navigate('/verify-email');
  };

  return (
    <div className="space-y-5">
      <div>
        <h3 className="text-xl font-bold text-text-primary tracking-tight">Create Student Account</h3>
        <p className="text-xs text-text-secondary mt-1">
          Join 1,400+ students leveraging AI for career readiness.
        </p>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-3.5">
        <div className="space-y-1">
          <label className="text-xs font-semibold text-text-primary block">Full Name</label>
          <div className="relative">
            <User className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
            <input
              {...register('fullName')}
              placeholder="e.g. Ali Khan"
              className="w-full pl-9 pr-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            />
          </div>
          {errors.fullName && <p className="text-[11px] text-semantic-danger font-medium">{errors.fullName.message}</p>}
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-text-primary block">University Email</label>
          <div className="relative">
            <Mail className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
            <input
              {...register('email')}
              type="email"
              placeholder="student@university.edu.pk"
              className="w-full pl-9 pr-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            />
          </div>
          {errors.email && <p className="text-[11px] text-semantic-danger font-medium">{errors.email.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">University</label>
            <input
              {...register('university')}
              placeholder="COMSATS / NUST"
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            />
            {errors.university && <p className="text-[11px] text-semantic-danger font-medium">{errors.university.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Graduation Year</label>
            <input
              {...register('graduationYear')}
              type="number"
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            />
          </div>
        </div>

        <div className="space-y-1">
          <label className="text-xs font-semibold text-text-primary block">Degree Program</label>
          <input
            {...register('program')}
            placeholder="BS Computer Science / Software Engineering"
            className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
          />
          {errors.program && <p className="text-[11px] text-semantic-danger font-medium">{errors.program.message}</p>}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Password</label>
            <input
              {...register('password')}
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            />
            {errors.password && <p className="text-[11px] text-semantic-danger font-medium">{errors.password.message}</p>}
          </div>
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Confirm Password</label>
            <input
              {...register('confirmPassword')}
              type="password"
              placeholder="••••••••"
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            />
            {errors.confirmPassword && <p className="text-[11px] text-semantic-danger font-medium">{errors.confirmPassword.message}</p>}
          </div>
        </div>

        <Button type="submit" className="w-full mt-2" isLoading={isSubmitting}>
          Create Account
        </Button>
      </form>

      <div className="text-center text-xs text-text-secondary pt-1">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-brand-600 hover:underline">
          Sign in
        </Link>
      </div>
    </div>
  );
};
