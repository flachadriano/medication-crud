export interface Medication {
  id: number | string;
  name: string;
  dosage: string;
  selected?: boolean;
  due_date: string | Date;
}
