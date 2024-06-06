export interface Where {
  field: string;
  typeCondition: '=' | 'LIKE';
  condition: string;
}
