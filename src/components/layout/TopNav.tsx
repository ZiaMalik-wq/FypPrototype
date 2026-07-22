import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/store';
import { markAsRead, markAllAsRead } from '@/store/slices/notificationSlice';
import { logout } from '@/store/slices/authSlice';
import { ArrowSquareOut, Bell, CheckCircle, Gear, MagnifyingGlass, Question, Shield, SignOut, User as UserIcon } from '@phosphor-icons/react';

export interface TopNavProps {
  onOpenCommandK: () => void;
}

export const TopNav: React.FC<TopNavProps> = ({ onOpenCommandK }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { user } = useAppSelector(state => state.auth);
  const { items: notifications } = useAppSelector(state => state.notifications);

  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const unreadCount = notifications.filter(n => !n.isRead).length;

  return (
    <header className="h-16 bg-surface-card border-b border-surface-border sticky top-0 z-20 px-6 flex items-center justify-between shadow-subtle">
      {/* Global MagnifyingGlass Bar Button */}
      <div className="flex items-center flex-1 max-w-md">
        <button
          onClick={onOpenCommandK}
          className="w-full flex items-center justify-between px-3.5 py-2 bg-slate-50 border border-surface-border rounded-sm text-sm text-text-muted hover:bg-slate-100 hover:border-slate-300 transition-colors focus-ring"
        >
          <div className="flex items-center space-x-2">
            <MagnifyingGlass className="w-4 h-4 text-text-muted" />
            <span>MagnifyingGlass features, skills, reports...</span>
          </div>
          <kbd className="hidden sm:inline-block px-2 py-0.5 text-[10px] font-semibold text-text-muted bg-white border border-slate-200 rounded-xs shadow-2xs">
            Ctrl + K
          </kbd>
        </button>
      </div>

      {/* Right Controls */}
      <div className="flex items-center space-x-4">
        {/* Help Link */}
        <button
          onClick={() => window.open('https://github.com', '_blank')}
          className="p-2 text-text-secondary hover:text-brand-600 hover:bg-slate-50 rounded-sm transition-colors focus-ring"
          title="Help & Documentation"
        >
          <Question className="w-5 h-5" />
        </button>

        {/* Notifications Icon + Popover */}
        <div className="relative">
          <button
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="p-2 text-text-secondary hover:text-brand-600 hover:bg-slate-50 rounded-sm transition-colors relative focus-ring"
            title="Notifications"
          >
            <Bell className="w-5 h-5" />
            {unreadCount > 0 && (
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-semantic-danger animate-pulse" />
            )}
          </button>

          {isNotifOpen && (
            <div className="absolute right-0 mt-2 w-80 bg-surface-card border border-surface-border rounded-md shadow-dropdown p-4 z-50 animate-in fade-in duration-150">
              <div className="flex items-center justify-between pb-3 border-b border-surface-border mb-3">
                <h4 className="text-sm font-semibold text-text-primary">Notifications</h4>
                {unreadCount > 0 && (
                  <button
                    onClick={() => dispatch(markAllAsRead())}
                    className="text-xs text-brand-600 hover:underline font-medium"
                  >
                    Mark all read
                  </button>
                )}
              </div>
              <div className="space-y-3 max-h-64 overflow-y-auto">
                {notifications.length === 0 ? (
                  <p className="text-xs text-text-muted text-center py-4">No new notifications</p>
                ) : (
                  notifications.map(n => (
                    <div
                      key={n.id}
                      onClick={() => {
                        dispatch(markAsRead(n.id));
                        if (n.link) navigate(n.link);
                        setIsNotifOpen(false);
                      }}
                      className={`p-2.5 rounded-xs border text-xs cursor-pointer transition-colors ${
                        n.isRead ? 'bg-white border-surface-border text-text-secondary' : 'bg-brand-50/50 border-brand-200 text-text-primary'
                      }`}
                    >
                      <div className="flex items-center justify-between font-semibold">
                        <span>{n.title}</span>
                        <span className="text-[10px] text-text-muted">{n.timestamp}</span>
                      </div>
                      <p className="mt-1 text-text-secondary line-clamp-2">{n.message}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          )}
        </div>

        {/* User Avatar & Menu */}
        <div className="relative">
          <button
            onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
            className="flex items-center space-x-2 p-1.5 rounded-sm hover:bg-slate-50 transition-colors focus-ring"
          >
            <img
              src={user?.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
              alt="Avatar"
              className="w-8 h-8 rounded-full border border-surface-border object-cover"
            />
            <span className="hidden md:inline-block text-sm font-semibold text-text-primary">
              {user?.fullName?.split(' ')[0]}
            </span>
          </button>

          {isUserMenuOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-surface-card border border-surface-border rounded-md shadow-dropdown py-2 z-50 animate-in fade-in duration-150">
              <div className="px-4 py-2 border-b border-surface-border mb-1">
                <p className="text-sm font-semibold text-text-primary">{user?.fullName}</p>
                <p className="text-xs text-text-muted truncate">{user?.email}</p>
                <span className="inline-block mt-1 px-2 py-0.5 text-[10px] font-semibold bg-brand-50 text-brand-700 rounded-xs">
                  {user?.role}
                </span>
              </div>

              <button
                onClick={() => { navigate('/profile'); setIsUserMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-sm text-text-secondary hover:bg-slate-50 hover:text-text-primary flex items-center space-x-2"
              >
                <UserIcon className="w-4 h-4" />
                <span>My Profile</span>
              </button>

              <button
                onClick={() => { navigate('/settings'); setIsUserMenuOpen(false); }}
                className="w-full px-4 py-2 text-left text-sm text-text-secondary hover:bg-slate-50 hover:text-text-primary flex items-center space-x-2"
              >
                <Gear className="w-4 h-4" />
                <span>Gear</span>
              </button>

              {user?.role === 'SystemAdmin' && (
                <button
                  onClick={() => { navigate('/admin'); setIsUserMenuOpen(false); }}
                  className="w-full px-4 py-2 text-left text-sm text-brand-600 hover:bg-brand-50 flex items-center space-x-2 font-medium"
                >
                  <Shield className="w-4 h-4" />
                  <span>Admin Dashboard</span>
                </button>
              )}

              <div className="border-t border-surface-border mt-1 pt-1">
                <button
                  onClick={() => { dispatch(logout()); navigate('/login'); }}
                  className="w-full px-4 py-2 text-left text-sm text-semantic-danger hover:bg-rose-50 flex items-center space-x-2 font-medium"
                >
                  <SignOut className="w-4 h-4" />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};
