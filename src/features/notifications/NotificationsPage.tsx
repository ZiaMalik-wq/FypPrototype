import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { markAsRead, markAllAsRead } from '@/store/slices/notificationSlice';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  Info,
  ExternalLink
} from 'lucide-react';

export const NotificationsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { items: notifications } = useAppSelector(state => state.notifications);
  const [filter, setFilter] = useState<'All' | 'Unread'>('All');

  const filtered = notifications.filter(n => filter === 'All' || !n.isRead);

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Notifications Center</h1>
            <Badge variant="brand">{notifications.filter(n => !n.isRead).length} Unread</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Stay informed on skill gap updates, recommendations, and labor market shifts.
          </p>
        </div>

        <Button
          size="sm"
          variant="outline"
          onClick={() => { dispatch(markAllAsRead()); toast.success('All notifications marked as read.'); }}
          leftIcon={<CheckCircle2 className="w-4 h-4" />}
        >
          Mark All Read
        </Button>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center space-x-2 bg-surface-card border border-surface-border p-3 rounded-md shadow-subtle">
        <button
          onClick={() => setFilter('All')}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
            filter === 'All' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-text-secondary hover:bg-slate-200'
          }`}
        >
          All Notifications ({notifications.length})
        </button>
        <button
          onClick={() => setFilter('Unread')}
          className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
            filter === 'Unread' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-text-secondary hover:bg-slate-200'
          }`}
        >
          Unread Only ({notifications.filter(n => !n.isRead).length})
        </button>
      </div>

      {/* Notifications List */}
      <Card>
        <CardContent className="divide-y divide-surface-border p-0">
          {filtered.length === 0 ? (
            <div className="p-8 text-center text-xs text-text-muted">No notifications matching filter</div>
          ) : (
            filtered.map(item => (
              <div
                key={item.id}
                onClick={() => {
                  dispatch(markAsRead(item.id));
                  if (item.link) navigate(item.link);
                }}
                className={`p-4 flex items-start justify-between gap-4 cursor-pointer transition-colors ${
                  item.isRead ? 'bg-white hover:bg-slate-50' : 'bg-brand-50/40 hover:bg-brand-50/70 font-medium'
                }`}
              >
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0 mt-0.5">
                    {item.type === 'success' && <CheckCircle2 className="w-4 h-4 text-semantic-success" />}
                    {item.type === 'warning' && <AlertTriangle className="w-4 h-4 text-semantic-warning" />}
                    {item.type === 'info' && <Info className="w-4 h-4 text-brand-600" />}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-text-primary">{item.title}</h4>
                    <p className="text-xs text-text-secondary mt-0.5">{item.message}</p>
                    <span className="text-[10px] text-text-muted mt-1 block">{item.timestamp}</span>
                  </div>
                </div>

                {item.link && (
                  <Button size="sm" variant="ghost" rightIcon={<ExternalLink className="w-3.5 h-3.5" />}>
                    View
                  </Button>
                )}
              </div>
            ))
          )}
        </CardContent>
      </Card>
    </div>
  );
};
