import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





export declare class Blog {
  readonly id: string;
  readonly name: string;
  readonly posts?: Post[];
  constructor(init: ModelInit<Blog>);
  static copyOf(source: Blog, mutator: (draft: MutableModel<Blog>) => MutableModel<Blog> | void): Blog;
}

export declare class Post {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly postcontent: string;
  readonly blog?: Blog;
  constructor(init: ModelInit<Post>);
  static copyOf(source: Post, mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void): Post;
}

export declare class Candidate {
  readonly id: string;
  readonly name: string;
  readonly content: string;
  readonly email: string;
  constructor(init: ModelInit<Candidate>);
  static copyOf(source: Candidate, mutator: (draft: MutableModel<Candidate>) => MutableModel<Candidate> | void): Candidate;
}

export declare class Artist {
  readonly id: string;
  readonly name: string;
  readonly posts?: Drop[];
  constructor(init: ModelInit<Artist>);
  static copyOf(source: Artist, mutator: (draft: MutableModel<Artist>) => MutableModel<Artist> | void): Artist;
}

export declare class Drop {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly postcontent: string;
  readonly dropDateTime: string;
  readonly streamingPercentage: number;
  readonly isSoldOut: boolean;
  readonly artist?: Artist;
  constructor(init: ModelInit<Drop>);
  static copyOf(source: Drop, mutator: (draft: MutableModel<Drop>) => MutableModel<Drop> | void): Drop;
}

export declare class Tier {
  readonly id: string;
  readonly title: string;
  readonly perkDescription: string[];
  readonly collectorAddresses?: string[];
  readonly priceUSD: string;
  readonly isSoldOut: boolean;
  readonly percentageOwnership: number;
  readonly numberOfTokens: number;
  readonly dropID: string;
  readonly drop?: Drop;
  constructor(init: ModelInit<Tier>);
  static copyOf(source: Tier, mutator: (draft: MutableModel<Tier>) => MutableModel<Tier> | void): Tier;
}