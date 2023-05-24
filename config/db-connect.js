/**
 * The connect function from mongoose is placed inside of
 * an async function to handle any connection errors. I
 * prefer the async/await syntax. It's more readable, looks
 * like the synchronous code that students are used to in
 * algos, and benefits just from having the word, "try" in
 * the syntax. It's easily explainable to the beginner.
 */

import { connect } from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();
const MONGODB_URI = process.env.MONGODB_URI;

async function dbConnect() {
  try {
    await connect(MONGODB_URI, {
      dbName: 'jokesDb',
    });
    console.log('DB connection successful.');
  } catch (error) {
    console.log('DB connection unsuccessful.');
    throw error;
  }
}

export default dbConnect;
