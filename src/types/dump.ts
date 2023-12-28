export type Dump = {
  version: string;
  mode: string;
  interval: number;
  samples: number;
  gc_samples: number;
  missed_samples: number;
  metadata: object;
  frames: Record<string, Frame>;
  raw?: number[];
  raw_sample_timestamps?: number[];
  raw_timestamp_deltas?: number[];
};

type Frame = {
  name: string;
  file: string;
  line: number;
  total_samples: number;
  samples: number;
  edges: Record<string, number>;
  lines: Record<string, number[]>;
};
