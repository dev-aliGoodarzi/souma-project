interface I_Tag {
  tagId: number;
  title: string;
}

export interface I_Content {
  id: number;
  title: string;
  brief: string;
  fileContent: string;
  sourceTypeId: number;
  sourceTypeTitle: string;
  contentTypeId: number;
  contentTypeTitle: string;
  sourceUrl: null | string;
  tages: I_Tag[];
  publishDate: string;
  visitCount: number;
  isActive: boolean;
  contentAttachmentId: string;
}
