export type Category = 'Starters' | 'Mains' | 'Desserts';

export type MenuItem = {
  name: string;
  price: string;
  description: string;
  category: Category;
};

export type RootStackParamList = {
  Menu: undefined;
  AddItem: undefined;
};