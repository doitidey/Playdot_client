export interface SelectArray {
  title: string;
  text: string;
  id: number;
}

export interface SelectProps {
  activeTab: number;
  onSelectClick: (index: number) => void;
}
