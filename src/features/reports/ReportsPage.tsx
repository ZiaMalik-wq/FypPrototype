import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { deleteReport, setSearchQuery } from '@/store/slices/reportSlice';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Dialog } from '@/components/common/Dialog';
import { EmptyState } from '@/components/common/EmptyState';
import { toast } from 'sonner';
import { CheckCircle, Download, Eye, FileCsv, FileText, MagnifyingGlass, Plus, Trash } from '@phosphor-icons/react';

export const ReportsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: reports, searchQuery } = useAppSelector(state => state.reports);
  const [selectedReport, setSelectedReport] = useState<any | null>(null);

  const filteredReports = reports.filter(r =>
    r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    r.type.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleDelete = (id: string, title: string) => {
    if (window.confirm(`Delete report "${title}"?`)) {
      dispatch(deleteReport(id));
      toast.info(`Deleted ${title}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <div className="flex items-center space-x-2">
            <h1 className="text-2xl font-bold text-text-primary tracking-tight">Reports & PDF Exports</h1>
            <Badge variant="brand">Archive Library</Badge>
          </div>
          <p className="text-xs text-text-secondary mt-1">
            Access historical analysis reports, customized roadmaps, and labor market summaries.
          </p>
        </div>

        <Button
          size="sm"
          onClick={() => toast.success('New report generated and added to library.')}
          leftIcon={<Plus className="w-4 h-4" />}
        >
          Generate New Report
        </Button>
      </div>

      {/* Toolbar MagnifyingGlass */}
      <div className="flex items-center justify-between bg-surface-card border border-surface-border p-4 rounded-md shadow-subtle">
        <div className="relative w-full max-w-md">
          <MagnifyingGlass className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="MagnifyingGlass reports by title or type..."
            value={searchQuery}
            onChange={e => dispatch(setSearchQuery(e.target.value))}
            className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-surface-border rounded-sm focus-ring placeholder:text-text-muted"
          />
        </div>
      </div>

      {/* Reports Enterprise Table */}
      <Card className="overflow-hidden p-0">
        {filteredReports.length === 0 ? (
          <div className="p-6">
            <EmptyState
              illustration="reports"
              title="No reports found"
              description="Generate a new report or adjust your search filter."
              actionText="Generate New Report"
              onAction={() => toast.success('New report generated and added to library.')}
            />
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-text-secondary">
            <thead className="bg-slate-50 border-b border-surface-border text-text-primary font-semibold uppercase tracking-wider text-[11px]">
              <tr>
                <th className="p-4">Report Title</th>
                <th className="p-4">Type</th>
                <th className="p-4">Created Date</th>
                <th className="p-4">Skill Match Index</th>
                <th className="p-4">File Size</th>
                <th className="p-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-surface-border bg-surface-card">
              {filteredReports.map(report => (
                <tr key={report.id} className="hover:bg-slate-50/80 transition-colors">
                  <td className="p-4 font-semibold text-text-primary flex items-center space-x-2">
                    <FileText className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{report.title}</span>
                  </td>
                  <td className="p-4">
                    <Badge variant="neutral" size="sm">{report.type}</Badge>
                  </td>
                  <td className="p-4">{report.createdDate}</td>
                  <td className="p-4">
                    <span className="font-bold text-semantic-success">{report.matchScore}%</span>
                  </td>
                  <td className="p-4">{report.fileSize}</td>
                  <td className="p-4 text-right space-x-2">
                    <button
                      onClick={() => setSelectedReport(report)}
                      className="p-1.5 text-text-secondary hover:text-brand-600 hover:bg-brand-50 rounded-xs transition-colors"
                      title="Preview Report"
                    >
                      <Eye className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => toast.success(`Downloading ${report.title}...`)}
                      className="p-1.5 text-text-secondary hover:text-brand-600 hover:bg-brand-50 rounded-xs transition-colors"
                      title="Download PDF"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleDelete(report.id, report.title)}
                      className="p-1.5 text-semantic-danger hover:bg-rose-50 rounded-xs transition-colors"
                      title="Delete Report"
                    >
                      <Trash className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        )}
      </Card>

      {/* Report Preview Modal */}
      <Dialog
        isOpen={!!selectedReport}
        onClose={() => setSelectedReport(null)}
        title={`Report Viewer: ${selectedReport?.title}`}
        description="Enterprise Skill Gap Analysis Summary"
      >
        <div className="space-y-4">
          <div className="p-4 bg-slate-50 border border-surface-border rounded-sm space-y-2">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-text-primary">{selectedReport?.type}</span>
              <Badge variant="success">Match Score: {selectedReport?.matchScore}%</Badge>
            </div>
            <p className="text-xs text-text-secondary">
              Generated on {selectedReport?.createdDate} • File Size: {selectedReport?.fileSize}
            </p>
          </div>

          <div className="p-4 bg-white border border-surface-border rounded-sm text-xs space-y-2">
            <h5 className="font-semibold text-text-primary">Executive Summary Snapshot</h5>
            <p className="text-text-secondary leading-relaxed">
              Candidate possesses strong competency in client-side React & TypeScript development. High priority gaps identified in Docker containerization and ASP.NET Microservices architecture.
            </p>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button variant="outline" onClick={() => setSelectedReport(null)}>
              Close
            </Button>
            <Button
              onClick={() => {
                toast.success(`Downloading ${selectedReport?.title}...`);
                setSelectedReport(null);
              }}
              leftIcon={<Download className="w-4 h-4" />}
            >
              Download PDF
            </Button>
          </div>
        </div>
      </Dialog>
    </div>
  );
};
