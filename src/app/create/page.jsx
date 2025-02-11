"use client";

import React from "react";
import Form from "@/components/Form";
import { useRouter } from "next/navigation";

const uri = "http://localhost:3000/api/movie";

const Create = () => {
  const router = useRouter();

  const onSubmitCreate = async (formData) => {
    console.log("Datos capturados del form:" + JSON.stringify(formData));
    const { name, age } = formData;

    try {
      const response = await fetch(uri, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          adult: false,
          backdrop_path: "/dH7ia3vtkYCa3CBvDnvVjqm9uiQ.jpg",
          belongs_to_collection: null,
          budget: 130000000,
          genres: [
            {
              id: 9648,
              name: "Mystery",
            },
            {
              id: 28,
              name: "Action",
            },
            {
              id: 878,
              name: "Science Fiction",
            },
          ],
          homepage: "https://www.warnerbros.com/movies/watchmen/",
          id: 13183,
          imdb_id: "tt0409459",
          origin_country: ["US"],
          original_language: "en",
          original_title: "Watchmen",
          overview:
            "In a gritty and alternate 1985, the glory days of costumed vigilantes have been brought to a close by a government crackdown. But after one of the masked veterans is brutally murdered, an investigation into the killer is initiated. The reunited heroes set out to prevent their own destruction, but in doing so they uncover a sinister plot that puts all of humanity in grave danger.",
          popularity: 103.676,
          poster_path: "/zcCGhnlO4qi8ZqunUHAnYkwUtRX.jpg",
          production_companies: [
            {
              id: 174,
              logo_path: "/zhD3hhtKB5qyv7ZeL4uLpNxgMVU.png",
              name: "Warner Bros. Pictures",
              origin_country: "US",
            },
            {
              id: 4,
              logo_path: "/gz66EfNoYPqHTYI4q9UEN4CbHRc.png",
              name: "Paramount Pictures",
              origin_country: "US",
            },
            {
              id: 923,
              logo_path: "/8M99Dkt23MjQMTTWukq4m5XsEuo.png",
              name: "Legendary Pictures",
              origin_country: "US",
            },
            {
              id: 429,
              logo_path: "/2Tc1P3Ac8M479naPp1kYT3izLS5.png",
              name: "DC",
              origin_country: "US",
            },
            {
              id: 840,
              logo_path: null,
              name: "Lawrence Gordon Productions",
              origin_country: "US",
            },
            {
              id: 214913,
              logo_path: null,
              name: "Lloyd Levin Productions",
              origin_country: "",
            },
          ],
          production_countries: [
            {
              iso_3166_1: "US",
              name: "United States of America",
            },
          ],
          release_date: "2009-03-04",
          revenue: 185258983,
          runtime: 163,
          spoken_languages: [
            {
              english_name: "English",
              iso_639_1: "en",
              name: "English",
            },
          ],
          status: "Released",
          tagline: "Justice is coming to all of us. No matter what we do.",
          title: "Watchmen",
          video: false,
          vote_average: 7.337,
          vote_count: 9065,
          formats: {
            vhs: false,
            dvd: false,
            bluray: false,
          },
        }),
      });
      if (response.ok) {
        router.refresh();
        router.push("/");
      } else {
        throw new Error("Failed to create");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Form onSubmitForm={onSubmitCreate}></Form>
    </div>
  );
};

export default Create;
