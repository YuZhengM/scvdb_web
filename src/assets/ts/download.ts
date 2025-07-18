import { TableHead } from '@/service/model/components/table';
import { linkGeo, linkSampleDetail, linkTraitDetail } from '@/assets/ts/statusUtil';

// 表信息
export const DOWNLOAD_SAMPLE_DESCRIPTION: Array<TableHead> = [
  { column: 'sampleId', title: 'Sample ID', href: (row: any) => linkSampleDetail(row.sampleId) },
  { column: 'tissueType', title: 'Tissue type' },
  { column: 'healthTypeDescription', title: 'Health type description' },
  { column: 'gseId', title: 'GSE ID', href: (row: any) => linkGeo(row.gseId) }
];

// 表信息
export const DOWNLOAD_TRAIT_DESCRIPTION: Array<TableHead> = [
  { column: 'traitId', title: 'Trait ID', database: 'f_trait_id', href: (row: any) => linkTraitDetail(row.traitId) },
  { column: 'type', title: 'Type', database: 'f_type' },
  { column: 'traitAbbr', title: 'Trait abbreviation', database: 'f_trait_abbr' }
];
