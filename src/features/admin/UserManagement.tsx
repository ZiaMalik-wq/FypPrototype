import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { updateUserRole, toggleUserSuspension, setUserSearchQuery, setSelectedRoleFilter } from '@/store/slices/adminSlice';
import { User, UserRole } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Dialog } from '@/components/common/Dialog';
import { toast } from 'sonner';
import { Prohibit, CheckCircle, Funnel, MagnifyingGlass, Pencil, Shield, UserCheck, Users } from '@phosphor-icons/react';

export const UserManagement: React.FC = () => {
  const dispatch = useAppDispatch();
  const { users, userSearchQuery, selectedRoleFilter } = useAppSelector(state => state.admin);

  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [newRole, setNewRole] = useState<UserRole>('Student');

  const filteredUsers = users.filter(user => {
    const matchesSearch =
      user.fullName.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
      user.email.toLowerCase().includes(userSearchQuery.toLowerCase()) ||
      (user.university && user.university.toLowerCase().includes(userSearchQuery.toLowerCase()));
    const matchesRole = selectedRoleFilter === 'All Roles' || user.role === selectedRoleFilter;
    return matchesSearch && matchesRole;
  });

  const handleRoleChange = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedUser) return;
    dispatch(updateUserRole({ userId: selectedUser.id, role: newRole }));
    toast.success(`Role for ${selectedUser.fullName} updated to ${newRole}.`);
    setSelectedUser(null);
  };

  const handleToggleSuspension = (user: User) => {
    const action = user.isSuspended ? 'reactivate' : 'suspend';
    if (window.confirm(`Are you sure you want to ${action} account for ${user.fullName}?`)) {
      dispatch(toggleUserSuspension(user.id));
      toast.info(`Account ${user.fullName} ${action}d.`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">User Management & RBAC</h1>
            <Badge variant="brand">{users.length} Platform Users</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Manage registered students, career counselors, university admins, and system administrators.
          </p>
        </div>
      </div>

      {/* Toolbar Funnel */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-card border border-surface-border p-4 rounded-md shadow-subtle">
        <div className="relative w-full max-w-md">
          <MagnifyingGlass className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="MagnifyingGlass by name, email, or university..."
            value={userSearchQuery}
            onChange={e => dispatch(setUserSearchQuery(e.target.value))}
            className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-surface-border rounded-sm focus-ring placeholder:text-text-muted"
          />
        </div>

        <div className="flex items-center space-x-2 w-full sm:w-auto">
          <span className="text-xs font-semibold text-text-secondary">Role Funnel:</span>
          <select
            value={selectedRoleFilter}
            onChange={e => dispatch(setSelectedRoleFilter(e.target.value))}
            className="px-3 py-1.5 text-xs bg-slate-50 border border-surface-border rounded-sm focus-ring font-medium text-text-primary"
          >
            <option>All Roles</option>
            <option>Student</option>
            <option>CareerCounselor</option>
            <option>UniversityAdmin</option>
            <option>SystemAdmin</option>
          </select>
        </div>
      </div>

      {/* Enterprise Users Table */}
      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-text-secondary">
            <thead className="bg-slate-50 border-b border-surface-border text-text-primary font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">User</th>
                <th className="p-4">Role</th>
                <th className="p-4">Institution / Degree</th>
                <th className="p-4">Joined Date</th>
                <th className="p-4">Status</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border bg-surface-card">
              {filteredUsers.map(user => (
                <tr key={user.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center space-x-3">
                      <img
                        src={user.avatarUrl || 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100'}
                        alt="Avatar"
                        className="w-8 h-8 rounded-full border border-surface-border object-cover shrink-0"
                      />
                      <div>
                        <p className="font-semibold text-text-primary">{user.fullName}</p>
                        <p className="text-[11px] text-text-muted">{user.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="p-4">
                    <Badge variant={user.role === 'SystemAdmin' ? 'danger' : user.role === 'UniversityAdmin' ? 'warning' : 'brand'} size="sm">
                      {user.role}
                    </Badge>
                  </td>
                  <td className="p-4">
                    <p className="font-medium text-text-primary">{user.university || 'N/A'}</p>
                    <p className="text-[11px] text-text-muted">{user.degree || ''}</p>
                  </td>
                  <td className="p-4">{user.createdAt || '2026-01-15'}</td>
                  <td className="p-4">
                    <Badge variant={user.isSuspended ? 'danger' : 'success'} size="sm">
                      {user.isSuspended ? 'Suspended' : 'Active'}
                    </Badge>
                  </td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => { setSelectedUser(user); setNewRole(user.role); }}
                      className="p-1.5 text-text-secondary hover:text-brand-600 hover:bg-brand-50 rounded-xs transition-colors"
                      title="Edit Role"
                    >
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleToggleSuspension(user)}
                      className={`p-1.5 rounded-xs transition-colors ${user.isSuspended ? 'text-semantic-success hover:bg-emerald-50' : 'text-semantic-danger hover:bg-rose-50'}`}
                      title={user.isSuspended ? 'Reactivate User' : 'Suspend User'}
                    >
                      <Prohibit className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Role Edit Modal */}
      <Dialog
        isOpen={!!selectedUser}
        onClose={() => setSelectedUser(null)}
        title={`Change Role: ${selectedUser?.fullName}`}
        description="Update role-based access permissions."
      >
        <form onSubmit={handleRoleChange} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Select User Role</label>
            <select
              value={newRole}
              onChange={e => setNewRole(e.target.value as UserRole)}
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            >
              <option value="Student">Student (Primary User)</option>
              <option value="CareerCounselor">Career Counselor</option>
              <option value="UniversityAdmin">University Administrator</option>
              <option value="SystemAdmin">System Administrator</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => setSelectedUser(null)}>
              Cancel
            </Button>
            <Button type="submit">
              Update Role
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
