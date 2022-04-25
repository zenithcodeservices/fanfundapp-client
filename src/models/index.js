// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Blog, Post, Candidate, Artist, Drop, Tier } = initSchema(schema);

export {
  Blog,
  Post,
  Candidate,
  Artist,
  Drop,
  Tier
};