export interface Join {
  type: 'INNER' | 'LEFT' | 'RIGHT' | 'FULL' | 'AND';
  table: string;
  alias?: string;
  on: string;
}
