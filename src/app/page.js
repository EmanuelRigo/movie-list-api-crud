import { MovieList } from "@/components/list/MovieList";
import styles from "./page.module.css";
import Show from "@/components/Show";

export default function Home() {
  return (
    <div className="h-screen w-screen flex items-center">
      <div
        className="container rounded-lg bg-gray-900 mx-auto grid lg:grid-cols-3 gap3 h-full lg:h-5/6 overflow-auto"
        style={{ gridTemplateColumns: "1fr 1fr 25rem" }}
      >
        <div className="h-full flex flex-col justify-between p-4 mb-8 lg:mb-auto">
          <MovieList></MovieList>
        </div>
      </div>
    </div>
  );
}
