import React, { useState } from 'react';
import { useAppSelector, useAppDispatch } from '@/store';
import { addSkill, deleteSkill, updateSkill } from '@/store/slices/skillSlice';
import { Skill, SkillCategory, SkillProficiency } from '@/types';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/common/Card';
import { Button } from '@/components/common/Button';
import { Badge } from '@/components/common/Badge';
import { Dialog } from '@/components/common/Dialog';
import { toast } from 'sonner';
import {
  Boxes,
  Plus,
  Search,
  Trash2,
  Edit2,
  CheckCircle2,
  Tag,
  Filter
} from 'lucide-react';

export const SkillsPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { items: skills } = useAppSelector(state => state.skills);

  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  // Form State for New Skill
  const [newSkillName, setNewSkillName] = useState('');
  const [newSkillCategory, setNewSkillCategory] = useState<SkillCategory>('Programming Languages');
  const [newSkillProficiency, setNewSkillProficiency] = useState<SkillProficiency>('Intermediate');

  const categories: SkillCategory[] = [
    'Programming Languages',
    'Frameworks',
    'Databases',
    'Cloud Platforms',
    'Tools & DevOps',
    'Soft Skills'
  ];

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleAddSkill = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newSkillName.trim()) return;

    dispatch(
      addSkill({
        name: newSkillName,
        category: newSkillCategory,
        proficiency: newSkillProficiency,
        yearsOfExperience: 1,
        isExtractedFromResume: false
      })
    );

    toast.success(`Skill "${newSkillName}" added successfully.`);
    setNewSkillName('');
    setIsAddModalOpen(false);
  };

  const handleDelete = (id: string, name: string) => {
    if (window.confirm(`Are you sure you want to remove ${name} from your skills?`)) {
      dispatch(deleteSkill(id));
      toast.info(`Removed ${name}`);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-surface-card border border-surface-border p-6 rounded-md shadow-subtle">
        <div>
          <h1 className="text-2xl font-bold text-text-primary tracking-tight">Skills Inventory</h1>
          <p className="text-xs text-text-secondary mt-1">
            Manage your verified technical competencies and soft skills.
          </p>
        </div>

        <Button size="sm" onClick={() => setIsAddModalOpen(true)} leftIcon={<Plus className="w-4 h-4" />}>
          Add Custom Skill
        </Button>
      </div>

      {/* Toolbar: Search & Category Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-surface-card border border-surface-border p-4 rounded-md shadow-subtle">
        <div className="relative flex-1 w-full max-w-md">
          <Search className="w-4 h-4 text-text-muted absolute left-3 top-2.5" />
          <input
            type="text"
            placeholder="Search skills (e.g. React, Docker, Python)..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="w-full pl-9 pr-3 py-1.5 text-sm bg-slate-50 border border-surface-border rounded-sm focus-ring placeholder:text-text-muted"
          />
        </div>

        {/* Category Pills */}
        <div className="flex items-center space-x-1.5 overflow-x-auto w-full sm:w-auto pb-1 sm:pb-0">
          <button
            onClick={() => setSelectedCategory('All')}
            className={`px-3 py-1 text-xs font-medium rounded-full transition-colors ${
              selectedCategory === 'All' ? 'bg-brand-600 text-white' : 'bg-slate-100 text-text-secondary hover:bg-slate-200'
            }`}
          >
            All ({skills.length})
          </button>
          {categories.map(cat => {
            const count = skills.filter(s => s.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-colors whitespace-nowrap ${
                  selectedCategory === cat ? 'bg-brand-600 text-white' : 'bg-slate-100 text-text-secondary hover:bg-slate-200'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid Grouped by Category */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.length === 0 ? (
          <div className="col-span-full text-center py-12 bg-surface-card border border-surface-border rounded-md">
            <Boxes className="w-8 h-8 text-text-muted mx-auto mb-2" />
            <p className="text-sm font-semibold text-text-primary">No skills found</p>
            <p className="text-xs text-text-secondary">Try adjusting your search query or filter.</p>
          </div>
        ) : (
          filteredSkills.map(skill => (
            <Card key={skill.id} hoverable className="flex flex-col justify-between space-y-3">
              <div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-base font-bold text-text-primary">{skill.name}</h3>
                    <span className="text-xs text-text-secondary font-medium">{skill.category}</span>
                  </div>
                  <Badge variant={skill.isExtractedFromResume ? 'brand' : 'neutral'} size="sm">
                    {skill.isExtractedFromResume ? 'Parsed CV' : 'Manual'}
                  </Badge>
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <span className="text-xs text-text-muted">Proficiency:</span>
                  <Badge
                    variant={
                      skill.proficiency === 'Expert'
                        ? 'success'
                        : skill.proficiency === 'Advanced'
                        ? 'info'
                        : skill.proficiency === 'Intermediate'
                        ? 'warning'
                        : 'neutral'
                    }
                  >
                    {skill.proficiency}
                  </Badge>
                </div>
              </div>

              <div className="pt-3 border-t border-surface-border flex items-center justify-between text-xs text-text-muted">
                <span>Updated: {skill.lastUpdated}</span>
                <button
                  onClick={() => handleDelete(skill.id, skill.name)}
                  className="p-1 text-semantic-danger hover:bg-rose-50 rounded-xs transition-colors"
                  title="Remove skill"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </Card>
          ))
        )}
      </div>

      {/* Add Skill Modal */}
      <Dialog
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        title="Add Technical Skill"
        description="Add a verified skill to your candidate profile for gap analysis."
      >
        <form onSubmit={handleAddSkill} className="space-y-4">
          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Skill Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Docker, Microservices, Python"
              value={newSkillName}
              onChange={e => setNewSkillName(e.target.value)}
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            />
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Category</label>
            <select
              value={newSkillCategory}
              onChange={e => setNewSkillCategory(e.target.value as SkillCategory)}
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            >
              {categories.map(c => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          <div className="space-y-1">
            <label className="text-xs font-semibold text-text-primary block">Proficiency Level</label>
            <select
              value={newSkillProficiency}
              onChange={e => setNewSkillProficiency(e.target.value as SkillProficiency)}
              className="w-full px-3 py-2 text-sm bg-surface-card border border-surface-border rounded-sm focus-ring"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>

          <div className="flex justify-end gap-2 pt-2">
            <Button type="button" variant="outline" onClick={() => setIsAddModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              Save Skill
            </Button>
          </div>
        </form>
      </Dialog>
    </div>
  );
};
