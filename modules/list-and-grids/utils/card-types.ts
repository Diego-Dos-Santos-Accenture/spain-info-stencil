export interface CarouselItem {
  id: string;
  title: string;
  image?: string;
  description?: string;
  subtitle?: string;
  type: 'intro' | 'image' | 'journey' | 'profile';
  actionText?: string;
  details?: {
    location?: string;
    duration?: string;
    distance?: string;
  };
}

export interface RowData {
  title?: string;
  rowType: 'intro-with-cards' | 'photo-list' | 'journey-cards' | 'masonry-grid';
  items: CarouselItem[];
}


