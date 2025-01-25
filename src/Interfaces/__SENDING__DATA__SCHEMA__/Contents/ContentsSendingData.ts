export type T_TagType = 6 | 5 | 4 | 3;

export type T_SourceType = 0 | 1 | 2;

export type T_ContentType = 0 | 1 | 2;

export type T_SendingDataForGettingContents = {
  excelProperties: [];
  skip: number;
  take: number;
  fromDate: string;
  toDate: string;
  exportType: number;
  contentSearch: string;
  visitCountMax: number;
  visitCountMin: number;
  sourceTypeId: T_SourceType;
  tagList: T_TagType[];
  contentType: T_ContentType;
  isActive: true;
  includeFile: true;
};
