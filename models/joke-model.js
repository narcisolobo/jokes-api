import { model, Schema } from 'mongoose';

const jokeSchema = new Schema(
  {
    setup: {
      type: String,
      required: [true, 'Setup cannot be blank.'],
    },
    punchline: {
      type: String,
      required: [true, 'Punchline cannot be blank.'],
    },
  },
  { timestamps: true }
);

const Joke = model('Joke', jokeSchema);
export default Joke;
