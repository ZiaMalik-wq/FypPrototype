import React, { useState, useRef } from 'react';
import { cn, formatBytes } from '@/lib/utils';
import { ArrowClockwise, CheckCircle, CloudArrowUp, FileText, WarningCircle, X } from '@phosphor-icons/react';
import { Button } from '../common/Button';

export interface UploadZoneProps {
  onFileUpload: (file: File) => void;
  maxSizeMB?: number;
  acceptedFormats?: string[];
  isProcessing?: boolean;
  currentFileName?: string;
  currentFileSize?: number;
}

export const UploadZone: React.FC<UploadZoneProps> = ({
  onFileUpload,
  maxSizeMB = 20,
  acceptedFormats = ['.pdf'],
  isProcessing = false,
  currentFileName,
  currentFileSize,
}) => {
  const [isDragOver, setIsDragOver] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (file: File | null) => {
    setError(null);
    if (!file) return;

    const fileExt = '.' + file.name.split('.').pop()?.toLowerCase();
    if (!acceptedFormats.includes(fileExt)) {
      setError(`Invalid file format. Only ${acceptedFormats.join(', ')} files are allowed.`);
      return;
    }

    if (file.size > maxSizeMB * 1024 * 1024) {
      setError(`File is too large. Maximum allowed size is ${maxSizeMB}MB.`);
      return;
    }

    setSelectedFile(file);
    onFileUpload(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragOver(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFileChange(e.dataTransfer.files[0]);
    }
  };

  return (
    <div className="w-full space-y-4">
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragOver(true); }}
        onDragLeave={() => setIsDragOver(false)}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
        className={cn(
          'relative flex flex-col items-center justify-center p-8 border-2 border-dashed rounded-md cursor-pointer transition-all duration-150',
          isDragOver ? 'border-brand-600 bg-brand-50/50' : 'border-surface-border bg-surface-card hover:border-slate-300 hover:bg-slate-50/50',
          isProcessing && 'pointer-events-none opacity-80'
        )}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept={acceptedFormats.join(',')}
          className="hidden"
          onChange={(e) => handleFileChange(e.target.files?.[0] || null)}
        />

        <div className="w-12 h-12 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center mb-3 shadow-subtle">
          <CloudArrowUp className="w-6 h-6" />
        </div>

        <h4 className="text-base font-semibold text-text-primary">
          Click to upload or drag & drop resume
        </h4>

        <p className="text-xs text-text-secondary mt-1">
          PDF format supported (Max file size: {maxSizeMB}MB)
        </p>

        {isProcessing && (
          <div className="mt-4 flex items-center gap-2 text-xs text-brand-600 font-medium bg-brand-50 px-3 py-1.5 rounded-full">
            <ArrowClockwise className="w-3.5 h-3.5 animate-spin" />
            AI Extracting skills from resume...
          </div>
        )}
      </div>

      {error && (
        <div className="flex items-center gap-2 text-xs font-medium text-semantic-danger bg-rose-50 border border-rose-200 p-3 rounded-sm">
          <WarningCircle className="w-4 h-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      {(selectedFile || currentFileName) && !error && (
        <div className="flex items-center justify-between p-4 bg-surface-card border border-surface-border rounded-sm shadow-subtle">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-sm bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <p className="text-sm font-semibold text-text-primary truncate max-w-xs">
                {selectedFile ? selectedFile.name : currentFileName}
              </p>
              <p className="text-xs text-text-secondary">
                {selectedFile ? formatBytes(selectedFile.size) : currentFileSize ? formatBytes(currentFileSize) : 'PDF Document'}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 text-xs font-medium text-semantic-success bg-emerald-50 px-2 py-0.5 rounded-full">
              <CheckCircle className="w-3.5 h-3.5" />
              Uploaded & Parsed
            </span>
          </div>
        </div>
      )}
    </div>
  );
};
