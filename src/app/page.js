import { MovieList } from "@/components/list/MovieList";
import { FooterMainMenu } from "@/components/menu/FooterMainMenu";
import styles from "./page.module.css";
import Show from "@/components/Show";
import CardMovieViewer from "@/components/movie-viewer/CardMovieViewer";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center">
      <div
        className="container rounded-lg bg-gray-800 mx-auto grid lg:grid-cols-3 gap3 h-full lg:h-5/6 overflow-auto"
        style={{ gridTemplateColumns: "1fr 1fr 25rem" }}
      >
        <div className="h-full flex flex-col justify-between p-4 mb-8 lg:mb-auto">
          <FooterMainMenu></FooterMainMenu>
        </div>
        <div className="block h-full">
          <MovieList></MovieList>
        </div>
        <div className="h-full">
          <CardMovieViewer></CardMovieViewer>
        </div>
      </div>
    </div>
  );
}
