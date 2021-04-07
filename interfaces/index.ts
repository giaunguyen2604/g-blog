interface DiaryItem {
  title: string;
  createAt: string;
  updateAt: string;
  content: string;
  color: string;
}

interface ItemDiaryProp {
  diary: DiaryItem;
}

export type { DiaryItem, ItemDiaryProp };
