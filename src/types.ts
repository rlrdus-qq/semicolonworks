export interface LeadFormData {
  parentName: string;
  parentPhone: string;
  studentGrade: string;
  programs: string[];
  notes?: string;
  createdAt?: string;
}

export interface ProofItem {
  id: string;
  tag: string;
  tagColor: string;
  title: string;
  description: string;
  imageUrl: string;
}

