import React, { useState } from 'react';
import { useAppSelector } from '@/store';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Badge } from '@/components/common/Badge';
import { Dialog } from '@/components/common/Dialog';
import { Eye, Funnel, MagnifyingGlass, Scroll } from '@phosphor-icons/react';

export const AdminLogs: React.FC = () => {
  const { auditLogs } = useAppSelector(state => state.admin);
  const [search, setSearch] = useState('');
  const [severityFilter, setSeverityFilter] = useState('All');
  const [selectedLog, setSelectedLog] = useState<any | null>(null);

  const filteredLogs = auditLogs.filter(log => {
    const matchesSearch =
      log.userName.toLowerCase().includes(search.toLowerCase()) ||
      log.action.toLowerCase().includes(search.toLowerCase()) ||
      log.module.toLowerCase().includes(search.toLowerCase());
    const matchesSeverity = severityFilter === 'All' || log.severity === severityFilter;
    return matchesSearch && matchesSeverity;
  });

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Audit Logs & Traceability</h1>
            <Badge variant="brand">{auditLogs.length} Events Logged</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Complete operational audit trail for user authentication, API requests, and AI engine triggers.
          </p>
        </div>
      </div>

      {/* Toolbar Funnel */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-card border border-surface-border p-4 rounded-md shadow-subtle">
        <div className="relative w-full max-w-md">
          <MagnifyingGlass className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="MagnifyingGlass by user, action, or module..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-surface-border rounded-sm focus-ring placeholder:text-text-muted"
          />
        </div>

        <div className="flex items-center space-x-2">
          <span className="text-xs font-semibold text-text-secondary">Severity:</span>
          <select
            value={severityFilter}
            onChange={e => setSeverityFilter(e.target.value)}
            className="px-3 py-1.5 text-xs bg-slate-50 border border-surface-border rounded-sm focus-ring font-medium text-text-primary"
          >
            <option>All</option>
            <option>Info</option>
            <option>Warning</option>
            <option>Error</option>
            <option>Critical</option>
          </select>
        </div>
      </div>

      {/* Audit Log Table */}
      <Card className="overflow-hidden p-0">
        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs text-text-secondary">
            <thead className="bg-slate-50 border-b border-surface-border text-text-primary font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Timestamp</th>
                <th className="p-4">User</th>
                <th className="p-4">Action</th>
                <th className="p-4">Module</th>
                <th className="p-4">Severity</th>
                <th className="p-4">IP Address</th>
                <th className="p-4 text-right">Details</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border bg-surface-card">
              {filteredLogs.map(log => (
                <tr key={log.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-mono">{log.timestamp}</td>
                  <td className="p-4 font-semibold text-text-primary">{log.userName}</td>
                  <td className="p-4 font-mono text-brand-600 font-medium">{log.action}</td>
                  <td className="p-4">{log.module}</td>
                  <td className="p-4">
                    <Badge
                      variant={
                        log.severity === 'Info'
                          ? 'info'
                          : log.severity === 'Warning'
                          ? 'warning'
                          : 'danger'
                      }
                      size="sm"
                    >
                      {log.severity}
                    </Badge>
                  </td>
                  <td className="p-4 font-mono">{log.ipAddress}</td>
                  <td className="p-4 text-right">
                    <button
                      onClick={() => setSelectedLog(log)}
                      className="p-1 text-text-secondary hover:text-brand-600 rounded-xs"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Detail Dialog */}
      <Dialog
        isOpen={!!selectedLog}
        onClose={() => setSelectedLog(null)}
        title={`Log Inspector: ${selectedLog?.id}`}
      >
        <div className="space-y-3 font-mono text-xs p-4 bg-slate-900 text-slate-200 rounded-sm overflow-x-auto">
          <p><span className="text-slate-500">timestamp:</span> "{selectedLog?.timestamp}"</p>
          <p><span className="text-slate-500">user:</span> "{selectedLog?.userName} ({selectedLog?.userEmail})"</p>
          <p><span className="text-slate-500">action:</span> "{selectedLog?.action}"</p>
          <p><span className="text-slate-500">module:</span> "{selectedLog?.module}"</p>
          <p><span className="text-slate-500">severity:</span> "{selectedLog?.severity}"</p>
          <p><span className="text-slate-500">ip:</span> "{selectedLog?.ipAddress}"</p>
        </div>
      </Dialog>
    </div>
  );
};
