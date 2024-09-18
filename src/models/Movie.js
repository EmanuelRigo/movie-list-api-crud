import mongoose from "mongoose";

const movieSchema = new mongoose.Schema(
  {
    adult: {
      type: Boolean,
      default: false,
    },
    backdrop_path: {
      type: String,
    },
    belongs_to_collection: {
      id: Number,
      name: String,
      poster_path: String,
      backdrop_path: String,
    },
    budget: {
      type: Number,
      required: true,
    },
    genres: [
      {
        id: Number,
        name: String,
      },
    ],
    homepage: String,
    id: {
      type: Number,
      required: true,
    },
    imdb_id: String,
    origin_country: [String],
    original_language: {
      type: String,
      required: true,
    },
    original_title: {
      type: String,
      required: true,
    },
    overview: String,
    popularity: Number,
    poster_path: String,
    production_companies: [
      {
        id: Number,
        logo_path: String,
        name: {
          type: String,
          required: true,
        },
        origin_country: String,
      },
    ],
    production_countries: [
      {
        iso_3166_1: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    release_date: {
      type: Date,
    },
    revenue: Number,
    runtime: Number,
    spoken_languages: [
      {
        english_name: String,
        iso_639_1: {
          type: String,
          required: true,
        },
        name: {
          type: String,
          required: true,
        },
      },
    ],
    status: String,
    tagline: String,
    title: {
      type: String,
      required: true,
    },
    video: {
      type: Boolean,
      default: false,
    },
    vote_average: Number,
    vote_count: Number,
    formats: {
      vhs: {
        type: Boolean,
        default: false,
      },
      dvd: {
        type: Boolean,
        default: true,
      },
      bluray: {
        type: Boolean,
        default: true,
      },
    },
  },
  { timestamps: true, versionKey: false }
);

// Check if the model is already compiled or create a new one
export const MovieModel =
  mongoose?.models?.Movie || mongoose.model("Movie", movieSchema);
