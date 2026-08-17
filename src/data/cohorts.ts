import { site } from './site';

export type CohortMember = {
  name: string;
  /** Home institution, shown under the name. */
  institution?: string;
  /** Project id from ./projects, once assignments are made. */
  project?: number;
  /** Path to a portrait under public/, e.g. '/cohort/2027/name.jpg'. */
  photo?: string;
};

export type Cohort = {
  year: number;
  /** Shown next to the year while the cohort is not yet filled in. */
  status: string;
  members: CohortMember[];
};

/** Slots rendered per cohort; empty ones show a placeholder portrait. */
export const cohortSize = site.cohortSize;

export const cohorts: Cohort[] = [
  { year: 2027, status: 'To be announced', members: [] },
  { year: 2028, status: 'To be announced', members: [] },
  { year: 2029, status: 'To be announced', members: [] },
];
